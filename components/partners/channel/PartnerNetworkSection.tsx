"use client"
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface PartnerLogo {
  name: string;
  imagePath: string;
}

export default function PartnerNetworkSection() {
  const [inView, setInView] = useState<boolean>(false);
  const [animationComplete, setAnimationComplete] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Custom intersection observer to detect when section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Trigger animations sequentially when section comes into view
  useEffect(() => {
    if (inView && !animationComplete) {
      const timer = setTimeout(() => {
        setAnimationComplete(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [inView, animationComplete]);

  const partnerLogos: PartnerLogo[] = [
    {
      name: "South Zone Realty",
      imagePath: "/assets/images/southZoneImage.png",
    },
    {
      name: "JLL",
      imagePath: "/assets/images/jllImage.png",
    },
    {
      name: "Connection Point",
      imagePath: "/assets/images/connectionPointImage.png",
    },
    {
      name: "PropLeaf",
      imagePath: "/assets/images/propLeafImage.png",
    },
    {
      name: "Kaavya",
      imagePath: "/assets/images/kaavYaaImage.png",
    },
  ];

  // Generate staggered animation delays for partner logos
  const getAnimationDelay = (index: number): string => {
    return `${300 + index * 150}ms`;
  };

  // Double the logos for infinite scroll effect
  const infiniteLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-white overflow-hidden relative md:px-[130px]"
    >
      <div className="container mx-auto relative z-10 max-w-[1150px]">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2
            className={`text-[24px] md:text-[30px] lg:text-[40px] font-[500] text-[#107BC0] slide-down-fade opacity-0 ${
              inView ? "opacity-100" : ""
            }`}
            style={{ animationDelay: "100ms" }}
          >
            OUR PARTNER NETWORK
          </h2>
        </div>

        {/* Description Text */}
        <div className="text-center mb-5 md:mb-12 ">
          <p
            className={`font-[family-name:var(--font-inter)] max-w-[330px] md:max-w-3xl mx-auto text-black text-[12px] md:text-[16px] font-[500] leading-relaxed slide-down-fade opacity-0 ${
              inView ? "opacity-100" : ""
            }`}
            style={{ animationDelay: "200ms" }}
          >
            Grow alongside industry leaders. Explore our network of successful
            channel partners and witness how Rattha Realty can equip you with
            the tools and support to achieve mutual success
            <br className="hidden md:block" />
            Become a partner today!
          </p>
        </div>

        {/* Mobile Infinite Scroll */}
        <div className="md:hidden relative overflow-hidden">
          <div className="flex animate-infinite-scroll">
            {infiniteLogos.map((partner, index) => (
              <div
                key={`mobile-${index}`}
                className="flex-shrink-0 w-[140px] mx-3"
              >
                <div className="border border-gray-200 rounded-md p-4 h-32 flex items-center justify-center shadow-sm bg-white">
                  <div className="relative w-full h-full">
                    <Image
                      src={partner.imagePath}
                      alt={`${partner.name} logo`}
                      fill
                      sizes="140px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {partnerLogos.map((partner, index) => (
            <div
              key={`desktop-${index}`}
              className={`border border-gray-200 rounded-md p-4 flex items-center justify-center h-32 md:h-40 transform transition-all duration-500 shadow-sm hover:shadow-md hover:border-blue-200 slide-up-fade opacity-0 ${
                inView ? "opacity-100" : ""
              }`}
              style={{
                animationDelay: getAnimationDelay(index),
                animationDuration: "0.8s",
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={partner.imagePath}
                  alt={`${partner.name} logo`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}