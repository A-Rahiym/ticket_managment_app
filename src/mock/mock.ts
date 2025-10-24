// Mock initial tickets with more realistic data
import { Ticket } from "../types/ticket";


export const initialTickets: Ticket[] = [
  {
    id: "1",
    title: "Fix login authentication bug",
    status: "open",
    description: "Users are experiencing issues logging in with valid credentials. Need to investigate the authentication flow and session management.",
    priority: "high",
    assignee: "Sarah Johnson",
    createdAt: "2025-01-15T10:30:00Z",
  },
  {
    id: "2",
    title: "Update dashboard UI components",
    status: "in_progress",
    description: "Modernize the dashboard interface with the new design system. Update colors, spacing, and component styles.",
    priority: "medium",
    assignee: "Michael Chen",
    createdAt: "2025-01-14T14:20:00Z",
  },
  {
    id: "3",
    title: "Add export functionality for reports",
    status: "closed",
    description: "Allow users to export ticket data to CSV and PDF formats. Include filters for date range and status.",
    priority: "low",
    assignee: "Emma Williams",
    createdAt: "2025-01-10T09:15:00Z",
  },
  {
    id: "4",
    title: "Implement real-time notifications",
    status: "in_progress",
    description: "Add WebSocket support for real-time ticket updates and notifications. Show toast messages for new tickets.",
    priority: "high",
    assignee: "David Martinez",
    createdAt: "2025-01-16T11:45:00Z",
  },
  {
    id: "5",
    title: "Optimize database queries",
    status: "open",
    description: "Improve performance of ticket listing and search queries. Add proper indexing and caching.",
    priority: "medium",
    assignee: "Lisa Anderson",
    createdAt: "2025-01-17T08:00:00Z",
  },
];
