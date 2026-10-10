//! Dino Battle: paid, time-boxed Chrome-Dino-style competitions on Solana.
//!
//! Flow
//!   1. Deployer calls `initialize` once (sets admin, website wallet, game server).
//!   2. Anyone calls `create_competition` (entry fee, start/end time, max players).
//!   3. Players call `join_competition` BEFORE start_time. Wallet balance is checked,
//!      then the entry fee moves into the competition account (escrow).
//!   4. If at start_time no players joined -> anyone calls `cancel_competition`,
//!      and every player calls `refund`.
//!   5. While the competition runs, the trusted game server calls `submit_score`.
//!      The on-chain cumulative top-25 leaderboard is maintained automatically.
//!   6. After end_time anyone calls `finalize_competition`.
//!   7. Winners call `claim`. Admin calls `withdraw_admin_share`,
//!      website wallet calls `withdraw_website_share`.
//!
//! Payout of the pool (basis points, 10_000 = 100%):
//!   rank 1        30%
//!   rank 2        20%
//!   rank 3        10%
//!   rank 4..=10   20% total, split equally (7 players)
//!   rank 11..=25  10% total, split equally (15 players)
//!   website        1%
//!   deployer/admin 9% (+ any rounding dust)

use anchor_lang::prelude::*;
use anchor_lang::system_program::{self, Transfer};

use crate::program::DinoBattle;

declare_id!("9hvmbZQU8scDSykiHEwV2j6t4GqJLwEEcm86KYzPUBNn");

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

pub const MIN_PLAYERS: u32 = 1;
pub const MAX_PLAYERS: u32 = 100;
pub const MAX_DURATION_SECS: i64 = 60 * 60;
pub const LEADERBOARD_SIZE: usize = 25;
pub const BPS_DENOM: u128 = 10_000;

pub const FIRST_BPS: u128 = 3_000; // 30%
pub const SECOND_BPS: u128 = 2_000; // 20%
pub const THIRD_BPS: u128 = 1_000; // 10%
pub const GROUP_A_BPS: u128 = 2_000; // ranks 4..=10  (7 players)  20%
pub const GROUP_B_BPS: u128 = 1_000; // ranks 11..=25 (15 players) 10%
pub const WEBSITE_BPS: u128 = 100; // 1%
// admin gets the remaining 9% + dust

pub const GROUP_A_COUNT: u128 = 7;
pub const GROUP_B_COUNT: u128 = 15;

/// Players submit their browser-aggregated final score during this post-game window.
pub const FINAL_SCORE_WINDOW_SECS: i64 = 60;
/// Legacy game-server score endpoint accepts scores only through end_time.
pub const SCORE_GRACE_SECS: i64 = 0;

// ---------------------------------------------------------------------------
// Program
// ---------------------------------------------------------------------------

#[program]
pub mod dino_battle {
    use super::*;

    /// One-time setup. Only the program's upgrade authority (the deployer) can call it.
    pub fn initialize(
        ctx: Context<Initialize>,
        website_wallet: Pubkey,
        game_server: Pubkey,
    ) -> Result<()> {
        let config = &mut ctx.accounts.config;
        config.authority = ctx.accounts.authority.key();
        config.website_wallet = website_wallet;
        config.game_server = game_server;
        config.bump = ctx.bumps.config;
        Ok(())
    }

    /// Admin can rotate the website wallet / game server key.
    pub fn update_config(
        ctx: Context<UpdateConfig>,
        website_wallet: Pubkey,
        game_server: Pubkey,
    ) -> Result<()> {
        let config = &mut ctx.accounts.config;
        config.website_wallet = website_wallet;
        config.game_server = game_server;
        Ok(())
    }

    /// Anyone can create a competition.
    pub fn create_competition(
        ctx: Context<CreateCompetition>,
        id: u64,
        entry_fee: u64,
        start_time: i64,
        end_time: i64,
        max_players: u32,
    ) -> Result<()> {
        let now = Clock::get()?.unix_timestamp;
        require!(entry_fee > 0, DinoError::InvalidEntryFee);
        require!(start_time > now, DinoError::InvalidTimes);
        require!(end_time > start_time, DinoError::InvalidTimes);
        require!(
            end_time
                .checked_sub(start_time)
                .ok_or(DinoError::MathOverflow)?
                <= MAX_DURATION_SECS,
            DinoError::DurationTooLong
        );
        require!(max_players >= MIN_PLAYERS, DinoError::MaxPlayersTooLow);
        require!(max_players <= MAX_PLAYERS, DinoError::MaxPlayersTooHigh);

        let c = &mut ctx.accounts.competition;
        c.creator = ctx.accounts.creator.key();
        c.id = id;
        c.entry_fee = entry_fee;
        c.start_time = start_time;
        c.end_time = end_time;
        c.max_players = max_players;
        c.player_count = 0;
        c.status = Status::Open;
        c.admin_share = 0;
        c.website_share = 0;
        c.admin_withdrawn = false;
        c.website_withdrawn = false;
        c.leaderboard = Vec::new();
        c.bump = ctx.bumps.competition;
        Ok(())
    }

    /// Check balance, pay the entry fee, register as participant.
    /// Only possible before the competition starts.
    pub fn join_competition(ctx: Context<JoinCompetition>) -> Result<()> {
        let now = Clock::get()?.unix_timestamp;
        let c = &mut ctx.accounts.competition;

        require!(c.status == Status::Open, DinoError::NotOpen);
        require!(now < c.start_time, DinoError::JoinClosed);
        require!(
            c.player_count < c.max_players.min(MAX_PLAYERS),
            DinoError::CompetitionFull
        );

        // 1) wallet balance check (participant rent was already deducted by `init`)
        require!(
            ctx.accounts.player.lamports() >= c.entry_fee,
            DinoError::InsufficientBalance
        );

        // 2) pay the entry fee into the competition escrow
        system_program::transfer(
            CpiContext::new(
                ctx.accounts.system_program.to_account_info(),
                Transfer {
                    from: ctx.accounts.player.to_account_info(),
                    to: c.to_account_info(),
                },
            ),
            c.entry_fee,
        )?;

        // 3) register
        let p = &mut ctx.accounts.participant;
        p.competition = c.key();
        p.player = ctx.accounts.player.key();
        p.best_score = 0;
        p.bump = ctx.bumps.participant;

        c.player_count = c.player_count.checked_add(1).ok_or(DinoError::MathOverflow)?;
        upsert_leaderboard(&mut c.leaderboard, p.player, 0);
        Ok(())
    }

    /// If the start time passed and there are fewer than 1 player, the
    /// competition is cancelled (anyone can trigger it). Players then `refund`.
    pub fn cancel_competition(ctx: Context<CancelCompetition>) -> Result<()> {
        let now = Clock::get()?.unix_timestamp;
        let c = &mut ctx.accounts.competition;
        require!(c.status == Status::Open, DinoError::NotOpen);
        require!(now >= c.start_time, DinoError::NotStartedYet);
        require!(c.player_count < MIN_PLAYERS, DinoError::EnoughPlayers);
        c.status = Status::Cancelled;
        Ok(())
    }

    /// Return the entry fee (and participant rent) of a cancelled competition.
    pub fn refund(ctx: Context<Refund>) -> Result<()> {
        let c = &ctx.accounts.competition;
        require!(c.status == Status::Cancelled, DinoError::NotCancelled);
        move_lamports(
            &c.to_account_info(),
            &ctx.accounts.player.to_account_info(),
            c.entry_fee,
        )
        // participant account is closed (rent -> player) by the `close` constraint
    }

    /// Add a verified run score to the player's cumulative competition score.
    /// Every successful call adds one run to the on-chain total.
    pub fn submit_score(ctx: Context<SubmitScore>, score: u64) -> Result<()> {
        let now = Clock::get()?.unix_timestamp;
        let c = &mut ctx.accounts.competition;

        require!(c.status == Status::Open, DinoError::NotOpen);
        require!(c.player_count >= MIN_PLAYERS, DinoError::NotEnoughPlayers);
        require!(now >= c.start_time, DinoError::NotStartedYet);
        require!(
            now <= c.end_time.checked_add(SCORE_GRACE_SECS).ok_or(DinoError::MathOverflow)?,
            DinoError::ScoringClosed
        );

        let p = &mut ctx.accounts.participant;
        p.best_score = p.best_score.checked_add(score).ok_or(DinoError::MathOverflow)?;
        upsert_leaderboard(&mut c.leaderboard, p.player, p.best_score);
        Ok(())
    }

    /// Store a player's final browser-aggregated score after the game ends.
    /// Re-submitting replaces the total, so retries cannot double-count it.
    pub fn submit_final_score(ctx: Context<SubmitFinalScore>, total_score: u64) -> Result<()> {
        let now = Clock::get()?.unix_timestamp;
        let c = &mut ctx.accounts.competition;

        require!(c.status == Status::Open, DinoError::NotOpen);
        require!(c.player_count >= MIN_PLAYERS, DinoError::NotEnoughPlayers);
        require!(
            now >= c.end_time,
            DinoError::NotEndedYet
        );
        let submission_deadline = c.end_time
            .checked_add(FINAL_SCORE_WINDOW_SECS)
            .ok_or(DinoError::MathOverflow)?;
        require!(now <= submission_deadline, DinoError::ScoringClosed);

        let participant = &mut ctx.accounts.participant;
        participant.best_score = total_score;
        upsert_leaderboard(&mut c.leaderboard, participant.player, total_score);
        Ok(())
    }

    /// After the competition ends, lock results and compute the admin / website shares.
    /// Anyone can call it after the final-score submission window closes.
    pub fn finalize_competition(ctx: Context<FinalizeCompetition>) -> Result<()> {
        let now = Clock::get()?.unix_timestamp;
        let c = &mut ctx.accounts.competition;

        require!(c.status == Status::Open, DinoError::NotOpen);
        require!(c.player_count >= MIN_PLAYERS, DinoError::NotEnoughPlayers);
        require!(
            now > c.end_time.checked_add(FINAL_SCORE_WINDOW_SECS).ok_or(DinoError::MathOverflow)?,
            DinoError::NotEndedYet
        );

        let pool = pool_of(c)?;
        let website_share = ((pool as u128) * WEBSITE_BPS / BPS_DENOM) as u64;

        let mut prizes: u64 = 0;
        for rank in 1..=LEADERBOARD_SIZE {
            prizes = prizes
                .checked_add(prize_for_rank(pool, rank))
                .ok_or(DinoError::MathOverflow)?;
        }

        // admin = 9% + rounding dust
        let admin_share = pool
            .checked_sub(prizes)
            .and_then(|v| v.checked_sub(website_share))
            .ok_or(DinoError::MathOverflow)?;

        c.website_share = website_share;
        c.admin_share = admin_share;
        c.status = Status::Finalized;
        Ok(())
    }

    /// Winner claims the prize for their leaderboard rank. Non-winners can call it
    /// too, just to close their participant account and recover the rent.
    pub fn claim(ctx: Context<Claim>) -> Result<()> {
        let c = &ctx.accounts.competition;
        require!(c.status == Status::Finalized, DinoError::NotFinalized);

        let player = ctx.accounts.player.key();
        let prize = match c.leaderboard.iter().position(|e| e.player == player) {
            Some(idx) => prize_for_rank(pool_of(c)?, idx + 1),
            None => 0,
        };

        if prize > 0 {
            move_lamports(
                &c.to_account_info(),
                &ctx.accounts.player.to_account_info(),
                prize,
            )?;
        }
        Ok(())
        // participant closed by constraint -> a prize can never be claimed twice
    }

    /// Deployer/admin withdraws the 9% share of a finalized competition.
    pub fn withdraw_admin_share(ctx: Context<WithdrawAdmin>) -> Result<()> {
        let c = &mut ctx.accounts.competition;
        require!(c.status == Status::Finalized, DinoError::NotFinalized);
        require!(!c.admin_withdrawn, DinoError::AlreadyWithdrawn);
        c.admin_withdrawn = true;
        let amount = c.admin_share;
        move_lamports(
            &c.to_account_info(),
            &ctx.accounts.authority.to_account_info(),
            amount,
        )
    }

    /// Website wallet withdraws the 1% share of a finalized competition.
    pub fn withdraw_website_share(ctx: Context<WithdrawWebsite>) -> Result<()> {
        let c = &mut ctx.accounts.competition;
        require!(c.status == Status::Finalized, DinoError::NotFinalized);
        require!(!c.website_withdrawn, DinoError::AlreadyWithdrawn);
        c.website_withdrawn = true;
        let amount = c.website_share;
        move_lamports(
            &c.to_account_info(),
            &ctx.accounts.website_wallet.to_account_info(),
            amount,
        )
    }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

fn pool_of(c: &Competition) -> Result<u64> {
    Ok(c.entry_fee
        .checked_mul(c.player_count as u64)
        .ok_or(DinoError::MathOverflow)?)
}

/// Prize in lamports for a 1-based rank.
fn prize_for_rank(pool: u64, rank: usize) -> u64 {
    let p = pool as u128;
    let v = match rank {
        1 => p * FIRST_BPS / BPS_DENOM,
        2 => p * SECOND_BPS / BPS_DENOM,
        3 => p * THIRD_BPS / BPS_DENOM,
        4..=10 => p * GROUP_A_BPS / BPS_DENOM / GROUP_A_COUNT,
        11..=25 => p * GROUP_B_BPS / BPS_DENOM / GROUP_B_COUNT,
        _ => 0,
    };
    v as u64
}

/// Keep a sorted (desc) top-25 list. Ties: whoever reached the score first stays higher.
fn upsert_leaderboard(board: &mut Vec<Entry>, player: Pubkey, score: u64) {
    if let Some(i) = board.iter().position(|e| e.player == player) {
        board.remove(i);
    }
    let pos = board
        .iter()
        .position(|e| e.score < score)
        .unwrap_or(board.len());
    if pos < LEADERBOARD_SIZE {
        board.insert(pos, Entry { player, score });
        board.truncate(LEADERBOARD_SIZE);
    }
}

/// Move lamports out of a program-owned account, never dropping below rent-exemption.
fn move_lamports<'info>(
    from: &AccountInfo<'info>,
    to: &AccountInfo<'info>,
    amount: u64,
) -> Result<()> {
    if amount == 0 {
        return Ok(());
    }
    let min_balance = Rent::get()?.minimum_balance(from.data_len());
    let remaining = from
        .lamports()
        .checked_sub(amount)
        .ok_or(DinoError::MathOverflow)?;
    require!(remaining >= min_balance, DinoError::InsufficientEscrow);

    **from.try_borrow_mut_lamports()? = remaining;
    let new_to = to
        .lamports()
        .checked_add(amount)
        .ok_or(DinoError::MathOverflow)?;
    **to.try_borrow_mut_lamports()? = new_to;
    Ok(())
}

// ---------------------------------------------------------------------------
// Accounts (contexts)
// ---------------------------------------------------------------------------

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(
        init,
        payer = authority,
        space = 8 + Config::INIT_SPACE,
        seeds = [b"config"],
        bump
    )]
    pub config: Account<'info, Config>,

    #[account(mut)]
    pub authority: Signer<'info>,

    // Only the upgrade authority (deployer) may initialize.
    #[account(constraint = program.programdata_address()? == Some(program_data.key()))]
    pub program: Program<'info, DinoBattle>,
    #[account(constraint = program_data.upgrade_authority_address == Some(authority.key()) @ DinoError::Unauthorized)]
    pub program_data: Account<'info, ProgramData>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct UpdateConfig<'info> {
    #[account(
        mut,
        seeds = [b"config"],
        bump = config.bump,
        has_one = authority @ DinoError::Unauthorized
    )]
    pub config: Account<'info, Config>,
    pub authority: Signer<'info>,
}

#[derive(Accounts)]
#[instruction(id: u64)]
pub struct CreateCompetition<'info> {
    #[account(
        init,
        payer = creator,
        space = 8 + Competition::INIT_SPACE,
        seeds = [b"competition", creator.key().as_ref(), &id.to_le_bytes()],
        bump
    )]
    pub competition: Account<'info, Competition>,
    #[account(mut)]
    pub creator: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct JoinCompetition<'info> {
    #[account(
        mut,
        seeds = [b"competition", competition.creator.as_ref(), &competition.id.to_le_bytes()],
        bump = competition.bump
    )]
    pub competition: Account<'info, Competition>,
    #[account(
        init,
        payer = player,
        space = 8 + Participant::INIT_SPACE,
        seeds = [b"participant", competition.key().as_ref(), player.key().as_ref()],
        bump
    )]
    pub participant: Account<'info, Participant>,
    #[account(mut)]
    pub player: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct CancelCompetition<'info> {
    #[account(
        mut,
        seeds = [b"competition", competition.creator.as_ref(), &competition.id.to_le_bytes()],
        bump = competition.bump
    )]
    pub competition: Account<'info, Competition>,
    pub caller: Signer<'info>,
}

#[derive(Accounts)]
pub struct Refund<'info> {
    #[account(
        mut,
        seeds = [b"competition", competition.creator.as_ref(), &competition.id.to_le_bytes()],
        bump = competition.bump
    )]
    pub competition: Account<'info, Competition>,
    #[account(
        mut,
        close = player,
        seeds = [b"participant", competition.key().as_ref(), player.key().as_ref()],
        bump = participant.bump
    )]
    pub participant: Account<'info, Participant>,
    #[account(mut)]
    pub player: Signer<'info>,
}

#[derive(Accounts)]
pub struct SubmitScore<'info> {
    #[account(seeds = [b"config"], bump = config.bump)]
    pub config: Account<'info, Config>,
    #[account(constraint = config.game_server == game_server.key() @ DinoError::Unauthorized)]
    pub game_server: Signer<'info>,
    #[account(
        mut,
        seeds = [b"competition", competition.creator.as_ref(), &competition.id.to_le_bytes()],
        bump = competition.bump
    )]
    pub competition: Account<'info, Competition>,
    #[account(
        mut,
        has_one = competition,
        seeds = [b"participant", competition.key().as_ref(), participant.player.as_ref()],
        bump = participant.bump
    )]
    pub participant: Account<'info, Participant>,
}

#[derive(Accounts)]
pub struct SubmitFinalScore<'info> {
    #[account(
        mut,
        seeds = [b"competition", competition.creator.as_ref(), &competition.id.to_le_bytes()],
        bump = competition.bump
    )]
    pub competition: Account<'info, Competition>,
    #[account(
        mut,
        has_one = competition,
        has_one = player,
        seeds = [b"participant", competition.key().as_ref(), player.key().as_ref()],
        bump = participant.bump
    )]
    pub participant: Account<'info, Participant>,
    #[account(mut)]
    pub player: Signer<'info>,
}

#[derive(Accounts)]
pub struct FinalizeCompetition<'info> {
    #[account(
        mut,
        seeds = [b"competition", competition.creator.as_ref(), &competition.id.to_le_bytes()],
        bump = competition.bump
    )]
    pub competition: Account<'info, Competition>,
    pub caller: Signer<'info>,
}

#[derive(Accounts)]
pub struct Claim<'info> {
    #[account(
        mut,
        seeds = [b"competition", competition.creator.as_ref(), &competition.id.to_le_bytes()],
        bump = competition.bump
    )]
    pub competition: Account<'info, Competition>,
    #[account(
        mut,
        close = player,
        seeds = [b"participant", competition.key().as_ref(), player.key().as_ref()],
        bump = participant.bump
    )]
    pub participant: Account<'info, Participant>,
    #[account(mut)]
    pub player: Signer<'info>,
}

#[derive(Accounts)]
pub struct WithdrawAdmin<'info> {
    #[account(
        seeds = [b"config"],
        bump = config.bump,
        has_one = authority @ DinoError::Unauthorized
    )]
    pub config: Account<'info, Config>,
    #[account(mut)]
    pub authority: Signer<'info>,
    #[account(
        mut,
        seeds = [b"competition", competition.creator.as_ref(), &competition.id.to_le_bytes()],
        bump = competition.bump
    )]
    pub competition: Account<'info, Competition>,
}

#[derive(Accounts)]
pub struct WithdrawWebsite<'info> {
    #[account(seeds = [b"config"], bump = config.bump)]
    pub config: Account<'info, Config>,
    #[account(
        mut,
        constraint = config.website_wallet == website_wallet.key() @ DinoError::Unauthorized
    )]
    pub website_wallet: Signer<'info>,
    #[account(
        mut,
        seeds = [b"competition", competition.creator.as_ref(), &competition.id.to_le_bytes()],
        bump = competition.bump
    )]
    pub competition: Account<'info, Competition>,
}

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------

#[account]
#[derive(InitSpace)]
pub struct Config {
    /// Program deployer: receives the 9% share, can rotate keys.
    pub authority: Pubkey,
    /// Website account: receives the 1% share.
    pub website_wallet: Pubkey,
    /// Trusted backend key that submits verified scores.
    pub game_server: Pubkey,
    pub bump: u8,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, Copy, PartialEq, Eq, InitSpace)]
pub enum Status {
    Open,
    Finalized,
    Cancelled,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, Copy, InitSpace)]
pub struct Entry {
    pub player: Pubkey,
    pub score: u64,
}

#[account]
#[derive(InitSpace)]
pub struct Competition {
    pub creator: Pubkey,
    pub id: u64,
    pub entry_fee: u64, // lamports
    pub start_time: i64,
    pub end_time: i64,
    pub max_players: u32,
    pub player_count: u32,
    pub status: Status,
    pub admin_share: u64,
    pub website_share: u64,
    pub admin_withdrawn: bool,
    pub website_withdrawn: bool,
    pub bump: u8,
    /// Sorted best-first, at most 25 entries.
    #[max_len(25)]
    pub leaderboard: Vec<Entry>,
}

#[account]
#[derive(InitSpace)]
pub struct Participant {
    pub competition: Pubkey,
    pub player: Pubkey,
    /// Sum of all verified run scores submitted during this competition.
    pub best_score: u64,
    pub bump: u8,
}

// ---------------------------------------------------------------------------
// Errors
// ---------------------------------------------------------------------------

#[error_code]
pub enum DinoError {
    #[msg("Not authorized")]
    Unauthorized,
    #[msg("Entry fee must be greater than zero")]
    InvalidEntryFee,
    #[msg("Invalid start/end time")]
    InvalidTimes,
    #[msg("max_players must be at least 1")]
    MaxPlayersTooLow,
    #[msg("Competition is not open")]
    NotOpen,
    #[msg("Joining is closed, the competition already started")]
    JoinClosed,
    #[msg("Competition is full")]
    CompetitionFull,
    #[msg("Wallet balance is lower than the entry fee")]
    InsufficientBalance,
    #[msg("Competition has not started yet")]
    NotStartedYet,
    #[msg("Competition has not ended yet")]
    NotEndedYet,
    #[msg("Score submission window is closed")]
    ScoringClosed,
    #[msg("Fewer than 1 player joined")]
    NotEnoughPlayers,
    #[msg("Enough players joined, cannot cancel")]
    EnoughPlayers,
    #[msg("Competition is not cancelled")]
    NotCancelled,
    #[msg("Competition is not finalized")]
    NotFinalized,
    #[msg("Share already withdrawn")]
    AlreadyWithdrawn,
    #[msg("Escrow would fall below rent-exempt minimum")]
    InsufficientEscrow,
    #[msg("Math overflow")]
    MathOverflow,
    #[msg("max_players must be at most 100")]
    MaxPlayersTooHigh,
    #[msg("Competition duration cannot exceed 60 minutes")]
    DurationTooLong,
}
