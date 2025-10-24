import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { ArrowRight } from "lucide-react";

export function QuickActions() {
  return (
    <div className="bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-purple-600/10 rounded-3xl p-4 sm:p-6 md:p-8 border border-[hsl(var(--neon-green))] shadow-md shadow-[hsl(var(--neon-green))]/20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            Ready to manage tickets?
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground/80">
            Create, update, and track all your support tickets in one place
          </p>
        </div>
        <Link to="/tickets">
          <Button
            size="default"
            className="rounded-full px-6 sm:px-8 text-sm sm:text-base bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold border-2 border-[hsl(var(--neon-green))] shadow-lg shadow-[hsl(var(--neon-green))]/30 transition-all duration-300 hover:scale-105"
            aria-label="View all tickets"
          >
            View All Tickets
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
}