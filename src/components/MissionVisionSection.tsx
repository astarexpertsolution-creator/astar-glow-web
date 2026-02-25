import { Eye, Target } from "lucide-react";
import LogoWatermark from "./LogoWatermark";

const MissionVisionSection = () => (
  <section className="relative py-24 section-gradient overflow-hidden">
    <LogoWatermark className="bottom-0 left-[-80px] w-[400px] h-[400px]" />

    <div className="container relative z-10 mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-accent font-semibold tracking-[0.15em] uppercase text-sm mb-3">
          Our Purpose
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Mission & Vision
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-card rounded-2xl p-8 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow">
          <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
            <Target className="w-7 h-7 text-accent" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-4">Our Mission</h3>
          <p className="text-muted-foreground leading-relaxed">
            To provide innovative, reliable, and high-quality solutions in the field of
            medical equipment that contribute to the advancement of research, improved
            diagnostics, and enhanced quality of medical care for patients.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow">
          <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
            <Eye className="w-7 h-7 text-accent" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-4">Our Vision</h3>
          <p className="text-muted-foreground leading-relaxed">
            To become a reliable leader in the field of medical equipment distribution,
            contributing to scientific progress and the implementation of promising solutions
            for the healthcare of the future.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default MissionVisionSection;
