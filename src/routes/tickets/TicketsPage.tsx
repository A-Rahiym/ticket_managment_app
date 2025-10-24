import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { TicketFilters } from "./components/TicketFilters";
import { TicketTable } from "./components/TicketTable";
import { TicketFormModal } from "./components/TicketFormModal";
import { DeleteConfirmation } from "./components/DeleteConfirmation";
import { useTickets } from "../../context/TicketContext";
import { Ticket } from "../../types/ticket";

export function TicketsPage() {
  const {
    tickets,
    handleCreateTicket,
    handleUpdateTicket,
    handleDeleteTicket,
  } = useTickets();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedTickets, setSelectedTickets] = useState<Set<string>>(
    new Set()
  );
  const [selectedRow, setSelectedRow] = useState<string | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingTicket, setEditingTicket] = useState<Ticket | null>(null);
  const [deletingTickets, setDeletingTickets] = useState<string[] | null>(null);

  const toggleTicketSelection = (id: string) => {
    const newSelection = new Set(selectedTickets);
    if (newSelection.has(id)) {
      newSelection.delete(id);
    } else {
      newSelection.add(id);
    }
    setSelectedTickets(newSelection);
  };

  const toggleAllTickets = () => {
    if (selectedTickets.size === filteredTickets.length) {
      setSelectedTickets(new Set());
    } else {
      setSelectedTickets(new Set(filteredTickets.map((t) => t.id)));
    }
  };

  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.assignee.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || ticket.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleCreateSubmit = (data: Omit<Ticket, "id" | "createdAt">) => {
    handleCreateTicket({
      ...data,
      createdAt: new Date().toISOString(),
    });
  };

  const handleUpdateSubmit = (data: Omit<Ticket, "id" | "createdAt">) => {
    if (editingTicket) {
      handleUpdateTicket(editingTicket.id, {
        ...data,
        createdAt: editingTicket.createdAt,
      });
      setEditingTicket(null);
    }
  };

  const handleDelete = () => {
    if (deletingTickets) {
      try {
        deletingTickets.forEach((id) => handleDeleteTicket(id));
        setDeletingTickets(null);
        setSelectedTickets(new Set());
      } catch (error) {
        toast.error("Failed to delete ticket(s). Please try again.");
      }
    }
  };

  const handleBulkDelete = () => {
    setDeletingTickets(Array.from(selectedTickets));
  };

  return (
    <div className="min-h-screen px-6 py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background -z-10" />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          <div>
            <h2
              className="mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-3xl font-semibold"
              id="tickets-heading"
            >
              Tickets
            </h2>
            <p className="text-muted-foreground">
              Manage and track all support tickets
            </p>
          </div>
          <div className="flex gap-4">
            {selectedTickets.size > 0 && (
              <Button
                variant="destructive"
                className="rounded-full border-2 border-red-500 shadow-md shadow-red-500/20"
                onClick={handleBulkDelete}
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete Selected ({selectedTickets.size})
              </Button>
            )}
            <Button
              onClick={() => setIsCreateModalOpen(true)}
              className="rounded-full bg-purple-600 hover:bg-purple-700 
             text-white font-semibold border-2 border-purple-400 
             shadow-lg shadow-purple-400/40 transition-all duration-300 
             hover:scale-105"
            >
              <Plus className="w-4 h-4 mr-2" />
              New Ticket
            </Button>
          </div>
        </div>

        <TicketFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
        />

        <div role="region" aria-labelledby="tickets-heading">
          <TicketTable
            tickets={filteredTickets}
            selectedTickets={selectedTickets}
            selectedRow={selectedRow}
            onToggleAll={toggleAllTickets}
            onToggleTicket={toggleTicketSelection}
            onRowClick={setSelectedRow}
            onEdit={setEditingTicket}
            onDelete={(id) => setDeletingTickets([id])}
          />
        </div>

        <TicketFormModal
          open={isCreateModalOpen}
          onOpenChange={setIsCreateModalOpen}
          ticket={null}
          onSubmit={handleCreateSubmit}
        />

        <TicketFormModal
          open={!!editingTicket}
          onOpenChange={(open) => !open && setEditingTicket(null)}
          ticket={editingTicket}
          onSubmit={handleUpdateSubmit}
        />

        <DeleteConfirmation
          open={!!deletingTickets}
          onOpenChange={(open) => !open && setDeletingTickets(null)}
          onConfirm={handleDelete}
        />
      </div>
    </div>
  );
}
