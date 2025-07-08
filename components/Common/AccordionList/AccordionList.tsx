"use client";
import React, { useState, useCallback } from 'react';
import { Plus, Minus } from 'lucide-react';
import Image from "next/image";

export interface AccordionItemData {
  title: string;
  description: string;
}

interface AccordionListProps {
  heading: string;
  subtitle?: string;
  items: AccordionItemData[];
  imageSrc: string;
  ctaLabel?: string;
  isNumber?: boolean;
  desktopSize?: { width: number; height: number };
  mobileSize?: { width: number; height: number };
}

const AccordionList: React.FC<AccordionListProps> = ({
  heading,
  subtitle,
  items,
  imageSrc,
  ctaLabel = "",
  isNumber = false,
  desktopSize = { width: 600, height: 600 }, 
  mobileSize = { width: 380, height: 300 },  
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const toggle = useCallback(
    (i: number) => setActiveIndex((prev) => (prev === i ? -1 : i)),
    []
  );

  const mobileClass = `w-[${mobileSize.width}px] h-[${mobileSize.height}px]`;
  const desktopClass = `sm:w-[${desktopSize.width}px] sm:h-[${desktopSize.height}px]`;

  return (
    <section className="bg-white">
      <div className="max-w-[1190px] mx-auto pt-[0px] sm:pt-[32px] pb-[80px] sm:pb-[120px] flex flex-col md:flex-row items-start gap-[24px] md:gap-[64px] px-[20px]">
        <div className="w-full md:w-1/2">
          <div className={`${mobileClass} ${desktopClass} relative mx-auto`} style={{width:"100%"}}>
            <Image src={imageSrc} alt={heading} fill className="object-contain" />
          </div>
        </div>

        {/* Rest of the accordion remains same... */}
        <div className="w-full md:w-1/2 flex flex-col md:h-[580px] lg:h-[500px] xl:h-[550px] md:mt-4">
          <h2 className="text-[22px] sm:text-[40px] leading-[32px] sm:leading-[48px] text-[#107BC0] uppercase font-cormorant">
            {heading}
          </h2>
          {subtitle && (
            <p className="mt-[0px] sm:mt-[12px] text-[16px] leading-[24px] text-[#787878] font-inter">
              {subtitle}
            </p>
          )}
          <div className="mt-[20px] sm:mt-[40px] space-y-[24px] h-full">
            {items.map((item, i) => (
              <div key={i}>
                <div className="flex items-center cursor-pointer" onClick={() => toggle(i)}>
                  {isNumber && (
                    <span className="text-[22px] sm:text-[28px] leading-[28px] font-normal text-[#787878] font-inter">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                  )}
                  <span className={`${isNumber ? "ml-[16px]" : "ml-0"} text-[16px] md:text-[24px] leading-[28px] font-inter ${activeIndex === i ? "text-black" : "text-[#828282]"}`}>
                    {item.title}
                  </span>
                  <div className="ml-auto">
                    {activeIndex === i ? <Minus size={22} /> : <Plus size={22} />}
                  </div>
                </div>

                {activeIndex === i && (
                  <p className="my-[5px] sm:my-[18px] text-[14px] md:text-[16px] leading-[24px] text-[#787878] font-inter">
                    {item.description}
                  </p>
                )}
                <div className="mt-[16px] h-px bg-[#E5E5E5]" />
              </div>
            ))}
          </div>

          {ctaLabel && (
            <button className="mt-[32px] font-inter sm:mt-0 self-start bg-[#107BC0] text-white font-semibold text-[12px] sm:text-[14px] leading-[20px] py-[12px] px-[22px] sm:px-[32px] rounded-full hover:bg-[#077BDD] transition">
              {ctaLabel}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default AccordionList;
