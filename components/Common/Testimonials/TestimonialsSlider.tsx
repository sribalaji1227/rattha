"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { chevronForwardIcon } from "@/constants/assets";

interface Testimonial {
  name: string;
  rating: number;
  text: string;
}

interface TestimonialsSliderProps {
  testimonials: Testimonial[];
}

const TestimonialsSlider: React.FC<TestimonialsSliderProps> = ({ testimonials }) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<any>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

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
    <div className="relative w-full lg:px-15 mx-auto md:px-20 px-2 py-20 bg-white ">
      <SwiperComponent
        loop={false}
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        className="overflow-visible"
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
          320: { slidesPerView: 1.1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial, idx) => (
          <SwiperSlide key={idx}>
            <TestimonialCard {...testimonial} />
          </SwiperSlide>
        ))}
      </SwiperComponent>

      {/* CTA Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-[#107BC0] h-[50px] w-[230px] hover:bg-blue-700 text-white font-medium text-sm px-6 py-3 rounded-full">
          REVIEW US ON GOOGLE
        </button>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          ref={prevRef}
          disabled={isBeginning}
          className={`w-[50px] h-[50px] rounded-full flex items-center justify-center z-10 rotate-180 border transition-all ${
            isBeginning
              ? "bg-transparent border-[#D2EDFF] opacity-50 cursor-default"
              : "bg-[#D2EDFF] border-[#D2EDFF] hover:bg-[#BDE2F9] cursor-pointer"
          }`}
        >
          <Image src={chevronForwardIcon} alt="Prev" width={11} height={19} />
        </button>

        <button
          ref={nextRef}
          disabled={isEnd}
          className={`w-[50px] h-[50px] rounded-full flex items-center justify-center z-10 border transition-all ${
            isEnd
              ? "bg-transparent border-[#D2EDFF] opacity-50 cursor-default"
              : "bg-[#D2EDFF] border-[#D2EDFF] hover:bg-[#BDE2F9] cursor-pointer"
          }`}
        >
          <Image src={chevronForwardIcon} alt="Next" width={11} height={19} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSlider;

interface TestimonialCardProps {
  name: string;
  rating: number;
  text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, rating, text }) => {
  return (
    <div className="relative bg-white border border-gray-200 mb-4 rounded-lg mt-6 p-6 h-[330px] lg:h-[300px]  w-[310px] sm:w-[360px] lg:w-[350px] shadow-sm overflow-visible">
      {/* Quote icon circle */}
      <div className="absolute -top-6 left-6 w-14 h-14 lg:bg-[#EDEDED] bg-[#D2EDFF] rounded-full flex items-center justify-center text-blue-500 text-xl font-bold">
        <img src='/assets/icons/quotes.png' width={28} height={28} alt="quotes" />
      </div>

      {/* Content */}
      <div className="mt-6 flex flex-col items-start justify-start">
        <h3 className="font-[600] font-inter text-[#08110C]">{name}</h3>
        <div className="text-sm text-gray-700 font-medium mt-1 mb-2">
          {rating}{' '}
          <span className="text-yellow-500 text-sm">
            {'★'.repeat(5)}
          </span>
        </div>
        <p className="text-sm font-inter font-[500] text-[#313131] leading-[24px] text-left">{text}</p>
      </div>
    </div>
  );
};

