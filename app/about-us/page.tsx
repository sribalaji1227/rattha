import Image from "next/image";
import dynamic from "next/dynamic";
import { aboutUsBanner, GurbinderRattha } from "@/constants/assets";
import { TeamCarousel } from "@/components";
import ParallaxBanner from "@/components/Common/ParallaxBanner/ParallaxBanner";
import RevealSection from "@/components/Common/RevealSection/RevealSection";
import AccordionList, {
  AccordionItemData,
} from "@/components/Common/AccordionList/AccordionList";
import Milestone from "@/components/Milestone";
import {
  CHANNEL_MEDIA_CONFIG,
  JV_MEDIA_FORM_SECTIONS,
} from "@/constants/pages/mediaCenter";

const otherBusinessData: AccordionItemData[] = [
  {
    title: "Residential Spaces",
    description: "Laying foundation for generations.",
  },
  {
    title: "Co-Working & Office Spaces",
    description: "Modern, flexible work environments.",
  },
  {
    title: "Hospitality",
    description: "Premium stays, memorable experiences.",
  },
  { title: "Manufacturing & Exports", description: "Quality goods worldwide." },
  {
    title: "IT Enabled Services",
    description: "Tech-driven support solutions.",
  },
  { title: "Venture Capital", description: "Fueling innovative startups." },
  { title: "Healthcare Services", description: "Caring for communities." },
];

const RegisterInterestForm = dynamic(
  () => import("@/components/partners/channel/RegisterInterestForm"),
  {
    loading: () => (
      <div className="max-w-6xl mx-auto p-8 bg-gray-50 animate-pulse" />
    ),
  }
);

export default function AboutUs() {
  const config = CHANNEL_MEDIA_CONFIG;
  return (
    <div>
      <ParallaxBanner
        desktopSrc={aboutUsBanner}
        mobileSrc={aboutUsBanner}
        altDesktop="Timeless Spaces. Crafted to Inspire."
        altMobile="Let's begin something timeless"
        desktopLines={[
          { text: "More Than a Name.\n A Legacy." },
        ]}
        mobileLines={[{ text: "More Than a Name." }, { text: "A Legacy." }]}
      />
      {/* <NavigationBar /> */}
      <RevealSection
        title="Leading with Excellence"
        description="Our developments blend timeless aesthetics with future-ready innovation, offering unmatched value, prestige, and enduring significance. With flawless execution and meticulous craftsmanship, we create enduring landmarks that stand the test of time."
      />
      <section className="max-w-[1200px] overflow-hidden px-[20px] mx-auto text-center">
        <div className="relative">
          <Image
            src={GurbinderRattha}
            alt="Founder"            
            className="w-full max-w-[380px] mx-auto max-h-[400px] min-h-[400px] sm:min-h-[800px]  sm:max-w-[1100px] sm:max-h-[800px] object-cover"
          />
          <p className="mt-3 text-black text-center leading-relaxed whitespace-normal break-words text-[12px] sm:text-[16px] font-inter">
            From left to right: Standing
            – Mr. Shray Rattha, Managing Director, and Mr. Aayush Rattha, Joint Managing Director.
            Seated
            – Mr. H. S. Rattha, Chairman, and Mr. Gurbinder Rattha, Vice Chairman.
          </p>
        </div>
      </section>
      <section className="max-w-[1200px] overflow-hidden my-[60px] sm:my-[85px] sm:mx-auto px-[20px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#F0F0F0] px-[25px]  sm:px-[25px]  py-[25px] sm:py-[44px] text-center shadow-md">
            <h2 className="text-[24px] sm:text-4xl font-medium text-[#107BC0] mb-[12px] sm:mb-[42px] uppercase font-cormorant">
              VISION STATEMENT
            </h2>
            <p className="text-black text-[12px] sm:text-[16px] font-inter">
              To be the most trusted and admired luxury real estate brand,
              setting new benchmarks in architectural excellence, precision
              craftsmanship, and unparalleled exclusivity for the most
              discerning investors and homeowners.
            </p>
          </div>
          <div className="bg-[#F0F0F0] px-[25px]  sm:px-[25px]  py-[25px] sm:py-[44px] text-center shadow-md">
            <h2 className="text-[24px] sm:text-4xl font-medium text-[#107BC0] mb-[12px] sm:mb-[42px] uppercase font-cormorant">
              mission Statement
            </h2>
            <p className="text-black text-[12px] sm:text-[16px] font-inter">
              Rattha Realty redefines luxury living with sophisticated,
              innovative spaces. Committed to integrity, sustainability, and
              detail, we craft landmark developments that enrich lifestyles and
              ensure lasting value for discerning residents and investors alike.
            </p>
          </div>
          <div className="bg-[#F0F0F0] px-[25px]  sm:px-[25px]  py-[25px] sm:py-[44px] text-center shadow-md">
            <h2 className="text-[24px] sm:text-4xl font-medium text-[#107BC0] mb-[12px] sm:mb-[42px] uppercase font-cormorant">
              core values Statement
            </h2>
            <p className="text-black text-[12px] sm:text-[16px]  font-inter">
              We are driven by excellence in craftsmanship, innovation,
              integrity, trust, exclusivity, and sustainability—creating
              timeless luxury legacies that reflect our unwavering commitment to
              quality, lasting value, and elevated living experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="m-16 max-w-[1200px] mx-auto px-[20px]">
        <h2 className="text-[24px] sm:text-[40px]  font-normal my-[15px] uppercase text-[#107BC0] text-center font-cormorant">
          Our Management Team
        </h2>
        <TeamCarousel />
      </section>

      <AccordionList
        heading="Other Rattha Business"
        items={otherBusinessData}
        imageSrc="/assets/images/about_business.png"
        isNumber={false}
      />
      <Milestone />

      <section aria-labelledby="register-form">
        <h2 id="register-form" className="sr-only">
          Register Interest
        </h2>
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
  );
}
