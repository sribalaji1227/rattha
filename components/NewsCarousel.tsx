"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { slides } from "@/constants/content";
import { arrowLeftIcon, arrowRightIcon } from "@/constants/assets";

interface Slide {
  id: number;
  image: string;
  title: string;
  text: string;
}

export default function NewsCarousel() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="relative w-full mx-auto">
      <Swiper
        initialSlide={1}
        slidesPerView={1.2}
        centeredSlides={true}
        spaceBetween={20}
        loop={false}
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (prevRef.current && nextRef.current) {
            swiper.params.navigation = {
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            };
          }
        }}
        onSwiper={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        breakpoints={{
          320: { slidesPerView: 1.5, spaceBetween: 16 },
          640: { slidesPerView: 1.5, spaceBetween: 20 },
          1024: { slidesPerView: 1.5, spaceBetween: 30 },
          1280: { slidesPerView: 1.5, spaceBetween: 40 },
        }}
      >
        {slides.map(({ id, image, title, text }: Slide) => (
          <SwiperSlide key={id}>
            <div
              className="
                relative flex items-center justify-center
                max-w-[280px] w-full h-[300px] sm:h-[480px] md:h-[450px] sm:max-w-[750px]
                bg-cover bg-center rounded-lg
              "
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="relative z-10 text-center text-white max-w-[180px] sm:max-w-[400px]">
                <h2 className="text-[16px] sm:text-[26px] font-normal whitespace-normal font-cormorant break-words uppercase leading-[28px] sm:leading-[32px]">
                  Why Chennai Is Becoming a Hotspot for Real Estate Investment
                </h2>
                <p className="text-xs sm:text-sm md:text-base mt-2 font-inter">
                  {text}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        ref={prevRef}
        disabled={isBeginning}
        className="swiper-button-prev !w-[33px] sm:!w-[64px] !h-[33px] sm:!h-[64px] 
                  absolute !left-12 lg:!left-44 top-1/2 transform -translate-y-1/2 
                  bg-white rounded-full shadow-md p-[10px] sm:p-5 after:!content-[''] font-inter"
      >
        <Image src={arrowLeftIcon} width={50} height={50} alt="left" />
      </button>
      <button
        ref={nextRef}
        disabled={isEnd}
        className="swiper-button-next !w-[33px] sm:!w-[64px] !h-[33px] sm:!h-[64px] 
                  absolute !right-12 lg:!right-44 top-1/2 transform -translate-y-1/2 
                  bg-white rounded-full shadow-md p-[10px] sm:p-5 after:!content-[''] font-inter"
      >
        <Image src={arrowRightIcon} width={24} height={24} alt="right" />
      </button>
    </div>
  );
}
