export interface Ticket {
  id: string;
  title: string;
  status: "open" | "in_progress" | "closed";
  description: string;
  priority: "low" | "medium" | "high";
  assignee: string;
  createdAt: string;
}