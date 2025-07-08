"use client";
 
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

export const amenitiesData = [
  {
    id: 1,
    image: "/assets/images/sky.png",
    title: "Sky Amenities Deck",
  },
  {
    id: 2,
    image: "/assets/images/podium.png",
    title: "Podium Amenities",
  },
  {
    id: 3,
    image: "/assets/images/fitness.png",
    title: "Fitness Studios",
  },
  {
    id: 4,
    image: "/assets/images/sky.png",
    title: "Sky Amenities Deck",
  },
  {
    id: 5,
    image: "/assets/images/podium.png",
    title: "Podium Amenities",
  },
  {
    id: 6,
    image: "/assets/images/fitness.png",
    title: "Fitness Studios",
  },
];
 
const AmenitiesCarousel: React.FC = () => {
  return (
    <div className="w-full relative">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{
          el: ".amenities-pagination",
          clickable: true,
        }}
        breakpoints={{
          320: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {amenitiesData.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white">
              <div className="w-full max-sm:w-full max-w-[360px] h-[300px] sm:h-[300px] relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                // width={305}
                // height={267}
                className="w-full object-cover"
              />
              </div>
              <div className="px-4 py-[15px] border border-[#E3E3E3]">
                <p className="text-center text-black font-medium text-base font-inter">
                  {item.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination bullets */}
      <div className="amenities-pagination flex justify-center mt-4"></div>

      {/* Styles to override default bullets */}
      <style jsx global>{`
        .amenities-pagination .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: #d2edff;
          border-radius: 9999px;
          margin: 0 4px;
          opacity: 1;
          transition: width 0.3s;
        }
        .amenities-pagination .swiper-pagination-bullet-active {
          width: 20px;
          height: 6px;
          background: #107bc0;
        }
      `}</style>
    </div>
  );
};

export default AmenitiesCarousel;
