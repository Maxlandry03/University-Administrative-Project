import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { files, statusClasses, statusLabel, type TrackedFile } from "@/lib/mock-data";
import { getSession, type Session } from "@/lib/session";
import { ArrowUpRight, Clock, CheckCircle2, AlertTriangle, FileStack, Upload, Inbox } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — UniTrack OCR" }] }),
  component: Dashboard,
});

function Stat({ icon: Icon, label, value, hint }: { icon: any; label: string; value: string; hint?: string }) {
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
          <div className="mt-2 text-3xl font-semibold tracking-tight">{value}</div>
          {hint && <div className="mt-1 text-xs text-muted-foreground">{hint}</div>}
        </div>
        <div className="size-10 rounded-md bg-primary/10 text-primary grid place-items-center">
          <Icon className="size-5" />
        </div>
      </div>
    </Card>
  );
}

// Filter files based on role + department
function scopedFiles(session: Session | null): TrackedFile[] {
  if (!session) return [];
  switch (session.role) {
    case "Super Administrator":
      return files;
    case "Department Administrator":
      return files.filter((f) => f.department === session.department);
    case "Staff":
      return files.filter(
        (f) => f.department === session.department || f.submittedBy === session.name,
      );
    case "Student":
      return files.filter((f) => f.submittedBy === session.name);
  }
}

function RecentList({ list }: { list: TrackedFile[] }) {
  if (list.length === 0) {
    return (
      <div className="mt-6 flex flex-col items-center justify-center py-10 text-center text-muted-foreground">
        <Inbox className="size-8 mb-2 opacity-50" />
        <p className="text-sm">No documents yet</p>
        <p className="text-xs">Upload a document to get started.</p>
      </div>
    );
  }
  return (
    <div className="mt-4 divide-y">
      {list.map((f) => (
        <Link key={f.id} to="/tracking/$id" params={{ id: f.id }} className="flex items-center gap-3 py-3 hover:bg-muted/40 rounded-md px-2 -mx-2">
          <div className="size-9 rounded-md bg-muted grid place-items-center text-xs font-medium">
            {f.reference.slice(0, 3)}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium truncate">{f.title}</div>
            <div className="text-xs text-muted-foreground">{f.reference} · {f.department}</div>
          </div>
          <Badge variant="outline" className={statusClasses(f.status)}>{statusLabel[f.status]}</Badge>
        </Link>
      ))}
    </div>
  );
}

function Dashboard() {
  const navigate = useNavigate();
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const s = getSession();
    if (!s) { navigate({ to: "/auth" }); return; }
    setSession(s);
  }, [navigate]);

  if (!session) return null;

  const scoped = scopedFiles(session);
  const total = scoped.length;
  const pending = scoped.filter((f) => f.status === "pending").length;
  const inReview = scoped.filter((f) => f.status === "in_review").length;
  const approved = scoped.filter((f) => f.status === "approved").length;
  const recent = [...scoped].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)).slice(0, 5);

  // Role-aware copy
  const isSuper = session.role === "Super Administrator";
  const isDeptAdmin = session.role === "Department Administrator";
  const isStaff = session.role === "Staff";
  const isStudent = session.role === "Student";

  const subtitle = isSuper
    ? "Institution-wide overview of administrative documents and workflow activity"
    : isDeptAdmin
      ? `${session.department} department — files and workflow activity`
      : isStaff
        ? "Your department's files and items awaiting your action"
        : "Your submitted requests and tracking status";

  const title = isStudent ? `Welcome, ${session.name.split(" ")[0]}` : "Dashboard";

  return (
    <AppShell title={title} subtitle={subtitle} actions={
      <Button asChild>
        <Link to="/upload">
          <Upload className="mr-2 size-4" />
          {isStudent ? "Submit request" : "Upload document"}
        </Link>
      </Button>
    }>
      {/* Students: simplified stat row (no global counts) */}
      {isStudent ? (
        <div className="grid gap-4 md:grid-cols-3">
          <Stat icon={FileStack} label="My requests" value={String(total)} hint="All-time submitted" />
          <Stat icon={Clock} label="In progress" value={String(pending + inReview)} hint="Awaiting review" />
          <Stat icon={CheckCircle2} label="Completed" value={String(approved)} hint="Approved requests" />
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Stat icon={FileStack} label={isSuper ? "Total files" : "Department files"} value={String(total)} hint={isSuper ? "All-time intake" : session.department} />
          <Stat icon={Clock} label="Pending" value={String(pending)} hint="Awaiting review" />
          <Stat icon={AlertTriangle} label="In review" value={String(inReview)} hint={isSuper ? "Across departments" : "In your scope"} />
          <Stat icon={CheckCircle2} label="Approved" value={String(approved)} hint="Last 30 days" />
        </div>
      )}

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Card className="p-5 lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold tracking-tight">
                {isStudent ? "My recent requests" : isStaff ? "Recent activity in your scope" : "Recent activity"}
              </h2>
              <p className="text-xs text-muted-foreground">
                {isSuper
                  ? "Latest updates across all departments"
                  : isDeptAdmin
                    ? `Latest updates in ${session.department}`
                    : isStaff
                      ? "Files in your department or submitted by you"
                      : "Status of your submissions"}
              </p>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to={isStudent ? "/tracking" : "/files"}>View all <ArrowUpRight className="ml-1 size-3.5" /></Link>
            </Button>
          </div>
          <RecentList list={recent} />
        </Card>

        {/* Admin-only: department breakdown */}
        {isSuper && (
          <Card className="p-5">
            <h2 className="font-semibold tracking-tight">By department</h2>
            <p className="text-xs text-muted-foreground">Active files per department</p>
            <div className="mt-4 space-y-3">
              {["Registrar", "Academic Affairs", "Finance", "Human Resources"].map((d) => {
                const count = files.filter((f) => f.department === d).length;
                const pct = files.length ? (count / files.length) * 100 : 0;
                return (
                  <div key={d}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted-foreground">{d}</span>
                      <span className="font-medium">{count}</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        )}

        {/* Dept Admin: team / status breakdown for their dept */}
        {isDeptAdmin && (
          <Card className="p-5">
            <h2 className="font-semibold tracking-tight">{session.department} status</h2>
            <p className="text-xs text-muted-foreground">Workflow distribution</p>
            <div className="mt-4 space-y-3">
              {(["pending", "in_review", "approved", "rejected"] as const).map((s) => {
                const count = scoped.filter((f) => f.status === s).length;
                const pct = total ? (count / total) * 100 : 0;
                return (
                  <div key={s}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted-foreground">{statusLabel[s]}</span>
                      <span className="font-medium">{count}</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        )}

        {/* Staff: quick task list = files awaiting their action */}
        {isStaff && (
          <Card className="p-5">
            <h2 className="font-semibold tracking-tight">My tasks</h2>
            <p className="text-xs text-muted-foreground">Items awaiting action</p>
            <div className="mt-4 space-y-2">
              {scoped.filter((f) => f.status === "pending" || f.status === "in_review").slice(0, 5).map((f) => (
                <Link key={f.id} to="/tracking/$id" params={{ id: f.id }} className="block rounded-md border px-3 py-2 hover:bg-muted/40">
                  <div className="text-sm font-medium truncate">{f.title}</div>
                  <div className="text-xs text-muted-foreground">{f.reference}</div>
                </Link>
              ))}
              {scoped.filter((f) => f.status === "pending" || f.status === "in_review").length === 0 && (
                <p className="text-xs text-muted-foreground">No open tasks. 🎉</p>
              )}
            </div>
          </Card>
        )}

        {/* Student: helpful quick links */}
        {isStudent && (
          <Card className="p-5">
            <h2 className="font-semibold tracking-tight">Quick actions</h2>
            <p className="text-xs text-muted-foreground">Common student tasks</p>
            <div className="mt-4 space-y-2">
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/upload"><Upload className="mr-2 size-4" />Submit a new request</Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/tracking"><FileStack className="mr-2 size-4" />Track my requests</Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/search"><AlertTriangle className="mr-2 size-4" />Search documents</Link>
              </Button>
            </div>
          </Card>
        )}
      </div>
    </AppShell>
  );
}
