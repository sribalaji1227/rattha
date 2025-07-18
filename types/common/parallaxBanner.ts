import { StaticImageData } from "next/image";

export interface ParallaxBannerProps {
  desktopSrc: StaticImageData | string;
  mobileSrc: StaticImageData | string;
  altDesktop: string;
  altMobile: string;
  desktopLines: { text: string; delay?: number; fontSize?: number }[];
  mobileLines: { text: string; delay?: number }[];
}
