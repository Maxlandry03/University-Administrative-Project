import { t as AppShell } from "./app-shell-CTieB9Ph.js";
import { r as getSession, t as Card } from "./card-BscL139z.js";
import { t as Input } from "./input-CgQKAJfB.js";
import { i as statusLabel, r as statusClasses } from "./mock-data-pHqr_sPB.js";
import { t as Badge } from "./badge-DB7Yi_tZ.js";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
import { Loader2, Search } from "lucide-react";
//#region src/routes/search.tsx?tsr-split=component
function highlight(text, q) {
    if (!q) return text;
    const i = text.toLowerCase().indexOf(q.toLowerCase());
    if (i === -1) return text;
    return /* @__PURE__ */ jsxs(Fragment, {
        children: [
            text.slice(0, i),
            /* @__PURE__ */
            jsx("mark", {
                className: "bg-accent/40 rounded px-0.5",
                children: text.slice(i, i + q.length)
            }),
            text.slice(i + q.length)
        ]
    });
}

function SearchPage() {
    const navigate = useNavigate();
    const [q, setQ] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const session = getSession();
        if (!session) {
            navigate({ to: "/auth" });
            return;
        }
        if (!q.trim()) {
            setResults([]);
            return;
        }
        const search = async() => {
            setLoading(true);
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/search?q=${encodeURIComponent(q)}`, {
                    headers: {
                        Authorization: `Bearer ${session.token}`,
                        Accept: "application/json"
                    }
                });
                const data = await response.json();
                if (response.ok) setResults(data);
                else toast.error("Search failed.");
            } catch (error) {
                toast.error("Could not connect to the server for search.");
            } finally {
                setLoading(false);
            }
        };
        const debounce = setTimeout(() => search(), 300);
        return () => clearTimeout(debounce);
    }, [q, navigate]);
    return /* @__PURE__ */ jsxs(AppShell, {
        title: "Search",
        subtitle: "Full-text search across documents using OCR-extracted content",
        children: [ /* @__PURE__ */ jsxs(Card, {
            className: "p-4",
            children: [ /* @__PURE__ */ jsxs("div", {
                className: "relative",
                children: [loading ? /* @__PURE__ */ jsx(Loader2, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground animate-spin" }) : /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
                    value: q,
                    onChange: (e) => setQ(e.target.value),
                    placeholder: "Search inside documents…",
                    className: "pl-9 h-11"
                })]
            }), /* @__PURE__ */ jsxs("div", {
                className: "text-xs text-muted-foreground mt-2",
                children: [
                    results.length,
                    " result",
                    results.length === 1 ? "" : "s"
                ]
            })]
        }), /* @__PURE__ */ jsxs("div", {
            className: "mt-4 space-y-3",
            children: [results.map((f) => {
                const text = f.content ? .split("\n").find((l) => l.toLowerCase().includes(q.toLowerCase())) ? ? f.content ? .split("\n")[0] ? ? "No content available";
                return /* @__PURE__ */ jsx(Card, {
                    className: "p-4 hover:shadow-md transition",
                    children: /* @__PURE__ */ jsxs(Link, {
                        to: "/tracking/$id",
                        params: { id: f.id },
                        className: "block",
                        children: [ /* @__PURE__ */ jsxs("div", {
                            className: "flex items-start justify-between gap-4",
                            children: [ /* @__PURE__ */ jsxs("div", {
                                children: [
                                    /* @__PURE__ */
                                    jsx("div", {
                                        className: "text-xs text-muted-foreground font-mono",
                                        children: f.reference
                                    }),
                                    /* @__PURE__ */
                                    jsx("div", {
                                        className: "font-semibold",
                                        children: highlight(f.title, q)
                                    }),
                                    /* @__PURE__ */
                                    jsxs("div", {
                                        className: "text-xs text-muted-foreground mt-0.5",
                                        children: [
                                            f.department,
                                            " · ",
                                            f.type
                                        ]
                                    })
                                ]
                            }), /* @__PURE__ */ jsx(Badge, {
                                variant: "outline",
                                className: statusClasses(f.status),
                                children: statusLabel[f.status]
                            })]
                        }), /* @__PURE__ */ jsx("p", {
                            className: "mt-3 text-sm text-muted-foreground line-clamp-2",
                            children: highlight(text, q)
                        })]
                    })
                }, f.id);
            }), q && results.length === 0 && /* @__PURE__ */ jsxs(Card, {
                className: "p-10 text-center text-sm text-muted-foreground",
                children: [
                    "No documents match \"",
                    q,
                    "\"."
                ]
            })]
        })]
    });
}
//#endregion
export { SearchPage as component };