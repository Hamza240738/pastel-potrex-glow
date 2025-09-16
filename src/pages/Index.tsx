import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import DemoSection from "@/components/DemoSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-pastel">
      <Navigation />
      <main>
        <HeroSection />
        <DemoSection />
      </main>
    </div>
  );
};

export default Index;
