import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="relative py-24 section-gradient overflow-hidden">
    <div className="container relative z-10 mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-accent font-semibold tracking-[0.15em] uppercase text-sm mb-3">
          Get in Touch
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Contact Us
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Partner with us to build the future of science.
        </p>
      </div>
      <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-6">
        <div className="bg-card rounded-2xl p-7 shadow-[var(--card-shadow)] flex items-start gap-4">
          <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1 font-sans text-sm">Address</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              4th Floor, A8 & A9, Kochar Bliss, SIDCO Industrial Estate, Guindy,
              Chennai – 600032
            </p>
          </div>
        </div>
        <div className="bg-card rounded-2xl p-7 shadow-[var(--card-shadow)] flex items-start gap-4">
          <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
            <Phone className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1 font-sans text-sm">Phone</h3>
            <a href="tel:+919940058789" className="text-muted-foreground text-sm hover:text-accent transition-colors">
              +91 99400 58789
            </a>
          </div>
        </div>
        <div className="bg-card rounded-2xl p-7 shadow-[var(--card-shadow)] flex items-start gap-4">
          <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
            <Mail className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1 font-sans text-sm">Email</h3>
            <a
              href="mailto:astarexpertsolution@gmail.com"
              className="text-muted-foreground text-sm hover:text-accent transition-colors break-all"
            >
              astarexpertsolution@gmail.com
            </a>
          </div>
        </div>
        <div className="bg-card rounded-2xl p-7 shadow-[var(--card-shadow)] flex items-start gap-4">
          <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
            <Clock className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1 font-sans text-sm">Business Hours</h3>
            <p className="text-muted-foreground text-sm">
              Mon – Sat: 9:30 AM – 6:30 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
