
export const JV_PARTNERS_METADATA = {
  title: 'Joint Venture Partners | Rattha Realty - Build Legacy Together',
  description: 'Partner with Rattha Realty for profitable joint ventures. Transform your land into landmarks with our 30+ years of development expertise. No upfront investment required.',
  keywords: 'joint venture partners, jv real estate, property development partners, land development, Rattha Realty JV, real estate partnership',
  openGraph: {
    title: 'Joint Venture Partnership | Rattha Realty',
    description: 'Build legacy together. Partner with Rattha Realty to transform your land into profitable real estate developments.',
    url: 'https://yourwebsite.com/partners/jv',
    siteName: 'Rattha Realty',
    images: [
      {
        url: 'https://yourwebsite.com/images/jv-partner-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rattha Realty Joint Venture Partners',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JV Partners | Rattha Realty',
    description: 'Transform your land into profitable developments with Rattha Realty.',
    images: ['https://yourwebsite.com/images/jv-partner-twitter-image.jpg'],
  },
};

export const JV_PARTNERS_CONFIG = {
  hero: {
    desktopImage: "/assets/images/partnerJvHeroBanner.png",
    mobileImage: "/assets/images/partnerJvHeroBannerMobile.png",
    desktop: {
      lines: ["LETS BUILD", "LEGACY,TOGETHER."]
    },
    mobile: {
      lines: ["LETS BUILD", "LEGACY,TOGETHER."]
    }
  },
  buildingLandmarks: {
    title: "BUILDING LANDMARKS TOGETHER",
    description: "At Rattha Realty, we don't just develop real estate — we shape legacies. With over three decades of excellence in real estate, architecture, and project execution, we bring a rare blend of design intelligence, market insight, and financial acumen to every JV partnership."
  },
  whatWeBring: {
    heading: "WHAT WE BRING TO THE TABLE",
    benefits: [
      {
        title: "End-to-End Development Expertise",
        description: "From concept to completion — planning, approvals, design, marketing, sales, and delivery.",
      },
      {
        title: "Established Trust",
        description: "Decades of credibility, timely delivery, and value creation across diverse projects.",
      },
      {
        title: "Transparent Profit-Sharing Models",
        description: "Structured agreements, clear timelines, open communication — no ambiguity.",
      },
      {
        title: "Design-Led, Market-Driven",
        description: "Future-ready designs aligned with market demands to maximise RoI.",
      },
    ]
  },
  propertyValue: {
    heading: "READY TO MAXIMIZE YOUR PROPERTY VALUE?",
    description: "Turn your land into a profitable joint venture with Raitha Realty. No upfront investment required - just your property and our expertise.",
    buttonText: "SCHEDULE A CONSULTATION",
    buttonAction: "custom" as const
  },
  exploreProjects: {
    heading: "EXPLORE PROJECTS",
    description: "Discover our latest launch - a symbol of refined living and architectural brilliance. Designed for exclusivity, it offers sophisticated residences with world-class amenities in a prime location."
  },
  registerForm: {
    title: "REGISTER YOUR INTEREST",
    titleLines: ["REGISTER YOUR", "INTEREST"],
    submitButtonText: "SUBMIT",
    checkboxLabel: "Keep Me Updated On News And Offers",
    privacyPolicyText: {
      part1: "Please Visit The",
      linkText: "Privacy Policy",
      part2: "To Understand How Rattha Realty Handles Your Personal Data"
    }
  }
};

export const JV_PARTNERS_FORM_SECTIONS = [
  {
    fields: [
      {
        name: "fullName",
        type: "text" as const,
        label: "FULL NAME",
        placeholder: "ENTER FULL NAME",
        required: true
      },
      {
        name: "email",
        type: "email" as const,
        label: "EMAIL ADDRESS",
        placeholder: "ENTER YOUR EMAIL",
        required: true
      },
      {
        name: "phone",
        type: "tel" as const,
        label: "PHONE NUMBER",
        placeholder: "ENTER YOUR PHONE NUMBER",
        required: true
      },
      {
        name: "message",
        type: "textarea" as const,
        label: "MESSAGE",
        placeholder: "MESSAGE",
        required: false
      }
    ]
  }
];
