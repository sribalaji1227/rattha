"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  facebookIcon,
  instagramIcon,
  linkedInIcon,
  pinterestIcon,
  youtubeIcon
} from "@/constants/assets";
import { ChevronDown, ChevronUp } from "lucide-react";
import NavigationBar from "../Common/NavigationBar/NavigationBar";



// Main Footer Component
const Footer: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false); 
  
  const toggleExpanded = () => setIsExpanded(!isExpanded);

  const socialIcons = [
    facebookIcon,
    instagramIcon,
    linkedInIcon,
    pinterestIcon,
    youtubeIcon,
  ];

  const footerLinks = [
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms Of Use", href: "/terms-of-use" },
    { title: "Disclaimer", href: "#" },
    { title: "RERA Disclaimer", href: "#" },
    { title: "Cookie Policy", href: "/cookie-policy" },
    { title: "Site Map", href: "#" },
  ];

  return (
    <>
      {/* Main Footer Content */}
      <footer className="relative pb-0 md:pb-[50px]">
        {/* Expandable Section */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-[1195px] px-[20px] py-3 flex items-center justify-between mx-auto">
            <button
              type="button"
              onClick={toggleExpanded}
              className="flex items-center font-semibold text-black text-[14px] md:text-[20px] transition-all duration-300"
            >
              {isExpanded ? "LESS" : "MORE"}
              {isExpanded ? (
                <ChevronUp className="ml-[13px] transition-transform duration-300" size={22} />
              ) : (
                <ChevronDown className="ml-[13px] transition-transform duration-300" size={22} />
              )}
            </button>
            
         
          </div>
          
          {/* Expandable Content */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-[20px] pb-6 max-w-[1195px] mx-auto">
              {/* Mobile Layout - 2 columns */}
              <div className="block md:hidden">
                <div className="grid grid-cols-2 gap-x-6 gap-y-4 animate-slide-up">
                  {footerLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-black text-sm font-medium underline underline-offset-2 hover:text-blue-600 transition-colors duration-200"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Desktop Layout - 4 columns */}
              <div className="hidden md:block">
                <div className="grid grid-cols-4 gap-x-8 gap-y-4 animate-slide-up">
                  {footerLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-black text-[15px] font-[500] underline underline-offset-2 hover:text-blue-600 transition-colors duration-200"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Section */}
        <div className="bg-[#107BC0] text-white">
          {/* Desktop Footer */}
          <div className="hidden md:block py-8 max-w-[1160px] mx-auto relative">
            <div className="flex justify-between items-center">
              <div className="text-sm leading-[24px] animate-fade-in">
                <span className="font-light text-sm mr-1">&copy;</span>
                RATHA REALTY 2025 | ALL RIGHTS RESERVED
              </div>
              <div className="text-sm animate-fade-in">
                PRIVACY POLICY&nbsp;|&nbsp;DISCLAIMER
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex gap-4 animate-scale-in-fade">
                {socialIcons.map((icon, i) => (
                  <div
                    key={i}
                    className="hover:scale-110 transition-transform duration-200"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <Image src={icon} width={35} height={35} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Footer */}
          <div className="block md:hidden py-6 px-4 text-center">
            <div className="text-[12px] mb-4 animate-slide-down-fade">
              PRIVACY POLICY <span className="pl-[15px]">DISCLAIMER</span>
            </div>
            <div className="flex justify-center gap-4 mb-4 animate-fade-in">
              {socialIcons.map((icon, i) => (
                <div
                  key={i}
                  className="hover:scale-110 transition-transform duration-200"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <Image src={icon} width={35} height={35} alt="" />
                </div>
              ))}
            </div>
            <hr className="border-t border-[#E6E6E6] mb-4" />
            <div className="text-[12px] animate-slide-up-fade">
              <span className="font-light text-sm mr-1">&copy;</span>
              RATHA REALTY 2025 <span className="px-[5px]">|</span> ALL RIGHTS RESERVED
            </div>
          </div>
        </div>
        <div className="block md:hidden py-6 px-4 text-center">
          <div className="text-[12px] mb-4 font-inter">
            PRIVACY POLICY <span className="pl-[15px]">DISCLAIMER</span>
          </div>
          <div className="flex justify-center gap-4 mb-4">
            {socialIcons.map((icon, i) => (
              <Image key={i} src={icon} width={35} height={35} alt="" />
            ))}
          </div>
          <hr className="border-t border-[#E6E6E6] mb-4" />
          <div className="text-[12px] font-inter">
            <span className="font-light text-sm mr-1 ">&copy;</span>
            RATHA REALTY 2025 <span className="px-[5px]">|</span> ALL RIGHTS
            RESERVED
          </div>
        </div>
        </footer>
         <div className="fixed bottom-0 left-0 right-0 z-50 shadow-lg hidden md:block">
        <NavigationBar />
      </div>
    </>
  );
};

export default Footer;