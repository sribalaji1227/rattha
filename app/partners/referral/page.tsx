// app/partners/referral/page.tsx
import { Metadata } from 'next';
import dynamic from "next/dynamic";
import { 
  REFERRAL_PARTNERS_METADATA, 
  REFERRAL_PARTNERS_CONFIG, 
  REFERRAL_PARTNERS_FORM_SECTIONS 
} from "@/constants/pages/referralPartners";
import ProjectCarousel from '@/components/Common/ProjectCarousel/ProjectCarousel';
import { propertyData } from '@/constants/content';
import RevealSection from '@/components/Common/RevealSection/RevealSection';

export const metadata: Metadata = {
  ...REFERRAL_PARTNERS_METADATA,
  alternates: {
    canonical: 'https://yourwebsite.com/partners/referral',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Dynamic imports with loading states
const HeroSection = dynamic(() => import('@/components/partners/channel/HeroSection'), {
  loading: () => <div className="h-screen bg-gray-900 animate-pulse" />,
});


const WhyChooseUs = dynamic(() => import('@/components/partners/channel/WhyChooseUs'));

const PropertyValueSection = dynamic(() => 
  import('@/components/partners/channel/PropertyValueSection').then(mod => mod.PropertyValueSection)
);

const ExploreProjectsSection = dynamic(() => 
  import('@/components/partners/channel/ExploreProjectsSection').then(mod => mod.ExploreProjectsSection)
);



const RegisterInterestForm = dynamic(() => import('@/components/partners/channel/RegisterInterestForm'), {
  loading: () => <div className="max-w-6xl mx-auto p-8 bg-gray-50 animate-pulse" />,
});

export default function ReferralPartnersPage() {
  const config = REFERRAL_PARTNERS_CONFIG;
  
  return (
    <main className="min-h-screen">
      <HeroSection
        desktopImage={config.hero.desktopImage}
        mobileImage={config.hero.mobileImage}
        desktopTitle={config.hero.desktop}
        mobileTitle={config.hero.mobile}
      />
      
      
      <section aria-labelledby="refer-and-earn">
        <h2 id="refer-and-earn" className="sr-only">Refer and Earn</h2>
               <RevealSection
        title="Refer & Earn – It’s That Simple!"
        description="At Rattha Realty, anyone can become a valuable part of our success story.  Whether you're a friend, a client, or a professional with a network—our  Referral Partner Program helps you earn attractive rewards just by  introducing genuine property buyers."
      />
      </section>
      
      <section aria-labelledby="what-we-offer">
        <h2 id="what-we-offer" className="sr-only">What We Offer</h2>
        <WhyChooseUs
          heading={config.whatWeOffer.heading}
          benefits={config.whatWeOffer.benefits}
        />
      </section>
      
      <section aria-labelledby="become-partner-cta">
        <h2 id="become-partner-cta" className="sr-only">Become a Partner</h2>
        <PropertyValueSection
          heading={config.becomePartner.heading}
          description={config.becomePartner.description}
          buttonText={config.becomePartner.buttonText}
          buttonAction={config.becomePartner.buttonAction}
          buttonUrl={config.becomePartner.buttonUrl}
        />
      </section>
      
      <section aria-labelledby="explore-projects">
        <h2 id="explore-projects" className="sr-only">Explore Projects</h2>
        <ExploreProjectsSection
          heading={config.exploreProjects.heading}
          description={config.exploreProjects.description}
        />
      </section>
      
      <section aria-labelledby="project-carousel">
        <h2 id="project-carousel" className="sr-only">Project Showcase</h2>
        <ProjectCarousel items={propertyData} 
        desktopSize={{ width: 1100, height: 800 }}
        mobileSize={{ width: 380, height: 400 }}/>
      </section>
      
      <section aria-labelledby="register-form">
        <h2 id="register-form" className="sr-only">Register Interest</h2>
        <RegisterInterestForm
          title={config.registerForm.title}
          titleLines={config.registerForm.titleLines}
          sections={REFERRAL_PARTNERS_FORM_SECTIONS}
          submitButtonText={config.registerForm.submitButtonText}
          checkboxLabel={config.registerForm.checkboxLabel}
          privacyPolicyText={config.registerForm.privacyPolicyText}
          formType="referral"
        />
      </section>
    </main>
  );
}