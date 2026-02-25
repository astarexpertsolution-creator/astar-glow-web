import logo from "@/assets/logo.png";

interface LogoWatermarkProps {
  className?: string;
}

const LogoWatermark = ({ className = "" }: LogoWatermarkProps) => (
  <div className={`logo-watermark ${className}`}>
    <img src={logo} alt="" className="w-full h-full object-contain" aria-hidden="true" />
  </div>
);

export default LogoWatermark;
