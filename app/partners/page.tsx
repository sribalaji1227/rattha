import Image from "next/image";
import { Header, InterestForm } from "@/components";
import { partnerBanner } from "@/constants/assets";

export default function Partners() {
  return (
    <div>
      <div className="relative h-[50rem]">
        <div className="absolute  z-2 bottom-[300px] sm:left-[155px] left-[55px]">
          <h1 className="text-white font-bold text-[40px] md:text-[55px] lg:text-[65px]">
            Home That
            <br /> Moves You
          </h1>
        </div>
        <Image
          src={partnerBanner}
          alt="Partner Banner"
          layout="fill"
          objectFit="cover"
        />
        <Header />
      </div>
      <section>
        <div className="max-w-[970] m-auto my-17 mb-[122]">
          <h2 className="text-[#107BC0] font-normal text-[40px] leading-[60px] tracking-[1px] mb-[17px] text-center font-lemonmilk">
            ELITE PARTNERSHIPS, EXCLUSIVE
            <br /> OPPORTUNITIES
          </h2>
          <p className="text-center mb-[31px] text-base font-medium leading-[28px]">
            We cultivate alliances built on trust, discretion, and shared
            ambition. As a Channel Partner, you gain privileged access to an
            exquisite portfolio of ultra-luxury residences and elite commercial
            spaces, designed for a clientele that seeks nothing but the
            extraordinary.{" "}
          </p>
          <p className="text-center text-base font-medium leading-[28px]">
            Our partnership is more than a collaboration—it is an invitation
            into a world of distinction. With bespoke support, market
            intelligence, and unparalleled incentives, we empower you to engage
            the most discerning investors effortlessly. Elevate your business
            with Rattha Realty, where exclusivity, prestige, and excellence
            define every endeavour.{" "}
          </p>
        </div>
      </section>
      <section>
        <div className="max-w-[1119] m-auto text-center mb-[141]">
          <h2 className="font-lemonmilk font-normal text-4xl leading-[40px] tracking-[1px] text-[#107BC0] mb-8">
            EXPLORE PROJECTS
          </h2>
          <p className="font-medium text-base leading-[24px] max-w-[1021] m-auto mb-[53px]">
            Discover our latest launch - a symbol of refined living and
            architectural brilliance. Designed for exclusivity, it offers
            sophisticated residences with world-class amenities in a prime
            location. Every detail embodies elegance, comfort, and modern
            luxury, creating a bespoke living experience for those who seek
            distinction and prestige in every aspect of their home.{" "}
          </p>
          {/* <ProjectCarousel /> */}
        </div>
      </section>
      <section className="mb-[148]">
        <InterestForm />
      </section>
    </div>
  );
}
