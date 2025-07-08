"use client";

import { useEffect, useRef, useState } from "react";

interface PropertyValueSectionProps {
  heading: string;
  description: string;
  buttonText: string;
  buttonAction?: "download" | "navigate" | "custom";
  buttonUrl?: string;
  className?: string;
}

export function PropertyValueSection({
  heading,
  description,
  buttonText,
  buttonAction = "download",
  buttonUrl,
  className = "",
}: PropertyValueSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // capture the node only once
    const sectionEl = sectionRef.current;
    if (!sectionEl) return; // nothing to watch yet

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // run once
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionEl);

    // cleanup uses the SAME captured element
    return () => {
      observer.unobserve(sectionEl);
    };
  }, []);

  const handleButtonClick = () => {
    switch (buttonAction) {
      case "download":
        console.log("Download clicked");
        // Add your download logic here
        break;
      case "navigate":
        if (buttonUrl) {
          window.location.href = buttonUrl;
        }
        break;
      case "custom":
        console.log("Button clicked");
        // Add custom logic here
        break;
      default:
        console.log("Button clicked");
    }
  };

  return (
    <section className={`py-12 ${className}`} ref={sectionRef}>
      <div className="mx-auto max-w-[1160px]">
        <div
          className={`text-center px-5 pt-[30px] pb-[40px] transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ background: "linear-gradient(to right, #107BC0, #0A659F)" }}
        >
          <h2
            className={`text-[24px] md:text-[40px] font-[500] text-white mb-8 transition-all duration-700 font-cormorant ease-out uppercase ${
              isVisible ? "slide-down-fade" : "opacity-0"
            }`}
          >
            {heading}
          </h2>

          <p
            className={`font-inter max-w-[598px] mx-auto text-white text-[14px] md:text-[16px] font-[400] leading-relaxed mb-8 transition-all duration-700 ease-out delay-200 ${
              isVisible ? "slide-up-fade" : "opacity-0"
            }`}
          >
            {description}
          </p>

          <div
            className={`flex justify-center items-center transition-all duration-700 ease-out delay-300 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <button
              className="font-inter border-2 text-[15px] border-white text-white px-[80px] md:px-[100px] py-[13px] rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 uppercase font-medium hover:scale-105"
              onClick={handleButtonClick}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
