"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

interface HeroSectionProps { 
  desktopImage: string;
  mobileImage: string;

  // Text content
  desktopTitle: {
    lines: string[];
    classNames?: string[];
  };
  mobileTitle: {
    lines: string[];
    classNames?: string[];
  };

  // Optional customization
  gradientOverlay?: string;
  showScrollIndicator?: boolean;
  enableParallax?: boolean;
  imageQuality?: number;
  imageScale?: {
    initial: number;
    loaded: number;
  };
  containerPadding?: string;
  animationDelay?: number;
  onScrollClick?: () => void;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  desktopImage,
  mobileImage,
  desktopTitle,
  mobileTitle,
  gradientOverlay = "",
  showScrollIndicator = true,
  enableParallax = true,
  imageQuality = 90,
  imageScale = { initial: 1.02, loaded: 1.05 },
  containerPadding = "lg:pl-[100px]",
  animationDelay = 200,
  onScrollClick,
  className = ""
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle mouse movement for parallax effect (desktop only)
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !enableParallax) return;
    
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollClick = () => {
    if (onScrollClick) {
      onScrollClick();
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`relative w-full h-screen overflow-hidden bg-black ${className}`}
      onMouseMove={handleMouseMove}
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 w-full h-full">
        {/* Gradient Overlay */}
        {gradientOverlay && (
          <div className={`absolute inset-0 z-10 transition-all duration-1000 ${gradientOverlay}`} />
        )}
        
        {/* Desktop Background Image */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src={desktopImage}
            alt={desktopTitle.lines.join(" ")}
            fill
            priority
            sizes="100vw"
            quality={imageQuality}
            className="object-cover"
            style={{
              transform: `scale(${isLoaded ? imageScale.loaded : imageScale.initial}) translate(${enableParallax ? mousePosition.x * -10 : 0}px, ${enableParallax ? mousePosition.y * -10 : 0}px)`,
              transition: "transform 0.8s ease-out"
            }}
            onLoad={() => setIsLoaded(true)}
          />
        </div>

        {/* Mobile Background Image */}
        <div className="md:hidden absolute inset-0">
          <Image
            src={mobileImage}
            alt={mobileTitle.lines.join(" ")}
            fill
            priority
            sizes="100vw"
            quality={imageQuality}
            className="object-cover"
            style={{
              transform: `scale(${isLoaded ? (imageScale.initial + 0.01) : imageScale.initial - 0.02})`,
              transition: "transform 0.8s ease-out"
            }}
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative h-full z-20 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-[80px]">
          <div className="flex flex-col">
            {/* Text Content */}
            <div className={`w-full ${containerPadding}`}>
              {/* Desktop Text */}
              <h1 
                className="hidden md:block text-white font-medium"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  lineHeight: "1.1",
                  letterSpacing: "0.02em",
                  opacity: isLoaded ? 1 : 0,
                  transform: `translateY(${isLoaded ? 0 : 20}px) translateX(${enableParallax ? mousePosition.x * 5 : 0}px)`,
                  transition: "all 0.8s ease-out",
                  textShadow: "0 4px 20px rgba(0,0,0,0.5)"
                }}
              >
                {desktopTitle.lines.map((line, index) => (
                  <span 
                    key={index}
                    className={`block font-cormorant ${index > 0 ? 'mt-2' : ''} animate-slide-up ${desktopTitle.classNames?.[index] || 'text-[40px] font-[500] leading-[60px] text-[#FFFFFF]'}`}
                    style={{ animationDelay: `${index * animationDelay}ms` }}
                  >
                    {line}
                  </span>
                ))}
              </h1>
              
              {/* Mobile Text */}
              <h1 
                className="md:hidden text-white font-medium text-center"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: `translateY(${isLoaded ? 0 : 20}px)`,
                  transition: "all 0.8s ease-out",
                  textShadow: "0 4px 20px rgba(0,0,0,0.5)"
                }}
              >
                {mobileTitle.lines.map((line, index) => (
                  <span 
                    key={index}
                    className={`block font-cormorant ${index > 0 ? 'mt-2' : ''} animate-slide-up ${mobileTitle.classNames?.[index] || 'text-[32px] font-[500] text-[#FFFFFF] leading-tight text-start'}`}
                    style={{ animationDelay: `${index * animationDelay}ms` }}
                  >
                    {line}
                  </span>
                ))}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer z-30"
          onClick={handleScrollClick}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 1s ease-out",
            transitionDelay: "0.8s"
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-bounce"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;