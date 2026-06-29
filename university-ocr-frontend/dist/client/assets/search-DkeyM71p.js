import { d as e, i as t, p as n, t as r } from "./useNavigate-BLdqxhW4.js";
import { t as i } from "./link-BDqwClX8.js";
import { p as a, t as o } from "./app-shell-Ca9mn3jJ.js";
import { r as s } from "./index-DABswBc8.js";
import { N as c, w as l } from "./dist-DMoWrB0s.js";
import { r as u, t as d } from "./card-BvHXjDW2.js";
import { i as f, r as p } from "./mock-data-A7ejLNdK.js";
import { t as m } from "./badge-BZ5bHvJD.js";
var h = c(`loader-circle`, [
        [`path`, { d: `M21 12a9 9 0 1 1-6.219-8.56`, key: `13zald` }]
    ]),
    g = n(e()),
    _ = t();

function v(e, t) { if (!t) return e; let n = e.toLowerCase().indexOf(t.toLowerCase()); return n === -1 ? e : (0, _.jsxs)(_.Fragment, { children: [e.slice(0, n), (0, _.jsx)(`mark`, { className: `bg-accent/40 rounded px-0.5`, children: e.slice(n, n + t.length) }), e.slice(n + t.length)] }) }

function y() { let e = r(),
        [t, n] = (0, g.useState)(``),
        [c, y] = (0, g.useState)([]),
        [b, x] = (0, g.useState)(!1); return (0, g.useEffect)(() => { let n = u(); if (!n) { e({ to: `/auth` }); return } if (!t.trim()) { y([]); return } let r = async() => { x(!0); try { let e = await fetch(`${import.meta.env.VITE_API_URL}/api/search?q=${encodeURIComponent(t)}`, { headers: { Authorization: `Bearer ${n.token}`, Accept: `application/json` } }),
                        r = await e.json();
                    e.ok ? y(r) : s.error(`Search failed.`) } catch { s.error(`Could not connect to the server for search.`) } finally { x(!1) } },
            i = setTimeout(() => r(), 300); return () => clearTimeout(i) }, [t, e]), (0, _.jsxs)(o, { title: `Search`, subtitle: `Full-text search across documents using OCR-extracted content`, children: [(0, _.jsxs)(d, { className: `p-4`, children: [(0, _.jsxs)(`div`, { className: `relative`, children: [b ? (0, _.jsx)(h, { className: `absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground animate-spin` }) : (0, _.jsx)(a, { className: `absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground` }), (0, _.jsx)(l, { value: t, onChange: e => n(e.target.value), placeholder: `Search inside documents…`, className: `pl-9 h-11` })] }), (0, _.jsxs)(`div`, { className: `text-xs text-muted-foreground mt-2`, children: [c.length, ` result`, c.length === 1 ? `` : `s`] })] }), (0, _.jsxs)(`div`, { className: `mt-4 space-y-3`, children: [c.map(e => { let n = e.content ? .split(`
`).find(e => e.toLowerCase().includes(t.toLowerCase())) ? ? e.content ? .split(`
`)[0] ? ? `No content available`; return (0, _.jsx)(d, { className: `p-4 hover:shadow-md transition`, children: (0, _.jsxs)(i, { to: `/tracking/$id`, params: { id: e.id }, className: `block`, children: [(0, _.jsxs)(`div`, { className: `flex items-start justify-between gap-4`, children: [(0, _.jsxs)(`div`, { children: [(0, _.jsx)(`div`, { className: `text-xs text-muted-foreground font-mono`, children: e.reference }), (0, _.jsx)(`div`, { className: `font-semibold`, children: v(e.title, t) }), (0, _.jsxs)(`div`, { className: `text-xs text-muted-foreground mt-0.5`, children: [e.department, ` · `, e.type] })] }), (0, _.jsx)(m, { variant: `outline`, className: p(e.status), children: f[e.status] })] }), (0, _.jsx)(`p`, { className: `mt-3 text-sm text-muted-foreground line-clamp-2`, children: v(n, t) })] }) }, e.id) }), t && c.length === 0 && (0, _.jsxs)(d, { className: `p-10 text-center text-sm text-muted-foreground`, children: [`No documents match "`, t, `".`] })] })] }) }
export { y as component };