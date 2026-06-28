export type FileStatus = "pending" | "in_review" | "approved" | "rejected" | "archived";

export interface TrackedFile {
  id: string;
  reference: string;
  title: string;
  type: string;
  submittedBy: string;
  department: string;
  status: FileStatus;
  uploadedAt: string;
  updatedAt: string;
  ocrText: string;
  history: { at: string; actor: string; action: string; note?: string }[];
}

export const departments = [
  "Registrar",
  "Academic Affairs",
  "Student Services",
  "Finance",
  "Human Resources",
  "Research Office",
];

export const users = [
  { id: "u1", name: "Dr. Amina Yusuf", email: "amina@univ.edu", role: "Super Administrator", department: "IT" },
  { id: "u2", name: "Marc Dubois", email: "marc@univ.edu", role: "Department Administrator", department: "Registrar" },
  { id: "u3", name: "Sara Chen", email: "sara@univ.edu", role: "Staff", department: "Academic Affairs" },
  { id: "u4", name: "John Okafor", email: "john@univ.edu", role: "Staff", department: "Finance" },
  { id: "u5", name: "Lina Park", email: "lina@univ.edu", role: "Student", department: "—" },
  { id: "u6", name: "Hassan Ali", email: "hassan@univ.edu", role: "Department Administrator", department: "Human Resources" },
];

export const files: TrackedFile[] = [
  {
    id: "f1",
    reference: "REG-2026-0142",
    title: "Transcript Request — L. Park",
    type: "Transcript Request",
    submittedBy: "Lina Park",
    department: "Registrar",
    status: "in_review",
    uploadedAt: "2026-06-18T09:14:00Z",
    updatedAt: "2026-06-20T11:02:00Z",
    ocrText:
      "OFFICIAL TRANSCRIPT REQUEST\nStudent ID: 2024-00871\nName: Lina Park\nProgram: BSc Computer Science\nReason: Graduate school application\nSignature: L. Park",
    history: [
      { at: "2026-06-18T09:14:00Z", actor: "Lina Park", action: "Submitted request" },
      { at: "2026-06-18T09:14:05Z", actor: "System", action: "OCR extraction completed" },
      { at: "2026-06-19T08:30:00Z", actor: "Marc Dubois", action: "Assigned to Registrar review" },
      { at: "2026-06-20T11:02:00Z", actor: "Marc Dubois", action: "Awaiting Dean signature", note: "Pending second approval" },
    ],
  },
  {
    id: "f2",
    reference: "HR-2026-0078",
    title: "Faculty Leave Application — S. Chen",
    type: "Leave Application",
    submittedBy: "Sara Chen",
    department: "Human Resources",
    status: "approved",
    uploadedAt: "2026-06-10T14:00:00Z",
    updatedAt: "2026-06-15T10:00:00Z",
    ocrText: "LEAVE APPLICATION\nEmployee: Sara Chen\nDates: 2026-07-01 to 2026-07-14\nType: Annual Leave",
    history: [
      { at: "2026-06-10T14:00:00Z", actor: "Sara Chen", action: "Submitted" },
      { at: "2026-06-12T09:00:00Z", actor: "Hassan Ali", action: "Reviewed" },
      { at: "2026-06-15T10:00:00Z", actor: "Hassan Ali", action: "Approved" },
    ],
  },
  {
    id: "f3",
    reference: "FIN-2026-0451",
    title: "Research Grant Disbursement",
    type: "Financial Request",
    submittedBy: "John Okafor",
    department: "Finance",
    status: "pending",
    uploadedAt: "2026-06-21T07:45:00Z",
    updatedAt: "2026-06-21T07:45:00Z",
    ocrText: "GRANT DISBURSEMENT REQUEST\nProject: AI for Education\nAmount: $24,500\nPI: Dr. Amina Yusuf",
    history: [
      { at: "2026-06-21T07:45:00Z", actor: "John Okafor", action: "Submitted" },
      { at: "2026-06-21T07:45:10Z", actor: "System", action: "OCR extraction completed" },
    ],
  },
  {
    id: "f4",
    reference: "ACA-2025-9921",
    title: "Course Syllabus Approval — CS401",
    type: "Academic Document",
    submittedBy: "Sara Chen",
    department: "Academic Affairs",
    status: "archived",
    uploadedAt: "2025-12-04T10:00:00Z",
    updatedAt: "2025-12-22T16:00:00Z",
    ocrText: "CS401 — ADVANCED ALGORITHMS\nInstructor: S. Chen\nApproved syllabus, Fall 2025",
    history: [
      { at: "2025-12-04T10:00:00Z", actor: "Sara Chen", action: "Submitted" },
      { at: "2025-12-22T16:00:00Z", actor: "Marc Dubois", action: "Archived" },
    ],
  },
  {
    id: "f5",
    reference: "REG-2026-0151",
    title: "Diploma Reprint Request",
    type: "Certificate Request",
    submittedBy: "Lina Park",
    department: "Registrar",
    status: "rejected",
    uploadedAt: "2026-06-19T12:00:00Z",
    updatedAt: "2026-06-20T09:15:00Z",
    ocrText: "DIPLOMA REPRINT REQUEST\nReason: Lost original\nFee receipt: missing",
    history: [
      { at: "2026-06-19T12:00:00Z", actor: "Lina Park", action: "Submitted" },
      { at: "2026-06-20T09:15:00Z", actor: "Marc Dubois", action: "Rejected", note: "Missing fee receipt" },
    ],
  },
];

export const auditLogs = [
  { at: "2026-06-21T08:02:00Z", actor: "John Okafor", action: "Uploaded file FIN-2026-0451", ip: "10.0.4.21" },
  { at: "2026-06-20T11:02:00Z", actor: "Marc Dubois", action: "Updated status of REG-2026-0142", ip: "10.0.4.10" },
  { at: "2026-06-20T09:15:00Z", actor: "Marc Dubois", action: "Rejected REG-2026-0151", ip: "10.0.4.10" },
  { at: "2026-06-19T08:30:00Z", actor: "Marc Dubois", action: "Assigned REG-2026-0142 to review", ip: "10.0.4.10" },
  { at: "2026-06-18T09:14:00Z", actor: "Lina Park", action: "Submitted transcript request", ip: "172.16.3.55" },
  { at: "2026-06-15T10:00:00Z", actor: "Hassan Ali", action: "Approved HR-2026-0078", ip: "10.0.4.18" },
];

export const statusLabel: Record<FileStatus, string> = {
  pending: "Pending",
  in_review: "In Review",
  approved: "Approved",
  rejected: "Rejected",
  archived: "Archived",
};

export function statusClasses(s: FileStatus) {
  switch (s) {
    case "pending": return "bg-amber-100 text-amber-900 border-amber-200";
    case "in_review": return "bg-blue-100 text-blue-900 border-blue-200";
    case "approved": return "bg-emerald-100 text-emerald-900 border-emerald-200";
    case "rejected": return "bg-red-100 text-red-900 border-red-200";
    case "archived": return "bg-slate-200 text-slate-800 border-slate-300";
  }
}

export const SAMPLE_OCR = `UNIVERSITY OF EXAMPLE
OFFICIAL DOCUMENT

Reference: AUTO-${Math.floor(Math.random() * 9000 + 1000)}
Date: ${new Date().toISOString().slice(0, 10)}

Dear Registrar,

Please find attached the supporting documents for the
processing of the request mentioned above. Kindly review
and forward to the appropriate department for validation.

Yours sincerely,
Applicant`;
