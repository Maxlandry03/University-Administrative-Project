export type Role = "Super Administrator" | "Department Administrator" | "Staff" | "Student";

const KEY = "uoft.session";

export interface Session {
  name: string;
  email: string;
  role: Role;
  department: string;
}

export function getSession(): Session | null {
  if (typeof window === "undefined") return null;
  try { const v = localStorage.getItem(KEY); return v ? JSON.parse(v) : null; } catch { return null; }
}
export function setSession(s: Session) { localStorage.setItem(KEY, JSON.stringify(s)); }
export function clearSession() { localStorage.removeItem(KEY); }
