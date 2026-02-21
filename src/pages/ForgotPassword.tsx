import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Brain, ArrowLeft } from "lucide-react";

const ForgotPassword = () => (
  <div className="min-h-screen flex items-center justify-center bg-background p-8">
    <div className="w-full max-w-md">
      <div className="flex items-center gap-2 mb-8">
        <Brain className="h-7 w-7 text-accent" />
        <span className="text-lg font-bold text-foreground">AI Recruiter Pro</span>
      </div>
      <h1 className="text-2xl font-bold text-foreground mb-2">Reset your password</h1>
      <p className="text-muted-foreground mb-8">Enter your email and we'll send you a reset link.</p>
      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="you@company.com" />
        </div>
        <Button className="w-full" size="lg">Send Reset Link</Button>
      </form>
      <Link to="/login" className="flex items-center gap-2 text-sm text-accent hover:underline mt-6 justify-center">
        <ArrowLeft className="h-4 w-4" /> Back to sign in
      </Link>
    </div>
  </div>
);

export default ForgotPassword;
