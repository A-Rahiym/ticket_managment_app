import { AuthHeader } from "./components/AuthHeader";
import { AuthForm } from "./components/AuthForm";
import { AuthFooter } from "./components/AuthFooter";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// AuthPage.tsx
interface AuthPageProps {
  mode: "login" | "signup";
}

export function AuthPage({ mode }: AuthPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background -z-10" />
      <div className="w-full max-w-md">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to home
        </Link>
        <div className="bg-card rounded-3xl border border-border/50 shadow-lg p-8">
          <AuthHeader mode={mode} />
          <AuthForm mode={mode} />
          <AuthFooter mode={mode} />
        </div>
      </div>
    </div>
  );
}
