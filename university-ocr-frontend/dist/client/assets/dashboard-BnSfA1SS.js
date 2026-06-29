import { d as e, i as t, p as n, t as r } from "./useNavigate-BLdqxhW4.js";
import { t as i } from "./link-BDqwClX8.js";
import { f as a, t as o } from "./app-shell-Ca9mn3jJ.js";
import { r as s } from "./index-DABswBc8.js";
import { N as c, T as l } from "./dist-DMoWrB0s.js";
import { t as u } from "./clock-BuCmUqy5.js";
import { r as d, t as f } from "./card-BvHXjDW2.js";
import { i as p, r as m } from "./mock-data-A7ejLNdK.js";
import { t as h } from "./badge-BZ5bHvJD.js";
var g = c(`circle-check`, [
        [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
        [`path`, { d: `m9 12 2 2 4-4`, key: `dzmm74` }]
    ]),
    _ = c(`eye`, [
        [`path`, { d: `M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`, key: `1nclc0` }],
        [`circle`, { cx: `12`, cy: `12`, r: `3`, key: `1v7zrd` }]
    ]),
    v = c(`file-stack`, [
        [`path`, { d: `M11 21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1`, key: `likhh7` }],
        [`path`, { d: `M16 16a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1`, key: `17ky3x` }],
        [`path`, { d: `M21 6a2 2 0 0 0-.586-1.414l-2-2A2 2 0 0 0 17 2h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1z`, key: `1hyeo0` }]
    ]),
    y = c(`triangle-alert`, [
        [`path`, { d: `m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`, key: `wmoenq` }],
        [`path`, { d: `M12 9v4`, key: `juzpu7` }],
        [`path`, { d: `M12 17h.01`, key: `p32p05` }]
    ]),
    b = n(e()),
    x = t();

function S({ icon: e, label: t, value: n, hint: r }) { return (0, x.jsx)(f, { className: `p-5`, children: (0, x.jsxs)(`div`, { className: `flex justify-between`, children: [(0, x.jsxs)(`div`, { children: [(0, x.jsx)(`p`, { className: `text-xs text-muted-foreground uppercase`, children: t }), (0, x.jsx)(`h2`, { className: `text-3xl font-semibold mt-2`, children: n }), (0, x.jsx)(`p`, { className: `text-xs text-muted-foreground`, children: r })] }), (0, x.jsx)(`div`, { className: `size-10 rounded-md bg-primary/10 grid place-items-center`, children: (0, x.jsx)(e, { className: `size-5` }) })] }) }) }

function C() { let e = r(),
        [t, n] = (0, b.useState)(null),
        [c, C] = (0, b.useState)([]),
        w = async(e, n, r) => { if (t) try { let i = await fetch(`${import.meta.env.VITE_API_URL}/api/files/${e}/status`, { method: `PUT`, headers: { Authorization: `Bearer ${t.token}`, Accept: `application/json`, "Content-Type": `application/json` }, body: JSON.stringify({ status: n, reason: r }) }),
                    a = await i.json(); if (!i.ok) { s.error(a.message); return }
                s.success(`Status updated`), C(t => t.map(t => t.id === e ? {...t, status: n } : t)) } catch { s.error(`Update failed`) } }; if ((0, b.useEffect)(() => { let t = d(); if (!t) { e({ to: `/auth` }); return }
            n(t) }, []), (0, b.useEffect)(() => { t && fetch(`${import.meta.env.VITE_API_URL}/api/files`, { headers: { Authorization: `Bearer ${t.token}`, Accept: `application/json` } }).then(e => e.json()).then(e => { C(e) }).catch(() => { s.error(`Cannot load files`) }) }, [t]), !t) return null; let T = t.role === `student`,
        E = c.length,
        D = c.filter(e => e.status === `pending`).length,
        O = c.filter(e => e.status === `in_review`).length,
        k = c.filter(e => e.status === `approved`).length; return (0, x.jsx)(o, { title: T ? `Welcome ${t.name}` : `Dashboard`, subtitle: T ? `Manage your documents and track your requests` : `Administrative document workflow`, children: T ? (0, x.jsxs)(x.Fragment, { children: [(0, x.jsxs)(`div`, { className: `grid gap-4 md:grid-cols-4`, children: [(0, x.jsx)(S, { icon: v, label: `Submitted`, value: String(E), hint: `My documents` }), (0, x.jsx)(S, { icon: u, label: `Pending`, value: String(D), hint: `Waiting review` }), (0, x.jsx)(S, { icon: y, label: `In Review`, value: String(O), hint: `Processing` }), (0, x.jsx)(S, { icon: g, label: `Approved`, value: String(k), hint: `Completed` })] }), (0, x.jsxs)(f, { className: `mt-6 p-5`, children: [(0, x.jsx)(`h2`, { className: `font-semibold`, children: `Student Actions` }), (0, x.jsx)(`p`, { className: `text-xs text-muted-foreground`, children: `Quick access to your services` }), (0, x.jsxs)(`div`, { className: `mt-4 grid gap-3 md:grid-cols-2`, children: [(0, x.jsx)(l, { asChild: !0, children: (0, x.jsxs)(i, { to: `/upload`, children: [(0, x.jsx)(a, { className: `mr-2 size-4` }), `Upload Document`] }) }), (0, x.jsx)(l, { variant: `outline`, asChild: !0, children: (0, x.jsxs)(i, { to: `/files`, children: [(0, x.jsx)(v, { className: `mr-2 size-4` }), `My Files`] }) }), (0, x.jsx)(l, { variant: `outline`, asChild: !0, children: (0, x.jsxs)(i, { to: `/tracking`, children: [(0, x.jsx)(u, { className: `mr-2 size-4` }), `Track Requests`] }) }), (0, x.jsx)(l, { variant: `outline`, asChild: !0, children: (0, x.jsxs)(i, { to: `/search`, children: [(0, x.jsx)(_, { className: `mr-2 size-4` }), `Search Documents`] }) })] })] }), (0, x.jsxs)(f, { className: `mt-6 p-5`, children: [(0, x.jsx)(`h2`, { className: `font-semibold`, children: `Recent Uploads` }), (0, x.jsx)(`div`, { className: `mt-4 space-y-3`, children: c.map(e => (0, x.jsxs)(`div`, { className: `flex justify-between items-center`, children: [(0, x.jsxs)(`div`, { children: [(0, x.jsx)(i, { to: `/file/${e.id}`, className: `font-medium hover:underline`, children: e.title }), (0, x.jsx)(`p`, { className: `text-xs text-muted-foreground`, children: e.department })] }), (0, x.jsx)(h, { className: m(e.status), children: p[e.status] })] }, e.id)) })] })] }) : (0, x.jsxs)(x.Fragment, { children: [(0, x.jsxs)(`div`, { className: `grid gap-4 md:grid-cols-4`, children: [(0, x.jsx)(S, { icon: v, label: `Total Files`, value: String(E), hint: `All documents` }), (0, x.jsx)(S, { icon: u, label: `Pending`, value: String(D), hint: `Need action` }), (0, x.jsx)(S, { icon: y, label: `In Review`, value: String(O), hint: `Processing` }), (0, x.jsx)(S, { icon: g, label: `Approved`, value: String(k), hint: `Completed` })] }), (0, x.jsxs)(f, { className: `mt-6 p-5`, children: [(0, x.jsx)(`h2`, { className: `font-semibold`, children: `Recent Activity` }), (0, x.jsx)(`div`, { className: `mt-4 space-y-3`, children: c.slice(0, 10).map(e => (0, x.jsxs)(`div`, { className: `flex justify-between`, children: [(0, x.jsxs)(`div`, { children: [(0, x.jsx)(i, { to: `/file/${e.id}`, className: `font-medium hover:underline`, children: e.title }), (0, x.jsx)(`p`, { className: `text-xs text-muted-foreground`, children: e.department })] }), (0, x.jsxs)(`div`, { className: `flex gap-2 items-center`, children: [(0, x.jsx)(h, { children: e.status }), (0, x.jsx)(l, { size: `sm`, onClick: () => w(e.id, `approved`), children: `Approve` }), (0, x.jsx)(l, { size: `sm`, variant: `destructive`, onClick: () => { let t = prompt(`Enter rejection reason`);
                                    w(e.id, `rejected`, t || ``) }, children: `Reject` }), (0, x.jsx)(l, { size: `sm`, variant: `outline`, onClick: () => w(e.id, `in_review`), children: `Review` })] })] }, e.id)) })] })] }) }) }
export { C as component };