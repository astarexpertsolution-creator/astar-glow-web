import { useEffect, useRef } from "react";
import heroVideo from "@/assets/hero-video.mp4";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => {
      // Seek to 3s only after metadata is ready, then play
      video.currentTime = 3;
      video.play().catch(() => {
        // Mobile fallback: play on first touch/scroll
        const events = ['touchstart', 'touchend', 'click', 'scroll'];
        const handleInteraction = () => {
          video.play().catch(() => {});
          events.forEach(e => document.removeEventListener(e, handleInteraction));
        };
        events.forEach(e =>
          document.addEventListener(e, handleInteraction, { once: true, passive: true })
        );
      });
    };

    if (video.readyState >= 1) {
      // Metadata already loaded
      handleLoaded();
    } else {
      video.addEventListener('loadedmetadata', handleLoaded, { once: true });
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoaded);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      {/* Right-side strong white overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, transparent 25%, rgba(255,255,255,0.6) 45%, rgba(255,255,255,0.97) 65%, rgba(255,255,255,1) 100%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 py-32">
        <div className="max-w-3xl animate-fade-in-up ml-auto text-right">
          <p className="text-black font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Future of Science
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight mb-6">
            Advanced Medical Equipment &{" "}
            <span className="text-black">Diagnostic Solutions</span>
          </h1>
          <p className="text-black text-lg md:text-xl max-w-2xl mb-10 leading-relaxed ml-auto">
            Delivering innovation for healthcare & research. We bridge the gap between
            cutting-edge technology and practical application.
          </p>
          <div className="flex flex-wrap gap-4 justify-end">
            <a
              href="#products"
              className="inline-flex items-center px-8 py-3.5 bg-accent text-accent-foreground rounded-lg font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3.5 border border-black/30 text-black rounded-lg font-semibold text-sm tracking-wide hover:bg-black/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
