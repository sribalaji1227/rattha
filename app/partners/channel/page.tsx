// app/partners/channel/page.tsx
import { Metadata } from "next";
import dynamic from "next/dynamic";
import {
  CHANNEL_PARTNERS_METADATA,
  CHANNEL_PARTNERS_CONFIG,
  CHANNEL_PARTNERS_FORM_SECTIONS,
} from "@/constants/pages/channelPartners";
import ProjectCarousel from "@/components/Common/ProjectCarousel/ProjectCarousel";
import { propertyData } from "@/constants/content";
import RevealSection from "@/components/Common/RevealSection/RevealSection";

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

// Dynamic imports

const HeroSection = dynamic(
  () => import("@/components/partners/channel/HeroSection")
);
const WhyChooseUs = dynamic(
  () => import("@/components/partners/channel/WhyChooseUs")
);
const PartnerNetworkSection = dynamic(
  () => import("@/components/partners/channel/PartnerNetworkSection")
);
// const ProjectCarousel = dynamic(() => import('@/components/partners/channel/ProjectCarousel'), {
//   loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
// });

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

export default function ChannelPartnersPage() {
  const config = CHANNEL_PARTNERS_CONFIG;

  return (
    <main className="min-h-screen">
      <HeroSection
        desktopImage={"/assets/images/partner_banner.png"}
        mobileImage={"/assets/images/properties_banner.png"}
        desktopTitle={config.hero.desktop}
        mobileTitle={config.hero.mobile}
      />

      <section aria-labelledby="partner-excellence">
        <RevealSection
          title="Partner with Excellence"
          description="Join hands with Rattha Realty and become part of a visionary journey in  real estate. Our Channel Partner Program is built on trust, transparency,  and mutual success—empowering professionals like you to expand your  reach, boost earnings, and offer your clients the finest in property  development. "
        />
      </section>

      <section aria-labelledby="why-choose-us">
        <h2 id="why-choose-us" className="sr-only">
          Why Choose Us
        </h2>
        <WhyChooseUs
          heading={config.whyChooseUs.heading}
          benefits={config.whyChooseUs.benefits}
        />
      </section>

      <section aria-labelledby="partner-network">
        <h2 id="partner-network" className="sr-only">
          Partner Network
        </h2>
        <PartnerNetworkSection />
      </section>

      <section aria-labelledby="featured-projects">
        <h2 id="featured-projects" className="sr-only">
          Featured Projects
        </h2>
        <ProjectCarousel items={propertyData} desktopSize={{ width: 1100, height: 800 }}
        mobileSize={{ width: 380, height: 400 }}/>
      </section>

      <section aria-labelledby="download-terms">
        <h2 id="download-terms" className="sr-only">
          Download Terms
        </h2>
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

      <section aria-labelledby="more-projects">
        <h2 id="more-projects" className="sr-only">
          More Projects
        </h2>
        <ProjectCarousel items={propertyData} 
        desktopSize={{ width: 1100, height: 800 }}
        mobileSize={{ width: 380, height: 400 }}/>
      </section>

      <section aria-labelledby="register-form">
        <h2 id="register-form" className="sr-only">
          Register Interest
        </h2>
        <RegisterInterestForm
          title={config.registerForm.title}
          titleLines={config.registerForm.titleLines}
          sections={CHANNEL_PARTNERS_FORM_SECTIONS}
          submitButtonText={config.registerForm.submitButtonText}
          checkboxLabel={config.registerForm.checkboxLabel}
          privacyPolicyText={config.registerForm.privacyPolicyText}
        />
      </section>
    </main>
  );
}
