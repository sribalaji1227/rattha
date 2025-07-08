"use client";
import dynamic from "next/dynamic";

const ReviewCarousel = dynamic(() => import("@/components/ReviewCarousel"), {
  ssr: false,
});

export default function TestimonialsSection() {
  return (
    <section className="mb-[110px]">
      <div className="max-w-[1120px] mx-auto text-center">
        <h2 className="text-[32px] font-normal mb-5 text-[#107BC0]">
          WHAT PEOPLE SAY?
        </h2>
        <p className="max-w-[806px] mx-auto text-black">
          Lorem ipsum dolor sit amet consectetur. At velit quis tellus quis eget
          pharetra sagittis maecenas congue. Neque volutpat vivamus pharetra mi
          ornare interdum turpis id.
        </p>
      </div>
      <ReviewCarousel />
    </section>
  );
}