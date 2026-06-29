import { d as e, i as t, p as n, t as r } from "./useNavigate-BLdqxhW4.js";
import { d as i, t as a } from "./app-shell-Ca9mn3jJ.js";
import { r as o } from "./index-DABswBc8.js";
import { N as s, S as c, T as l, b as u, w as d } from "./dist-DMoWrB0s.js";
import { a as f, i as p, n as m, r as h, t as g } from "./select-Cu4ADlT4.js";
import { a as _, r as v, t as y } from "./card-BvHXjDW2.js";
import { n as b } from "./mock-data-A7ejLNdK.js";
import { t as x } from "./label-Dn8LA9wa.js";
import { t as S } from "./badge-BZ5bHvJD.js";
var C = s(`cloud-upload`, [
        [`path`, { d: `M12 13v8`, key: `1l5pq0` }],
        [`path`, { d: `M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242`, key: `1pljnt` }],
        [`path`, { d: `m8 17 4-4 4 4`, key: `1quai1` }]
    ]),
    w = s(`file-scan`, [
        [`path`, { d: `M20 10V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4.35`, key: `1cdjst` }],
        [`path`, { d: `M14 2v5a1 1 0 0 0 1 1h5`, key: `wfsgrz` }],
        [`path`, { d: `M16 14a2 2 0 0 0-2 2`, key: `ceaadl` }],
        [`path`, { d: `M16 22a2 2 0 0 1-2-2`, key: `1wqh5n` }],
        [`path`, { d: `M20 14a2 2 0 0 1 2 2`, key: `1ny6zw` }],
        [`path`, { d: `M20 22a2 2 0 0 0 2-2`, key: `1l9q4k` }]
    ]),
    T = s(`sparkles`, [
        [`path`, { d: `M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`, key: `1s2grr` }],
        [`path`, { d: `M20 2v4`, key: `1rf3ol` }],
        [`path`, { d: `M22 4h-4`, key: `gwowj6` }],
        [`circle`, { cx: `4`, cy: `20`, r: `2`, key: `6kqj1y` }]
    ]),
    E = n(e(), 1),
    D = t(),
    O = E.forwardRef(({ className: e, ...t }, n) => (0, D.jsx)(`textarea`, { className: _(`flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`, e), ref: n, ...t }));
O.displayName = `Textarea`;
var k = `Progress`,
    A = 100,
    [j, M] = u(k),
    [N, P] = j(k),
    F = E.forwardRef((e, t) => { let { __scopeProgress: n, value: r = null, max: i, getValueLabel: a = R, ...o } = e;
        (i || i === 0) && !V(i) && console.error(U(`${i}`, `Progress`)); let s = V(i) ? i : A;
        r !== null && !H(r, s) && console.error(W(`${r}`, `Progress`)); let l = H(r, s) ? r : null,
            u = B(l) ? a(l, s) : void 0; return (0, D.jsx)(N, { scope: n, value: l, max: s, children: (0, D.jsx)(c.div, { "aria-valuemax": s, "aria-valuemin": 0, "aria-valuenow": B(l) ? l : void 0, "aria-valuetext": u, role: `progressbar`, "data-state": z(l, s), "data-value": l ? ? void 0, "data-max": s, ...o, ref: t }) }) });
F.displayName = k;
var I = `ProgressIndicator`,
    L = E.forwardRef((e, t) => { let { __scopeProgress: n, ...r } = e, i = P(I, n); return (0, D.jsx)(c.div, { "data-state": z(i.value, i.max), "data-value": i.value ? ? void 0, "data-max": i.max, ...r, ref: t }) });
L.displayName = I;

function R(e, t) { return `${Math.round(e/t*100)}%` }

function z(e, t) { return e == null ? `indeterminate` : e === t ? `complete` : `loading` }

function B(e) { return typeof e == `number` }

function V(e) { return B(e) && !isNaN(e) && e > 0 }

function H(e, t) { return B(e) && !isNaN(e) && e <= t && e >= 0 }

function U(e, t) { return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${A}\`.` }

function W(e, t) { return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${A} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.` }
var G = F,
    K = L,
    q = E.forwardRef(({ className: e, value: t, ...n }, r) => (0, D.jsx)(G, { ref: r, className: _(`relative h-2 w-full overflow-hidden rounded-full bg-primary/20`, e), ...n, children: (0, D.jsx)(K, { className: `h-full w-full flex-1 bg-primary transition-all`, style: { transform: `translateX(-${100-(t||0)}%)` } }) }));
q.displayName = G.displayName;

function J() { let [e, t] = (0, E.useState)(null), [n, s] = (0, E.useState)(0), [c, u] = (0, E.useState)(``), [_, k] = (0, E.useState)(`Transcript Request`), [A, j] = (0, E.useState)(b[0]), [M, N] = (0, E.useState)(!1), P = (0, E.useRef)(null), [F, I] = (0, E.useState)(``), L = r(), R = e => { t(e), s(0), u(``), N(!0); let n = setInterval(() => { s(e => e >= 100 ? (clearInterval(n), N(!1), 100) : e + 8) }, 120) }; return (0, D.jsx)(a, { title: `Upload Document`, subtitle: `Upload PDFs or scanned images for OCR processing and classification`, children: (0, D.jsxs)(`div`, { className: `grid gap-6 lg:grid-cols-5`, children: [(0, D.jsxs)(y, { className: `p-6 lg:col-span-3`, children: [(0, D.jsx)(`h2`, { className: `font-semibold tracking-tight`, children: `Source document` }), (0, D.jsx)(`p`, { className: `text-xs text-muted-foreground`, children: `Accepted: PDF, PNG, JPG · Up to 20 MB` }), (0, D.jsxs)(`div`, { onDragOver: e => e.preventDefault(), onDrop: e => { e.preventDefault(); let t = e.dataTransfer.files ? .[0];
                        t && R(t) }, onClick: () => P.current ? .click(), className: `mt-4 border-2 border-dashed border-border rounded-lg p-10 text-center hover:bg-muted/40 cursor-pointer transition`, children: [(0, D.jsx)(C, { className: `mx-auto size-10 text-muted-foreground` }), (0, D.jsx)(`div`, { className: `mt-3 font-medium`, children: `Drop your file here or click to browse` }), (0, D.jsx)(`div`, { className: `text-xs text-muted-foreground mt-1`, children: `We'll run OCR automatically after upload` }), (0, D.jsx)(`input`, { ref: P, type: `file`, className: `hidden`, accept: `.pdf,image/*`, onChange: e => { let t = e.target.files ? .[0];
                            t && R(t) } })] }), e && (0, D.jsxs)(`div`, { className: `mt-4 border rounded-md p-3 flex items-center gap-3`, children: [(0, D.jsx)(`div`, { className: `size-9 rounded bg-primary/10 text-primary grid place-items-center`, children: (0, D.jsx)(w, { className: `size-4` }) }), (0, D.jsxs)(`div`, { className: `flex-1 min-w-0`, children: [(0, D.jsx)(`div`, { className: `text-sm font-medium truncate`, children: e.name }), (0, D.jsxs)(`div`, { className: `text-xs text-muted-foreground`, children: [(e.size / 1024).toFixed(1), ` KB`] }), (0, D.jsx)(q, { value: n, className: `mt-2 h-1.5` })] }), (0, D.jsx)(l, { variant: `ghost`, size: `icon`, onClick: () => { t(null), u(``), s(0) }, children: (0, D.jsx)(i, { className: `size-4` }) })] }), (0, D.jsxs)(`div`, { className: `mt-6`, children: [(0, D.jsxs)(`div`, { className: `flex items-center justify-between mb-2`, children: [(0, D.jsxs)(x, { className: `flex items-center gap-2`, children: [(0, D.jsx)(T, { className: `size-4 text-primary` }), ` OCR extracted text`] }), M && (0, D.jsx)(S, { variant: `outline`, children: `Scanning…` })] }), (0, D.jsx)(O, { value: c, onChange: e => u(e.target.value), rows: 10, placeholder: `OCR output will appear here once your document is processed.` })] })] }), (0, D.jsxs)(y, { className: `p-6 lg:col-span-2 h-fit`, children: [(0, D.jsx)(`h2`, { className: `font-semibold tracking-tight`, children: `Classification` }), (0, D.jsx)(`p`, { className: `text-xs text-muted-foreground`, children: `Route this document through the right workflow` }), (0, D.jsxs)(`div`, { className: `mt-4 space-y-4`, children: [(0, D.jsxs)(`div`, { className: `space-y-2`, children: [(0, D.jsx)(x, { children: `Document type` }), (0, D.jsxs)(g, { value: _, onValueChange: k, children: [(0, D.jsx)(p, { children: (0, D.jsx)(f, {}) }), (0, D.jsx)(m, { children: [`Transcript Request`, `Certificate Request`, `Leave Application`, `Financial Request`, `Academic Document`, `Other`].map(e => (0, D.jsx)(h, { value: e, children: e }, e)) })] })] }), (0, D.jsxs)(`div`, { className: `space-y-2`, children: [(0, D.jsx)(x, { children: `Department` }), (0, D.jsxs)(g, { value: A, onValueChange: j, children: [(0, D.jsx)(p, { children: (0, D.jsx)(f, {}) }), (0, D.jsx)(m, { children: b.map(e => (0, D.jsx)(h, { value: e, children: e }, e)) })] })] }), (0, D.jsxs)(`div`, { className: `space-y-2`, children: [(0, D.jsx)(x, { children: `Reference (optional)` }), (0, D.jsx)(d, { placeholder: `Auto-generated if blank` })] }), (0, D.jsxs)(`div`, { className: `space-y-2`, children: [(0, D.jsx)(x, { children: `Notes` }), (0, D.jsx)(O, { value: F, onChange: e => I(e.target.value), placeholder: `Add any context for reviewers…`, rows: 3 })] }), (0, D.jsx)(l, { className: `w-full`, onClick: async() => { if (!e) { o.error(`Please upload a document first`); return } let n = v(); if (console.log(v()), console.log(v() ? .token), console.log(`session.student_id:`, n ? .student_id), !n) { o.error(`Please login again.`); return } let r = new FormData;
                            r.append(`student_id`, n.student_id ? ? ``), r.append(`title`, _), r.append(`description`, F), r.append(`destination_department`, A), r.append(`file`, e); try { let e = await fetch(`${import.meta.env.VITE_API_URL}/api/files`, { method: `POST`, headers: { Authorization: `Bearer ${n.token}`, Accept: `application/json` }, body: r }),
                                    i = await e.json(); if (!e.ok) { o.error(i.message || `Upload failed.`); return }
                                u(i.file.content || ``), o.success(`Document submitted successfully!`), t(null), u(``), s(0), I(``), L({ to: `/dashboard` }) } catch (e) { console.error(e), o.error(`Unable to connect to the server.`) } }, children: `Submit for processing` })] })] })] }) }) }
export { J as component };