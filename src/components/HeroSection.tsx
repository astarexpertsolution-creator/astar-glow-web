import heroBg from "@/assets/hero-bg.png";
import LogoWatermark from "./LogoWatermark";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 hero-gradient opacity-85" />
    </div>

    <LogoWatermark className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.06]" />

    <div className="container relative z-10 mx-auto px-4 py-32">
      <div className="max-w-3xl animate-fade-in-up">
        <p className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-4">
          Future of Science
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
          Advanced Medical Equipment &{" "}
          <span className="text-secondary">Diagnostic Solutions</span>
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          Delivering innovation for healthcare & research. We bridge the gap between
          cutting-edge technology and practical application.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#products"
            className="inline-flex items-center px-8 py-3.5 bg-accent text-accent-foreground rounded-lg font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            Explore Products
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3.5 border border-primary-foreground/30 text-primary-foreground rounded-lg font-semibold text-sm tracking-wide hover:bg-primary-foreground/10 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
