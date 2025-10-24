import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { ArrowRight } from "lucide-react";
import { WaveBackground } from "../../../components/common/WaveBackground";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 py-24 overflow-hidden text-center">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10" />

      {/* Glow or accent effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[hsl(var(--neon-green))]/5 blur-3xl rounded-full -z-10" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="inline-flex items-center justify-center mb-6 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
          <span className="text-sm font-medium text-primary">
            Welcome to Modern Support
          </span>
        </div>

        <h1
          className="text-4xl sm:text-6xl font-bold mb-6 leading-tight 
               text-purple-700 dark:text-purple-300"
        >
          Streamline Your Support with Smart Ticket Management
        </h1>
        <p className="max-w-2xl mx-auto mb-10 text-base sm:text-lg text-muted-foreground">
          Manage customer inquiries efficiently with our intuitive ticket
          system. Track, prioritize, and resolve issues faster than ever before.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/signup">
            <Button
              size="lg"
              className="rounded-full px-8 bg-purple-600 hover:bg-purple-700 
               text-white font-semibold shadow-lg shadow-purple-500/40 
               transition-all duration-300 hover:scale-105">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          <Link to="/login">
            <Button
              size="lg"
              className="rounded-full px-8 bg-cyan-600 hover:bg-cyan-700 
               text-white font-semibold shadow-lg shadow-cyan-500/40 
               transition-all duration-300 hover:scale-105"
            >
              Sign In
            </Button>
          </Link>
        </div>
      </div>
      <WaveBackground />
    </section>
  );
}
