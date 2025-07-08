import dynamic from "next/dynamic";
import NewsSection from "./NewsSection";
import ParallaxBanner from "../Common/ParallaxBanner/ParallaxBanner";
import { homeBanner } from "@/constants/assets";
import { mobileBanner } from "@/constants/assets"; 
import RevealSection from "../Common/RevealSection/RevealSection";
import ProjectCarousel from "../Common/ProjectCarousel/ProjectCarousel";
import { projectData } from "@/constants/content";
import ProjectsSection from "./ProjectsSection";
import AccordionList, {
  AccordionItemData,
} from "../Common/AccordionList/AccordionList";
import {
  CHANNEL_MEDIA_CONFIG,
  JV_MEDIA_FORM_SECTIONS,
} from "@/constants/pages/mediaCenter";

const RegisterInterestForm = dynamic(
  () => import("@/components/partners/channel/RegisterInterestForm"),
  {
    loading: () => (
      <div className="max-w-6xl mx-auto p-8 bg-gray-50 animate-pulse" />
    ),
  }
);

export default function HomePage() {
  const config = CHANNEL_MEDIA_CONFIG;
  const standardData: AccordionItemData[] = [
    {
      title: "Crafted, Not Constructed.",
      description: "Each home is a bespoke vision, shaped by artistry.",
    },
    {
      title: "Legacy In Every Layer.",
      description: "Every detail passes down a story of excellence.",
    },
    {
      title: "Precision Meets Purpose.",
      description: "Meticulous design serving a meaningful life.",
    },
  ];
  return (
    <>
      <ParallaxBanner
        desktopSrc={homeBanner}
        mobileSrc={mobileBanner}
        altDesktop="Timeless Spaces. Crafted to Inspire."
        altMobile="Let's begin something timeless"
        desktopLines={[
          { text: "Unveiling Excellence\nin Every Square Foot." },
          { text: "Welcome to Rattha Realty.", delay: 200, fontSize: 30 },
        ]}
        mobileLines={[
          { text: "Timeless Spaces. " },
          { text: "Crafted to Inspire..", delay: 200 },
        ]}
      />
      {/* <NavigationBar /> */}
      <RevealSection
        title="CRAFTING LEGACIES BEYOND LUXURY"
        description="Our iconic developments cater to discerning individuals who seek nothing but the extraordinary. Experience a world where every detail is meticulously crafted, every space is a statement, and every home is an enduring symbol of refinement."
      />
      <AccordionList
        heading="The Rattha Standard"
        subtitle="Excellence isn’t a benchmark. It’s our baseline."
        items={standardData}
        imageSrc="/assets/images/standard.png"
        ctaLabel="Know More"
        desktopSize={{ width: 600, height: 600 }}
        mobileSize={{ width: 380, height: 300 }}
      />
      <ProjectCarousel items={projectData} sliderView={false}
        desktopSize={{ width: 1100, height: 800 }}
        mobileSize={{ width: 380, height: 400 }}
      />
      <ProjectsSection />
      <NewsSection />
      <section aria-labelledby="register-form" className="pb-[60px] md:pb-0">
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
    </>
  );
}
