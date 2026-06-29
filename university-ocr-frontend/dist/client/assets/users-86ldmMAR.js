import { d as e, i as t, p as n, t as r } from "./useNavigate-BLdqxhW4.js";
import { a as i, c as a, d as o, i as s, l as c, n as l, o as u, r as d, s as f, t as p, u as m } from "./app-shell-Ca9mn3jJ.js";
import { r as h } from "./index-DABswBc8.js";
import { A as g, C as _, N as v, O as y, S as b, T as x, _ as S, a as ee, b as C, c as te, d as w, f as T, g as E, i as D, j as O, l as ne, m as re, o as k, p as ie, r as A, s as ae, u as oe, v as j, w as M, x as N } from "./dist-DMoWrB0s.js";
import { a as P, c as se, i as ce, n as le, o as ue, r as de, s as fe, t as pe } from "./select-Cu4ADlT4.js";
import { a as F, r as me, t as he } from "./card-BvHXjDW2.js";
import { a as ge, i as I, n as _e, o as ve, r as L, t as ye } from "./table-8pcUMM7Z.js";
import { t as R } from "./label-Dn8LA9wa.js";
import { t as be } from "./badge-BZ5bHvJD.js";
var xe = v(`chevron-right`, [
        [`path`, { d: `m9 18 6-6-6-6`, key: `mthhwq` }]
    ]),
    Se = v(`circle`, [
        [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }]
    ]),
    Ce = v(`ellipsis`, [
        [`circle`, { cx: `12`, cy: `12`, r: `1`, key: `41hilf` }],
        [`circle`, { cx: `19`, cy: `12`, r: `1`, key: `1wjl8i` }],
        [`circle`, { cx: `5`, cy: `12`, r: `1`, key: `1pcz8c` }]
    ]),
    we = v(`trash-2`, [
        [`path`, { d: `M10 11v6`, key: `nco0om` }],
        [`path`, { d: `M14 11v6`, key: `outv1u` }],
        [`path`, { d: `M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`, key: `miytrc` }],
        [`path`, { d: `M3 6h18`, key: `d0wm0j` }],
        [`path`, { d: `M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`, key: `e791ji` }]
    ]),
    Te = v(`user-plus`, [
        [`path`, { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`, key: `1yyitq` }],
        [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }],
        [`line`, { x1: `19`, x2: `19`, y1: `8`, y2: `14`, key: `1bvyxn` }],
        [`line`, { x1: `22`, x2: `16`, y1: `11`, y2: `11`, key: `1shjgl` }]
    ]),
    z = n(e(), 1),
    B = t(),
    Ee = s,
    De = c,
    Oe = z.forwardRef(({ className: e, ...t }, n) => (0, B.jsx)(a, { ref: n, className: F(`fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0`, e), ...t }));
Oe.displayName = a.displayName;
var ke = z.forwardRef(({ className: e, children: t, ...n }, r) => (0, B.jsxs)(De, { children: [(0, B.jsx)(Oe, {}), (0, B.jsxs)(u, { ref: r, className: F(`fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg`, e), ...n, children: [t, (0, B.jsxs)(i, { className: `absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground`, children: [(0, B.jsx)(o, { className: `h-4 w-4` }), (0, B.jsx)(`span`, { className: `sr-only`, children: `Close` })] })] })] }));
ke.displayName = u.displayName;
var Ae = ({ className: e, ...t }) => (0, B.jsx)(`div`, { className: F(`flex flex-col space-y-1.5 text-center sm:text-left`, e), ...t });
Ae.displayName = `DialogHeader`;
var je = ({ className: e, ...t }) => (0, B.jsx)(`div`, { className: F(`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2`, e), ...t });
je.displayName = `DialogFooter`;
var Me = z.forwardRef(({ className: e, ...t }, n) => (0, B.jsx)(m, { ref: n, className: F(`text-lg font-semibold leading-none tracking-tight`, e), ...t }));
Me.displayName = m.displayName;
var Ne = z.forwardRef(({ className: e, ...t }, n) => (0, B.jsx)(f, { ref: n, className: F(`text-sm text-muted-foreground`, e), ...t }));
Ne.displayName = f.displayName;
var Pe = `rovingFocusGroup.onEntryFocus`,
    Fe = { bubbles: !1, cancelable: !0 },
    V = `RovingFocusGroup`,
    [Ie, Le, Re] = fe(V),
    [ze, Be] = C(V, [Re]),
    [Ve, He] = ze(V),
    Ue = z.forwardRef((e, t) => (0, B.jsx)(Ie.Provider, { scope: e.__scopeRovingFocusGroup, children: (0, B.jsx)(Ie.Slot, { scope: e.__scopeRovingFocusGroup, children: (0, B.jsx)(We, {...e, ref: t }) }) }));
Ue.displayName = V;
var We = z.forwardRef((e, t) => { let { __scopeRovingFocusGroup: n, orientation: r, loop: i = !1, dir: a, currentTabStopId: o, defaultCurrentTabStopId: s, onCurrentTabStopIdChange: c, onEntryFocus: l, preventScrollOnEntryFocus: u = !1, ...d } = e, f = z.useRef(null), p = O(t, f), m = ue(a), [h, g] = S({ prop: o, defaultProp: s ? ? null, onChange: c, caller: V }), [_, v] = z.useState(!1), y = E(l), x = Le(n), ee = z.useRef(!1), [C, te] = z.useState(0); return z.useEffect(() => { let e = f.current; if (e) return e.addEventListener(Pe, y), () => e.removeEventListener(Pe, y) }, [y]), (0, B.jsx)(Ve, { scope: n, orientation: r, dir: m, loop: i, currentTabStopId: h, onItemFocus: z.useCallback(e => g(e), [g]), onItemShiftTab: z.useCallback(() => v(!0), []), onFocusableItemAdd: z.useCallback(() => te(e => e + 1), []), onFocusableItemRemove: z.useCallback(() => te(e => e - 1), []), children: (0, B.jsx)(b.div, { tabIndex: _ || C === 0 ? -1 : 0, "data-orientation": r, ...d, ref: p, style: { outline: `none`, ...e.style }, onMouseDown: N(e.onMouseDown, () => { ee.current = !0 }), onFocus: N(e.onFocus, e => { let t = !ee.current; if (e.target === e.currentTarget && t && !_) { let t = new CustomEvent(Pe, Fe); if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) { let e = x().filter(e => e.focusable);
                            Xe([e.find(e => e.active), e.find(e => e.id === h), ...e].filter(Boolean).map(e => e.ref.current), u) } }
                    ee.current = !1 }), onBlur: N(e.onBlur, () => v(!1)) }) }) }),
    Ge = `RovingFocusGroupItem`,
    Ke = z.forwardRef((e, t) => { let { __scopeRovingFocusGroup: n, focusable: r = !0, active: i = !1, tabStopId: a, children: o, ...s } = e, c = j(), l = a || c, u = He(Ge, n), d = u.currentTabStopId === l, f = Le(n), { onFocusableItemAdd: p, onFocusableItemRemove: m, currentTabStopId: h } = u; return z.useEffect(() => { if (r) return p(), () => m() }, [r, p, m]), (0, B.jsx)(Ie.ItemSlot, { scope: n, id: l, focusable: r, active: i, children: (0, B.jsx)(b.span, { tabIndex: d ? 0 : -1, "data-orientation": u.orientation, ...s, ref: t, onMouseDown: N(e.onMouseDown, e => { r ? u.onItemFocus(l) : e.preventDefault() }), onFocus: N(e.onFocus, () => u.onItemFocus(l)), onKeyDown: N(e.onKeyDown, e => { if (e.key === `Tab` && e.shiftKey) { u.onItemShiftTab(); return } if (e.target !== e.currentTarget) return; let t = Ye(e, u.orientation, u.dir); if (t !== void 0) { if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                        e.preventDefault(); let n = f().filter(e => e.focusable).map(e => e.ref.current); if (t === `last`) n.reverse();
                        else if (t === `prev` || t === `next`) { t === `prev` && n.reverse(); let r = n.indexOf(e.currentTarget);
                            n = u.loop ? Ze(n, r + 1) : n.slice(r + 1) }
                        setTimeout(() => Xe(n)) } }), children: typeof o == `function` ? o({ isCurrentTabStop: d, hasTabStop: h != null }) : o }) }) });
Ke.displayName = Ge;
var qe = { ArrowLeft: `prev`, ArrowUp: `prev`, ArrowRight: `next`, ArrowDown: `next`, PageUp: `first`, Home: `first`, PageDown: `last`, End: `last` };

function Je(e, t) { return t === `rtl` ? e === `ArrowLeft` ? `ArrowRight` : e === `ArrowRight` ? `ArrowLeft` : e : e }

function Ye(e, t, n) { let r = Je(e.key, n); if (!(t === `vertical` && [`ArrowLeft`, `ArrowRight`].includes(r)) && !(t === `horizontal` && [`ArrowUp`, `ArrowDown`].includes(r))) return qe[r] }

function Xe(e, t = !1) { let n = document.activeElement; for (let r of e)
        if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return }

function Ze(e, t) { return e.map((n, r) => e[(t + r) % e.length]) }
var Qe = Ue,
    $e = Ke,
    et = [`Enter`, ` `],
    tt = [`ArrowDown`, `PageUp`, `Home`],
    nt = [`ArrowUp`, `PageDown`, `End`],
    rt = [...tt, ...nt],
    it = { ltr: [...et, `ArrowRight`], rtl: [...et, `ArrowLeft`] },
    at = { ltr: [`ArrowLeft`], rtl: [`ArrowRight`] },
    H = `Menu`,
    [U, ot, st] = fe(H),
    [W, ct] = C(H, [st, ae, Be]),
    G = ae(),
    lt = Be(),
    [ut, K] = W(H),
    [dt, q] = W(H),
    ft = e => { let { __scopeMenu: t, open: n = !1, children: r, dir: i, onOpenChange: a, modal: o = !0 } = e, s = G(t), [c, l] = z.useState(null), u = z.useRef(!1), d = E(a), f = ue(i); return z.useEffect(() => { let e = () => { u.current = !0, document.addEventListener(`pointerdown`, t, { capture: !0, once: !0 }), document.addEventListener(`pointermove`, t, { capture: !0, once: !0 }) },
                t = () => u.current = !1; return document.addEventListener(`keydown`, e, { capture: !0 }), () => { document.removeEventListener(`keydown`, e, { capture: !0 }), document.removeEventListener(`pointerdown`, t, { capture: !0 }), document.removeEventListener(`pointermove`, t, { capture: !0 }) } }, []), z.useEffect(() => { if (!n) return; let e = () => d(!1); return window.addEventListener(`blur`, e), () => window.removeEventListener(`blur`, e) }, [n, d]), (0, B.jsx)(k, {...s, children: (0, B.jsx)(ut, { scope: t, open: n, onOpenChange: d, content: c, onContentChange: l, children: (0, B.jsx)(dt, { scope: t, onClose: z.useCallback(() => d(!1), [d]), isUsingKeyboardRef: u, dir: f, modal: o, children: r }) }) }) };
ft.displayName = H;
var pt = `MenuAnchor`,
    mt = z.forwardRef((e, t) => { let { __scopeMenu: n, ...r } = e, i = G(n); return (0, B.jsx)(A, {...i, ...r, ref: t }) });
mt.displayName = pt;
var ht = `MenuPortal`,
    [gt, _t] = W(ht, { forceMount: void 0 }),
    vt = e => { let { __scopeMenu: t, forceMount: n, children: r, container: i } = e, a = K(ht, t); return (0, B.jsx)(gt, { scope: t, forceMount: n, children: (0, B.jsx)(w, { present: n || a.open, children: (0, B.jsx)(T, { asChild: !0, container: i, children: r }) }) }) };
vt.displayName = ht;
var J = `MenuContent`,
    [yt, bt] = W(J),
    xt = z.forwardRef((e, t) => { let n = _t(J, e.__scopeMenu),
            { forceMount: r = n.forceMount, ...i } = e,
            a = K(J, e.__scopeMenu),
            o = q(J, e.__scopeMenu); return (0, B.jsx)(U.Provider, { scope: e.__scopeMenu, children: (0, B.jsx)(w, { present: r || a.open, children: (0, B.jsx)(U.Slot, { scope: e.__scopeMenu, children: o.modal ? (0, B.jsx)(St, {...i, ref: t }) : (0, B.jsx)(Ct, {...i, ref: t }) }) }) }) }),
    St = z.forwardRef((e, t) => { let n = K(J, e.__scopeMenu),
            r = z.useRef(null),
            i = O(t, r); return z.useEffect(() => { let e = r.current; if (e) return te(e) }, []), (0, B.jsx)(Tt, {...e, ref: i, trapFocus: n.open, disableOutsidePointerEvents: n.open, disableOutsideScroll: !0, onFocusOutside: N(e.onFocusOutside, e => e.preventDefault(), { checkForDefaultPrevented: !1 }), onDismiss: () => n.onOpenChange(!1) }) }),
    Ct = z.forwardRef((e, t) => { let n = K(J, e.__scopeMenu); return (0, B.jsx)(Tt, {...e, ref: t, trapFocus: !1, disableOutsidePointerEvents: !1, disableOutsideScroll: !1, onDismiss: () => n.onOpenChange(!1) }) }),
    wt = y(`MenuContent.ScrollLock`),
    Tt = z.forwardRef((e, t) => { let { __scopeMenu: n, loop: r = !1, trapFocus: i, onOpenAutoFocus: a, onCloseAutoFocus: o, disableOutsidePointerEvents: s, onEntryFocus: c, onEscapeKeyDown: l, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: f, onDismiss: p, disableOutsideScroll: m, ...h } = e, g = K(J, n), _ = q(J, n), v = G(n), y = lt(n), b = ot(n), [x, S] = z.useState(null), C = z.useRef(null), te = O(t, C, g.onContentChange), w = z.useRef(0), T = z.useRef(``), E = z.useRef(0), D = z.useRef(null), k = z.useRef(`right`), A = z.useRef(0), ae = m ? ne : z.Fragment, j = m ? { as: wt, allowPinchZoom: !0 } : void 0, M = e => { let t = T.current + e,
                n = b().filter(e => !e.disabled),
                r = document.activeElement,
                i = n.find(e => e.ref.current === r) ? .textValue,
                a = sn(n.map(e => e.textValue), t, i),
                o = n.find(e => e.textValue === a) ? .ref.current;
            (function e(t) { T.current = t, window.clearTimeout(w.current), t !== `` && (w.current = window.setTimeout(() => e(``), 1e3)) })(t), o && setTimeout(() => o.focus()) };
        z.useEffect(() => () => window.clearTimeout(w.current), []), oe(); let P = z.useCallback(e => k.current === D.current ? .side && ln(e, D.current ? .area), []); return (0, B.jsx)(yt, { scope: n, searchRef: T, onItemEnter: z.useCallback(e => { P(e) && e.preventDefault() }, [P]), onItemLeave: z.useCallback(e => { P(e) || (C.current ? .focus(), S(null)) }, [P]), onTriggerLeave: z.useCallback(e => { P(e) && e.preventDefault() }, [P]), pointerGraceTimerRef: E, onPointerGraceIntentChange: z.useCallback(e => { D.current = e }, []), children: (0, B.jsx)(ae, {...j, children: (0, B.jsx)(ie, { asChild: !0, trapped: i, onMountAutoFocus: N(a, e => { e.preventDefault(), C.current ? .focus({ preventScroll: !0 }) }), onUnmountAutoFocus: o, children: (0, B.jsx)(re, { asChild: !0, disableOutsidePointerEvents: s, onEscapeKeyDown: l, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: f, onDismiss: p, children: (0, B.jsx)(Qe, { asChild: !0, ...y, dir: _.dir, orientation: `vertical`, loop: r, currentTabStopId: x, onCurrentTabStopIdChange: S, onEntryFocus: N(c, e => { _.isUsingKeyboardRef.current || e.preventDefault() }), preventScrollOnEntryFocus: !0, children: (0, B.jsx)(ee, { role: `menu`, "aria-orientation": `vertical`, "data-state": tn(g.open), "data-radix-menu-content": ``, dir: _.dir, ...v, ...h, ref: te, style: { outline: `none`, ...h.style }, onKeyDown: N(h.onKeyDown, e => { let t = e.target.closest(`[data-radix-menu-content]`) === e.currentTarget,
                                        n = e.ctrlKey || e.altKey || e.metaKey,
                                        r = e.key.length === 1;
                                    t && (e.key === `Tab` && e.preventDefault(), !n && r && M(e.key)); let i = C.current; if (e.target !== i || !rt.includes(e.key)) return;
                                    e.preventDefault(); let a = b().filter(e => !e.disabled).map(e => e.ref.current);
                                    nt.includes(e.key) && a.reverse(), an(a) }), onBlur: N(e.onBlur, e => { e.currentTarget.contains(e.target) || (window.clearTimeout(w.current), T.current = ``) }), onPointerMove: N(e.onPointerMove, Q(e => { let t = e.target,
                                        n = A.current !== e.clientX;
                                    e.currentTarget.contains(t) && n && (k.current = e.clientX > A.current ? `right` : `left`, A.current = e.clientX) })) }) }) }) }) }) }) });
xt.displayName = J;
var Et = `MenuGroup`,
    Dt = z.forwardRef((e, t) => { let { __scopeMenu: n, ...r } = e; return (0, B.jsx)(b.div, { role: `group`, ...r, ref: t }) });
Dt.displayName = Et;
var Ot = `MenuLabel`,
    kt = z.forwardRef((e, t) => { let { __scopeMenu: n, ...r } = e; return (0, B.jsx)(b.div, {...r, ref: t }) });
kt.displayName = Ot;
var Y = `MenuItem`,
    At = `menu.itemSelect`,
    X = z.forwardRef((e, t) => { let { disabled: n = !1, onSelect: r, ...i } = e, a = z.useRef(null), o = q(Y, e.__scopeMenu), s = bt(Y, e.__scopeMenu), c = O(t, a), l = z.useRef(!1), u = () => { let e = a.current; if (!n && e) { let t = new CustomEvent(At, { bubbles: !0, cancelable: !0 });
                e.addEventListener(At, e => r ? .(e), { once: !0 }), _(e, t), t.defaultPrevented ? l.current = !1 : o.onClose() } }; return (0, B.jsx)(jt, {...i, ref: c, disabled: n, onClick: N(e.onClick, u), onPointerDown: t => { e.onPointerDown ? .(t), l.current = !0 }, onPointerUp: N(e.onPointerUp, e => { l.current || e.currentTarget ? .click() }), onKeyDown: N(e.onKeyDown, e => { let t = s.searchRef.current !== ``;
                n || t && e.key === ` ` || et.includes(e.key) && (e.currentTarget.click(), e.preventDefault()) }) }) });
X.displayName = Y;
var jt = z.forwardRef((e, t) => { let { __scopeMenu: n, disabled: r = !1, textValue: i, ...a } = e, o = bt(Y, n), s = lt(n), c = z.useRef(null), l = O(t, c), [u, d] = z.useState(!1), [f, p] = z.useState(``); return z.useEffect(() => { let e = c.current;
            e && p((e.textContent ? ? ``).trim()) }, [a.children]), (0, B.jsx)(U.ItemSlot, { scope: n, disabled: r, textValue: i ? ? f, children: (0, B.jsx)($e, { asChild: !0, ...s, focusable: !r, children: (0, B.jsx)(b.div, { role: `menuitem`, "data-highlighted": u ? `` : void 0, "aria-disabled": r || void 0, "data-disabled": r ? `` : void 0, ...a, ref: l, onPointerMove: N(e.onPointerMove, Q(e => { r ? o.onItemLeave(e) : (o.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 })) })), onPointerLeave: N(e.onPointerLeave, Q(e => o.onItemLeave(e))), onFocus: N(e.onFocus, () => d(!0)), onBlur: N(e.onBlur, () => d(!1)) }) }) }) }),
    Mt = `MenuCheckboxItem`,
    Nt = z.forwardRef((e, t) => { let { checked: n = !1, onCheckedChange: r, ...i } = e; return (0, B.jsx)(Vt, { scope: e.__scopeMenu, checked: n, children: (0, B.jsx)(X, { role: `menuitemcheckbox`, "aria-checked": nn(n) ? `mixed` : n, ...i, ref: t, "data-state": rn(n), onSelect: N(i.onSelect, () => r ? .(nn(n) ? !0 : !n), { checkForDefaultPrevented: !1 }) }) }) });
Nt.displayName = Mt;
var Pt = `MenuRadioGroup`,
    [Ft, It] = W(Pt, { value: void 0, onValueChange: () => {} }),
    Lt = z.forwardRef((e, t) => { let { value: n, onValueChange: r, ...i } = e, a = E(r); return (0, B.jsx)(Ft, { scope: e.__scopeMenu, value: n, onValueChange: a, children: (0, B.jsx)(Dt, {...i, ref: t }) }) });
Lt.displayName = Pt;
var Rt = `MenuRadioItem`,
    zt = z.forwardRef((e, t) => { let { value: n, ...r } = e, i = It(Rt, e.__scopeMenu), a = n === i.value; return (0, B.jsx)(Vt, { scope: e.__scopeMenu, checked: a, children: (0, B.jsx)(X, { role: `menuitemradio`, "aria-checked": a, ...r, ref: t, "data-state": rn(a), onSelect: N(r.onSelect, () => i.onValueChange ? .(n), { checkForDefaultPrevented: !1 }) }) }) });
zt.displayName = Rt;
var Bt = `MenuItemIndicator`,
    [Vt, Ht] = W(Bt, { checked: !1 }),
    Ut = z.forwardRef((e, t) => { let { __scopeMenu: n, forceMount: r, ...i } = e, a = Ht(Bt, n); return (0, B.jsx)(w, { present: r || nn(a.checked) || a.checked === !0, children: (0, B.jsx)(b.span, {...i, ref: t, "data-state": rn(a.checked) }) }) });
Ut.displayName = Bt;
var Wt = `MenuSeparator`,
    Gt = z.forwardRef((e, t) => { let { __scopeMenu: n, ...r } = e; return (0, B.jsx)(b.div, { role: `separator`, "aria-orientation": `horizontal`, ...r, ref: t }) });
Gt.displayName = Wt;
var Kt = `MenuArrow`,
    qt = z.forwardRef((e, t) => { let { __scopeMenu: n, ...r } = e, i = G(n); return (0, B.jsx)(D, {...i, ...r, ref: t }) });
qt.displayName = Kt;
var Jt = `MenuSub`,
    [Yt, Xt] = W(Jt),
    Zt = e => { let { __scopeMenu: t, children: n, open: r = !1, onOpenChange: i } = e, a = K(Jt, t), o = G(t), [s, c] = z.useState(null), [l, u] = z.useState(null), d = E(i); return z.useEffect(() => (a.open === !1 && d(!1), () => d(!1)), [a.open, d]), (0, B.jsx)(k, {...o, children: (0, B.jsx)(ut, { scope: t, open: r, onOpenChange: d, content: l, onContentChange: u, children: (0, B.jsx)(Yt, { scope: t, contentId: j(), triggerId: j(), trigger: s, onTriggerChange: c, children: n }) }) }) };
Zt.displayName = Jt;
var Z = `MenuSubTrigger`,
    Qt = z.forwardRef((e, t) => { let n = K(Z, e.__scopeMenu),
            r = q(Z, e.__scopeMenu),
            i = Xt(Z, e.__scopeMenu),
            a = bt(Z, e.__scopeMenu),
            o = z.useRef(null),
            { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = a,
            l = { __scopeMenu: e.__scopeMenu },
            u = z.useCallback(() => { o.current && window.clearTimeout(o.current), o.current = null }, []); return z.useEffect(() => u, [u]), z.useEffect(() => { let e = s.current; return () => { window.clearTimeout(e), c(null) } }, [s, c]), (0, B.jsx)(mt, { asChild: !0, ...l, children: (0, B.jsx)(jt, { id: i.triggerId, "aria-haspopup": `menu`, "aria-expanded": n.open, "aria-controls": n.open ? i.contentId : void 0, "data-state": tn(n.open), ...e, ref: g(t, i.onTriggerChange), onClick: t => { e.onClick ? .(t), !(e.disabled || t.defaultPrevented) && (t.currentTarget.focus(), n.open || n.onOpenChange(!0)) }, onPointerMove: N(e.onPointerMove, Q(t => { a.onItemEnter(t), !t.defaultPrevented && !e.disabled && !n.open && !o.current && (a.onPointerGraceIntentChange(null), o.current = window.setTimeout(() => { n.onOpenChange(!0), u() }, 100)) })), onPointerLeave: N(e.onPointerLeave, Q(e => { u(); let t = n.content ? .getBoundingClientRect(); if (t) { let r = n.content ? .dataset.side,
                            i = r === `right`,
                            o = i ? -5 : 5,
                            c = t[i ? `left` : `right`],
                            l = t[i ? `right` : `left`];
                        a.onPointerGraceIntentChange({ area: [{ x: e.clientX + o, y: e.clientY }, { x: c, y: t.top }, { x: l, y: t.top }, { x: l, y: t.bottom }, { x: c, y: t.bottom }], side: r }), window.clearTimeout(s.current), s.current = window.setTimeout(() => a.onPointerGraceIntentChange(null), 300) } else { if (a.onTriggerLeave(e), e.defaultPrevented) return;
                        a.onPointerGraceIntentChange(null) } })), onKeyDown: N(e.onKeyDown, t => { let i = a.searchRef.current !== ``;
                    e.disabled || i && t.key === ` ` || it[r.dir].includes(t.key) && (n.onOpenChange(!0), n.content ? .focus(), t.preventDefault()) }) }) }) });
Qt.displayName = Z;
var $t = `MenuSubContent`,
    en = z.forwardRef((e, t) => { let n = _t(J, e.__scopeMenu),
            { forceMount: r = n.forceMount, align: i = `start`, ...a } = e,
            o = K(J, e.__scopeMenu),
            s = q(J, e.__scopeMenu),
            c = Xt($t, e.__scopeMenu),
            l = z.useRef(null),
            u = O(t, l); return (0, B.jsx)(U.Provider, { scope: e.__scopeMenu, children: (0, B.jsx)(w, { present: r || o.open, children: (0, B.jsx)(U.Slot, { scope: e.__scopeMenu, children: (0, B.jsx)(Tt, { id: c.contentId, "aria-labelledby": c.triggerId, ...a, ref: u, align: i, side: s.dir === `rtl` ? `left` : `right`, disableOutsidePointerEvents: !1, disableOutsideScroll: !1, trapFocus: !1, onOpenAutoFocus: e => { s.isUsingKeyboardRef.current && l.current ? .focus(), e.preventDefault() }, onCloseAutoFocus: e => e.preventDefault(), onFocusOutside: N(e.onFocusOutside, e => { e.target !== c.trigger && o.onOpenChange(!1) }), onEscapeKeyDown: N(e.onEscapeKeyDown, e => { s.onClose(), e.preventDefault() }), onKeyDown: N(e.onKeyDown, e => { let t = e.currentTarget.contains(e.target),
                                n = at[s.dir].includes(e.key);
                            t && n && (o.onOpenChange(!1), c.trigger ? .focus(), e.preventDefault()) }) }) }) }) }) });
en.displayName = $t;

function tn(e) { return e ? `open` : `closed` }

function nn(e) { return e === `indeterminate` }

function rn(e) { return nn(e) ? `indeterminate` : e ? `checked` : `unchecked` }

function an(e) { let t = document.activeElement; for (let n of e)
        if (n === t || (n.focus(), document.activeElement !== t)) return }

function on(e, t) { return e.map((n, r) => e[(t + r) % e.length]) }

function sn(e, t, n) { let r = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
        i = n ? e.indexOf(n) : -1,
        a = on(e, Math.max(i, 0));
    r.length === 1 && (a = a.filter(e => e !== n)); let o = a.find(e => e.toLowerCase().startsWith(r.toLowerCase())); return o === n ? void 0 : o }

function cn(e, t) { let { x: n, y: r } = e, i = !1; for (let e = 0, a = t.length - 1; e < t.length; a = e++) { let o = t[e],
            s = t[a],
            c = o.x,
            l = o.y,
            u = s.x,
            d = s.y;
        l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i) } return i }

function ln(e, t) { return t ? cn({ x: e.clientX, y: e.clientY }, t) : !1 }

function Q(e) { return t => t.pointerType === `mouse` ? e(t) : void 0 }
var un = ft,
    dn = mt,
    fn = vt,
    pn = xt,
    mn = Dt,
    hn = kt,
    gn = X,
    _n = Nt,
    vn = Lt,
    yn = zt,
    bn = Ut,
    xn = Gt,
    Sn = qt,
    Cn = Qt,
    wn = en,
    Tn = `DropdownMenu`,
    [En, Dn] = C(Tn, [ct]),
    $ = ct(),
    [On, kn] = En(Tn),
    An = e => { let { __scopeDropdownMenu: t, children: n, dir: r, open: i, defaultOpen: a, onOpenChange: o, modal: s = !0 } = e, c = $(t), l = z.useRef(null), [u, d] = S({ prop: i, defaultProp: a ? ? !1, onChange: o, caller: Tn }); return (0, B.jsx)(On, { scope: t, triggerId: j(), triggerRef: l, contentId: j(), open: u, onOpenChange: d, onOpenToggle: z.useCallback(() => d(e => !e), [d]), modal: s, children: (0, B.jsx)(un, {...c, open: u, onOpenChange: d, dir: r, modal: s, children: n }) }) };
An.displayName = Tn;
var jn = `DropdownMenuTrigger`,
    Mn = z.forwardRef((e, t) => { let { __scopeDropdownMenu: n, disabled: r = !1, ...i } = e, a = kn(jn, n), o = $(n); return (0, B.jsx)(dn, { asChild: !0, ...o, children: (0, B.jsx)(b.button, { type: `button`, id: a.triggerId, "aria-haspopup": `menu`, "aria-expanded": a.open, "aria-controls": a.open ? a.contentId : void 0, "data-state": a.open ? `open` : `closed`, "data-disabled": r ? `` : void 0, disabled: r, ...i, ref: g(t, a.triggerRef), onPointerDown: N(e.onPointerDown, e => {!r && e.button === 0 && e.ctrlKey === !1 && (a.onOpenToggle(), a.open || e.preventDefault()) }), onKeyDown: N(e.onKeyDown, e => { r || ([`Enter`, ` `].includes(e.key) && a.onOpenToggle(), e.key === `ArrowDown` && a.onOpenChange(!0), [`Enter`, ` `, `ArrowDown`].includes(e.key) && e.preventDefault()) }) }) }) });
Mn.displayName = jn;
var Nn = `DropdownMenuPortal`,
    Pn = e => { let { __scopeDropdownMenu: t, ...n } = e, r = $(t); return (0, B.jsx)(fn, {...r, ...n }) };
Pn.displayName = Nn;
var Fn = `DropdownMenuContent`,
    In = z.forwardRef((e, t) => { let { __scopeDropdownMenu: n, ...r } = e, i = kn(Fn, n), a = $(n), o = z.useRef(!1); return (0, B.jsx)(pn, { id: i.contentId, "aria-labelledby": i.triggerId, ...a, ...r, ref: t, onCloseAutoFocus: N(e.onCloseAutoFocus, e => { o.current || i.triggerRef.current ? .focus(), o.current = !1, e.preventDefault() }), onInteractOutside: N(e.onInteractOutside, e => { let t = e.detail.originalEvent,
                    n = t.button === 0 && t.ctrlKey === !0,
                    r = t.button === 2 || n;
                (!i.modal || r) && (o.current = !0) }), style: {...e.style, "--radix-dropdown-menu-content-transform-origin": `var(--radix-popper-transform-origin)`, "--radix-dropdown-menu-content-available-width": `var(--radix-popper-available-width)`, "--radix-dropdown-menu-content-available-height": `var(--radix-popper-available-height)`, "--radix-dropdown-menu-trigger-width": `var(--radix-popper-anchor-width)`, "--radix-dropdown-menu-trigger-height": `var(--radix-popper-anchor-height)` } }) });
In.displayName = Fn;
var Ln = `DropdownMenuGroup`,
    Rn = z.forwardRef((e, t) => { let { __scopeDropdownMenu: n, ...r } = e, i = $(n); return (0, B.jsx)(mn, {...i, ...r, ref: t }) });
Rn.displayName = Ln;
var zn = `DropdownMenuLabel`,
    Bn = z.forwardRef((e, t) => { let { __scopeDropdownMenu: n, ...r } = e, i = $(n); return (0, B.jsx)(hn, {...i, ...r, ref: t }) });
Bn.displayName = zn;
var Vn = `DropdownMenuItem`,
    Hn = z.forwardRef((e, t) => { let { __scopeDropdownMenu: n, ...r } = e, i = $(n); return (0, B.jsx)(gn, {...i, ...r, ref: t }) });
Hn.displayName = Vn;
var Un = `DropdownMenuCheckboxItem`,
    Wn = z.forwardRef((e, t) => { let { __scopeDropdownMenu: n, ...r } = e, i = $(n); return (0, B.jsx)(_n, {...i, ...r, ref: t }) });
Wn.displayName = Un;
var Gn = `DropdownMenuRadioGroup`,
    Kn = z.forwardRef((e, t) => { let { __scopeDropdownMenu: n, ...r } = e, i = $(n); return (0, B.jsx)(vn, {...i, ...r, ref: t }) });
Kn.displayName = Gn;
var qn = `DropdownMenuRadioItem`,
    Jn = z.forwardRef((e, t) => { let { __scopeDropdownMenu: n, ...r } = e, i = $(n); return (0, B.jsx)(yn, {...i, ...r, ref: t }) });
Jn.displayName = qn;
var Yn = `DropdownMenuItemIndicator`,
    Xn = z.forwardRef((e, t) => { let { __scopeDropdownMenu: n, ...r } = e, i = $(n); return (0, B.jsx)(bn, {...i, ...r, ref: t }) });
Xn.displayName = Yn;
var Zn = `DropdownMenuSeparator`,
    Qn = z.forwardRef((e, t) => { let { __scopeDropdownMenu: n, ...r } = e, i = $(n); return (0, B.jsx)(xn, {...i, ...r, ref: t }) });
Qn.displayName = Zn;
var $n = `DropdownMenuArrow`,
    er = z.forwardRef((e, t) => { let { __scopeDropdownMenu: n, ...r } = e, i = $(n); return (0, B.jsx)(Sn, {...i, ...r, ref: t }) });
er.displayName = $n;
var tr = `DropdownMenuSubTrigger`,
    nr = z.forwardRef((e, t) => { let { __scopeDropdownMenu: n, ...r } = e, i = $(n); return (0, B.jsx)(Cn, {...i, ...r, ref: t }) });
nr.displayName = tr;
var rr = `DropdownMenuSubContent`,
    ir = z.forwardRef((e, t) => { let { __scopeDropdownMenu: n, ...r } = e, i = $(n); return (0, B.jsx)(wn, {...i, ...r, ref: t, style: {...e.style, "--radix-dropdown-menu-content-transform-origin": `var(--radix-popper-transform-origin)`, "--radix-dropdown-menu-content-available-width": `var(--radix-popper-available-width)`, "--radix-dropdown-menu-content-available-height": `var(--radix-popper-available-height)`, "--radix-dropdown-menu-trigger-width": `var(--radix-popper-anchor-width)`, "--radix-dropdown-menu-trigger-height": `var(--radix-popper-anchor-height)` } }) });
ir.displayName = rr;
var ar = An,
    or = Mn,
    sr = Pn,
    cr = In,
    lr = Bn,
    ur = Hn,
    dr = Wn,
    fr = Jn,
    pr = Xn,
    mr = Qn,
    hr = nr,
    gr = ir,
    _r = ar,
    vr = or,
    yr = z.forwardRef(({ className: e, inset: t, children: n, ...r }, i) => (0, B.jsxs)(hr, { ref: i, className: F(`flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`, t && `pl-8`, e), ...r, children: [n, (0, B.jsx)(xe, { className: `ml-auto` })] }));
yr.displayName = hr.displayName;
var br = z.forwardRef(({ className: e, ...t }, n) => (0, B.jsx)(gr, { ref: n, className: F(`z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)`, e), ...t }));
br.displayName = gr.displayName;
var xr = z.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => (0, B.jsx)(sr, { children: (0, B.jsx)(cr, { ref: r, sideOffset: t, className: F(`z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md`, `data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)`, e), ...n }) }));
xr.displayName = cr.displayName;
var Sr = z.forwardRef(({ className: e, inset: t, ...n }, r) => (0, B.jsx)(ur, { ref: r, className: F(`relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0`, t && `pl-8`, e), ...n }));
Sr.displayName = ur.displayName;
var Cr = z.forwardRef(({ className: e, children: t, checked: n, ...r }, i) => (0, B.jsxs)(dr, { ref: i, className: F(`relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50`, e), checked: n, ...r, children: [(0, B.jsx)(`span`, { className: `absolute left-2 flex h-3.5 w-3.5 items-center justify-center`, children: (0, B.jsx)(pr, { children: (0, B.jsx)(se, { className: `h-4 w-4` }) }) }), t] }));
Cr.displayName = dr.displayName;
var wr = z.forwardRef(({ className: e, children: t, ...n }, r) => (0, B.jsxs)(fr, { ref: r, className: F(`relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50`, e), ...n, children: [(0, B.jsx)(`span`, { className: `absolute left-2 flex h-3.5 w-3.5 items-center justify-center`, children: (0, B.jsx)(pr, { children: (0, B.jsx)(Se, { className: `h-2 w-2 fill-current` }) }) }), t] }));
wr.displayName = fr.displayName;
var Tr = z.forwardRef(({ className: e, inset: t, ...n }, r) => (0, B.jsx)(lr, { ref: r, className: F(`px-2 py-1.5 text-sm font-semibold`, t && `pl-8`, e), ...n }));
Tr.displayName = lr.displayName;
var Er = z.forwardRef(({ className: e, ...t }, n) => (0, B.jsx)(mr, { ref: n, className: F(`-mx-1 my-1 h-px bg-muted`, e), ...t }));
Er.displayName = mr.displayName;
var Dr = ({ className: e, ...t }) => (0, B.jsx)(`span`, { className: F(`ml-auto text-xs tracking-widest opacity-60`, e), ...t });
Dr.displayName = `DropdownMenuShortcut`;

function Or() { let e = r(),
        [t, n] = (0, z.useState)(null),
        [i, a] = (0, z.useState)([]),
        [o, s] = (0, z.useState)(!1),
        [c, u] = (0, z.useState)(0);
    (0, z.useEffect)(() => { let t = me(); if (!t) { e({ to: `/auth` }); return } if (t.role !== `Super Administrator`) { h.error(`Access Denied`, { description: `You do not have permission to view this page.` }), e({ to: `/dashboard` }); return }
        n(t) }, [e]); let f = () => u(e => e + 1);
    (0, z.useEffect)(() => { let e = !1; return (async() => { if (t) try { let n = { Authorization: `Bearer ${t.token}`, Accept: `application/json` },
                    r = await fetch(`${import.meta.env.VITE_API_URL}/api/users`, { headers: n }),
                    i = await r.json();
                r.ok && !e ? a(i) : h.error(`Failed to fetch users.`) } catch { h.error(`Could not load user data.`) } })(), () => { e = !0 } }, [t, c]); let m = async e => { if (t ? .token) try { let n = await fetch(`${import.meta.env.VITE_API_URL}/api/users`, { method: `POST`, headers: { Authorization: `Bearer ${t.token}`, "Content-Type": `application/json`, Accept: `application/json` }, body: JSON.stringify(e) }),
                    r = await n.json(); if (n.ok) h.success(`User has been created successfully.`), f();
                else { let e = r.errors ? Object.values(r.errors).flat().join(` `) : r.message;
                    h.error(`Failed to create user`, { description: e }) } } catch { h.error(`An error occurred while creating the user.`) } },
        g = async e => { if (t ? .token && confirm(`Are you sure you want to delete this user? This action cannot be undone.`)) try {
                (await fetch(`${import.meta.env.VITE_API_URL}/api/users/${e}`, { method: `DELETE`, headers: { Authorization: `Bearer ${t.token}`, Accept: `application/json` } })).ok ? (h.success(`User has been deleted.`), f()) : h.error(`Failed to delete user.`) } catch { h.error(`An error occurred while deleting the user.`) } }; return (0, B.jsxs)(p, { title: `User Management`, subtitle: `Manage accounts, roles, and department assignments`, actions: (0, B.jsxs)(x, { size: `sm`, onClick: () => s(!0), children: [(0, B.jsx)(Te, { className: `size-4 mr-1` }), ` Add user`] }), children: [(0, B.jsx)(he, { className: `p-0 overflow-hidden`, children: (0, B.jsxs)(ye, { children: [(0, B.jsx)(ge, { children: (0, B.jsxs)(ve, { children: [(0, B.jsx)(I, { children: `User` }), (0, B.jsx)(I, { children: `Email` }), (0, B.jsx)(I, { children: `Role` }), (0, B.jsx)(I, { children: `Department` }), (0, B.jsx)(I, {})] }) }), (0, B.jsx)(_e, { children: i.map(e => (0, B.jsxs)(ve, { children: [(0, B.jsx)(L, { children: (0, B.jsxs)(`div`, { className: `flex items-center gap-3`, children: [(0, B.jsx)(l, { className: `size-8`, children: (0, B.jsx)(d, { children: e.name.split(` `).map(e => e[0]).slice(0, 2).join(``) }) }), (0, B.jsx)(`span`, { className: `font-medium`, children: e.name })] }) }), (0, B.jsx)(L, { className: `text-muted-foreground`, children: e.email }), (0, B.jsx)(L, { children: (0, B.jsx)(be, { variant: `secondary`, children: e.role }) }), (0, B.jsx)(L, { children: e.department }), (0, B.jsx)(L, { className: `text-right`, children: t ? .email !== e.email && (0, B.jsxs)(_r, { children: [(0, B.jsx)(vr, { asChild: !0, children: (0, B.jsx)(x, { size: `icon`, variant: `ghost`, children: (0, B.jsx)(Ce, { className: `size-4` }) }) }), (0, B.jsx)(xr, { align: `end`, children: (0, B.jsxs)(Sr, { className: `text-red-500 focus:bg-red-50 focus:text-red-900`, onSelect: () => g(e.email), children: [(0, B.jsx)(we, { className: `mr-2 size-4` }), ` Delete`] }) })] }) })] }, e.email)) })] }) }), o && (0, B.jsx)(kr, { onConfirm: e => { m(e), s(!1) }, onOpenChange: e => !e && s(!1) })] }) }

function kr({ onConfirm: e, onOpenChange: t }) { let [n, r] = (0, z.useState)(``), [i, a] = (0, z.useState)(``), [o, s] = (0, z.useState)(``), [c, l] = (0, z.useState)(``), [u, d] = (0, z.useState)(`Department Administrator`), [f, p] = (0, z.useState)(`Registrar`); return (0, B.jsx)(Ee, { open: !0, onOpenChange: t, children: (0, B.jsxs)(ke, { children: [(0, B.jsxs)(Ae, { children: [(0, B.jsx)(Me, { children: `Add New User` }), (0, B.jsx)(Ne, { children: `Create a new user account and assign them a role.` })] }), (0, B.jsxs)(`div`, { className: `space-y-3 py-4`, children: [(0, B.jsxs)(`div`, { className: `space-y-2`, children: [(0, B.jsx)(R, { htmlFor: `name`, children: `Full Name` }), (0, B.jsx)(M, { id: `name`, value: n, onChange: e => r(e.target.value), required: !0 })] }), (0, B.jsxs)(`div`, { className: `space-y-2`, children: [(0, B.jsx)(R, { htmlFor: `email`, children: `Email` }), (0, B.jsx)(M, { id: `email`, type: `email`, value: i, onChange: e => a(e.target.value), required: !0 })] }), (0, B.jsxs)(`div`, { className: `space-y-2`, children: [(0, B.jsx)(R, { htmlFor: `password`, children: `Password` }), (0, B.jsx)(M, { id: `password`, type: `password`, value: o, onChange: e => s(e.target.value), required: !0 })] }), (0, B.jsxs)(`div`, { className: `space-y-2`, children: [(0, B.jsx)(R, { htmlFor: `password_confirmation`, children: `Confirm Password` }), (0, B.jsx)(M, { id: `password_confirmation`, type: `password`, value: c, onChange: e => l(e.target.value), required: !0 })] }), (0, B.jsxs)(`div`, { className: `space-y-2`, children: [(0, B.jsx)(R, { children: `Role` }), (0, B.jsxs)(pe, { value: u, onValueChange: e => d(e), children: [(0, B.jsx)(ce, { children: (0, B.jsx)(P, {}) }), (0, B.jsx)(le, { children: [`Super Administrator`, `Department Administrator`].map(e => (0, B.jsx)(de, { value: e, children: e }, e)) })] })] }), u === `Department Administrator` && (0, B.jsxs)(`div`, { className: `space-y-2`, children: [(0, B.jsx)(R, { children: `Department` }), (0, B.jsxs)(pe, { value: f, onValueChange: p, children: [(0, B.jsx)(ce, { children: (0, B.jsx)(P, {}) }), (0, B.jsx)(le, { children: [`Registrar`, `Finance`, `Human Resources`, `Academic Affairs`, `Research Office`, `Student Services`].map(e => (0, B.jsx)(de, { value: e, children: e }, e)) })] })] })] }), (0, B.jsxs)(je, { children: [(0, B.jsx)(x, { variant: `ghost`, onClick: () => t(!1), children: `Cancel` }), (0, B.jsx)(x, { onClick: () => { if (!n || !i || !o || u === `Department Administrator` && !f) { h.error(`Please fill out all required fields.`); return } if (o !== c) { h.error(`Passwords do not match.`); return } let t = { name: n, email: i, password: o, password_confirmation: c, role: u };
                        u === `Department Administrator` && (t.department = f), e(t) }, children: `Create User` })] })] }) }) }
export { Or as component };