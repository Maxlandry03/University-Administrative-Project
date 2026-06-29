import { t as Route$11 } from "./tracking._id-B1vddSSX.js";
import { t as Route$12 } from "./file._id-B-WbtV1w.js";
import { useEffect } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, redirect, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
//#region src/styles.css?url
var styles_default = "/assets/styles-BmvhFiGz.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
//#region src/components/ui/sonner.tsx
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ jsx(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$10 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Lovable App" },
			{
				name: "description",
				content: "Lovable Generated Project"
			},
			{
				name: "author",
				content: "Lovable"
			},
			{
				property: "og:title",
				content: "Lovable App"
			},
			{
				property: "og:description",
				content: "Lovable Generated Project"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$10.useRouteContext();
	return /* @__PURE__ */ jsxs(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ jsx(Outlet, {}), /* @__PURE__ */ jsx(Toaster$1, {
			richColors: true,
			position: "top-right"
		})]
	});
}
//#endregion
//#region src/routes/users.tsx
var $$splitComponentImporter$9 = () => import("./users-1QfX_gmk.js");
var Route$9 = createFileRoute("/users")({
	head: () => ({ meta: [{ title: "User Management — UniTrack OCR" }] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
//#endregion
//#region src/routes/upload.tsx
var $$splitComponentImporter$8 = () => import("./upload-Dzm6dP0O.js");
var Route$8 = createFileRoute("/upload")({
	head: () => ({ meta: [{ title: "Upload Document — UniTrack OCR" }] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
//#endregion
//#region src/routes/tracking.tsx
var $$splitComponentImporter$7 = () => import("./tracking-BffAliTQ.js");
var Route$7 = createFileRoute("/tracking")({
	head: () => ({ meta: [{ title: "Workflow Tracking — UniTrack OCR" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
//#endregion
//#region src/routes/search.tsx
var $$splitComponentImporter$6 = () => import("./search-B-zDEv97.js");
var Route$6 = createFileRoute("/search")({
	head: () => ({ meta: [{ title: "Search — UniTrack OCR" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
//#endregion
//#region src/routes/files.tsx
var $$splitComponentImporter$5 = () => import("./files-BAYfesbH.js");
var Route$5 = createFileRoute("/files")({
	head: () => ({ meta: [{ title: "My Files — UniTrack OCR" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/departments.tsx
var $$splitComponentImporter$4 = () => import("./departments-gyvJ_oe7.js");
var Route$4 = createFileRoute("/departments")({
	head: () => ({ meta: [{ title: "Departments — UniTrack OCR" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/dashboard.tsx
var $$splitComponentImporter$3 = () => import("./dashboard-StKWNaOv.js");
console.log("Dashboard rendered");
var Route$3 = createFileRoute("/dashboard")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
//#endregion
//#region src/routes/auth.tsx
var $$splitComponentImporter$2 = () => import("./auth-BXnmnZEQ.js");
var Route$2 = createFileRoute("/auth")({
	head: () => ({ meta: [{ title: "Sign in — OCR File Tracking" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/audit.tsx
var $$splitComponentImporter$1 = () => import("./audit-DoDXtTPw.js");
var Route$1 = createFileRoute("/audit")({
	head: () => ({ meta: [{ title: "Audit Logs — UniTrack OCR" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-DTEZEvkE.js");
var Route = createFileRoute("/")({
	beforeLoad: () => {
		throw redirect({ to: "/dashboard" });
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var UsersRoute = Route$9.update({
	id: "/users",
	path: "/users",
	getParentRoute: () => Route$10
});
var UploadRoute = Route$8.update({
	id: "/upload",
	path: "/upload",
	getParentRoute: () => Route$10
});
var TrackingRoute = Route$7.update({
	id: "/tracking",
	path: "/tracking",
	getParentRoute: () => Route$10
});
var SearchRoute = Route$6.update({
	id: "/search",
	path: "/search",
	getParentRoute: () => Route$10
});
var FilesRoute = Route$5.update({
	id: "/files",
	path: "/files",
	getParentRoute: () => Route$10
});
var DepartmentsRoute = Route$4.update({
	id: "/departments",
	path: "/departments",
	getParentRoute: () => Route$10
});
var DashboardRoute = Route$3.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$10
});
var AuthRoute = Route$2.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$10
});
var AuditRoute = Route$1.update({
	id: "/audit",
	path: "/audit",
	getParentRoute: () => Route$10
});
var IndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$10
});
var TrackingIdRoute = Route$11.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => TrackingRoute
});
var FileIdRoute = Route$12.update({
	id: "/file/$id",
	path: "/file/$id",
	getParentRoute: () => Route$10
});
var TrackingRouteChildren = { TrackingIdRoute };
var rootRouteChildren = {
	IndexRoute,
	AuditRoute,
	AuthRoute,
	DashboardRoute,
	DepartmentsRoute,
	FilesRoute,
	SearchRoute,
	TrackingRoute: TrackingRoute._addFileChildren(TrackingRouteChildren),
	UploadRoute,
	UsersRoute,
	FileIdRoute
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
