import { t as AppShell } from "./app-shell-CTieB9Ph.js";
import { t as Card } from "./card-BscL139z.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-DptO_QP4.js";
import { t as auditLogs } from "./mock-data-pHqr_sPB.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/audit.tsx?tsr-split=component
var SplitComponent = () => /* @__PURE__ */ jsx(AppShell, {
	title: "Audit Logs",
	subtitle: "Every action performed in the system, for security and accountability",
	children: /* @__PURE__ */ jsx(Card, {
		className: "p-0 overflow-hidden",
		children: /* @__PURE__ */ jsxs(Table, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
			/* @__PURE__ */ jsx(TableHead, { children: "Timestamp" }),
			/* @__PURE__ */ jsx(TableHead, { children: "Actor" }),
			/* @__PURE__ */ jsx(TableHead, { children: "Action" }),
			/* @__PURE__ */ jsx(TableHead, { children: "IP Address" })
		] }) }), /* @__PURE__ */ jsx(TableBody, { children: auditLogs.map((l, i) => /* @__PURE__ */ jsxs(TableRow, { children: [
			/* @__PURE__ */ jsx(TableCell, {
				className: "text-xs font-mono",
				children: new Date(l.at).toLocaleString()
			}),
			/* @__PURE__ */ jsx(TableCell, {
				className: "font-medium",
				children: l.actor
			}),
			/* @__PURE__ */ jsx(TableCell, { children: l.action }),
			/* @__PURE__ */ jsx(TableCell, {
				className: "text-xs font-mono text-muted-foreground",
				children: l.ip
			})
		] }, i)) })] })
	})
});
//#endregion
export { SplitComponent as component };
