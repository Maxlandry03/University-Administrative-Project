import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  LayoutDashboard, Upload, Files, Search, GitBranch, Building2,
  Users as UsersIcon, ScrollText, FileText, LogOut, Bell,
} from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger,
  SidebarHeader, SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getSession, clearSession, type Session } from "@/lib/session";

const nav = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Upload Document", url: "/upload", icon: Upload },
  { title: "My Files", url: "/files", icon: Files },
  { title: "Search", url: "/search", icon: Search },
  { title: "Workflow Tracking", url: "/tracking", icon: GitBranch },
];
const adminLinks = [
  { title: "Departments", url: "/departments", icon: Building2, roles: ["Super Administrator"] },
  { title: "User Management", url: "/users", icon: UsersIcon, roles: ["Super Administrator"] },
  { title: "Audit Logs", url: "/audit", icon: ScrollText, roles: ["Super Administrator", "Department Administrator"] },
];

function AppSidebar({ session }: { session: Session }) {
  const admin = adminLinks.filter((l) => l.roles.includes(session.role));
  const path = useRouterState({ select: (r) => r.location.pathname });
  const navigate = useNavigate();
  const isActive = (u: string) => path === u || path.startsWith(u + "/");
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="px-3 py-4">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-md bg-sidebar-primary text-sidebar-primary-foreground grid place-items-center shrink-0">
            <FileText className="size-4" />
          </div>
          <div className="group-data-[collapsible=icon]:hidden">
            <div className="text-sm font-semibold">UniTrack OCR</div>
            <div className="text-[10px] uppercase tracking-wider opacity-70">File Tracking</div>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {nav.map((i) => (
                <SidebarMenuItem key={i.url}>
                  <SidebarMenuButton asChild isActive={isActive(i.url)} tooltip={i.title}>
                    <Link to={i.url}><i.icon /><span>{i.title}</span></Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
          {admin.length > 0 && (
          <SidebarGroup>
            <SidebarGroupLabel>Administration</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {admin.map((i) => (
                  <SidebarMenuItem key={i.url}>
                    <SidebarMenuButton asChild isActive={isActive(i.url)} tooltip={i.title}>
                      <Link to={i.url}><i.icon /><span>{i.title}</span></Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
      <SidebarFooter className="p-3">
        <div className="flex items-center gap-2 group-data-[collapsible=icon]:hidden">
          <Avatar className="size-8"><AvatarFallback>{session.name.slice(0, 2).toUpperCase()}</AvatarFallback></Avatar>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-medium truncate">{session.name}</div>
            <div className="text-[10px] opacity-70 truncate">{session.role}</div>
          </div>
          <Button
            size="icon"
            variant="ghost"
            className="text-sidebar-foreground hover:bg-sidebar-accent"
            onClick={() => { clearSession(); navigate({ to: "/auth" }); }}
          >
            <LogOut className="size-4" />
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export function AppShell({ title, subtitle, actions, children }: { title: string; subtitle?: string; actions?: ReactNode; children: ReactNode }) {
  const navigate = useNavigate();
  const [session, setSessionState] = useState<Session | null>(null);
  useEffect(() => {
    const s = getSession();
    if (!s) navigate({ to: "/auth" });
    else setSessionState(s);
  }, [navigate]);
  if (!session) return null;
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar session={session} />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-14 border-b bg-card flex items-center gap-3 px-4 sticky top-0 z-10">
            <SidebarTrigger />
            <div className="flex-1 min-w-0">
              <h1 className="text-base font-semibold tracking-tight truncate">{title}</h1>
              {subtitle && <p className="text-xs text-muted-foreground truncate">{subtitle}</p>}
            </div>
            <Button size="icon" variant="ghost"><Bell className="size-4" /></Button>
            {actions}
          </header>
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
