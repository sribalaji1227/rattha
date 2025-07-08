"use client"
import { useState } from "react";
import Image from "next/image"
import {  tab } from "@/types/media";
import { mediaCenterTabs, mediaCenterData } from "@/constants/content";

// types/media.ts
export interface MediaItem {
  id: string | number;
  image: string;
  name: string;
  description: string;
  published: string;
  type: string;        // "blog" | "news" | …, whatever you use
}


const MediaCenterTabs = () => {
    const [ activeTabIndex, setActiveTabIndex ] = useState<number>(0);

    const handleTabClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setActiveTabIndex(parseInt(e.currentTarget.id))
    }

    const renderTab = (tab: tab, index: number) => {
      const activeClass = activeTabIndex === index ? "#107BC0" : "#A1A5A3";
      return (
        <a
          key={tab.id}
          id={`${index}`}
          href="!#"
          className={`uppercase font-normal text-lg leading-[27px] text-[${activeClass}] cursor-pointer`}
          onClick={handleTabClick}
        >
          {tab.name}
        </a>
      );
    };

 const renderBoxWithImage = (option: MediaItem) => {
   const activeTabList =
     mediaCenterTabs[activeTabIndex].name.toLowerCase() === option.type ||
     mediaCenterTabs[activeTabIndex].name.toLowerCase() === "all";
   return (
     activeTabList && (
       <div
         key={option.id}
         className="border border-[#CCCCCC] min-w-[360] flex-1"
       >
         <div className="relative h-[272]">
           <Image
             src={option.image}
             layout="fill"
             objectFit="cover"
             alt="imag"
           />
         </div>
         <div className="pt-[17] pb-[35] px-[41]">
           <h3 className="mb-[10] font-medium text-sm leading-[22px] text-[#107BC0]">
             {option.name}
           </h3>
           <p className="mb-[11] font-light text-sm leading-5 text-[#101114]">
             {option.description}
           </p>
           <small className="mb-6 block font-medium text-[10px] leading-6">
             {option.published}
           </small>
           <button className="block border border-[#107BC0] px-[36] py-[9] rounded-[30] font-semibold text-sm leading-[100%] text-[#107BC0]">
             READ
           </button>
         </div>
       </div>
     )
   );
 };

    return (
      <div className="sm:mt-21 mt-11 mb-[60] sm:mb-[123] max-w-[1125] m-auto">
        <div className="lg:mx-[194] sm:mx-[30] flex justify-between sm:flex-row flex-col gap-y-4 text-center">
          {mediaCenterTabs.map(renderTab)}
        </div>
        <div className="max-w-[1118] m-auto mt-[70]">
          <div className="flex flex-wrap gap-x-4 gap-y-10">
            {mediaCenterData.map(renderBoxWithImage)}
          </div>
          <button className="bg-[#107BC0] px-[46] py-[17] text-white mt-20 block m-auto rounded-[30] font-semibold text-[15px]">LOAD MORE</button>
        </div>
      </div>
    );
}

export default MediaCenterTabs