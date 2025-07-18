// components/LaunchScreen.tsx
"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import EnquireNowModal from "./Common/EnquireNowModal";
import { ChevronUp } from "lucide-react";

const LaunchScreen: React.FC = () => {
  const [isEnquireNowOpen, setIsEnquireNowOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const scrollToTop = useCallback(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <div className="w-full bg-black overflow-x-hidden">
      {/* ─────────── MOBILE LAYOUT (unchanged classes, re-structured) ─────────── */}
      <div className="md:hidden">
        <div className="relative w-full h-screen overflow-hidden">
          {/* Background (mobile) */}
          <Image
            src="/assets/images/grey.jpg"
            alt="Hero Background (mobile)"
            fill
            className="object-cover"
          />
          {/* <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src="/assets/launch.mp4" type="video/mp4" />
          </video> */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full z-10">
  <Image
    src="/assets/onePage/desktop_logo.svg"
    alt="Logo"
    className="w-60 md:w-[600px] max-w-[90vw] object-contain"
    width={0}
    height={0}
  />
</div>
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 space-y-2 text-center">
            <div className="text-[12px] font-semibold tracking-wide text-white pt-[30px] pb-[20px] mt-[40vh]">
              BE THE FIRST TO KNOW
            </div>
            <button
              className="
                mt-1
                border border-white
                rounded-full
                px-6 py-2
                text-[14px] font-semibold
                text-white
                hover:bg-white hover:text-black
                transition
              "
              onClick={() => setIsEnquireNowOpen(true)}
            >
              ENQUIRE NOW
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-[#107BC0] text-white text-left text-[12px]">
            <div className="py-2 px-4 text-[11px]">
              © RATTHA REALTY 2025 | ALL RIGHTS RESERVED
            </div>
            <div className="py-2 px-4 border-t border-white/25 text-[11px]">
              PRIVACY POLICY&nbsp;|&nbsp;DISCLAIMER
            </div>
            <div className="flex justify-center items-center">
              {[
                "/assets/icons/facebook.png",
                "/assets/icons/instagram.png",
                "/assets/icons/linkedin.png",
                "/assets/icons/twitter.png",
                "/assets/icons/youtube.png",
              ].map((icon, i) => (
                <button
                  key={i}
                  className="
                    w-10 h-10
                    rounded-full 
                    flex items-center justify-center
                    transition 
                  "
                >
                  <Image
                    src={icon}
                    width={20}
                    height={20}
                    alt=""
                    className="object-contain"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* ─────────── DESKTOP LAYOUT (unchanged classes, re-structured) ─────────── */}
      {/* ─────────── DESKTOP LAYOUT (FIXED FOR ZOOM) ─────────── */}
      <div className="hidden md:block relative w-full min-h-screen overflow-hidden">
        {/* Background */}
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/assets/launch.mp4" type="video/mp4" />
        </video> */}
        <Image
          src="/assets/images/grey.jpg"
          alt="Background"
          fill
          className="object-cover"
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full z-10">
  <Image
    src="/assets/onePage/desktop_logo.svg"
    alt="Logo"
    className="w-60 md:w-[600px] max-w-[90vw] object-contain"
    width={0}
    height={0}
  />
</div>

        {/* MAIN CONTENT AREA WITH SAFE SPACING */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* This container ensures minimum spacing */}
          <div className="flex flex-col items-center w-full mx-auto" style={{ minHeight: '60vh' }}>
            <div className=" font-bold text-[16px] mb-10 text-white mt-[73vh]">
              BE THE FIRST TO KNOW
            </div>

            {/* Button - with minimum margin below */}
            <button className="border border-white rounded-full px-8 py-3 text-[14px] font-bold text-white mb-[15vh] hover:bg-white hover:text-black transition" onClick={() => setIsEnquireNowOpen(true)}>
              ENQUIRE NOW
            </button>
          </div>
        </div>

        {/* Footer - Fixed at bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#107BC0] h-14 flex items-center text-white text-sm">
          {/* Desktop Footer */}
          <div className="hidden md:flex w-full justify-between items-center relative">
            <div className="text-sm leading-[24px] animate-fade-in ml-[50px]">
              <span className="font-light text-sm mr-1">&copy;</span>
              RATHA REALTY 2025 &nbsp; | &nbsp; ALL RIGHTS RESERVED
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-4 animate-scale-in-fade">
              {['facebook', 'instagram', 'linkedin', 'twitter', 'youtube'].map((icon, i) => (
                <div
                  key={i}
                  className="hover:scale-110 transition-transform duration-200"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <Image
                    src={`/assets/icons/${icon}.png`}
                    width={30}
                    height={30}
                    alt={`${icon} icon`}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="text-sm animate-fade-in flex mr-[50px]">
              <a className="cursor-pointer hover:underline" href="/privacy-policy">
                PRIVACY POLICY&nbsp;
              </a>
              <span className="mx-1">|</span>
              <a className="cursor-pointer hover:underline" href="/disclaimer">
                &nbsp;DISCLAIMER
              </a>
              <button
                onClick={toggleExpand}
                className="ml-1 focus:outline-none"
                aria-label={isExpanded ? "Collapse" : "Expand"}
              >
                <ChevronUp
                  size={16}
                  className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <EnquireNowModal
        isOpen={isEnquireNowOpen}
        onClose={() => setIsEnquireNowOpen(false)}
      />

    </div>
  );
};

export default LaunchScreen;
