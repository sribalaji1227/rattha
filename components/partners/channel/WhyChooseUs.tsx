"use client";
import React, { useEffect, useRef } from "react";
import { tickIcon } from "@/constants/assets";
import Image from "next/image";

interface Benefit {
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  heading: string;
  benefits: Benefit[];
  iconSrc?: string; // Optional custom icon
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ 
  heading, 
  benefits,
  iconSrc = tickIcon // Default to tickIcon if not provided
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const benefitRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Observer for heading animation
    const headingObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
            headingObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observer for benefit cards animation
    const benefitObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Staggered animation with 100ms delay between each card
            setTimeout(() => {
              entry.target.classList.add("opacity-100", "translate-y-0");
              entry.target.classList.remove("opacity-0", "translate-y-16");
            }, index * 100);

            benefitObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    // Apply observers
    if (headingRef.current) {
      headingObserver.observe(headingRef.current);
    }

    benefitRefs.current.forEach((ref) => {
      if (ref) {
        benefitObserver.observe(ref);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      headingObserver.disconnect();
      benefitObserver.disconnect();
    };
  }, []);

  // Helper function for icon animation
  const iconAnimation = (index: number) => {
    return {
      animation: `ping 1s cubic-bezier(0, 0, 0.2, 1) ${index * 0.15 + 0.5}s`,
      animationIterationCount: 1,
    };
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-white overflow-hidden"
      data-testid="why-choose-us-section"
    >
      <div className="max-w-[1150px] mx-auto px-6  lg:px-0">
        <div className="text-center mb-12">
          <h2
            ref={headingRef}
            className="text-[24px] md:text-[40px] px-[35px] md:px-0 font-cormorant font-[500] text-[#107BC0] transition-all duration-700 ease-out opacity-0 translate-y-10"
            data-testid="section-heading"
          >
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 max-w-[1150px] mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={`benefit-${index}`}
              ref={(el) => {
                benefitRefs.current[index] = el;
                return undefined;
              }}
              className="border border-[#D0D0D0]  p-6 flex items-start hover:shadow-md transition-all duration-300 ease-in-out opacity-0 translate-y-16"
              style={{ transitionDelay: `${index * 100}ms` }}
              data-testid={`benefit-card-${index}`}
            >
              <div className="flex-shrink-0 mr-4">
                <div
                  className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center"
                  style={iconAnimation(index)}
                >
                  <span className="transform transition-transform duration-300 hover:scale-110">
                    <Image
                      src={iconSrc}
                      alt="benefit icon"
                      width={52}
                      height={47}
                    />
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-[16px] md:text-[18px] font-[500] text-[#000000] mb-1 group-hover:text-[#107BC0] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-[#808080] text-[14px] md:text-[16px] font-[400]">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

  
      </div>
    </section>
  );
};

export default WhyChooseUs;