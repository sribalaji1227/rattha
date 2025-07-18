import type { StaticImageData } from "next/image";

export interface NavItem {
  id: string;
  icon: StaticImageData | string;
  text: string;
  mobileOrder?: number;
}