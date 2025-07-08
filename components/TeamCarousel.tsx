"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { managementTeamData } from "@/constants/content";
import { chevronForwardIcon } from "@/constants/assets";

const TeamCarousel: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<any>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Fix: Reassign navigation buttons after swiper is ready and refs are set
  useEffect(() => {
    if (
      swiperRef.current &&
      prevRef.current &&
      nextRef.current &&
      swiperRef.current.params
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [prevRef.current, nextRef.current]);

  return (
    <div className="w-full relative overflow-hidden mb-8">
      <SwiperComponent
        loop={false}
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        className="!overflow-visible"
        navigation={{
          prevEl: prevRef.current!,
          nextEl: nextRef.current!,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        breakpoints={{
          320: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {managementTeamData.map((team, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white relative pt-[15px] pb-[15px] shadow-[0_10px_20px_rgba(0,0,0,0.08)] transition-transform duration-300 ease-in-out hover:-translate-y-[5px] mx-auto">
              <div className="group relative w-full max-w-[360px] h-[380px] sm:max-w-[800px] sm:h-[300px] overflow-hidden">
                <Image
                  src={team.image}
                  alt={team.name}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gray-900 opacity-0 transition-opacity duration-300 group-hover:opacity-60" />
                <p className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-4 text-center text-[12px] sm:text-[16px]">
                  {team.description}
                </p>
              </div>
              <div className="px-6 py-[20px] flex justify-between items-center">
                <div>
                  <h3 className="m-0 text-black font-semibold text-lg mb-1 font-cormorant">
                    {team.name}
                  </h3>
                  <p className="text-black text-[13px] font-inter capitalize">
                    {team.role}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-5 mt-8">
        <button
          ref={prevRef}
          disabled={isBeginning}
          className={`
            rounded-full w-[40px] sm:w-[56px] h-[40px] sm:h-[56px] flex items-center justify-center p-4 z-10 rotate-180
            ${isBeginning
              ? "bg-transparent border border-[#D2EDFF] opacity-50 cursor-default"
              : "border border-[#D2EDFF] bg-[#D2EDFF] cursor-pointer"
            }
          `}
        >
          <Image src={chevronForwardIcon} width={11} height={19} alt="Prev" />
        </button>

        <button
          ref={nextRef}
          disabled={isEnd}
          className={`
            rounded-full w-[40px] sm:w-[56px] h-[40px] sm:h-[56px] flex items-center justify-center p-4 z-10
            ${isEnd
              ? "bg-transparent border border-[#D2EDFF] opacity-50 cursor-default"
              : "border border-[#D2EDFF] bg-[#D2EDFF] cursor-pointer"
            }
          `}
        >
          <Image src={chevronForwardIcon} width={11} height={19} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default TeamCarousel;
