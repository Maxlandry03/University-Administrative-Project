import { i as setSession, t as Card } from "./card-BscL139z.js";
import { n as Button, t as Input } from "./input-CgQKAJfB.js";
import { t as Label } from "./label-CqY206sR.js";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-S1lEbu4d.js";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { FileText, ShieldCheck } from "lucide-react";
//#region src/routes/auth.tsx?tsr-split=component
function AuthPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [studentId, setStudentId] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("Department Administrator");
    const submit = async(e) => {
        e.preventDefault();
        const payload = role === "Student" ? {
            email,
            student_id: studentId,
            role
        } : {
            email,
            password,
            role
        };
        try {
            const response = await fetch("${import.meta.env.VITE_API_URL}/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                const errorData = await response.json();
                alert(errorData.message || "Login failed");
                return;
            }
            const data = await response.json();
            console.log("Login response:", data);
            const { user, access_token, student_id } = data;
            setSession({
                name: user.name,
                email: user.email,
                role: user.role,
                department: user.department,
                student_id,
                token: access_token
            });
            navigate({ to: "/dashboard" });
        } catch (error) {
            console.error("Login error:", error);
            alert("An error occurred during login.");
        }
    };
    return /* @__PURE__ */ jsxs("div", {
        className: "min-h-screen grid lg:grid-cols-2 bg-background",
        children: [ /* @__PURE__ */ jsxs("div", {
            className: "hidden lg:flex flex-col justify-between p-12 bg-sidebar text-sidebar-foreground",
            children: [
                /* @__PURE__ */
                jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [ /* @__PURE__ */ jsx("div", {
                        className: "size-10 rounded-md bg-sidebar-primary text-sidebar-primary-foreground grid place-items-center",
                        children: /* @__PURE__ */ jsx(FileText, { className: "size-5" })
                    }), /* @__PURE__ */ jsxs("div", {
                        children: [ /* @__PURE__ */ jsx("div", {
                            className: "font-semibold tracking-tight",
                            children: "UniTrack OCR"
                        }), /* @__PURE__ */ jsx("div", {
                            className: "text-xs opacity-70",
                            children: "Administrative File Tracking"
                        })]
                    })]
                }),
                /* @__PURE__ */
                jsxs("div", {
                    children: [ /* @__PURE__ */ jsx("h1", {
                        className: "text-4xl font-semibold leading-tight tracking-tight",
                        children: "Digitize, classify, and follow every administrative file."
                    }), /* @__PURE__ */ jsx("p", {
                        className: "mt-4 max-w-md text-sm opacity-80",
                        children: "OCR-powered intake, departmental workflow, and a complete audit trail — built for university administration."
                    })]
                }),
                /* @__PURE__ */
                jsxs("div", {
                    className: "flex items-center gap-2 text-xs opacity-70",
                    children: [ /* @__PURE__ */ jsx(ShieldCheck, { className: "size-4" }), "Secure single sign-on · Role-based access · Audit-ready"]
                })
            ]
        }), /* @__PURE__ */ jsx("div", {
            className: "flex items-center justify-center p-6",
            children: /* @__PURE__ */ jsxs(Card, {
                className: "w-full max-w-md p-8",
                children: [
                    /* @__PURE__ */
                    jsx("h2", {
                        className: "text-2xl font-semibold tracking-tight",
                        children: "Sign in"
                    }),
                    /* @__PURE__ */
                    jsx("p", {
                        className: "text-sm text-muted-foreground mt-1",
                        children: "Use your university credentials to access the system."
                    }),
                    /* @__PURE__ */
                    jsxs("form", {
                        onSubmit: submit,
                        className: "mt-6 space-y-4",
                        children: [
                            role === "Student" ? /* @__PURE__ */ jsxs(Fragment, {
                                children: [ /* @__PURE__ */ jsxs("div", {
                                    className: "space-y-2",
                                    children: [ /* @__PURE__ */ jsx(Label, {
                                        htmlFor: "studentId",
                                        children: "Student ID"
                                    }), /* @__PURE__ */ jsx(Input, {
                                        id: "studentId",
                                        value: studentId,
                                        onChange: (e) => setStudentId(e.target.value),
                                        required: true
                                    })]
                                }), /* @__PURE__ */ jsxs("div", {
                                    className: "space-y-2",
                                    children: [ /* @__PURE__ */ jsx(Label, {
                                        htmlFor: "email",
                                        children: "Student Email"
                                    }), /* @__PURE__ */ jsx(Input, {
                                        id: "email",
                                        type: "email",
                                        value: email,
                                        onChange: (e) => setEmail(e.target.value),
                                        required: true
                                    })]
                                })]
                            }) : /* @__PURE__ */ jsxs(Fragment, {
                                children: [ /* @__PURE__ */ jsxs("div", {
                                    className: "space-y-2",
                                    children: [ /* @__PURE__ */ jsx(Label, {
                                        htmlFor: "email",
                                        children: "Email"
                                    }), /* @__PURE__ */ jsx(Input, {
                                        id: "email",
                                        type: "email",
                                        value: email,
                                        onChange: (e) => setEmail(e.target.value),
                                        required: true
                                    })]
                                }), /* @__PURE__ */ jsxs("div", {
                                    className: "space-y-2",
                                    children: [ /* @__PURE__ */ jsx(Label, {
                                        htmlFor: "pw",
                                        children: "Password"
                                    }), /* @__PURE__ */ jsx(Input, {
                                        id: "pw",
                                        type: "password",
                                        value: password,
                                        onChange: (e) => setPassword(e.target.value),
                                        required: true
                                    })]
                                })]
                            }),
                            /* @__PURE__ */
                            jsxs("div", {
                                className: "space-y-2",
                                children: [ /* @__PURE__ */ jsx(Label, { children: "Sign in as" }), /* @__PURE__ */ jsxs(Select, {
                                    value: role,
                                    onValueChange: (v) => setRole(v),
                                    children: [ /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }), /* @__PURE__ */ jsxs(SelectContent, {
                                        children: [
                                            /* @__PURE__ */
                                            jsx(SelectItem, {
                                                value: "Super Administrator",
                                                children: "Super Administrator"
                                            }),
                                            /* @__PURE__ */
                                            jsx(SelectItem, {
                                                value: "Department Administrator",
                                                children: "Department Administrator"
                                            }),
                                            /* @__PURE__ */
                                            jsx(SelectItem, {
                                                value: "Student",
                                                children: "Student"
                                            })
                                        ]
                                    })]
                                })]
                            }),
                            /* @__PURE__ */
                            jsx(Button, {
                                type: "submit",
                                className: "w-full",
                                children: "Sign in"
                            })
                        ]
                    })
                ]
            })
        })]
    });
}
//#endregion
export { AuthPage as component };