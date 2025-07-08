"use client";

import { useEffect, useRef, useState } from "react";

interface ExploreProjectsSectionProps {
  heading: string;
  description: string;
  className?: string;
}

export function ExploreProjectsSection({
  heading,
  description,
  className = ""
}: ExploreProjectsSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // ── capture the element only once ──
    const sectionEl = sectionRef.current;
    if (!sectionEl) return; // nothing to watch

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // run just once
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionEl);

    // ── cleanup uses the SAME captured element ──
    return () => {
      observer.unobserve(sectionEl);
    };
  }, []); // deps stay empty

  return (
    <section
      ref={sectionRef}
      className={`bg-white py-[20px] md:py-16 ${className}`}
    >
      <div className="mx-auto px-[20px] md:px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            className={`text-[24px] md:text-4xl font-[500] text-[#107BC0] mb-4 md:mb-8 transition-all duration-700 ease-out font-cormorant ${
              isVisible ? "slide-down-fade" : "opacity-0"
            }`}
          >
            {heading}
          </h2>

          <p
            className={`font-inter max-w-[850px] mx-auto text-[#000000] text-[12px] font-[500] md:text-[16px] leading-relaxed transition-all duration-700 ease-out delay-200 ${
              isVisible ? "slide-up-fade" : "opacity-0"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}