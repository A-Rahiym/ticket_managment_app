import { createContext, useContext, useState } from "react";
import { toast } from "sonner";
import { Ticket } from "../types/ticket";
import { createTicket, updateTicket, deleteTicket } from "../mock/mockApi";
import { initialTickets } from "@/mock/mock";


interface TicketContextType {
  tickets: Ticket[];
  handleCreateTicket: (ticket: Omit<Ticket, "id">) => Promise<void>;
  handleUpdateTicket: (id: string, ticket: Omit<Ticket, "id">) => Promise<void>;
  handleDeleteTicket: (id: string) => Promise<void>;
}

const TicketContext = createContext<TicketContextType | undefined>(undefined);

export const useTickets = () => {
  const context = useContext(TicketContext);
  if (!context) {
    throw new Error("useTickets must be used within a TicketProvider");
  }
  return context;
};

interface TicketProviderProps {
  children: React.ReactNode;
}

export function TicketProvider({ children }: TicketProviderProps) {
  const [tickets, setTickets] = useState<Ticket[]>(initialTickets);
  const handleCreateTicket = async (ticket: Omit<Ticket, "id">) => {
    try {
      const newTicket = await createTicket(ticket);
      setTickets([newTicket, ...tickets]);
      toast.success("Ticket created successfully!");
    } catch (error) {
      toast.error("Failed to create ticket. Please retry.");
      throw error;
    }
  };

  const handleUpdateTicket = async (id: string, updatedTicket: Omit<Ticket, "id">) => {
    try {
      await updateTicket(id, updatedTicket);
      setTickets(
        tickets.map((ticket) =>
          ticket.id === id ? { ...updatedTicket, id } : ticket
        )
      );
      toast.success("Ticket updated successfully!");
    } catch (error) {
      toast.error("Failed to update ticket. Please retry.");
      throw error;
    }
  };

  const handleDeleteTicket = async (id: string) => {
    try {
      await deleteTicket(id);
      setTickets(tickets.filter((ticket) => ticket.id !== id));
      toast.success("Ticket deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete ticket. Please retry.");
      throw error;
    }
  };

return (
    <TicketContext.Provider
      value={{ tickets, handleCreateTicket, handleUpdateTicket, handleDeleteTicket }}>
      {children}
    </TicketContext.Provider>
  );
}