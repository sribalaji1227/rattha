"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { projectData } from "@/constants/content";
import { arrowLeftIcon, arrowRightIcon } from "@/constants/assets";

interface Project {
  id: string | number;
  image: string;
  title?: string;
}


const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  /* helper */
  const handleNext = useCallback(() => {
    setCurrentIndex((i) => (i === projectData.length - 1 ? 0 : i + 1));
  }, []);

  /* ------------ 3.  make startAutoSlide stable with useCallback ------------ */
  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(handleNext, 5_000); // 5 s
  }, [handleNext]);

  /* ------------ 4.  useEffect depends on *startAutoSlide* ------------ */
  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current!);
  }, [startAutoSlide]);

  /* handlers re-use startAutoSlide to reset timer */
  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    startAutoSlide();
    setCurrentIndex((i) => (i === 0 ? projectData.length - 1 : i - 1));
    setTimeout(() => setIsTransitioning(false), 750);
  };

  return (
    <div className="w-full relative overflow-hidden px-4 sm:px-12 lg:px-24">
      <div className="w-full max-w-[1120px] mx-auto">
        <div className="relative h-[600px] sm:h-[700px] lg:h-[800px] overflow-hidden">
          {projectData.map((project: Project, index) => {
            const isActive = index === currentIndex;
            const isPrev =
              index ===
              (currentIndex - 1 + projectData.length) % projectData.length;
            const isNext = index === (currentIndex + 1) % projectData.length;

            return (
              <div
                key={project.id}
                className={`absolute w-full h-full transition-all duration-750 ease-in-out ${
                  isActive
                    ? "opacity-100 translate-x-0 z-20"
                    : isPrev
                    ? "opacity-0 -translate-x-full z-10"
                    : isNext
                    ? "opacity-0 translate-x-full z-10"
                    : "opacity-0 translate-x-full z-0"
                }`}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={project.image}
                    alt={project.title || "Project image"}
                    fill
                    className={`object-cover transition-transform duration-1000 ease-out ${
                      isActive ? "scale-100" : "scale-110"
                    }`}
                  />

                  {/* Dark overlay for better text contrast */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent sm:bg-transparent" /> */}

                  {/* Mobile Layout */}
                  <div className="sm:hidden absolute inset-0 flex flex-col justify-between">
                    {/* Mobile Content Section */}
                    <div className="flex-1 flex flex-col justify-center items-center px-6 text-center">
                      <div
                        className={`text-xs font-semibold mb-4 text-white uppercase tracking-widest transition-all duration-700 ${
                          isActive
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-5"
                        } ${isActive ? "delay-200" : ""}`}
                      >
                        NEW LAUNCHES
                      </div>

                      <h2
                        className={`text-[28px] font-normal mb-6 text-white transition-all duration-700 leading-tight ${
                          isActive
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                        } ${isActive ? "delay-300" : ""}`}
                      >
                        {project.title || "RAJTHA GRANDEUR"}
                      </h2>

                      <button
                        className={`border border-white py-3 px-8 rounded-full text-sm font-medium text-white transition-all duration-700 hover:bg-white hover:text-black transform ${
                          isActive
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                        } ${isActive ? "delay-[400ms]" : ""}`}
                      >
                        LEARN MORE
                      </button>
                    </div>

                    {/* Mobile Pagination Dots */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {projectData.map((_, dotIndex) => (
                        <button
                          key={dotIndex}
                          onClick={() => {
                            if (!isTransitioning) {
                              setIsTransitioning(true);
                              setCurrentIndex(dotIndex);
                              startAutoSlide();
                              setTimeout(() => {
                                setIsTransitioning(false);
                              }, 750);
                            }
                          }}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            dotIndex === currentIndex
                              ? "bg-white w-8"
                              : "bg-white/50 hover:bg-white/75"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Mobile Navigation Arrows */}
                    <button
                      onClick={handlePrevious}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md p-2.5 transition-all duration-300 hover:shadow-lg hover:scale-110 z-30"
                      disabled={isTransitioning}
                    >
                      <Image
                        src={arrowLeftIcon}
                        width={20}
                        height={20}
                        alt="Previous"
                        className="transition-transform duration-300"
                      />
                    </button>

                    <button
                      onClick={handleNext}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md p-2.5 transition-all duration-300 hover:shadow-lg hover:scale-110 z-30"
                      disabled={isTransitioning}
                    >
                      <Image
                        src={arrowRightIcon}
                        width={20}
                        height={20}
                        alt="Next"
                        className="transition-transform duration-300"
                      />
                    </button>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden sm:flex h-full items-center justify-center flex-col">
                    <div
                      className={`text-xs sm:text-sm font-semibold leading-[100%] mb-4 sm:mb-8 bg-transparent text-white relative z-30 transition-all duration-700 tracking-widest uppercase ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-5"
                      } ${isActive ? "delay-200" : ""}`}
                    >
                      NEW LAUNCHES
                    </div>

                    <div
                      className={`text-[32px] sm:text-[40px] lg:text-[48px] mb-8 sm:mb-12 leading-tight tracking-[0.02em] font-normal bg-transparent text-white relative z-30 transition-all duration-700 ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-10"
                      } ${isActive ? "delay-300" : ""}`}
                    >
                      {project.title || "RAJTHA GRANDEUR"}
                    </div>

                    <button
                      className={`border border-white py-3 sm:py-[16.5px] px-6 sm:px-[38.5px] rounded-full text-sm sm:text-[15px] font-medium leading-[100%] bg-transparent text-white relative z-30 transition-all duration-700 hover:bg-white hover:text-black tracking-wider ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-10"
                      } ${isActive ? "delay-[400ms]" : ""}`}
                    >
                      LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Desktop Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="hidden sm:block group absolute left-6 lg:left-12 top-1/2 transform -translate-y-1/2 w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] lg:w-[64px] lg:h-[64px] bg-white rounded-full shadow-md p-3 sm:p-4 lg:p-5 transition-all duration-300 hover:shadow-lg hover:scale-110 z-30"
            disabled={isTransitioning}
          >
            <Image
              src={arrowLeftIcon}
              width={24}
              height={24}
              alt="Previous"
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
          </button>

          <button
            onClick={handleNext}
            className="hidden sm:block group absolute right-6 lg:right-12 top-1/2 transform -translate-y-1/2 w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] lg:w-[64px] lg:h-[64px] bg-white rounded-full shadow-md p-3 sm:p-4 lg:p-5 transition-all duration-300 hover:shadow-lg hover:scale-110 z-30"
            disabled={isTransitioning}
          >
            <Image
              src={arrowRightIcon}
              width={24}
              height={24}
              alt="Next"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          {/* Desktop Pagination Dots */}
          <div className="hidden sm:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 gap-2 z-30">
            {projectData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(index);
                    startAutoSlide();
                    setTimeout(() => {
                      setIsTransitioning(false);
                    }, 750);
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
