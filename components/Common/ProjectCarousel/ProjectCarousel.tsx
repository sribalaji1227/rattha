"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { arrowLeftIcon, arrowRightIcon } from "@/constants/assets";

export interface Project {
  id: number | string;
  image: string;
  title?: string;
}

interface ProjectCarouselProps {
  items: Project[];
  autoSlide?: boolean;
  interval?: number;
  sliderView?: boolean;
  desktopSize?: { width: number; height: number };
  mobileSize?: { width: number; height: number };
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  items,
  autoSlide = true,
  interval = 5000,
  sliderView = true,
  desktopSize = { width: 1100, height: 800 }, 
  mobileSize = { width: 380, height: 400 }, 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
   
  const mobileClass = `max-w-[${mobileSize.width}px] h-[${mobileSize.height}px]`;
  const desktopClass = `sm:max-w-[${desktopSize.width}px] sm:h-[${desktopSize.height}px]`;

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((i) => (i === items.length - 1 ? 0 : i + 1));
    setTimeout(() => setIsTransitioning(false), 750);
  }, [isTransitioning, items.length]);

  const handlePrevious = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((i) => (i === 0 ? items.length - 1 : i - 1));
    setTimeout(() => setIsTransitioning(false), 750);
  }, [isTransitioning, items.length]);

  useEffect(() => {
    if (!autoSlide) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(handleNext, interval);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoSlide, interval, handleNext]);

  if (!items || items.length === 0) return null;

  const renderSlideContent = (project: Project) => (
    <div className={`${mobileClass} ${desktopClass} mx-auto relative w-full`}>
      <Image
        src={project.image}
        alt={project.title ?? ""}
        fill
        className="object-cover"
      />

      {/* Mobile overlay (only <640px) */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-6 sm:hidden space-y-2 text-center">
        <div className="text-xs font-semibold uppercase tracking-widest text-white">
          NEW LAUNCHES
        </div>
        <div className="text-[20px] md:text-[26px] font-medium text-white pb-5">
          {project.title}
        </div>
        <button className="border border-white rounded-full px-4 py-2 text-sm  text-white hover:bg-white hover:text-black transition">
          LEARN MORE
        </button>
      </div>

      {/* Desktop overlay (only ≥640px) */}
      <div className="hidden sm:flex h-full flex-col items-center justify-center space-y-4 relative">
        <div className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-white font-inter">
          NEW LAUNCHES
        </div>
        <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] text-white pb-5 uppercase font-normal font-cormorant">
          {project.title}
        </h2>
        <button className="border border-white rounded-full px-6 py-3 text-white hover:bg-white hover:text-black transition font-inter">
          LEARN MORE
        </button>
      </div>
    </div>
  );

  if (!sliderView || items.length === 1) {
    const project = items[0];
    return (
      <div className="w-full px-[20px] sm:px-12 lg:px-24">
        <div className="max-w-[1150px] mx-auto relative sm:h-[800px] lg:h-[800px] overflow-hidden">
          {renderSlideContent(project)}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-[20px] sm:px-12 lg:px-24">
      <div className="max-w-[1150px] mx-auto relative h-[400px] sm:h-[800px] lg:h-[800px] overflow-hidden">
        {items.map((project, idx) => {
          const isActive = idx === currentIndex;
          const isPrev =
            idx === (currentIndex - 1 + items.length) % items.length;
          const isNext = idx === (currentIndex + 1) % items.length;

          let posClasses = "";
          if (isActive) posClasses = "opacity-100 translate-x-0 z-20";
          else if (isPrev) posClasses = "opacity-0 -translate-x-full z-10";
          else if (isNext) posClasses = "opacity-0 translate-x-full z-10";
          else posClasses = "opacity-0 translate-x-full z-0";

          return (
            <div
              key={project.id}
              className={`absolute flex justify-center items-center inset-0 transition-all duration-750 ease-in-out ${posClasses}`}
            >
              {renderSlideContent(project)}
            </div>
          );
        })}

        {/* Arrows */}
        <button
          onClick={handlePrevious}
          disabled={isTransitioning}
          className="absolute left-5 lg:left-12 top-1/2 -translate-y-1/2 w-8 sm:w-14 lg:w-16 h-8 sm:h-14 lg:h-16 bg-white rounded-full shadow-md flex items-center justify-center p-2 sm:p-4 hover:scale-110 transition z-30"
        >
          <Image src={arrowLeftIcon} width={24} height={24} alt="Prev" />
        </button>
        <button
          onClick={handleNext}
          disabled={isTransitioning}
          className="absolute right-5 lg:right-12 top-1/2 -translate-y-1/2 w-8 sm:w-14 lg:w-16 h-8 sm:h-14 lg:h-16 bg-white rounded-full shadow-md flex items-center justify-center p-2 sm:p-4 hover:scale-110 transition z-30"
        >
          <Image src={arrowRightIcon} width={24} height={24} alt="Next" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (isTransitioning) return;
                setIsTransitioning(true);
                setCurrentIndex(i);
                setTimeout(() => setIsTransitioning(false), 750);
              }}
              className={`rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-8 h-2 bg-white"
                  : "w-2 h-2 bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;