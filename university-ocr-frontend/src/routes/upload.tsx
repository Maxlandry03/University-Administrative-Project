import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { departments, SAMPLE_OCR } from "@/lib/mock-data";
import { CloudUpload, FileScan, Sparkles, X } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/upload")({
  head: () => ({ meta: [{ title: "Upload Document — UniTrack OCR" }] }),
  component: UploadPage,
});

function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [ocr, setOcr] = useState("");
  const [type, setType] = useState("Transcript Request");
  const [dept, setDept] = useState(departments[0]);
  const [scanning, setScanning] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (f: File) => {
    setFile(f);
    setProgress(0);
    setOcr("");
    setScanning(true);
    const i = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(i);
          setScanning(false);
          setOcr(SAMPLE_OCR);
          return 100;
        }
        return p + 8;
      });
    }, 120);
  };

  const submit = () => {
    if (!file) return toast.error("Please upload a document first");
    toast.success("Document submitted for processing", { description: "A new file reference has been created." });
    setFile(null); setOcr(""); setProgress(0);
  };

  return (
    <AppShell title="Upload Document" subtitle="Upload PDFs or scanned images for OCR processing and classification">
      <div className="grid gap-6 lg:grid-cols-5">
        <Card className="p-6 lg:col-span-3">
          <h2 className="font-semibold tracking-tight">Source document</h2>
          <p className="text-xs text-muted-foreground">Accepted: PDF, PNG, JPG · Up to 20 MB</p>

          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files?.[0]; if (f) handleFile(f); }}
            onClick={() => inputRef.current?.click()}
            className="mt-4 border-2 border-dashed border-border rounded-lg p-10 text-center hover:bg-muted/40 cursor-pointer transition"
          >
            <CloudUpload className="mx-auto size-10 text-muted-foreground" />
            <div className="mt-3 font-medium">Drop your file here or click to browse</div>
            <div className="text-xs text-muted-foreground mt-1">We'll run OCR automatically after upload</div>
            <input ref={inputRef} type="file" className="hidden" accept=".pdf,image/*"
              onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />
          </div>

          {file && (
            <div className="mt-4 border rounded-md p-3 flex items-center gap-3">
              <div className="size-9 rounded bg-primary/10 text-primary grid place-items-center"><FileScan className="size-4" /></div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{file.name}</div>
                <div className="text-xs text-muted-foreground">{(file.size / 1024).toFixed(1)} KB</div>
                <Progress value={progress} className="mt-2 h-1.5" />
              </div>
              <Button variant="ghost" size="icon" onClick={() => { setFile(null); setOcr(""); setProgress(0); }}><X className="size-4" /></Button>
            </div>
          )}

          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <Label className="flex items-center gap-2"><Sparkles className="size-4 text-primary" /> OCR extracted text</Label>
              {scanning && <Badge variant="outline">Scanning…</Badge>}
            </div>
            <Textarea value={ocr} onChange={(e) => setOcr(e.target.value)} rows={10}
              placeholder="OCR output will appear here once your document is processed." />
          </div>
        </Card>

        <Card className="p-6 lg:col-span-2 h-fit">
          <h2 className="font-semibold tracking-tight">Classification</h2>
          <p className="text-xs text-muted-foreground">Route this document through the right workflow</p>
          <div className="mt-4 space-y-4">
            <div className="space-y-2">
              <Label>Document type</Label>
              <Select value={type} onValueChange={setType}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {["Transcript Request", "Certificate Request", "Leave Application", "Financial Request", "Academic Document", "Other"].map((t) =>
                    <SelectItem key={t} value={t}>{t}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Department</Label>
              <Select value={dept} onValueChange={setDept}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {departments.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Reference (optional)</Label>
              <Input placeholder="Auto-generated if blank" />
            </div>
            <div className="space-y-2">
              <Label>Notes</Label>
              <Textarea placeholder="Add any context for reviewers…" rows={3} />
            </div>
            <Button className="w-full" onClick={submit}>Submit for processing</Button>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
