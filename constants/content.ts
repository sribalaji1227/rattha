import { TimelineItem } from "@/types/common";
import { homeIcon, bedIcon, sqftIcon } from "./assets";
import {
  enguireIcon,
  phoneIcon,
  whatsappIcon,
  mapPinIcon,
  quillChatIcon,
} from "@/constants/assets";

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
    description: "Responsible for generating leads and closing sales for real estate properties. You will work directly with clients, understanding their needs and offering properties that align with their goals. This role demands a proactive approach, as you will manage a pipeline of potential buyers and nurture those relationships through the sales process. The ideal candidate will be highly motivated, result-driven, and able to thrive in a competitive environment.",
    responsibilities: [
      "Develop sales strategies and attract new clients.",
      "Manage leads and follow up with prospective customers.",
      "Present properties and provide detailed information.",
      "Negotiate deals and close sales."
    ],
    skills: [
      "Excellent communication and negotiation skills.",
      "Strong knowledge of the real estate market.",
      "Proficiency in CRM software.",
      "Ability to work under pressure and meet targets."
    ]
  },
  {
    id: 2,
    name: "Revenue Accounting Specialist",
    description: "Handles the promotion and advertising efforts to increase brand awareness. You will develop and execute strategies for online and offline marketing, focusing on building brand presence in the market. This role will involve content creation, campaign management, and collaboration with external agencies and teams to ensure marketing initiatives align with business objectives. Strong creativity and a data-driven mindset are essential in this position.",
    responsibilities: [
      "Plan and execute marketing campaigns.",
      "Manage content for social media and website.",
      "Coordinate events and promotions.",
      "Conduct market research and competitor analysis."
    ],
    skills: [
      "Strong understanding of marketing strategies.",
      "Proficiency with digital marketing tools.",
      "Creative thinking and problem-solving skills.",
      "Excellent copywriting and design sense."
    ]
  },
  {
    id: 3,
    name: "Quality Surveyor Manager",
    description: "Oversees the daily operations of real estate properties. In this role, you will be responsible for ensuring the smooth running of properties, from coordinating maintenance and repairs to managing tenant relations. You will also be in charge of ensuring properties are compliant with relevant laws and regulations, as well as handling budget management and financial oversight for the properties you manage. Strong leadership and organizational skills are required to succeed in this role.",
    responsibilities: [
      "Coordinate property maintenance and repairs.",
      "Manage tenant relations and lease agreements.",
      "Ensure property compliance with regulations.",
      "Monitor budgets and financial records."
    ],
    skills: [
      "Excellent organizational and leadership skills.",
      "Knowledge of property management software.",
      "Strong communication and problem-resolution abilities.",
      "Understanding of local housing laws and regulations."
    ]
  },
  {
    id: 4,
    name: "Channel Partner Manager",
    description: "Performs financial analysis of property investments. You will analyze market trends, evaluate property values, and generate investment reports to support the company's acquisition and sales decisions. A key part of this role is conducting risk assessments and providing recommendations based on financial forecasts. You will also assist in identifying potential investment opportunities and market trends to inform future strategic planning.",
    responsibilities: [
      "Analyze market trends and property values.",
      "Prepare investment reports and forecasts.",
      "Conduct risk assessments.",
      "Support decision-making for acquisitions and sales."
    ],
    skills: [
      "Strong analytical and financial modeling skills.",
      "Proficient in Excel and data visualization tools.",
      "Attention to detail and problem-solving ability.",
      "Understanding of real estate and economic trends."
    ]
  },
  {
    id: 5,
    name: "Land Acquisition Manager",
    description: "Performs financial analysis of property investments. You will analyze market trends, evaluate property values, and generate investment reports to support the company's acquisition and sales decisions. A key part of this role is conducting risk assessments and providing recommendations based on financial forecasts. You will also assist in identifying potential investment opportunities and market trends to inform future strategic planning.",
    responsibilities: [
      "Analyze market trends and property values.",
      "Prepare investment reports and forecasts.",
      "Conduct risk assessments.",
      "Support decision-making for acquisitions and sales."
    ],
    skills: [
      "Strong analytical and financial modeling skills.",
      "Proficient in Excel and data visualization tools.",
      "Attention to detail and problem-solving ability.",
      "Understanding of real estate and economic trends."
    ]
  }
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


export const constructionData = [
  {
    image: "/assets/images/construction-1.png",
    alt: "Excavation work at Ratttha Grandéur – Dec 2024",
    caption: "Dec 2024",
  },
  {
    image: "/assets/images/construction-2.png",
    alt: "Rebar layout at Ratttha Grandéur – Dec 2024",
    caption: "Dec 2024",
  },
  {
    image: "/assets/images/construction-1.png",
    alt: "Excavation work at Ratttha Grandéur – Dec 2024",
    caption: "Dec 2024",
  },
  {
    image: "/assets/images/construction-2.png",
    alt: "Rebar layout at Ratttha Grandéur – Dec 2024",
    caption: "Dec 2024",
  },
  {
    image: "/assets/images/construction-1.png",
    alt: "Excavation work at Ratttha Grandéur – Dec 2024",
    caption: "Dec 2024",
  },
  {
    image: "/assets/images/construction-2.png",
    alt: "Rebar layout at Ratttha Grandéur – Dec 2024",
    caption: "Dec 2024",
  },
];


export const landmarksData = [
  // Hospitals
  {
    name: "MGM Healthcare",
    lat: 12.9935,
    lng: 80.2157,
    category: "Hospitals",
    distance: "700 m",
  },
  {
    name: "CFC Hospital",
    lat: 12.995,
    lng: 80.2181,
    category: "Hospitals",
    distance: "200 m",
  },
  {
    name: "Dr. Mehta's Hospitals",
    lat: 12.995,
    lng: 80.2181,
    category: "Hospitals",
    distance: "2 km",
  },
  //Dummy Data
  // Colleges
  {
    name: "SRM Institute of Science and Technology",
    lat: 12.8235,
    lng: 80.0457,
    category: "Colleges",
    distance: "4.5 km",
  },
  {
    name: "Loyola College",
    lat: 13.0695,
    lng: 80.2337,
    category: "Colleges",
    distance: "8 km",
  },

  // Schools
  {
    name: "DAV Public School",
    lat: 12.9902,
    lng: 80.2201,
    category: "Schools",
    distance: "500 m",
  },
  {
    name: "PSBB Millennium School",
    lat: 12.9872,
    lng: 80.2235,
    category: "Schools",
    distance: "1.1 km",
  },

  // Malls
  {
    name: "Phoenix Marketcity",
    lat: 12.9948,
    lng: 80.2189,
    category: "Malls",
    distance: "2.5 km",
  },
  {
    name: "Express Avenue Mall",
    lat: 13.0606,
    lng: 80.2612,
    category: "Malls",
    distance: "9 km",
  },

  // Metro Stations
  {
    name: "Little Mount Metro Station",
    lat: 13.0121,
    lng: 80.2231,
    category: "Metro Stations",
    distance: "1.8 km",
  },
  {
    name: "Guindy Metro Station",
    lat: 13.0073,
    lng: 80.2219,
    category: "Metro Stations",
    distance: "2.2 km",
  },

  // Hotels
  {
    name: "Taj Club House",
    lat: 13.0611,
    lng: 80.2613,
    category: "Hotels",
    distance: "9.2 km",
  },
  {
    name: "The Leela Palace Chennai",
    lat: 13.0065,
    lng: 80.2596,
    category: "Hotels",
    distance: "6.5 km",
  },
];

 
export const categories = [
  "Hospitals",
  "Colleges",
  "Schools",
  "Malls",
  "Metro Stations",
  "Hotels",
];


export const timelineItems: TimelineItem[] = [
    {
      year: '2025',
      active: true,
      title: 'FUTURE INNOVATION AWARD',
      description: 'Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2024',
      active: true,
      title: 'EXCELLENCE IN DESIGN',
      description: 'Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2023',
      active: true,
      title: 'BEST DEVELOPMENT OF THE YEAR',
      description: 'Lorem ipsum Dolor Sit Amet Consectetur. Mauris Leo Pharetra Convallis.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2022',
      active: true,
      title: 'STARTUP OF THE YEAR',
      description: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2021',
      active: true,
      title: 'DIGITAL TRANSFORMATION LEADER',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2020',
      active: true,
      title: 'RESILIENCE AWARD',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2019',
      active: true,
      title: 'CUSTOMER SATISFACTION EXCELLENCE',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2018',
      active: true,
      title: 'SUSTAINABLE DEVELOPMENT AWARD',
      description: 'Et harum quidem rerum facilis est et expedita distinctio nam libero tempore.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2017',
      active: true,
      title: 'INNOVATION IN REAL ESTATE',
      description: 'Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2016',
      active: true,
      title: 'MARKET EXPANSION SUCCESS',
      description: 'Placeat facere possimus omnis voluptas assumenda est omnis dolor repellendus.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2015',
      active: true,
      title: 'TECHNOLOGY INTEGRATION AWARD',
      description: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2014',
      active: true,
      title: 'QUALITY ASSURANCE EXCELLENCE',
      description: 'Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2013',
      active: true,
      title: 'COMMUNITY DEVELOPMENT LEADER',
      description: 'Nisi ut aliquid ex ea commodi consequatur quis autem vel eum iure reprehenderit.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2012',
      active: true,
      title: 'ARCHITECTURAL INNOVATION',
      description: 'Qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2011',
      active: true,
      title: 'LANDMARK PROJECT COMPLETION',
      description: 'Eum fugiat quo voluptas nulla pariatur at vero eos et accusamus et iusto odio.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2010',
      active: true,
      title: 'DECADE OF EXCELLENCE',
      description: 'Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2009',
      active: true,
      title: 'CRISIS MANAGEMENT AWARD',
      description: 'Et quas molestias excepturi sint occaecati cupiditate non provident similique sunt.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2008',
      active: true,
      title: 'LUXURY SEGMENT PIONEER',
      description: 'In culpa qui officia deserunt mollitia animi id est laborum et dolorum fuga.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2007',
      active: true,
      title: 'REGIONAL EXPANSION SUCCESS',
      description: 'Et harum quidem rerum facilis est et expedita distinctio nam libero tempore.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2006',
      active: true,
      title: 'CUSTOMER TRUST AWARD',
      description: 'Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2005',
      active: true,
      title: 'QUALITY CONSTRUCTION AWARD',
      description: 'Maxime placeat facere possimus omnis voluptas assumenda est omnis dolor repellendus.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2004',
      active: true,
      title: 'SAFETY STANDARDS EXCELLENCE',
      description: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2003',
      active: true,
      title: 'DESIGN INNOVATION AWARD',
      description: 'Eveniet ut et voluptates repudiandae sint et molestiae non recusandae itaque earum.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2002',
      active: true,
      title: 'MILESTONE PROJECT DELIVERY',
      description: 'Rerum hic tenetur a sapiente delectus ut aut reiciendis voluptatibus maiores alias.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2001',
      active: true,
      title: 'NEW MILLENNIUM VISION',
      description: 'Consequatur aut perferendis doloribus asperiores repellat nam libero tempore cum soluta.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '2000',
      active: true,
      title: 'Y2K TRANSITION SUCCESS',
      description: 'Nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '1999',
      active: true,
      title: 'CENTURY END ACHIEVEMENT',
      description: 'Facere possimus omnis voluptas assumenda est omnis dolor repellendus temporibus autem.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '1998',
      active: true,
      title: 'MARKET LEADERSHIP AWARD',
      description: 'Quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '1997',
      active: true,
      title: 'CONSTRUCTION EXCELLENCE',
      description: 'Repudiandae sint et molestiae non recusandae itaque earum rerum hic tenetur a sapiente.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '1996',
      active: true,
      title: 'TEAM ACHIEVEMENT AWARD',
      description: 'Delectus ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '1995',
      active: true,
      title: 'MID-DECADE MILESTONE',
      description: 'Asperiores repellat nam libero tempore cum soluta nobis est eligendi optio cumque.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '1994',
      active: true,
      title: 'GROWTH ACCELERATION',
      description: 'Nihil impedit quo minus id quod maxime placeat facere possimus omnis voluptas.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '1993',
      active: true,
      title: 'STRATEGIC PARTNERSHIP',
      description: 'Assumenda est omnis dolor repellendus temporibus autem quibusdam et aut officiis debitis.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '1992',
      active: true,
      title: 'OPERATIONAL EXCELLENCE',
      description: 'Aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '1991',
      active: true,
      title: 'FOUNDATION STRENGTHENING',
      description: 'Non recusandae itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis.',
      imageSrc: '/assets/images/milestone.png'
    },
    {
      year: '1990',
      active: true,
      title: 'COMPANY ESTABLISHMENT',
      description: 'Voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
      imageSrc: '/assets/images/milestone.png'
    }
  ];


export const navItems = [
    { id: "enquire", icon: enguireIcon, text: "ENQUIRE", mobileOrder: 1 },
    { id: "call", icon: phoneIcon, text: "CALL", mobileOrder: 2 },
    { id: "whatsapp", icon: whatsappIcon, text: "WHATSAPP", mobileOrder: null },
    { id: "schedule", icon: mapPinIcon, text: "SCHEDULE", mobileOrder: null },
    { id: "chat", icon: quillChatIcon, text: "CHAT", mobileOrder: 3 },
  ];

export  const tableData = [
    { installment: "DEPOSIT", milestone: "Immediate", payment: "24" },
    { installment: "1ST INSTALLMENT", milestone: "Within 3 month(s) of Sale Date", payment: "1" },
    { installment: "2ND INSTALLMENT", milestone: "Within 4 month(s) of Sale Date", payment: "1" },
    { installment: "3RD INSTALLMENT", milestone: "Within 5 month(s) of Sale Date", payment: "1" },
    { installment: "4TH INSTALLMENT", milestone: "Within 6 month(s) of Sale Date", payment: "1" },
    { installment: "5TH INSTALLMENT", milestone: "Within 7 month(s) of Sale Date", payment: "10" },
  ];
