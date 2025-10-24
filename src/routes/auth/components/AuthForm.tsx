import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { toast } from "sonner";
import { useAuth } from "../../../context/AuthContext";

interface AuthFormProps {
  mode: "login" | "signup";
}

export function AuthForm({ mode }: AuthFormProps) {
  const { handleAuthSuccess } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    confirmPassword?: string;
    name?: string;
  }>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (mode === "signup" && !formData.name) {
      newErrors.name = "Name is required";
    }

    if (mode === "signup" && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await handleAuthSuccess(
          formData.email,
          formData.password,
          mode === "signup" ? formData.name : undefined
        );
      } catch (error) {
        // Error toasts are handled in handleAuthSuccess
      }
    } else {
      toast.error("Please check your inputs and try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {mode === "signup" && (
        <div>
          <Label htmlFor="name" className="text-sm font-medium">
            Full Name
          </Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`mt-1.5 h-11 rounded-xl ${
              errors.name ? "border-red-500 focus-visible:ring-red-500" : ""
            }`}
            placeholder="John Doe"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-red-500 mt-1.5 text-sm">
              {errors.name}
            </p>
          )}
        </div>
      )}

      <div>
        <Label htmlFor="email" className="text-sm font-medium">
          Email address
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`mt-1.5 h-11 rounded-xl ${
            errors.email ? "border-red-500 focus-visible:ring-red-500" : ""
          }`}
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-red-500 mt-1.5 text-sm">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="password" className="text-sm font-medium">
          Password
        </Label>
        <Input
          id="password"
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className={`mt-1.5 h-11 rounded-xl ${
            errors.password ? "border-red-500 focus-visible:ring-red-500" : ""
          }`}
          placeholder="Enter your password"
          aria-invalid={!!errors.password}
          aria-describedby={errors.password ? "password-error" : undefined}
        />
        {errors.password && (
          <p id="password-error" className="text-red-500 mt-1.5 text-sm">
            {errors.password}
          </p>
        )}
      </div>

      {mode === "signup" && (
        <div>
          <Label htmlFor="confirmPassword" className="text-sm font-medium">
            Confirm password
          </Label>
          <Input
            id="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            className={`mt-1.5 h-11 rounded-xl ${
              errors.confirmPassword
                ? "border-red-500 focus-visible:ring-red-500"
                : ""
            }`}
            placeholder="Confirm your password"
            aria-invalid={!!errors.confirmPassword}
            aria-describedby={
              errors.confirmPassword ? "confirm-password-error" : undefined
            }
          />
          {errors.confirmPassword && (
            <p
              id="confirm-password-error"
              className="text-red-500 mt-1.5 text-sm"
            >
              {errors.confirmPassword}
            </p>
          )}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full rounded-xl bg-purple-600 hover:bg-purple-700 
             text-white font-semibold shadow-lg shadow-purple-500/40 
             transition-all duration-300 hover:scale-105"
      >
        {mode === "login" ? "Sign In" : "Create Account"}
      </Button>
    </form>
  );
}
