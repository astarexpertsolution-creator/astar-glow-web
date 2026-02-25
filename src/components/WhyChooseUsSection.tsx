import {
  ShieldCheck,
  Handshake,
  Clock,
  Award,
  Building2,
  FlaskConical,
  GraduationCap,
  Activity,
} from "lucide-react";
import LogoWatermark from "./LogoWatermark";

const reasons = [
  { icon: Handshake, text: "Trusted medical technology partners" },
  { icon: ShieldCheck, text: "Quality-assured and compliant products" },
  { icon: Award, text: "Professional and transparent operations" },
  { icon: Clock, text: "Timely delivery and dependable support" },
];

const industries = [
  { icon: Building2, text: "Hospitals & Clinics" },
  { icon: Activity, text: "Diagnostic & Pathology Centres" },
  { icon: FlaskConical, text: "Research & Development Laboratories" },
  { icon: GraduationCap, text: "Academic & Scientific Institutions" },
];

const WhyChooseUsSection = () => (
  <section id="why-us" className="relative py-24 section-gradient overflow-hidden">
    <LogoWatermark className="top-20 left-[-100px] w-[450px] h-[450px]" />

    <div className="container relative z-10 mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Why Choose Us */}
        <div>
          <p className="text-accent font-semibold tracking-[0.15em] uppercase text-sm mb-3">
            Our Edge
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Why Choose Us
          </h2>
          <div className="space-y-5">
            {reasons.map((r) => (
              <div key={r.text} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <r.icon className="w-5 h-5 text-accent" />
                </div>
                <p className="text-foreground font-medium pt-2">{r.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industries We Serve */}
        <div>
          <p className="text-accent font-semibold tracking-[0.15em] uppercase text-sm mb-3">
            Who We Serve
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Industries We Serve
          </h2>
          <div className="space-y-5">
            {industries.map((i) => (
              <div key={i.text} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <i.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground font-medium pt-2">{i.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
