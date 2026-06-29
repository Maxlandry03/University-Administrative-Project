import { d as e, i as t, p as n, t as r } from "./useNavigate-BLdqxhW4.js";
import { t as i } from "./link-BDqwClX8.js";
import { t as a } from "./app-shell-Ca9mn3jJ.js";
import { r as o } from "./index-DABswBc8.js";
import { r as s, t as c } from "./card-BvHXjDW2.js";
import { t as l } from "./badge-BZ5bHvJD.js";
var u = n(e()),
    d = t();

function f() { let e = r(),
        [t, n] = (0, u.useState)([]); return (0, u.useEffect)(() => { let t = s(); if (!t) { e({ to: `/auth` }); return }(async() => { try { let e = await fetch(`${import.meta.env.VITE_API_URL}/api/files`, { headers: { Authorization: `Bearer ${t.token}`, Accept: `application/json` } }),
                    r = await e.json();
                e.ok && n(r) } catch { o.error(`Failed to fetch tracking data.`) } })() }, []), (0, d.jsx)(a, { title: `Workflow Tracking`, subtitle: `Follow each file from submission to archival`, children: (0, d.jsx)(`div`, { className: `grid gap-3 md:grid-cols-2`, children: t.map(e => { let t = e.history ? .length ? ? 1; return (0, d.jsx)(i, { to: `/tracking/$id`, params: { id: e.id }, children: (0, d.jsxs)(c, { className: `p-4 hover:shadow-md transition`, children: [(0, d.jsxs)(`div`, { className: `flex items-center justify-between`, children: [(0, d.jsxs)(`div`, { children: [(0, d.jsx)(`div`, { className: `text-xs font-mono text-muted-foreground`, children: e.reference }), (0, d.jsx)(`div`, { className: `font-semibold`, children: e.title })] }), (0, d.jsx)(l, { children: e.status })] }), (0, d.jsxs)(`div`, { className: `text-xs text-muted-foreground mt-2`, children: [e.department, ` · `, t, ` events`] })] }) }, e.id) }) }) }) }
export { f as component };