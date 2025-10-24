import { Ticket } from "../../../types/ticket";
import { Checkbox } from "../../../components/ui/checkbox";
import { Button } from "../../../components/ui/button";
import { Avatar, AvatarFallback } from "../../../components/ui/avatar";
import { Badge } from "../../../components/ui/badge";
import { Edit2, Trash2 } from "lucide-react";

interface TicketRowProps {
  ticket: Ticket;
  isSelected: boolean;
  isRowSelected: boolean;
  onToggleSelection: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onRowClick: () => void;
}

export function TicketRow({
  ticket,
  isSelected,
  isRowSelected,
  onToggleSelection,
  onEdit,
  onDelete,
  onRowClick,
}: TicketRowProps) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "open":
        return (
          <Badge className="rounded-full bg-green-100 text-green-700 hover:bg-green-100 border-green-200">
            Open
          </Badge>
        );
      case "in_progress":
        return (
          <Badge className="rounded-full bg-amber-100 text-amber-700 hover:bg-amber-100 border-amber-200">
            In Progress
          </Badge>
        );
      case "closed":
        return (
          <Badge className="rounded-full bg-gray-100 text-gray-700 hover:bg-gray-100 border-gray-200">
            Resolved
          </Badge>
        );
      default:
        return null;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return (
          <Badge variant="outline" className="rounded-full border-red-300 text-red-700 bg-red-50">
            High
          </Badge>
        );
      case "medium":
        return (
          <Badge variant="outline" className="rounded-full border-primary/30 text-primary bg-primary/5">
            Medium
          </Badge>
        );
      case "low":
        return (
          <Badge variant="outline" className="rounded-full border-blue-300 text-blue-700 bg-blue-50">
            Low
          </Badge>
        );
      default:
        return null;
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <>
      {/* Desktop Table Row */}
      <tr
        className={`hidden md:table-row border-b border-border/30 transition-colors ${
          isRowSelected ? "bg-primary/10" : "hover:bg-muted/50"
        }`}
        onClick={onRowClick}
        role="row"
      >
        <td className="p-4">
          <Checkbox
            checked={isSelected}
            onCheckedChange={onToggleSelection}
            onClick={(e) => e.stopPropagation()}
            aria-label={`Select ticket ${ticket.title}`}
          />
        </td>
        <td className="p-4">
          <div>
            <p className="font-medium">{ticket.title}</p>
            {ticket.description && (
              <p className="text-sm text-muted-foreground line-clamp-1 mt-1">
                {ticket.description}
              </p>
            )}
          </div>
        </td>
        <td className="p-4">
          <div className="flex items-center gap-2">
            <Avatar className="w-8 h-8">
              <AvatarFallback className="bg-primary/10 text-primary text-xs">
                {getInitials(ticket.assignee)}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm">{ticket.assignee}</span>
          </div>
        </td>
        <td className="p-4">{getStatusBadge(ticket.status)}</td>
        <td className="p-4">{getPriorityBadge(ticket.priority)}</td>
        <td className="p-4 text-sm text-muted-foreground">
          {new Date(ticket.createdAt).toLocaleDateString()}
        </td>
        <td className="p-4">
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-xl gradient-purple-pink border-2 border-[hsl(var(--neon-green))] shadow-md shadow-[hsl(var(--neon-green))]/20"
              onClick={(e) => {
                e.stopPropagation();
                onEdit();
              }}
              aria-label={`Edit ticket ${ticket.title}`}
            >
              <Edit2 className="h-4 w-4" />
            </Button>
            <Button
              variant="destructive"
              size="icon"
              className="h-8 w-8 rounded-xl border-2 border-red-500 shadow-md shadow-red-500/20"
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
              aria-label={`Delete ticket ${ticket.title}`}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </td>
      </tr>

      {/* Mobile Card */}
      <div
        className={`block md:hidden border border-border/50 rounded-lg shadow-sm bg-card p-4 mb-4 transition-colors ${
          isRowSelected ? "bg-primary/10" : "hover:bg-muted/50"
        } animate-in fade-in`}
        onClick={onRowClick}
        role="group"
        aria-labelledby={`ticket-${ticket.id}-title`}
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <Checkbox
              checked={isSelected}
              onCheckedChange={onToggleSelection}
              onClick={(e) => e.stopPropagation()}
              aria-label={`Select ticket ${ticket.title}`}
            />
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 rounded-lg gradient-purple-pink border-2 border-[hsl(var(--neon-green))] shadow-md shadow-[hsl(var(--neon-green))]/20"
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit();
                }}
                aria-label={`Edit ticket ${ticket.title}`}
              >
                <Edit2 className="h-3 w-3" />
              </Button>
              <Button
                variant="destructive"
                size="icon"
                className="h-7 w-7 rounded-lg border-2 border-red-500 shadow-md shadow-red-500/20"
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete();
                }}
                aria-label={`Delete ticket ${ticket.title}`}
              >
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
          </div>
          <div>
            <p id={`ticket-${ticket.id}-title`} className="font-medium text-sm">
              {ticket.title}
            </p>
            {ticket.description && (
              <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                {ticket.description}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Avatar className="w-6 h-6">
              <AvatarFallback className="bg-primary/10 text-primary text-xs">
                {getInitials(ticket.assignee)}
              </AvatarFallback>
            </Avatar>
            <span className="text-xs">{ticket.assignee}</span>
          </div>
          <div className="flex gap-2">
            {getStatusBadge(ticket.status)}
            {getPriorityBadge(ticket.priority)}
          </div>
          <p className="text-xs text-muted-foreground">
            Created: {new Date(ticket.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </>
  );
}