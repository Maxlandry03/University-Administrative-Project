import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { type TrackedFile, statusLabel, statusClasses } from "@/lib/mock-data";
import { getSession } from "@/lib/session";
import { toast } from "sonner";
import { Loader2, Search as SearchIcon } from "lucide-react";

export const Route = createFileRoute("/search")({
  head: () => ({ meta: [{ title: "Search — UniTrack OCR" }] }),
  component: SearchPage,
});

function highlight(text: string, q: string) {
  if (!q) return text;
  const i = text.toLowerCase().indexOf(q.toLowerCase());
  if (i === -1) return text;
  return <>{text.slice(0, i)}<mark className="bg-accent/40 rounded px-0.5">{text.slice(i, i + q.length)}</mark>{text.slice(i + q.length)}</>;
}

function SearchPage() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [results, setResults] = useState<TrackedFile[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const session = getSession();
    if (!session) {
      navigate({ to: "/auth" });
      return;
    }

    if (!q.trim()) {
      setResults([]);
      return;
    }

    const search = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/search?q=${encodeURIComponent(q)}`, {
          headers: {
            Authorization: `Bearer ${session.token}`,
            Accept: "application/json",
          },
        });
        const data = await response.json();
        if (response.ok) {
          setResults(data);
        } else {
          toast.error("Search failed.");
        }
      } catch (error) {
        toast.error("Could not connect to the server for search.");
      } finally {
        setLoading(false);
      }
    };

    const debounce = setTimeout(() => search(), 300);
    return () => clearTimeout(debounce);
  }, [q, navigate]);

  return (
    <AppShell title="Search" subtitle="Full-text search across documents using OCR-extracted content">
      <Card className="p-4">
        <div className="relative">
          {loading ? <Loader2 className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground animate-spin" /> : <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />}
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search inside documents…" className="pl-9 h-11" />
        </div>
        <div className="text-xs text-muted-foreground mt-2">{results.length} result{results.length === 1 ? "" : "s"}</div>
      </Card>

      <div className="mt-4 space-y-3">
        {results.map((f) => {
          const text =
  f.content?.split("\n").find((l) => l.toLowerCase().includes(q.toLowerCase())) ??
  f.content?.split("\n")[0] ??
  "No content available";
          return (
            <Card key={f.id} className="p-4 hover:shadow-md transition">
              <Link to="/tracking/$id" params={{ id: f.id }} className="block">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs text-muted-foreground font-mono">{f.reference}</div>
                    <div className="font-semibold">{highlight(f.title, q)}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{f.department} · {f.type}</div>
                  </div>
                  <Badge variant="outline" className={statusClasses(f.status)}>{statusLabel[f.status]}</Badge>
                </div>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{highlight(text, q)}</p>
              </Link>
            </Card>
          );
        })}
        {q && results.length === 0 && (
          <Card className="p-10 text-center text-sm text-muted-foreground">No documents match "{q}".</Card>
        )}
      </div>
    </AppShell>
  );
}
