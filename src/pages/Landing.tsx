import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, Target, Zap, CalendarCheck, TrendingUp, Upload, Search, CheckCircle, Users, ArrowRight, Shield, Mail, MapPin, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  { icon: Brain, title: "ATS Scoring", desc: "AI-powered resume analysis with intelligent scoring against job requirements for precise candidate evaluation." },
  { icon: Zap, title: "Rapid Skill Assessment", desc: "Automated skill testing with AI-generated questions, timed assessments, and confidence scoring." },
  { icon: Target, title: "Smart Role Discovery", desc: "Match candidates to ideal roles using deep skill analysis and compatibility algorithms." },
  { icon: CalendarCheck, title: "Interview Automation", desc: "Streamlined scheduling, automated notifications, and structured interview workflows." },
  { icon: TrendingUp, title: "Skill Gap Analysis", desc: "Identify missing skills, suggest certifications, and create personalized improvement roadmaps." },
  { icon: Shield, title: "Bias-Free Evaluation", desc: "Ensure fair, unbiased hiring with anonymized assessments and standardized scoring criteria." },
];

const steps = [
  { num: "01", title: "Upload Resume", desc: "Candidates upload their resume for AI-powered parsing and analysis.", icon: Upload },
  { num: "02", title: "ATS Scoring", desc: "Our AI scores resumes against job requirements automatically.", icon: Brain },
  { num: "03", title: "Skill Assessment", desc: "Qualified candidates take rapid AI-generated skill assessments.", icon: Search },
  { num: "04", title: "Role Matching", desc: "Smart algorithms match candidates to their ideal positions.", icon: Target },
  { num: "05", title: "Interview & Hire", desc: "Schedule interviews and make data-driven hiring decisions.", icon: CheckCircle },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-2">
            <Brain className="h-7 w-7 text-accent" />
            <span className="text-lg font-bold text-foreground">AI Recruiter Pro</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/login"><Button variant="ghost" size="sm">Log In</Button></Link>
            <Link to="/register"><Button size="sm">Get Started</Button></Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-16 overflow-hidden">
        <div className="gradient-hero min-h-[600px] flex items-center relative">
          <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-lighten" />
          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-sm text-accent-foreground/80 mb-6">
                <Zap className="h-4 w-4" /> Powered by Advanced AI
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                AI-Powered Intelligent Recruitment & Talent Matching
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl">
                Automate ATS scoring, rapid skill assessments, smart role discovery, and interview scheduling. 
                Hire smarter, faster, and fairer with AI Recruiter Pro.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/register?role=candidate">
                  <Button variant="hero" size="lg" className="text-base px-8">
                    Apply as Candidate <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/register?role=recruiter">
                  <Button variant="heroOutline" size="lg" className="text-base px-8">
                    Post a Job
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-8 mt-12 text-primary-foreground/60 text-sm">
                <div className="flex items-center gap-2"><Users className="h-4 w-4" /> 10,000+ Candidates</div>
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> 500+ Companies</div>
                <div className="flex items-center gap-2"><TrendingUp className="h-4 w-4" /> 95% Match Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Powerful Hiring Features</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to streamline your recruitment pipeline with AI intelligence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="group rounded-xl border border-border bg-card p-8 hover:shadow-lg hover:border-accent/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-5">
                  <f.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From resume upload to final hire — a seamless, AI-driven workflow.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <div key={s.num} className="relative text-center group">
                <div className="w-16 h-16 mx-auto rounded-full gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <s.icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <div className="text-xs font-bold text-accent mb-2">STEP {s.num}</div>
                <h4 className="font-semibold text-foreground mb-2">{s.title}</h4>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-accent/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Workflow */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">AI Automation Workflow</h2>
          </div>
          <div className="max-w-4xl mx-auto rounded-2xl gradient-hero p-10">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-primary-foreground">
              {["Resume Upload", "ATS Scoring", "Score ≥ Threshold?"].map((t, i) => (
                <div key={t} className="flex items-center gap-4">
                  <div className="glass-card rounded-lg px-5 py-3 text-center font-medium">{t}</div>
                  {i < 2 && <ArrowRight className="h-5 w-5 text-primary-foreground/50 shrink-0" />}
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="glass-card rounded-xl p-6">
                <div className="text-success font-semibold mb-3 flex items-center gap-2"><CheckCircle className="h-5 w-5" /> Score ≥ Threshold</div>
                <div className="flex items-center gap-3 text-primary-foreground/80 text-sm">
                  <span className="bg-accent/30 rounded px-3 py-1">Rapid Assessment</span>
                  <ArrowRight className="h-4 w-4" />
                  <span className="bg-accent/30 rounded px-3 py-1">Interview Scheduling</span>
                </div>
              </div>
              <div className="glass-card rounded-xl p-6">
                <div className="text-warning font-semibold mb-3 flex items-center gap-2"><TrendingUp className="h-5 w-5" /> Score &lt; Threshold</div>
                <div className="flex items-center gap-3 text-primary-foreground/80 text-sm">
                  <span className="bg-accent/30 rounded px-3 py-1">Skill Gap Analysis</span>
                  <ArrowRight className="h-4 w-4" />
                  <span className="bg-accent/30 rounded px-3 py-1">Talent Pool</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Frequently Asked Questions</h2>
          {[
            { q: "How does ATS scoring work?", a: "Our AI analyzes resumes against job requirements, evaluating skills, experience, education, and keyword relevance to generate a comprehensive score from 0–100." },
            { q: "Is the evaluation process bias-free?", a: "Yes. Our bias-free mode anonymizes candidate data during evaluation, ensuring fair assessment based purely on qualifications and skills." },
            { q: "How does role matching work?", a: "Our algorithm compares candidate profiles against all available positions, calculating compatibility scores based on skills, experience level, and career trajectory." },
            { q: "Is my data secure?", a: "Absolutely. We use enterprise-grade encryption and comply with GDPR and data privacy regulations to protect all candidate and company data." },
          ].map((item) => (
            <div key={item.q} className="border-b border-border py-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.q}</h3>
              <p className="text-muted-foreground">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-hero py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-10 text-primary-foreground/70">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Brain className="h-6 w-6 text-accent" />
                <span className="font-bold text-primary-foreground text-lg">AI Recruiter Pro</span>
              </div>
              <p className="text-sm leading-relaxed">Intelligent hiring automation system powered by advanced AI for smarter, faster, fairer recruitment.</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary-foreground mb-4">Platform</h4>
              <div className="space-y-2 text-sm">
                <div>Features</div><div>Pricing</div><div>Enterprise</div><div>API</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-primary-foreground mb-4">Legal</h4>
              <div className="space-y-2 text-sm">
                <div>Privacy Policy</div><div>Terms of Service</div><div>Cookie Policy</div><div>GDPR</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-primary-foreground mb-4">Contact</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> support@airecruiter.pro</div>
                <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 123-4567</div>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> San Francisco, CA</div>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-primary-foreground/40 text-sm">
            © 2026 AI Recruiter Pro. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
