import { Ticket, AlertCircle, Clock, CheckCircle2 } from "lucide-react";
import { Badge } from "../../../components/ui/badge";
interface StatsCardProps {
  icon: typeof Ticket | typeof AlertCircle | typeof Clock | typeof CheckCircle2;
  label: string;
  value: number;
  bgColor: string;
  borderColor: string;
  hoverBorderColor: string;
  badgeColor: string;
  textColor: string;
}

export function StatsCard({ icon: Icon, label, value, bgColor, borderColor, hoverBorderColor, badgeColor, textColor }: StatsCardProps) {
  return (
    <div className={`bg-card rounded-2xl p-6 border ${borderColor} shadow-sm hover:shadow-lg ${hoverBorderColor} transition-all`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`w-10 h-10 rounded-xl ${bgColor} flex items-center justify-center`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <Badge className={`rounded-full ${badgeColor}`}>
          {label}
        </Badge>
      </div>
      <div className="space-y-1">
        <p className={`text-3xl font-bold ${textColor}`}>
          {value}
        </p>
        <p className="text-sm text-muted-foreground">
          {label === "Total" ? "Total Tickets" : label === "Open" ? "Open Tickets" : label === "Active" ? "In Progress" : "Resolved"}
        </p>
      </div>
    </div>
  );
}
