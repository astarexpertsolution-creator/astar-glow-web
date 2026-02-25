import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-primary py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="A Star Expert Solutions" className="h-8 brightness-0 invert" />
        </div>
        <p className="text-primary-foreground/60 text-sm text-center">
          © {new Date().getFullYear()} A Star Expert Solutions Pvt Ltd. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#home" className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors">
            Home
          </a>
          <a href="#about" className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors">
            About
          </a>
          <a href="#contact" className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors">
            Contact
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
