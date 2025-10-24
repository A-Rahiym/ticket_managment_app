import { Input } from "../../../components/ui/input";
import { Search } from "lucide-react";

interface TicketFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  statusFilter: string;
  onStatusFilterChange: (value: string) => void;
}

export function TicketFilters({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
}: TicketFiltersProps) {
  return (
    <div className="bg-card rounded-2xl border border-border/50 shadow-sm mb-6">
      <div className="p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search tickets..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 h-10 rounded-xl"
            />
          </div>
          
          <div className="flex gap-2 bg-secondary/50 p-1 rounded-xl">
            <button
              onClick={() => onStatusFilterChange("all")}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                statusFilter === "all"
                  ? "bg-card shadow-sm font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              All
            </button>
            <button
              onClick={() => onStatusFilterChange("open")}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                statusFilter === "open"
                  ? "bg-card shadow-sm font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Open
            </button>
            <button
              onClick={() => onStatusFilterChange("in_progress")}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                statusFilter === "in_progress"
                  ? "bg-card shadow-sm font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              In Progress
            </button>
            <button
              onClick={() => onStatusFilterChange("closed")}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                statusFilter === "closed"
                  ? "bg-card shadow-sm font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Closed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
