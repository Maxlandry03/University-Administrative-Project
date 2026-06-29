import { d as e, i as t, p as n, t as r } from "./useNavigate-BLdqxhW4.js";
import { m as i, t as a } from "./app-shell-Ca9mn3jJ.js";
import { r as o } from "./index-DABswBc8.js";
import { r as s, t as c } from "./card-BvHXjDW2.js";
import { n as l } from "./mock-data-A7ejLNdK.js";
var u = n(e()),
    d = t();

function f() { let e = r(),
        [t, n] = (0, u.useState)([]); return (0, u.useEffect)(() => { let t = s(); if (!t) { e({ to: `/auth` }); return }(async() => { try { let e = await fetch(`${import.meta.env.VITE_API_URL}/api/files`, { headers: { Authorization: `Bearer ${t.token}`, Accept: `application/json` } }),
                    r = await e.json();
                e.ok && n(r) } catch { o.error(`Failed to fetch file data for departments.`) } })() }, [e]), (0, d.jsx)(a, { title: `Departments`, subtitle: `Manage administrative departments and their file load`, children: (0, d.jsx)(`div`, { className: `grid gap-4 md:grid-cols-2 lg:grid-cols-3`, children: l.map(e => { let n = t.filter(t => t.department === e).length,
                    r = t.filter(t => t.department === e && t.status === `pending`).length; return (0, d.jsx)(c, { className: `p-5`, children: (0, d.jsxs)(`div`, { className: `flex items-start gap-3`, children: [(0, d.jsx)(`div`, { className: `size-10 rounded-md bg-primary/10 text-primary grid place-items-center`, children: (0, d.jsx)(i, { className: `size-5` }) }), (0, d.jsxs)(`div`, { className: `flex-1`, children: [(0, d.jsx)(`div`, { className: `font-semibold`, children: e }), (0, d.jsxs)(`div`, { className: `text-xs text-muted-foreground`, children: [n, ` files · `, r, ` pending`] })] })] }) }, e) }) }) }) }
export { f as component };