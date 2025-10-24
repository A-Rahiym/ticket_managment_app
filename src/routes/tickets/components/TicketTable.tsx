import { Ticket } from "../../../types/ticket";
import { Checkbox } from "../../../components/ui/checkbox";
import { TicketRow } from "./TicketRow";

interface TicketTableProps {
  tickets: Ticket[];
  selectedTickets: Set<string>;
  selectedRow: string | null;
  onToggleAll: () => void;
  onToggleTicket: (id: string) => void;
  onRowClick: (id: string) => void;
  onEdit: (ticket: Ticket) => void;
  onDelete: (id: string) => void;
}

export function TicketTable({
  tickets,
  selectedTickets,
  selectedRow,
  onToggleAll,
  onToggleTicket,
  onRowClick,
  onEdit,
  onDelete,
}: TicketTableProps) {
  if (tickets.length === 0) {
    return (
      <div className="bg-card rounded-2xl border border-border/50 shadow-sm overflow-hidden">
        <div className="p-12 text-center">
          <p className="text-muted-foreground">No tickets found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl border border-border/50 shadow-sm">
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-border/50">
            <tr>
              <th className="text-left p-4 w-12">
                <Checkbox
                  checked={selectedTickets.size === tickets.length}
                  onCheckedChange={onToggleAll}
                  aria-label="Select all tickets"
                />
              </th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                Title
              </th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                Assignee
              </th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                Status
              </th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                Priority
              </th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                Created
              </th>
              <th className="text-left p-4 w-12"></th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <TicketRow
                key={ticket.id}
                ticket={ticket}
                isSelected={selectedTickets.has(ticket.id)}
                isRowSelected={selectedRow === ticket.id}
                onToggleSelection={() => onToggleTicket(ticket.id)}
                onEdit={() => onEdit(ticket)}
                onDelete={() => onDelete(ticket.id)}
                onRowClick={() => onRowClick(ticket.id)}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="block md:hidden p-4 flex flex-col gap-4">
        {tickets.map((ticket) => (
          <TicketRow
            key={ticket.id}
            ticket={ticket}
            isSelected={selectedTickets.has(ticket.id)}
            isRowSelected={selectedRow === ticket.id}
            onToggleSelection={() => onToggleTicket(ticket.id)}
            onEdit={() => onEdit(ticket)}
            onDelete={() => onDelete(ticket.id)}
            onRowClick={() => onRowClick(ticket.id)}
          />
        ))}
      </div>
    </div>
  );
}