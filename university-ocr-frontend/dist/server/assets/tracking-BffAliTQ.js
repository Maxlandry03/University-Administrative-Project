import { t as AppShell } from "./app-shell-CTieB9Ph.js";
import { r as getSession, t as Card } from "./card-BscL139z.js";
import { t as Badge } from "./badge-DB7Yi_tZ.js";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
//#region src/routes/tracking.tsx?tsr-split=component
function TrackingIndex() {
    const navigate = useNavigate();
    const [files, setFiles] = useState([]);
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
                toast.error("Failed to fetch tracking data.");
            }
        };
        fetchFiles();
    }, []);
    return /* @__PURE__ */ jsx(AppShell, {
        title: "Workflow Tracking",
        subtitle: "Follow each file from submission to archival",
        children: /* @__PURE__ */ jsx("div", {
            className: "grid gap-3 md:grid-cols-2",
            children: files.map((f) => {
                const historyCount = f.history ? .length ? ? 1;
                return /* @__PURE__ */ jsx(Link, {
                    to: "/tracking/$id",
                    params: { id: f.id },
                    children: /* @__PURE__ */ jsxs(Card, {
                        className: "p-4 hover:shadow-md transition",
                        children: [ /* @__PURE__ */ jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [ /* @__PURE__ */ jsxs("div", {
                                children: [ /* @__PURE__ */ jsx("div", {
                                    className: "text-xs font-mono text-muted-foreground",
                                    children: f.reference
                                }), /* @__PURE__ */ jsx("div", {
                                    className: "font-semibold",
                                    children: f.title
                                })]
                            }), /* @__PURE__ */ jsx(Badge, { children: f.status })]
                        }), /* @__PURE__ */ jsxs("div", {
                            className: "text-xs text-muted-foreground mt-2",
                            children: [
                                f.department,
                                " · ",
                                historyCount,
                                " events"
                            ]
                        })]
                    })
                }, f.id);
            })
        })
    });
}
//#endregion
export { TrackingIndex as component };