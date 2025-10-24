import { Link } from "react-router-dom";

// AuthFooter.tsx
interface AuthFooterProps {
  mode: "login" | "signup";
}

export function AuthFooter({ mode }: AuthFooterProps) {
  return (
    <div className="mt-6 text-center">
      <p className="text-sm text-muted-foreground">
        {mode === "login"
          ? "Don't have an account? "
          : "Already have an account? "}
        <Link
          to={mode === "login" ? "/signup" : "/login"}
          className="text-primary font-medium hover:underline"
        >
          {mode === "login" ? "Sign up" : "Sign in"}
        </Link>
      </p>
    </div>
  );
}
