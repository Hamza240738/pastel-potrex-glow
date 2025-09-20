import { Check, Target, TrendingUp, Shield, Bell, BarChart3 } from "lucide-react";
import { AnimatedGroup } from "@/components/ui/animated-group";

const features = [
  {
    icon: Target,
    title: "Smart Goal Setting",
    description: "Set personalized savings goals and track your progress with intelligent insights and recommendations."
  },
  {
    icon: TrendingUp,
    title: "Spending Analysis",
    description: "Understand your spending patterns with detailed analytics and identify areas where you can save more."
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your financial data is encrypted and secure. We never share your information with third parties."
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Get timely alerts when you're about to overspend or when you've reached a savings milestone."
  },
  {
    icon: BarChart3,
    title: "Visual Reports",
    description: "Beautiful charts and graphs help you visualize your financial journey and stay motivated."
  },
  {
    icon: Check,
    title: "Habit Building",
    description: "Build better spending habits with our proven techniques and behavioral insights."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <AnimatedGroup preset="blur-slide" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Everything you need to <span className="italic">save smarter</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Potrex combines intelligent analytics with simple goal-setting to help you build lasting financial habits.
          </p>
        </AnimatedGroup>

        <AnimatedGroup preset="blur-slide" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="backdrop-blur-md bg-glass/40 border border-white/20 rounded-2xl p-6 shadow-glass">
              <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
};

export default FeaturesSection;