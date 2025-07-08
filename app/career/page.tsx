import { Fragment } from "react";
import Image from "next/image";
import { career, arrowRightBlackIcon } from "@/constants/assets";
import { careersPosition } from "@/constants/content";
import CareerForm from "@/components/CareerForm";
import ParallaxBanner from "@/components/Common/ParallaxBanner/ParallaxBanner";
import RevealSection from "@/components/Common/RevealSection/RevealSection";
import RegisterInterestForm from "@/components/partners/channel/RegisterInterestForm";
import {
  CHANNEL_MEDIA_CONFIG,
  JV_MEDIA_FORM_SECTIONS,
} from "@/constants/pages/mediaCenter";

export default function Career() {
  const config = CHANNEL_MEDIA_CONFIG;
  return (
    <div>
      <ParallaxBanner
        desktopSrc={career}
        mobileSrc={career}
        altDesktop="Timeless Spaces. Crafted to Inspire."
        altMobile="Let's begin something timeless"
        desktopLines={[{ text: "Precision. Passion.\n People." }]}
        mobileLines={[{ text: "Precision. Passion." }, { text: "People." }]}
      />
      <div className="container mx-auto px-6">
        <RevealSection
          title="Unleash Potential, Build Legacies  "
          description="At Rattha Realty, we believe in the power of human potential to shape the future of luxury real estate. 
We seek visionary professionals who are passionate about excellence, innovation, and creating extraordinary living experiences. "
        />
        <section className="max-w-[1200px] overflow-hidden px-[20px] m-auto mt-[150px]">
          <div>
            <h2 className="font-cormorant font-medium text-[36px] leading-[60px] tracking-[0.01em] text-[#107BC0] text-center uppercase my-15 mb-[60px]">
              CAREERS AT RATHA REALTY
            </h2>

            <div className="w-full max-w-[1590px] px-4 sm:px-6 lg:px-8 mb-[11.563rem] mx-auto mt-12">
              {careersPosition.map((position, index) => (
                <Fragment key={position.id}>
                  <div className="pt-8 pb-[34px] flex justify-between border-y border-[#E2E2E2]">
                    <span className="text-[23px] leading-[30px] font-light">
                      {position.name}
                    </span>
                    <span className="flex gap-[22px]">
                      <Image
                        src={arrowRightBlackIcon}
                        width={20}
                        height={14}
                        alt="arrow right"
                      />
                      <span className="font-light text-[20px] leading-[24px]">
                        APPLY NOW
                      </span>
                    </span>
                  </div>
                  {index === 1 && <CareerForm />}
                </Fragment>
              ))}
            </div>
          </div>
        </section>
        <section className="max-w-[1200px] px-4 sm:px-6 lg:px-8 mx-auto mt-20">
          <div className="relative w-full border border-[#107BC0] rounded-md px-4 sm:px-6 md:px-10 pt-20 pb-10 text-center bg-white">
            {/* Top Border */}
            <div className="absolute top-0 left-0 w-full h-px bg-[#107BC0]" />

            {/* Overlapping Heading Box */}
            <div className="absolute top-[-112px] sm:top-[-64px] left-1/2 transform -translate-x-1/2 bg-white px-4 sm:px-6 py-2 rounded-md z-10">
              <h2 className="text-[#107BC0] font-cormorant font-medium text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[36px] sm:leading-[48px] md:leading-[54px] lg:leading-[60px] tracking-normal text-center uppercase">
                Still Searching For <br className="hidden sm:block" /> The Right
                Opportunity?
              </h2>
            </div>

            {/* Content */}
            <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[32px] sm:leading-[40px] tracking-normal text-center text-gray-700 mb-2 mt-[4px]">
              We&apos;re always seeking talented individuals to join our growing
              team.
            </p>

            <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[32px] sm:leading-[40px] tracking-normal text-center text-gray-700">
              Send your resume to
              <span> careers@rattharealty.com </span>
              and we&apos;ll reach out when a suitable role opens up.
            </p>
          </div>
        </section>
        <section className="max-w-[1200px] px-[20px] m-auto mt-[150px] mb-[104px]">
          <RegisterInterestForm
            title={config.registerForm.title}
            titleLines={config.registerForm.titleLines}
            sections={JV_MEDIA_FORM_SECTIONS}
            submitButtonText={config.registerForm.submitButtonText}
            checkboxLabel={config.registerForm.checkboxLabel}
            privacyPolicyText={config.registerForm.privacyPolicyText}
          />
        </section>
      </div>
    </div>
  );
}
