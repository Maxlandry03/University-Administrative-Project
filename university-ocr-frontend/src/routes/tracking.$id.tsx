import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { files, statusClasses, statusLabel } from "@/lib/mock-data";
import { ArrowLeft, CheckCircle2, Circle, Clock, FileScan } from "lucide-react";

export const Route = createFileRoute("/tracking/$id")({
  head: () => ({ meta: [{ title: "File Tracking — UniTrack OCR" }] }),
  component: TrackingDetail,
  notFoundComponent: () => <div className="p-10 text-center">File not found.</div>,
});

function TrackingDetail() {
  const { id } = Route.useParams();
  const file = files.find((f) => f.id === id);
  if (!file) throw notFound();

  return (
    <AppShell title={file.title} subtitle={`${file.reference} · ${file.department}`} actions={
      <Button variant="outline" size="sm" asChild><Link to="/files"><ArrowLeft className="size-4 mr-1" /> Back</Link></Button>
    }>
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="p-5 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold tracking-tight">Workflow timeline</h2>
            <Badge variant="outline" className={statusClasses(file.status)}>{statusLabel[file.status]}</Badge>
          </div>
          <ol className="mt-5 relative border-l border-border pl-6 space-y-5">
            {file.history.map((h, i) => {
              const last = i === file.history.length - 1;
              return (
                <li key={i} className="relative">
                  <span className={`absolute -left-[31px] top-0 size-6 rounded-full grid place-items-center ${last ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                    {last ? <Clock className="size-3" /> : <CheckCircle2 className="size-3" />}
                  </span>
                  <div className="text-sm font-medium">{h.action}</div>
                  <div className="text-xs text-muted-foreground">{h.actor} · {new Date(h.at).toLocaleString()}</div>
                  {h.note && <div className="text-xs mt-1 text-muted-foreground italic">"{h.note}"</div>}
                </li>
              );
            })}
            <li className="relative opacity-50">
              <span className="absolute -left-[31px] top-0 size-6 rounded-full bg-muted grid place-items-center">
                <Circle className="size-3" />
              </span>
              <div className="text-sm font-medium">Awaiting next action</div>
              <div className="text-xs text-muted-foreground">Pending</div>
            </li>
          </ol>
        </Card>

        <div className="space-y-4">
          <Card className="p-5">
            <h2 className="font-semibold tracking-tight flex items-center gap-2"><FileScan className="size-4" /> OCR extract</h2>
            <pre className="mt-3 text-xs bg-muted p-3 rounded-md whitespace-pre-wrap font-mono leading-relaxed">{file.ocrText}</pre>
          </Card>
          <Card className="p-5">
            <h2 className="font-semibold tracking-tight">Details</h2>
            <dl className="mt-3 text-sm space-y-2">
              <div className="flex justify-between"><dt className="text-muted-foreground">Type</dt><dd>{file.type}</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">Department</dt><dd>{file.department}</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">Submitted by</dt><dd>{file.submittedBy}</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">Uploaded</dt><dd>{new Date(file.uploadedAt).toLocaleDateString()}</dd></div>
            </dl>
            <div className="mt-4 flex gap-2">
              <Button size="sm" className="flex-1">Approve</Button>
              <Button size="sm" variant="outline" className="flex-1">Forward</Button>
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
