import aboutBg from "@/assets/about-bg.png";

const AboutSection = () => (
  <section id="about" className="relative py-24 overflow-hidden">
    <div className="container relative z-10 mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-accent font-semibold tracking-[0.15em] uppercase text-sm mb-3">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            Transforming Technology into{" "}
            <span className="text-gradient">Reliable Solutions</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            A Star Expert Solutions was founded with a clear vision: to combine cutting-edge
            technology with medical research and high-quality healthcare. We support medical
            institutions and research organisations by providing modern, reliable, and
            forward-looking medical equipment that improves the accuracy, efficiency, and
            quality of patient care.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            As a professionally managed medical equipment distribution company, we work
            closely with reputable national and international manufacturers, supplying
            reliable, high-performance products that strictly comply with regulatory
            requirements and global quality standards.
          </p>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img
            src={aboutBg}
            alt="Medical professionals collaborating"
            className="w-full h-[400px] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
