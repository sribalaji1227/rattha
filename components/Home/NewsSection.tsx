"use client";
import dynamic from "next/dynamic";
import React from "react";

const NewsCarousel = dynamic(() => import("@/components/NewsCarousel"), {
  ssr: false,
});

export default function NewsSection() {
  return (
    <section className="mb-[161]">
      <div className="max-w-[1150px] m-auto">
        <div className="text-center mb-[36px]">
          <h2 className="font-normal text-[24px] sm:text-[40px] text-[#107BC0] uppercase my-[10px] mx-[15px] sm:mx-0 font-cormorant">
            Exclusive Updates. Timeless Insights.
          </h2>
          <p className="font-medium text-[14px] md:text-base leading-[24px] max-w-[800px] text-black m-auto px-[15px] sm:px-0 font-inter">
            Stay Informed with our latest News & updates, offering insights into
            design trends, community building, and the thriving real estate
            landscape in chennai.
          </p>
        </div>
        <NewsCarousel />
        <button className="mb-[40px] font-inter mt-[40px] bg-[#107BC0] text-[14px] md:text-[15px] text-white font-semibold px-[55.5px] py-[16.5px] rounded-[30px] m-auto block">
          VIEW ALL
        </button>
      </div>
    </section>
  );
}
