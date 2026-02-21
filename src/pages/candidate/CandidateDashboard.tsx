import { useState, useRef } from "react";
import { BarChart3, User, FileText, Target, Brain, TrendingUp, Clock, Bell, BookOpen, Upload, Loader2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const atsData = { overall: 82, skills: 88, experience: 75, education: 90 };

const matchedRoles = [
  { title: "Senior Frontend Developer", company: "TechCorp Inc.", score: 94, reason: "Strong React/TypeScript skills, 5+ years experience, matching tech stack." },
  { title: "Full Stack Engineer", company: "InnoSoft", score: 87, reason: "Solid backend + frontend skills, experience with cloud infrastructure." },
  { title: "UI/UX Engineer", company: "DesignLab", score: 79, reason: "Design system experience, component architecture knowledge." },
];

const applications = [
  { role: "Senior Frontend Developer", company: "TechCorp Inc.", date: "2026-02-15", status: "interview" as const, interview: "2026-02-28" },
  { role: "Full Stack Engineer", company: "InnoSoft", date: "2026-02-10", status: "shortlisted" as const, interview: null },
  { role: "DevOps Engineer", company: "CloudScale", date: "2026-02-05", status: "rejected" as const, interview: null },
  { role: "React Developer", company: "AppWorks", date: "2026-01-28", status: "applied" as const, interview: null },
];

const skillGaps = [
  { skill: "Kubernetes", suggestion: "Complete CKA Certification", priority: "High" },
  { skill: "GraphQL", suggestion: "Build a GraphQL API project", priority: "Medium" },
  { skill: "System Design", suggestion: "Take system design course", priority: "High" },
];

const WEBHOOK_URL = "https://prasanna611.app.n8n.cloud/webhook-test/3f288626-9df7-4af8-840c-e79127a2653e";

const CandidateDashboard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleAnalyze = async () => {
    if (!name || !email || !resumeFile) {
      toast({ title: "Missing fields", description: "Please fill in your name, email, and upload a resume.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("data", resumeFile);
      formData.append("name", name);
      formData.append("email", email);

      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast({ title: "Resume sent!", description: "Your resume has been submitted for AI analysis." });
      } else {
        toast({ title: "Submission failed", description: "Something went wrong. Please try again.", variant: "destructive" });
      }
    } catch (error) {
      toast({ title: "Network error", description: "Could not reach the server. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
  <div className="space-y-6">
    {/* Resume Upload & Analyze */}
    <div className="rounded-xl border border-border bg-card p-6">
      <h2 className="text-lg font-semibold text-card-foreground mb-5 flex items-center gap-2">
        <Upload className="h-5 w-5 text-accent" /> Upload Resume & Analyze
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="candidate-name">Full Name</Label>
          <Input id="candidate-name" placeholder="Your full name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="candidate-email">Email Address</Label>
          <Input id="candidate-email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="resume-file">Resume (PDF/DOC)</Label>
          <Input id="resume-file" type="file" accept=".pdf,.doc,.docx" ref={fileInputRef} onChange={(e) => setResumeFile(e.target.files?.[0] || null)} />
        </div>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <Button onClick={handleAnalyze} disabled={isSubmitting}>
          {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing...</> : <><Brain className="mr-2 h-4 w-4" /> Analyze</>}
        </Button>
        {resumeFile && <span className="text-sm text-muted-foreground">Selected: {resumeFile.name}</span>}
      </div>
    </div>

    {/* Stats Row -- existing */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {[
        { label: "ATS Score", value: "82/100", icon: Brain, color: "text-accent" },
        { label: "Applications", value: "4", icon: FileText, color: "text-info" },
        { label: "Interviews", value: "1", icon: Clock, color: "text-warning" },
        { label: "Matched Roles", value: "3", icon: Target, color: "text-success" },
      ].map((s) => (
        <div key={s.label} className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-muted-foreground">{s.label}</span>
            <s.icon className={`h-5 w-5 ${s.color}`} />
          </div>
          <div className="text-2xl font-bold text-card-foreground">{s.value}</div>
        </div>
      ))}
    </div>

    {/* ATS Score Breakdown */}
    <div className="rounded-xl border border-border bg-card p-6">
      <h2 className="text-lg font-semibold text-card-foreground mb-5 flex items-center gap-2">
        <Brain className="h-5 w-5 text-accent" /> ATS Score Breakdown
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex items-center justify-center">
          <div className="relative w-40 h-40">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="42" fill="none" strokeWidth="8" className="stroke-muted" />
              <circle cx="50" cy="50" r="42" fill="none" strokeWidth="8" strokeDasharray={`${82 * 2.64} 264`} strokeLinecap="round" className="stroke-accent" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-card-foreground">{atsData.overall}</span>
              <span className="text-xs text-muted-foreground">Overall</span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {[
            { label: "Skill Match", value: atsData.skills },
            { label: "Experience Relevance", value: atsData.experience },
            { label: "Education Alignment", value: atsData.education },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="text-muted-foreground">{item.label}</span>
                <span className="font-semibold text-card-foreground">{item.value}%</span>
              </div>
              <Progress value={item.value} className="h-2" />
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Role Matching */}
    <div className="rounded-xl border border-border bg-card p-6">
      <h2 className="text-lg font-semibold text-card-foreground mb-5 flex items-center gap-2">
        <Target className="h-5 w-5 text-accent" /> Smart Role Matching
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        {matchedRoles.map((r) => (
          <div key={r.title} className="rounded-lg border border-border p-5 hover:border-accent/30 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-accent">{r.score}% Match</span>
              <Progress value={r.score} className="w-16 h-1.5" />
            </div>
            <h3 className="font-semibold text-card-foreground mb-1">{r.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{r.company}</p>
            <p className="text-xs text-muted-foreground mb-4">{r.reason}</p>
            <div className="flex gap-2">
              <button className="flex-1 text-xs font-medium rounded-lg bg-accent/10 text-accent py-2 hover:bg-accent/20 transition-colors">Interested</button>
              <button className="flex-1 text-xs font-medium rounded-lg bg-muted text-muted-foreground py-2 hover:bg-muted/80 transition-colors">Not Interested</button>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Application Tracker */}
    <div className="rounded-xl border border-border bg-card p-6">
      <h2 className="text-lg font-semibold text-card-foreground mb-5 flex items-center gap-2">
        <FileText className="h-5 w-5 text-accent" /> Application Tracker
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-2 text-muted-foreground font-medium">Role</th>
              <th className="text-left py-3 px-2 text-muted-foreground font-medium">Company</th>
              <th className="text-left py-3 px-2 text-muted-foreground font-medium">Applied</th>
              <th className="text-left py-3 px-2 text-muted-foreground font-medium">Status</th>
              <th className="text-left py-3 px-2 text-muted-foreground font-medium">Interview</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((a) => (
              <tr key={a.role} className="border-b border-border/50 hover:bg-muted/30">
                <td className="py-3 px-2 font-medium text-card-foreground">{a.role}</td>
                <td className="py-3 px-2 text-muted-foreground">{a.company}</td>
                <td className="py-3 px-2 text-muted-foreground">{a.date}</td>
                <td className="py-3 px-2"><StatusBadge variant={a.status} /></td>
                <td className="py-3 px-2 text-muted-foreground">{a.interview || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* Skill Gap Analysis */}
    <div className="rounded-xl border border-border bg-card p-6">
      <h2 className="text-lg font-semibold text-card-foreground mb-5 flex items-center gap-2">
        <TrendingUp className="h-5 w-5 text-accent" /> Skill Gap Analysis
      </h2>
      <div className="space-y-4">
        {skillGaps.map((g) => (
          <div key={g.skill} className="flex items-center justify-between rounded-lg border border-border p-4">
            <div>
              <div className="font-medium text-card-foreground">{g.skill}</div>
              <div className="text-sm text-muted-foreground">{g.suggestion}</div>
            </div>
            <span className={`text-xs font-semibold rounded-full px-3 py-1 ${g.priority === "High" ? "bg-destructive/10 text-destructive" : "bg-warning/10 text-warning"}`}>
              {g.priority}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default CandidateDashboard;
