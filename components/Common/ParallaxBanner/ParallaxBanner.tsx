"use client";

import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronDown } from "lucide-react";

interface ParallaxBannerProps {
  desktopSrc: StaticImageData | string;
  mobileSrc: StaticImageData | string;
  altDesktop: string;
  altMobile: string;
  desktopLines: { text: string; delay?: number; fontSize?: number }[];
  mobileLines: { text: string; delay?: number }[];
}

const ParallaxBanner: React.FC<ParallaxBannerProps> = ({
  desktopSrc,
  mobileSrc,
  altDesktop,
  altMobile,
  desktopLines,
  mobileLines,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (mobile) return;
    const xNorm = (e.clientX / window.innerWidth - 0.5) * 2;
    const yNorm = (e.clientY / window.innerHeight - 0.5) * 2;
    setPos({ x: xNorm, y: yNorm });
  };

  return (
    <section
      className="relative w-full h-[93vh] overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
    >
      {/* Background Images */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-50" />

        <div className="hidden md:block absolute inset-0">
          <Image
            src={desktopSrc}
            alt={altDesktop}
            fill
            priority
            sizes="100vw"
            quality={90}
            className="object-cover transition-transform duration-800 ease-out"
            style={{
              transform: `scale(${loaded ? 1.05 : 1.02}) translate(${
                pos.x * -10
              }px, ${pos.y * -10}px)`,
            }}
            onLoadingComplete={() => setLoaded(true)}
          />
        </div>

        <div className="md:hidden absolute inset-0">
          <Image
            src={mobileSrc}
            alt={altMobile}
            className="object-cover transition-transform duration-800 ease-out"
            fill
            priority
            sizes="100vw"
            quality={90}
            style={{ transform: `scale(${loaded ? 1.03 : 1})` }}
            onLoadingComplete={() => setLoaded(true)}
          />
        </div>
      </div>
      {/* Text Content */}
      <div
        className="
    absolute
    top-1/2 left-1/2
    w-full max-w-[1152px]
    transform -translate-x-1/2 -translate-y-1/2
  "
      >
        {mobile ? (
          <h1 className="text-white font-medium pl-[20px] font-cormorant">
            {mobileLines.map((line, idx) => (
              <span
                key={idx}
                className="block animate-slide-up text-[32px] font-[500] text-[#FFFFFF] text-start"
                style={{ animationDelay: `${line.delay ?? idx * 200}ms` }}
              >
                {line.text}
              </span>
            ))}
          </h1>
        ) : (
          <h1 className="text-white font-medium font-cormorant">
            {desktopLines.map((line, idx) => (
              <span
                key={idx}
                className="block animate-slide-up font-[600] text-[#FFFFFF] leading-[54px] mb-10 text-start uppercase"
                style={{
                  animationDelay: `${line.delay ?? idx * 200}ms`,
                  fontSize: `${line.fontSize ?? 40}px`,
                }}
              >
                {line.text.split("\n").map((part, partIdx) => (
                  <React.Fragment key={partIdx}>
                    {part}
                    <br />
                  </React.Fragment>
                ))}
              </span>
            ))}
          </h1>
        )}
      </div>
      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 opacity-75 animate-bounce cursor-pointer"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <ChevronDown size={25} color="#fff" />
      </div>
    </section>
  );
};

export default ParallaxBanner;
