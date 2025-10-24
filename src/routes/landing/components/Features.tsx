import { Zap, Shield, BarChart3, Users, Bell, Clock } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Quick ticket creation and resolution with an intuitive interface designed for speed.",
    gradient: "gradient-purple-pink",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security ensuring your data is always protected and accessible.",
    gradient: "bg-gradient-to-br from-green-500 to-emerald-600",
  },
  {
    icon: BarChart3,
    title: "Powerful Analytics",
    description: "Gain insights with comprehensive reports and real-time ticket statistics.",
    gradient: "bg-gradient-to-br from-blue-500 to-cyan-600",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Assign tickets, track progress, and collaborate seamlessly with your team.",
    gradient: "bg-gradient-to-br from-orange-500 to-amber-600",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Stay updated with intelligent alerts for ticket updates and assignments.",
    gradient: "bg-gradient-to-br from-violet-500 to-purple-600",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Access your tickets anytime, anywhere with our cloud-based platform.",
    gradient: "bg-gradient-to-br from-pink-500 to-rose-600",
  },
];

export function Features() {
  return (
    <section className="px-6 py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <p className="text-sm text-primary">Features</p>
          </div>
          <h2 className="mb-4">Everything You Need to Succeed</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you manage support tickets efficiently and delight your customers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
