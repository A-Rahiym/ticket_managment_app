import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { mockLogin, mockSignup } from "../mock/mockApi";

interface AuthContextType {
  isAuthenticated: boolean;
  user: { email: string; name?: string } | null;
  handleAuthSuccess: (email: string, password: string, name?: string) => Promise<void>;
  handleLogout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}


export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return !!localStorage.getItem("ticketapp_session");
  });
  const [user, setUser] = useState<{ email: string; name?: string } | null>(() => {
    const session = localStorage.getItem("ticketapp_session");
    return session ? JSON.parse(session).user : null;
  });

  const handleAuthSuccess = async (email: string, password: string, name?: string) => {
    try {
      const { token, user } = name
        ? await mockSignup(email, password, name)
        : await mockLogin(email, password);
      localStorage.setItem("ticketapp_session", JSON.stringify({ token, user }));
      setIsAuthenticated(true);
      setUser(user);
      toast.success(name ? "Signup successful!" : "Login successful!");
      navigate("/dashboard", { replace: true });
    } catch (error) {
      toast.error(name ? "Signup failed. Please try again." : "Invalid credentials. Please try again.");
      throw error;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("ticketapp_session");
    setIsAuthenticated(false);
    setUser(null);
    toast.success("Logged out successfully!");
    navigate("/login", { replace: true });
    
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, handleAuthSuccess, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}