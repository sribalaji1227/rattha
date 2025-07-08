import {
  contactUsBanner, 
} from "@/constants/assets";
import ParallaxBanner from "@/components/Common/ParallaxBanner/ParallaxBanner";
import RevealSection from "@/components/Common/RevealSection/RevealSection";
import FaqAccordion from "@/components/Common/FaqAccordion/FaqAccordion";
import TestimonialsSlider from "@/components/Common/Testimonials/TestimonialsSlider" 
import { contactusFaqData } from "@/constants/content"; 
import { CHANNEL_MEDIA_CONFIG, JV_MEDIA_FORM_SECTIONS, } from "@/constants/pages/mediaCenter";
import RegisterInterestForm from "@/components/partners/channel/RegisterInterestForm";

export default function ContactUs() {
  const config = CHANNEL_MEDIA_CONFIG;
  // Update your testimonials data to have 9 items
  const testimonials = [
    {
      name: 'Felix Jimoh',
      rating: 4.9,
      text: 'Lorem ipsum dolor sit amet consectetur. Sit non volutpat suspendisse aliquet in. Nisl consectetur eget vestibulum hendrerit sem tortor pellentesque tortor. Pellentesque interdum et nam aliquet eu quam interdum enim. Nulla netus nunc.',
    },
    {
      name: 'John Robert',
      rating: 4.9,
      text: 'Lorem ipsum dolor sit amet consectetur. Sit non volutpat suspendisse aliquet in. Nisl consectetur eget vestibulum hendrerit sem tortor pellentesque tortor. Pellentesque interdum et nam aliquet eu quam interdum enim. Nulla netus nunc.',
    },
    {
      name: 'Duke John',
      rating: 4.9,
      text: 'Lorem ipsum dolor sit amet consectetur. Sit non volutpat suspendisse aliquet in. Nisl consectetur eget vestibulum hendrerit sem tortor pellentesque tortor. Pellentesque interdum et nam aliquet eu quam interdum enim. Nulla netus nunc.',
    },
    {
      name: 'Sarah Smith',
      rating: 5.0,
      text: 'Excellent service and support throughout the entire process. Highly recommend Rattha Realty for their professionalism and attention to detail.',
    },
    {
      name: 'Michael Johnson',
      rating: 4.8,
      text: 'The team went above and beyond to help us find our dream home. Their knowledge of the market is unparalleled.',
    },
    {
      name: 'Emily Davis',
      rating: 4.7,
      text: 'From start to finish, the experience was seamless. The communication was excellent and they truly care about their clients.',
    },
    {
      name: 'David Wilson',
      rating: 5.0,
      text: 'I was impressed by their dedication and expertise. They found properties that perfectly matched my requirements.',
    },
    {
      name: 'Jennifer Brown',
      rating: 4.9,
      text: 'Working with Rattha Realty was a pleasure. They understood my needs and delivered beyond expectations.',
    },
    {
      name: 'Christopher Taylor',
      rating: 4.8,
      text: 'Professional, responsive, and knowledgeable. They made the buying process stress-free and enjoyable.',
    },
  ];

  return (
    <div>
      <ParallaxBanner
        desktopSrc={contactUsBanner}
        mobileSrc={contactUsBanner}
        altDesktop="contact Banner"
        altMobile="contact Banner"
        desktopLines={[{ text: "Let’s Begin Something\n Timeless." }]}
        mobileLines={[{ text: "Let’s Begin" }, { text: "Something Timeless." }]}
      />
      <div className="lg:mt-[104px]">
        <RevealSection
          title="Hello, How Can We Assist You Today?"
          description="We are here to assist you with all your luxury real estate needs.
          Whether you’re looking for exclusive residences, partnership
          opportunities, or personalised assistance, our dedicated team is ready
          to help. Reach out to us, and let’s create something extraordinary
          together."
        />
      </div>
      <section className="max-w-[1350px] mt-[103] m-auto text-center lg:mb-[75px]">
        {/* <div className="font-medium text-base leading-[24px] mb-[19]">
          CONTACT US
        </div> */}
        {/* <h2 className="text-[40px] text-[#107BC0] uppercase mt-11 font-cormorant mb-5">
          Hello, How Can We Assist You Today?
        </h2>
        <p className="font-medium text-base leading-[30px] font-[500] text-[#787878] mb-15 font-inter max-w-[1000] m-auto w-[50%]">
          We are here to assist you with all your luxury real estate needs.
          Whether you’re looking for exclusive residences, partnership
          opportunities, or personalised assistance, our dedicated team is ready
          to help. Reach out to us, and let’s create something extraordinary
          together.
        </p> */}
        <div className="lg:mt-[110px] sm:mt-[60px]">
          <p className="font-[600] leading-[30px] lg:text-[24px] sm:[14px] font-inter">Rattha Reality & Infrastructure Pvt Ltd.</p>
          <p className="font-[500] leading-[30px] lg:text-[16px] sm:[14px] text-[#787878] font-inter">Regd. Office Address: 6th Floor, Tower C, <br /> Tek Meadows, 51, Rajiv Gandhi Salai(OMR),<br /> Sholinganallur, Chennai - 600118.</p>
          <p className="font-[500] leading-[30px] lg:text-[16px] sm:[14px] text-[#787878] font-inter"><span className="font-[600]">GST: </span>33GHFKR2314557EDT  |  <span className="font-[600]">CIN: </span>U68100TN2024PTC175503</p>
          <div className="flex items-center justify-center px-4">
            <div className="w-full max-w-[640px] min-h-[60px] font-[600] leading-[24px] text-[#000000] font-inter m-5 bg-[#F9F9F9] text-center flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 p-4 rounded">

              <p className="flex items-center lg:text-[16px] sm:[14px]">
                Call:
                <span className="font-[600] lg:text-[24px] sm:[14px] md:text-[24px] text-[#3D94CC] font-inter ml-1">
                  +91 95 004 95 001
                </span>
              </p>

              <span className="hidden md:inline  text-[black]">|</span>

              <p className="flex items-center lg:text-[16px] sm:[14px]">
                Email:
                <span className="font-[600] lg:text-[24px] sm:[14px] md:text-[24px] text-[#3D94CC] font-inter ml-1">
                  info@rattharealty.com
                </span>
              </p>

            </div>
          </div>

        </div>
        {/* <div className="bg-[#F9F9F9] max-w-[480] m-auto p-4 font-bold text-base leading-[24px] mb-[45]">
          CIN : <span className="text-[#9A9898]">U68100TN2024PTC175503</span>
        </div> */}
        {/* <div className="max-w-[1056] mb-[114] m-auto">
          <div className="flex items-center justify-center md:flex-row flex-col">
            <div className="text-center">
              <Image
                className="m-auto"
                src={sales_enquiry}
                width={46}
                height={46}
                alt="sales enquiry"
              />
              <h3 className="mt-[14] mb-7 text-xl font-semibold leading-[130%] text-[#107BC0]">
                Sales
                <br /> Enquiry
              </h3>
              <div className="font-medium text-sm leading-[140%] text-[#787878] mb-2">
                1800 419 9807 Extn 101
              </div>
              <div className="font-medium text-sm leading-[140%] text-[#787878]">
                sales@rattharealty.com
              </div>
            </div>
            <div className="border border-[#DCDCDC] w-[69] md:w-[2px] h-[2] md:h-[69] ms-[45] me-[45] md:mb-8 my-4 "></div>
            <div>
              <Image
                className="m-auto"
                src={customer_enquiry}
                width={46}
                height={46}
                alt="sales enquiry"
              />
              <h3 className="mt-[14] mb-7 text-xl font-semibold leading-[130%] text-[#107BC0]">
                Customer
                <br /> Enquiry
              </h3>
              <div className="font-medium text-sm leading-[140%] text-[#787878] mb-2">
                1800 419 9807 Extn 101
              </div>
              <div className="font-medium text-sm leading-[140%] text-[#787878]">
                enquiry@rattharealty.com
              </div>
            </div>
            <div className="border border-[#DCDCDC] w-[69] md:w-[2px] h-[2] md:h-[69] ms-[45] me-[45] md:mb-8 my-4 "></div>
            <div className="">
              <Image
                className="m-auto"
                src={channel_partner_enquiry}
                width={46}
                height={46}
                alt="sales enquiry"
              />
              <h3 className="mt-[14] mb-7 text-xl font-semibold leading-[130%] text-[#107BC0]">
                Channel
                <br /> Partner Enquiry
              </h3>
              <div className="font-medium text-sm leading-[140%] text-[#787878] mb-2">
                1800 419 9807 Extn 101
              </div>
              <div className="font-medium text-sm leading-[140%] text-[#787878]">
                partner@rattharealty.com
              </div>
            </div>
            <div className="border border-[#DCDCDC] w-[69] md:w-[2px] h-[2] md:h-[69] ms-[45] me-[45] md:mb-8 my-4 "></div>
            <div className="">
              <Image
                className="m-auto"
                src={joint_development}
                width={46}
                height={46}
                alt="sales enquiry"
              />
              <h3 className="mt-[14] mb-7 text-xl font-semibold leading-[130%] text-[#107BC0]">
                Joint
                <br /> Development
              </h3>
              <div className="font-medium text-sm leading-[140%] text-[#787878] mb-2">
                1800 419 9807 Extn 101
              </div>
              <div className="font-medium text-sm leading-[140%] text-[#787878]">
                jd@rattharealty.com
              </div>
            </div>
          </div>
        </div> */}
      </section>
      {/* <section className="sm:mt-[20px] md:py-[50px] px-[25px] lg:px-[5px] max-w-[1160px] mx-auto">
        <GoogleMaps />
      </section> */}
      <div className="pt-[0px] pb-[70px] md:py-[70px] max-w-[1160px] mx-auto px-[20px] md:px-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.028699246686!2d80.22397607411925!3d12.905876116317733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525c7b80d595ab%3A0x5bd1bad2453f2b25!2sRattha%20Group!5e0!3m2!1sen!2sin!4v1751455579813!5m2!1sen!2sin"
          className="w-full max-w-[380px] h-[480px] sm:max-w-full sm:h-[750px] mx-auto shadow-lg border-0"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      {/* <section className="bg-[#F1F1F1] pt-16 pb-16 mb-[94px] min-h-[688px] flex items-center justify-center">
        <div className="w-full max-w-[1122px] px-4 sm:px-6 md:px-10 lg:px-16">
          <FaqDropdown data={contactusFaqData} headingSize="xl">
            <h2 className="font-normal font-cormorant text-2xl sm:text-3xl md:text-4xl leading-[40px] text-[#107BC0] mb-8 text-center sm:text-left">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="font-medium font-inter text-sm sm:text-base leading-[24px] text-[#787878] mb-4 text-center sm:text-left">
              This Section Provides Insights Into The Exclusivity, Sophistication,
              And Bespoke Services We Offer. Should You Require Further
              Information, our Dedicated Team Is Always Available To Assist With
              Discretion and Expertise.
            </p>
          </FaqDropdown>
        </div>
      </section> */}
      {/* FAQ Section */}
      <section className="bg-[#F1F1F1] py-[40px] px-[15px]">
        <FaqAccordion data={contactusFaqData} headingSize="xl">
          <h2 className="text-[24px] md:text-[40px] font-medium leading-[40px] text-[#107BC0] sm:mb-[40px] lg:mb-12 font-cormorant">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="font-medium font-inter sm:text-base leading-[24px] text-[#787878] sm:text-[16px] lg:text-[16px] mt-4 mb-4 lg:text-left sm:text-justify">
            This Section Provides Insights Into The Exclusivity, Sophistication,
            And Bespoke Services We Offer. Should You Require Further
            Information, our Dedicated Team Is Always Available To Assist With
            Discretion and Expertise.
          </p>
        </FaqAccordion>
      </section>

      <section className="max-w-[1350px] mt-[103] m-auto text-center mb-[100px] px-[20px]">
        {/* <div className="font-medium text-base leading-[24px] mb-[19]">
          CONTACT US
        </div> */}
        <h2 className="text-[24px] md:text-[40px] font-[500]  text-[#107BC0] uppercase mt-28 font-cormorant mb-5">
          WHAT PEOPLE SAY?
        </h2>
        <p className="lg:text-[16px] text-base leading-[30px] text-[#000000] font-[500] py-2 px-6 mb-8 font-inter lg:w-[800px] md:w-[600px]  sm:w-[autp] m-auto">
          We are here to assist you with all your luxury real estate needs.
          Whether you’re looking for exclusive residences, partnership
          opportunities.
        </p>
        <TestimonialsSlider testimonials={testimonials} />

      </section>
      <section className="mb-[94px]">
        {/* <h3 className="font-[Helvetica Neue] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold xl:text-[176px] text-center text-[#EBF8FF] mt-[105] mb-[115]">
          CHENNAI
        </h3> */}
        <div className="max-w-[1350px] m-auto px-[40px] lg:px-[100px] flex flex-col lg:flex-row justify-between ">
          {/* <div className="ps-[31] border-s border-s-[#107BC0] mt-[39] max-h-min">
            <h3 className="uppercase font-light text-lg leading-6 text-[#107BC0] mb-[14]">
              rattha realty &<br /> infrastructure Pvt ltd.
            </h3>
            <div className="border border-[#BABABA] mb-[7] w-[93.5px]"></div>
            <div className="font-normal text-base leading-[30px] mb-[19]">
              Reg Office: 6th Floor, Tower C,
              <br /> Tek Meadows,
              <br /> 51, Rajiv Gandhi Salai (OMR)
              <br /> Sholnganallur, Chennai-600118
            </div>
            <div className="flex gap-[10] mb-[21]">
              <Image
                src="/assets/icons/outline_phone_blue.svg"
                width={20.25}
                height={20.28}
                alt="phone icon"
              />
              <span className="font-normal text-sm leading-[30px] text-[#787878]">
                +91 86594 71254
              </span>
            </div>
            <div className="flex gap-[10]">
              <Image
                src="/assets/icons/outline_blue_location.svg"
                width={20.25}
                height={20.28}
                alt="phone icon"
              />
              <span className="font-normal text-sm leading-[30px] text-[#787878]">
                LOCATE ON MAP
              </span>
            </div>
          </div> */}

          {/* <ContactForm /> */}

        </div>
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
