// app/partners/channel/page.tsx
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import {
  CHANNEL_PARTNERS_METADATA,

} from "@/constants/pages/channelPartners";
import { CHANNEL_MEDIA_CONFIG, JV_MEDIA_FORM_SECTIONS, mockPosts } from '@/constants/pages/mediaCenter';
import BlogList from '@/components/media-center/BlogList';

export interface BlogPost {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  readTime?: string;
}

export const metadata: Metadata = {
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


const HeroSection = dynamic(
  () => import("@/components/partners/channel/HeroSection")
);

const RegisterInterestForm = dynamic(
  () => import("@/components/partners/channel/RegisterInterestForm"),
  {
    loading: () => (
      <div className="max-w-6xl mx-auto p-8 bg-gray-50 animate-pulse" />
    ),
  }
);

export default function ChannelPartnersPage() {
  const config = CHANNEL_MEDIA_CONFIG;
  return (
    <main className="min-h-screen">
      <HeroSection
        desktopImage={"/assets/images/mediaCenterHeroBanner.png"}
        mobileImage={"/assets/images/mediaCenterHeroBannerMb.png"}
        desktopTitle={config.hero.desktop}
        mobileTitle={config.hero.mobile}
      />


      <section aria-labelledby="register-form">
        <BlogList posts={mockPosts} />

      </section>

      <section aria-labelledby="register-form">
        <h2 id="register-form" className="sr-only">
          Register Interest
        </h2>
        <RegisterInterestForm
          title={config.registerForm.title}
          titleLines={config.registerForm.titleLines}
          sections={JV_MEDIA_FORM_SECTIONS}
          submitButtonText={config.registerForm.submitButtonText}
          checkboxLabel={config.registerForm.checkboxLabel}
          privacyPolicyText={config.registerForm.privacyPolicyText}
        />
      </section>
    </main>
  );
}
