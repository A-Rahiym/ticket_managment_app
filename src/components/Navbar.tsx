import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { LogOut, User, Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export function Navbar() {
  const { isAuthenticated, handleLogout, user } = useAuth();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Tickets", path: "/tickets" },
  ];

  if (!isAuthenticated) {
    return null;
  }

  return (
    <nav className="bg-card/80 backdrop-blur-md border-b border-primary/10 sticky top-0 z-50" role="navigation">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="font-bold text-white">T</span>
            </div>
            <span className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              TicketFlow
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
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
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-secondary/50 rounded-full border border-primary/10">
                <User className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{user?.name || "Admin"}</span>
              </div>
              <Button
                onClick={handleLogout}
                variant="ghost"
                size="icon"
                className="rounded-full border-2 border-[hsl(var(--neon-green))] shadow-md shadow-[hsl(var(--neon-green))]/20 hover:bg-red-500/10"
                aria-label="Log out"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full border-2 border-[hsl(var(--neon-green))] shadow-md shadow-[hsl(var(--neon-green))]/20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden mt-4 bg-card border border-primary/10 rounded-xl shadow-lg p-4 animate-in slide-in-from-top duration-300"
            role="menu"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      isActive
                        ? "bg-secondary/50 font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setIsMobileMenuOpen(false)}
                    role="menuitem"
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="flex items-center justify-between px-4 py-2 bg-secondary/50 rounded-lg border border-primary/10">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{user?.name || "Admin"}</span>
                </div>
                <Button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  variant="ghost"
                  size="sm"
                  className="rounded-full border-2 border-[hsl(var(--neon-green))] hover:bg-red-500/10"
                  aria-label="Log out"
                  role="menuitem"
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}