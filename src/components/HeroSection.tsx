import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Pastel Background Gradient */}
      <div 
        className="absolute inset-0 -z-10 bg-gradient-pastel"
        aria-hidden="true"
      />
      
      {/* Subtle overlay for depth */}
      <div 
        className="absolute inset-0 -z-10 bg-white/10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-6 text-center pt-20">
        {/* Hero Content */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground leading-tight">
            Welcome to{" "}
            <span className="italic font-serif">
              potrex<sup className="text-2xl md:text-3xl">®</sup>
            </span>
          </h1>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
            Let's help you{" "}
            <span className="italic font-serif">stop buying</span>
            <br />
            <span className="italic font-serif">stupid</span> things.
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-sans font-light mt-8">
            We're here to save you money.
          </p>

          {/* CTA Button */}
          <div className="mt-12">
            <Button variant="hero" size="lg" className="px-8 py-3 text-base">
              Join waitlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;