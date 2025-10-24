import { Ticket } from "../types/ticket";

export const mockLogin = async (email: string, password: string) => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API delay
  if (email === "test@example.com" && password === "password123") {
    return {
      token: "mock-token-123",
      user: { email, name: "Test User" },
    };
  }
  throw new Error("Invalid credentials");
};


export const mockSignup = async (email: string, password: string, name: string) => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API delay
  if (email && password.length >= 6 && name) {
    return {
      token: "mock-token-" + Math.random().toString(36).substring(2),
      user: { email, name },
    };
  }
  throw new Error("Invalid signup data");
};


export const createTicket = async (ticket: Omit<Ticket, "id">): Promise<Ticket> => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API delay
  const newTicket: Ticket = {
    ...ticket,
    id: Date.now().toString(),
  };
  return newTicket;
};

export const updateTicket = async (id: string, ticket: Omit<Ticket, "id">): Promise<Ticket> => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API delay
  return { ...ticket, id };
};

export const deleteTicket = async (id: string): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API delay
};