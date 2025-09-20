import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with your savings journey",
    features: [
      "Basic spending tracking",
      "Simple savings goals",
      "Monthly reports",
      "Mobile app access"
    ],
    popular: false
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "per month",
    description: "Advanced features for serious savers",
    features: [
      "Everything in Free",
      "Advanced analytics",
      "Custom categories",
      "Smart notifications",
      "Export data",
      "Priority support"
    ],
    popular: true
  },
  {
    name: "Family",
    price: "$19.99",
    period: "per month",
    description: "Perfect for families saving together",
    features: [
      "Everything in Pro",
      "Up to 5 family members",
      "Shared goals & budgets",
      "Family insights",
      "Parental controls",
      "Dedicated account manager"
    ],
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedGroup preset="blur-slide" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Simple, <span className="italic">transparent</span> pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works best for you. Start free and upgrade when you're ready.
          </p>
        </AnimatedGroup>

        <AnimatedGroup preset="blur-slide" className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative backdrop-blur-md border rounded-3xl p-8 shadow-glass ${
                plan.popular
                  ? 'bg-glass/60 border-brand-blue/30 scale-105'
                  : 'bg-glass/40 border-white/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-brand text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">/{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                size="lg"
                className="w-full rounded-full"
              >
                {plan.name === "Free" ? "Get Started" : "Join Waitlist"}
              </Button>
            </div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
};

export default PricingSection;