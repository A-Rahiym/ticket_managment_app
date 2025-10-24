import { Routes, Route, Navigate } from "react-router-dom";
import { LandingPage } from "../routes/landing/LandingPage";
import { AuthPage } from "../routes/auth/AuthPage";
import { DashboardPage } from "../routes/dashboard/DashboardPage";
import { TicketsPage } from "../routes/tickets/TicketsPage";
import { ProtectedRoute } from "../components/ProtectedRoute";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/login"
        element={<AuthPage mode="login" />}
      />
      <Route
        path="/signup"
        element={<AuthPage mode="signup" />}
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/tickets"
        element={
          <ProtectedRoute>
            <TicketsPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}