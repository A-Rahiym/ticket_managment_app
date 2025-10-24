import { Navigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "../context/AuthContext";


export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    toast.error("Please log in to access this page.");
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
}