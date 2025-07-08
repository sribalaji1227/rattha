"use client";

import React, { useState } from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { chevronForwardIcon } from "@/constants/assets";


export const constructionData = [
  {
    image: "/assets/images/construction-1.png",
    alt: "Excavation work at Ratttha Grandéur – Dec 2024",
    caption: "Dec 2024",
  },
  {
    image: "/assets/images/construction-2.png",
    alt: "Rebar layout at Ratttha Grandéur – Dec 2024",
    caption: "Dec 2024",
  },
  {
    image: "/assets/images/construction-1.png",
    alt: "Excavation work at Ratttha Grandéur – Dec 2024",
    caption: "Dec 2024",
  },
  {
    image: "/assets/images/construction-2.png",
    alt: "Rebar layout at Ratttha Grandéur – Dec 2024",
    caption: "Dec 2024",
  },
  {
    image: "/assets/images/construction-1.png",
    alt: "Excavation work at Ratttha Grandéur – Dec 2024",
    caption: "Dec 2024",
  },
  {
    image: "/assets/images/construction-2.png",
    alt: "Rebar layout at Ratttha Grandéur – Dec 2024",
    caption: "Dec 2024",
  },
];

const ConstructionCarousel: React.FC = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="w-full relative overflow-hidden mb-8">
      <SwiperComponent
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        className="!overflow-visible"
        navigation={{ prevEl, nextEl }}
        onSwiper={(swiper) => {
          const nav = swiper.params.navigation;
          // guard out the `true`/`false` case so TS knows this is the object
          if (nav && typeof nav !== "boolean") {
            nav.prevEl = prevEl;
            nav.nextEl = nextEl;
            swiper.navigation.init();
            swiper.navigation.update();
          }

          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        breakpoints={{
          320: { slidesPerView: 1.1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
      >
        {constructionData.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white relative pt-[15px] pb-[15px]">
              <div className="group relative">

                <div className="relative w-full max-w-[351px] h-[300px] sm:max-w-[550px] sm:h-[460px] mx-auto">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-all duration-300 rounded"
                  />
                </div>

                <div className="absolute inset-0" />
                <p className="absolute top-[20px] left-1/2 -translate-x-1/2 text-white p-4 text-center text-[12px] sm:text-[16px]">
                  <Image
                    src="/assets/images/rattha_white_logo.png"
                    width={182}
                    height={62}
                    alt="Next"
                  />
                </p>
              </div>
              <div className="px-6 py-4 flex justify-center items-center border border-[#E3E3E3]">
                <p className="text-black text-base font-medium font-inter">
                  {item.caption}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>
      <div className="flex justify-center gap-5 mt-8">
        <button
          ref={setPrevEl}
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
          ref={setNextEl}
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

export default ConstructionCarousel;