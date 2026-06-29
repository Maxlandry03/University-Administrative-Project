import { t as Route } from "./tracking._id-B1vddSSX.js";
import { t as AppShell } from "./app-shell-CTieB9Ph.js";
import { r as getSession, t as Card } from "./card-BscL139z.js";
import { n as Button } from "./input-CgQKAJfB.js";
import { t as Badge } from "./badge-DB7Yi_tZ.js";
import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
import { ArrowLeft, Clock } from "lucide-react";
//#region src/routes/tracking.$id.tsx?tsr-split=component
function TrackingDetail() {
    const { id } = Route.useParams();
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const session = getSession();
        if (!session) {
            navigate({ to: "/auth" });
            return;
        }
        const fetchFile = async() => {
            try {
                const found = (await (await fetch("${import.meta.env.VITE_API_URL}/api/files", {
                    headers: {
                        Authorization: `Bearer ${session.token}`,
                        Accept: "application/json"
                    }
                })).json()).find((f) => String(f.id) === id);
                if (!found) {
                    toast.error("File not found");
                    return;
                }
                setFile(found);
            } catch (err) {
                toast.error("Failed to load tracking data");
            } finally {
                setLoading(false);
            }
        };
        fetchFile();
    }, [id, navigate]);
    if (loading) return /* @__PURE__ */ jsx("div", {
        className: "p-10",
        children: "Loading..."
    });
    if (!file) return /* @__PURE__ */ jsx("div", {
        className: "p-10 text-red-500",
        children: "File not found"
    });
    return /* @__PURE__ */ jsx(AppShell, {
        title: file.title,
        subtitle: `${file.reference} · ${file.department}`,
        actions: /* @__PURE__ */ jsxs(Button, {
            variant: "outline",
            size: "sm",
            onClick: () => navigate({ to: "/files" }),
            children: [ /* @__PURE__ */ jsx(ArrowLeft, { className: "size-4 mr-1" }), "Back"]
        }),
        children: /* @__PURE__ */ jsxs("div", {
            className: "grid gap-4 lg:grid-cols-3",
            children: [ /* @__PURE__ */ jsxs(Card, {
                className: "p-5 lg:col-span-2",
                children: [ /* @__PURE__ */ jsxs("h2", {
                    className: "font-semibold flex items-center gap-2",
                    children: [ /* @__PURE__ */ jsx(Clock, { className: "size-4" }), "Tracking Timeline"]
                }), /* @__PURE__ */ jsxs("ol", {
                    className: "mt-5 space-y-4 border-l pl-6",
                    children: [
                        /* @__PURE__ */
                        jsxs("li", {
                            children: [ /* @__PURE__ */ jsx("div", {
                                className: "text-sm font-medium",
                                children: "File Submitted"
                            }), /* @__PURE__ */ jsx("div", {
                                className: "text-xs text-muted-foreground",
                                children: "Initial upload to system"
                            })]
                        }),
                        /* @__PURE__ */
                        jsxs("li", {
                            children: [ /* @__PURE__ */ jsx("div", {
                                className: "text-sm font-medium",
                                children: "Current Department"
                            }), /* @__PURE__ */ jsx("div", {
                                className: "text-xs text-muted-foreground",
                                children: file.department
                            })]
                        }),
                        /* @__PURE__ */
                        jsxs("li", {
                            children: [ /* @__PURE__ */ jsx("div", {
                                className: "text-sm font-medium",
                                children: "Status"
                            }), /* @__PURE__ */ jsx(Badge, { children: file.status })]
                        })
                    ]
                })]
            }), /* @__PURE__ */ jsxs(Card, {
                className: "p-5",
                children: [ /* @__PURE__ */ jsx("h2", {
                    className: "font-semibold",
                    children: "Details"
                }), /* @__PURE__ */ jsxs("div", {
                    className: "mt-3 text-sm space-y-2",
                    children: [
                        /* @__PURE__ */
                        jsxs("div", {
                            children: [
                                /* @__PURE__ */
                                jsx("span", {
                                    className: "text-muted-foreground",
                                    children: "Reference:"
                                }),
                                " ",
                                file.reference
                            ]
                        }),
                        /* @__PURE__ */
                        jsxs("div", {
                            children: [
                                /* @__PURE__ */
                                jsx("span", {
                                    className: "text-muted-foreground",
                                    children: "Title:"
                                }),
                                " ",
                                file.title
                            ]
                        }),
                        /* @__PURE__ */
                        jsxs("div", {
                            children: [
                                /* @__PURE__ */
                                jsx("span", {
                                    className: "text-muted-foreground",
                                    children: "Department:"
                                }),
                                " ",
                                file.department
                            ]
                        }),
                        /* @__PURE__ */
                        jsxs("div", {
                            children: [
                                /* @__PURE__ */
                                jsx("span", {
                                    className: "text-muted-foreground",
                                    children: "Status:"
                                }),
                                " ",
                                file.status
                            ]
                        }),
                        /* @__PURE__ */
                        jsxs("div", {
                            children: [
                                /* @__PURE__ */
                                jsx("span", {
                                    className: "text-muted-foreground",
                                    children: "Uploaded:"
                                }),
                                " ",
                                new Date(file.updatedAt).toLocaleString()
                            ]
                        })
                    ]
                })]
            })]
        })
    });
}
//#endregion
export { TrackingDetail as component };