import { d as e, i as t, p as n, t as r } from "./useNavigate-BLdqxhW4.js";
import { t as i } from "./link-BDqwClX8.js";
import { p as a, t as o } from "./app-shell-Ca9mn3jJ.js";
import { r as s } from "./index-DABswBc8.js";
import { T as c, w as l } from "./dist-DMoWrB0s.js";
import { a as u, i as d, n as f, r as p, t as m } from "./select-Cu4ADlT4.js";
import { r as h, t as g } from "./card-BvHXjDW2.js";
import { a as _, i as v, n as y, o as b, r as x, t as S } from "./table-8pcUMM7Z.js";
import { i as C, n as w, r as T } from "./mock-data-A7ejLNdK.js";
import { t as E } from "./badge-BZ5bHvJD.js";
var D = n(e()),
    O = t();

function k() { let e = r(),
        [t, n] = (0, D.useState)([]),
        [k, A] = (0, D.useState)(``),
        [j, M] = (0, D.useState)(`all`),
        [N, P] = (0, D.useState)(`all`);
    (0, D.useEffect)(() => { let t = h(); if (!t) { e({ to: `/auth` }); return }(async() => { try { let e = await fetch(`${import.meta.env.VITE_API_URL}/api/files`, { headers: { Authorization: `Bearer ${t.token}`, Accept: `application/json` } }),
                    r = await e.json();
                e.ok && n(r) } catch { s.error(`Failed to fetch files.`) } })() }, [e]); let F = t.filter(e => !(j !== `all` && e.status !== j || N !== `all` && e.department !== N || k && !`${e.title} ${e.reference} ${e.submittedBy}`.toLowerCase().includes(k.toLowerCase()))); return (0, O.jsxs)(o, { title: `My Files`, subtitle: `All documents you have submitted or are reviewing`, children: [(0, O.jsx)(g, { className: `p-4`, children: (0, O.jsxs)(`div`, { className: `flex flex-wrap gap-3`, children: [(0, O.jsxs)(`div`, { className: `relative flex-1 min-w-[220px]`, children: [(0, O.jsx)(a, { className: `absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground` }), (0, O.jsx)(l, { value: k, onChange: e => A(e.target.value), placeholder: `Search by title, reference, person…`, className: `pl-9` })] }), (0, O.jsxs)(m, { value: j, onValueChange: M, children: [(0, O.jsx)(d, { className: `w-44`, children: (0, O.jsx)(u, { placeholder: `Status` }) }), (0, O.jsxs)(f, { children: [(0, O.jsx)(p, { value: `all`, children: `All statuses` }), [`pending`, `in_review`, `approved`, `rejected`, `archived`].map(e => (0, O.jsx)(p, { value: e, children: C[e] }, e))] })] }), (0, O.jsxs)(m, { value: N, onValueChange: P, children: [(0, O.jsx)(d, { className: `w-52`, children: (0, O.jsx)(u, { placeholder: `Department` }) }), (0, O.jsxs)(f, { children: [(0, O.jsx)(p, { value: `all`, children: `All departments` }), w.map(e => (0, O.jsx)(p, { value: e, children: e }, e))] })] })] }) }), (0, O.jsx)(g, { className: `mt-4 p-0 overflow-hidden`, children: (0, O.jsxs)(S, { children: [(0, O.jsx)(_, { children: (0, O.jsxs)(b, { children: [(0, O.jsx)(v, { children: `Reference` }), (0, O.jsx)(v, { children: `Title` }), (0, O.jsx)(v, { children: `Type` }), (0, O.jsx)(v, { children: `Department` }), (0, O.jsx)(v, { children: `Submitted by` }), (0, O.jsx)(v, { children: `Status` }), (0, O.jsx)(v, { children: `Updated` }), (0, O.jsx)(v, {})] }) }), (0, O.jsxs)(y, { children: [F.map(e => (0, O.jsxs)(b, { children: [(0, O.jsx)(x, { className: `font-mono text-xs`, children: e.reference }), (0, O.jsx)(x, { className: `font-medium`, children: e.title }), (0, O.jsx)(x, { className: `text-muted-foreground`, children: e.type }), (0, O.jsx)(x, { children: e.department }), (0, O.jsx)(x, { children: e.submittedBy }), (0, O.jsx)(x, { children: (0, O.jsx)(E, { variant: `outline`, className: T(e.status), children: C[e.status] }) }), (0, O.jsx)(x, { className: `text-xs text-muted-foreground`, children: new Date(e.updatedAt).toLocaleDateString() }), (0, O.jsx)(x, { children: (0, O.jsx)(c, { size: `sm`, variant: `ghost`, asChild: !0, children: (0, O.jsx)(i, { to: `/tracking/$id`, params: { id: e.id }, children: `Track` }) }) })] }, e.id)), F.length === 0 && (0, O.jsx)(b, { children: (0, O.jsx)(x, { colSpan: 8, className: `text-center py-10 text-sm text-muted-foreground`, children: `No files match your filters.` }) })] })] }) })] }) }
export { k as component };