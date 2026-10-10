(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
"[project]/node_modules/@solana/wallet-adapter-react/lib/esm/useAnchorWallet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAnchorWallet",
    ()=>useAnchorWallet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js [app-client] (ecmascript)");
;
;
function useAnchorWallet() {
    const { publicKey, signTransaction, signAllTransactions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useAnchorWallet.useMemo": ()=>publicKey && signTransaction && signAllTransactions ? {
                publicKey,
                signTransaction,
                signAllTransactions
            } : undefined
    }["useAnchorWallet.useMemo"], [
        publicKey,
        signTransaction,
        signAllTransactions
    ]);
}
}),
"[project]/node_modules/bn.js/lib/bn.js [app-client] (ecmascript) <export default as BN>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BN",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bn.js/lib/bn.js [app-client] (ecmascript)");
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Lobby
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@coral-xyz/anchor/dist/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__ = __turbopack_context__.i("[project]/node_modules/bn.js/lib/bn.js [app-client] (ecmascript) <export default as BN>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useProgram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/useProgram.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/program.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    let current = error;
    for(let depth = 0; depth < 4 && current; depth += 1){
        if (current instanceof Error) {
            messages.push(`${current.name}: ${current.message}`);
            const nested = current;
            current = nested.error ?? nested.cause;
        } else if (typeof current === "object") {
            const detail = current;
            if (typeof detail.message === "string") {
                const name = typeof detail.name === "string" ? `${detail.name}: ` : "";
                const code = typeof detail.code === "string" || typeof detail.code === "number" ? ` (code ${detail.code})` : "";
                messages.push(`${name}${detail.message}${code}`);
            }
            current = detail.error ?? detail.cause;
        } else {
            messages.push(String(current));
            break;
        }
    }
    return [
        ...new Set(messages)
    ].join(" → ") || String(error);
}
function Lobby() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { program } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useProgram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgram"])();
    const { connected, publicKey, signTransaction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])();
    const [list, setList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [msg, setMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [formErrors, setFormErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadError, setLoadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [txSignature, setTxSignature] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [creating, setCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [clockNow, setClockNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Lobby.useState": ()=>Math.floor(Date.now() / 1000)
    }["Lobby.useState"]);
    const [pendingSubmission, setPendingSubmission] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [f, setF] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        fee: "0.1",
        start: "60",
        dur: "60",
        max: "50"
    });
    const loading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const creatingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const hasPendingCreation = list.some((competition)=>competition.pending);
    const load = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Lobby.useCallback[load]": async ()=>{
            if (loading.current) return loading.current;
            const request = ({
                "Lobby.useCallback[load].request": async ()=>{
                    try {
                        const competitionAccount = program.account.competition;
                        if (!competitionAccount) {
                            throw new Error("The loaded Anchor IDL does not define the competition account.");
                        }
                        const competitions = await competitionAccount.all();
                        setList({
                            "Lobby.useCallback[load].request": (current)=>{
                                const byAddress = new Map(current.map({
                                    "Lobby.useCallback[load].request": (competition)=>[
                                            competition.publicKey.toBase58(),
                                            competition
                                        ]
                                }["Lobby.useCallback[load].request"]));
                                for (const competition of competitions){
                                    byAddress.set(competition.publicKey.toBase58(), {
                                        ...competition,
                                        pending: false
                                    });
                                }
                                return [
                                    ...byAddress.values()
                                ].sort({
                                    "Lobby.useCallback[load].request": (a, b)=>b.account.startTime.toNumber() - a.account.startTime.toNumber()
                                }["Lobby.useCallback[load].request"]);
                            }
                        }["Lobby.useCallback[load].request"]);
                        setLoadError("");
                    } catch (error) {
                        setLoadError(`Unable to load competitions: ${describeError(error)}`);
                    }
                }
            })["Lobby.useCallback[load].request"]();
            loading.current = request;
            try {
                await request;
            } finally{
                loading.current = null;
            }
        }
    }["Lobby.useCallback[load]"], [
        program
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Lobby.useEffect": ()=>{
            void load();
            const interval = window.setInterval({
                "Lobby.useEffect.interval": ()=>void load()
            }["Lobby.useEffect.interval"], 30000);
            return ({
                "Lobby.useEffect": ()=>window.clearInterval(interval)
            })["Lobby.useEffect"];
        }
    }["Lobby.useEffect"], [
        load
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Lobby.useEffect": ()=>{
            const timer = window.setInterval({
                "Lobby.useEffect.timer": ()=>setClockNow(Math.floor(Date.now() / 1000))
            }["Lobby.useEffect.timer"], 1000);
            return ({
                "Lobby.useEffect": ()=>window.clearInterval(timer)
            })["Lobby.useEffect"];
        }
    }["Lobby.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Lobby.useEffect": ()=>{
            if (!pendingSubmission) return;
            let active = true;
            let checking = false;
            const checkPendingSubmission = {
                "Lobby.useEffect.checkPendingSubmission": async ()=>{
                    if (checking) return;
                    checking = true;
                    try {
                        const connection = program.provider.connection;
                        const result = await connection.getSignatureStatuses([
                            pendingSubmission.signature
                        ], {
                            searchTransactionHistory: true
                        });
                        if (!active) return;
                        const status = result.value[0];
                        if (status?.err) {
                            setList({
                                "Lobby.useEffect.checkPendingSubmission": (current)=>current.filter({
                                        "Lobby.useEffect.checkPendingSubmission": (competition)=>!competition.publicKey.equals(pendingSubmission.address)
                                    }["Lobby.useEffect.checkPendingSubmission"])
                            }["Lobby.useEffect.checkPendingSubmission"]);
                            setPendingSubmission(null);
                            setMsg(`The signed transaction failed on ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_NETWORK"]}: ${JSON.stringify(status.err)}. Check the transaction link for details before creating another competition.`);
                            return;
                        }
                        const isConfirmed = status?.confirmationStatus === "confirmed" || status?.confirmationStatus === "finalized";
                        const hasExpired = !isConfirmed && await connection.getBlockHeight("confirmed") > pendingSubmission.lastValidBlockHeight;
                        if (isConfirmed || hasExpired) {
                            const account = await program.account.competition.fetchNullable(pendingSubmission.address, "confirmed");
                            if (!active) return;
                            if (account) {
                                setList({
                                    "Lobby.useEffect.checkPendingSubmission": (current)=>[
                                            ...current.filter({
                                                "Lobby.useEffect.checkPendingSubmission": (competition)=>!competition.publicKey.equals(pendingSubmission.address)
                                            }["Lobby.useEffect.checkPendingSubmission"]),
                                            {
                                                publicKey: pendingSubmission.address,
                                                account,
                                                pending: false
                                            }
                                        ].sort({
                                            "Lobby.useEffect.checkPendingSubmission": (a, b)=>b.account.startTime.toNumber() - a.account.startTime.toNumber()
                                        }["Lobby.useEffect.checkPendingSubmission"])
                                }["Lobby.useEffect.checkPendingSubmission"]);
                                setPendingSubmission(null);
                                setShow(false);
                                setMsg(`The competition is confirmed on ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_NETWORK"]}.`);
                                return;
                            }
                            if (!isConfirmed && hasExpired) {
                                setList({
                                    "Lobby.useEffect.checkPendingSubmission": (current)=>current.filter({
                                            "Lobby.useEffect.checkPendingSubmission": (competition)=>!competition.publicKey.equals(pendingSubmission.address)
                                        }["Lobby.useEffect.checkPendingSubmission"])
                                }["Lobby.useEffect.checkPendingSubmission"]);
                                setPendingSubmission(null);
                                setMsg(`The signed transaction expired without creating a competition. It is now safe to try again. Signature: ${pendingSubmission.signature}`);
                            }
                        }
                    } catch (error) {
                        if (active) {
                            setMsg(`Still checking the signed transaction ${pendingSubmission.signature}: ${describeError(error)}. The pending card is retained; do not submit another transaction yet.`);
                        }
                    } finally{
                        checking = false;
                    }
                }
            }["Lobby.useEffect.checkPendingSubmission"];
            void checkPendingSubmission();
            const interval = window.setInterval({
                "Lobby.useEffect.interval": ()=>void checkPendingSubmission()
            }["Lobby.useEffect.interval"], 5000);
            return ({
                "Lobby.useEffect": ()=>{
                    active = false;
                    window.clearInterval(interval);
                }
            })["Lobby.useEffect"];
        }
    }["Lobby.useEffect"], [
        pendingSubmission,
        program
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Lobby.useEffect": ()=>{
            const returnHome = {
                "Lobby.useEffect.returnHome": ()=>{
                    setShow(false);
                    setFormErrors([]);
                    window.requestAnimationFrame({
                        "Lobby.useEffect.returnHome": ()=>{
                            document.getElementById("competitions")?.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });
                        }
                    }["Lobby.useEffect.returnHome"]);
                }
            }["Lobby.useEffect.returnHome"];
            window.addEventListener("dino:home", returnHome);
            return ({
                "Lobby.useEffect": ()=>window.removeEventListener("dino:home", returnHome)
            })["Lobby.useEffect"];
        }
    }["Lobby.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Lobby.useEffect": ()=>{
            const target = window.location.hash.slice(1);
            if (target === "competitions") {
                document.getElementById(target)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            } else if (target.startsWith("competition-")) {
                document.getElementById(target)?.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }
        }
    }["Lobby.useEffect"], [
        list
    ]);
    async function create() {
        if (creatingRef.current) return;
        if (hasPendingCreation) {
            setMsg("A previous competition transaction is still awaiting confirmation. Check its transaction link before trying again.");
            return;
        }
        if (!connected || !publicKey) {
            setMsg("Connect your wallet first");
            return;
        }
        const feeSol = Number(f.fee);
        const fee = Math.round(feeSol * 1e9);
        const startMinutes = Number(f.start);
        const durationMinutes = Number(f.dur);
        const max = Number(f.max);
        const now = Math.floor(Date.now() / 1000);
        const start = now + startMinutes * 60;
        const end = start + durationMinutes * 60;
        const errors = [];
        if (!Number.isFinite(feeSol) || feeSol <= 0) {
            errors.push("Entry fee must be greater than 0 SOL.");
        } else if (fee <= 0) {
            errors.push("Entry fee must be at least 0.000000001 SOL.");
        } else if (!Number.isSafeInteger(fee)) {
            errors.push("Entry fee is above the supported limit.");
        }
        if (!Number.isInteger(max)) {
            errors.push("Max players must be a whole number.");
        }
        if (max < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_PLAYERS"]) {
            errors.push(`Max players must be at least ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_PLAYERS"]}.`);
        }
        if (max > __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_PLAYERS"]) {
            errors.push(`Max players cannot exceed ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_PLAYERS"]}.`);
        }
        if (!Number.isSafeInteger(startMinutes) || startMinutes <= 0 || !Number.isSafeInteger(durationMinutes) || durationMinutes <= 0 || !Number.isSafeInteger(start) || !Number.isSafeInteger(end)) {
            errors.push("Start time and duration must be positive whole numbers of minutes within the supported range.");
        }
        if (durationMinutes > __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_DURATION_MINUTES"]) {
            errors.push(`Competition duration cannot exceed ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_DURATION_MINUTES"]} minutes (1 hour).`);
        }
        if (errors.length) {
            setFormErrors(errors);
            return;
        }
        setFormErrors([]);
        const id = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__["BN"](Date.now());
        const competitionAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compPda"])(publicKey, id);
        const pendingAccount = {
            creator: publicKey,
            id,
            entryFee: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__["BN"](fee),
            startTime: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__["BN"](start),
            endTime: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__["BN"](end),
            maxPlayers: max,
            playerCount: 0,
            status: {
                open: {}
            },
            adminShare: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__["BN"](0),
            websiteShare: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__["BN"](0),
            adminWithdrawn: false,
            websiteWithdrawn: false,
            leaderboard: []
        };
        let preflightPassed = false;
        let transactionFailed = false;
        let signature = null;
        let expectedSignature = null;
        let submissionAttempted = false;
        creatingRef.current = true;
        setCreating(true);
        try {
            setMsg("Checking the deployed program…");
            setTxSignature("");
            const createMethod = program.methods.createCompetition(id, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__["BN"](fee), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__["BN"](start), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__["BN"](end), max).accounts({
                competition: competitionAddress,
                creator: publicKey
            });
            const instruction = await createMethod.instruction();
            const connection = program.provider.connection;
            const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash("confirmed");
            const transaction = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"]({
                feePayer: publicKey,
                recentBlockhash: blockhash
            }).add(instruction);
            const simulationTransaction = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VersionedTransaction"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMessage"]({
                payerKey: publicKey,
                recentBlockhash: blockhash,
                instructions: [
                    instruction
                ]
            }).compileToV0Message());
            const simulation = await connection.simulateTransaction(simulationTransaction, {
                commitment: "confirmed",
                replaceRecentBlockhash: true,
                sigVerify: false
            });
            if (simulation.value.err) {
                const logs = simulation.value.logs ?? [];
                if (logs.some((line)=>line.includes("DeclaredProgramIdMismatch"))) {
                    throw new Error(`The deployed program at ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROGRAM_ID"].toBase58()} was built with a different program ID. The program must be rebuilt and upgraded on ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_NETWORK"]} by its upgrade authority before competitions can be created. No funds were sent.`);
                }
                if (JSON.stringify(simulation.value.err).includes("AccountNotFound")) {
                    throw new Error(`The program is not available on the wallet's selected network. This app is configured for ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_NETWORK"]}; switch Phantom to ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_NETWORK"]} and retry. No funds were sent.`);
                }
                throw new Error(`Transaction preflight failed: ${logs.slice(-5).join(" | ") || JSON.stringify(simulation.value.err)}`);
            }
            preflightPassed = true;
            setMsg(`Approve the verified ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_NETWORK"]} transaction in your wallet…`);
            if (!signTransaction) {
                throw new Error("The selected wallet does not support transaction signing.");
            }
            const signedTransaction = await signTransaction(transaction);
            const creatorSignature = signedTransaction.signatures.find((entry)=>entry.publicKey.equals(publicKey))?.signature;
            if (!creatorSignature) {
                throw new Error("The wallet returned the transaction without the creator's signature.");
            }
            const serializedTransaction = signedTransaction.serialize();
            expectedSignature = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["utils"].bytes.bs58.encode(creatorSignature);
            setTxSignature(expectedSignature);
            setMsg(`Transaction signed. Submitting it to ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_NETWORK"]}…`);
            submissionAttempted = true;
            setPendingSubmission({
                signature: expectedSignature,
                address: competitionAddress,
                lastValidBlockHeight
            });
            signature = await connection.sendRawTransaction(serializedTransaction, {
                preflightCommitment: "confirmed",
                maxRetries: 3
            });
            setList((current)=>[
                    ...current.filter((competition)=>!competition.publicKey.equals(competitionAddress)),
                    {
                        publicKey: competitionAddress,
                        account: pendingAccount,
                        pending: true
                    }
                ].sort((a, b)=>b.account.startTime.toNumber() - a.account.startTime.toNumber()));
            router.push(`/#competition-${competitionAddress.toBase58()}`);
            setMsg(`Transaction submitted. Waiting for ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_NETWORK"]} confirmation…`);
            const confirmation = await connection.confirmTransaction({
                signature,
                blockhash,
                lastValidBlockHeight
            }, "confirmed");
            if (confirmation.value.err) {
                transactionFailed = true;
                setPendingSubmission(null);
                setList((current)=>current.filter((competition)=>!competition.publicKey.equals(competitionAddress)));
                throw new Error(`The transaction failed on-chain: ${JSON.stringify(confirmation.value.err)}`);
            }
            let account;
            let accountReadError = "";
            try {
                account = await program.account.competition.fetch(competitionAddress, "confirmed");
            } catch (error) {
                accountReadError = describeError(error);
                account = pendingAccount;
            }
            setList((current)=>{
                const updated = [
                    ...current.filter((competition)=>!competition.publicKey.equals(competitionAddress)),
                    {
                        publicKey: competitionAddress,
                        account,
                        pending: false
                    }
                ];
                return updated.sort((a, b)=>b.account.startTime.toNumber() - a.account.startTime.toNumber());
            });
            setLoadError("");
            setPendingSubmission(null);
            setShow(false);
            setMsg(accountReadError ? `Competition created and confirmed on ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_NETWORK"]}, but its account could not be reloaded yet (${accountReadError}). The new card is shown; the list will retry automatically.` : `Competition created and confirmed on ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_NETWORK"]}.`);
        } catch (error) {
            const details = describeError(error);
            if (submissionAttempted && expectedSignature && !signature) {
                try {
                    const status = await program.provider.connection.getSignatureStatuses([
                        expectedSignature
                    ], {
                        searchTransactionHistory: true
                    });
                    const transactionStatus = status.value[0];
                    if (transactionStatus?.err) {
                        transactionFailed = true;
                        setPendingSubmission(null);
                        setList((current)=>current.filter((competition)=>!competition.publicKey.equals(competitionAddress)));
                        setMsg(`The signed transaction failed on ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_NETWORK"]}: ${JSON.stringify(transactionStatus.err)}. Signature: ${expectedSignature}`);
                        setTxSignature(expectedSignature);
                        return;
                    }
                    if (transactionStatus) {
                        signature = expectedSignature;
                        const account = await program.account.competition.fetchNullable(competitionAddress, "confirmed");
                        setList((current)=>[
                                ...current.filter((competition)=>!competition.publicKey.equals(competitionAddress)),
                                {
                                    publicKey: competitionAddress,
                                    account: account ?? pendingAccount,
                                    pending: !account
                                }
                            ].sort((a, b)=>b.account.startTime.toNumber() - a.account.startTime.toNumber()));
                        setTxSignature(expectedSignature);
                        setShow(false);
                        if (account) {
                            setPendingSubmission(null);
                        }
                        setMsg(account ? `The competition is confirmed on ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_NETWORK"]}. The transaction was found despite the RPC submission error.` : `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_NETWORK"]} found the signed transaction. Confirmation is pending; check the transaction link before retrying.`);
                        router.push(`/#competition-${competitionAddress.toBase58()}`);
                        return;
                    }
                } catch (statusError) {
                    setList((current)=>[
                            ...current.filter((competition)=>!competition.publicKey.equals(competitionAddress)),
                            {
                                publicKey: competitionAddress,
                                account: pendingAccount,
                                pending: true
                            }
                        ].sort((a, b)=>b.account.startTime.toNumber() - a.account.startTime.toNumber()));
                    setMsg(`The signed transaction may have been submitted, but its status could not be checked: ${details}. Status check failed: ${describeError(statusError)}. Check its ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_NETWORK"]} Explorer status before retrying.`);
                    setTxSignature(expectedSignature);
                    router.push(`/#competition-${competitionAddress.toBase58()}`);
                    return;
                }
            }
            if (preflightPassed && !signature) {
                try {
                    const confirmedAccount = await program.account.competition.fetchNullable(competitionAddress, "confirmed");
                    if (confirmedAccount) {
                        setList((current)=>[
                                ...current.filter((competition)=>!competition.publicKey.equals(competitionAddress)),
                                {
                                    publicKey: competitionAddress,
                                    account: confirmedAccount,
                                    pending: false
                                }
                            ].sort((a, b)=>b.account.startTime.toNumber() - a.account.startTime.toNumber()));
                        setShow(false);
                        setMsg(`The competition is confirmed on ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_NETWORK"]}, although transaction submission returned an error. Check transaction activity before retrying. Details: ${details}`);
                        router.push(`/#competition-${competitionAddress.toBase58()}`);
                        return;
                    }
                } catch (lookupError) {
                    if (submissionAttempted && expectedSignature) {
                        setList((current)=>[
                                ...current.filter((competition)=>!competition.publicKey.equals(competitionAddress)),
                                {
                                    publicKey: competitionAddress,
                                    account: pendingAccount,
                                    pending: true
                                }
                            ].sort((a, b)=>b.account.startTime.toNumber() - a.account.startTime.toNumber()));
                        setTxSignature(expectedSignature);
                        router.push(`/#competition-${competitionAddress.toBase58()}`);
                    }
                    setMsg(`The signed transaction result could not be verified: ${details}. Account check failed: ${describeError(lookupError)}. Check transaction activity before retrying.`);
                    return;
                }
            }
            if (submissionAttempted && expectedSignature && !signature) {
                setList((current)=>[
                        ...current.filter((competition)=>!competition.publicKey.equals(competitionAddress)),
                        {
                            publicKey: competitionAddress,
                            account: pendingAccount,
                            pending: true
                        }
                    ].sort((a, b)=>b.account.startTime.toNumber() - a.account.startTime.toNumber()));
                setTxSignature(expectedSignature);
                router.push(`/#competition-${competitionAddress.toBase58()}`);
            }
            const explanation = signature && !transactionFailed ? `A transaction was submitted, but confirmation could not be verified: ${details}. Its card remains marked “Confirming”. Check the transaction before retrying.` : preflightPassed && !signature ? submissionAttempted ? `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_NETWORK"]} submission did not return a result: ${details}. Check transaction status for ${expectedSignature ?? "the signed transaction"} before retrying.` : `The wallet did not complete signing, so the app did not submit this transaction: ${details}. Check Phantom and reconnect before trying again.` : signature ? `${details}. Transaction signature: ${signature}` : details;
            setMsg(explanation);
        } finally{
            creatingRef.current = false;
            setCreating(false);
        }
    }
    function backToCompetitions() {
        setShow(false);
        document.getElementById("competitions")?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "top",
                style: {
                    marginTop: 22
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    margin: 0
                                },
                                children: "Battle for the pool"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 957,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mut",
                                children: [
                                    "Compete in Dino Champions, climb the leaderboard, and win SOL. Needs ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_PLAYERS"],
                                    " player to start."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 959,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 956,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn",
                        onClick: ()=>show ? backToCompetitions() : setShow(true),
                        "aria-expanded": show,
                        children: show ? "← Back to competitions" : "+ Create"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 965,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 955,
                columnNumber: 7
            }, this),
            msg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "note sm",
                children: msg
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 976,
                columnNumber: 15
            }, this),
            txSignature && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "note sm",
                children: [
                    "Transaction:",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `https://explorer.solana.com/tx/${txSignature}?cluster=${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXPLORER_CLUSTER"]}${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXPLORER_CLUSTER"] === "custom" ? `&customUrl=${encodeURIComponent(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RPC"])}` : ""}`,
                        target: "_blank",
                        rel: "noreferrer",
                        children: txSignature
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 981,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 979,
                columnNumber: 9
            }, this),
            loadError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "note sm",
                children: loadError
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 996,
                columnNumber: 9
            }, this),
            show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card",
                style: {
                    marginTop: 14,
                    maxWidth: 420
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "top",
                        style: {
                            marginBottom: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    margin: 0
                                },
                                children: "Create competition"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1005,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn sec",
                                type: "button",
                                onClick: backToCompetitions,
                                children: "Back to competitions"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1007,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1004,
                        columnNumber: 11
                    }, this),
                    formErrors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "note form-error",
                        role: "alert",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Please correct the following:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1021,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                children: formErrors.map((error)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: error
                                    }, error, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1024,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1022,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1017,
                        columnNumber: 13
                    }, this),
                    [
                        [
                            "fee",
                            "Entry fee (SOL)"
                        ],
                        [
                            "start",
                            "Starts in (minutes)"
                        ],
                        [
                            "dur",
                            `Duration (minutes, max ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_DURATION_MINUTES"]})`
                        ],
                        [
                            "max",
                            `Player range (${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_PLAYERS"]}–${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_PLAYERS"]})`
                        ]
                    ].map(([k, l])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                l,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    min: k === "max" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_PLAYERS"] : k === "fee" ? 0 : 1,
                                    max: k === "max" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_PLAYERS"] : k === "dur" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_DURATION_MINUTES"] : undefined,
                                    step: k === "fee" ? "any" : 1,
                                    value: f[k],
                                    onChange: (e)=>{
                                        setFormErrors([]);
                                        setF({
                                            ...f,
                                            [k]: e.target.value
                                        });
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1047,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, k, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1044,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "top",
                        style: {
                            justifyContent: "flex-start",
                            flexWrap: "wrap"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn",
                                onClick: create,
                                disabled: creating || hasPendingCreation,
                                children: creating ? "Creating competition…" : hasPendingCreation ? "Waiting for confirmation…" : "Create competition"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1080,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn sec",
                                type: "button",
                                onClick: backToCompetitions,
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1092,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1073,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 1000,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "competitions",
                className: "grid",
                style: {
                    marginTop: 18
                },
                children: [
                    list.map(({ publicKey: pk, account: c, pending })=>{
                        const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statusOf"])(c);
                        const now = clockNow;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            id: `competition-${pk.toBase58()}`,
                            href: `/c/${pk.toBase58()}`,
                            className: "card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "top",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: [
                                                "Cup #",
                                                c.id.toString().slice(-5)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1120,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `badge ${pending ? "pending" : s}`,
                                            children: pending ? "Confirming" : s === "cancelled" && c.playerCount === 0 && now >= c.startTime.toNumber() ? "Expired · no entrants" : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["label"][s]
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1122,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1119,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "top",
                                    style: {
                                        marginTop: 12
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    className: "mut",
                                                    children: "Entry"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1140,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1141,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    className: "mono",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sol"])(c.entryFee),
                                                        " SOL"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1142,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1139,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                textAlign: "right"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    className: "mut",
                                                    children: "Prize pool"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1148,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1149,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    className: "mono",
                                                    children: [
                                                        +((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sol"])(c.entryFee) * c.playerCount * 0.9).toFixed(3),
                                                        " ",
                                                        "SOL"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1150,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1147,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1135,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bar",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        style: {
                                            width: `${Math.min(100, c.playerCount / c.maxPlayers * 100)}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1162,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1161,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "top sm mut",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                c.playerCount,
                                                "/",
                                                c.maxPlayers,
                                                " · min",
                                                " ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_PLAYERS"]
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1173,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: s === "open" ? "starts in " + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(c.startTime.toNumber() - now) : s === "live" ? "ends in " + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(c.endTime.toNumber() - now) : ""
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1178,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1172,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, pk.toBase58(), true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1113,
                            columnNumber: 13
                        }, this);
                    }),
                    !list.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mut",
                        children: loadError ? "The competition list is unavailable." : "No competitions yet. Create the first one."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1193,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 1103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 954,
        columnNumber: 5
    }, this);
}
_s(Lobby, "tGSKgyT6GNuCYC9RMmRJN0x6LoA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useProgram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgram"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"]
    ];
});
_c = Lobby;
var _c;
__turbopack_context__.k.register(_c, "Lobby");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/useProgram.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProgram",
    ()=>useProgram
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useAnchorWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@solana/wallet-adapter-react/lib/esm/useAnchorWallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@solana/wallet-adapter-react/lib/esm/useConnection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@coral-xyz/anchor/dist/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/program.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function useProgram() {
    _s();
    const { connection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnection"])();
    const wallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useAnchorWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnchorWallet"])();
    const program = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useProgram.useMemo[program]": ()=>{
            const dummy = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keypair"].generate();
            const w = wallet ?? {
                publicKey: dummy.publicKey,
                signTransaction: ({
                    "useProgram.useMemo[program]": async (t)=>t
                })["useProgram.useMemo[program]"],
                signAllTransactions: ({
                    "useProgram.useMemo[program]": async (t)=>t
                })["useProgram.useMemo[program]"]
            };
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$program$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProgram"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AnchorProvider"](connection, w, {
                commitment: "confirmed"
            }));
        }
    }["useProgram.useMemo[program]"], [
        connection,
        wallet
    ]);
    return {
        program,
        connection,
        wallet
    };
}
_s(useProgram, "vmGgz8bZHcFpc7ujANI8yN75ZUM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnection"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useAnchorWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnchorWallet"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]})(),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_0it9b-retigno._.js.map