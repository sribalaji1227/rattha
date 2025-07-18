import { Metadata } from "next";
import { JV_PARTNERS_METADATA } from "../pages/jvPartners";

export const jvMetadata: Metadata = {
  ...JV_PARTNERS_METADATA,
  alternates: {
    canonical: 'https://yourwebsite.com/partners/jv',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};