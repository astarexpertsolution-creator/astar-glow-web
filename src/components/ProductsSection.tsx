import { Stethoscope, Microscope, FlaskConical, TestTubes } from "lucide-react";
import LogoWatermark from "./LogoWatermark";

const products = [
  {
    icon: Stethoscope,
    title: "Medical Equipment",
    description:
      "Reliable and certified medical devices designed for hospitals, clinics, and healthcare institutions — including ultrasound machines, ventilators, dialysis equipment, ECG machines, and more.",
  },
  {
    icon: Microscope,
    title: "Diagnostic & Laboratory Solutions",
    description:
      "Advanced diagnostic and laboratory equipment supporting accurate testing, efficient workflows, and consistent results — ELISA kits, RT-PCR, rapid test kits.",
  },
  {
    icon: FlaskConical,
    title: "Research & Scientific Instruments",
    description:
      "Future-ready instruments empowering innovation, experimentation, and scientific discovery for R&D labs and academic institutions.",
  },
  {
    icon: TestTubes,
    title: "Dialysis & Infusion Solutions",
    description:
      "Complete dialysis setup including machines, bloodline tubing, dialyzers, RO plants, infusion sets, and all necessary accessories.",
  },
];

const ProductsSection = () => (
  <section id="products" className="relative py-24 overflow-hidden">
    <LogoWatermark className="top-1/2 right-[-120px] -translate-y-1/2 w-[500px] h-[500px]" />

    <div className="container relative z-10 mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-accent font-semibold tracking-[0.15em] uppercase text-sm mb-3">
          What We Offer
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Our Products & Solutions
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We partner with leading manufacturers to supply world-class medical equipment
          that meets national and international quality standards.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p.title}
            className="group bg-card rounded-2xl p-7 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
              <p.icon className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
