import { Metadata } from "next";
import { CHANNEL_PARTNERS_METADATA } from "../pages/channelPartners";

export const nriMetadata: Metadata= {
  ...CHANNEL_PARTNERS_METADATA,
  alternates: {
    canonical: "https://yourwebsite.com/partners/channel",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};