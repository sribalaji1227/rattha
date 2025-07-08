import { Metadata } from "next";
import dynamic from "next/dynamic";
import {
  CHANNEL_PARTNERS_METADATA,
  NRI_CONFIG,
  NRI_FORM_SECTIONS,
} from "@/constants/pages/channelPartners";
import FaqAccordion from "@/components/Common/FaqAccordion/FaqAccordion";
import { nrifaqData } from "@/constants/content";
import EssentialFactors from "@/components/EssentialFactors";
import ParallaxBanner from "@/components/Common/ParallaxBanner/ParallaxBanner"; 
import RevealSection from "@/components/Common/RevealSection/RevealSection";
import ProjectCarousel from "@/components/Common/ProjectCarousel/ProjectCarousel";
import { propertyData } from "@/constants/content";

export const metadata: Metadata = {
  ...CHANNEL_PARTNERS_METADATA,
  alternates: {
    canonical: "https://yourwebsite.com/partners/channel",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const PropertyValueSection = dynamic(() =>
  import("@/components/partners/channel/PropertyValueSection").then(
    (mod) => mod.PropertyValueSection
  )
);

const ExploreProjectsSection = dynamic(() =>
  import("@/components/partners/channel/ExploreProjectsSection").then(
    (mod) => mod.ExploreProjectsSection
  )
);

const RegisterInterestForm = dynamic(
  () => import("@/components/partners/channel/RegisterInterestForm"),
  {
    loading: () => (
      <div className="max-w-6xl mx-auto p-8 bg-gray-50 animate-pulse" />
    ),
  }
);

export default function Nri() {
  const config = NRI_CONFIG;
  const essentialFactors = [
    {
      id: 1,
      icon: "/assets/icons/ownershipIcon.svg",
      title: "Verify Property Ownership & Title Clarity",
      description:
        "Verify ownership, disputes, and mortgage release for property title.",
    },
    {
      id: 2,
      icon: "/assets/icons/developerIcon.svg",
      title: "Choose a Trusted Developer",
      description:
        "Choose a credible developer; check past work, quality, and reliability.",
    },
    {
      id: 3,
      icon: "/assets/icons/marketIcon.svg",
      title: "Compare Market Alternatives",
      description:
        "Compare local projects; assess pricing, amenities, and growth potential.",
    },
    {
      id: 4,
      icon: "/assets/icons/legalIcon.svg",
      title: "Conduct a Comprehensive Legal Check",
      description:
        "Hire a property lawyer to verify ownership, claims, permits, and agreements.",
    },
    {
      id: 5,
      icon: "/assets/icons/complianceIcon.svg",
      title: "Confirm Regulatory Approvals & Compliance",
      description:
        "Confirm project approvals and builder’s authority for land transfer.",
    },
    {
      id: 6,
      icon: "/assets/icons/financeIcon.svg",
      title: "Evaluate Financial & Investment Prospects",
      description:
        "Ensure legal clarity, verify documents, and assess investment potential.",
    },
  ];

  return (
    <main className="min-h-screen">
      <ParallaxBanner
        desktopSrc={config.hero.desktopImage}
        mobileSrc={config.hero.mobileImage}
        altDesktop="nriBanner"
        altMobile="nriBanner"
        desktopLines={[
          { text: "Home is a Feeling.\n Let’s Bring You Closer." }
        ]}
        mobileLines={[
          { text: "Home is a Feeling." },
          { text: "Let’s Bring You Closer.", delay: 200 },
        ]}
      />
      {/* <NavigationBar /> */}
      <RevealSection
        title="Timeless Investments, Lasting"
        description="Investing in India has become more transparent, secure, and rewarding with strengthened regulations like RERA and GST. Rattha Realty offers NRIs an exclusive  portfolio of ultra-luxury residences, seamlessly  blending sophistication, convenience, and long-term value. "
      />
      <section aria-labelledby="planning-to-buy">
        <EssentialFactors factors={essentialFactors} />
      </section>
      <section aria-labelledby="download-terms">
        <PropertyValueSection
          heading={config.propertyValue.heading}
          description={config.propertyValue.description}
          buttonText={config.propertyValue.buttonText}
          buttonAction={config.propertyValue.buttonAction}
        />
      </section>
      <section aria-labelledby="explore-projects">
        <h2 id="explore-projects" className="sr-only">
          Explore Projects
        </h2>
        <ExploreProjectsSection
          heading={config.exploreProjects.heading}
          description={config.exploreProjects.description}
        />
      </section>
      <section className="py-0 md:py-[45px]">
        <ProjectCarousel items={propertyData} 
        desktopSize={{ width: 1100, height: 800 }}
        mobileSize={{ width: 380, height: 400 }}/>
      </section>
      <section className="bg-[#F1F1F1] pt-16 pb-16 mt-[100px]">
        <FaqAccordion data={nrifaqData} headingSize="xl">
          <h2 className="text-4xl font-normal leading-[40px] text-[#107BC0] mb-7">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </FaqAccordion>
      </section>
      <section aria-labelledby="register-form">
        <h2 id="register-form" className="sr-only">
          Register Interest
        </h2>
        <RegisterInterestForm
          title={config.registerForm.title}
          titleLines={config.registerForm.titleLines}
          sections={NRI_FORM_SECTIONS}
          submitButtonText={config.registerForm.submitButtonText}
          checkboxLabel={config.registerForm.checkboxLabel}
          privacyPolicyText={config.registerForm.privacyPolicyText}
        />
      </section>
    </main>
  );
}
