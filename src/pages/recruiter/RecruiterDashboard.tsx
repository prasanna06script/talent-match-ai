import { Users, CheckCircle, XCircle, CalendarCheck, Briefcase, Filter, ArrowUpDown, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/StatusBadge";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const funnelData = [
  { stage: "Applied", count: 245 },
  { stage: "Screened", count: 180 },
  { stage: "Shortlisted", count: 78 },
  { stage: "Interview", count: 45 },
  { stage: "Offer", count: 18 },
  { stage: "Hired", count: 12 },
];

const deptData = [
  { name: "Engineering", value: 42 },
  { name: "Design", value: 18 },
  { name: "Marketing", value: 15 },
  { name: "Sales", value: 25 },
];

const COLORS = ["hsl(210,100%,52%)", "hsl(142,71%,45%)", "hsl(38,92%,50%)", "hsl(217,71%,20%)"];

const candidates = [
  { name: "Sarah Johnson", role: "Senior Frontend Dev", ats: 94, skills: ["React", "TypeScript", "Node.js"], exp: "6 years", status: "shortlisted" as const },
  { name: "Michael Chen", role: "Full Stack Engineer", ats: 87, skills: ["Python", "React", "AWS"], exp: "4 years", status: "interview" as const },
  { name: "Emily Davis", role: "UI/UX Engineer", ats: 72, skills: ["Figma", "React", "CSS"], exp: "3 years", status: "applied" as const },
  { name: "James Wilson", role: "DevOps Engineer", ats: 65, skills: ["Docker", "K8s", "Terraform"], exp: "5 years", status: "rejected" as const },
  { name: "Lisa Park", role: "Backend Developer", ats: 91, skills: ["Java", "Spring", "PostgreSQL"], exp: "7 years", status: "shortlisted" as const },
];

const RecruiterDashboard = () => (
  <div className="space-y-6">
    {/* Stats */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {[
        { label: "Total Applicants", value: "245", icon: Users, color: "text-accent" },
        { label: "Shortlisted", value: "78", icon: CheckCircle, color: "text-success" },
        { label: "Rejected", value: "52", icon: XCircle, color: "text-destructive" },
        { label: "Interviews", value: "45", icon: CalendarCheck, color: "text-warning" },
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

    {/* Charts */}
    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-card-foreground mb-5">Hiring Funnel</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={funnelData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(214,32%,91%)" />
            <XAxis dataKey="stage" tick={{ fontSize: 12, fill: "hsl(215,16%,47%)" }} />
            <YAxis tick={{ fontSize: 12, fill: "hsl(215,16%,47%)" }} />
            <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid hsl(214,32%,91%)", fontSize: 13 }} />
            <Bar dataKey="count" fill="hsl(210,100%,52%)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="rounded-xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-card-foreground mb-5">By Department</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={deptData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={5} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
              {deptData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>

    {/* Job Postings */}
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-card-foreground flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-accent" /> Active Job Postings
        </h2>
        <Button size="sm"><Plus className="h-4 w-4 mr-1" /> New Job</Button>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { title: "Senior Frontend Developer", dept: "Engineering", applicants: 42, days: 5 },
          { title: "Product Designer", dept: "Design", applicants: 28, days: 12 },
          { title: "DevOps Engineer", dept: "Engineering", applicants: 19, days: 3 },
        ].map((j) => (
          <div key={j.title} className="rounded-lg border border-border p-4 hover:border-accent/30 transition-colors">
            <h3 className="font-semibold text-card-foreground mb-1">{j.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{j.dept} · Posted {j.days}d ago</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{j.applicants} applicants</span>
              <Button variant="ghost" size="sm" className="text-accent">View</Button>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Candidate Table */}
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-card-foreground flex items-center gap-2">
          <Users className="h-5 w-5 text-accent" /> Candidate Management
        </h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm"><Filter className="h-4 w-4 mr-1" /> Filter</Button>
          <Button variant="outline" size="sm"><ArrowUpDown className="h-4 w-4 mr-1" /> Sort</Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-2 text-muted-foreground font-medium">Candidate</th>
              <th className="text-left py-3 px-2 text-muted-foreground font-medium">Applied For</th>
              <th className="text-left py-3 px-2 text-muted-foreground font-medium">ATS Score</th>
              <th className="text-left py-3 px-2 text-muted-foreground font-medium">Skills</th>
              <th className="text-left py-3 px-2 text-muted-foreground font-medium">Experience</th>
              <th className="text-left py-3 px-2 text-muted-foreground font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((c) => (
              <tr key={c.name} className="border-b border-border/50 hover:bg-muted/30 cursor-pointer">
                <td className="py-3 px-2">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full gradient-accent flex items-center justify-center text-accent-foreground text-xs font-bold">
                      {c.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <span className="font-medium text-card-foreground">{c.name}</span>
                  </div>
                </td>
                <td className="py-3 px-2 text-muted-foreground">{c.role}</td>
                <td className="py-3 px-2">
                  <div className="flex items-center gap-2">
                    <Progress value={c.ats} className="w-16 h-1.5" />
                    <span className="font-semibold text-card-foreground">{c.ats}</span>
                  </div>
                </td>
                <td className="py-3 px-2">
                  <div className="flex flex-wrap gap-1">
                    {c.skills.map((s) => (
                      <span key={s} className="text-xs rounded bg-muted px-2 py-0.5 text-muted-foreground">{s}</span>
                    ))}
                  </div>
                </td>
                <td className="py-3 px-2 text-muted-foreground">{c.exp}</td>
                <td className="py-3 px-2"><StatusBadge variant={c.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default RecruiterDashboard;
