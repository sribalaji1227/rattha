"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  enguireIcon,
  phoneIcon,
  whatsappIcon,
  mapPinIcon,
  quillChatIcon,
} from "@/constants/assets";

const NavigationBar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { id: "enquire", icon: enguireIcon, text: "ENQUIRE", mobileOrder: 1 },
    { id: "call", icon: phoneIcon, text: "CALL", mobileOrder: 2 },
    { id: "whatsapp", icon: whatsappIcon, text: "WHATSAPP", mobileOrder: null },
    { id: "schedule", icon: mapPinIcon, text: "SCHEDULE", mobileOrder: null },
    { id: "chat", icon: quillChatIcon, text: "CHAT", mobileOrder: 3 },
  ];

  // Separate items for mobile (only 3) and desktop (all 5)
  const mobileItems = navItems.filter((item) => item.mobileOrder !== null)
    .sort((a, b) => (a.mobileOrder || 0) - (b.mobileOrder || 0));
  
  const desktopItems = navItems;

  return (
    <footer className="bg-[#FAFAFA] text-gray-900 font-medium text-sm">
      <div className="w-full mx-auto">
        {/* Mobile Navigation (3 icons) */}
        <div className="flex md:hidden">
          {mobileItems.map((item) => (
            <a
              key={item.id}
              className="flex-1 flex flex-col items-center justify-center group relative transition-all duration-300 py-3"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              href={`#${item.id}`}
            >
              <div
                className={`
                  transform transition-all duration-300 ease-out
                  ${hoveredItem === item.id
                    ? "scale-110 -translate-y-1"
                    : "scale-100"
                  }
                `}
              >
                <Image
                  src={item.icon}
                  width={16}
                  height={16}
                  alt={item.text.toLowerCase()}
                  className={`transition-all duration-300 ${
                    hoveredItem === item.id ? "filter brightness-75" : ""
                  }`}
                />
              </div>
              <div
                className={`
                  font-[family-name:var(--font-inter)] font-[600] text-[14px] text-[#000000] mt-2 transition-all duration-300
                  ${hoveredItem === item.id ? "text-blue-600" : ""}
                `}
              >
                {item.text}
              </div>
              
              {/* Animated underline effect */}
              <div
                className={`
                  absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-blue-600
                  transition-all duration-300 ease-out
                  ${hoveredItem === item.id ? "w-8" : "w-0"}
                `}
              />
            </a>
          ))}
        </div>

        {/* Desktop Navigation (5 icons) */}
        <div className="hidden md:flex flex-row justify-between items-center px-4 md:px-6 lg:px-8 py-6">
          {desktopItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <a
                className="flex flex-col items-center justify-center group relative transition-all duration-300 py-2 w-1/5"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                href={`#${item.id}`}
              >
                <div
                  className={`
                    transform transition-transform duration-300 ease-out
                    ${hoveredItem === item.id
                      ? "scale-110 -translate-y-1"
                      : "scale-100"
                    }
                  `}
                >
                  <Image
                    src={item.icon}
                    width={24}
                    height={24}
                    alt={item.text.toLowerCase()}
                    className={`transition-all duration-300 ${
                      hoveredItem === item.id ? "filter brightness-75" : ""
                    }`}
                  />
                </div>
                <div
                  className={`
                    font-[family-name:var(--font-inter)] font-semibold text-xs sm:text-sm mt-2 sm:mt-4 transition-all duration-300
                    ${hoveredItem === item.id ? "text-blue-600" : ""}
                  `}
                >
                  {item.text}
                </div>
                
                {/* Animated underline effect */}
                <div
                  className={`
                    absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-blue-600
                    transition-all duration-300 ease-out
                    ${hoveredItem === item.id ? "w-10" : "w-0"}
                  `}
                />
              </a>
              
              {/* Dividers between items (not after the last item) */}
              {index < desktopItems.length - 1 && (
                <div className="h-10 w-px bg-[#D2D2D2]"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default NavigationBar;