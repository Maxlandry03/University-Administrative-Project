import { t as AppShell } from "./app-shell-CTieB9Ph.js";
import { r as getSession, t as Card } from "./card-BscL139z.js";
import { n as departments } from "./mock-data-pHqr_sPB.js";
import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
import { Building2 } from "lucide-react";
//#region src/routes/departments.tsx?tsr-split=component
function DepartmentsPage() {
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
                toast.error("Failed to fetch file data for departments.");
            }
        };
        fetchFiles();
    }, [navigate]);
    return /* @__PURE__ */ jsx(AppShell, {
        title: "Departments",
        subtitle: "Manage administrative departments and their file load",
        children: /* @__PURE__ */ jsx("div", {
            className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
            children: departments.map((d) => {
                const count = files.filter((f) => f.department === d).length;
                const pending = files.filter((f) => f.department === d && f.status === "pending").length;
                return /* @__PURE__ */ jsx(Card, {
                    className: "p-5",
                    children: /* @__PURE__ */ jsxs("div", {
                        className: "flex items-start gap-3",
                        children: [ /* @__PURE__ */ jsx("div", {
                            className: "size-10 rounded-md bg-primary/10 text-primary grid place-items-center",
                            children: /* @__PURE__ */ jsx(Building2, { className: "size-5" })
                        }), /* @__PURE__ */ jsxs("div", {
                            className: "flex-1",
                            children: [ /* @__PURE__ */ jsx("div", {
                                className: "font-semibold",
                                children: d
                            }), /* @__PURE__ */ jsxs("div", {
                                className: "text-xs text-muted-foreground",
                                children: [
                                    count,
                                    " files · ",
                                    pending,
                                    " pending"
                                ]
                            })]
                        })]
                    })
                }, d);
            })
        })
    });
}
//#endregion
export { DepartmentsPage as component };