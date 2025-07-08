import { homeIcon, bedIcon, sqftIcon } from "./assets";
export interface NavItem {
  key: string;
  label: string;
  path: string;
  children?: {
    key: string;
    label: string;
    path: string;
  }[];
}

export const navbarData: NavItem[] = [
  { key: "about-us", label: "About Us", path: "/about-us" },
  { key: "properties", label: "Properties", path: "/properties" },
  { key: "nri", label: "NRI", path: "/nri" },
  { key: "media-center", label: "Media Center", path: "/media-center" },
  {
    key: "partners",
    label: "Partners",
    path: "/partners",
    children: [
      {
        key: "partner-channel",
        label: "Channel Partner",
        path: "/partners/channel",
      },
      { key: "partner-jv", label: "JV Partner", path: "/partners/jv" },
      {
        key: "partner-referral",
        label: "Referral Partner",
        path: "/partners/referral",
      },
    ],
  },
  { key: "career", label: "Career", path: "/career" },
  { key: "contact-us", label: "Contact Us", path: "/contact-us" },
  {
    key: "login",
    label: "Login",
    path: "/login",
    children: [
      { key: "signin", label: "Customer Login", path: "/login" },
      { key: "register", label: "Partner Login", path: "/register" },
    ],
  },
];

export const reviews = [
  {
    name: "Felix Jimoh",
    rating: 4.9,
    review:
      "Lorem ipsum dolor sit amet consectetur. Sit non volutpat suspendisse aliquet in. Nisl consectetur eget vestibulum hendrerit sem tortor pellentesque tortor. Pellentesque interdum et nam aliquet eu quam interdum enim. Nulla netus nunc.",
  },
  {
    name: "John Robert",
    rating: 4.9,
    review:
      "Lorem ipsum dolor sit amet consectetur. Sit non volutpat suspendisse aliquet in. Nisl consectetur eget vestibulum hendrerit sem tortor pellentesque tortor. Pellentesque interdum et nam aliquet eu quam interdum enim. Nulla netus nunc.",
  },
  {
    name: "Duke John",
    rating: 4.9,
    review:
      "Lorem ipsum dolor sit amet consectetur. Sit non volutpat suspendisse aliquet in. Nisl consectetur eget vestibulum hendrerit sem tortor pellentesque tortor. Pellentesque interdum et nam aliquet eu quam interdum enim. Nulla netus nunc.",
  },
  {
    name: "John Robert",
    rating: 4.9,
    review:
      "Lorem ipsum dolor sit amet consectetur. Sit non volutpat suspendisse aliquet in. Nisl consectetur eget vestibulum hendrerit sem tortor pellentesque tortor. Pellentesque interdum et nam aliquet eu quam interdum enim. Nulla netus nunc.",
  },
  {
    name: "John Robert",
    rating: 4.9,
    review:
      "Lorem ipsum dolor sit amet consectetur. Sit non volutpat suspendisse aliquet in. Nisl consectetur eget vestibulum hendrerit sem tortor pellentesque tortor. Pellentesque interdum et nam aliquet eu quam interdum enim. Nulla netus nunc.",
  },
];

export const slides = [
  {
    id: 1,
    image: "/assets/images/insight.png",
    title: "Why Chennai Is Becoming a Hotspot for Real Estate Investment",
    text: "Featured Blog",
  },
  {
    id: 2,
    image: "/assets/images/insight.png",
    title: "Why Chennai Is Becoming a Hotspot for Real Estate Investment",
    text: "Featured Blog",
  },
  {
    id: 3,
    image: "/assets/images/insight.png",
    title: "Why Chennai Is Becoming a Hotspot for Real Estate Investment",
    text: "Featured Blog",
  },
];

export const aboutus = [
  {
    title: "VISION STATEMENT",
    content:
      "To Be The Most Trusted And Admired Luxury Real Estate Brand, Setting New Benchmarks In Architectural Excellence, Precision Craftsmanship, And Unparalleled Exclusivity For The World’s Most Discerning Investors And Homeowners.",
  },
  {
    title: "MISSION STATEMENT",
    content:
      "At Rattha Realty, We Redefine Luxury Living With Meticulously Crafted Spaces That Blend Sophistication, Innovation, And Lasting Value. With Integrity, Sustainability, And Attention To Detail, We Create Landmark Developments That Elevate Lifestyles And Investments For Generations.",
  },
  {
    title: "CORE VALUES STATEMENT",
    content:
      "Excellence In Craftsmanship, Innovation, Integrity, Trust, Exclusivity, And Sustainability Define Our Commitment To Creating Timeless Luxury Legacies.",
  },
];

export const otherBussinessData = [
  {
    id: 1,
    image: "/assets/images/textile_garment.png",
    title: "residential developement",
  },
  {
    id: 2,
    image: "/assets/images/office_space.png",
    title: "co working & managed office space",
  },
  {
    id: 3,
    image: "/assets/images/residential_developement.png",
    title: "textile garment manufacturing & exports",
  },
  { id: 4, image: "/assets/images/hospitality.png", title: "hospitality" },
  {
    id: 5,
    image: "/assets/images/textile_garment.png",
    title: "residential developement",
  },
  {
    id: 6,
    image: "/assets/images/office_space.png",
    title: "co working & managed office space",
  },
  {
    id: 7,
    image: "/assets/images/residential_developement.png",
    title: "textile garment manufacturing & exports",
  },
  { id: 8, image: "/assets/images/hospitality.png", title: "hospitality" },
];

export const managementTeamData = [
  {
    id: 1,
    image: "/assets/images/sanjayasarathy.png",
    name: "Dr. T.P Sanjayasarathy",
    role: "chief Executive officer",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sit non volutpat suspendisse aliquet in. Nisl consectetur eget vestibulum hendrerit sem tortor pellentesque tortor. Pellentesque interdum et nam aliquet eu quam interdum enim. Nulla netus nunc.",
  },
  {
    id: 2,
    image: "/assets/images/chella_perumal.png",
    name: "G. Chella Perumal",
    role: "Chief Marketing Officer",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sit non volutpat suspendisse aliquet in. Nisl consectetur eget vestibulum hendrerit sem tortor pellentesque tortor. Pellentesque interdum et nam aliquet eu quam interdum enim. Nulla netus nunc.",
  },
  {
    id: 3,
    image: "/assets/images/joushva_dev.png",
    name: "Joushva Dev",
    role: "Chief Operating Officer",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sit non volutpat suspendisse aliquet in. Nisl consectetur eget vestibulum hendrerit sem tortor pellentesque tortor. Pellentesque interdum et nam aliquet eu quam interdum enim. Nulla netus nunc.",
  },
  {
    id: 4,
    image: "/assets/images/sanjayasarathy.png",
    name: "Dr. T.P Sanjayasarathy",
    role: "chief Executive officer",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sit non volutpat suspendisse aliquet in. Nisl consectetur eget vestibulum hendrerit sem tortor pellentesque tortor. Pellentesque interdum et nam aliquet eu quam interdum enim. Nulla netus nunc.",
  },
  {
    id: 5,
    image: "/assets/images/chella_perumal.png",
    name: "G. Chella Perumal",
    role: "Chief Marketing Officer",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sit non volutpat suspendisse aliquet in. Nisl consectetur eget vestibulum hendrerit sem tortor pellentesque tortor. Pellentesque interdum et nam aliquet eu quam interdum enim. Nulla netus nunc.",
  },
  {
    id: 6,
    image: "/assets/images/joushva_dev.png",
    name: "Joushva Dev",
    role: "Chief Operating Officer",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sit non volutpat suspendisse aliquet in. Nisl consectetur eget vestibulum hendrerit sem tortor pellentesque tortor. Pellentesque interdum et nam aliquet eu quam interdum enim. Nulla netus nunc.",
  },
];

export const careersPosition = [
  {
    id: 1,
    name: "Sales Executive",
  },
  {
    id: 2,
    name: "Marketing Specialist",
  },
  {
    id: 3,
    name: "Property Manager",
  },
  {
    id: 4,
    name: "Real Estate Analyst",
  },
];
  

export const projectData = [
  {
    id: "project-1",
    image: "/assets/images/home_section_2.png",
    title: "Rattha Grandeur",
  },
  {
    id: 2,
    image: "/assets/images/partnerSliderDiscussionImage.png",
  },
  {
    id: 3,
    image: "/assets/images/partnerRefHeroBanner.png",
  },
]; 

export const propertyData = [
  {
    id: "1",
    image: "/assets/images/home_section_2.png",
    title: "Raitha Grandeur",
  },
  {
    id: "2",
    image: "/assets/images/partnerSliderDiscussionImage.png",
    title: "Raitha Grandeur",
  },
  {
    id: "3",
    image: "/assets/images/partnerRefHeroBanner.png",
    title: "Raitha Grandeur",
  },
];



export const nrifaqData = [
  {
    id: 1,
    question: "Can NRIs invest in real estate in India?",
    answer:
      "Yes, NRIs can invest in residential and commercial properties in India without any  special permissions. The process is governed by the Foreign Exchange  Management Act (FEMA), ensuring smooth and secure transactions.",
  },
  {
    id: 2,
    question: "How can NRIs finance property purchases in India?",
    answer:
      "Yes, NRIs can invest in residential and commercial properties in India without any  special permissions. The process is governed by the Foreign Exchange  Management Act (FEMA), ensuring smooth and secure transactions.",
  },
  {
    id: 3,
    question:
      "Are there any restrictions on the type of properties NRIs can purchase?",
    answer:
      "Yes, NRIs can invest in residential and commercial properties in India without any  special permissions. The process is governed by the Foreign Exchange  Management Act (FEMA), ensuring smooth and secure transactions.",
  },
  {
    id: 4,
    question:
      "What documents are required for an NRI to purchase property in India?",
    answer:
      "Yes, NRIs can invest in residential and commercial properties in India without any  special permissions. The process is governed by the Foreign Exchange  Management Act (FEMA), ensuring smooth and secure transactions.",
  },
  {
    id: 5,
    question: "How can NRIs manage their property from abroad?",
    answer:
      "Yes, NRIs can invest in residential and commercial properties in India without any  special permissions. The process is governed by the Foreign Exchange  Management Act (FEMA), ensuring smooth and secure transactions.",
  },
  {
    id: 6,
    question:
      "What are the tax implications for NRIs investing in Indian real estate?",
    answer:
      "Yes, NRIs can invest in residential and commercial properties in India without any  special permissions. The process is governed by the Foreign Exchange  Management Act (FEMA), ensuring smooth and secure transactions.",
  },
  {
    id: 7,
    question: "Can NRIs rent out their properties in India?",
    answer:
      "Yes, NRIs can invest in residential and commercial properties in India without any  special permissions. The process is governed by the Foreign Exchange  Management Act (FEMA), ensuring smooth and secure transactions.",
  },
  {
    id: 8,
    question: "Can an NRI sell property in India and repatriate the funds? ",
    answer:
      "Yes, NRIs can invest in residential and commercial properties in India without any  special permissions. The process is governed by the Foreign Exchange  Management Act (FEMA), ensuring smooth and secure transactions.",
  },
  {
    id: 9,
    question:
      "Is it mandatory for NRIs to visit India for property transactions?",
    answer:
      "Yes, NRIs can invest in residential and commercial properties in India without any  special permissions. The process is governed by the Foreign Exchange  Management Act (FEMA), ensuring smooth and secure transactions.",
  },
  {
    id: 10,
    question: "What legal due diligence should NRIs conduct before investing? ",
    answer:
      "Yes, NRIs can invest in residential and commercial properties in India without any  special permissions. The process is governed by the Foreign Exchange  Management Act (FEMA), ensuring smooth and secure transactions.",
  },
];

export const propertyfaqData = [
  {
    id: 1,
    question: "Where is Rattha Grandéur located?",
    answer:
      "Yes, NRIs can invest in residential and commercial properties in India without any  special permissions. The process is governed by the Foreign Exchange  Management Act (FEMA), ensuring smooth and secure transactions.",
  },
  {
    id: 2,
    question: "What are the key amenities offered?",
    answer:
      "Yes, NRIs can invest in residential and commercial properties in India without any  special permissions. The process is governed by the Foreign Exchange  Management Act (FEMA), ensuring smooth and secure transactions.",
  },
  {
    id: 3,
    question: "Is Rattha Grandéur a newly launched project?",
    answer:
      "Yes, NRIs can invest in residential and commercial properties in India without any  special permissions. The process is governed by the Foreign Exchange  Management Act (FEMA), ensuring smooth and secure transactions.",
  },
  {
    id: 4,
    question: "What makes Rattha Grandéur unique?",
    answer:
      "Yes, NRIs can invest in residential and commercial properties in India without any  special permissions. The process is governed by the Foreign Exchange  Management Act (FEMA), ensuring smooth and secure transactions.",
  },
  {
    id: 5,
    question: "How do I book a residence at Rattha Grandéur?  ",
    answer:
      "Yes, NRIs can invest in residential and commercial properties in India without any  special permissions. The process is governed by the Foreign Exchange  Management Act (FEMA), ensuring smooth and secure transactions.",
  }
];

export const nriKeyFactors = [
  {
    id: 1,
    question: "Verify Property Ownership & Title Clarity",
    answer: [
      "Ensure the Title Deed is original and registered solely in the seller’s name.",
      "If the property is inherited or jointly owned, confirm that there are no legal disputes or pending claims. ",
      "Check if the property was ever mortgaged and obtain a bank release certificate if applicable. ",
    ],
  },
  {
    id: 2,
    question: "Choose a Trusted Developer",
    answer: [
      "Ensure the Title Deed is original and registered solely in the seller’s name.",
      "If the property is inherited or jointly owned, confirm that there are no legal disputes or pending claims. ",
      "Check if the property was ever mortgaged and obtain a bank release certificate if applicable. ",
    ],
  },
  {
    id: 3,
    question: "VWho can purchase immovable property in india",
    answer: [
      "Ensure the Title Deed is original and registered solely in the seller’s name.",
      "If the property is inherited or jointly owned, confirm that there are no legal disputes or pending claims. ",
      "Check if the property was ever mortgaged and obtain a bank release certificate if applicable. ",
    ],
  },
  {
    id: 4,
    question: "Compare Market Alternatives",
    answer: [
      "Ensure the Title Deed is original and registered solely in the seller’s name.",
      "If the property is inherited or jointly owned, confirm that there are no legal disputes or pending claims. ",
      "Check if the property was ever mortgaged and obtain a bank release certificate if applicable. ",
    ],
  },
  {
    id: 5,
    question: "Confirm Regulatory Approvals & Compliance",
    answer: [
      "Ensure the Title Deed is original and registered solely in the seller’s name.",
      "If the property is inherited or jointly owned, confirm that there are no legal disputes or pending claims. ",
      "Check if the property was ever mortgaged and obtain a bank release certificate if applicable. ",
    ],
  },
  {
    id: 6,
    question: "Evaluate Financial & Investment Prospects",
    answer: [
      "Ensure the Title Deed is original and registered solely in the seller’s name.",
      "If the property is inherited or jointly owned, confirm that there are no legal disputes or pending claims. ",
      "Check if the property was ever mortgaged and obtain a bank release certificate if applicable. ",
    ],
  },
];

export const contactusFaqData = [
  {
    id: 1,
    question: "What Makes Rattha Realty Properties Unique? ",
    answer:
      "Yes, NRIs can invest in residential and commercial properties in India without any  special permissions. The process is governed by the Foreign Exchange  Management Act (FEMA), ensuring smooth and secure transactions.",
  },
  {
    id: 2,
    question: "How can I schedule a private consultation or site visit? ",
    answer:
      "Yes, NRIs can invest in residential and commercial properties in India without any  special permissions. The process is governed by the Foreign Exchange  Management Act (FEMA), ensuring smooth and secure transactions.",
  },
  {
    id: 3,
    question: "Do you offer bespoke customisation options for residences?",
    answer:
      "Yes, NRIs can invest in residential and commercial properties in India without any  special permissions. The process is governed by the Foreign Exchange  Management Act (FEMA), ensuring smooth and secure transactions.",
  },
];

export const mediaCenterTabs = [
  {
    id: "tab_1",
    name: "All",
  },
  {
    id: "tab_2",
    name: "Press Release",
  },
  {
    id: "tab_3",
    name: "PRESS coverage",
  },
  {
    id: "tab_4",
    name: "press kit",
  },
  {
    id: "tab_5",
    name: "blogs",
  },
];

export const mediaCenterData = [
  {
    id: 1,
    image: "/assets/images/media_1.png",
    name: "BLOG - 20th November 2025",
    description:
      "Why Investing in Real Estate Early in the Year Could Be You...",
    published: "Published on December 20",
    type: "blogs",
  },
  {
    id: 2,
    image: "/assets/images/media_2.png",
    name: "Press Release - 20th November 2025",
    description:
      "Why Investing in Real Estate Early in the Year Could Be You...",
    published: "Published on December 20",
    type: "press release",
  },
  {
    id: 3,
    image: "/assets/images/media_3.png",
    name: "BLOG - 20th November 2025",
    description:
      "Why Investing in Real Estate Early in the Year Could Be You...",
    published: "Published on December 20",
    type: "blogs",
  },
  {
    id: 4,
    image: "/assets/images/media_3.png",
    name: "BLOG - 20th November 2025",
    description:
      "Why Investing in Real Estate Early in the Year Could Be You...",
    published: "Published on December 20",
    type: "blogs",
  },
  {
    id: 5,
    image: "/assets/images/media_2.png",
    name: "Press Release - 20th November 2025",
    description:
      "Why Investing in Real Estate Early in the Year Could Be You...",
    published: "Published on December 20",
    type: "press release",
  },
  {
    id: 6,
    image: "/assets/images/media_3.png",
    name: "BLOG - 20th November 2025",
    description:
      "Why Investing in Real Estate Early in the Year Could Be You...",
    published: "Published on December 20",
    type: "blogs",
  },
  {
    id: 7,
    image: "/assets/images/media_1.png",
    name: "BLOG - 20th November 2025",
    description:
      "Why Investing in Real Estate Early in the Year Could Be You...",
    published: "Published on December 20",
    type: "blogs",
  },
  {
    id: 8,
    image: "/assets/images/media_1.png",
    name: "BLOG - 20th November 2025",
    description:
      "Why Investing in Real Estate Early in the Year Could Be You...",
    published: "Published on December 20",
    type: "blogs",
  },
  {
    id: 9,
    image: "/assets/images/media_2.png",
    name: "Press Release - 20th November 2025",
    description:
      "Why Investing in Real Estate Early in the Year Could Be You...",
    published: "Published on December 20",
    type: "press release",
  },
];

export const projectDetails = [
  { icon: homeIcon, text: "Nelson Manickam Road" },
  { icon: bedIcon, text: "110 Units" },
  { icon: sqftIcon, text: "1588 sft - 2680 sft" },
  { icon: bedIcon, text: "3BR - 4.5 BR" },
];
