"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export interface PressRelease {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  featured?: boolean;
}

interface PressReleasesProps {
  pressReleases: PressRelease[];
  title: string;
  image?: string;
}

const PressReleases: React.FC<PressReleasesProps> = ({ pressReleases, title }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Get the first featured press release or the first one if none are featured
  const featuredRelease = pressReleases.find(pr => pr.featured) || pressReleases[1];

  useEffect(() => {
    // Animate title on mount
    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-down-fade');
          }
        });
      },
      { threshold: 0.2 }
    );

    // Animate featured card
    const featuredObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-up-fade');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) titleObserver.observe(titleRef.current);
    if (featuredRef.current) featuredObserver.observe(featuredRef.current);

    return () => {
      if (titleRef.current) titleObserver.unobserve(titleRef.current);
      if (featuredRef.current) featuredObserver.unobserve(featuredRef.current);
    };
  }, []);

  if (!featuredRelease) return null;

  return (
    <div className="py-8 md:py-1 px-4 bg-white">
      <div className="max-w-[1140px] mx-auto">
        {/* Section Title */}
        <h2
          ref={titleRef}
          className="text-[24px] font-cormorant md:text-[40px]  font-[500] text-[#000000] text-center mb-8 md:mb-16 opacity-0"
        >
          {title}
        </h2>

        {/* Featured Press Release Card */}
        <div
          ref={featuredRef}
          className="relative bg-white border border-[#CCCCCC] overflow-hidden transition-all duration-700 hover:shadow-xl hover:border-[#107BC0] group opacity-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Glow effect on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-[#107BC0]/5 to-[#107BC0]/10 opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-100" : ""
              }`}
          />

          {/* Mobile Layout (Stacked) */}
          <div className="block md:hidden">
            {/* Mobile Image */}
            <div className="relative h-[285px] overflow-hidden">
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
              )}

              <div
                className={`relative h-full transition-transform duration-700 ${isHovered ? "scale-105" : "scale-100"
                  }`}
              >
                <Image
                  src={featuredRelease.image}
                  alt={featuredRelease.title}
                  fill
                  className="object-cover transition-all duration-700 w-full p-4 max-w-[360px] max-h-[260px] mx-auto  rounded-[27px]"
                  onLoadingComplete={() => setImageLoaded(true)}
                  style={{
                    filter: isHovered ? "brightness(1.05)" : "brightness(1)",
                  }}
                />
              </div>


            </div>

            {/* Mobile Content */}
            <div className="p-6">
              {/* Featured Badge - Mobile */}
              <div className="absolute top-[295px] left-0 ">
                <span className="px-3 pl-6  py-1 bg-[#107BC0] text-white text-[18px] font-inter font-[500] uppercase tracking-wide">
                  FEATURED
                </span>
              </div>
              <div className="flex items-center gap-1 mb-4 mt-7">
                <span className="text-[#212529] text-[14px] font-inter font-[400] uppercase">
                  {featuredRelease.date}
                </span>
              </div>

              <h3 className={`text-[20px] md:text-[20px] font-inter font-[400] mb-4 text-[#000000] transition-colors duration-300 ${isHovered ? "text-[#107BC0]" : ""
                }`}>
                {featuredRelease.title}
              </h3>

              <p className="text-[14px] text-[#000000] font-inter font-[300] mb-6 line-clamp-3">
                {featuredRelease.excerpt}
              </p>

              <Link
                href={`/press-releases/${featuredRelease.id}`}
                className="inline-flex items-center justify-center px-6 py-3 text-[16px] border border-[#107BC0] text-[#107BC0]  font-inter font-[600] uppercase tracking-wide transition-all duration-300 hover:bg-[#107BC0] hover:text-white group/btn rounded-3xl"
              >
                <span>READ MORE</span>

              </Link>
            </div>
          </div>

          {/* Desktop Layout (Side by Side) */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-0 h-[410px] md:h-[450px] lg:h-[405px]">
            {/* Desktop Content - Left Side */}
            <div className="p-8 md:p-12 flex flex-col justify-center relative">
              {/* Featured Badge - Desktop */}
              <div className="absolute top-7 left-0 ">
                <span className="px-4 py-2 pl-[50px] md:pl-[55px] lg:pl-[50px] bg-[#107BC0] text-[#FFFFFF] text-[18px] font-inter font-[600] uppercase tracking-wide">
                  FEATURED
                </span>
              </div>

              <div className="flex items-center gap-1 mb-4 md:mt-[10px] md:pl-2 lg:mt-0 lg:pl-0">
                <span className="text-[#212529] text-[12px] font-inter font-[400] uppercase">
                  {featuredRelease.date}
                </span>
              </div>

              <h3 className={`text-[24px] md:text-[28px] font-inter font-[400] mb-6 text-[#000000] leading-tight transition-all duration-500 ${isHovered ? "text-[#107BC0] transform translate-x-2" : ""
                }`}>
                {featuredRelease.title}
              </h3>

              <p className={`text-[16px] text-[#000000] font-inter font-[300] mb-8 line-clamp-4 transition-all duration-500 ${isHovered ? "transform translate-x-2" : ""
                }`}>
                {featuredRelease.excerpt}
              </p>

              <div className={`transition-all duration-500 ${isHovered ? "transform translate-x-2" : ""}`}>
                <Link
                  href={`/press-releases/${featuredRelease.id}`}
                  className="relative inline-flex items-center justify-center px-8 py-3 border border-[#107BC0] text-[#107BC0] text-[14px] font-inter font-[600] uppercase tracking-wide overflow-hidden transition-all duration-300 group/btn hover:shadow-lg rounded-3xl"
                >
                  {/* Button background animation */}
                  <span className="absolute inset-0 bg-[#107BC0] transform scale-x-0 transition-transform duration-300 origin-left group-hover/btn:scale-x-100" />

                  <span className="relative z-10 font-[500] text-[14px] text-[#107BC0] transition-colors duration-300 group-hover/btn:text-white">
                    READ MORE
                  </span>


                </Link>
              </div>
            </div>

            {/* Desktop Image - Right Side */}
            <div className="relative h-[400px] lg:h-[410px] overflow-hidden">
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
              )}

              <div
                className={`relative h-full p-5 transition-transform duration-700 ${isHovered ? "scale-105" : "scale-100"
                  }`}
              >
                <Image
                  src={featuredRelease.image}
                  alt={featuredRelease.title}
                  fill
                  className="object-cover max-w-[560px] max-h-[400px] transition-all duration-700 p-5 rounded-[27px]"
                  onLoadingComplete={() => setImageLoaded(true)}
                  style={{
                    filter: isHovered ? "brightness(1.05)" : "brightness(1)",
                  }}
                />
              </div>

              {/* Overlay gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-l from-[#107BC0]/20 to-transparent transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"
                }`} />
            </div>
          </div>

          {/* Floating accent elements on hover */}
          {isHovered && (
            <>
              <div className="absolute top-4 right-4 w-2 h-2 bg-[#107BC0] rounded-full animate-ping" />
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#107BC0] rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PressReleases;