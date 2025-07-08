import AmenitiesCarousel from "@/components/AmenitiesCarousel";
import FaqAccordion from "@/components/Common/FaqAccordion/FaqAccordion"; 
import ParallaxBanner from "@/components/Common/ParallaxBanner/ParallaxBanner";
import ProjectCarousel from "@/components/Common/ProjectCarousel/ProjectCarousel";
import RevealSection from "@/components/Common/RevealSection/RevealSection";
import ConstructionCarousel from "@/components/ConstructionCarousel";
import LocationMap from "@/components/LocationMap";
import RegisterInterestForm from "@/components/partners/channel/RegisterInterestForm";
import ProjectInfoOverlay from "@/components/ProjectInfoOverlay";
import { aboutUsBanner } from "@/constants/assets";
import { propertyfaqData, propertyData } from "@/constants/content";
import {
  CHANNEL_MEDIA_CONFIG,
  JV_MEDIA_FORM_SECTIONS,
} from "@/constants/pages/mediaCenter";

export default function Properties() {
  const config = CHANNEL_MEDIA_CONFIG;

  const stats = [
    { label: "Location", value: "Nelson Manickam Road" },
    { label: "Bedrooms", value: "3-4" },
    { label: "Units", value: "110" },
    { label: "Completion", value: "Q4 2030" },
  ];

  return (
    <div>
      <ParallaxBanner
        desktopSrc={aboutUsBanner}
        mobileSrc={aboutUsBanner}
        altDesktop="aboutUsBanner"
        altMobile="aboutUsBanner" 
        desktopLines={[{ text: "Elegance in Every\n Elevation." }]}
        mobileLines={[{ text: "Elegance in Every" },{ text: "Elevation." }]}
      />
      {/* <NavigationBar /> */}
      <RevealSection
        title="Elevating Every Detail to Perfection"
        description="At Rattha Grandéur, every detail is meticulously curated to elevate luxury to an art  form. From bespoke interiors to masterfully designed spaces, we redefine  exclusivity with precision craftsmanship and timeless elegance. The fusion of  innovation and opulence ensures that every residence is not just a home but a  masterpiece, designed for those who appreciate the finer things in life. "
        isProperty
      />
      <section className="py-0 md:py-[45px]">
        <ProjectCarousel items={propertyData} 
        desktopSize={{ width: 1100, height: 700 }}
        mobileSize={{ width: 380, height: 480 }}/>
      </section>
      <RevealSection
        title="A Landmark of Prestige and Grandeur  "
        description="Rising majestically on Nelson Manickam Road, this ultra-luxury new launch  features 110 expansive 3 & 4 BHK residences. With state-of-the-art amenities,  grand architectural design, and an unmatched location, Rattha Grandéur offers an  extraordinary lifestyle for the select few who demand nothing but the best. "
      />
      <ProjectInfoOverlay
        imageSrc="/assets/images/pool-background.png"
        stats={stats}
      />
      <section className="m-16 max-w-[1160px] mx-auto px-[20px] sm:px-0">
        <h2 className="text-[20px] md:text-[40px] font-medium uppercase text-[#107BC0] text-center font-cormorant">
          location map & land marks
        </h2>
        <LocationMap />
      </section>

      <section className="mt-[78px] md:mt-[106px] mb-[78px] max-w-[1160px] mx-auto px-[20px] sm:px-0">
        <h2 className="text-[20px] md:text-[40px] font-medium my-[15px] uppercase text-[#107BC0] text-center font-cormorant">
          Unrivalled Amenities for an <br /> Extraordinary Lifestyle
        </h2>
        <p className="text-center text-[14px] md:text-[16px] font-medium mx-auto max-w-[800px] mb-8 font-inter">
          From a rooftop pool to private lounges and concierge services, Rattha
          Grandéur offers unparalleled luxuries. Smart home automation, a
          state-of-the-art fitness center, and bespoke recreational spaces
          create an effortless, indulgent lifestyle. Every amenity is curated to
          deliver prestige, privacy, and an unrivaled living experience.
        </p>
        <AmenitiesCarousel />
      </section>
      <section className="bg-[#F1F1F1] py-[60px]">
        <FaqAccordion data={propertyfaqData} headingSize="xl">
          <h2 className="text-[20px] md:text-[40px] font-medium leading-[40px] text-[#107BC0] mb-[12px] font-cormorant">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </FaqAccordion>
      </section>
      <section className="mt-[90px] max-w-[1160px] mx-auto px-[20px] sm:px-0">
        <div>
          <h2 className="text-[20px] md:text-[40px]  font-medium mb-[20px] uppercase text-[#107BC0] text-center font-cormorant">
            Construction updates
          </h2>
          <p className="text-center mb-[14px]  font-medium  md:mb-[58px] w-full text-[14px] md:text-[15px] font-inter">
            Excavation work is currently in progress at Ratttha Grandéur, <br />
            marking the successful commencement of construction activities as
            per schedule.
          </p>
        </div>
        <ConstructionCarousel />
      </section>
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
