import { Smartphone, Target, TrendingUp, PartyPopper } from "lucide-react";
import { AnimatedGroup } from "@/components/ui/animated-group";

const steps = [
  {
    icon: Smartphone,
    step: "01",
    title: "Connect Your Accounts",
    description: "Securely link your bank accounts and credit cards. We use bank-level encryption to keep your data safe."
  },
  {
    icon: Target,
    step: "02", 
    title: "Set Your Goals",
    description: "Define what you're saving for - whether it's an emergency fund, vacation, or just breaking bad spending habits."
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Track & Optimize",
    description: "Watch your spending patterns emerge and get personalized tips to help you save more money each month."
  },
  {
    icon: PartyPopper,
    step: "04",
    title: "Celebrate Success",
    description: "Reach your goals faster with our proven system and celebrate every milestone along the way."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <AnimatedGroup preset="blur-slide" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            How <span className="italic">Potrex</span> works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started is simple. Follow these four steps to transform your financial habits.
          </p>
        </AnimatedGroup>

        <AnimatedGroup preset="blur-slide" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-pastel-pink rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-foreground">{step.step}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-20 w-24 h-0.5 bg-gradient-to-r from-brand-blue/20 to-transparent" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
};

export default HowItWorksSection;