import { NavItem } from "@/types/common/navItem";
import {
  enguireIcon,
  phoneIcon,
  whatsappIcon,
  mapPinIcon,
  quillChatIcon,
} from "@/constants/assets";

export const navItems: NavItem[] = [
  { id: "enquire", icon: enguireIcon, text: "ENQUIRE", mobileOrder: 1 },
  { id: "call", icon: phoneIcon, text: "CALL", mobileOrder: 2 },
  { id: "whatsapp", icon: whatsappIcon, text: "WHATSAPP", mobileOrder: 3 },
  { id: "schedule", icon: mapPinIcon, text: "SCHEDULE" },
  { id: "chat", icon: quillChatIcon, text: "CHAT" },
];