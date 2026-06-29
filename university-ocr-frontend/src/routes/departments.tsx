import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Card } from "@/components/ui/card";
import { departments, type TrackedFile } from "@/lib/mock-data";
import { Building2 } from "lucide-react";
import { useEffect, useState } from "react";
import { getSession } from "@/lib/session";
import { toast } from "sonner";

export const Route = createFileRoute("/departments")({
  head: () => ({ meta: [{ title: "Departments — UniTrack OCR" }] }),
  component: DepartmentsPage,
});

function DepartmentsPage() {
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
        toast.error("Failed to fetch file data for departments.");
      }
    };

    fetchFiles();
  }, [navigate]);

  return (
    <AppShell title="Departments" subtitle="Manage administrative departments and their file load">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {departments.map((d) => {
          const count = files.filter((f) => f.department === d).length;
          const pending = files.filter((f) => f.department === d && f.status === "pending").length;
          return (
            <Card key={d} className="p-5">
              <div className="flex items-start gap-3"><div className="size-10 rounded-md bg-primary/10 text-primary grid place-items-center"><Building2 className="size-5" /></div><div className="flex-1"><div className="font-semibold">{d}</div><div className="text-xs text-muted-foreground">{count} files · {pending} pending</div></div></div>
            </Card>
          );
        })}
      </div>
    </AppShell>
  );
}
