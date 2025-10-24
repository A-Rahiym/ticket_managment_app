import { Ticket } from "lucide-react";

interface AuthHeaderProps {
  mode: "login" | "signup";
}

export function AuthHeader({ mode }: AuthHeaderProps) {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-purple-pink mb-6">
        <Ticket className="w-8 h-8 text-white" />
      </div>
      <h2 className="mb-2">
        {mode === "login" ? "Welcome back" : "Create account"}
      </h2>
      <p className="text-muted-foreground">
        {mode === "login"
          ? "Sign in to continue to your dashboard"
          : "Get started with TicketFlow today"}
      </p>
    </div>
  );
}
