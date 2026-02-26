import { useEffect, useRef, useState } from "react";
import heroVideo from "@/assets/hero-video.mp4";
import { Play } from "lucide-react";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showPlayButton, setShowPlayButton] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set video to start at 2 seconds to skip unwanted content
    video.currentTime = 2;

    // Try to play the video
    const attemptPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Auto-play succeeded
            setShowPlayButton(false);
          })
          .catch(() => {
            // Auto-play was prevented, show play button
            setShowPlayButton(true);
          });
      }
    };

    // Initial play attempt
    attemptPlay();

    // Add event listeners for user interaction on mobile
    const handleInteraction = () => {
      attemptPlay();
      // Remove listeners after first interaction
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('click', handleInteraction);
    };

    document.addEventListener('touchstart', handleInteraction, { once: true });
    document.addEventListener('click', handleInteraction, { once: true });

    return () => {
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('click', handleInteraction);
    };
  }, []);

  const handlePlayClick = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 2;
      video.play();
      setShowPlayButton(false);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background video */}
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
          onCanPlay={() => {
            if (videoRef.current) {
              videoRef.current.currentTime = 2;
            }
          }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Play button overlay for mobile when autoplay fails */}
        {showPlayButton && (
          <div 
            onClick={handlePlayClick}
            className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer z-20"
          >
            <div className="bg-white/90 rounded-full p-6 hover:bg-white transition-colors">
              <Play className="w-12 h-12 text-black" fill="black" />
            </div>
          </div>
        )}
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
