import React from "react";

export default function NewLaunchBanner() {
  return (
    <section
      className="
        max-w-[1119px] mx-auto 
        bg-[url('/assets/images/home_section_2.png')] 
        h-[806px] w-screen
        relative px-8 
        flex flex-col justify-center items-center
      "
    >
      <h6 className="text-sm font-semibold leading-[100%] mb-8 text-white">
        NEW LAUNCH
      </h6>
      <h1 className="text-[40px] mb-[48px] leading-[60px] tracking-[1%] font-normal text-white">
        RATHA GRANDEUR
      </h1>
      <button className="border py-[16.5px] px-[38.5px] rounded-full text-[15px] font-semibold leading-[100%] text-white">
        LEARN MORE
      </button>
    </section>
  );
}
