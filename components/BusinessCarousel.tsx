"use client"

import { useRef } from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react"; 
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { otherBussinessData } from '@/constants/content';
import { chevronForwardIcon, } from '@/constants/assets';

const BusinessCarousel: React.FC = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null); 

  return (
    <div className="w-full  relative overflow-hidden  mb-8">
      <SwiperComponent
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        className="overflow-visible!"
        // onSwiper={(swiper) => setSwiperInstance(swiper)}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {otherBussinessData.map((business, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="  bg-white relative  pt-[15px] pb-[30px] shadow-[0 4px 6px rgba(0, 0, 0, 0.1)] transition-transform duration-[0.3] ease-in-out -top-[50%] hover:translate-y-[-5px ]">
                <Image src={business.image} alt={business.title} className="object-cover" height={300} width={800} />
                <h3 className=" text-black font-semibold text-md text-center m-4 capitalize">{business.title}</h3>
              </div>
            </SwiperSlide>
          );
        })}
      </SwiperComponent>
      <div className="flex justify-center gap-5">
        <button ref={prevRef} className="bg-[#D2EDFF] rounded-[50%] w-[56px] h-[56px] flex items-center justify-center text-xl cursor-pointer z-10 border-0 -left-[50] rotate-180 review ">
          <Image src={chevronForwardIcon} width="11" height="19" alt="chevron" />
        </button>
        <button ref={nextRef} className={"bg-[#D2EDFF] rounded-[50%] w-[56] h-[56] flex items-center justify-center text-xl cursor-pointer z-10 border-0 -right-[50] review"}>
          <Image src={chevronForwardIcon} width="11" height="19" alt="chevron" />
        </button>
      </div>
    </div>
  );
};

export default BusinessCarousel;
