import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/session";
import { toast } from "sonner";
import { ArrowLeft, Clock } from "lucide-react";

export const Route = createFileRoute("/tracking/$id")({
  component: TrackingDetail,
});

function TrackingDetail() {
  const { id } = Route.useParams();
  const navigate = useNavigate();

  const [file, setFile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session = getSession();

    if (!session) {
      navigate({ to: "/auth" });
      return;
    }

    const fetchFile = async () => {
      try {
        const res = await fetch("${import.meta.env.VITE_API_URL}/api/files", {
          headers: {
            Authorization: `Bearer ${session.token}`,
            Accept: "application/json",
          },
        });

        const data = await res.json();

        const found = data.find((f: any) => String(f.id) === id);

        if (!found) {
          toast.error("File not found");
          return;
        }

        setFile(found);
      } catch (err) {
        toast.error("Failed to load tracking data");
      } finally {
        setLoading(false);
      }
    };

    fetchFile();
  }, [id, navigate]);

  if (loading) {
    return <div className="p-10">Loading...</div>;
  }

  if (!file) {
    return <div className="p-10 text-red-500">File not found</div>;
  }

  return (
    <AppShell
      title={file.title}
      subtitle={`${file.reference} · ${file.department}`}
      actions={
        <Button variant="outline" size="sm" onClick={() => navigate({ to: "/files" })}>
          <ArrowLeft className="size-4 mr-1" />
          Back
        </Button>
      }
    >
      <div className="grid gap-4 lg:grid-cols-3">

        {/* TIMELINE (SIMPLIFIED) */}
        <Card className="p-5 lg:col-span-2">
          <h2 className="font-semibold flex items-center gap-2">
            <Clock className="size-4" />
            Tracking Timeline
          </h2>

          <ol className="mt-5 space-y-4 border-l pl-6">
            <li>
              <div className="text-sm font-medium">File Submitted</div>
              <div className="text-xs text-muted-foreground">
                Initial upload to system
              </div>
            </li>

            <li>
              <div className="text-sm font-medium">Current Department</div>
              <div className="text-xs text-muted-foreground">
                {file.department}
              </div>
            </li>

            <li>
              <div className="text-sm font-medium">Status</div>
              <Badge>{file.status}</Badge>
            </li>
          </ol>
        </Card>

        {/* DETAILS */}
        <Card className="p-5">
          <h2 className="font-semibold">Details</h2>

          <div className="mt-3 text-sm space-y-2">
            <div>
              <span className="text-muted-foreground">Reference:</span>{" "}
              {file.reference}
            </div>

            <div>
              <span className="text-muted-foreground">Title:</span>{" "}
              {file.title}
            </div>

            <div>
              <span className="text-muted-foreground">Department:</span>{" "}
              {file.department}
            </div>

            <div>
              <span className="text-muted-foreground">Status:</span>{" "}
              {file.status}
            </div>

            <div>
              <span className="text-muted-foreground">Uploaded:</span>{" "}
              {new Date(file.updatedAt).toLocaleString()}
            </div>
          </div>
        </Card>

      </div>
    </AppShell>
  );
}
