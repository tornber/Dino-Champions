(()=>{"use strict";module.exports = [
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
"use client";
;
;
;
// Future games — disabled for the current competition.
// import RaceStage from "@/components/RaceStage";
// import RocketRace from "@/components/RocketRace";
// import TeamDeathmatch from "@/components/TeamDeathmatch";
// import FlappyBird from "@/components/FlappyBird";
const GAME_NAMES = [
    "Dino Champions"
];
function parseGameProgress(value) {
    if (!value) return null;
    try {
        const progress = JSON.parse(value);
        if (typeof progress !== "object" || progress === null) {
            return null;
        }
        const candidate = progress;
        if (candidate.version !== 1 || !Number.isSafeInteger(candidate.total) || (candidate.total ?? -1) < 0 || typeof candidate.submitted !== "boolean") {
            return null;
        }
        return candidate;
    } catch  {
        return null;
    }
}
function DinoGame({ total, startsAt, endsAt, submissionDeadline, storageKey, competitionId, playerId, playerName, onSubmitFinal }) {
    // competitionId, playerId and playerName are retained for compatibility
    // with the existing competition page and future multiplayer games.
    void competitionId;
    void playerId;
    void playerName;
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
    const submissionStarted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const submissionComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const bannedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(banned);
    const onSubmitFinalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onSubmitFinal);
    onSubmitFinalRef.current = onSubmitFinal;
    bannedRef.current = banned;
    // Dino Champions is the only active game.
    // Its duration is the complete competition duration.
    const gameDuration = Math.max(1, endsAt - startsAt);
    const activeGameIndex = 0;
    const banThisBrowser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (bannedRef.current) return;
        bannedRef.current = true;
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
            setMsg(`This browser has been locked for this session, but the local lock could not be saved: ${reason}`);
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
            setMsg("The competition is still running. Your final score will be submitted when it ends.");
            return;
        }
        if (now > submissionDeadline) {
            setSubmissionState("closed");
            setPhase("ended");
            setMsg("The final-score submission window has closed.");
            return;
        }
        submissionStarted.current = true;
        setPhase("settling");
        setSubmissionState("submitting");
        setMsg(`Competition ended. Approve Phantom to submit your Dino Champions total of ${totalRef.current} to Solana.`);
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
            setMsg(windowOpen ? `Final score not submitted: ${reason}. Retry before the submission window closes.` : `Final score was not submitted: ${reason}. The submission window has closed.`);
        } finally{
            submissionStarted.current = false;
        }
    }, [
        endsAt,
        progressKey,
        submissionDeadline
    ]);
    // Save Dino score progress locally.
    const saveScore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((runScore)=>{
        if (!Number.isFinite(runScore) || runScore < 0) return;
        const safeScore = Math.floor(runScore);
        totalRef.current += safeScore;
        setTotalScore(totalRef.current);
        try {
            window.localStorage.setItem(progressKey, JSON.stringify({
                version: 1,
                total: totalRef.current,
                submitted: false
            }));
        } catch (error) {
            const reason = error instanceof Error ? error.message : String(error);
            setMsg(`Your score is in memory but could not be saved for a reload: ${reason}`);
        }
    }, [
        progressKey
    ]);
    // Update the visible competition clock.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = window.setInterval(()=>{
            setClockNow(Math.floor(Date.now() / 1000));
        }, 1000);
        return ()=>window.clearInterval(timer);
    }, []);
    // Restore saved progress for this player and competition.
    // This only clears this game's progress key, not all website storage.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let active = true;
        try {
            const progress = parseGameProgress(window.localStorage.getItem(progressKey));
            const restoredTotal = progress?.total ?? total;
            totalRef.current = restoredTotal;
            setTotalScore(restoredTotal);
            const alreadySubmitted = progress?.submitted === true || Math.floor(Date.now() / 1000) >= endsAt && total > 0 && (!progress || progress.total === total);
            if (alreadySubmitted) {
                submissionComplete.current = true;
                setSubmissionState("submitted");
                setPhase("ended");
                setMsg(progress?.confirmation ?? `Final total ${restoredTotal} is already recorded or reported as submitted.`);
            } else {
                window.localStorage.setItem(progressKey, JSON.stringify({
                    version: 1,
                    total: restoredTotal,
                    submitted: false
                }));
            }
            if (bannedRef.current) {
                window.localStorage.setItem(`${storageKey}:local-ban`, "1");
            }
            if (active) setStorageReady(true);
        } catch (error) {
            const reason = error instanceof Error ? error.message : String(error);
            if (active) {
                setPhase("ended");
                setMsg(`Could not restore game progress: ${reason}`);
            }
        }
        return ()=>{
            active = false;
        };
    }, [
        endsAt,
        progressKey,
        storageKey,
        total
    ]);
    // Basic browser-side fair-play check.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!storageReady || bannedRef.current) return;
        const checkDevTools = ()=>{
            const dockedWidth = window.outerWidth - window.innerWidth;
            const dockedHeight = window.outerHeight - window.innerHeight;
            if (dockedWidth > 200 || dockedHeight > 200) {
                banThisBrowser();
            }
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
    // Dino Champions game engine.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!storageReady || bannedRef.current) return;
        const canvas = cv.current;
        const context = canvas?.getContext("2d");
        if (!context) {
            setPhase("ended");
            setMsg("Your browser could not initialize the game canvas.");
            return;
        }
        const W = 640;
        const H = 200;
        const G = 160;
        const styles = getComputedStyle(document.documentElement);
        const ink = styles.getPropertyValue("--ink") || "#222";
        const mut = styles.getPropertyValue("--mut") || "#888";
        const bg = styles.getPropertyValue("--card") || "#fff";
        const acc = styles.getPropertyValue("--acc") || "#4caf50";
        let y = G;
        let velocityY = 0;
        let ducking = false;
        let obstacles = [];
        let speed = 6;
        let runScore = 0;
        let obstacleGap = 80;
        let frame = 0;
        let running = false;
        let lastFrame = 0;
        let animationFrame = 0;
        let stopped = false;
        const isStarted = ()=>Date.now() / 1000 >= startsAt;
        const isOver = ()=>Date.now() / 1000 >= endsAt;
        const onGround = ()=>y >= G;
        const dinosaurHeight = ()=>ducking && onGround() ? 22 : 40;
        const draw = ()=>{
            context.fillStyle = bg;
            context.fillRect(0, 0, W, H);
            context.fillStyle = mut;
            context.fillRect(0, G + 1, W, 2);
            const height = dinosaurHeight();
            const top = y - height;
            context.fillStyle = ink;
            if (height === 22) {
                context.fillRect(40, top, 44, height);
                context.fillStyle = bg;
                context.fillRect(76, top + 4, 4, 4);
            } else {
                context.fillRect(40, top + 10, 30, height - 18);
                context.fillRect(52, top, 26, 18);
                context.fillStyle = bg;
                context.fillRect(68, top + 4, 4, 4);
                context.fillStyle = ink;
                const leg = onGround() && Math.floor(frame / 5) % 2;
                context.fillRect(44, top + height - 8, 8, leg ? 8 : 4);
                context.fillRect(58, top + height - 8, 8, leg ? 4 : 8);
            }
            obstacles.forEach((obstacle)=>{
                context.fillStyle = obstacle.flying ? mut : acc;
                if (obstacle.flying) {
                    context.fillRect(obstacle.x, obstacle.y, obstacle.w, obstacle.h);
                    context.fillRect(obstacle.x + 6, obstacle.y + (Math.floor(frame / 8) % 2 ? -8 : obstacle.h), 14, 8);
                } else {
                    context.fillRect(obstacle.x + obstacle.w / 2 - 4, obstacle.y, 8, obstacle.h);
                    context.fillRect(obstacle.x, obstacle.y + 8, obstacle.w / 2, 6);
                    context.fillRect(obstacle.x + obstacle.w / 2, obstacle.y + 14, obstacle.w / 2, 6);
                }
            });
        };
        const finishRun = ()=>{
            if (stopped) return;
            stopped = true;
            running = false;
            cancelAnimationFrame(animationFrame);
            draw();
            if (bannedRef.current) {
                setPhase("banned");
                return;
            }
            saveScore(runScore);
            setScore(Math.floor(runScore));
            if (isOver()) {
                setPhase("settling");
                void submitFinalTotal();
            } else {
                setPhase("over");
            }
        };
        const stop = ()=>{
            if (stopped) return;
            stopped = true;
            running = false;
            cancelAnimationFrame(animationFrame);
            if (bannedRef.current) {
                setPhase("banned");
                return;
            }
            // Save the current run when the competition ends.
            saveScore(runScore);
            setScore(Math.floor(runScore));
            setPhase("settling");
            if (Math.floor(Date.now() / 1000) <= submissionDeadline) {
                void submitFinalTotal();
            } else {
                setSubmissionState("closed");
                setPhase("ended");
                setMsg("The final-score submission window has closed.");
            }
        };
        const jump = ()=>{
            if (!running) return;
            if (onGround()) {
                velocityY = -12.5;
            }
        };
        const duck = (value)=>{
            if (running) ducking = value;
        };
        const keyDown = (event)=>{
            if (event.code === "Space" || event.code === "ArrowUp") {
                event.preventDefault();
                jump();
            }
            if (event.code === "ArrowDown") {
                event.preventDefault();
                duck(true);
            }
        };
        const keyUp = (event)=>{
            if (event.code === "ArrowDown") {
                duck(false);
            }
        };
        const loop = (timestamp)=>{
            if (!running) return;
            if (isOver()) {
                stop();
                return;
            }
            const delta = Math.min((timestamp - lastFrame) / 16.7, 3);
            lastFrame = timestamp;
            frame += delta;
            speed += 0.0025 * delta;
            runScore += speed * delta * 0.06;
            velocityY += 0.7 * delta;
            y = Math.min(G, y + velocityY * delta);
            if (onGround()) velocityY = 0;
            obstacleGap -= speed * delta;
            if (obstacleGap <= 0) {
                const flying = runScore > 120 && Math.random() < 0.3;
                const height = 30 + Math.floor(Math.random() * 18);
                obstacles.push(flying ? {
                    x: W,
                    y: G - 52,
                    w: 30,
                    h: 18,
                    flying: true
                } : {
                    x: W,
                    y: G - height,
                    w: 14 + Math.floor(Math.random() * 14),
                    h: height
                });
                obstacleGap = 260 + Math.random() * 260 + speed * 18;
            }
            obstacles.forEach((obstacle)=>{
                obstacle.x -= speed * delta;
            });
            obstacles = obstacles.filter((obstacle)=>obstacle.x > -40);
            const top = y - dinosaurHeight();
            const hit = obstacles.some((obstacle)=>72 > obstacle.x && 44 < obstacle.x + obstacle.w && y - 4 > obstacle.y && top + 4 < obstacle.y + obstacle.h);
            setScore(Math.floor(runScore));
            draw();
            if (hit) {
                finishRun();
                return;
            }
            animationFrame = requestAnimationFrame(loop);
        };
        window.addEventListener("keydown", keyDown);
        window.addEventListener("keyup", keyUp);
        api.current = {
            jump,
            duck,
            stop,
            start () {
                if (bannedRef.current) return;
                if (!isStarted()) {
                    setMsg("The competition has not started yet.");
                    return;
                }
                if (isOver()) {
                    stop();
                    return;
                }
                if (submissionComplete.current) {
                    setPhase("ended");
                    setMsg("Your final score has already been submitted.");
                    return;
                }
                y = G;
                velocityY = 0;
                ducking = false;
                obstacles = [];
                speed = 6;
                runScore = 0;
                obstacleGap = 80;
                frame = 0;
                stopped = false;
                running = true;
                lastFrame = performance.now();
                setScore(0);
                setMsg("");
                setPhase("run");
                draw();
                animationFrame = requestAnimationFrame(loop);
            }
        };
        draw();
        const endTimer = window.setTimeout(stop, Math.max(0, endsAt * 1000 - Date.now()));
        const submissionTimer = window.setTimeout(()=>{
            if (Date.now() / 1000 > submissionDeadline) {
                setSubmissionState((current)=>current === "submitted" ? current : "closed");
                setPhase((current)=>current === "submitted" ? current : "ended");
                setMsg((current)=>current || "The final-score submission window has closed.");
            }
        }, Math.max(0, submissionDeadline * 1000 - Date.now() + 1000));
        if (isOver()) stop();
        return ()=>{
            running = false;
            cancelAnimationFrame(animationFrame);
            clearTimeout(endTimer);
            clearTimeout(submissionTimer);
            window.removeEventListener("keydown", keyDown);
            window.removeEventListener("keyup", keyUp);
        };
    }, [
        endsAt,
        startsAt,
        storageReady,
        submissionDeadline,
        saveScore,
        submitFinalTotal
    ]);
    if (banned) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
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
                                lineNumber: 754,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12 14v3",
                                stroke: "currentColor",
                                strokeWidth: "1.8",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DinoGame.tsx",
                                lineNumber: 761,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DinoGame.tsx",
                        lineNumber: 753,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/DinoGame.tsx",
                    lineNumber: 752,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "game-lockout-copy",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "game-lockout-eyebrow",
                            children: "Fair-play protection"
                        }, void 0, false, {
                            fileName: "[project]/src/components/DinoGame.tsx",
                            lineNumber: 771,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            id: "game-lockout-title",
                            children: "Competition locked"
                        }, void 0, false, {
                            fileName: "[project]/src/components/DinoGame.tsx",
                            lineNumber: 775,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: msg || "This competition has been locked in this browser."
                        }, void 0, false, {
                            fileName: "[project]/src/components/DinoGame.tsx",
                            lineNumber: 777,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "game-lockout-detail",
                            children: "Play and score submission are disabled for this competition in this browser. This is a browser-side restriction."
                        }, void 0, false, {
                            fileName: "[project]/src/components/DinoGame.tsx",
                            lineNumber: 782,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DinoGame.tsx",
                    lineNumber: 770,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DinoGame.tsx",
            lineNumber: 747,
            columnNumber: 7
        }, this);
    }
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
                            "Dino Champions · run score",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mono",
                                children: score
                            }, void 0, false, {
                                fileName: "[project]/src/components/DinoGame.tsx",
                                lineNumber: 799,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DinoGame.tsx",
                        lineNumber: 797,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mut",
                        children: [
                            "Competition total",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mono",
                                children: totalScore
                            }, void 0, false, {
                                fileName: "[project]/src/components/DinoGame.tsx",
                                lineNumber: 804,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DinoGame.tsx",
                        lineNumber: 802,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DinoGame.tsx",
                lineNumber: 793,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sm mut",
                style: {
                    margin: "0 2px 8px"
                },
                children: [
                    "Game 1/1: Dino Champions · ",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fmt"])(gameDuration)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DinoGame.tsx",
                lineNumber: 808,
                columnNumber: 7
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
                            display: "block",
                            maxWidth: "100%"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/DinoGame.tsx",
                        lineNumber: 813,
                        columnNumber: 9
                    }, this),
                    phase !== "run" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ov",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                style: {
                                    fontSize: 22
                                },
                                children: phase === "ready" ? clockNow < startsAt ? "Competition has not started" : "Ready for Dino Champions" : phase === "over" ? "Game over" : phase === "settling" ? "Processing competition score" : "Competition ended"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DinoGame.tsx",
                                lineNumber: 823,
                                columnNumber: 13
                            }, this),
                            phase === "over" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mono",
                                style: {
                                    fontSize: 30
                                },
                                children: score
                            }, void 0, false, {
                                fileName: "[project]/src/components/DinoGame.tsx",
                                lineNumber: 836,
                                columnNumber: 15
                            }, this),
                            phase === "settling" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mono",
                                children: [
                                    "Final total: ",
                                    totalScore
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DinoGame.tsx",
                                lineNumber: 842,
                                columnNumber: 15
                            }, this),
                            (phase === "settling" || phase === "ended") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sm mut",
                                role: "status",
                                children: msg
                            }, void 0, false, {
                                fileName: "[project]/src/components/DinoGame.tsx",
                                lineNumber: 848,
                                columnNumber: 15
                            }, this),
                            phase === "settling" && submissionState === "submitting" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sm",
                                children: "Waiting for Phantom approval and Solana confirmation…"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DinoGame.tsx",
                                lineNumber: 855,
                                columnNumber: 17
                            }, this),
                            (phase === "settling" || phase === "ended") && submissionState === "failed" && Date.now() / 1000 <= submissionDeadline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn sec",
                                onClick: ()=>void submitFinalTotal(),
                                children: "Submit final total again"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DinoGame.tsx",
                                lineNumber: 863,
                                columnNumber: 17
                            }, this),
                            (phase === "ready" || phase === "over") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn",
                                disabled: phase === "ready" && (!storageReady || clockNow < startsAt),
                                onClick: ()=>api.current.start(),
                                children: phase === "ready" ? !storageReady ? "Loading game progress…" : clockNow < startsAt ? `Starts in ${Math.max(0, startsAt - clockNow)}s` : "Start" : "Play again"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DinoGame.tsx",
                                lineNumber: 872,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DinoGame.tsx",
                        lineNumber: 822,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DinoGame.tsx",
                lineNumber: 812,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "sm mut",
                children: "This competition features Dino Champions only for the full competition duration. Use Space or the Up Arrow to jump and the Down Arrow to duck. Your Dino Champions score contributes to your competition total. When the competition ends, approve one Phantom transaction to submit your final score to Solana."
            }, void 0, false, {
                fileName: "[project]/src/components/DinoGame.tsx",
                lineNumber: 893,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DinoGame.tsx",
        lineNumber: 792,
        columnNumber: 5
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
];})()

//# sourceMappingURL=src_1k0s4_1e7h_0k._.js.map