import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/app-shell";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { files, statusLabel, statusClasses, departments } from "@/lib/mock-data";
import { Search as SearchIcon } from "lucide-react";

export const Route = createFileRoute("/files")({
  head: () => ({ meta: [{ title: "My Files — UniTrack OCR" }] }),
  component: FilesPage,
});

function FilesPage() {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("all");
  const [dept, setDept] = useState("all");

  const filtered = files.filter((f) => {
    if (status !== "all" && f.status !== status) return false;
    if (dept !== "all" && f.department !== dept) return false;
    if (q && !(`${f.title} ${f.reference} ${f.submittedBy}`.toLowerCase().includes(q.toLowerCase()))) return false;
    return true;
  });

  return (
    <AppShell title="My Files" subtitle="All documents you have submitted or are reviewing">
      <Card className="p-4">
        <div className="flex flex-wrap gap-3">
          <div className="relative flex-1 min-w-[220px]">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by title, reference, person…" className="pl-9" />
          </div>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="w-44"><SelectValue placeholder="Status" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              {(["pending", "in_review", "approved", "rejected", "archived"] as const).map((s) =>
                <SelectItem key={s} value={s}>{statusLabel[s]}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={dept} onValueChange={setDept}>
            <SelectTrigger className="w-52"><SelectValue placeholder="Department" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All departments</SelectItem>
              {departments.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </Card>

      <Card className="mt-4 p-0 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Reference</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Submitted by</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Updated</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((f) => (
              <TableRow key={f.id}>
                <TableCell className="font-mono text-xs">{f.reference}</TableCell>
                <TableCell className="font-medium">{f.title}</TableCell>
                <TableCell className="text-muted-foreground">{f.type}</TableCell>
                <TableCell>{f.department}</TableCell>
                <TableCell>{f.submittedBy}</TableCell>
                <TableCell><Badge variant="outline" className={statusClasses(f.status)}>{statusLabel[f.status]}</Badge></TableCell>
                <TableCell className="text-xs text-muted-foreground">{new Date(f.updatedAt).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Button size="sm" variant="ghost" asChild>
                    <Link to="/tracking/$id" params={{ id: f.id }}>Track</Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {filtered.length === 0 && (
              <TableRow><TableCell colSpan={8} className="text-center py-10 text-sm text-muted-foreground">No files match your filters.</TableCell></TableRow>
            )}
          </TableBody>
        </Table>
      </Card>
    </AppShell>
  );
}
