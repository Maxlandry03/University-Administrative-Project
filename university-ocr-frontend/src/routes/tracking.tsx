import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { statusClasses, statusLabel, type TrackedFile } from "@/lib/mock-data";
import { getSession } from "@/lib/session";
import { toast } from "sonner";

export const Route = createFileRoute("/tracking")({
  head: () => ({ meta: [{ title: "Workflow Tracking — UniTrack OCR" }] }),
  component: TrackingIndex,
});

function TrackingIndex() {
  const navigate = useNavigate();
  const [files, setFiles] = useState<TrackedFile[]>([]);

  useEffect(() => {
    const session = getSession();
    if (!session) {
      navigate({ to: "/auth" });
      return;
    }

    const fetchFiles = async () => {
      try {
        const response = await fetch("${import.meta.env.VITE_API_URL}/api/files", {
          headers: {
            Authorization: `Bearer ${session.token}`,
            Accept: "application/json",
          },
        });
        const data = await response.json();
        if (response.ok) setFiles(data);
      } catch (error) {
        toast.error("Failed to fetch tracking data.");
      }
    };

    fetchFiles();
    // Runs once on mount only — `navigate` is intentionally excluded
    // because including it caused an infinite fetch loop.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppShell title="Workflow Tracking" subtitle="Follow each file from submission to archival">
      <div className="grid gap-3 md:grid-cols-2">
        {files.map((f) => {
          const historyCount = f.history?.length ?? 1;

          return (
            <Link key={f.id} to="/tracking/$id" params={{ id: f.id }}>
              <Card className="p-4 hover:shadow-md transition">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-mono text-muted-foreground">
                      {f.reference}
                    </div>
                    <div className="font-semibold">{f.title}</div>
                  </div>

                  <Badge>{f.status}</Badge>
                </div>

                <div className="text-xs text-muted-foreground mt-2">
                  {f.department} · {historyCount} events
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </AppShell>
  );
}