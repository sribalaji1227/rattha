export const REFERRAL_PARTNERS_METADATA = {
  title: 'Referral Partners | Rattha Realty - Refer & Earn Rewards',
  description: 'Join Rattha Realty\'s Referral Partner Program. Earn attractive commissions by referring genuine property buyers. Simple process, competitive payouts, trusted brand.',
  keywords: 'referral partners, refer and earn, real estate referral, property referral program, Rattha Realty referrals, referral commissions',
  openGraph: {
    title: 'Referral Partner Program | Rattha Realty',
    description: 'Refer genuine property buyers to Rattha Realty and earn attractive rewards. Join our referral program today!',
    url: 'https://yourwebsite.com/partners/referral',
    siteName: 'Rattha Realty',
    images: [
      {
        url: 'https://yourwebsite.com/images/referral-partner-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rattha Realty Referral Partners',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Referral Partners | Rattha Realty',
    description: 'Earn rewards by referring property buyers to Rattha Realty. Join now!',
    images: ['https://yourwebsite.com/images/referral-partner-twitter-image.jpg'],
  },
};

export const REFERRAL_PARTNERS_CONFIG = {
  hero: {
    desktopImage: "/assets/images/partnerRefHeroBanner.png",
    mobileImage: "/assets/images/partnerRefHeroBannerMobile.png",
     desktop: {
      lines: ["LET’S BUILD", "LEGACY, TOGETHER."]
    },
    mobile: {
      lines: ["LET’S BUILD", "LEGACY, TOGETHER."]
    }
  },
  referAndEarn: {
    title: "REFER & EARN – IT'S THAT SIMPLE!",
    description: "At Rattha Realty, anyone can become a valuable part of our success story. Whether you're a friend, a client, or a professional with a network—our Referral Partner Program helps you earn attractive rewards just by introducing genuine property buyers."
  },
  whatWeOffer: {
    heading: "WHAT WE OFFER TO OUR REFERRAL PARTNERS",
    benefits: [
      {
        title: "Attractive Referral Commissions",
        description: "Earn competitive payouts for every successful lead — with timely, transparent disbursal.",
      },
      {
        title: "Simple, Streamlined Process",
        description: "Easy registration, instant lead submission, and real-time tracking of referrals.",
      },
      {
        title: "Access to Premium Projects",
        description: "Introduce your network to high-quality, well branded real estate developments by Rattha Realty.",
      },
      {
        title: "Strong Brand Backing",
        description: "Partner with a trusted legacy brand for design excellence and on-time delivery.",
      },
    ]
  },
  becomePartner: {
    heading: "BECOME A REFERRAL PARTNER TODAY!",
    description: "Refer your friends, clients, or contacts to Rattha Realty and earn attractive rewards — effortlessly and ethically.",
    buttonText: "REFER YOUR PARTNER",
    buttonAction: "navigate" as const,
    buttonUrl: "/partners/register"
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

export const REFERRAL_PARTNERS_FORM_SECTIONS = [
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
      }
    ]
  },
  {
    title: "DETAILS OF YOUR REFERRALS",
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