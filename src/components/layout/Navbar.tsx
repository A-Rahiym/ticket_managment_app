import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { LogOut, User } from "lucide-react";

interface NavbarProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

export function Navbar({ isAuthenticated, onLogout }: NavbarProps) {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Tickets", path: "/tickets" },
  ];

  if (!isAuthenticated) {
    return null;
  }

  return (
    <nav className="bg-card/80 backdrop-blur-md border-b border-primary/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="font-bold text-white">T</span>
              </div>
              <span className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                TicketFlow
              </span>
            </Link>

            <div className="flex items-center gap-2 bg-secondary/50 p-1 rounded-full border border-primary/10">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-5 py-2 rounded-full transition-all ${
                      isActive
                        ? "bg-card shadow-sm font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-secondary/50 rounded-full">
              <User className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">Admin</span>
            </div>
            <Button
              onClick={onLogout}
              variant="ghost"
              size="icon"
              className="rounded-full"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
