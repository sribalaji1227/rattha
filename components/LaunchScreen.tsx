// components/LaunchScreen.tsx
"use client";
 
import Image from "next/image";

const LaunchScreen: React.FC = () => { 

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
      <div className="hidden md:flex w-full">
        {/*
         1) Again, everything sits inside one “relative w-full h-screen overflow-hidden” wrapper.
         2) Move the icon strip and bottom bar inside that same container as absolutely-positioned elements.
         3) Icon strip sits at bottom-[80px], bottom bar at bottom-0.
        */}
        <div className="relative w-full h-screen overflow-hidden">
          {/* Hero Background (desktop) */}
          <Image
            src="/assets/onePage/illustration-bg.svg"
            alt="Hero Background (desktop)"
            fill
            className="object-cover"
          />

          {/* Desktop Overlay: logo + tagline + “BE THE FIRST TO KNOW” + Button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
            {/* Logo (desktop: full-width SVG) */}
            <div>
              <Image
                src="/assets/onePage/desktop_logo.svg"
                alt="RATTHA REALTY"
                width={958}
                height={238}
                className="object-contain"
              />
            </div>

            {/* “BE THE FIRST TO KNOW” (desktop) */}
            <div className="text-[14px] font-medium font-inter tracking-wide text-white pt-[24px] pb-[40px]">
              BE THE FIRST TO KNOW
            </div>

            {/* ENQUIRE NOW Button (desktop) */}
            <button
              className="
                font-inter
                mt-4
                border border-white
                rounded-full
                px-8 py-3
                text-[15px] font-semibold
                text-white
                hover:bg-white hover:text-black
                transition
              "
            >
              ENQUIRE NOW
            </button>
          </div>

          {/* Icon Strip (desktop) – now absolute at bottom-80px */}
          <div className="absolute bottom-[80px] left-0 right-0 bg-transparent">
            <div className="max-w-[1200px] mx-auto flex justify-center items-center space-x-6">
              {[
                "/assets/icons/facebook.png",
                "/assets/icons/instagram.png",
                "/assets/icons/linkedin.png",
                "/assets/icons/twitter.png",
                "/assets/icons/youtube.png",
              ].map((icon, i) => (
                <div
                  key={i}
                  className="w-12 h-12 flex items-center justify-center"
                >
                  <Image
                    src={icon}
                    width={35}
                    height={35}
                    alt=""
                    className="object-contain cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar (desktop footer) – now absolute at bottom-0 */}
          <div className="absolute bottom-0 left-0 right-0 bg-[#107BC0]">
            <div className="max-w-[1200px] mx-auto flex items-center justify-between text-white text-[14px] h-16 px-8">
              <div>© RATTHA REALTY 2025 | ALL RIGHTS RESERVED</div>
              <div className="flex items-center space-x-6">
                <div className="cursor-pointer">
                  PRIVACY POLICY&nbsp;|&nbsp;DISCLAIMER
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchScreen;
