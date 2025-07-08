import React from "react"; 

export default function IntroSection() {
  return (
    <section className={`py-[50px]`}>
      <div className="max-w-[750px] mx-auto text-center">
        <h1 className="text-[40px] text-[#107BC0] mb-[17px] font-lemonmilk leading-[60px] tracking-[1%]">
          CRAFTING LEGACIES BEYOND LUXURY
        </h1>
        <p className="text-black text-base leading-[28px]">
          Our iconic developments cater to discerning individuals who seek
          nothing but the extraordinary. Experience a world where every detail
          is meticulously crafted, every space is a statement, and every home is
          an enduring symbol of refinement.
        </p> 
      </div>
    </section>
  );
}