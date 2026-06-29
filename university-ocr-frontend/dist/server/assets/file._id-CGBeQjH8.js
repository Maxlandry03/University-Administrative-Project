import { t as Route } from "./file._id-B-WbtV1w.js";
import { r as getSession, t as Card } from "./card-BscL139z.js";
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/file.$id.tsx?tsr-split=component
function FileDetails() {
    const { id } = Route.useParams();
    const [file, setFile] = useState(null);
    useEffect(() => {
        const session = getSession();
        fetch(`${import.meta.env.VITE_API_URL}/api/files/${id}`, {
            headers: {
                Authorization: `Bearer ${session?.token}`,
                Accept: "application/json"
            }
        }).then((res) => res.json()).then((data) => setFile(data));
    }, [id]);
    if (!file) return /* @__PURE__ */ jsx("p", { children: "Loading..." });
    return /* @__PURE__ */ jsx("div", {
        className: "p-6",
        children: /* @__PURE__ */ jsxs(Card, {
            className: "p-6",
            children: [
                /* @__PURE__ */
                jsx("h1", {
                    className: "text-xl font-bold",
                    children: file.title
                }),
                /* @__PURE__ */
                jsxs("p", {
                    className: "text-sm text-muted-foreground",
                    children: ["Department: ", file.department]
                }),
                file.description && /* @__PURE__ */ jsxs("div", {
                    className: "mt-4 p-4 border rounded bg-muted/20",
                    children: [ /* @__PURE__ */ jsx("h2", {
                        className: "font-semibold",
                        children: "Description"
                    }), /* @__PURE__ */ jsx("p", {
                        className: "mt-2 text-sm text-muted-foreground whitespace-pre-line",
                        children: file.description
                    })]
                }),
                /* @__PURE__ */
                jsxs("p", {
                    className: "mt-2",
                    children: ["Status: ", file.status]
                }),
                file.status === "Rejected" && /* @__PURE__ */ jsxs("div", {
                    className: "mt-4 p-4 border rounded bg-red-50",
                    children: [ /* @__PURE__ */ jsx("h2", {
                        className: "font-semibold text-red-600",
                        children: "Rejection Reason"
                    }), /* @__PURE__ */ jsx("p", {
                        className: "mt-2 text-sm",
                        children: file.rejection_reason || "No reason provided"
                    })]
                }),
                /* @__PURE__ */
                jsx("hr", { className: "my-4" }),
                /* @__PURE__ */
                jsx("h2", {
                    className: "font-semibold",
                    children: "OCR Content"
                }),
                /* @__PURE__ */
                jsx("div", {
                    className: "mt-3 p-4 border rounded",
                    children: file.content || "No OCR content found"
                })
            ]
        })
    });
}
//#endregion
export { FileDetails as component };