import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";

const CTASection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedGroup preset="blur-slide">
          <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-6">
            Ready to stop buying <span className="italic">stupid</span> things?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our waitlist and be the first to experience the future of smart saving.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white/10 rounded-[18px] border border-white/20 p-0.5 backdrop-blur-sm">
              <Button
                variant="hero"
                size="lg"
                className="rounded-2xl px-8 text-base font-medium"
              >
                Join Waitlist
              </Button>
            </div>
            <Button
              variant="ghost"
              size="lg"
              className="h-12 rounded-full px-8 text-muted-foreground hover:text-foreground"
            >
              Learn More
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </AnimatedGroup>
      </div>
    </section>
  );
};

export default CTASection;