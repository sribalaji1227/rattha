// components/NavigationBar.tsx
"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import {
  enguireIcon,
  phoneIcon,
  whatsappIcon,
  mapPinIcon,
  quillChatIcon,
} from "@/constants/assets";

interface NavItem {
  id: string;
  icon: StaticImageData | string;
  text: string;
  mobileOrder?: number;
}

const navItems: NavItem[] = [
  { id: "enquire", icon: enguireIcon, text: "ENQUIRE", mobileOrder: 1 },
  { id: "call", icon: phoneIcon, text: "CALL", mobileOrder: 2 },
  { id: "whatsapp", icon: whatsappIcon, text: "WHATSAPP", mobileOrder: 3 },
  { id: "schedule", icon: mapPinIcon, text: "SCHEDULE" },
  { id: "chat", icon: quillChatIcon, text: "CHAT" },
];

const NavigationBar: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const handleMouseEnter = useCallback((id: string) => setHovered(id), []);
  const handleMouseLeave = useCallback(() => setHovered(null), []);

  const mobileItems = navItems
    .filter((item) => item.mobileOrder !== undefined)
    .sort((a, b) => a.mobileOrder! - b.mobileOrder!);

  const renderItem = useCallback(
    (item: NavItem, size: "mobile" | "desktop") => {
      const isHovered = hovered === item.id;
      const iconSize = size === "mobile" ? 16 : 15;
      const paddingY = size === "mobile" ? "py-3" : "py-0";
      const flexClass = size === "mobile" ? "flex-1" : "w-1/5";
      const textSize =
        size === "mobile"
          ? "text-[14px] mt-2"
          : "text-xs sm:text-[8px] ";
      const underlineWidth = isHovered
        ? size === "mobile"
          ? "w-8"
          : "w-10"
        : "w-0";

      return (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`
            ${flexClass} flex flex-col gap-1 items-center justify-center
            relative ${paddingY} transition-all duration-300
          `}
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`
              transition-transform duration-300 ease-out
              ${isHovered ? "scale-110 -translate-y-1" : "scale-100"}
            `}
          >
            <Image
              src={item.icon}
              width={iconSize}
              height={iconSize}
              alt={item.text.toLowerCase()}
              className={`
                transition-filter duration-300
                ${isHovered ? "filter brightness-75" : ""}
              `}
            />
          </div>

          <span
            className={`
              font-inter font-semibold ${textSize}
              transition-colors duration-300
              ${isHovered ? "text-blue-600" : "text-gray-900"}
            `}
          >
            {item.text}
          </span>

          <span
            className={`
              absolute bottom-0 left-1/2 h-0.5 bg-blue-600
              transition-all duration-300 ease-out ${underlineWidth}
            `}
            style={{ transform: "translateX(-50%)" }}
          />
        </a>
      );
    },
    [hovered, handleMouseEnter, handleMouseLeave]
  );

  return (
    <div className="bg-[#FAFAFA] text-gray-900 font-medium text-sm h-[8vh]">
      <nav className="w-full mx-auto h-full">
        {/* Mobile: first three items + dividers */}
        <div className="flex md:hidden items-center">
          {mobileItems.map((item, idx) => (
            <React.Fragment key={item.id}>
              {renderItem(item, "mobile")}
              {idx < mobileItems.length - 1 && (
                <div className="h-10 w-px bg-[#D2D2D2]" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Desktop: all items + dividers */}
        <div className="hidden md:flex justify-between items-center px-4 md:px-0 py-[2px]  max-w-[1365px] mx-auto  h-full">
          {navItems.map((item, idx) => (
            <React.Fragment key={item.id}>
              {renderItem(item, "desktop")}
              {idx < navItems.length - 1 && (
                <div className="h-10 w-px bg-[#D2D2D2]" />
              )}
            </React.Fragment>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
