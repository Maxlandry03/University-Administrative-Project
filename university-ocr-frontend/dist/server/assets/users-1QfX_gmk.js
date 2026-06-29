import { n as Avatar, r as AvatarFallback, t as AppShell } from "./app-shell-CTieB9Ph.js";
import { a as cn, r as getSession, t as Card } from "./card-BscL139z.js";
import { n as Button, t as Input } from "./input-CgQKAJfB.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-DptO_QP4.js";
import { t as Label } from "./label-CqY206sR.js";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-S1lEbu4d.js";
import { t as Badge } from "./badge-DB7Yi_tZ.js";
import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
import { Check, ChevronRight, Circle, MoreHorizontal, Trash2, UserPlus, X } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
//#region src/components/ui/dialog.tsx
var Dialog = DialogPrimitive.Root;
var DialogPortal = DialogPrimitive.Portal;
var DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Overlay, {
    ref,
    className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
    ...props
}));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, {
    children: [ /* @__PURE__ */ jsx(DialogOverlay, {}), /* @__PURE__ */ jsxs(DialogPrimitive.Content, {
        ref,
        className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
        ...props,
        children: [children, /* @__PURE__ */ jsxs(DialogPrimitive.Close, {
            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: [ /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
                className: "sr-only",
                children: "Close"
            })]
        })]
    })]
}));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
    className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
    ...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
    className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
    ...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Title, {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
}));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Description, {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
}));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
//#endregion
//#region src/components/ui/dropdown-menu.tsx
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(DropdownMenuPrimitive.SubTrigger, {
    ref,
    className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
    ...props,
    children: [children, /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto" })]
}));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.SubContent, {
    ref,
    className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
    ...props
}));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, {
    children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.Content, {
        ref,
        sideOffset,
        className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
        ...props
    })
}));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Item, {
    ref,
    className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
    ...props
}));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(DropdownMenuPrimitive.CheckboxItem, {
    ref,
    className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
    checked,
    ...props,
    children: [ /* @__PURE__ */ jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) })
    }), children]
}));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DropdownMenuPrimitive.RadioItem, {
    ref,
    className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
    ...props,
    children: [ /* @__PURE__ */ jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current" }) })
    }), children]
}));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Label, {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
    ...props
}));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Separator, {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
}));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
    return /* @__PURE__ */ jsx("span", {
        className: cn("ml-auto text-xs tracking-widest opacity-60", className),
        ...props
    });
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
//#endregion
//#region src/routes/users.tsx?tsr-split=component
function UserManagementPage() {
    const navigate = useNavigate();
    const [session, setSession] = useState(null);
    const [users, setUsers] = useState([]);
    const [isAddingUser, setIsAddingUser] = useState(false);
    const [tick, forceTick] = useState(0);
    useEffect(() => {
        const s = getSession();
        if (!s) {
            navigate({ to: "/auth" });
            return;
        }
        if (s.role !== "Super Administrator") {
            toast.error("Access Denied", { description: "You do not have permission to view this page." });
            navigate({ to: "/dashboard" });
            return;
        }
        setSession(s);
    }, [navigate]);
    const refresh = () => forceTick((n) => n + 1);
    useEffect(() => {
        let ignore = false;
        const fetchUsers = async() => {
            if (!session) return;
            try {
                const headers = {
                    "Authorization": `Bearer ${session.token}`,
                    "Accept": "application/json"
                };
                const res = await fetch("${import.meta.env.VITE_API_URL}/api/users", { headers });
                const data = await res.json();
                if (res.ok && !ignore) setUsers(data);
                else toast.error("Failed to fetch users.");
            } catch (error) {
                toast.error("Could not load user data.");
            }
        };
        fetchUsers();
        return () => {
            ignore = true;
        };
    }, [session, tick]);
    const createUser = async(userData) => {
        if (!session ? .token) return;
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${session.token}`,
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(userData)
            });
            const data = await response.json();
            if (response.ok) {
                toast.success("User has been created successfully.");
                refresh();
            } else {
                const errorMsg = data.errors ? Object.values(data.errors).flat().join(" ") : data.message;
                toast.error("Failed to create user", { description: errorMsg });
            }
        } catch (error) {
            toast.error("An error occurred while creating the user.");
        }
    };
    const deleteUser = async(email) => {
        if (!session ? .token) return;
        if (!confirm("Are you sure you want to delete this user? This action cannot be undone.")) return;
        try {
            if ((await fetch(`${import.meta.env.VITE_API_URL}/api/users/${email}`, {
                    method: "DELETE",
                    headers: {
                        "Authorization": `Bearer ${session.token}`,
                        "Accept": "application/json"
                    }
                })).ok) {
                toast.success("User has been deleted.");
                refresh();
            } else toast.error("Failed to delete user.");
        } catch (error) {
            toast.error("An error occurred while deleting the user.");
        }
    };
    return /* @__PURE__ */ jsxs(AppShell, {
        title: "User Management",
        subtitle: "Manage accounts, roles, and department assignments",
        actions: /* @__PURE__ */ jsxs(Button, {
            size: "sm",
            onClick: () => setIsAddingUser(true),
            children: [ /* @__PURE__ */ jsx(UserPlus, { className: "size-4 mr-1" }), " Add user"]
        }),
        children: [ /* @__PURE__ */ jsx(Card, {
            className: "p-0 overflow-hidden",
            children: /* @__PURE__ */ jsxs(Table, {
                children: [ /* @__PURE__ */ jsx(TableHeader, {
                    children: /* @__PURE__ */ jsxs(TableRow, {
                        children: [
                            /* @__PURE__ */
                            jsx(TableHead, { children: "User" }),
                            /* @__PURE__ */
                            jsx(TableHead, { children: "Email" }),
                            /* @__PURE__ */
                            jsx(TableHead, { children: "Role" }),
                            /* @__PURE__ */
                            jsx(TableHead, { children: "Department" }),
                            /* @__PURE__ */
                            jsx(TableHead, {})
                        ]
                    })
                }), /* @__PURE__ */ jsx(TableBody, {
                    children: users.map((u) => /* @__PURE__ */ jsxs(TableRow, {
                        children: [
                            /* @__PURE__ */
                            jsx(TableCell, {
                                children: /* @__PURE__ */ jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [ /* @__PURE__ */ jsx(Avatar, {
                                        className: "size-8",
                                        children: /* @__PURE__ */ jsx(AvatarFallback, { children: u.name.split(" ").map((p) => p[0]).slice(0, 2).join("") })
                                    }), /* @__PURE__ */ jsx("span", {
                                        className: "font-medium",
                                        children: u.name
                                    })]
                                })
                            }),
                            /* @__PURE__ */
                            jsx(TableCell, {
                                className: "text-muted-foreground",
                                children: u.email
                            }),
                            /* @__PURE__ */
                            jsx(TableCell, {
                                children: /* @__PURE__ */ jsx(Badge, {
                                    variant: "secondary",
                                    children: u.role
                                })
                            }),
                            /* @__PURE__ */
                            jsx(TableCell, { children: u.department }),
                            /* @__PURE__ */
                            jsx(TableCell, {
                                className: "text-right",
                                children: session ? .email !== u.email && /* @__PURE__ */ jsxs(DropdownMenu, {
                                    children: [ /* @__PURE__ */ jsx(DropdownMenuTrigger, {
                                        asChild: true,
                                        children: /* @__PURE__ */ jsx(Button, {
                                            size: "icon",
                                            variant: "ghost",
                                            children: /* @__PURE__ */ jsx(MoreHorizontal, { className: "size-4" })
                                        })
                                    }), /* @__PURE__ */ jsx(DropdownMenuContent, {
                                        align: "end",
                                        children: /* @__PURE__ */ jsxs(DropdownMenuItem, {
                                            className: "text-red-500 focus:bg-red-50 focus:text-red-900",
                                            onSelect: () => deleteUser(u.email),
                                            children: [ /* @__PURE__ */ jsx(Trash2, { className: "mr-2 size-4" }), " Delete"]
                                        })
                                    })]
                                })
                            })
                        ]
                    }, u.email))
                })]
            })
        }), isAddingUser && /* @__PURE__ */ jsx(AddUserDialog, {
            onConfirm: (userData) => {
                createUser(userData);
                setIsAddingUser(false);
            },
            onOpenChange: (isOpen) => !isOpen && setIsAddingUser(false)
        })]
    });
}

function AddUserDialog({ onConfirm, onOpenChange }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [role, setRole] = useState("Department Administrator");
    const [department, setDepartment] = useState("Registrar");
    const roles = ["Super Administrator", "Department Administrator"];
    const departments = [
        "Registrar",
        "Finance",
        "Human Resources",
        "Academic Affairs",
        "Research Office",
        "Student Services"
    ];
    const handleSubmit = () => {
        if (!name || !email || !password || role === "Department Administrator" && !department) {
            toast.error("Please fill out all required fields.");
            return;
        }
        if (password !== passwordConfirmation) {
            toast.error("Passwords do not match.");
            return;
        }
        const userData = {
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
            role
        };
        if (role === "Department Administrator") userData.department = department;
        onConfirm(userData);
    };
    return /* @__PURE__ */ jsx(Dialog, {
        open: true,
        onOpenChange,
        children: /* @__PURE__ */ jsxs(DialogContent, {
            children: [
                /* @__PURE__ */
                jsxs(DialogHeader, { children: [ /* @__PURE__ */ jsx(DialogTitle, { children: "Add New User" }), /* @__PURE__ */ jsx(DialogDescription, { children: "Create a new user account and assign them a role." })] }),
                /* @__PURE__ */
                jsxs("div", {
                    className: "space-y-3 py-4",
                    children: [
                        /* @__PURE__ */
                        jsxs("div", {
                            className: "space-y-2",
                            children: [ /* @__PURE__ */ jsx(Label, {
                                htmlFor: "name",
                                children: "Full Name"
                            }), /* @__PURE__ */ jsx(Input, {
                                id: "name",
                                value: name,
                                onChange: (e) => setName(e.target.value),
                                required: true
                            })]
                        }),
                        /* @__PURE__ */
                        jsxs("div", {
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
                        }),
                        /* @__PURE__ */
                        jsxs("div", {
                            className: "space-y-2",
                            children: [ /* @__PURE__ */ jsx(Label, {
                                htmlFor: "password",
                                children: "Password"
                            }), /* @__PURE__ */ jsx(Input, {
                                id: "password",
                                type: "password",
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                required: true
                            })]
                        }),
                        /* @__PURE__ */
                        jsxs("div", {
                            className: "space-y-2",
                            children: [ /* @__PURE__ */ jsx(Label, {
                                htmlFor: "password_confirmation",
                                children: "Confirm Password"
                            }), /* @__PURE__ */ jsx(Input, {
                                id: "password_confirmation",
                                type: "password",
                                value: passwordConfirmation,
                                onChange: (e) => setPasswordConfirmation(e.target.value),
                                required: true
                            })]
                        }),
                        /* @__PURE__ */
                        jsxs("div", {
                            className: "space-y-2",
                            children: [ /* @__PURE__ */ jsx(Label, { children: "Role" }), /* @__PURE__ */ jsxs(Select, {
                                value: role,
                                onValueChange: (v) => setRole(v),
                                children: [ /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }), /* @__PURE__ */ jsx(SelectContent, {
                                    children: roles.map((r) => /* @__PURE__ */ jsx(SelectItem, {
                                        value: r,
                                        children: r
                                    }, r))
                                })]
                            })]
                        }),
                        role === "Department Administrator" && /* @__PURE__ */ jsxs("div", {
                            className: "space-y-2",
                            children: [ /* @__PURE__ */ jsx(Label, { children: "Department" }), /* @__PURE__ */ jsxs(Select, {
                                value: department,
                                onValueChange: setDepartment,
                                children: [ /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }), /* @__PURE__ */ jsx(SelectContent, {
                                    children: departments.map((d) => /* @__PURE__ */ jsx(SelectItem, {
                                        value: d,
                                        children: d
                                    }, d))
                                })]
                            })]
                        })
                    ]
                }),
                /* @__PURE__ */
                jsxs(DialogFooter, {
                    children: [ /* @__PURE__ */ jsx(Button, {
                        variant: "ghost",
                        onClick: () => onOpenChange(false),
                        children: "Cancel"
                    }), /* @__PURE__ */ jsx(Button, {
                        onClick: handleSubmit,
                        children: "Create User"
                    })]
                })
            ]
        })
    });
}
//#endregion
export { UserManagementPage as component };