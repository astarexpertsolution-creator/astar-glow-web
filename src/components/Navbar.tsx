import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" }];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"}`
      }>
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#home" className="flex items-center gap-2">
          <img alt="A Star Expert Solutions" className="h-10" src={logo} />
        </a>
        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) =>
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium tracking-wide text-black transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          )}
        </ul>
        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5"
          aria-label="Toggle menu">
          <span className="block w-6 h-0.5 bg-black transition-all" />
          <span className="block w-6 h-0.5 bg-black transition-all" />
          <span className="block w-6 h-0.5 bg-black transition-all" />
        </button>
      </div>
      {/* Mobile menu */}
      {mobileOpen &&
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-border">
          <ul className="flex flex-col p-4 gap-4">
            {links.map((l) =>
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-black hover:text-accent">
                  {l.label}
                </a>
              </li>
            )}
          </ul>
        </div>
      }
    </nav>);
};

export default Navbar;
