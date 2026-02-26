import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import tour360Image from "@/assets/360-office-tour.jpg";

interface VirtualTour360Props {
  image360Url?: string;
  autoRotate?: boolean;
  className?: string;
}

const VirtualTour360 = ({
  image360Url = tour360Image,
  autoRotate = true,
  className = "",
}: VirtualTour360Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let sphere: THREE.Mesh;
    let animationId: number;
    let isUserInteracting = false;
    let mouseDown = false;
    let lon = 0;
    let lat = 0;
    let phi = 0;
    let theta = 0;
    let onMouseDownMouseX = 0;
    let onMouseDownMouseY = 0;
    let onMouseDownLon = 0;
    let onMouseDownLat = 0;

    // Initialize scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // Camera setup
    camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.offsetWidth / containerRef.current.offsetHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 0.1);

    // Renderer setup
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      containerRef.current.offsetWidth,
      containerRef.current.offsetHeight
    );
    containerRef.current.appendChild(renderer.domElement);

    // Create sphere geometry (inverted for 360 viewing)
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);

    // Load texture
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      image360Url,
      (texture) => {
        const material = new THREE.MeshBasicMaterial({ map: texture });
        sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);
        setIsLoading(false);
      },
      undefined,
      (err) => {
        console.error("Error loading 360 image:", err);
        setError("Failed to load 360\u00b0 image. Please upload a valid panoramic image.");
        setIsLoading(false);
        const material = new THREE.MeshBasicMaterial({ color: 0x1a1a1a, wireframe: true });
        sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);
      }
    );

    // Mouse interaction handlers
    const onMouseDown = (event: MouseEvent) => {
      event.preventDefault();
      isUserInteracting = true;
      mouseDown = true;
      onMouseDownMouseX = event.clientX;
      onMouseDownMouseY = event.clientY;
      onMouseDownLon = lon;
      onMouseDownLat = lat;
    };

    const onMouseMove = (event: MouseEvent) => {
      if (isUserInteracting && mouseDown) {
        lon = (onMouseDownMouseX - event.clientX) * 0.1 + onMouseDownLon;
        lat = (event.clientY - onMouseDownMouseY) * 0.1 + onMouseDownLat;
      }
    };

    const onMouseUp = () => {
      isUserInteracting = false;
      mouseDown = false;
    };

    // Touch handlers for mobile
    const onTouchStart = (event: TouchEvent) => {
      if (event.touches.length === 1) {
        event.preventDefault();
        onMouseDownMouseX = event.touches[0].pageX;
        onMouseDownMouseY = event.touches[0].pageY;
        onMouseDownLon = lon;
        onMouseDownLat = lat;
        isUserInteracting = true;
      }
    };

    const onTouchMove = (event: TouchEvent) => {
      if (event.touches.length === 1 && isUserInteracting) {
        event.preventDefault();
        lon = (onMouseDownMouseX - event.touches[0].pageX) * 0.1 + onMouseDownLon;
        lat = (event.touches[0].pageY - onMouseDownMouseY) * 0.1 + onMouseDownLat;
      }
    };

    const onTouchEnd = () => {
      isUserInteracting = false;
    };

    // Add event listeners
    renderer.domElement.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    renderer.domElement.addEventListener("touchstart", onTouchStart);
    renderer.domElement.addEventListener("touchmove", onTouchMove);
    renderer.domElement.addEventListener("touchend", onTouchEnd);

    // Animation loop
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      if (autoRotate && !isUserInteracting) {
        lon += 0.05;
      }
      lat = Math.max(-85, Math.min(85, lat));
      phi = THREE.MathUtils.degToRad(90 - lat);
      theta = THREE.MathUtils.degToRad(lon);
      camera.target = new THREE.Vector3(
        500 * Math.sin(phi) * Math.cos(theta),
        500 * Math.cos(phi),
        500 * Math.sin(phi) * Math.sin(theta)
      );
      camera.lookAt(camera.target);
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect =
        containerRef.current.offsetWidth / containerRef.current.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        containerRef.current.offsetWidth,
        containerRef.current.offsetHeight
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      renderer.domElement.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      renderer.domElement.removeEventListener("touchstart", onTouchStart);
      renderer.domElement.removeEventListener("touchmove", onTouchMove);
      renderer.domElement.removeEventListener("touchend", onTouchEnd);
      if (containerRef.current && renderer.domElement.parentElement === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      if (sphere?.material) {
        (sphere.material as THREE.MeshBasicMaterial).dispose();
      }
    };
  }, [image360Url, autoRotate]);

  return (
    <section id="virtual-tour" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold tracking-[0.15em] uppercase text-sm mb-3">
            Explore Our Space
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Virtual 360\u00b0 Office Tour
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take an interactive tour of our state-of-the-art facility. Drag to look around,
            or let it auto-rotate to see our advanced medical equipment and modern workspace.
          </p>
        </div>

        <div className={`relative w-full bg-secondary rounded-2xl overflow-hidden shadow-2xl ${className}`}>
          <div
            ref={containerRef}
            className="w-full aspect-video cursor-move"
            style={{ touchAction: "none" }}
          />

          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-foreground font-medium">Loading 360\u00b0 view...</p>
              </div>
            </div>
          )}

          {error && (
            <div className="absolute top-4 left-4 right-4 bg-destructive/90 text-destructive-foreground px-4 py-3 rounded-lg">
              <p className="text-sm font-medium">{error}</p>
              <p className="text-xs mt-1 opacity-80">
                Upload a 360\u00b0 panoramic image to: <code className="font-mono">src/assets/360-office-tour.jpg</code>
              </p>
            </div>
          )}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full">
            <p className="text-xs text-muted-foreground font-medium">
              \ud83d\uddb1\ufe0f Drag to look around \u2022 \ud83d\udcf1 Swipe on mobile
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour360;
