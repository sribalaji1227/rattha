"use client";

import React, { useEffect, useRef } from "react";

interface PartnerWithExcellenceProps {
  title: string;
  description: string;
  className?: string;
}

const PartnerWithExcellence: React.FC<PartnerWithExcellenceProps> = ({
  title,
  description,
  className = "",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Animation observer setup
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("animate-in");

            // Add specific animations based on element
            if (entry.target === titleRef.current) {
              titleRef.current.classList.add("slide-down-fade");
            }

            if (entry.target === textRef.current) {
              textRef.current.classList.add("slide-up-fade");
            }

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observe all animated elements
    [titleRef, textRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      [titleRef, textRef].forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div className={className}>
      <section ref={sectionRef} className="py-14  bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2
              ref={titleRef}
              className="text-[24px]  md:text-[40px] font-[500] text-[#107BC0] mb-8 opacity-0 transition-all duration-700 ease-out"
            >
              {title}
            </h2>

            <p
              ref={textRef}
              className="  font-[family-name:var(--font-inter)] max-w-[329px] md:max-w-[780px] font-[500] mx-auto text-[#000000] text-[12px] md:text-[16px] leading-relaxed opacity-0 transition-all duration-700 ease-out delay-300"
            >
              {description}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerWithExcellence;