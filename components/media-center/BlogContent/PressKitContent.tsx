"use client";

import { mailIcon, phoneIconPress } from "@/constants/assets";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import "./PressKitContent.css";

interface LogoItem {
  id: string;
  title: string;
  image: string;
  downloadUrl: string;
}

interface ProfileItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  downloadUrl: string;
}

interface PhotographItem {
  id: string;
  name: string;
  position: string;
  image: string;
  downloadUrl: string;
}

interface MediaContact {
  name: string;
  company: string;
  address: string[];
  phone: string;
  email: string;
}

const PressKit: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Sample data - replace with your actual data
  const logoItems: LogoItem[] = [
    {
      id: "logo-1",
      title: "Rattha Logo Black",
      image: "/assets/images/ratthaLogo.jpg",
      downloadUrl: "/downloads/rattha-logo-black.zip",
    },
    {
      id: "logo-2",
      title: "Rattha Logo White",
      image: "/assets/images/ratthaLogo.jpg",
      downloadUrl: "/downloads/rattha-logo-white.zip",
    },
  ];

  const profileItems: ProfileItem[] = [
    {
      id: "profile-1",
      title: "RATTHA & SUSTAINABILITY",
      subtitle: "Rattha Realty",
      image: "/assets/images/pressKitProfile1.jpg",
      downloadUrl: "/downloads/rattha-sustainability.pdf",
    },
    {
      id: "profile-2",
      title: "CSR PROFILE",
      subtitle: "Rattha Realty",
      image: "/assets/images/pressKitProfile2.jpg",
      downloadUrl: "/downloads/csr-profile.pdf",
    },
    {
      id: "profile-3",
      title: "CORPORATE PROFILE",
      subtitle: "Rattha Realty",
      image: "/assets/images/pressKitProfile3.jpg",
      downloadUrl: "/downloads/corporate-profile.pdf",
    },
  ];

  const photographItems: PhotographItem[] = [
    {
      id: "photo-1",
      name: "GURIBINDER RATTHA",
      position: "Founder",
      image: "/assets/images/pressKitPhotograph1.jpg",
      downloadUrl: "/downloads/guribinder-founder.jpg",
    },
    {
      id: "photo-2",
      name: "GURIBINDER RATTHA",
      position: "Chairman",
      image: "/assets/images/pressKitPhotograph2.jpg",
      downloadUrl: "/downloads/guribinder-chairman.jpg",
    },
    {
      id: "photo-3",
      name: "GURIBINDER RATTHA",
      position: "Managing Director",
      image: "/assets/images/pressKitPhotograph3.jpg",
      downloadUrl: "/downloads/guribinder-md.jpg",
    },
    {
      id: "photo-3",
      name: "GURIBINDER RATTHA",
      position: "Managing Director",
      image: "/assets/images/pressKitPhotograph3.jpg",
      downloadUrl: "/downloads/guribinder-md.jpg",
    },
    {
      id: "photo-3",
      name: "GURIBINDER RATTHA",
      position: "Managing Director",
      image: "/assets/images/pressKitPhotograph3.jpg",
      downloadUrl: "/downloads/guribinder-md.jpg",
    },
  ];

  const mediaContact: MediaContact = {
    name: "Mr. Rajendra Singh",
    company: "Rattha Realty & Infrastructure Pvt Ltd.",
    address: [
      "Rattha Realty & Infrastructure Pvt Ltd.",
      "Regd Office: 6th Floor, Tower C, ",
      "Tek Meadows,",
      "51, Rajiv Gandhi Salai (OMR)",
      "Sholnganallur, Chennai-600118",
    ],
    phone: "+91 9380247254",
    email: "marketing@rattha.com",
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("data-section");
            if (sectionId) {
              setVisibleSections((prev) => new Set([...prev, sectionId]));
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: "50px" }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleDownload = (url: string, filename: string) => {
    // Create a temporary anchor element for download
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const DownloadButton = ({
    url,
    filename,
    className = "",
  }: {
    url: string;
    filename: string;
    className?: string;
  }) => (
    <button
      onClick={() => handleDownload(url, filename)}
      className={`bg-[#107BC0] text-[#FFFFFF] px-6  py-2 rounded-full text-[12px] font-inter font-[600] uppercase transition-all duration-300 hover:bg-[#0D6BA3] hover:scale-105 hover:shadow-lg ${className}`}
    >
      Download
    </button>
  );

  return (
    <div className="max-w-[1150px] mx-auto px-4  bg-white">
      {/* Press Kit Title */}
      <div
        ref={(el) => {
          sectionRefs.current["title"] = el;
        }}
        data-section="title"
        className={`text-center mb-16 transition-all duration-700 ${
          visibleSections.has("title")
            ? "slide-down-fade"
            : "opacity-0 -translate-y-8"
        }`}
      >
        <h1 className="text-[24px] font-cormorant md:text-[40px]  font-[500] text-[#000000] tracking-[2px] ">
          PRESS KIT
        </h1>
      </div>

      {/* Logo Section */}
      <div
        ref={(el) => {
          sectionRefs.current["logos"] = el;
        }}
        data-section="logos"
        className={`mb-[40px] transition-all duration-700 delay-200 ${
          visibleSections.has("logos")
            ? "slide-up-fade"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-full mx-auto">
          {logoItems.map((logo, index) => (
            <div
              key={logo.id}
              className={`bg-white  flex flex-col gap-10 border border-[#E5E5E5]  p-[60px] text-center shadow-sm hover:shadow-md transition-all duration-500 delay-${
                index * 100
              }`}
              style={{
                animation: visibleSections.has("logos")
                  ? `slideUpFade 0.7s ease-out ${index * 0.2}s forwards`
                  : "none",
              }}
            >
              <h3 className="text-[20px] font-inter font-[500] text-[#787878] ">
                {logo.title}
              </h3>
              <div className=" h-[80px] flex items-center justify-center">
                <img
                  src={logo.image}
                  alt={logo.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <DownloadButton
                url={logo.downloadUrl}
                filename={`${logo.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}.zip`}
                className="sm:w-[170px] w-full mx-auto"
              />
            </div>
          ))}
        </div>
        <div className="hidden md:block w-full h-[1px] md:h-[2px] bg-[#E5E5E5] mt-[55px]"></div>
      </div>

      {/* Profile Section */}
      <div
        ref={(el) => {
          sectionRefs.current["profile"] = el;
        }}
        data-section="profile"
        className={`pt-[30px] md:pt-0 transition-all duration-700 delay-400 ${
          visibleSections.has("profile")
            ? "slide-up-fade"
            : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-[24px] md:text-[40px] font-cormorant   font-[500] text-[#000000] md:text-[#107BC0] text-center mb-7 tracking-[1px]">
          PROFILE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {profileItems.map((profile, index) => (
            <div
              key={profile.id}
              className={`bg-white  overflow-hidden  transition-all duration-500 group`}
              style={{
                animation: visibleSections.has("profile")
                  ? `slideUpFade 0.7s ease-out ${index * 0.2}s forwards`
                  : "none",
              }}
            >
              <div className="w-full max-w-[380px] aspect-[4/3] overflow-hidden mx-auto">
                <img
                  src={profile.image}
                  alt={profile.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-[16px] md:text-[20px] font-inter font-[500] text-[#000000] md:text-[#787878] mb-1 uppercase tracking-[0.5px]">
                  {profile.title}
                </h3>
                <p className="text-[14px] md:text-[20px] font-inter font-[500]  text-[#787878] mb-4">
                  {profile.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Dot pagination for profiles */}
        <div className="hidden md:flex justify-center mt-3 mb-10 space-x-2 max-w-[1200px] mx-auto">
          <div className="w-5 h-2 rounded-full bg-[#107BC0]"></div>
          <div className="w-2 h-2 rounded-full bg-[#E5E5E5]"></div>
          <div className="w-2 h-2 rounded-full bg-[#E5E5E5]"></div>
        </div>

        {/* Horizontal line below profiles */}
        <div className="w-full h-[2px] md:h-[1px] bg-[#E5E5E5]  "></div>
      </div>

      {/* Photographs Section */}
      <div
        ref={(el) => {
          sectionRefs.current["photographs"] = el;
        }}
        data-section="photographs"
        className={`mb-[45px] mt-[50px] transition-all duration-700 delay-600 ${
          visibleSections.has("photographs")
            ? "slide-up-fade"
            : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-[24px] md:text-[40px] font-cormorant font-[500] text-[#000000] md:text-[#107BC0] text-center mb-6 md:mb-12 tracking-[1px]">
          PHOTOGRAPHS
        </h2>

        <div
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
          ref={(el) => {
            sectionRefs.current["photoScroll"] = el;
          }}
        >
          {photographItems.map((photo, index) => (
            <div
              key={photo.id}
              className="flex-shrink-0 w-[90%] max-w-[380px] snap-start bg-white overflow-hidden transition-all duration-500 group"
              style={{
                animation: visibleSections.has("photographs")
                  ? `slideUpFade 0.7s ease-out ${index * 0.2}s forwards`
                  : "none",
              }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={photo.image}
                  alt={photo.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 md:text-center flex items-center justify-between md:flex-col">
                <div>
                  <h3 className="text-[16px] md:text-[24px] font-inter font-[500] text-[#000000] md:text-[#787878] mb-1 uppercase tracking-[0.5px]">
                    {photo.name}
                  </h3>
                  <p className="text-[14px] md:text-[20px] font-[500] font-inter text-[#787878] mb-4">
                    {photo.position}
                  </p>
                </div>
                <DownloadButton
                  url={photo.downloadUrl}
                  filename={`${photo.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}-${photo.position.toLowerCase()}.jpg`}
                  className="md:w-[180px] w-full !text-[10px] sm:text-[12px]"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="mt-[10px] flex justify-center items-center space-x-4">
          <button
            className="w-10 h-10 rounded-full border border-[#107BC0] flex items-center justify-center hover:bg-[#D2EDFF] text-[#107BC04D] hover:text-[#0070DE] hover:border-[#107BC0] transition-all duration-300"
            onClick={() => {
              sectionRefs.current["photoScroll"]?.scrollBy({
                left: -300,
                behavior: "smooth",
              });
            }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            className="w-10 h-10 rounded-full border border-[#107BC0] flex items-center justify-center hover:bg-[#D2EDFF] text-[#107BC04D] hover:text-[#0070DE] hover:border-[#107BC0] transition-all duration-300"
            onClick={() => {
              sectionRefs.current["photoScroll"]?.scrollBy({
                left: 300,
                behavior: "smooth",
              });
            }}
          >
            <svg
              className="w-5 h-5 text-current"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Horizontal line below photos */}
        <div className="w-full h-[2px] md:h-[1px] bg-[#E5E5E5] mt-8 mb-6"></div>
      </div>

      {/* Media Contact Section */}
      <div
        ref={(el) => {
          sectionRefs.current["contact"] = el;
        }}
        data-section="contact"
        className={`transition-all duration-700 delay-800 ${
          visibleSections.has("contact")
            ? "slide-up-fade"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="bg-[#EBF8FF] p-6 md:p-8">
          <div className="flex flex-col lg:flex-row max-w-[1000px] mx-auto">
            {/* Left Section - Title and Description */}
            <div className="flex-[2] flex flex-col justify-center pr-8">
              <h2 className="text-[24px]  md:text-[40px] font-cormorant font-[500] text-[#000000] mb-4 tracking-[1px]">
                MEDIA CONTACT
              </h2>
              <p className="text-[14px] md:text-[16px]  font-[400] text-[#000000] leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Mauris ante turpis porta
                id quam sagittis volutpat. Scelerisque sem ipsum at eros
                facilisis gravida mi viverra. Hendrerit ut euismod malesuada
                ullamcorper
              </p>
            </div>

            {/* Vertical Line Separator */}
            <div className="w-[2px] bg-[#107BC0] mx-0 lg:block"></div>

            {/* Right Section - Contact Details with Mobile Vertical Line */}
            <div className="flex-[1] p-6 md:p-8 relative">
              {/* Mobile Vertical Line */}
              <div className="absolute left-0 top-4 bottom-0 w-[2px] h-[260px] my-auto bg-[#107BC0] lg:hidden"></div>

              <div className="pl-1 lg:pl-0 pt-5 md:pt-0">
                <h3 className="text-[18px]  font-cormorant md:font-[700] font-[300]  text-[#212529] mb-1 uppercase tracking-[0.5px]">
                  {mediaContact.name}
                </h3>

                <p className="text-[12px] md:text-[14px] font-inter font-[400] text-[#787878] mb-4">
                  Vice President - Media Relation
                </p>

                <div className="text-[12px] md:text-[16px] font-inter text-[#000000] font-[400] leading-relaxed mb-6">
                  {mediaContact.address.map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={phoneIconPress}
                      width={19}
                      height={19}
                      alt="phoneIcon"
                    />
                    <span className="text-[14px]  font-inter text-[#000000] font-[400]">
                      {mediaContact.phone}
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Image
                      src={mailIcon}
                      width={19}
                      height={19}
                      alt="phoneIcon"
                    />
                    <span className="text-[14px]  font-inter text-[#000000] font-[400]">
                      {mediaContact.email}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressKit;
