import dashboardImage from "@/assets/potrex-dashboard.png";

const DemoSection = () => {
  return (
    <section className="relative py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Frosted Glass Container */}
        <div className="relative">
          {/* Glass Background */}
          <div className="backdrop-blur-xl bg-glass/40 border border-white/20 rounded-3xl p-8 shadow-glass">
            {/* Dashboard Preview */}
            <div className="relative overflow-hidden rounded-2xl shadow-soft">
              <img
                src={dashboardImage}
                alt="Potrex dashboard showing savings tracking and financial insights"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Optional floating elements for extra visual interest */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-pastel-pink rounded-full blur-xl opacity-60" />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pastel-blue rounded-full blur-xl opacity-60" />
        </div>
      </div>
    </section>
  );
};

export default DemoSection;