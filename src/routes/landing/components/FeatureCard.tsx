import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

export function FeatureCard({ icon: Icon, title, description, gradient }: FeatureCardProps) {
  return (
    <div className="group p-8 bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className={`w-14 h-14 rounded-xl ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
