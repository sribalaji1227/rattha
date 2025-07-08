// components/LaunchScreen.tsx
"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import EnquireNowModal from "./Common/EnquireNowModal";

const LaunchScreen: React.FC = () => {
  const [isEnquireNowOpen, setIsEnquireNowOpen] = useState(false);
  const scrollToTop = useCallback(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <div className="w-full bg-black overflow-x-hidden">
      {/* ─────────── MOBILE LAYOUT (unchanged classes, re-structured) ─────────── */}
      <div className="md:hidden">
        {/*
         1) We wrap everything in a single “relative w-full h-screen overflow-hidden” container.
         2) Move the footer inside that same container and absolutely position it at bottom-0.
         3) Bump your social icons up to bottom-[80px] so they sit above the footer.
        */}
        <div className="relative w-full h-screen overflow-hidden">
          {/* Background (mobile) */}
          <Image
            src="/assets/images/hero_home_mobile.png"
            alt="Hero Background (mobile)"
            fill
            className="object-cover"
          />

          {/* Overlay: logo + tagline + “BE THE FIRST TO KNOW” + Button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 space-y-2 text-center">
            {/* Logo (mobile: 192px wide) */}
            <div>
              <Image
                src="/assets/images/home_logo.png"
                alt="RATTHA REALTY"
                width={400}
                height={192}
                className="object-contain"
              />
            </div>

            {/* “BE THE FIRST TO KNOW” */}
            <div className="text-[12px] font-semibold tracking-wide text-white pt-[30px] pb-[20px]">
              BE THE FIRST TO KNOW
            </div>

            {/* ENQUIRE NOW Button */}
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
            >
              ENQUIRE NOW
            </button>
          </div>

          {/* Social Icons (above footer) */}
          <div className="absolute bottom-[80px] left-0 right-0 flex justify-center items-center space-x-3 px-4">
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
                  width={35}
                  height={35}
                  alt=""
                  className="object-contain"
                />
              </button>
            ))}
          </div>

          {/* Footer (mobile) – now inside the same 100vh container */}
          <div className="absolute bottom-0 left-0 right-0 bg-[#107BC0] text-white text-left text-[12px]">
            <div className="py-2 px-4 text-[11px]">
              © RATTHA REALTY 2025 | ALL RIGHTS RESERVED
            </div>
            <div className="py-2 px-4 border-t border-white/25 text-[11px]">
              PRIVACY POLICY&nbsp;|&nbsp;DISCLAIMER
            </div>
          </div>
        </div>
      </div>

      {/* ─────────── DESKTOP LAYOUT (unchanged classes, re-structured) ─────────── */}
      {/* ─────────── DESKTOP LAYOUT (FIXED FOR ZOOM) ─────────── */}
      <div className="hidden md:block relative w-full min-h-screen overflow-hidden">
        {/* Background */}
        <Image
          src="/assets/onePage/illustration-bg.svg"
          alt="Background"
          fill
          className="object-cover"
        />

        {/* MAIN CONTENT AREA WITH SAFE SPACING */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* This container ensures minimum spacing */}
          <div className="flex flex-col items-center w-full" style={{ minHeight: '60vh' }}>
            
            {/* Logo */}
            <div className="w-full max-w-[60vw] mb-8">
              <Image
                src="/assets/onePage/desktop_logo.svg"
                alt="RATTHA REALTY"
                width={958}
                height={238}
                className="w-full h-auto"
              />
            </div>
            <div className="text-sm font-medium mb-10 text-white">
              BE THE FIRST TO KNOW
            </div>

            {/* Button - with minimum margin below */}
            <button className="border border-white rounded-full px-8 py-3 text-sm font-semibold text-white mb-[15vh] hover:bg-white hover:text-black transition" onClick={() => setIsEnquireNowOpen(true)}>
              ENQUIRE NOW
            </button>
          </div>

          {/* Social Icons - Positioned with viewport units */}
          <div className="absolute bottom-[10vh] left-0 right-0 flex justify-center gap-6">
            {['facebook', 'instagram', 'linkedin', 'twitter', 'youtube'].map((icon) => (
              <div key={icon} className="w-10 h-10">
                <Image
                  src={`/assets/icons/${icon}.png`}
                  width={35}
                  height={35}
                  alt=""
                  className="object-contain cursor-pointer" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Footer - Fixed at bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#107BC0] h-14 flex items-center px-8 text-white text-sm">
          <div className="w-full max-w-screen-xl mx-auto flex justify-between">
            <div>© RATTHA REALTY 2025 | ALL RIGHTS RESERVED</div>
            <div className="hover:underline cursor-pointer">
              PRIVACY POLICY&nbsp;|&nbsp;DISCLAIMER
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
