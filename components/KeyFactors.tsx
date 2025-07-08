"use client";

import { useState } from "react";
import Image from "next/image";
import { nriKeyFactors } from "@/constants/content";

const KeyFactors = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="max-w-[1126] m-auto mt-17">
      <h2 className="font-normal text-4xl leading-[60px] text-[#107BC0] mb-9">
        BUYING A HOME?
        <br /> KEY FACTORS TO CONSIDER
      </h2>
      <p className="font-medium text-sm leading-[24px] text-[#787878] mb-12">
        Purchasing a home is a significant investment, and thorough due
        diligence is essential to ensure a smooth and secure transaction. Here
        are the key factors every homebuyer should consider:{" "}
      </p>
      <div>
        {nriKeyFactors.map((keyFactor, i) => {
          const key = "keyfactor_" + keyFactor.id;
          const isOpen = i === activeIndex;
          return (
            <div
              key={key}
              className={`border-b border-b-[#DCDCDC] pt-9 ${
                isOpen ? "" : "pb-10"
              }`}
              onClick={() => setActiveIndex(i)}
            >
              <div
                className={`flex justify-between ${isOpen ? "mb-[25]" : ""}`}
              >
                <div className="font-medium text-xl leading-[24px] text-[#828282]">
                  {keyFactor.question}
                </div>
                <Image
                  src={`/assets/icons/${
                    isOpen ? "dropdown_minus.svg" : "dropdown_plus.svg"
                  }`}
                  width={24}
                  height={24}
                  alt="icon"
                />
              </div>
              {isOpen && (
                <ul className="mb-6 text-[#828282] font-normal text-base leading-[24px] list-disc pl-5">
                  {keyFactor.answer.map((ans) => {
                    return <li key={ans}>{ans}</li>;
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KeyFactors;
