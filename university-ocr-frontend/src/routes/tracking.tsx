import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { files, statusClasses, statusLabel } from "@/lib/mock-data";

export const Route = createFileRoute("/tracking")({
  head: () => ({ meta: [{ title: "Workflow Tracking — UniTrack OCR" }] }),
  component: TrackingIndex,
});

function TrackingIndex() {
  return (
    <AppShell title="Workflow Tracking" subtitle="Follow each file from submission to archival">
      <div className="grid gap-3 md:grid-cols-2">
        {files.map((f) => (
          <Link key={f.id} to="/tracking/$id" params={{ id: f.id }}>
            <Card className="p-4 hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-muted-foreground">{f.reference}</div>
                  <div className="font-semibold">{f.title}</div>
                </div>
                <Badge variant="outline" className={statusClasses(f.status)}>{statusLabel[f.status]}</Badge>
              </div>
              <div className="text-xs text-muted-foreground mt-2">{f.department} · {f.history.length} events</div>
            </Card>
          </Link>
        ))}
      </div>
    </AppShell>
  );
}
