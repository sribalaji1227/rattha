
export const CHANNEL_PARTNERS_METADATA = {
  title: 'Channel Partners | Rattha Realty - Join Our Partner Network',
  description: 'Partner with Rattha Realty and unlock exclusive opportunities in real estate. Our Channel Partner Program offers attractive commissions, premium projects, and comprehensive sales support.',
  keywords: 'channel partners, real estate partners, property partners, Rattha Realty partners, real estate commission, partner program',
  openGraph: {
    title: 'Become a Channel Partner | Rattha Realty',
    description: 'Join Rattha Realty\'s exclusive partner network. 30+ years of trust, premium projects, and attractive commissions await you.',
    url: 'https://yourwebsite.com/partners/channel',
    siteName: 'Rattha Realty',
    images: [
      {
        url: 'https://yourwebsite.com/images/partner-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rattha Realty Channel Partners',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Channel Partners | Rattha Realty',
    description: 'Partner with excellence. Join Rattha Realty\'s channel partner program today.',
    images: ['https://yourwebsite.com/images/partner-twitter-image.jpg'],
  },
};


export const CHANNEL_PARTNERS_CONFIG = {
  hero: {
    desktopImage: "/assets/images/partner_banner.png",
    mobileImage: "/assets/images/properties_banner.png",
    desktop: {
      lines: ["BUILD THE FUTURE", "TOGETHER."],
    },
    mobile: {
      lines: ["BUILD THE FUTURE", "TOGETHER."],
    },
  },
  partnerExcellence: {
    title: "PARTNER WITH EXCELLENCE",
    description:
      "Join hands with Rattha Realty and become part of a visionary journey in real estate. Our Channel Partner Program is built on trust, transparency, and mutual success—empowering professionals like you to expand your reach, boost earnings, and offer your clients the finest in property development.",
  },
  whyChooseUs: {
    heading: "WHY TOP PARTNERS CHOOSE US ?",
    benefits: [
      {
        title: "Reputed Brand",
        description: "30+ years of trust in real estate",
      },
      {
        title: "Premium Projects",
        description: "Strategically located developments",
      },
      {
        title: "Attractive Commissions",
        description: "High, timely payouts",
      },
      {
        title: "Sales & Marketing Support",
        description: "Collaterals, training & more",
      },
    ],
  },
  propertyValue: {
    heading: "CHANNEL PARTNER APPOINTMENT TERMS",
    description:
      "Access the comprehensive terms to ensure a seamless and mutually beneficial partnership.",
    buttonText: "DOWNLOAD",
    buttonAction: "download" as const,
  },
  exploreProjects: {
    heading: "EXPLORE PROJECTS",
    description:
      "Discover our latest launch - a symbol of refined living and architectural brilliance. Designed for exclusivity, it offers sophisticated residences with world-class amenities in a prime location.",
  },
  registerForm: {
    title: "REGISTER YOUR INTEREST",
    titleLines: ["REGISTER YOUR", "INTEREST"],
    submitButtonText: "SUBMIT",
    checkboxLabel: "Keep Me Updated On News And Offers",
    privacyPolicyText: {
      part1: "Please Visit The",
      linkText: "Privacy Policy",
      part2: "To Understand How Rattha Realty Handles Your Personal Data",
    },
  },
};

export const CHANNEL_PARTNERS_FORM_SECTIONS = [
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
      // {
      //   name: "message",
      //   type: "textarea" as const,
      //   label: "MESSAGE",
      //   placeholder: "MESSAGE",
      //   required: false
      // }
    ]
  },
  {
    title: "DETAILS OF YOUR CLIENT",
    isClient: true,
    fields: [
      {
        name: "clientFullName",
        type: "text" as const,
        label: "FULL NAME",
        placeholder: "ENTER FULL NAME",
        required: true
      },
      {
        name: "clientPhone",
        type: "tel" as const,
        label: "PHONE NUMBER",
        placeholder: "ENTER YOUR PHONE NUMBER",
        required: true
      },
      {
        name: "clientEmail",
        type: "email" as const,
        label: "EMAIL ADDRESS",
        placeholder: "ENTER YOUR EMAIL",
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


export const NRI_FORM_SECTIONS = [
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
  },
  // {
  //   title: "DETAILS OF YOUR CLIENT",
  //   isClient: true,
  //   fields: [
  //     {
  //       name: "clientFullName",
  //       type: "text" as const,
  //       label: "FULL NAME",
  //       placeholder: "ENTER FULL NAME",
  //       required: true
  //     },
  //     {
  //       name: "clientPhone",
  //       type: "tel" as const,
  //       label: "PHONE NUMBER",
  //       placeholder: "ENTER YOUR PHONE NUMBER",
  //       required: true
  //     },
  //     {
  //       name: "clientEmail",
  //       type: "email" as const,
  //       label: "EMAIL ADDRESS",
  //       placeholder: "ENTER YOUR EMAIL",
  //       required: true
  //     },
  //     {
  //       name: "message",
  //       type: "textarea" as const,
  //       label: "MESSAGE",
  //       placeholder: "MESSAGE",
  //       required: false
  //     }
  //   ]
  // }
];
 
export const NRI_CONFIG = {
  hero: {
    desktopImage: "/assets/images/nri_banner.png",
    mobileImage: "/assets/images/properties_banner.png",
    desktop: {
      lines: ["HOME IS A FEELING.", "LET'S BRING YOU CLOSER."],
    },
    mobile: {
      lines: ["LET'S BEGIN", "SOMETHING TIMELESS."],
    },
  },
  partnerExcellence: {
    title: "Timeless Investments, Lasting",
    description:
      "Investing in India has become more transparent, secure, and rewarding with strengthened regulations like RERA and GST. Rattha Realty offers NRIs an exclusive  portfolio of ultra-luxury residences, seamlessly  blending sophistication, convenience, and long-term value.",
  },
  whyChooseUs: {
    heading: "WHY TOP PARTNERS CHOOSE US ?",
    benefits: [
      {
        title: "Reputed Brand",
        description: "30+ years of trust in real estate",
      },
      {
        title: "Premium Projects",
        description: "Strategically located developments",
      },
      {
        title: "Attractive Commissions",
        description: "High, timely payouts",
      },
      {
        title: "Sales & Marketing Support",
        description: "Collaterals, training & more",
      },
    ],
  },
  propertyValue: {
    heading: "guide to NRI BUYING PROPERTY IN INDIA",
    description:
      "Navigate the process with ease and make informed decisions with our expert guide tailored for NRIs.",
    buttonText: "DOWNLOAD",
    buttonAction: "download" as const,
  },
  exploreProjects: {
    heading: "EXPLORE PROJECTS",
    description:
      "Discover our latest launch - a symbol of refined living and architectural brilliance. Designed for exclusivity, it offers sophisticated residences with world-class amenities in a prime location.",
  },
  registerForm: {
    title: "REGISTER YOUR INTEREST",
    titleLines: ["REGISTER YOUR", "INTEREST"],
    submitButtonText: "SUBMIT",
    checkboxLabel: "Keep Me Updated On News And Offers",
    privacyPolicyText: {
      part1: "Please Visit The",
      linkText: "Privacy Policy",
      part2: "To Understand How Rattha Realty Handles Your Personal Data",
    },
  },
};
