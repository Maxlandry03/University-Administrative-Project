import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { auditLogs } from "@/lib/mock-data";

export const Route = createFileRoute("/audit")({
  head: () => ({ meta: [{ title: "Audit Logs — UniTrack OCR" }] }),
  component: () => (
    <AppShell title="Audit Logs" subtitle="Every action performed in the system, for security and accountability">
      <Card className="p-0 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Timestamp</TableHead>
              <TableHead>Actor</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>IP Address</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {auditLogs.map((l, i) => (
              <TableRow key={i}>
                <TableCell className="text-xs font-mono">{new Date(l.at).toLocaleString()}</TableCell>
                <TableCell className="font-medium">{l.actor}</TableCell>
                <TableCell>{l.action}</TableCell>
                <TableCell className="text-xs font-mono text-muted-foreground">{l.ip}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </AppShell>
  ),
});
