module.exports = [
(()=>{"use strict";return[
"[project]/src/app/c/[id]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Detail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@coral-xyz/anchor/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__ = __turbopack_context__.i("[project]/node_modules/bn.js/lib/bn.js [app-ssr] (ecmascript) <export default as BN>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@solana/web3.js/lib/index.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useProgram$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/useProgram.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/program.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DinoGame$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DinoGame.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
function describeError(error) {
    const messages = [];
    const pending = [
        error
    ];
    const seen = new Set();
    while(pending.length > 0 && seen.size < 20){
        const current = pending.shift();
        if (current instanceof Error) {
            if (current.message) messages.push(current.message);
            const nested = current;
            if (nested.error !== undefined) pending.push(nested.error);
            if (nested.cause !== undefined) pending.push(nested.cause);
            continue;
        }
        if (typeof current === "string") {
            messages.push(current);
            continue;
        }
        if (typeof current !== "object" || current === null || seen.has(current)) continue;
        seen.add(current);
        const detail = current;
        for (const key of [
            "message",
            "error",
            "cause",
            "data",
            "originalError"
        ]){
            if (detail[key] !== undefined && detail[key] !== current) pending.push(detail[key]);
        }
        if (typeof detail.name === "string") messages.push(detail.name);
    }
    if (messages.some((message)=>/user rejected|request rejected|rejected the request|transaction cancelled|request was cancelled/i.test(message))) {
        return "Wallet request cancelled. No transaction was sent.";
    }
    const usefulMessages = [
        ...new Set(messages.filter((message)=>message && message !== "[object Object]"))
    ];
    return usefulMessages.join(": ") || "An unexpected error occurred. Check the wallet and Solana network, then try again.";
}
function Detail() {
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"](id), [
        id
    ]);
    const { program, connection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useProgram$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProgram"])();
    const { publicKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWallet"])();
    const [c, setC] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [joined, setJoined] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [participant, setParticipant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [msg, setMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [finalizing, setFinalizing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [, tick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const load = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            const [competition, playerAccount] = await Promise.all([
                program.account.competition.fetch(key),
                publicKey ? program.account.participant.fetchNullable((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["partPda"])(key, publicKey)) : Promise.resolve(null)
            ]);
            setC(competition);
            setParticipant(playerAccount);
            setJoined(!!playerAccount);
        } catch (error) {
            setMsg(`Unable to load competition: ${describeError(error)}`);
        }
    }, [
        program,
        key,
        publicKey
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        load();
        const i = setInterval(()=>tick((x)=>x + 1), 1000), j = setInterval(load, 8000);
        return ()=>{
            clearInterval(i);
            clearInterval(j);
        };
    }, [
        load
    ]);
    async function run(text, fn) {
        try {
            setMsg(text);
            await fn();
            setMsg("Done ✓");
            await load();
        } catch (error) {
            setMsg(describeError(error));
        }
    }
    const join = ()=>run("Checking wallet balance…", async ()=>{
            const current = await program.account.competition.fetch(key);
            const currentCapacity = Math.min(current.maxPlayers, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_PLAYERS"]);
            if (current.playerCount >= currentCapacity) {
                throw new Error(`This competition is full (${current.playerCount}/${currentCapacity} players).`);
            }
            const bal = await connection.getBalance(publicKey);
            if (bal < c.entryFee.toNumber() + 3_000_000) throw new Error(`Not enough SOL: you need ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sol"])(c.entryFee)} SOL + ~0.003 for fees/rent.`);
            setMsg("Confirm the payment in your wallet…");
            await program.methods.joinCompetition().accounts({
                competition: key,
                player: publicKey
            }).rpc();
        });
    const call = (m, name, acc)=>run(m, ()=>program.methods[name]().accounts({
                competition: key,
                ...acc
            }).rpc());
    const cancelCompetition = ()=>run("Confirm the cancellation transaction in your wallet…", async ()=>{
            await program.methods.cancelCompetition().accounts({
                competition: key,
                caller: publicKey
            }).rpc();
        });
    async function finalizeCompetition() {
        if (!publicKey || finalizing) return;
        setFinalizing(true);
        try {
            setMsg("Checking the on-chain competition status…");
            const current = await program.account.competition.fetch(key, "confirmed");
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rawStatus"])(current) !== "open") {
                await load();
                throw new Error("This competition is no longer open. Refresh the page to see its latest status.");
            }
            if (current.playerCount < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MIN_PLAYERS"]) {
                throw new Error("This competition does not have enough players to finalize.");
            }
            const slot = await connection.getSlot("confirmed");
            const chainTime = await connection.getBlockTime(slot);
            if (chainTime === null) throw new Error("Could not read the current Solana block time.");
            const finalScoreDeadline = current.endTime.toNumber() + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FINAL_SCORE_WINDOW_SECS"];
            if (chainTime <= finalScoreDeadline) {
                throw new Error(`Results can be finalized after the final-score window closes in ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fmt"])(finalScoreDeadline + 1 - chainTime)}.`);
            }
            setMsg("Approve the results-finalization transaction in your wallet. The connected wallet pays the network fee.");
            const signature = await program.methods.finalizeCompetition().accounts({
                competition: key,
                caller: publicKey
            }).rpc();
            const finalized = await program.account.competition.fetch(key, "confirmed");
            setC(finalized);
            setMsg(`Results finalized on-chain. Players can now claim rewards. Transaction: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["short"])(signature)}`);
        } catch (error) {
            setMsg(describeError(error));
        } finally{
            setFinalizing(false);
        }
    }
    async function submitFinalTotal(total) {
        if (!publicKey) throw new Error("Reconnect the wallet that joined this competition to submit its final total.");
        if (!navigator.onLine) throw new Error("You are offline. This run could not be recorded on-chain.");
        const now = Math.floor(Date.now() / 1000);
        if (now < c.endTime.toNumber() || now > c.endTime.toNumber() + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FINAL_SCORE_WINDOW_SECS"]) {
            throw new Error("The final-score submission window is closed.");
        }
        const signature = await program.methods.submitFinalScore(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__["BN"](total)).accounts({
            competition: key,
            participant: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["partPda"])(key, publicKey),
            player: publicKey
        }).rpc();
        await load();
        return `Final total ${total} recorded on-chain. Transaction: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["short"])(signature)}`;
    }
    if (!c) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "mut",
        children: msg || "Loading…"
    }, void 0, false, {
        fileName: "[project]/src/app/c/[id]/page.tsx",
        lineNumber: 146,
        columnNumber: 18
    }, this);
    const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["statusOf"])(c), raw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rawStatus"])(c), now = Date.now() / 1000, n = c.playerCount, capacity = Math.min(c.maxPlayers, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_PLAYERS"]), isFull = n >= capacity, fee = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sol"])(c.entryFee), pool = fee * n;
    const emptyCompetitionExpired = raw === "open" && n === 0 && now >= c.startTime.toNumber();
    const cancellationReady = raw === "open" && n > 0 && n < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MIN_PLAYERS"] && now >= c.startTime.toNumber();
    const finalizationReady = raw === "open" && n >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MIN_PLAYERS"] && now > c.endTime.toNumber() + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FINAL_SCORE_WINDOW_SECS"];
    const lb = c.leaderboard, myRank = publicKey ? lb.findIndex((e)=>e.player.equals(publicKey)) + 1 : 0;
    const myTotal = participant ? participant.bestScore.toNumber() : 0;
    let cta = null;
    if (emptyCompetitionExpired) cta = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "btn big",
        disabled: true,
        children: "Competition expired without entrants"
    }, void 0, false, {
        fileName: "[project]/src/app/c/[id]/page.tsx",
        lineNumber: 155,
        columnNumber: 38
    }, this);
    else if (cancellationReady && publicKey) cta = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "btn big",
        onClick: cancelCompetition,
        children: "Cancel competition and enable refunds (wallet transaction fee applies)"
    }, void 0, false, {
        fileName: "[project]/src/app/c/[id]/page.tsx",
        lineNumber: 156,
        columnNumber: 50
    }, this);
    else if (cancellationReady) cta = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "btn big",
        disabled: true,
        children: "Connect a wallet to cancel and enable refunds"
    }, void 0, false, {
        fileName: "[project]/src/app/c/[id]/page.tsx",
        lineNumber: 157,
        columnNumber: 37
    }, this);
    else if (!publicKey) cta = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "btn big",
        disabled: true,
        children: "Connect wallet to join"
    }, void 0, false, {
        fileName: "[project]/src/app/c/[id]/page.tsx",
        lineNumber: 158,
        columnNumber: 30
    }, this);
    else if (s === "open") cta = joined ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "btn big",
        disabled: true,
        children: [
            "You're in ✓ · starts in ",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fmt"])(c.startTime.toNumber() - now)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/c/[id]/page.tsx",
        lineNumber: 159,
        columnNumber: 41
    }, this) : isFull ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "btn big",
        disabled: true,
        children: [
            "Competition full · ",
            n,
            "/",
            capacity,
            " players"
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/c/[id]/page.tsx",
        lineNumber: 159,
        columnNumber: 163
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "btn big",
        onClick: join,
        children: [
            "Join for ",
            fee,
            " SOL"
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/c/[id]/page.tsx",
        lineNumber: 159,
        columnNumber: 253
    }, this);
    else if (s === "live") cta = joined ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "btn big",
        disabled: true,
        children: "Entries closed"
    }, void 0, false, {
        fileName: "[project]/src/app/c/[id]/page.tsx",
        lineNumber: 160,
        columnNumber: 48
    }, this);
    else if (s === "ended" && raw === "open") cta = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "btn big",
        disabled: true,
        children: "Final scores are being submitted · results can be finalized after the 60-second submission window"
    }, void 0, false, {
        fileName: "[project]/src/app/c/[id]/page.tsx",
        lineNumber: 161,
        columnNumber: 51
    }, this);
    else if (s === "ended" && raw === "finalized" && joined) cta = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "btn big",
        onClick: ()=>call("Claiming…", "claim", {
                player: publicKey
            }),
        children: myRank ? `Claim ${+(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prize"])(pool, myRank).toFixed(3)} SOL (rank #${myRank})` : "Close entry & recover rent"
    }, void 0, false, {
        fileName: "[project]/src/app/c/[id]/page.tsx",
        lineNumber: 162,
        columnNumber: 66
    }, this);
    else if (s === "cancelled" && raw === "cancelled" && joined) cta = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "btn big",
        onClick: ()=>call("Refunding…", "refund", {
                player: publicKey
            }),
        children: [
            "Refund ",
            fee,
            " SOL"
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/c/[id]/page.tsx",
        lineNumber: 163,
        columnNumber: 70
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "mut sm",
                style: {
                    display: "inline-block",
                    marginTop: 18
                },
                children: "← All competitions"
            }, void 0, false, {
                fileName: "[project]/src/app/c/[id]/page.tsx",
                lineNumber: 166,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "top",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            margin: "6px 0"
                        },
                        children: [
                            "Cup #",
                            c.id.toString().slice(-5)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/c/[id]/page.tsx",
                        lineNumber: 167,
                        columnNumber: 26
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `badge ${s}`,
                        children: emptyCompetitionExpired ? "Expired · no entrants" : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["label"][s]
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/[id]/page.tsx",
                        lineNumber: 167,
                        columnNumber: 95
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/c/[id]/page.tsx",
                lineNumber: 167,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mut sm",
                children: [
                    "by ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mono",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["short"])(c.creator.toBase58())
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/[id]/page.tsx",
                        lineNumber: 168,
                        columnNumber: 32
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/c/[id]/page.tsx",
                lineNumber: 168,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stats",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stat",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "Entry fee"
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/[id]/page.tsx",
                                lineNumber: 170,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                className: "mono",
                                children: [
                                    fee,
                                    " SOL"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/c/[id]/page.tsx",
                                lineNumber: 170,
                                columnNumber: 53
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/c/[id]/page.tsx",
                        lineNumber: 170,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stat",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "Pool"
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/[id]/page.tsx",
                                lineNumber: 171,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                className: "mono",
                                children: [
                                    +pool.toFixed(3),
                                    " SOL"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/c/[id]/page.tsx",
                                lineNumber: 171,
                                columnNumber: 48
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/c/[id]/page.tsx",
                        lineNumber: 171,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stat",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "Players"
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/[id]/page.tsx",
                                lineNumber: 172,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: [
                                    n,
                                    "/",
                                    capacity
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/c/[id]/page.tsx",
                                lineNumber: 172,
                                columnNumber: 51
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/c/[id]/page.tsx",
                        lineNumber: 172,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stat",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "Games"
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/[id]/page.tsx",
                                lineNumber: 173,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "Dino Champions + Rocket Race + FPS + Flappy Bird"
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/[id]/page.tsx",
                                lineNumber: 173,
                                columnNumber: 49
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/c/[id]/page.tsx",
                        lineNumber: 173,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stat",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: s === "open" ? "Starts in" : s === "live" ? "Ends in" : "Status"
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/[id]/page.tsx",
                                lineNumber: 174,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: s === "open" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fmt"])(c.startTime.toNumber() - now) : s === "live" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fmt"])(c.endTime.toNumber() - now) : emptyCompetitionExpired ? "Expired · no entrants" : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["label"][s]
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/[id]/page.tsx",
                                lineNumber: 174,
                                columnNumber: 110
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/c/[id]/page.tsx",
                        lineNumber: 174,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/c/[id]/page.tsx",
                lineNumber: 169,
                columnNumber: 5
            }, this),
            s === "open" && n < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MIN_PLAYERS"] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "note sm",
                style: {
                    borderColor: "var(--warn)"
                },
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MIN_PLAYERS"] - n,
                    " more ",
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MIN_PLAYERS"] - n === 1 ? "player" : "players",
                    " needed. Creating a competition does not automatically enter its creator; join and approve the entry fee to count as a player. The player count updates after the join transaction confirms on-chain. If nobody joins by the start time, it expires without entrants; no entry fee or cancellation transaction is needed."
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/c/[id]/page.tsx",
                lineNumber: 176,
                columnNumber: 41
            }, this),
            emptyCompetitionExpired && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "note sm",
                role: "status",
                children: "This competition expired without any entrants. No score was submitted, no cancellation transaction is needed, and there are no entry fees to refund."
            }, void 0, false, {
                fileName: "[project]/src/app/c/[id]/page.tsx",
                lineNumber: 179,
                columnNumber: 33
            }, this),
            raw === "open" && now >= c.endTime.toNumber() && now <= c.endTime.toNumber() + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FINAL_SCORE_WINDOW_SECS"] && joined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "note sm",
                role: "status",
                children: "Competition ended. Submit your browser-summed total within 60 seconds. Finalizing results after this window is a separate, manual wallet transaction."
            }, void 0, false, {
                fileName: "[project]/src/app/c/[id]/page.tsx",
                lineNumber: 181,
                columnNumber: 20
            }, this),
            cancellationReady && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "note sm",
                role: "status",
                children: "The minimum player count was not met. A wallet must explicitly cancel the competition before participants can claim refunds; the wallet approving cancellation pays the network transaction fee."
            }, void 0, false, {
                fileName: "[project]/src/app/c/[id]/page.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            msg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "note sm",
                role: "status",
                children: msg
            }, void 0, false, {
                fileName: "[project]/src/app/c/[id]/page.tsx",
                lineNumber: 184,
                columnNumber: 13
            }, this),
            finalizationReady && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "note",
                role: "status",
                style: {
                    borderColor: "var(--acc)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Final score window closed."
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/[id]/page.tsx",
                        lineNumber: 186,
                        columnNumber: 7
                    }, this),
                    " Submit the on-chain transaction to finalize the leaderboard and enable reward claims.",
                    publicKey ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn big",
                        style: {
                            marginTop: 10
                        },
                        onClick: ()=>void finalizeCompetition(),
                        disabled: finalizing,
                        children: finalizing ? "Finalizing results…" : "Finalize results on-chain"
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/[id]/page.tsx",
                        lineNumber: 188,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "sm mut",
                        children: "Connect any wallet to submit finalization. The wallet approving the transaction pays the network fee."
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/[id]/page.tsx",
                        lineNumber: 191,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/c/[id]/page.tsx",
                lineNumber: 185,
                columnNumber: 27
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: 14
                },
                children: joined && raw === "open" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                marginTop: 0
                            },
                            children: now < c.startTime.toNumber() ? "Competition has not started" : now < c.endTime.toNumber() ? "Competition is live — four game stages" : finalizationReady ? "Scores are locked — finalize results to claim" : "Competition ended — final score window"
                        }, void 0, false, {
                            fileName: "[project]/src/app/c/[id]/page.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this),
                        now < c.endTime.toNumber() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "sm mut",
                            children: "The competition time is split evenly across Dino Champions, the live multiplayer Rocket Race, FPS Team Deathmatch, and Flappy Bird. Race rounds repeat throughout the second stage. FPS kills count as points. Your scores from all four games are added together. Play is locked until the scheduled start time. Before play, this page clears browser storage and accessible cookies for this website, except for this competition's score and submission record. The combined score is submitted once after all four stages end; unsubmitted scores are remembered across reloads in this browser."
                        }, void 0, false, {
                            fileName: "[project]/src/app/c/[id]/page.tsx",
                            lineNumber: 197,
                            columnNumber: 42
                        }, this),
                        publicKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DinoGame$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            total: myTotal,
                            startsAt: c.startTime.toNumber(),
                            endsAt: c.endTime.toNumber(),
                            submissionDeadline: c.endTime.toNumber() + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FINAL_SCORE_WINDOW_SECS"],
                            storageKey: `dino-scores:${key.toBase58()}:${publicKey.toBase58()}`,
                            competitionId: key.toBase58(),
                            playerId: publicKey.toBase58(),
                            playerName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["short"])(publicKey.toBase58()),
                            onSubmitFinal: submitFinalTotal
                        }, void 0, false, {
                            fileName: "[project]/src/app/c/[id]/page.tsx",
                            lineNumber: 198,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/c/[id]/page.tsx",
                    lineNumber: 195,
                    columnNumber: 9
                }, this) : cta
            }, void 0, false, {
                fileName: "[project]/src/app/c/[id]/page.tsx",
                lineNumber: 193,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "two",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Leaderboard · top 25 win"
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/[id]/page.tsx",
                                lineNumber: 213,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "#"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/c/[id]/page.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Player"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/c/[id]/page.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "r",
                                                    children: "Score"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/c/[id]/page.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 52
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "r",
                                                    children: "Prize"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/c/[id]/page.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 80
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/c/[id]/page.tsx",
                                            lineNumber: 214,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/c/[id]/page.tsx",
                                        lineNumber: 214,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: lb.map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: publicKey && e.player.equals(publicKey) ? "me" : "",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: i + 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/c/[id]/page.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 105
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "mono",
                                                        children: publicKey && e.player.equals(publicKey) ? "You" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["short"])(e.player.toBase58())
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/c/[id]/page.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 121
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "r mono",
                                                        children: e.score.toNumber() || "—"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/c/[id]/page.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 225
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "r mono",
                                                        children: +(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prize"])(pool, i + 1).toFixed(3)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/c/[id]/page.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 280
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/app/c/[id]/page.tsx",
                                                lineNumber: 215,
                                                columnNumber: 29
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/c/[id]/page.tsx",
                                        lineNumber: 214,
                                        columnNumber: 121
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/c/[id]/page.tsx",
                                lineNumber: 214,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/c/[id]/page.tsx",
                        lineNumber: 213,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "How the pool is split"
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/[id]/page.tsx",
                                lineNumber: 217,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "sm",
                                children: [
                                    "1st 30% · 2nd 20% · 3rd 10%",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/c/[id]/page.tsx",
                                        lineNumber: 218,
                                        columnNumber: 54
                                    }, this),
                                    "4th–10th share 20% equally",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/c/[id]/page.tsx",
                                        lineNumber: 218,
                                        columnNumber: 86
                                    }, this),
                                    "11th–25th share 10% equally",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/c/[id]/page.tsx",
                                        lineNumber: 218,
                                        columnNumber: 119
                                    }, this),
                                    "Website 1% · Deployer 9%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/c/[id]/page.tsx",
                                lineNumber: 218,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "sm mut",
                                children: "Each player submits one browser-aggregated total on-chain. The program records the submitted total but cannot verify that the game produced it."
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/[id]/page.tsx",
                                lineNumber: 219,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/c/[id]/page.tsx",
                        lineNumber: 217,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/c/[id]/page.tsx",
                lineNumber: 212,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/c/[id]/page.tsx",
        lineNumber: 165,
        columnNumber: 11
    }, this);
}
}),
"[project]/src/components/DinoGame.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DinoGame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/program.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RaceStage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RaceStage.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const GAME_NAMES = [
    "Dino Champions",
    "Rocket Race",
    "FPS Team Deathmatch",
    "Flappy Bird"
];
function parseGameProgress(value) {
    if (!value) return null;
    try {
        const progress = JSON.parse(value);
        if (typeof progress !== "object" || progress === null) return null;
        const candidate = progress;
        if (candidate.version !== 1 || !Number.isSafeInteger(candidate.total) || (candidate.total ?? -1) < 0 || candidate.racePoints !== undefined && (!Number.isSafeInteger(candidate.racePoints) || candidate.racePoints < 0) || typeof candidate.submitted !== "boolean") return null;
        return candidate;
    } catch  {
        return null;
    }
}
async function clearWebsiteStorage(progressKey) {
    const progress = window.localStorage.getItem(progressKey);
    window.localStorage.clear();
    window.sessionStorage.clear();
    if (progress !== null) window.localStorage.setItem(progressKey, progress);
    const cookieNames = document.cookie.split(";").map((cookie)=>cookie.trim().split("=")[0]).filter(Boolean);
    const pathSegments = window.location.pathname.split("/").filter(Boolean);
    const paths = [
        "/",
        ...pathSegments.map((_, index)=>`/${pathSegments.slice(0, index + 1).join("/")}`)
    ];
    for (const name of cookieNames){
        for (const path of paths){
            document.cookie = `${name}=; Max-Age=0; path=${path}; SameSite=Lax`;
        }
    }
    if (typeof indexedDB.databases === "function") {
        const databases = await indexedDB.databases();
        await Promise.all((databases ?? []).flatMap((database)=>database.name ? [
                new Promise((resolve, reject)=>{
                    const request = indexedDB.deleteDatabase(database.name);
                    request.onsuccess = ()=>resolve();
                    request.onerror = ()=>reject(request.error ?? new Error(`Could not delete IndexedDB database ${database.name}.`));
                    request.onblocked = ()=>reject(new Error(`Deletion of IndexedDB database ${database.name} is blocked by another page.`));
                })
            ] : []));
    }
    if ("caches" in window) {
        const cacheNames = await window.caches.keys();
        const deleted = await Promise.all(cacheNames.map((name)=>window.caches.delete(name)));
        if (deleted.some((success)=>!success)) throw new Error("Could not delete one or more website caches.");
    }
    if ("serviceWorker" in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        const removed = await Promise.all(registrations.map((registration)=>registration.unregister()));
        if (removed.some((success)=>!success)) throw new Error("Could not unregister one or more website service workers.");
    }
    return progress;
}
function DinoGame({ total, startsAt, endsAt, submissionDeadline, storageKey, competitionId, playerId, playerName, onSubmitFinal }) {
    const cv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        start () {},
        jump () {},
        duck () {},
        stop () {}
    });
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("ready");
    const [storageReady, setStorageReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [clockNow, setClockNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>Math.floor(Date.now() / 1000));
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [totalScore, setTotalScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(total);
    const [racePoints, setRacePoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const gameDuration = Math.max(1, (endsAt - startsAt) / GAME_NAMES.length);
    const activeGameIndex = Math.min(GAME_NAMES.length - 1, Math.max(0, Math.floor((clockNow - startsAt) / gameDuration)));
    const [msg, setMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [submissionState, setSubmissionState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("waiting");
    const progressKey = `${storageKey}:progress`;
    const [banned, setBanned] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        try {
            return ("TURBOPACK compile-time value", "undefined") !== "undefined" && window.localStorage.getItem(`${storageKey}:local-ban`) === "1";
        } catch  {
            return false;
        }
    });
    const totalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(total);
    const scoreList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(total > 0 ? [
        total
    ] : []);
    const submissionStarted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const submissionComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const bannedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(banned);
    const onChainTotalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(total);
    const racePointsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const onSubmitFinalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onSubmitFinal);
    onSubmitFinalRef.current = onSubmitFinal;
    bannedRef.current = banned;
    onChainTotalRef.current = total;
    const banThisBrowser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (bannedRef.current) return;
        bannedRef.current = true;
        scoreList.current = [];
        totalRef.current = 0;
        setTotalScore(0);
        setBanned(true);
        setPhase("banned");
        api.current.stop();
        try {
            window.localStorage.setItem(`${storageKey}:local-ban`, "1");
            setMsg("Developer tools may be open. To protect fair play, this competition has been locked in this browser.");
        } catch (error) {
            const reason = error instanceof Error ? error.message : String(error);
            setMsg(`Developer tools may be open. This page is locked for this session, but the browser could not save the local lock: ${reason}`);
        }
    }, [
        storageKey
    ]);
    const submitFinalTotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (bannedRef.current) {
            setMsg("This browser is locked out of this competition and cannot submit its score.");
            return;
        }
        if (submissionStarted.current || submissionComplete.current) return;
        const now = Math.floor(Date.now() / 1000);
        if (now < endsAt) {
            setMsg("The competition is still running. Your final total will be submitted when it ends.");
            return;
        }
        if (now > submissionDeadline) {
            setSubmissionState("closed");
            setPhase("ended");
            setMsg("The 60-second final-score submission window has closed.");
            return;
        }
        submissionStarted.current = true;
        setPhase("settling");
        setSubmissionState("submitting");
        setMsg(`Competition ended. Approve Phantom to submit your total score of ${totalRef.current} to Solana.`);
        try {
            const confirmation = await onSubmitFinalRef.current(totalRef.current);
            submissionComplete.current = true;
            setSubmissionState("submitted");
            setPhase("ended");
            setMsg(confirmation);
            try {
                window.localStorage.setItem(progressKey, JSON.stringify({
                    version: 1,
                    total: totalRef.current,
                    racePoints: racePointsRef.current,
                    submitted: true,
                    confirmation
                }));
            } catch (error) {
                const reason = error instanceof Error ? error.message : String(error);
                setMsg(`${confirmation} The browser could not save the submission record: ${reason}`);
            }
        } catch (error) {
            const reason = error instanceof Error ? error.message : String(error);
            const windowOpen = Math.floor(Date.now() / 1000) <= submissionDeadline;
            setSubmissionState(windowOpen ? "failed" : "closed");
            setPhase("ended");
            setMsg(windowOpen ? `Final score not submitted: ${reason}. Retry before the 60-second submission window closes.` : `Final score was not submitted: ${reason}. The 60-second submission window has closed.`);
        } finally{
            submissionStarted.current = false;
        }
    }, [
        endsAt,
        progressKey,
        submissionDeadline
    ]);
    const recordRaceScore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((delta, totalPoints)=>{
        if (delta <= 0) return;
        racePointsRef.current = totalPoints;
        setRacePoints(totalPoints);
        scoreList.current = [
            ...scoreList.current,
            delta
        ];
        totalRef.current = scoreList.current.reduce((sum, value)=>sum + value, 0);
        setTotalScore(totalRef.current);
        try {
            window.localStorage.setItem(progressKey, JSON.stringify({
                version: 1,
                total: totalRef.current,
                racePoints: totalPoints,
                submitted: false
            }));
        } catch (error) {
            const reason = error instanceof Error ? error.message : String(error);
            setMsg(`Race points are in memory but could not be saved for a reload: ${reason}`);
        }
    }, [
        progressKey
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = window.setInterval(()=>setClockNow(Math.floor(Date.now() / 1000)), 1000);
        return ()=>window.clearInterval(timer);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (activeGameIndex > 0 && clockNow < endsAt) {
            setScore(0);
            setMsg("");
            setPhase("ready");
        }
    }, [
        activeGameIndex,
        endsAt
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let active = true;
        void clearWebsiteStorage(progressKey).then((progressValue)=>{
            if (!active) return;
            const progress = parseGameProgress(progressValue);
            const onChainTotal = onChainTotalRef.current;
            const restoredTotal = progress?.total ?? onChainTotal;
            const alreadySubmitted = !!progress?.submitted || Date.now() / 1000 >= endsAt && onChainTotal > 0 && (!progress || progress.total === onChainTotal);
            scoreList.current = restoredTotal > 0 ? [
                restoredTotal
            ] : [];
            totalRef.current = restoredTotal;
            racePointsRef.current = progress?.racePoints ?? 0;
            setRacePoints(racePointsRef.current);
            setTotalScore(restoredTotal);
            if (alreadySubmitted) {
                submissionComplete.current = true;
                setSubmissionState("submitted");
                setPhase("ended");
                setMsg(progress?.confirmation ?? `Final total ${onChainTotal} is already recorded on-chain.`);
            } else {
                try {
                    window.localStorage.setItem(progressKey, JSON.stringify({
                        version: 1,
                        total: restoredTotal,
                        racePoints: racePointsRef.current,
                        submitted: false
                    }));
                } catch (error) {
                    const reason = error instanceof Error ? error.message : String(error);
                    setPhase("ended");
                    setMsg(`Could not save game progress in this browser: ${reason}`);
                    return;
                }
            }
            if (bannedRef.current) window.localStorage.setItem(`${storageKey}:local-ban`, "1");
            setStorageReady(true);
        }).catch((error)=>{
            if (!active) return;
            const reason = error instanceof Error ? error.message : String(error);
            setPhase("ended");
            setMsg(`Could not clear this website's browser storage before play: ${reason}`);
        });
        return ()=>{
            active = false;
        };
    }, [
        endsAt,
        progressKey,
        storageKey
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!storageReady || bannedRef.current) return;
        const checkDevTools = ()=>{
            const dockedWidth = window.outerWidth - window.innerWidth;
            const dockedHeight = window.outerHeight - window.innerHeight;
            if (dockedWidth > 200 || dockedHeight > 200) banThisBrowser();
        };
        checkDevTools();
        const interval = window.setInterval(checkDevTools, 500);
        window.addEventListener("resize", checkDevTools);
        window.addEventListener("focus", checkDevTools);
        return ()=>{
            window.clearInterval(interval);
            window.removeEventListener("resize", checkDevTools);
            window.removeEventListener("focus", checkDevTools);
        };
    }, [
        banThisBrowser,
        storageReady
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!storageReady || bannedRef.current) return;
        const canvas = cv.current;
        const context = canvas?.getContext("2d");
        if (!context) {
            setPhase("ended");
            setMsg("Your browser could not initialize the game canvas.");
            return;
        }
        const x = context, W = 640, G = 160, birdX = 120, cs = getComputedStyle(document.documentElement);
        const ink = cs.getPropertyValue("--ink"), mut = cs.getPropertyValue("--mut"), bg = cs.getPropertyValue("--card"), acc = cs.getPropertyValue("--acc"), warn = cs.getPropertyValue("--warn");
        let yf = G, vy = 0, birdY = 100, birdVelocity = 0, duck = false, activeGame = "dino", activeSlot = 0;
        let obs = [];
        let pipes = [];
        let sp = 6, sc = 0, gap = 80, f = 0, run = false, last = 0, raf = 0, expired = false;
        const gnd = ()=>yf >= G, hh = ()=>duck && gnd() ? 22 : 40;
        const isCompetitionStarted = ()=>Date.now() / 1000 >= startsAt;
        const isCompetitionOver = ()=>Date.now() / 1000 >= endsAt;
        const gameIndexAt = (now)=>Math.min(GAME_NAMES.length - 1, Math.max(0, Math.floor((now - startsAt) / gameDuration)));
        const addRunScore = (value)=>{
            scoreList.current = [
                ...scoreList.current,
                Math.max(0, Math.floor(value))
            ];
            totalRef.current = scoreList.current.reduce((sum, entry)=>sum + entry, 0);
            setTotalScore(totalRef.current);
            try {
                window.localStorage.setItem(progressKey, JSON.stringify({
                    version: 1,
                    total: totalRef.current,
                    racePoints: racePointsRef.current,
                    submitted: false
                }));
            } catch (error) {
                const reason = error instanceof Error ? error.message : String(error);
                setMsg(`Your score is in memory but could not be saved for a reload: ${reason}`);
            }
        };
        const draw = ()=>{
            x.fillStyle = bg;
            x.fillRect(0, 0, W, 200);
            if (activeGame === "flappy") {
                pipes.forEach((pipe)=>{
                    const gapTop = pipe.gapY - 36, gapBottom = pipe.gapY + 36;
                    x.fillStyle = acc;
                    x.fillRect(pipe.x, 0, 48, gapTop);
                    x.fillRect(pipe.x, gapBottom, 48, 200 - gapBottom);
                    x.fillStyle = mut;
                    x.fillRect(pipe.x - 4, gapTop - 8, 56, 8);
                    x.fillRect(pipe.x - 4, gapBottom, 56, 8);
                });
                x.fillStyle = warn;
                x.beginPath();
                x.arc(birdX, birdY, 12, 0, Math.PI * 2);
                x.fill();
                x.fillStyle = ink;
                x.beginPath();
                x.arc(birdX + 4, birdY - 3, 2, 0, Math.PI * 2);
                x.fill();
                x.fillStyle = acc;
                x.beginPath();
                x.moveTo(birdX + 10, birdY);
                x.lineTo(birdX + 19, birdY + 3);
                x.lineTo(birdX + 10, birdY + 6);
                x.fill();
                return;
            }
            x.fillStyle = mut;
            x.fillRect(0, G + 1, W, 2);
            const h = hh(), top = yf - h;
            x.fillStyle = ink;
            if (h === 22) {
                x.fillRect(40, top, 44, h);
                x.fillStyle = bg;
                x.fillRect(76, top + 4, 4, 4);
            } else {
                x.fillRect(40, top + 10, 30, h - 18);
                x.fillRect(52, top, 26, 18);
                x.fillStyle = bg;
                x.fillRect(68, top + 4, 4, 4);
                x.fillStyle = ink;
                const leg = gnd() && Math.floor(f / 5) % 2;
                x.fillRect(44, top + h - 8, 8, leg ? 8 : 4);
                x.fillRect(58, top + h - 8, 8, leg ? 4 : 8);
            }
            obs.forEach((o)=>{
                x.fillStyle = o.b ? mut : acc;
                if (o.b) {
                    x.fillRect(o.x, o.y, o.w, o.h);
                    x.fillRect(o.x + 6, o.y + (Math.floor(f / 8) % 2 ? -8 : o.h), 14, 8);
                } else {
                    x.fillRect(o.x + o.w / 2 - 4, o.y, 8, o.h);
                    x.fillRect(o.x, o.y + 8, o.w / 2, 6);
                    x.fillRect(o.x + o.w / 2, o.y + 14, o.w / 2, 6);
                }
            });
        };
        const stop = ()=>{
            if (expired) return;
            expired = true;
            if (submissionComplete.current) {
                run = false;
                cancelAnimationFrame(raf);
                setPhase("ended");
                setSubmissionState("submitted");
                return;
            }
            if (run) addRunScore(sc);
            run = false;
            cancelAnimationFrame(raf);
            draw();
            if (bannedRef.current) {
                setPhase("banned");
                return;
            }
            setPhase("settling");
            if (Date.now() / 1000 <= submissionDeadline) {
                void submitFinalTotal();
            } else {
                setSubmissionState("closed");
                setPhase("ended");
                setMsg("Competition ended and the final-score submission window has closed.");
            }
        };
        const jump = ()=>{
            if (!run) return;
            if (activeGame === "flappy") birdVelocity = -6.5;
            else if (gnd()) vy = -12.5;
        };
        const dk = (value)=>{
            if (run) duck = value;
        };
        const kd = (e)=>{
            if (e.code === "Space" || e.code === "ArrowUp") {
                e.preventDefault();
                jump();
            }
            if (e.code === "ArrowDown") {
                e.preventDefault();
                dk(true);
            }
        };
        const ku = (e)=>{
            if (e.code === "ArrowDown") dk(false);
        };
        window.addEventListener("keydown", kd);
        window.addEventListener("keyup", ku);
        const onShooterScore = (event)=>{
            if (event.origin !== window.location.origin || activeGame !== "shooter" || !run || !isCompetitionStarted() || isCompetitionOver()) return;
            const data = event.data;
            if (!data || data.type !== "tdm-score" || !Number.isSafeInteger(data.points) || data.points < 1 || data.points > 1) return;
            sc += 1;
            setScore(Math.floor(sc));
        };
        window.addEventListener("message", onShooterScore);
        function loop(n) {
            if (!run) return;
            if (isCompetitionOver()) {
                stop();
                return;
            }
            const currentSlot = gameIndexAt(Date.now() / 1000);
            if (currentSlot !== activeSlot) {
                addRunScore(sc);
                run = false;
                activeSlot = currentSlot;
                activeGame = currentSlot === 2 ? "shooter" : currentSlot === 3 ? "flappy" : "dino";
                sc = 0;
                setScore(0);
                setPhase("ready");
                draw();
                return;
            }
            const k = Math.min((n - last) / 16.7, 3);
            last = n;
            f += k;
            if (activeGame === "shooter") {
                raf = requestAnimationFrame(loop);
                return;
            }
            if (activeGame === "flappy") {
                birdVelocity += 0.38 * k;
                birdY += birdVelocity * k;
                gap -= 3.2 * k;
                if (gap <= 0) {
                    pipes.push({
                        x: W,
                        gapY: 52 + Math.random() * 96,
                        scored: false
                    });
                    gap = 185;
                }
                pipes.forEach((pipe)=>{
                    pipe.x -= 3.2 * k;
                });
                pipes = pipes.filter((pipe)=>pipe.x > -60);
                for (const pipe of pipes){
                    if (!pipe.scored && pipe.x + 48 < birdX) {
                        pipe.scored = true;
                        sc += 1;
                    }
                }
                const hitPipe = pipes.some((pipe)=>{
                    const gapTop = pipe.gapY - 36, gapBottom = pipe.gapY + 36;
                    const overlapsX = birdX + 10 > pipe.x && birdX - 10 < pipe.x + 48;
                    return overlapsX && (birdY - 10 < gapTop || birdY + 10 > gapBottom);
                });
                if (hitPipe || birdY - 12 < 0 || birdY + 12 > 200) {
                    run = false;
                    draw();
                    addRunScore(sc);
                    setScore(Math.floor(sc));
                    setPhase("over");
                    return;
                }
            } else {
                sp += 0.0025 * k;
                sc += sp * k * 0.06;
                vy += 0.7 * k;
                yf = Math.min(G, yf + vy * k);
                if (gnd()) vy = 0;
                gap -= sp * k;
                if (gap <= 0) {
                    const bird = sc > 120 && Math.random() < 0.3, h = 30 + Math.floor(Math.random() * 18);
                    obs.push(bird ? {
                        x: W,
                        y: G - 52,
                        w: 30,
                        h: 18,
                        b: 1
                    } : {
                        x: W,
                        w: 14 + Math.floor(Math.random() * 14),
                        h,
                        y: G - h
                    });
                    gap = 260 + Math.random() * 260 + sp * 18;
                }
                obs.forEach((o)=>{
                    o.x -= sp * k;
                });
                obs = obs.filter((o)=>o.x > -40);
                const top = yf - hh();
                if (obs.some((o)=>72 > o.x && 44 < o.x + o.w && yf - 4 > o.y && top + 4 < o.y + o.h)) {
                    run = false;
                    draw();
                    addRunScore(sc);
                    setScore(Math.floor(sc));
                    setPhase("over");
                    return;
                }
            }
            setScore(Math.floor(sc));
            draw();
            raf = requestAnimationFrame(loop);
        }
        api.current = {
            jump,
            duck: dk,
            start () {
                if (!isCompetitionStarted()) {
                    setMsg("The competition has not started yet.");
                    return;
                }
                if (isCompetitionOver()) {
                    stop();
                    return;
                }
                activeSlot = gameIndexAt(Date.now() / 1000);
                if (activeSlot === 1) {
                    setMsg("The multiplayer race starts automatically during the second stage.");
                    return;
                }
                activeGame = activeSlot === 2 ? "shooter" : activeSlot === 3 ? "flappy" : "dino";
                yf = G;
                vy = 0;
                birdY = 100;
                birdVelocity = 0;
                duck = false;
                obs = [];
                pipes = [];
                sp = 6;
                sc = 0;
                gap = activeGame === "flappy" ? 0 : 80;
                f = 0;
                run = true;
                last = performance.now();
                setScore(0);
                setMsg("");
                setPhase("run");
                draw();
                raf = requestAnimationFrame(loop);
            },
            stop
        };
        draw();
        if (isCompetitionOver()) stop();
        const endTimer = window.setTimeout(stop, Math.max(0, endsAt * 1000 - Date.now()));
        const submissionTimer = window.setTimeout(()=>{
            if (Date.now() / 1000 > submissionDeadline) {
                setSubmissionState((current)=>current === "submitted" ? current : "closed");
                setPhase("ended");
                setMsg((current)=>current || "The final-score submission window has closed.");
            }
        }, Math.max(0, submissionDeadline * 1000 - Date.now() + 1000));
        return ()=>{
            run = false;
            cancelAnimationFrame(raf);
            clearTimeout(endTimer);
            clearTimeout(submissionTimer);
            window.removeEventListener("keydown", kd);
            window.removeEventListener("keyup", ku);
            window.removeEventListener("message", onShooterScore);
        };
    }, [
        endsAt,
        startsAt,
        storageReady,
        submissionDeadline,
        submitFinalTotal
    ]);
    if (banned) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "game-lockout",
        role: "alert",
        "aria-labelledby": "game-lockout-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "game-lockout-icon",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M7.5 10V7.5a4.5 4.5 0 0 1 9 0V10M6.5 10h11a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19.5v-8A1.5 1.5 0 0 1 6.5 10Z",
                            stroke: "currentColor",
                            strokeWidth: "1.8",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/components/DinoGame.tsx",
                            lineNumber: 548,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 14v3",
                            stroke: "currentColor",
                            strokeWidth: "1.8",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/components/DinoGame.tsx",
                            lineNumber: 549,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DinoGame.tsx",
                    lineNumber: 547,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/DinoGame.tsx",
                lineNumber: 546,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "game-lockout-copy",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "game-lockout-eyebrow",
                        children: "Fair-play protection"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DinoGame.tsx",
                        lineNumber: 553,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        id: "game-lockout-title",
                        children: "Competition locked"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DinoGame.tsx",
                        lineNumber: 554,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: msg || "Developer tools may be open. To protect fair play, this competition has been locked in this browser."
                    }, void 0, false, {
                        fileName: "[project]/src/components/DinoGame.tsx",
                        lineNumber: 555,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "game-lockout-detail",
                        children: "Play and score submission are disabled for this competition in this browser. This automatic check can be mistaken and is only a browser-side restriction."
                    }, void 0, false, {
                        fileName: "[project]/src/components/DinoGame.tsx",
                        lineNumber: 556,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DinoGame.tsx",
                lineNumber: 552,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DinoGame.tsx",
        lineNumber: 545,
        columnNumber: 22
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "top",
                style: {
                    margin: "10px 2px",
                    fontWeight: 700
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Game ",
                            activeGameIndex + 1,
                            "/",
                            GAME_NAMES.length,
                            ": ",
                            GAME_NAMES[activeGameIndex],
                            " · run score ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mono",
                                children: score
                            }, void 0, false, {
                                fileName: "[project]/src/components/DinoGame.tsx",
                                lineNumber: 562,
                                columnNumber: 103
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DinoGame.tsx",
                        lineNumber: 562,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mut",
                        children: [
                            "Competition total ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mono",
                                children: totalScore
                            }, void 0, false, {
                                fileName: "[project]/src/components/DinoGame.tsx",
                                lineNumber: 563,
                                columnNumber: 47
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DinoGame.tsx",
                        lineNumber: 563,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DinoGame.tsx",
                lineNumber: 561,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sm mut",
                style: {
                    margin: "0 2px 8px"
                },
                children: GAME_NAMES.map((name, index)=>{
                    const slotStart = startsAt + gameDuration * index;
                    const slotEnd = startsAt + gameDuration * (index + 1);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            marginRight: 12,
                            fontWeight: activeGameIndex === index ? 700 : 400
                        },
                        children: [
                            index + 1,
                            ". ",
                            name,
                            ": ",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fmt"])(gameDuration),
                            " (",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fmt"])(slotStart - startsAt),
                            "–",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fmt"])(slotEnd - startsAt),
                            ")"
                        ]
                    }, name, true, {
                        fileName: "[project]/src/components/DinoGame.tsx",
                        lineNumber: 569,
                        columnNumber: 16
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/DinoGame.tsx",
                lineNumber: 565,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gw",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                        ref: cv,
                        width: 640,
                        height: 200,
                        onPointerDown: ()=>api.current.jump(),
                        style: {
                            display: activeGameIndex === 1 || activeGameIndex === 2 ? "none" : "block"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/DinoGame.tsx",
                        lineNumber: 575,
                        columnNumber: 7
                    }, this),
                    activeGameIndex === 2 && phase === "run" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        title: "FPS Team Deathmatch",
                        src: "/team-deathmatch.html?competition=1",
                        style: {
                            display: "block",
                            width: "100%",
                            height: "min(72vh, 680px)",
                            minHeight: 440,
                            border: 0,
                            background: "#111"
                        },
                        allow: "fullscreen; pointer-lock"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DinoGame.tsx",
                        lineNumber: 576,
                        columnNumber: 52
                    }, this),
                    activeGameIndex === 1 && storageReady && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RaceStage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        competitionId: competitionId,
                        playerId: playerId,
                        playerName: playerName,
                        initialPoints: racePoints,
                        onScore: recordRaceScore
                    }, void 0, false, {
                        fileName: "[project]/src/components/DinoGame.tsx",
                        lineNumber: 577,
                        columnNumber: 49
                    }, this),
                    phase !== "run" && activeGameIndex !== 1 && activeGameIndex !== 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ov",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                style: {
                                    fontSize: 22
                                },
                                children: phase === "ready" ? clockNow < startsAt ? "Competition has not started" : `Ready for ${GAME_NAMES[activeGameIndex]}` : phase === "over" ? "Game over" : phase === "settling" ? "Processing competition scores" : phase === "banned" ? "Competition locked" : "Competition ended"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DinoGame.tsx",
                                lineNumber: 585,
                                columnNumber: 9
                            }, this),
                            phase === "over" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mono",
                                style: {
                                    fontSize: 30
                                },
                                children: score
                            }, void 0, false, {
                                fileName: "[project]/src/components/DinoGame.tsx",
                                lineNumber: 586,
                                columnNumber: 30
                            }, this),
                            phase === "settling" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mono",
                                children: [
                                    "Final total: ",
                                    totalScore
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DinoGame.tsx",
                                lineNumber: 587,
                                columnNumber: 34
                            }, this),
                            (phase === "settling" || phase === "ended") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sm mut",
                                role: "status",
                                children: msg
                            }, void 0, false, {
                                fileName: "[project]/src/components/DinoGame.tsx",
                                lineNumber: 588,
                                columnNumber: 57
                            }, this),
                            phase === "settling" && submissionState === "submitting" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sm",
                                children: "Waiting for Phantom approval and Solana confirmation…"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DinoGame.tsx",
                                lineNumber: 589,
                                columnNumber: 70
                            }, this),
                            (phase === "settling" || phase === "ended") && submissionState === "failed" && Date.now() / 1000 <= submissionDeadline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn sec",
                                onClick: ()=>void submitFinalTotal(),
                                children: "Submit final total again"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DinoGame.tsx",
                                lineNumber: 591,
                                columnNumber: 11
                            }, this),
                            (phase === "ready" || phase === "over") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn",
                                disabled: phase === "ready" && (!storageReady || clockNow < startsAt),
                                onClick: ()=>api.current.start(),
                                children: phase === "ready" ? !storageReady ? "Clearing website storage…" : clockNow < startsAt ? `Starts in ${Math.max(0, startsAt - clockNow)}s` : "Start" : "Play again"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DinoGame.tsx",
                                lineNumber: 592,
                                columnNumber: 53
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DinoGame.tsx",
                        lineNumber: 584,
                        columnNumber: 77
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DinoGame.tsx",
                lineNumber: 574,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "sm mut",
                children: "The competition is split evenly across four stages: Dino Champions, multiplayer Rocket Race, FPS Team Deathmatch, then Flappy Bird. Use Space / ↑ to jump or flap, ↓ to duck in Dino Champions, the race controls during Rocket Race, and WASD + mouse in FPS Team Deathmatch. FPS kills count toward your competition score. Scores from all four games are added to your competition total and saved in this browser. At the end, approve one Phantom transaction to submit your final total."
            }, void 0, false, {
                fileName: "[project]/src/components/DinoGame.tsx",
                lineNumber: 597,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DinoGame.tsx",
        lineNumber: 560,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/RaceStage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RaceStage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm-debug/index.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
;
const TRACK_WIDTH = 28;
const TRACK_SAMPLES = 420;
const MAX_VISIBLE_RACERS = 4;
const MAX_SPEED_KMH = 148;
function playerColor(id) {
    const hash = [
        ...id
    ].reduce((value, character)=>value * 31 + character.charCodeAt(0) >>> 0, 7);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"]().setHSL(hash % 360 / 360, 0.76, 0.49);
}
function makeTrackCurve() {
    const points = Array.from({
        length: 100
    }, (_, index)=>{
        const angle = index / 100 * Math.PI * 2;
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](Math.cos(angle) * 76, 0, Math.sin(angle) * 112);
    });
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CatmullRomCurve3"](points, true, "catmullrom", 0.18);
}
function pointOnTrack(curve, progress, lane = 1.5) {
    const t = (progress % 1 + 1) % 1;
    const position = curve.getPointAt(t);
    const tangent = curve.getTangentAt(t).normalize();
    const side = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](-tangent.z, 0, tangent.x);
    position.addScaledVector(side, (lane - 1.5) * 3.2);
    return {
        position,
        tangent
    };
}
function addTrackSurface(scene, curve) {
    const positions = [];
    const indices = [];
    const halfWidth = TRACK_WIDTH / 2;
    for(let index = 0; index <= TRACK_SAMPLES; index += 1){
        const t = index / TRACK_SAMPLES;
        const center = curve.getPointAt(t);
        const tangent = curve.getTangentAt(t).normalize();
        const side = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](-tangent.z, 0, tangent.x);
        for (const edge of [
            -halfWidth,
            halfWidth
        ]){
            const vertex = center.clone().addScaledVector(side, edge);
            vertex.y = 0.03;
            positions.push(vertex.x, vertex.y, vertex.z);
        }
        if (index < TRACK_SAMPLES) {
            const start = index * 2;
            indices.push(start, start + 1, start + 2, start + 1, start + 3, start + 2);
        }
    }
    const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferGeometry"]();
    geometry.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](positions, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    const road = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](geometry, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: 0x282d33,
        roughness: 0.94,
        metalness: 0.03
    }));
    road.receiveShadow = true;
    scene.add(road);
    const kerbGeometries = [
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferGeometry"](),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferGeometry"]()
    ];
    const kerbPositions = [
        [],
        []
    ];
    const kerbIndices = [
        [],
        []
    ];
    for(let index = 0; index < TRACK_SAMPLES; index += 1){
        const t0 = index / TRACK_SAMPLES;
        const t1 = (index + 1) / TRACK_SAMPLES;
        const center0 = curve.getPointAt(t0);
        const center1 = curve.getPointAt(t1);
        const tangent0 = curve.getTangentAt(t0).normalize();
        const tangent1 = curve.getTangentAt(t1).normalize();
        const side0 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](-tangent0.z, 0, tangent0.x);
        const side1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](-tangent1.z, 0, tangent1.x);
        const colorIndex = Math.floor(index / 5) % 2;
        for (const direction of [
            -1,
            1
        ]){
            const vertices = kerbPositions[colorIndex];
            const indicesForColor = kerbIndices[colorIndex];
            const first = vertices.length / 3;
            for (const [center, side, offset] of [
                [
                    center0,
                    side0,
                    direction * 11.65
                ],
                [
                    center0,
                    side0,
                    direction * 14
                ],
                [
                    center1,
                    side1,
                    direction * 11.65
                ],
                [
                    center1,
                    side1,
                    direction * 14
                ]
            ]){
                const vertex = center.clone().addScaledVector(side, offset);
                vertex.y = 0.09;
                vertices.push(vertex.x, vertex.y, vertex.z);
            }
            indicesForColor.push(first, first + 1, first + 2, first + 1, first + 3, first + 2);
        }
    }
    kerbGeometries.forEach((geometry, index)=>{
        geometry.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](kerbPositions[index], 3));
        geometry.setIndex(kerbIndices[index]);
        geometry.computeVertexNormals();
        const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](geometry, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: index === 0 ? 0xf2f2ec : 0xe5453f,
            roughness: 0.76,
            side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoubleSide"]
        }));
        mesh.receiveShadow = true;
        scene.add(mesh);
    });
    const railMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: 0xbcc7d0,
        metalness: 0.7,
        roughness: 0.31
    });
    for (const direction of [
        -1,
        1
    ]){
        const railPoints = Array.from({
            length: 100
        }, (_, index)=>{
            const t = index / 100;
            const center = curve.getPointAt(t);
            const tangent = curve.getTangentAt(t).normalize();
            return center.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](-tangent.z, 0, tangent.x).multiplyScalar(direction * 15.2)).setY(0.78);
        });
        const railCurve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CatmullRomCurve3"](railPoints, true, "centripetal");
        const rail = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TubeGeometry"](railCurve, 600, 0.2, 7, true), railMaterial);
        rail.castShadow = true;
        scene.add(rail);
    }
    const dashedMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: 0xf3f3e8,
        roughness: 0.78
    });
    const centerPoints = Array.from({
        length: 240
    }, (_, index)=>{
        const point = curve.getPointAt(index / 240);
        return point.setY(0.065);
    });
    const centerLine = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineLoop"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferGeometry"]().setFromPoints(centerPoints), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
        color: 0x60666c
    }));
    scene.add(centerLine);
    for (const lane of [
        -0.5,
        0.5
    ]){
        for(let index = 0; index < 120; index += 2){
            const t = index / 120;
            const center = curve.getPointAt(t);
            const tangent = curve.getTangentAt(t).normalize();
            const side = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](-tangent.z, 0, tangent.x);
            const dash = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxGeometry"](0.12, 0.025, 2.4), dashedMaterial);
            dash.position.copy(center.addScaledVector(side, lane * 3.2));
            dash.position.y = 0.075;
            dash.rotation.y = Math.atan2(tangent.x, tangent.z);
            scene.add(dash);
        }
    }
    const start = pointOnTrack(curve, 0);
    const startRotation = Math.atan2(start.tangent.x, start.tangent.z);
    const tileCount = 28;
    const tileMaterial = [
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: 0xf5f5f2,
            roughness: 0.72
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: 0x151719,
            roughness: 0.72
        })
    ];
    for(let tile = 0; tile < tileCount; tile += 1){
        const offset = (tile - (tileCount - 1) / 2) * (TRACK_WIDTH / tileCount);
        const checker = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxGeometry"](TRACK_WIDTH / tileCount, 0.055, 1.35), tileMaterial[tile % 2]);
        checker.position.copy(start.position);
        checker.position.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](-start.tangent.z, 0, start.tangent.x).multiplyScalar(offset));
        checker.position.y = 0.105;
        checker.rotation.y = startRotation;
        scene.add(checker);
    }
}
function addGrandstand(scene, curve, progress, sideSign, materials) {
    const trackPoint = curve.getPointAt(progress);
    const tangent = curve.getTangentAt(progress).normalize();
    const side = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](-tangent.z, 0, tangent.x).multiplyScalar(sideSign);
    const stand = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
    stand.position.copy(trackPoint).addScaledVector(side, 26);
    stand.position.y = 0.05;
    stand.rotation.y = Math.atan2(tangent.x, tangent.z);
    const base = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxGeometry"](29, 1.1, 9), materials[0]);
    base.position.y = 0.55;
    base.castShadow = true;
    stand.add(base);
    for(let row = 0; row < 5; row += 1){
        const seat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxGeometry"](27, 0.34, 1.25), materials[1 + row % (materials.length - 1)]);
        seat.position.set(0, 1.3 + row * 0.62, -3.15 + row * 1.15);
        seat.castShadow = true;
        seat.receiveShadow = true;
        stand.add(seat);
    }
    const roof = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxGeometry"](31, 0.45, 11), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: 0x283746,
        metalness: 0.47,
        roughness: 0.4
    }));
    roof.position.set(0, 4.95, 0);
    roof.castShadow = true;
    stand.add(roof);
    scene.add(stand);
}
function addTree(scene, position, trunkGeometry, crownGeometry, materials, scale) {
    const tree = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
    const trunk = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](trunkGeometry, materials[0]);
    trunk.position.y = scale * 1.1;
    trunk.scale.set(scale, scale, scale);
    trunk.castShadow = true;
    const crown = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](crownGeometry, materials[1 + Math.floor(scale * 2) % (materials.length - 1)]);
    crown.position.y = scale * 3;
    crown.scale.set(scale * 1.5, scale * 1.85, scale * 1.5);
    crown.castShadow = true;
    tree.add(trunk, crown);
    tree.position.copy(position);
    scene.add(tree);
}
function addWorld(scene, curve) {
    const ground = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](800, 800), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: 0x38644b,
        roughness: 1
    }));
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.16;
    ground.receiveShadow = true;
    scene.add(ground);
    const turf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CircleGeometry"](1, 160), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: 0x426b49,
        roughness: 1,
        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoubleSide"]
    }));
    turf.rotation.x = -Math.PI / 2;
    turf.position.y = -0.1;
    turf.scale.set(61, 97, 1);
    scene.add(turf);
    const treeMaterials = [
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: 0x61412c,
            roughness: 1
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: 0x235b3d,
            roughness: 1
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: 0x34734a,
            roughness: 1
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: 0x458355,
            roughness: 1
        })
    ];
    const trunkGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.28, 0.43, 2, 7);
    const crownGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IcosahedronGeometry"](1, 1);
    for(let index = 0; index < 44; index += 1){
        const progress = index / 44;
        const point = curve.getPointAt(progress);
        const tangent = curve.getTangentAt(progress).normalize();
        const side = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](-tangent.z, 0, tangent.x);
        const distance = 25 + index * 17 % 24;
        const position = point.addScaledVector(side, index % 2 === 0 ? distance : -distance);
        addTree(scene, position, trunkGeometry, crownGeometry, treeMaterials, 0.8 + index % 5 * 0.13);
    }
    const standMaterials = [
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: 0x626b73,
            roughness: 0.84
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: 0x176bd1,
            roughness: 0.57
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: 0xe74e4c,
            roughness: 0.57
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: 0xffcc55,
            roughness: 0.57
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: 0xf4f5f3,
            roughness: 0.57
        })
    ];
    addGrandstand(scene, curve, 0.16, 1, standMaterials);
    addGrandstand(scene, curve, 0.42, -1, standMaterials);
    addGrandstand(scene, curve, 0.66, 1, standMaterials);
    addGrandstand(scene, curve, 0.9, -1, standMaterials);
    const lampMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: 0x75808a,
        metalness: 0.8,
        roughness: 0.25
    });
    const lampGlow = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: 0xfff4d0,
        emissive: 0xffe4a0,
        emissiveIntensity: 2.4
    });
    for(let index = 0; index < 12; index += 1){
        const progress = index / 12;
        const point = curve.getPointAt(progress);
        const tangent = curve.getTangentAt(progress).normalize();
        const side = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](-tangent.z, 0, tangent.x);
        const position = point.addScaledVector(side, index % 2 === 0 ? 20 : -20);
        const post = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.14, 0.2, 17, 8), lampMaterial);
        post.position.copy(position);
        post.position.y = 8.5;
        post.castShadow = true;
        scene.add(post);
        const head = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxGeometry"](2.3, 0.42, 1.25), lampGlow);
        head.position.copy(position);
        head.position.y = 17;
        scene.add(head);
    }
}
function addBox(parent, geometry, material, position) {
    const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](geometry, material);
    mesh.position.set(...position);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
}
function createCar(player, isPlayer) {
    const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
    const paint = playerColor(player.id);
    const bodyMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        color: paint,
        metalness: 0.72,
        roughness: 0.24,
        clearcoat: 1,
        clearcoatRoughness: 0.12
    });
    const darkPaint = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: 0x111820,
        metalness: 0.75,
        roughness: 0.31
    });
    const glass = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        color: 0x17334a,
        metalness: 0.62,
        roughness: 0.13,
        clearcoat: 1,
        transparent: true,
        opacity: 0.94
    });
    const tireMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: 0x101215,
        roughness: 0.87,
        metalness: 0.02
    });
    const rimMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: 0x9eabb5,
        roughness: 0.23,
        metalness: 0.88
    });
    const lightMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: 0xe4f5ff,
        emissive: 0xa3dfff,
        emissiveIntensity: 2.8,
        roughness: 0.25
    });
    const tailMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: 0xff3737,
        emissive: 0xff0808,
        emissiveIntensity: 2.5,
        roughness: 0.3
    });
    const wheelGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.49, 0.49, 0.42, 32);
    const rimGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.29, 0.29, 0.435, 28);
    const wheelCenters = [
        [
            -1.15,
            0.49,
            1.36
        ],
        [
            1.15,
            0.49,
            1.36
        ],
        [
            -1.15,
            0.49,
            -1.35
        ],
        [
            1.15,
            0.49,
            -1.35
        ]
    ];
    const wheels = wheelCenters.map(([x, y, z], index)=>{
        const steeringPivot = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
        steeringPivot.position.set(x, y, z);
        const spinPivot = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
        const tire = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](wheelGeometry, tireMaterial);
        tire.rotation.z = Math.PI / 2;
        tire.castShadow = true;
        spinPivot.add(tire);
        const rim = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](rimGeometry, rimMaterial);
        rim.rotation.z = Math.PI / 2;
        spinPivot.add(rim);
        const hub = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.085, 0.085, 0.45, 16), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: paint,
            metalness: 0.8,
            roughness: 0.24
        }));
        hub.rotation.z = Math.PI / 2;
        spinPivot.add(hub);
        steeringPivot.add(spinPivot);
        root.add(steeringPivot);
        return {
            steeringPivot,
            spinPivot,
            isFront: index < 2
        };
    });
    const bodyShape = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Shape"]();
    bodyShape.moveTo(-2.27, 0.47);
    bodyShape.lineTo(-2.22, 0.77);
    bodyShape.lineTo(-1.72, 0.94);
    bodyShape.lineTo(-1.12, 1.02);
    bodyShape.lineTo(-0.78, 1.57);
    bodyShape.quadraticCurveTo(-0.61, 1.77, -0.34, 1.78);
    bodyShape.lineTo(0.63, 1.78);
    bodyShape.quadraticCurveTo(0.88, 1.75, 1.03, 1.51);
    bodyShape.lineTo(1.51, 0.97);
    bodyShape.lineTo(2.14, 0.82);
    bodyShape.lineTo(2.29, 0.65);
    bodyShape.lineTo(2.22, 0.48);
    bodyShape.closePath();
    const bodyGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExtrudeGeometry"](bodyShape, {
        depth: 1.86,
        bevelEnabled: true,
        bevelSegments: 3,
        steps: 1,
        bevelSize: 0.055,
        bevelThickness: 0.045,
        curveSegments: 8
    });
    const body = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](bodyGeometry, bodyMaterial);
    body.rotation.y = -Math.PI / 2;
    body.position.x = 0.93;
    body.castShadow = true;
    body.receiveShadow = true;
    root.add(body);
    const cabinShape = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Shape"]();
    cabinShape.moveTo(-1.04, 1.04);
    cabinShape.lineTo(-0.68, 1.62);
    cabinShape.quadraticCurveTo(-0.56, 1.75, -0.34, 1.75);
    cabinShape.lineTo(0.62, 1.75);
    cabinShape.lineTo(1.13, 1.04);
    cabinShape.closePath();
    const cabinGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExtrudeGeometry"](cabinShape, {
        depth: 1.43,
        bevelEnabled: true,
        bevelSegments: 2,
        bevelSize: 0.025,
        bevelThickness: 0.025
    });
    const cabin = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](cabinGeometry, glass);
    cabin.rotation.y = -Math.PI / 2;
    cabin.position.x = 0.715;
    cabin.castShadow = true;
    root.add(cabin);
    const roof = addBox(root, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxGeometry"](1.32, 0.13, 1.08), bodyMaterial, [
        0,
        1.78,
        0.1
    ]);
    roof.rotation.x = -0.035;
    addBox(root, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxGeometry"](1.99, 0.15, 0.14), darkPaint, [
        0,
        0.71,
        2.16
    ]);
    addBox(root, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxGeometry"](1.98, 0.18, 0.16), darkPaint, [
        0,
        0.61,
        -2.12
    ]);
    addBox(root, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxGeometry"](1.73, 0.12, 0.31), bodyMaterial, [
        0,
        1.04,
        -1.96
    ]);
    for (const side of [
        -1,
        1
    ]){
        const mirror = addBox(root, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxGeometry"](0.32, 0.17, 0.29), bodyMaterial, [
            side * 1.04,
            1.17,
            0.75
        ]);
        mirror.rotation.z = side * -0.12;
        addBox(root, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxGeometry"](0.045, 0.26, 1.08), darkPaint, [
            side * 0.91,
            1.3,
            -0.05
        ]);
        addBox(root, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxGeometry"](0.04, 0.22, 0.95), bodyMaterial, [
            side * 0.94,
            1.3,
            -0.03
        ]);
        const headlight = addBox(root, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxGeometry"](0.58, 0.12, 0.055), lightMaterial, [
            side * 0.61,
            0.88,
            2.265
        ]);
        headlight.rotation.z = side * -0.13;
        const rearLight = addBox(root, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxGeometry"](0.59, 0.13, 0.07), tailMaterial, [
            side * 0.62,
            0.85,
            -2.24
        ]);
        rearLight.rotation.z = side * 0.1;
        const exhaust = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConeGeometry"](0.13, 0.53, 10), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            color: 0xff8b3d,
            transparent: true,
            opacity: 0.7
        }));
        exhaust.rotation.x = -Math.PI / 2;
        exhaust.position.set(side * 0.48, 0.47, -2.36);
        exhaust.scale.set(1, 0.15, 1);
        exhaust.visible = false;
        root.add(exhaust);
        if (side === -1) root.userData.flameLeft = exhaust;
        else root.userData.flameRight = exhaust;
        const mirrorStem = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.035, 0.04, 0.22, 8), darkPaint);
        mirrorStem.position.set(side * 1.02, 1.11, 0.77);
        root.add(mirrorStem);
    }
    const spoilerSupports = [
        -0.62,
        0.62
    ].map((x)=>{
        const support = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxGeometry"](0.08, 0.43, 0.1), darkPaint);
        support.position.set(x, 1.23, -1.87);
        root.add(support);
        return support;
    });
    void spoilerSupports;
    const spoiler = addBox(root, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxGeometry"](1.7, 0.13, 0.47), bodyMaterial, [
        0,
        1.47,
        -1.92
    ]);
    spoiler.rotation.x = 0.06;
    const underglow = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxGeometry"](1.7, 0.035, 3.05), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
        color: isPlayer ? 0x3acaff : paint,
        transparent: true,
        opacity: 0.64
    }));
    underglow.position.y = 0.38;
    root.add(underglow);
    const flame = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConeGeometry"](0.2, 0.65, 12), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
        color: 0x40caff,
        transparent: true,
        opacity: 0.88,
        blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdditiveBlending"],
        depthWrite: false
    }));
    flame.rotation.x = -Math.PI / 2;
    flame.position.set(0, 0.49, -2.5);
    flame.scale.set(1, 0.1, 1);
    flame.visible = false;
    root.add(flame);
    return {
        root,
        wheels,
        flame
    };
}
function disposeCar(car) {
    car.root.traverse((object)=>{
        if (!(object instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"])) return;
        object.geometry.dispose();
        const materials = Array.isArray(object.material) ? object.material : [
            object.material
        ];
        materials.forEach((material)=>material.dispose());
    });
}
function RaceStage({ competitionId, playerId, playerName, initialPoints, onScore }) {
    const viewRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const latestRace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(initialPoints);
    const lastInputAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        accelerate: false,
        brake: false,
        steer: 0
    });
    const [race, setRace] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [connected, setConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [graphicsError, setGraphicsError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        lastPoints.current = initialPoints;
    }, [
        initialPoints
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])(window.location.origin, {
            transports: [
                "websocket",
                "polling"
            ]
        });
        socketRef.current = socket;
        socket.on("connect", ()=>{
            setConnected(true);
            setError("");
            socket.emit("race:join", {
                competitionId,
                playerId,
                playerName
            });
        });
        socket.on("disconnect", ()=>setConnected(false));
        socket.on("connect_error", (connectionError)=>{
            setConnected(false);
            setError(`Race server unavailable: ${connectionError.message}`);
        });
        socket.on("race:error", (message)=>setError(message));
        socket.on("race:state", (nextRace)=>{
            latestRace.current = nextRace;
            setRace(nextRace);
            const myPoints = nextRace.players.find((player)=>player.id === playerId)?.points;
            if (typeof myPoints === "number") {
                if (myPoints > lastPoints.current) onScore(myPoints - lastPoints.current, myPoints);
                lastPoints.current = myPoints;
            }
        });
        return ()=>{
            socket.disconnect();
            socketRef.current = null;
        };
    }, [
        competitionId,
        onScore,
        playerId,
        playerName
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const host = viewRef.current;
        if (!host) return;
        let renderer;
        try {
            renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                antialias: true,
                alpha: false,
                powerPreference: "high-performance"
            });
        } catch (renderError) {
            const detail = renderError instanceof Error ? renderError.message : String(renderError);
            setGraphicsError(`3D graphics could not start: ${detail}`);
            return;
        }
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.7));
        renderer.outputColorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
        renderer.toneMapping = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACESFilmicToneMapping"];
        renderer.toneMappingExposure = 1.22;
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PCFSoftShadowMap"];
        renderer.domElement.setAttribute("aria-label", "Live 3D multiplayer rocket car race");
        host.appendChild(renderer.domElement);
        const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"]();
        scene.background = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](0x9bc6e5);
        scene.fog = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fog"](0x9bc6e5, 190, 540);
        const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerspectiveCamera"](46, 16 / 9, 0.1, 900);
        camera.position.set(0, 3.2, 9.6);
        camera.lookAt(0, 0.8, 0);
        scene.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HemisphereLight"](0xdcefff, 0x49563d, 2.15));
        const sunlight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DirectionalLight"](0xfff1d4, 3.1);
        sunlight.position.set(-100, 150, 75);
        sunlight.castShadow = true;
        sunlight.shadow.mapSize.set(2048, 2048);
        sunlight.shadow.camera.left = -180;
        sunlight.shadow.camera.right = 180;
        sunlight.shadow.camera.top = 180;
        sunlight.shadow.camera.bottom = -180;
        sunlight.shadow.camera.near = 10;
        sunlight.shadow.camera.far = 420;
        sunlight.shadow.bias = -0.00015;
        scene.add(sunlight);
        const track = makeTrackCurve();
        addWorld(scene, track);
        addTrackSurface(scene, track);
        const cars = new Map();
        const clock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Clock"]();
        const cameraTarget = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        const cameraPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        const desiredCameraPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        const lastRoadProgress = new Map();
        let animationFrame = 0;
        let disposed = false;
        const resize = ()=>{
            const width = Math.max(1, host.clientWidth);
            const height = Math.max(1, host.clientHeight);
            renderer.setSize(width, height, false);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };
        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(host);
        resize();
        const animate = ()=>{
            if (disposed) return;
            animationFrame = requestAnimationFrame(animate);
            const delta = Math.min(clock.getDelta(), 0.05);
            const state = latestRace.current;
            if (state) {
                const localPlayer = state.players.find((player)=>player.id === playerId);
                const relevantPlayers = state.players.filter((player)=>player.connected).sort((a, b)=>{
                    if (a.id === playerId) return -1;
                    if (b.id === playerId) return 1;
                    return Math.abs(a.distance - (localPlayer?.distance ?? 0)) - Math.abs(b.distance - (localPlayer?.distance ?? 0));
                }).slice(0, MAX_VISIBLE_RACERS);
                if (localPlayer && !relevantPlayers.some((player)=>player.id === playerId)) relevantPlayers.unshift(localPlayer);
                const visibleIds = new Set(relevantPlayers.map((player)=>player.id));
                for (const [id, car] of cars){
                    if (visibleIds.has(id)) continue;
                    scene.remove(car.root);
                    disposeCar(car);
                    cars.delete(id);
                    lastRoadProgress.delete(id);
                }
                for (const player of relevantPlayers){
                    let car = cars.get(player.id);
                    if (!car) {
                        car = createCar(player, player.id === playerId);
                        cars.set(player.id, car);
                        scene.add(car.root);
                        const start = pointOnTrack(track, 0, player.lane);
                        car.root.position.copy(start.position);
                        car.root.rotation.y = Math.atan2(start.tangent.x, start.tangent.z);
                    }
                    const progress = player.distance / Math.max(1, state.lapDistance);
                    const previousProgress = lastRoadProgress.get(player.id) ?? progress;
                    const smoothedProgress = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].damp(previousProgress, progress, 7, delta);
                    lastRoadProgress.set(player.id, smoothedProgress);
                    const point = pointOnTrack(track, smoothedProgress, player.lane);
                    const targetPosition = point.position;
                    targetPosition.y = 0.02;
                    car.root.position.lerp(targetPosition, 1 - Math.exp(-delta * 9));
                    car.root.scale.setScalar(player.id === playerId ? 1.18 : 1.08);
                    const visualSteer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].damp(Number(car.root.userData.visualSteer ?? 0), player.steer, 10, delta);
                    car.root.userData.visualSteer = visualSteer;
                    const lateralSpeed = player.laneVelocity * 3.2;
                    const slipAngle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].clamp(Math.atan2(-lateralSpeed, Math.max(player.speed / 3.6, 4)), -0.42, 0.42);
                    const targetRotation = Math.atan2(point.tangent.x, point.tangent.z) + slipAngle;
                    car.root.rotation.y += Math.atan2(Math.sin(targetRotation - car.root.rotation.y), Math.cos(targetRotation - car.root.rotation.y)) * (1 - Math.exp(-delta * 12));
                    const targetRoll = -visualSteer * 0.09;
                    car.root.rotation.z += (targetRoll - car.root.rotation.z) * (1 - Math.exp(-delta * 7));
                    car.wheels.forEach((wheel)=>{
                        wheel.spinPivot.rotation.x -= player.speed / 3.6 * delta / 0.49;
                        wheel.steeringPivot.rotation.y = wheel.isFront ? -visualSteer * 0.38 : 0;
                    });
                    const boost = player.speed > 105;
                    car.flame.visible = boost;
                    car.flame.scale.y = boost ? 0.34 + Math.random() * 0.48 : 0.1;
                    for (const exhaust of [
                        car.root.userData.flameLeft,
                        car.root.userData.flameRight
                    ]){
                        exhaust.visible = player.speed > 180;
                        exhaust.scale.y = exhaust.visible ? 0.2 + Math.random() * 0.3 : 0.1;
                    }
                }
                const playerCar = cars.get(playerId);
                const playerState = localPlayer;
                if (playerCar && playerState) {
                    const playerProgress = lastRoadProgress.get(playerId) ?? 0;
                    const ahead = pointOnTrack(track, playerProgress + 0.012);
                    const tangent = ahead.tangent;
                    const followDistance = 7.2;
                    desiredCameraPosition.copy(playerCar.root.position).addScaledVector(tangent, -followDistance).add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 2.7 + Math.min(1.8, playerState.speed * 0.012), 0));
                    cameraPosition.lerp(desiredCameraPosition, 1 - Math.exp(-delta * 3.4));
                    camera.position.copy(cameraPosition);
                    cameraTarget.copy(playerCar.root.position).addScaledVector(tangent, 7).add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 1.1, 0));
                    camera.lookAt(cameraTarget);
                    const targetFov = 42 + Math.min(10, playerState.speed * 0.08);
                    camera.fov += (targetFov - camera.fov) * (1 - Math.exp(-delta * 2.2));
                    camera.updateProjectionMatrix();
                }
            }
            renderer.render(scene, camera);
        };
        animate();
        return ()=>{
            disposed = true;
            cancelAnimationFrame(animationFrame);
            resizeObserver.disconnect();
            for (const car of cars.values())disposeCar(car);
            cars.clear();
            scene.traverse((object)=>{
                if (!(object instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"])) return;
                object.geometry.dispose();
                const materials = Array.isArray(object.material) ? object.material : [
                    object.material
                ];
                materials.forEach((material)=>material.dispose());
            });
            renderer.dispose();
            renderer.domElement.remove();
        };
    }, [
        playerId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const sendControls = (next)=>{
            controls.current = next;
            const now = Date.now();
            if (now - lastInputAt.current >= 35) {
                socketRef.current?.emit("race:input", next);
                lastInputAt.current = now;
            }
        };
        const keyChange = (event, down)=>{
            const { code } = event;
            if (![
                "ArrowUp",
                "ArrowDown",
                "ArrowLeft",
                "ArrowRight",
                "KeyW",
                "KeyA",
                "KeyS",
                "KeyD",
                "Space"
            ].includes(code)) return;
            event.preventDefault();
            const current = controls.current;
            sendControls({
                accelerate: code === "ArrowUp" || code === "KeyW" || code === "Space" ? down : current.accelerate,
                brake: code === "ArrowDown" || code === "KeyS" ? down : current.brake,
                steer: (()=>{
                    const steerDirection = code === "ArrowLeft" ? -1 : code === "ArrowRight" ? 1 : code === "KeyA" ? -1 : code === "KeyD" ? 1 : null;
                    if (steerDirection === null) return current.steer;
                    return down ? steerDirection : current.steer === steerDirection ? 0 : current.steer;
                })()
            });
        };
        const releaseControls = ()=>sendControls({
                accelerate: false,
                brake: false,
                steer: 0
            });
        const keyDown = (event)=>keyChange(event, true);
        const keyUp = (event)=>keyChange(event, false);
        window.addEventListener("keydown", keyDown);
        window.addEventListener("keyup", keyUp);
        window.addEventListener("blur", releaseControls);
        return ()=>{
            window.removeEventListener("keydown", keyDown);
            window.removeEventListener("keyup", keyUp);
            window.removeEventListener("blur", releaseControls);
        };
    }, []);
    const me = race?.players.find((player)=>player.id === playerId);
    const leaders = race?.players.slice().sort((a, b)=>b.distance - a.distance || b.points - a.points).slice(0, 3) ?? [];
    const currentLap = Math.min(race?.totalLaps ?? 3, Math.floor((me?.distance ?? 0) / Math.max(1, race?.lapDistance ?? 1)) + 1);
    const phaseText = !race ? "Joining the grid" : race.phase === "countdown" ? `Round ${race.round} · lights in ${Math.max(1, Math.ceil((race.phaseEndsAt - Date.now()) / 1000))}` : race.phase === "results" ? `Round ${race.round} complete · next grid forming` : `Round ${race.round} · ${Math.round(me?.speed ?? 0)} km/h`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "top sm mut",
                style: {
                    marginBottom: 8
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: connected ? `Live grid · ${race?.players.length ?? 1}/${race?.maxPlayers ?? 4} racers` : "Connecting to multiplayer race…"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RaceStage.tsx",
                        lineNumber: 848,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Your race points: ",
                            me?.points ?? initialPoints
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RaceStage.tsx",
                        lineNumber: 849,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RaceStage.tsx",
                lineNumber: 847,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gw",
                style: {
                    position: "relative",
                    overflow: "hidden",
                    padding: 0,
                    background: "#111b24",
                    border: "1px solid rgba(191,222,255,.26)",
                    borderRadius: 16,
                    boxShadow: "0 24px 70px rgba(0,0,0,.42), inset 0 1px rgba(255,255,255,.12)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: viewRef,
                        style: {
                            width: "100%",
                            aspectRatio: "16 / 9",
                            minHeight: 300
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/RaceStage.tsx",
                        lineNumber: 863,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: "14px 14px auto",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            gap: 12,
                            pointerEvents: "none"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "10px 14px",
                                    borderRadius: 12,
                                    color: "white",
                                    background: "rgba(8,16,25,.72)",
                                    border: "1px solid rgba(255,255,255,.17)",
                                    backdropFilter: "blur(10px)",
                                    textShadow: "0 1px 8px #000"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontWeight: 850,
                                            letterSpacing: ".08em",
                                            fontSize: 13
                                        },
                                        children: "ROCKET GRAND PRIX"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RaceStage.tsx",
                                        lineNumber: 882,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sm",
                                        style: {
                                            opacity: 0.86
                                        },
                                        children: phaseText
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RaceStage.tsx",
                                        lineNumber: 883,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RaceStage.tsx",
                                lineNumber: 873,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "10px 14px",
                                    borderRadius: 12,
                                    color: "white",
                                    textAlign: "right",
                                    background: "rgba(8,16,25,.72)",
                                    border: "1px solid rgba(255,255,255,.17)",
                                    backdropFilter: "blur(10px)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 24,
                                            fontWeight: 900,
                                            fontVariantNumeric: "tabular-nums",
                                            lineHeight: 1
                                        },
                                        children: [
                                            Math.round(me?.speed ?? 0),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                style: {
                                                    fontSize: 11,
                                                    fontWeight: 700
                                                },
                                                children: "KM/H"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RaceStage.tsx",
                                                lineNumber: 895,
                                                columnNumber: 42
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RaceStage.tsx",
                                        lineNumber: 894,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        role: "meter",
                                        "aria-label": "Live vehicle speed",
                                        "aria-valuemin": 0,
                                        "aria-valuemax": MAX_SPEED_KMH,
                                        "aria-valuenow": Math.round(me?.speed ?? 0),
                                        style: {
                                            width: 92,
                                            height: 5,
                                            marginTop: 7,
                                            borderRadius: 5,
                                            background: "rgba(255,255,255,.22)",
                                            overflow: "hidden"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: `${Math.min(100, Math.max(0, (me?.speed ?? 0) / MAX_SPEED_KMH * 100))}%`,
                                                height: "100%",
                                                background: "linear-gradient(90deg, #38d99a, #ffd45c, #ff625e)",
                                                transition: "width 100ms linear"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RaceStage.tsx",
                                            lineNumber: 905,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RaceStage.tsx",
                                        lineNumber: 897,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sm",
                                        style: {
                                            opacity: 0.78
                                        },
                                        children: [
                                            "LAP ",
                                            me?.finished ? race?.totalLaps : currentLap,
                                            "/",
                                            race?.totalLaps ?? 3
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RaceStage.tsx",
                                        lineNumber: 912,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RaceStage.tsx",
                                lineNumber: 885,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RaceStage.tsx",
                        lineNumber: 864,
                        columnNumber: 7
                    }, this),
                    leaders.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            left: 14,
                            bottom: 14,
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            padding: "9px 12px",
                            borderRadius: 11,
                            color: "white",
                            background: "rgba(8,16,25,.68)",
                            border: "1px solid rgba(255,255,255,.14)",
                            fontSize: 12,
                            pointerEvents: "none"
                        },
                        children: leaders.map((leader, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontWeight: leader.id === playerId ? 800 : 500
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            opacity: 0.65
                                        },
                                        children: [
                                            "0",
                                            index + 1
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RaceStage.tsx",
                                        lineNumber: 931,
                                        columnNumber: 11
                                    }, this),
                                    "  ",
                                    leader.name,
                                    leader.id === playerId ? " · YOU" : "",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            opacity: 0.76
                                        },
                                        children: [
                                            leader.finished ? `FIN ${leader.place}` : `L${leader.lap}`,
                                            " · ",
                                            leader.points,
                                            " pts"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RaceStage.tsx",
                                        lineNumber: 932,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, leader.id, true, {
                                fileName: "[project]/src/components/RaceStage.tsx",
                                lineNumber: 930,
                                columnNumber: 41
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/RaceStage.tsx",
                        lineNumber: 915,
                        columnNumber: 30
                    }, this),
                    race?.phase === "countdown" && Math.ceil((race.phaseEndsAt - Date.now()) / 1000) <= 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                            color: "white",
                            fontSize: "clamp(48px, 10vw, 104px)",
                            lineHeight: 1,
                            fontWeight: 950,
                            fontStyle: "italic",
                            textShadow: "0 5px 28px rgba(0,0,0,.8)",
                            pointerEvents: "none"
                        },
                        children: Math.max(1, Math.ceil((race.phaseEndsAt - Date.now()) / 1000))
                    }, void 0, false, {
                        fileName: "[project]/src/components/RaceStage.tsx",
                        lineNumber: 935,
                        columnNumber: 97
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RaceStage.tsx",
                lineNumber: 851,
                columnNumber: 5
            }, this),
            (error || graphicsError) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "note form-error sm",
                role: "alert",
                children: graphicsError || error
            }, void 0, false, {
                fileName: "[project]/src/components/RaceStage.tsx",
                lineNumber: 949,
                columnNumber: 34
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "sm mut",
                children: "Race three laps against up to three other drivers. Grids hold at most four racers; players arriving during a race are placed in the next grid. Build speed, brake for corners, and steer to hold your line. Drafting can help you close a gap; going wide costs speed. Hold W / ↑ / Space to accelerate, S / ↓ to brake, and A/D or ←/→ to steer."
            }, void 0, false, {
                fileName: "[project]/src/components/RaceStage.tsx",
                lineNumber: 950,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RaceStage.tsx",
        lineNumber: 846,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/lib/useProgram.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProgram",
    ()=>useProgram
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useAnchorWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@solana/wallet-adapter-react/lib/esm/useAnchorWallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@solana/wallet-adapter-react/lib/esm/useConnection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@coral-xyz/anchor/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@coral-xyz/anchor/dist/esm/provider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@solana/web3.js/lib/index.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/program.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function useProgram() {
    const { connection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConnection"])();
    const wallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useAnchorWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnchorWallet"])();
    const program = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const dummy = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Keypair"].generate();
        const w = wallet ?? {
            publicKey: dummy.publicKey,
            signTransaction: async (t)=>t,
            signAllTransactions: async (t)=>t
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProgram"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnchorProvider"](connection, w, {
            commitment: "confirmed"
        }));
    }, [
        connection,
        wallet
    ]);
    return {
        program,
        connection,
        wallet
    };
}
}),
]})(),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1irrx0d8vi8dh._.js.map