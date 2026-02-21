import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Brain, User, Briefcase, Eye, EyeOff } from "lucide-react";

const Register = () => {
  const [searchParams] = useSearchParams();
  const [role, setRole] = useState<string>(searchParams.get("role") || "");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 gradient-hero items-center justify-center p-12">
        <div className="max-w-md text-center">
          <Brain className="h-16 w-16 text-accent mx-auto mb-8" />
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Join AI Recruiter Pro</h2>
          <p className="text-primary-foreground/60 text-lg">
            Start your journey towards smarter, AI-powered hiring today.
          </p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <Brain className="h-7 w-7 text-accent" />
            <span className="text-lg font-bold text-foreground">AI Recruiter Pro</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Create your account</h1>
          <p className="text-muted-foreground mb-8">Choose your role and get started</p>

          {/* Role Selection */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button
              onClick={() => setRole("candidate")}
              className={`flex flex-col items-center gap-3 rounded-xl border-2 p-6 transition-all ${
                role === "candidate" ? "border-accent bg-accent/5" : "border-border hover:border-accent/30"
              }`}
            >
              <User className={`h-8 w-8 ${role === "candidate" ? "text-accent" : "text-muted-foreground"}`} />
              <span className={`font-semibold ${role === "candidate" ? "text-accent" : "text-foreground"}`}>Candidate</span>
              <span className="text-xs text-muted-foreground text-center">Find your dream role</span>
            </button>
            <button
              onClick={() => setRole("recruiter")}
              className={`flex flex-col items-center gap-3 rounded-xl border-2 p-6 transition-all ${
                role === "recruiter" ? "border-accent bg-accent/5" : "border-border hover:border-accent/30"
              }`}
            >
              <Briefcase className={`h-8 w-8 ${role === "recruiter" ? "text-accent" : "text-muted-foreground"}`} />
              <span className={`font-semibold ${role === "recruiter" ? "text-accent" : "text-foreground"}`}>Recruiter</span>
              <span className="text-xs text-muted-foreground text-center">Hire top talent</span>
            </button>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="you@company.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <Button className="w-full" size="lg" disabled={!role}>Create Account</Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Already have an account?{" "}
            <Link to="/login" className="text-accent font-medium hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
