import { t as AppShell } from "./app-shell-CTieB9Ph.js";
import { a as cn, r as getSession, t as Card } from "./card-BscL139z.js";
import { n as Button, t as Input } from "./input-CgQKAJfB.js";
import { n as departments } from "./mock-data-pHqr_sPB.js";
import { t as Label } from "./label-CqY206sR.js";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-S1lEbu4d.js";
import { t as Badge } from "./badge-DB7Yi_tZ.js";
import * as React from "react";
import { useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
import { CloudUpload, FileScan, Sparkles, X } from "lucide-react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
//#region src/components/ui/textarea.tsx
var Textarea = React.forwardRef(({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx("textarea", {
        className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref,
        ...props
    });
});
Textarea.displayName = "Textarea";
//#endregion
//#region src/components/ui/progress.tsx
var Progress = React.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ jsx(ProgressPrimitive.Root, {
    ref,
    className: cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
    ...props,
    children: /* @__PURE__ */ jsx(ProgressPrimitive.Indicator, {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
    })
}));
Progress.displayName = ProgressPrimitive.Root.displayName;
//#endregion
//#region src/routes/upload.tsx?tsr-split=component
function UploadPage() {
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const [ocr, setOcr] = useState("");
    const [type, setType] = useState("Transcript Request");
    const [dept, setDept] = useState(departments[0]);
    const [scanning, setScanning] = useState(false);
    const inputRef = useRef(null);
    const [notes, setNotes] = useState("");
    const navigate = useNavigate();
    const handleFile = (f) => {
        setFile(f);
        setProgress(0);
        setOcr("");
        setScanning(true);
        const i = setInterval(() => {
            setProgress((p) => {
                if (p >= 100) {
                    clearInterval(i);
                    setScanning(false);
                    return 100;
                }
                return p + 8;
            });
        }, 120);
    };
    const submit = async() => {
        if (!file) {
            toast.error("Please upload a document first");
            return;
        }
        const session = getSession();
        console.log(getSession());
        console.log(getSession() ? .token);
        console.log("session.student_id:", session ? .student_id);
        if (!session) {
            toast.error("Please login again.");
            return;
        }
        const formData = new FormData();
        formData.append("student_id", session.student_id ? ? "");
        formData.append("title", type);
        formData.append("description", notes);
        formData.append("destination_department", dept);
        formData.append("file", file);
        try {
            const response = await fetch("${import.meta.env.VITE_API_URL}/api/files", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${session.token}`,
                    Accept: "application/json"
                },
                body: formData
            });
            const data = await response.json();
            if (!response.ok) {
                toast.error(data.message || "Upload failed.");
                return;
            }
            setOcr(data.file.content || "");
            toast.success("Document submitted successfully!");
            setFile(null);
            setOcr("");
            setProgress(0);
            setNotes("");
            navigate({ to: "/dashboard" });
        } catch (error) {
            console.error(error);
            toast.error("Unable to connect to the server.");
        }
    };
    return /* @__PURE__ */ jsx(AppShell, {
        title: "Upload Document",
        subtitle: "Upload PDFs or scanned images for OCR processing and classification",
        children: /* @__PURE__ */ jsxs("div", {
            className: "grid gap-6 lg:grid-cols-5",
            children: [ /* @__PURE__ */ jsxs(Card, {
                className: "p-6 lg:col-span-3",
                children: [
                    /* @__PURE__ */
                    jsx("h2", {
                        className: "font-semibold tracking-tight",
                        children: "Source document"
                    }),
                    /* @__PURE__ */
                    jsx("p", {
                        className: "text-xs text-muted-foreground",
                        children: "Accepted: PDF, PNG, JPG · Up to 20 MB"
                    }),
                    /* @__PURE__ */
                    jsxs("div", {
                        onDragOver: (e) => e.preventDefault(),
                        onDrop: (e) => {
                            e.preventDefault();
                            const f = e.dataTransfer.files ? .[0];
                            if (f) handleFile(f);
                        },
                        onClick: () => inputRef.current ? .click(),
                        className: "mt-4 border-2 border-dashed border-border rounded-lg p-10 text-center hover:bg-muted/40 cursor-pointer transition",
                        children: [
                            /* @__PURE__ */
                            jsx(CloudUpload, { className: "mx-auto size-10 text-muted-foreground" }),
                            /* @__PURE__ */
                            jsx("div", {
                                className: "mt-3 font-medium",
                                children: "Drop your file here or click to browse"
                            }),
                            /* @__PURE__ */
                            jsx("div", {
                                className: "text-xs text-muted-foreground mt-1",
                                children: "We'll run OCR automatically after upload"
                            }),
                            /* @__PURE__ */
                            jsx("input", {
                                ref: inputRef,
                                type: "file",
                                className: "hidden",
                                accept: ".pdf,image/*",
                                onChange: (e) => {
                                    const f = e.target.files ? .[0];
                                    if (f) handleFile(f);
                                }
                            })
                        ]
                    }),
                    file && /* @__PURE__ */ jsxs("div", {
                        className: "mt-4 border rounded-md p-3 flex items-center gap-3",
                        children: [
                            /* @__PURE__ */
                            jsx("div", {
                                className: "size-9 rounded bg-primary/10 text-primary grid place-items-center",
                                children: /* @__PURE__ */ jsx(FileScan, { className: "size-4" })
                            }),
                            /* @__PURE__ */
                            jsxs("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /* @__PURE__ */
                                    jsx("div", {
                                        className: "text-sm font-medium truncate",
                                        children: file.name
                                    }),
                                    /* @__PURE__ */
                                    jsxs("div", {
                                        className: "text-xs text-muted-foreground",
                                        children: [(file.size / 1024).toFixed(1), " KB"]
                                    }),
                                    /* @__PURE__ */
                                    jsx(Progress, {
                                        value: progress,
                                        className: "mt-2 h-1.5"
                                    })
                                ]
                            }),
                            /* @__PURE__ */
                            jsx(Button, {
                                variant: "ghost",
                                size: "icon",
                                onClick: () => {
                                    setFile(null);
                                    setOcr("");
                                    setProgress(0);
                                },
                                children: /* @__PURE__ */ jsx(X, { className: "size-4" })
                            })
                        ]
                    }),
                    /* @__PURE__ */
                    jsxs("div", {
                        className: "mt-6",
                        children: [ /* @__PURE__ */ jsxs("div", {
                            className: "flex items-center justify-between mb-2",
                            children: [ /* @__PURE__ */ jsxs(Label, {
                                className: "flex items-center gap-2",
                                children: [ /* @__PURE__ */ jsx(Sparkles, { className: "size-4 text-primary" }), " OCR extracted text"]
                            }), scanning && /* @__PURE__ */ jsx(Badge, {
                                variant: "outline",
                                children: "Scanning…"
                            })]
                        }), /* @__PURE__ */ jsx(Textarea, {
                            value: ocr,
                            onChange: (e) => setOcr(e.target.value),
                            rows: 10,
                            placeholder: "OCR output will appear here once your document is processed."
                        })]
                    })
                ]
            }), /* @__PURE__ */ jsxs(Card, {
                className: "p-6 lg:col-span-2 h-fit",
                children: [
                    /* @__PURE__ */
                    jsx("h2", {
                        className: "font-semibold tracking-tight",
                        children: "Classification"
                    }),
                    /* @__PURE__ */
                    jsx("p", {
                        className: "text-xs text-muted-foreground",
                        children: "Route this document through the right workflow"
                    }),
                    /* @__PURE__ */
                    jsxs("div", {
                        className: "mt-4 space-y-4",
                        children: [
                            /* @__PURE__ */
                            jsxs("div", {
                                className: "space-y-2",
                                children: [ /* @__PURE__ */ jsx(Label, { children: "Document type" }), /* @__PURE__ */ jsxs(Select, {
                                    value: type,
                                    onValueChange: setType,
                                    children: [ /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }), /* @__PURE__ */ jsx(SelectContent, {
                                        children: [
                                            "Transcript Request",
                                            "Certificate Request",
                                            "Leave Application",
                                            "Financial Request",
                                            "Academic Document",
                                            "Other"
                                        ].map((t) => /* @__PURE__ */ jsx(SelectItem, {
                                            value: t,
                                            children: t
                                        }, t))
                                    })]
                                })]
                            }),
                            /* @__PURE__ */
                            jsxs("div", {
                                className: "space-y-2",
                                children: [ /* @__PURE__ */ jsx(Label, { children: "Department" }), /* @__PURE__ */ jsxs(Select, {
                                    value: dept,
                                    onValueChange: setDept,
                                    children: [ /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }), /* @__PURE__ */ jsx(SelectContent, {
                                        children: departments.map((d) => /* @__PURE__ */ jsx(SelectItem, {
                                            value: d,
                                            children: d
                                        }, d))
                                    })]
                                })]
                            }),
                            /* @__PURE__ */
                            jsxs("div", {
                                className: "space-y-2",
                                children: [ /* @__PURE__ */ jsx(Label, { children: "Reference (optional)" }), /* @__PURE__ */ jsx(Input, { placeholder: "Auto-generated if blank" })]
                            }),
                            /* @__PURE__ */
                            jsxs("div", {
                                className: "space-y-2",
                                children: [ /* @__PURE__ */ jsx(Label, { children: "Notes" }), /* @__PURE__ */ jsx(Textarea, {
                                    value: notes,
                                    onChange: (e) => setNotes(e.target.value),
                                    placeholder: "Add any context for reviewers…",
                                    rows: 3
                                })]
                            }),
                            /* @__PURE__ */
                            jsx(Button, {
                                className: "w-full",
                                onClick: submit,
                                children: "Submit for processing"
                            })
                        ]
                    })
                ]
            })]
        })
    });
}
//#endregion
export { UploadPage as component };