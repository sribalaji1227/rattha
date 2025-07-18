import { Metadata } from "next";
import { REFERRAL_PARTNERS_METADATA } from "../pages/referralPartners";

export const referralMetadata: Metadata = {
  ...REFERRAL_PARTNERS_METADATA,
  alternates: {
    canonical: 'https://yourwebsite.com/partners/referral',
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