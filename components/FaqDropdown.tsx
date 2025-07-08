"use client";

import { useState } from "react";
import Image from "next/image";
import { FaqDropdownProps } from "../types/faq";
import { faq } from "@/types/nri";

const FaqDropdown = (props: FaqDropdownProps) => {
  const [activeIndex, setActiveIndex] = useState(-1); // No dropdown open initially
  const { data, children, headingSize } = props;

  return (
    <div className="max-w-[1122px] m-auto">
      {children}
      <div>
        {data.map((faq: faq, i: number) => {
          const key = "faqnri" + faq.id;
          const isOpen = i === activeIndex;

          return (
            <div
              key={key}
              className={`border-b border-b-[#DCDCDC] pt-9 ${isOpen ? "" : "pb-10"}`}
              onClick={() => setActiveIndex(isOpen ? -1 : i)} // Toggle logic
            >
              <div
                className={`flex justify-between cursor-pointer ${isOpen ? "mb-[25px]" : ""}`}
              >
                <div
                  className={`font-medium text-${headingSize} leading-[20px] text-[16px] font-[500] font-inter text-[#828282] capitalize`}
                >
                  {faq.question}
                </div>
                <Image
                  src={`/assets/icons/${isOpen ? "dropdown_minus.svg" : "dropdown_plus.svg"}`}
                  width={24}
                  height={24}
                  alt="toggle icon"
                />
              </div>
              {isOpen && (
                <p className="mb-6 text-[#828282] font-normal text-base leading-[24px]">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaqDropdown;
