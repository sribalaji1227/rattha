// app/partners/jv/page.tsx
import { Metadata } from 'next';
import dynamic from "next/dynamic";
import { 
  JV_PARTNERS_METADATA, 
  JV_PARTNERS_CONFIG, 
  JV_PARTNERS_FORM_SECTIONS 
} from "@/constants/pages/jvPartners";
import RevealSection from '@/components/Common/RevealSection/RevealSection';
import ProjectCarousel from '@/components/Common/ProjectCarousel/ProjectCarousel';
import { propertyData } from '@/constants/content';

export const metadata: Metadata = {
  ...JV_PARTNERS_METADATA,
  alternates: {
    canonical: 'https://yourwebsite.com/partners/jv',
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

export default function JVPartnersPage() {
  const config = JV_PARTNERS_CONFIG;
  
  return (
    <main className="min-h-screen">
      <HeroSection
        desktopImage={config.hero.desktopImage}
        mobileImage={config.hero.mobileImage}
        desktopTitle={config.hero.desktop}
        mobileTitle={config.hero.mobile}
      />
      
      
      <section aria-labelledby="building-landmarks">
            <RevealSection
        title="Building Landmarks Together. "
        description="At Rattha Realty, we don't just develop real estate — we shape legacies. With over three decades of  excellence in real estate, architecture, and project execution, we bring a rare blend of design  intelligence, market insight, and financial acumen to every JV partnership. "
      />
      </section>
      
      <section aria-labelledby="what-we-bring">
        <h2 id="what-we-bring" className="sr-only">What We Bring</h2>
        <WhyChooseUs
          heading={config.whatWeBring.heading}
          benefits={config.whatWeBring.benefits}
        />
      </section>
      
      <section aria-labelledby="property-value">
        <h2 id="property-value" className="sr-only">Maximize Property Value</h2>
        <PropertyValueSection
          heading={config.propertyValue.heading}
          description={config.propertyValue.description}
          buttonText={config.propertyValue.buttonText}
          buttonAction={config.propertyValue.buttonAction}
        />
      </section>
      
      <section aria-labelledby="explore-projects">
        <h2 id="explore-projects" className="sr-only">Explore Projects</h2>
        <ExploreProjectsSection
          heading={config.exploreProjects.heading}
          description={config.exploreProjects.description}
        />
      </section>
      
      <section aria-labelledby="project-showcase">
        <h2 id="project-showcase" className="sr-only">Project Showcase</h2>
        <ProjectCarousel items={propertyData} 
        desktopSize={{ width: 1100, height: 800 }}
        mobileSize={{ width: 380, height: 400 }}/>
      </section>
      
      <section aria-labelledby="register-interest">
        <h2 id="register-interest" className="sr-only">Register Interest</h2>
        <RegisterInterestForm
          title={config.registerForm.title}
          titleLines={config.registerForm.titleLines}
          sections={JV_PARTNERS_FORM_SECTIONS}
          submitButtonText={config.registerForm.submitButtonText}
          checkboxLabel={config.registerForm.checkboxLabel}
          privacyPolicyText={config.registerForm.privacyPolicyText}
        />
      </section>
    </main>
  );
}