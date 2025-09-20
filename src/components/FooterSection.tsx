const FooterSection = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">px</span>
            </div>
            <span className="font-serif text-xl font-medium text-foreground">
              potrex<sup className="text-xs">®</sup>
            </span>
          </div>
          
          {/* Links */}
          <nav className="flex gap-8 text-sm">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How it works
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2024 Potrex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;