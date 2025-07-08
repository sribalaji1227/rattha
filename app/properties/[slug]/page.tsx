import FaqAccordion from "@/components/Common/FaqAccordion/FaqAccordion"; 
import ParallaxBanner from "@/components/Common/ParallaxBanner/ParallaxBanner";
import { Project } from "@/components/partners-projects/ExploreCard";
import ExploreList from "@/components/partners-projects/ExploreList";
import RegisterInterestForm from "@/components/partners/channel/RegisterInterestForm";
import { aboutUsBanner } from "@/constants/assets";
import { propertyfaqData } from "@/constants/content";
import {
  CHANNEL_MEDIA_CONFIG,
  JV_MEDIA_FORM_SECTIONS,
} from "@/constants/pages/mediaCenter";

export default function PropertiesDetailPage() {
  const config = CHANNEL_MEDIA_CONFIG; 

   const data: Project[] = [
    {
      id: "1",
      image: "/assets/images/blogImage1.png",
      location: "Sector 54, Gurugram",
      title: "Rattha Realty Vista",
      status: "New Launch",
      price: "INR 11.00 Cr. Onwards |",
      possessionDate: "Jan 2031",
    },
    {
      id: "2",
      image: "/assets/images/residential_developement.png",
      location: "Sector 54, Gurugram",
      title: "Rattha Realty Vista",
      status: "Under Construction",
      price: "11.00 Cr. Onwards |",
      possessionDate: "Jan 2031",
    },
    {
      id: "3",
      image: "/assets/images/blogImage1.png",
      location: "Sector 54, Gurugram",
      title: "Rattha Realty Vista",
      status: "New Launch",
      price: "11.00 Cr. Onwards |",
      possessionDate: "Jan 2031",
    },
    {
      id: "4",
      image: "/assets/images/residential_developement.png",
      location: "Sector 54, Gurugram",
      title: "Rattha Realty Vista",
      status: "Under Construction",
      price: "11.00 Cr. Onwards |",
      possessionDate: "Jan 2031",
    },
    {
      id: "5",
      image: "/assets/images/blogImage1.png",
      location: "Sector 54, Gurugram",
      title: "Rattha Realty Vista",
      status: "New Launch",
      price: "11.00 Cr. Onwards |",
      possessionDate: "Jan 2031",
    },
    {
      id: "6",
      image: "/assets/images/residential_developement.png",
      location: "Sector 54, Gurugram",
      title: "Rattha Realty Vista",
      status: "Under Construction",
      price: "11.00 Cr. Onwards |",
      possessionDate: "Jan 2031",
    },
    {
      id: "7",
      image: "/assets/images/blogImage1.png",
      location: "Sector 54, Gurugram",
      title: "Rattha Realty Vista",
      status: "New Launch",
      price: "11.00 Cr. Onwards |",
      possessionDate: "Jan 2031",
    },
    {
      id: "8",
      image: "/assets/images/residential_developement.png",
      location: "Sector 54, Gurugram",
      title: "Rattha Realty Vista",
      status: "Under Construction",
      price: "11.00 Cr. Onwards |",
      possessionDate: "Jan 2031",
    },
    {
      id: "9",
      image: "/assets/images/blogImage1.png",
      location: "Sector 54, Gurugram",
      title: "Rattha Realty Vista",
      status: "New Launch",
      price: "11.00 Cr. Onwards |",
      possessionDate: "Jan 2031",
    }
  ];
   
  return (
    <div>
      <ParallaxBanner
        desktopSrc={aboutUsBanner}
        mobileSrc={aboutUsBanner}
        altDesktop="aboutUsBanner"
        altMobile="aboutUsBanner"
        desktopLines={[{ text: "Elegance in Every Elevation." }]}
        mobileLines={[{ text: "Elegance in Every Elevation." }]}
      />
      {/* <NavigationBar />       */}

      {/* Projects Section with Filter */}
      <section aria-labelledby="explore-projects">
        <h2 id="explore-projects" className="sr-only">
          Explore Projects
        </h2>
        <ExploreList projects={data} />
      </section> 

      {/* Map Section */}
      <section className="sm:px-[30px]">
      <div className="pt-[0px] my-[70px] w-full max-w-[380px] min-h-[630px] max-h-[630px] sm:max-w-[1100px] sm:max-h-[630px] mx-auto">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.011580753302!2d80.2909540748437!3d13.098452487228712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f469e4466f3%3A0x281a3841d1b95a5d!2sChakiat%20Shipping%20Services%20Private%20Limited!5e0!3m2!1sen!2sin!4v1748311951751!5m2!1sen!2sin"
          className="w-full min-h-[630px] shadow-lg border-0"
          allowFullScreen
          loading="lazy"
        />
      </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#F1F1F1] py-[60px]">
        <FaqAccordion data={propertyfaqData} headingSize="xl">
          <h2 className="text-[20px] md:text-[40px] font-medium leading-[40px] text-[#107BC0] mb-[12px] font-cormorant">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </FaqAccordion>
      </section>

      {/* Register Interest Form */}
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
