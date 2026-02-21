import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import DashboardLayout from "./components/DashboardLayout";
import CandidateDashboard from "./pages/candidate/CandidateDashboard";
import RecruiterDashboard from "./pages/recruiter/RecruiterDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import NotFound from "./pages/NotFound";
import {
  LayoutDashboard, User, FileText, Target, Brain, TrendingUp, Bell, BookOpen,
  Users, Briefcase, CalendarCheck, GitCompare, FolderOpen,
  BarChart3, Settings, Database, Shield
} from "lucide-react";

const queryClient = new QueryClient();

const candidateNav = [
  { label: "Dashboard", href: "/candidate", icon: LayoutDashboard },
  { label: "My Profile", href: "/candidate/profile", icon: User },
  { label: "ATS Score", href: "/candidate/ats", icon: Brain },
  { label: "Assessments", href: "/candidate/assessments", icon: BookOpen },
  { label: "Role Matching", href: "/candidate/matching", icon: Target },
  { label: "Applications", href: "/candidate/applications", icon: FileText },
  { label: "Skill Gaps", href: "/candidate/skills", icon: TrendingUp },
  { label: "Notifications", href: "/candidate/notifications", icon: Bell },
];

const recruiterNav = [
  { label: "Dashboard", href: "/recruiter", icon: LayoutDashboard },
  { label: "Job Postings", href: "/recruiter/jobs", icon: Briefcase },
  { label: "Candidates", href: "/recruiter/candidates", icon: Users },
  { label: "Compare", href: "/recruiter/compare", icon: GitCompare },
  { label: "Interviews", href: "/recruiter/interviews", icon: CalendarCheck },
  { label: "Talent Pool", href: "/recruiter/talent-pool", icon: FolderOpen },
];

const adminNav = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { label: "Role Database", href: "/admin/roles", icon: Database },
  { label: "Users", href: "/admin/users", icon: Users },
  { label: "Settings", href: "/admin/settings", icon: Settings },
  { label: "Security", href: "/admin/security", icon: Shield },
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Candidate */}
          <Route element={<DashboardLayout navItems={candidateNav} role="candidate" userName="John Doe" />}>
            <Route path="/candidate" element={<CandidateDashboard />} />
            <Route path="/candidate/:page" element={<CandidateDashboard />} />
          </Route>

          {/* Recruiter */}
          <Route element={<DashboardLayout navItems={recruiterNav} role="recruiter" userName="Jane Smith" />}>
            <Route path="/recruiter" element={<RecruiterDashboard />} />
            <Route path="/recruiter/:page" element={<RecruiterDashboard />} />
          </Route>

          {/* Admin */}
          <Route element={<DashboardLayout navItems={adminNav} role="admin" userName="Admin User" />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/:page" element={<AdminDashboard />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
