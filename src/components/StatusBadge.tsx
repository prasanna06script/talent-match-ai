import { cn } from "@/lib/utils";

type BadgeVariant = "shortlisted" | "rejected" | "interview" | "talentPool" | "applied" | "hired";

const variantStyles: Record<BadgeVariant, string> = {
  shortlisted: "bg-info/10 text-info border-info/20",
  rejected: "bg-destructive/10 text-destructive border-destructive/20",
  interview: "bg-warning/10 text-warning border-warning/20",
  talentPool: "bg-accent/10 text-accent border-accent/20",
  applied: "bg-muted text-muted-foreground border-border",
  hired: "bg-success/10 text-success border-success/20",
};

const labels: Record<BadgeVariant, string> = {
  shortlisted: "Shortlisted",
  rejected: "Rejected",
  interview: "Interview Scheduled",
  talentPool: "Talent Pool",
  applied: "Applied",
  hired: "Hired",
};

export const StatusBadge = ({ variant }: { variant: BadgeVariant }) => (
  <span className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold", variantStyles[variant])}>
    {labels[variant]}
  </span>
);
