import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MoreHorizontal, Trash2, UserPlus } from "lucide-react";
import { useEffect, useState } from "react";
import { getSession, type Role, type Session } from "@/lib/session";
import { toast } from "sonner";

export const Route = createFileRoute("/users")({
  head: () => ({ meta: [{ title: "User Management — UniTrack OCR" }] }),
  component: UserManagementPage,
});

function UserManagementPage() {
  const navigate = useNavigate();
  const [session, setSession] = useState<Session | null>(null);
  const [users, setUsers] = useState<Session[]>([]);
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [tick, forceTick] = useState(0);

  useEffect(() => {
    const s = getSession();
    if (!s) { navigate({ to: "/auth" }); return; }
    // This page is for Super Admins only
    if (s.role !== "Super Administrator") {
      toast.error("Access Denied", { description: "You do not have permission to view this page." });
      navigate({ to: "/dashboard" });
      return;
    }
    setSession(s);
  }, [navigate]);

  const refresh = () => forceTick(n => n + 1);
  useEffect(() => {
    let ignore = false;
    const fetchUsers = async () => {
      if (!session) return;
      try {
        const headers = { "Authorization": `Bearer ${session.token}`, "Accept": "application/json" };
        const res = await fetch("${import.meta.env.VITE_API_URL}/api/users", { headers });
        const data = await res.json();
        if (res.ok && !ignore) setUsers(data);
        else toast.error("Failed to fetch users.");
      } catch (error) {
        toast.error("Could not load user data.");
      }
    };
    fetchUsers();
    return () => { ignore = true; };
  }, [session, tick]);

  const createUser = async (userData: any) => {
    if (!session?.token) return;
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(userData)
      });
      const data = await response.json();
      if (response.ok) {
        toast.success("User has been created successfully.");
        refresh(); // Re-fetch data
      } else {
        const errorMsg = data.errors ? Object.values(data.errors).flat().join(" ") : data.message;
        toast.error("Failed to create user", { description: errorMsg });
      }
    } catch (error) {
      toast.error("An error occurred while creating the user.");
    }
  };

  const deleteUser = async (email: string) => {
    if (!session?.token) return;
    if (!confirm("Are you sure you want to delete this user? This action cannot be undone.")) return;

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/${email}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${session.token}`, 'Accept': 'application/json' }
      });
      if (response.ok) {
        toast.success("User has been deleted.");
        refresh(); // Re-fetch data
      } else {
        toast.error("Failed to delete user.");
      }
    } catch (error) {
      toast.error("An error occurred while deleting the user.");
    }
  };

  return (
    <AppShell title="User Management" subtitle="Manage accounts, roles, and department assignments" actions={<Button size="sm" onClick={() => setIsAddingUser(true)}><UserPlus className="size-4 mr-1" /> Add user</Button>}>
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
              <TableRow key={u.email}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="size-8"><AvatarFallback>{u.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}</AvatarFallback></Avatar>
                    <span className="font-medium">{u.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">{u.email}</TableCell>
                <TableCell><Badge variant="secondary">{u.role}</Badge></TableCell>
                <TableCell>{u.department}</TableCell>
                <TableCell className="text-right">
                  {session?.email !== u.email && (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost"><MoreHorizontal className="size-4" /></Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="text-red-500 focus:bg-red-50 focus:text-red-900" onSelect={() => deleteUser(u.email)}>
                          <Trash2 className="mr-2 size-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      {isAddingUser && (
        <AddUserDialog
          onConfirm={(userData) => { createUser(userData); setIsAddingUser(false); }}
          onOpenChange={(isOpen) => !isOpen && setIsAddingUser(false)}
        />
      )}
    </AppShell>
  );
}

function AddUserDialog({ onConfirm, onOpenChange }: { onConfirm: (userData: any) => void; onOpenChange: (open: boolean) => void; }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [role, setRole] = useState<Role>("Department Administrator");
  const [department, setDepartment] = useState("Registrar");
  const roles: Role[] = ["Super Administrator", "Department Administrator"];
  const departments = ["Registrar", "Finance", "Human Resources", "Academic Affairs", "Research Office", "Student Services"];

  const handleSubmit = () => {
    if (!name || !email || !password || (role === "Department Administrator" && !department)) {
      toast.error("Please fill out all required fields.");
      return;
    }
    if (password !== passwordConfirmation) {
      toast.error("Passwords do not match.");
      return;
    }
    const userData: any = { name, email, password, password_confirmation: passwordConfirmation, role };
    if (role === "Department Administrator") {
      userData.department = department;
    }

    onConfirm(userData);
  };

  return (
    <Dialog open={true} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New User</DialogTitle>
          <DialogDescription>Create a new user account and assign them a role.</DialogDescription>
        </DialogHeader>
        <div className="space-y-3 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password_confirmation">Confirm Password</Label>
            <Input id="password_confirmation" type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label>Role</Label>
            <Select value={role} onValueChange={(v) => setRole(v as Role)}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {roles.map(r => <SelectItem key={r} value={r}>{r}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          {role === "Department Administrator" && (
            <div className="space-y-2">
              <Label>Department</Label>
              <Select value={department} onValueChange={setDepartment}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {departments.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button onClick={handleSubmit}>Create User</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
