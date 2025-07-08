"use client";

import React from "react";
import Image from "next/image";

interface StatItem {
  label: string;
  value: string;
}

interface ProjectInfoOverlayProps {
  imageSrc: string;
  stats: StatItem[];
}

const ProjectInfoOverlay: React.FC<ProjectInfoOverlayProps> = ({
  imageSrc,
  stats,
}) => {
  return (
    <div className="mt-0 mb-0 md:mt-[64px] md:mb-[90px] md:mx-auto max-w-[1200px] mx-auto px-[20px]">
      <div className="w-full max-w-[380px] sm:max-w-full h-[480px] md:h-[400px] relative">
        {/* Background image */}
        <Image
          src={imageSrc}
          alt="Project background"
          layout="fill"
          objectFit="cover"
          className="rounded-lg hidden md:block"
        />
        {/* Background image */}
        <Image
          src={"/assets/images/pool-background_mobile.png"}
          alt="Project background"
          layout="fill"
          objectFit="cover"
          className="rounded-lg block md:hidden"
        />

        {/* ───────── Desktop Stats (md and up) ───────── */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center">
          <div className="w-full max-w-[1025px] flex justify-between items-center px-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-start pl-4"
              >
                <span className="absolute left-0 top-1/2 h-[95px] border-l border-white transform -translate-y-1/2" />
                <p className="text-[32px] pb-[10px] font-semibold text-white font-inter">
                  {stat.value}
                </p>
                <p className="text-[16px] text-white font-inter">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ───────── Mobile Card (below md) ───────── */}
        <div className="md:hidden absolute inset-0 flex justify-center items-center">
          <div className="bg-white bg-opacity-30 rounded-2xl p-6 mx-4 w-full max-w-sm h-[408px]">
            <div className="space-y-3">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-start">
                  {/* Shorter divider on mobile (h-6 = 24px tall), with mr-4 (16px) gap */}
                  <span className="block h-[77px] w-px bg-white mr-4 mt-1 font-inter" />

                  <div>
                    <p className="text-lg font-semibold text-white leading-none pb-[5px] pt-[15px] font-inter">
                      {stat.value}
                    </p>
                    <p className="text-xs text-white mt-1 font-inter">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfoOverlay;
