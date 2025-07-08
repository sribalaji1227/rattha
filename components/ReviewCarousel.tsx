"use client";

import { useRef } from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react"; 
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { reviews } from '@/constants/content';
import { commaIcon, googleIcon, chevronForwardIcon } from '@/constants/assets';
import StarRating from "./shared/StarRating";

const ReviewCarousel: React.FC = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
 

  return (
    <div className="w-full max-w-[1100px] mx-auto relative overflow-hidden pt-[79px] mb-[27px]">
      <SwiperComponent
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        className="!overflow-visible"
        // onSwiper={(swiper) => setSwiperInstance(swiper)}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="border border-[#e0e0e0] rounded-xl bg-white relative pl-[36px] pr-[16px] pt-[15px] pb-[30px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out -top-1/2 hover:-translate-y-[5px]">
                <div className="flex justify-between">
                  <Image
                    className="relative -mt-[73px]"
                    src={commaIcon}
                    width={72}
                    height={72}
                    alt="comma"
                  />
                  <span className="flex items-center pb-5 text-black">
                    <Image
                      src={googleIcon}
                      width={26}
                      height={26}
                      alt="google icon"
                    />
                    &nbsp; a month ago
                  </span>
                </div>
                <h3 className="m-0 text-black font-semibold text-xl mb-1">
                  {review.name}
                </h3>
                <StarRating rating={4.9} />
                <p className="text-black">{review.review}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </SwiperComponent>
      
      <div className="block mx-auto text-center mt-[27px] mb-[28px]">
        <button className="bg-[#107BC0] py-[16.5px] px-[32px] rounded-[30px] text-[15px] font-medium text-white">
          REVIEW US ON GOOGLE
        </button>
      </div>
      
      <div className="flex justify-center gap-5">
        <button 
          ref={prevRef} 
          className="bg-[#D2EDFF] rounded-full w-[56px] h-[56px] flex items-center justify-center text-xl cursor-pointer z-10 border-0 -left-[50px] rotate-180"
        >
          <Image src={chevronForwardIcon} width={11} height={19} alt="chevron" />
        </button>
        <button 
          ref={nextRef} 
          className="bg-[#D2EDFF] rounded-full w-[56px] h-[56px] flex items-center justify-center text-xl cursor-pointer z-10 border-0 -right-[50px]"
        >
          <Image src={chevronForwardIcon} width={11} height={19} alt="chevron" />
        </button>
      </div>
    </div>
  );
};

export default ReviewCarousel;