import { t as AppShell } from "./app-shell-CTieB9Ph.js";
import { r as getSession, t as Card } from "./card-BscL139z.js";
import { n as Button } from "./input-CgQKAJfB.js";
import { i as statusLabel, r as statusClasses } from "./mock-data-pHqr_sPB.js";
import { t as Badge } from "./badge-DB7Yi_tZ.js";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
import { AlertTriangle, CheckCircle2, Clock, Eye, FileStack, Upload } from "lucide-react";
//#region src/routes/dashboard.tsx?tsr-split=component
function Stat({ icon: Icon, label, value, hint }) {
    return /* @__PURE__ */ jsx(Card, {
        className: "p-5",
        children: /* @__PURE__ */ jsxs("div", {
            className: "flex justify-between",
            children: [ /* @__PURE__ */ jsxs("div", {
                children: [
                    /* @__PURE__ */
                    jsx("p", {
                        className: "text-xs text-muted-foreground uppercase",
                        children: label
                    }),
                    /* @__PURE__ */
                    jsx("h2", {
                        className: "text-3xl font-semibold mt-2",
                        children: value
                    }),
                    /* @__PURE__ */
                    jsx("p", {
                        className: "text-xs text-muted-foreground",
                        children: hint
                    })
                ]
            }), /* @__PURE__ */ jsx("div", {
                className: "size-10 rounded-md bg-primary/10 grid place-items-center",
                children: /* @__PURE__ */ jsx(Icon, { className: "size-5" })
            })]
        })
    });
}

function Dashboard() {
    const navigate = useNavigate();
    const [session, setSession] = useState(null);
    const [files, setFiles] = useState([]);
    const updateStatus = async(fileId, status, reason) => {
        if (!session) return;
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/files/${fileId}/status`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${session.token}`,
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    status,
                    reason
                })
            });
            const data = await res.json();
            if (!res.ok) {
                toast.error(data.message);
                return;
            }
            toast.success("Status updated");
            setFiles((prev) => prev.map((file) => file.id === fileId ? {
                ...file,
                status
            } : file));
        } catch {
            toast.error("Update failed");
        }
    };
    useEffect(() => {
        const s = getSession();
        if (!s) {
            navigate({ to: "/auth" });
            return;
        }
        setSession(s);
    }, []);
    useEffect(() => {
        if (!session) return;
        fetch("${import.meta.env.VITE_API_URL}/api/files", {
            headers: {
                Authorization: `Bearer ${session.token}`,
                Accept: "application/json"
            }
        }).then((res) => res.json()).then((data) => {
            setFiles(data);
        }).catch(() => {
            toast.error("Cannot load files");
        });
    }, [session]);
    if (!session) return null;
    const isStudent = session.role === "student";
    const total = files.length;
    const pending = files.filter((f) => f.status === "pending").length;
    const review = files.filter((f) => f.status === "in_review").length;
    const approved = files.filter((f) => f.status === "approved").length;
    return /* @__PURE__ */ jsx(AppShell, {
        title: isStudent ? `Welcome ${session.name}` : "Dashboard",
        subtitle: isStudent ? "Manage your documents and track your requests" : "Administrative document workflow",
        children: isStudent ? /* @__PURE__ */ jsxs(Fragment, {
            children: [
                /* @__PURE__ */
                jsxs("div", {
                    className: "grid gap-4 md:grid-cols-4",
                    children: [
                        /* @__PURE__ */
                        jsx(Stat, {
                            icon: FileStack,
                            label: "Submitted",
                            value: String(total),
                            hint: "My documents"
                        }),
                        /* @__PURE__ */
                        jsx(Stat, {
                            icon: Clock,
                            label: "Pending",
                            value: String(pending),
                            hint: "Waiting review"
                        }),
                        /* @__PURE__ */
                        jsx(Stat, {
                            icon: AlertTriangle,
                            label: "In Review",
                            value: String(review),
                            hint: "Processing"
                        }),
                        /* @__PURE__ */
                        jsx(Stat, {
                            icon: CheckCircle2,
                            label: "Approved",
                            value: String(approved),
                            hint: "Completed"
                        })
                    ]
                }),
                /* @__PURE__ */
                jsxs(Card, {
                    className: "mt-6 p-5",
                    children: [
                        /* @__PURE__ */
                        jsx("h2", {
                            className: "font-semibold",
                            children: "Student Actions"
                        }),
                        /* @__PURE__ */
                        jsx("p", {
                            className: "text-xs text-muted-foreground",
                            children: "Quick access to your services"
                        }),
                        /* @__PURE__ */
                        jsxs("div", {
                            className: "mt-4 grid gap-3 md:grid-cols-2",
                            children: [
                                /* @__PURE__ */
                                jsx(Button, {
                                    asChild: true,
                                    children: /* @__PURE__ */ jsxs(Link, {
                                        to: "/upload",
                                        children: [ /* @__PURE__ */ jsx(Upload, { className: "mr-2 size-4" }), "Upload Document"]
                                    })
                                }),
                                /* @__PURE__ */
                                jsx(Button, {
                                    variant: "outline",
                                    asChild: true,
                                    children: /* @__PURE__ */ jsxs(Link, {
                                        to: "/files",
                                        children: [ /* @__PURE__ */ jsx(FileStack, { className: "mr-2 size-4" }), "My Files"]
                                    })
                                }),
                                /* @__PURE__ */
                                jsx(Button, {
                                    variant: "outline",
                                    asChild: true,
                                    children: /* @__PURE__ */ jsxs(Link, {
                                        to: "/tracking",
                                        children: [ /* @__PURE__ */ jsx(Clock, { className: "mr-2 size-4" }), "Track Requests"]
                                    })
                                }),
                                /* @__PURE__ */
                                jsx(Button, {
                                    variant: "outline",
                                    asChild: true,
                                    children: /* @__PURE__ */ jsxs(Link, {
                                        to: "/search",
                                        children: [ /* @__PURE__ */ jsx(Eye, { className: "mr-2 size-4" }), "Search Documents"]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /* @__PURE__ */
                jsxs(Card, {
                    className: "mt-6 p-5",
                    children: [ /* @__PURE__ */ jsx("h2", {
                        className: "font-semibold",
                        children: "Recent Uploads"
                    }), /* @__PURE__ */ jsx("div", {
                        className: "mt-4 space-y-3",
                        children: files.map((file) => /* @__PURE__ */ jsxs("div", {
                            className: "flex justify-between items-center",
                            children: [ /* @__PURE__ */ jsxs("div", {
                                children: [ /* @__PURE__ */ jsx(Link, {
                                    to: `/file/${file.id}`,
                                    className: "font-medium hover:underline",
                                    children: file.title
                                }), /* @__PURE__ */ jsx("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: file.department
                                })]
                            }), /* @__PURE__ */ jsx(Badge, {
                                className: statusClasses(file.status),
                                children: statusLabel[file.status]
                            })]
                        }, file.id))
                    })]
                })
            ]
        }) : /* @__PURE__ */ jsxs(Fragment, {
            children: [ /* @__PURE__ */ jsxs("div", {
                className: "grid gap-4 md:grid-cols-4",
                children: [
                    /* @__PURE__ */
                    jsx(Stat, {
                        icon: FileStack,
                        label: "Total Files",
                        value: String(total),
                        hint: "All documents"
                    }),
                    /* @__PURE__ */
                    jsx(Stat, {
                        icon: Clock,
                        label: "Pending",
                        value: String(pending),
                        hint: "Need action"
                    }),
                    /* @__PURE__ */
                    jsx(Stat, {
                        icon: AlertTriangle,
                        label: "In Review",
                        value: String(review),
                        hint: "Processing"
                    }),
                    /* @__PURE__ */
                    jsx(Stat, {
                        icon: CheckCircle2,
                        label: "Approved",
                        value: String(approved),
                        hint: "Completed"
                    })
                ]
            }), /* @__PURE__ */ jsxs(Card, {
                className: "mt-6 p-5",
                children: [ /* @__PURE__ */ jsx("h2", {
                    className: "font-semibold",
                    children: "Recent Activity"
                }), /* @__PURE__ */ jsx("div", {
                    className: "mt-4 space-y-3",
                    children: files.slice(0, 10).map((file) => /* @__PURE__ */ jsxs("div", {
                        className: "flex justify-between",
                        children: [ /* @__PURE__ */ jsxs("div", {
                            children: [ /* @__PURE__ */ jsx(Link, {
                                to: `/file/${file.id}`,
                                className: "font-medium hover:underline",
                                children: file.title
                            }), /* @__PURE__ */ jsx("p", {
                                className: "text-xs text-muted-foreground",
                                children: file.department
                            })]
                        }), /* @__PURE__ */ jsxs("div", {
                            className: "flex gap-2 items-center",
                            children: [
                                /* @__PURE__ */
                                jsx(Badge, { children: file.status }),
                                /* @__PURE__ */
                                jsx(Button, {
                                    size: "sm",
                                    onClick: () => updateStatus(file.id, "approved"),
                                    children: "Approve"
                                }),
                                /* @__PURE__ */
                                jsx(Button, {
                                    size: "sm",
                                    variant: "destructive",
                                    onClick: () => {
                                        const reason = prompt("Enter rejection reason");
                                        updateStatus(file.id, "rejected", reason || "");
                                    },
                                    children: "Reject"
                                }),
                                /* @__PURE__ */
                                jsx(Button, {
                                    size: "sm",
                                    variant: "outline",
                                    onClick: () => updateStatus(file.id, "in_review"),
                                    children: "Review"
                                })
                            ]
                        })]
                    }, file.id))
                })]
            })]
        })
    });
}
//#endregion
export { Dashboard as component };