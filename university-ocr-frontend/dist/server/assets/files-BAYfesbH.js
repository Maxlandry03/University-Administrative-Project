import { t as AppShell } from "./app-shell-CTieB9Ph.js";
import { r as getSession, t as Card } from "./card-BscL139z.js";
import { n as Button, t as Input } from "./input-CgQKAJfB.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-DptO_QP4.js";
import { i as statusLabel, n as departments, r as statusClasses } from "./mock-data-pHqr_sPB.js";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-S1lEbu4d.js";
import { t as Badge } from "./badge-DB7Yi_tZ.js";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
import { Search } from "lucide-react";
//#region src/routes/files.tsx?tsr-split=component
function FilesPage() {
    const navigate = useNavigate();
    const [files, setFiles] = useState([]);
    const [q, setQ] = useState("");
    const [status, setStatus] = useState("all");
    const [dept, setDept] = useState("all");
    useEffect(() => {
        const session = getSession();
        if (!session) {
            navigate({ to: "/auth" });
            return;
        }
        const fetchFiles = async() => {
            try {
                const response = await fetch("${import.meta.env.VITE_API_URL}/api/files", {
                    headers: {
                        Authorization: `Bearer ${session.token}`,
                        Accept: "application/json"
                    }
                });
                const data = await response.json();
                if (response.ok) setFiles(data);
            } catch (error) {
                toast.error("Failed to fetch files.");
            }
        };
        fetchFiles();
    }, [navigate]);
    const filtered = files.filter((f) => {
        if (status !== "all" && f.status !== status) return false;
        if (dept !== "all" && f.department !== dept) return false;
        if (q && !`${f.title} ${f.reference} ${f.submittedBy}`.toLowerCase().includes(q.toLowerCase())) return false;
        return true;
    });
    return /* @__PURE__ */ jsxs(AppShell, {
        title: "My Files",
        subtitle: "All documents you have submitted or are reviewing",
        children: [ /* @__PURE__ */ jsx(Card, {
            className: "p-4",
            children: /* @__PURE__ */ jsxs("div", {
                className: "flex flex-wrap gap-3",
                children: [
                    /* @__PURE__ */
                    jsxs("div", {
                        className: "relative flex-1 min-w-[220px]",
                        children: [ /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
                            value: q,
                            onChange: (e) => setQ(e.target.value),
                            placeholder: "Search by title, reference, person…",
                            className: "pl-9"
                        })]
                    }),
                    /* @__PURE__ */
                    jsxs(Select, {
                        value: status,
                        onValueChange: setStatus,
                        children: [ /* @__PURE__ */ jsx(SelectTrigger, {
                            className: "w-44",
                            children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Status" })
                        }), /* @__PURE__ */ jsxs(SelectContent, {
                            children: [ /* @__PURE__ */ jsx(SelectItem, {
                                value: "all",
                                children: "All statuses"
                            }), [
                                "pending",
                                "in_review",
                                "approved",
                                "rejected",
                                "archived"
                            ].map((s) => /* @__PURE__ */ jsx(SelectItem, {
                                value: s,
                                children: statusLabel[s]
                            }, s))]
                        })]
                    }),
                    /* @__PURE__ */
                    jsxs(Select, {
                        value: dept,
                        onValueChange: setDept,
                        children: [ /* @__PURE__ */ jsx(SelectTrigger, {
                            className: "w-52",
                            children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Department" })
                        }), /* @__PURE__ */ jsxs(SelectContent, {
                            children: [ /* @__PURE__ */ jsx(SelectItem, {
                                value: "all",
                                children: "All departments"
                            }), departments.map((d) => /* @__PURE__ */ jsx(SelectItem, {
                                value: d,
                                children: d
                            }, d))]
                        })]
                    })
                ]
            })
        }), /* @__PURE__ */ jsx(Card, {
            className: "mt-4 p-0 overflow-hidden",
            children: /* @__PURE__ */ jsxs(Table, {
                children: [ /* @__PURE__ */ jsx(TableHeader, {
                    children: /* @__PURE__ */ jsxs(TableRow, {
                        children: [
                            /* @__PURE__ */
                            jsx(TableHead, { children: "Reference" }),
                            /* @__PURE__ */
                            jsx(TableHead, { children: "Title" }),
                            /* @__PURE__ */
                            jsx(TableHead, { children: "Type" }),
                            /* @__PURE__ */
                            jsx(TableHead, { children: "Department" }),
                            /* @__PURE__ */
                            jsx(TableHead, { children: "Submitted by" }),
                            /* @__PURE__ */
                            jsx(TableHead, { children: "Status" }),
                            /* @__PURE__ */
                            jsx(TableHead, { children: "Updated" }),
                            /* @__PURE__ */
                            jsx(TableHead, {})
                        ]
                    })
                }), /* @__PURE__ */ jsxs(TableBody, {
                    children: [filtered.map((f) => /* @__PURE__ */ jsxs(TableRow, {
                        children: [
                            /* @__PURE__ */
                            jsx(TableCell, {
                                className: "font-mono text-xs",
                                children: f.reference
                            }),
                            /* @__PURE__ */
                            jsx(TableCell, {
                                className: "font-medium",
                                children: f.title
                            }),
                            /* @__PURE__ */
                            jsx(TableCell, {
                                className: "text-muted-foreground",
                                children: f.type
                            }),
                            /* @__PURE__ */
                            jsx(TableCell, { children: f.department }),
                            /* @__PURE__ */
                            jsx(TableCell, { children: f.submittedBy }),
                            /* @__PURE__ */
                            jsx(TableCell, {
                                children: /* @__PURE__ */ jsx(Badge, {
                                    variant: "outline",
                                    className: statusClasses(f.status),
                                    children: statusLabel[f.status]
                                })
                            }),
                            /* @__PURE__ */
                            jsx(TableCell, {
                                className: "text-xs text-muted-foreground",
                                children: new Date(f.updatedAt).toLocaleDateString()
                            }),
                            /* @__PURE__ */
                            jsx(TableCell, {
                                children: /* @__PURE__ */ jsx(Button, {
                                    size: "sm",
                                    variant: "ghost",
                                    asChild: true,
                                    children: /* @__PURE__ */ jsx(Link, {
                                        to: "/tracking/$id",
                                        params: { id: f.id },
                                        children: "Track"
                                    })
                                })
                            })
                        ]
                    }, f.id)), filtered.length === 0 && /* @__PURE__ */ jsx(TableRow, {
                        children: /* @__PURE__ */ jsx(TableCell, {
                            colSpan: 8,
                            className: "text-center py-10 text-sm text-muted-foreground",
                            children: "No files match your filters."
                        })
                    })]
                })]
            })
        })]
    });
}
//#endregion
export { FilesPage as component };