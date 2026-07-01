import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { FileText, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { setSession, type Role } from "@/lib/session";
import api from "@/lib/apiConfig";

export const Route = createFileRoute("/auth")({
  head: () => ({ meta: [{ title: "Sign in — OCR File Tracking" }] }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>("Department Administrator");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = role === "Student"
      ? { email, student_id: studentId, role }
      : { email, password, role };

    try {

  const response = await api.post("/login", payload);

  const data = response.data;

  console.log("Login response:", data);

  const { user, access_token, student_id } = data;

  setSession({
    name: user.name,
    email: user.email,
    role: user.role,
    department: user.department,
    student_id: student_id,
    token: access_token,
  });

  navigate({ to: "/dashboard" });

} catch (error:any) {

  console.error("Login error:", error);

  alert(
    error.response?.data?.message ||
    "Login failed"
  );

} catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login.");
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      <div className="hidden lg:flex flex-col justify-between p-12 bg-sidebar text-sidebar-foreground">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-md bg-sidebar-primary text-sidebar-primary-foreground grid place-items-center">
            <FileText className="size-5" />
          </div>
          <div>
            <div className="font-semibold tracking-tight">UniTrack OCR</div>
            <div className="text-xs opacity-70">Administrative File Tracking</div>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight">
            Digitize, classify, and follow every administrative file.
          </h1>
          <p className="mt-4 max-w-md text-sm opacity-80">
            OCR-powered intake, departmental workflow, and a complete audit trail —
            built for university administration.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs opacity-70">
          <ShieldCheck className="size-4" />
          Secure single sign-on · Role-based access · Audit-ready
        </div>
      </div>

      <div className="flex items-center justify-center p-6">
        <Card className="w-full max-w-md p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Sign in</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Use your university credentials to access the system.
          </p>
          <form onSubmit={submit} className="mt-6 space-y-4">
            {role === "Student" ? (
              <>
                <div className="space-y-2">
                  <Label htmlFor="studentId">Student ID</Label>
                  <Input id="studentId" value={studentId} onChange={(e) => setStudentId(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Student Email</Label>
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
              </>
            ) : (
              <>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pw">Password</Label>
                  <Input id="pw" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
              </>
            )}
            <div className="space-y-2">
              <Label>Sign in as</Label>
              <Select value={role} onValueChange={(v) => setRole(v as Role)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Super Administrator">Super Administrator</SelectItem>
                  <SelectItem value="Department Administrator">Department Administrator</SelectItem>
                  <SelectItem value="Student">Student</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full">Sign in</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
