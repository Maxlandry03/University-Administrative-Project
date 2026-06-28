import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Card } from "@/components/ui/card";
import { departments, files } from "@/lib/mock-data";
import { Building2 } from "lucide-react";

export const Route = createFileRoute("/departments")({
  head: () => ({ meta: [{ title: "Departments — UniTrack OCR" }] }),
  component: () => (
    <AppShell title="Departments" subtitle="Manage administrative departments and their file load">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {departments.map((d) => {
          const count = files.filter((f) => f.department === d).length;
          const pending = files.filter((f) => f.department === d && f.status === "pending").length;
          return (
            <Card key={d} className="p-5">
              <div className="flex items-start gap-3">
                <div className="size-10 rounded-md bg-primary/10 text-primary grid place-items-center"><Building2 className="size-5" /></div>
                <div className="flex-1">
                  <div className="font-semibold">{d}</div>
                  <div className="text-xs text-muted-foreground">{count} files · {pending} pending</div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </AppShell>
  ),
});
