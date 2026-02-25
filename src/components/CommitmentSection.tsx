import { CheckCircle2 } from "lucide-react";

const commitments = [
  "Quality-driven products",
  "Ethical and transparent business practices",
  "Timely delivery and dependable service",
  "Long-term partnerships built on trust",
];

const CommitmentSection = () => (
  <section className="relative py-24 overflow-hidden">
    <div className="container relative z-10 mx-auto px-4 text-center max-w-3xl">
      <p className="text-accent font-semibold tracking-[0.15em] uppercase text-sm mb-3">
        Our Promise
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
        Our Commitment
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-10">
        At A Star Expert Solutions, quality, integrity, and innovation are at the core of
        everything we do. We are committed to supporting healthcare professionals and
        researchers with solutions that shape the future of science.
      </p>
      <div className="grid sm:grid-cols-2 gap-4 text-left">
        {commitments.map((c) => (
          <div
            key={c}
            className="flex items-center gap-3 bg-card rounded-xl p-5 shadow-[var(--card-shadow)]"
          >
            <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
            <span className="text-foreground font-medium text-sm">{c}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CommitmentSection;
