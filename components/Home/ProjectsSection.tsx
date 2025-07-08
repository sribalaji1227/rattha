import React from "react";
import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section className="py-[96px] md:py-[110px] mx-[20px]">
      <div className="max-w-[1150px] mx-auto bg-[#f9f9f9] py-[28px] sm:py-[40px] px-[20px] sm:px-[30px]">
        <div className="flex flex-col md:flex-row md:items-start md:gap-x-[60px] gap-y-[40px]">
          <div className="md:w-[425px] flex flex-col justify-between">
            <div className="mt-0 sm:mt-[40px]">
              <h5 className="text-[#107BC0] text-[24px] font-cormorant sm:text-4xl font-[500] mb-4 leading-[35px] sm:leading-[60px] tracking-[1%] font-lemonmilk">
                DISCOVER OUR
                <br />
                NEWEST RESIDENTIAL
                <br />
                MASTERPIECES
              </h5>
              <p className="text-black text-[14px] md:text-base leading-[24px] mb-0 sm:mb-[20px] font-inter">
                Experience the pinnacle of exclusivity with our latest luxury
                residence. Crafted for the discerning, each masterpiece blends
                architectural brilliance with timeless elegance. Discover a home
                where every detail is perfected, creating a legacy of
                sophistication and refinement.
              </p>
            </div>
            <button className="mt-6 self-start py-[10px] sm:py-[16.5px] px-[10px] sm:px-[38px] border font-inter border-[#107BC0] rounded-[30px] text-[#107BC0] font-semibold text-[15px] hidden md:block">
              VIEW PROJECT
            </button>
            <button className="mt-6 self-start py-[10px] sm:py-[16.5px] px-[10px] sm:px-[38px] border font-inter border-[#107BC0] rounded-[30px] text-[#107BC0] font-semibold text-[14px] block md:hidden">
              VIEW ALL PROJECTS
            </button>
          </div>
          <div className="md:w-[545px] bg-white flex flex-col">
            <div className="relative w-full max-w-[330px] h-[230px] sm:max-w-[545px] sm:h-[300px]">
              <Image
                src="/assets/images/home_section_3.png"
                alt="Project preview"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-[14px] sm:p-6 flex flex-col justify-between flex-grow">
              <div>
                <div className="text-[16px] sm:text-[24px] leading-[40px] font-inter font-medium text-black tracking-[1%] mb-0 sm:mb-6">
                  Rattha Grandeur
                </div>
                <div className="grid grid-cols-2 gap-x-[32px] gap-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/assets/icons/home.svg"
                      width={22}
                      height={22}
                      alt="Location icon"
                    />
                    <span className="text-[#6E6E6E] text-[12px] sm:text-base font-inter">
                      Nelson Manickam Road
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/assets/icons/bed.svg"
                      width={22}
                      height={22}
                      alt="Units icon"
                    />
                    <span className="text-[#6E6E6E] text-[12px] sm:text-base font-inter">
                      110 Units
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/assets/icons/sqft.svg"
                      width={22}
                      height={22}
                      alt="Area icon"
                    />
                    <span className="text-[#6E6E6E] text-[12px] sm:text-base font-inter">
                      1567.76 – 2605.72 SFT
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/assets/icons/bed.svg"
                      width={22}
                      height={22}
                      alt="Bedrooms icon"
                    />
                    <span className="text-[#6E6E6E] text-[12px] sm:text-base font-inter">
                      3 & 4 BHK
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src="/assets/icons/launch_star.svg"
                    width={25}
                    height={25}
                    alt="New Launch icon"
                  />
                  <span className="text-black text-[12px] sm:text-base font-semibold sm:font-medium font-inter">
                    New Launch
                  </span>
                </div>
                <button className="rounded-[30px] bg-[#107BC0] px-[19px] py-[8.5px] text-[14px] font-inter  md:text-sm  font-semibold text-white">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
