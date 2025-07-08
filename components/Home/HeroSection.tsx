"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import { Header } from "@/components";
import { homeBanner } from "@/constants/assets";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className = "" }: HeroSectionProps) {
  const scrollToBottom = useCallback(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Header />
      <div className={`relative h-[50rem] w-full ${className}`}>
        <Image
          src={homeBanner}
          alt="Home Banner"
          fill
          priority
          style={{ objectFit: "cover" }}
        /> 
        <h1
          className={`
            absolute top-1/2 left-1/2 
            transform -translate-x-1/2 -translate-y-1/2 
            md:left-[165px] md:translate-x-0 
            z-10
            text-white
            text-[40px]
            leading-[58px]
            max-w-[400px]
            font-semibold
            px-4 py-2
          `}
        >
          Timeless Spaces. Crafted to Inspire.
        </h1>

        <button
          onClick={scrollToBottom}
          aria-label="Scroll to bottom"
          className="
            absolute bottom-5 left-1/2 
            transform -translate-x-1/2 
            z-10 
            cursor-pointer
            p-2  
          "
        >
          <ChevronDown size={25} color="#fff" />
        </button>
      </div>
    </>
  );
}
