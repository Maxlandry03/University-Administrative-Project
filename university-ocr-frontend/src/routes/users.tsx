import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { users } from "@/lib/mock-data";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { UserPlus } from "lucide-react";

export const Route = createFileRoute("/users")({
  head: () => ({ meta: [{ title: "User Management — UniTrack OCR" }] }),
  component: () => (
    <AppShell title="User Management" subtitle="Manage accounts, roles, and department assignments" actions={
      <Button size="sm"><UserPlus className="size-4 mr-1" /> Add user</Button>
    }>
      <Card className="p-0 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Department</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((u) => (
              <TableRow key={u.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="size-8"><AvatarFallback>{u.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}</AvatarFallback></Avatar>
                    <span className="font-medium">{u.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">{u.email}</TableCell>
                <TableCell><Badge variant="secondary">{u.role}</Badge></TableCell>
                <TableCell>{u.department}</TableCell>
                <TableCell className="text-right"><Button size="sm" variant="ghost">Edit</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </AppShell>
  ),
});
