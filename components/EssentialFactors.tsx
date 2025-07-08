"use client";

import React from "react";
import Image from "next/image";

export interface Factor {
  id: string | number;
  icon: string;
  title: string;
  description: string;
}

interface EssentialFactorsProps {
  factors: Factor[];
}

const EssentialFactors: React.FC<EssentialFactorsProps> = ({ factors }) => {
  return (
    <section className="pt-0 pb-[30px] md:py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-center text-[24px] md:text-[40px] font-medium text-[#107BC0] mb-12 leading-tight uppercase hidden md:block font-cormorant">
          PLANNING TO BUY A HOME?
          <br />
          ESSENTIAL FACTORS TO KEEP IN MIND
        </h2>
        <h2 className="font-cormorant text-center text-[20px] md:text-[40px] font-medium text-[#107BC0] mb-[30px] leading-tight uppercase block md:hidden">
          Buying a Home?
          <br />
          Key Factors to Consider
        </h2>
        <div className="max-w-[1160px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
          {factors.map((f) => (
            <div
              key={f.id}
              className="flex items-start border border-[#D0D0D0] p-[12px] md:p-6 transition-shadow duration-300 hover:shadow-md"
            >
              <div className="flex-shrink-0 w-[25px] md:w-[50px] h-6 mr-4 relative mt-[8px] md:mt-0">
                <Image
                  src={f.icon}
                  alt={f.title}
                  width={54}
                  height={54}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-[16px] md:text-[18px] font-medium text-[#000000] mb-2 font-inter">
                  {f.title}
                </h3>
                <p className="text-[14px] md:text-[16px] text-[#808080] leading-relaxed  font-inter">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EssentialFactors;
