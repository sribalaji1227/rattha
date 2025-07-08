"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ArrowDownToLine } from "lucide-react";
interface RevealSectionProps {
  title: string;
  description: string;
  className?: string;
  isProperty?: boolean;
}

const RevealSection: React.FC<RevealSectionProps> = ({
  title,
  description,
  className = "",
  isProperty=false
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // ── capture the current elements once ──
    const titleEl = titleRef.current;
    const descEl = descRef.current;

    if (!titleEl || !descEl) return; // nothing to observe

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("animate-in");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    [titleEl, descEl].forEach((el) => observer.observe(el));

    // ── cleanup uses the same captured nodes ──
    return () => {
      [titleEl, descEl].forEach((el) => observer.unobserve(el));
    };
  }, []); // deps stay empty

  return (
    <section className={`py-14 bg-white ${className}`}>
      <div className="container mx-auto px-4 flex flex-col justify-center items-center sm:px-6 lg:px-8 text-center">
        <h2
          ref={titleRef}
          className="opacity-0 transition-all w-[250px] md:w-[100%] lg:w-[100%] text-center duration-700 ease-out text-[24px] font-cormorant sm:text-[24px] md:text-[40px] font-[500] text-[#107BC0] mb-[22px] sm:mb-8 uppercase"
        >
          {title}
        </h2>
        <p
          ref={descRef}
          className="opacity-0 transition-all duration-700 font-inter ease-out delay-300 font-[500] mx-auto text-[#000000] text-[16px] sm:text-[16px] leading-relaxed max-w-[329px] md:max-w-[780px]"
        >
          {description}
        </p>
      </div>
      {isProperty && (
        <div className="flex flex-col items-center mx-[20px] lg:mx-0">
          <div className="bg-[#F9F9F9] px-10 py-[10px] text-[12px] md:text-[16px] font-medium text-[#111827] my-[30px] max-w-[300px] md:max-w-max font-inter">
            RERA&nbsp;Number&nbsp;:&nbsp;
            <span className="text-[#9A9898] font-medium">
              TN/29/building/0020/2025
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-start md:justify-center gap-[16px] md:gap-[38px] max-w-[300px] md:max-w-full">
            <Link
              href={"/"}
              className={
                "font-inter w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#107BC0] px-[10px] py-[10px] md:px-[40px] md:py-[14px] text-[13px] md:text-[15px] font-semibold uppercase tracking-wider text-[#107BC0] transition hover:bg-[#23407C] hover:text-white"
              }
            >
              Payment plan
              <ArrowRight size={20} strokeWidth={2.4} />
            </Link>
            <Link
              href={"/"}
              className={
                "font-inter w-full md:w-auto inline-flex items-center justify-center  gap-2 rounded-full border  border-[#107BC0] px-[10px] py-[10px] md:px-[40px] md:py-[14px] text-[13px] md:text-[15px] font-semibold uppercase tracking-wider text-[#107BC0] transition hover:bg-[#23407C] hover:text-white"
              }
            >
              Download floor plans
              <ArrowDownToLine size={20} strokeWidth={2.4} />
            </Link>
            <Link
              href={"/"}
              className={
                "font-inter w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-full border  border-[#107BC0] px-[10px] py-[10px] md:px-[40px] md:py-[14px] text-[13px] md:text-[15px] font-semibold uppercase tracking-wider text-[#107BC0] transition hover:bg-[#23407C] hover:text-white"
              }
            >
              Download brochure
              <ArrowDownToLine size={20} strokeWidth={2.4} />
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default RevealSection;
