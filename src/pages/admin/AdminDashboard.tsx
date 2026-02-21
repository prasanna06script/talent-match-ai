import { Users, Briefcase, User, BarChart3, Settings, Brain, Shield, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const skillDemand = [
  { skill: "React", count: 89 },
  { skill: "Python", count: 76 },
  { skill: "TypeScript", count: 72 },
  { skill: "AWS", count: 58 },
  { skill: "Node.js", count: 54 },
  { skill: "SQL", count: 48 },
];

const roles = [
  { title: "Senior Frontend Developer", dept: "Engineering", skills: ["React", "TypeScript"], exp: "5+ years" },
  { title: "Data Scientist", dept: "Data", skills: ["Python", "ML", "SQL"], exp: "3+ years" },
  { title: "DevOps Engineer", dept: "Engineering", skills: ["Docker", "K8s", "AWS"], exp: "4+ years" },
  { title: "Product Designer", dept: "Design", skills: ["Figma", "UX Research"], exp: "3+ years" },
];

const AdminDashboard = () => (
  <div className="space-y-6">
    {/* Stats */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {[
        { label: "Total Users", value: "1,247", icon: Users, color: "text-accent" },
        { label: "Recruiters", value: "86", icon: Briefcase, color: "text-success" },
        { label: "Candidates", value: "1,161", icon: User, color: "text-info" },
        { label: "Avg ATS Score", value: "74", icon: Brain, color: "text-warning" },
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

    {/* Most Demanded Skills */}
    <div className="rounded-xl border border-border bg-card p-6">
      <h2 className="text-lg font-semibold text-card-foreground mb-5 flex items-center gap-2">
        <TrendingUp className="h-5 w-5 text-accent" /> Most Demanded Skills
      </h2>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={skillDemand} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(214,32%,91%)" />
          <XAxis type="number" tick={{ fontSize: 12, fill: "hsl(215,16%,47%)" }} />
          <YAxis type="category" dataKey="skill" tick={{ fontSize: 12, fill: "hsl(215,16%,47%)" }} width={80} />
          <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid hsl(214,32%,91%)", fontSize: 13 }} />
          <Bar dataKey="count" fill="hsl(210,100%,52%)" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>

    {/* Role Database & System Settings */}
    <div className="grid md:grid-cols-2 gap-6">
      {/* Role Database */}
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-semibold text-card-foreground flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-accent" /> Role Database
          </h2>
          <Button size="sm">Add Role</Button>
        </div>
        <div className="space-y-3">
          {roles.map((r) => (
            <div key={r.title} className="rounded-lg border border-border p-4 hover:border-accent/30 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-card-foreground text-sm">{r.title}</h3>
                <span className="text-xs text-muted-foreground">{r.dept}</span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {r.skills.map((s) => (
                  <span key={s} className="text-xs rounded bg-muted px-2 py-0.5 text-muted-foreground">{s}</span>
                ))}
                <span className="text-xs text-muted-foreground ml-auto">{r.exp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* System Settings */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-card-foreground mb-5 flex items-center gap-2">
          <Settings className="h-5 w-5 text-accent" /> System Settings
        </h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label>ATS Threshold Score</Label>
            <div className="flex items-center gap-4">
              <Input type="number" defaultValue={70} className="w-24" />
              <span className="text-sm text-muted-foreground">Minimum score for auto-shortlisting</span>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Rapid Assessment Threshold</Label>
            <div className="flex items-center gap-4">
              <Input type="number" defaultValue={60} className="w-24" />
              <span className="text-sm text-muted-foreground">Minimum assessment score to proceed</span>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-border p-4">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-accent" />
              <div>
                <div className="font-medium text-card-foreground text-sm">Bias-Free Evaluation Mode</div>
                <div className="text-xs text-muted-foreground">Anonymize candidate data during evaluation</div>
              </div>
            </div>
            <Switch defaultChecked />
          </div>
          <Button className="w-full">Save Settings</Button>
        </div>
      </div>
    </div>
  </div>
);

export default AdminDashboard;
