import { BlogPost } from "@/app/media-center/page";
import { PressCoverageArticle } from "@/components/media-center/BlogContent/PressCoverageContent";

export const CHANNEL_MEDIA_CONFIG = {
  hero: {
    desktop: {
      lines: ["STORIES", "WORTH SHAREING."]
    },
    mobile: {
      lines: ["STORIES", "WORTH SHAREING."]
    }
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

export const JV_MEDIA_FORM_SECTIONS = [
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

 export const mockPosts: BlogPost[] = [
  // Blog Posts
  {
    id: "1",
    category: "BLOG",
    date: "20th November 2025",
    title: "Why Investing In Real Estate Early In The Year Could Be Your Smartest Financial Move",
    excerpt:"Published on December 20",
    image: "/assets/images/blogImage1.png"
  },
   {
    id: "2",
    category: "BLOG",
    date: "20th November 2025",
    title: "Why Investing In Real Estate Early In The Year Could Be Your Smartest Financial Move",
    excerpt:"Published on December 20",
    image: "/assets/images/blogImage2.png"
  },
   {
    id: "3",
    category: "BLOG",
    date: "20th November 2025",
    title: "Why Investing In Real Estate Early In The Year Could Be Your Smartest Financial Move",
    excerpt:"Published on December 20",
    image: "/assets/images/blogImage3.png"
  },
   {
    id: "4",
    category: "BLOG",
    date: "20th November 2025",
    title: "Why Investing In Real Estate Early In The Year Could Be Your Smartest Financial Move",
    excerpt:"Published on December 20",
    image: "/assets/images/blogImage1.png"
  },
   {
    id: "5",
    category: "BLOG",
    date: "20th November 2025",
    title: "Why Investing In Real Estate Early In The Year Could Be Your Smartest Financial Move",
    excerpt:"Published on December 20",
    image: "/assets/images/blogImage2.png"
  },
   {
    id: "6",
    category: "BLOG",
    date: "20th November 2025",
    title: "Why Investing In Real Estate Early In The Year Could Be Your Smartest Financial Move",
    excerpt:"Published on December 20",
    image: "/assets/images/blogImage3.png"
  },
    {
    id: "7",
    category: "BLOG",
    date: "20th November 2025",
    title: "Why Investing In Real Estate Early In The Year Could Be Your Smartest Financial Move",
    excerpt:"Published on December 20",
    image: "/assets/images/blogImage1.png"
  },
   {
    id: "8",
    category: "BLOG",
    date: "20th November 2025",
    title: "Why Investing In Real Estate Early In The Year Could Be Your Smartest Financial Move",
    excerpt:"Published on December 20",
    image: "/assets/images/blogImage2.png"
  },
   {
    id: "9",
    category: "BLOG",
    date: "20th November 2025",
    title: "Why Investing In Real Estate Early In The Year Could Be Your Smartest Financial Move",
    excerpt:"Published on December 20",
    image: "/assets/images/blogImage3.png"
  },
   {
    id: "10",
    category: "BLOG",
    date: "20th November 2025",
    title: "Why Investing In Real Estate Early In The Year Could Be Your Smartest Financial Move",
    excerpt:"Published on December 20",
    image: "/assets/images/blogImage1.png"
  },
   {
    id: "11",
    category: "BLOG",
    date: "20th November 2025",
    title: "Why Investing In Real Estate Early In The Year Could Be Your Smartest Financial Move",
    excerpt:"Published on December 20",
    image: "/assets/images/blogImage2.png"
  },
   {
    id: "12",
    category: "BLOG",
    date: "20th November 2025",
    title: "Why Investing In Real Estate Early In The Year Could Be Your Smartest Financial Move",
    excerpt:"Published on December 20",
    image: "/assets/images/blogImage3.png"
  },
    {
    id: "13",
    category: "BLOG",
    date: "20th November 2025",
    title: "Why Investing In Real Estate Early In The Year Could Be Your Smartest Financial Move",
    excerpt:"Published on December 20",
    image: "/assets/images/blogImage1.png"
  },
   {
    id: "14",
    category: "BLOG",
    date: "20th November 2025",
    title: "Why Investing In Real Estate Early In The Year Could Be Your Smartest Financial Move",
    excerpt:"Published on December 20",
    image: "/assets/images/blogImage2.png"
  },
   {
    id: "15",
    category: "BLOG",
    date: "20th November 2025",
    title: "Why Investing In Real Estate Early In The Year Could Be Your Smartest Financial Move",
    excerpt:"Published on December 20",
    image: "/assets/images/blogImage3.png"
  },
   {
    id: "17",
    category: "BLOG",
    date: "20th November 2025",
    title: "Why Investing In Real Estate Early In The Year Could Be Your Smartest Financial Move",
    excerpt:"Published on December 20",
    image: "/assets/images/blogImage2.png"
  },
   {
    id: "18",
    category: "BLOG",
    date: "20th November 2025",
    title: "Why Investing In Real Estate Early In The Year Could Be Your Smartest Financial Move",
    excerpt:"Published on December 20",
    image: "/assets/images/blogImage3.png"
  },

  // Press Release Posts
  {
    id: "pr-1",
    category: "PRESS RELEASES",
    date: "15th December 2025",
    title: "Company Announces Major Partnership with Leading Real Estate Investment Firm",
    excerpt: "We are excited to announce a strategic partnership that will revolutionize real estate investment opportunities for our clients.",
    image: "/assets/images/pressRelease.jpg"
  },
  {
    id: "pr-2",
    category: "PRESS RELEASES",
    date: "08th December 2025",
    title: "Q4 2025 Financial Results Show Record Breaking Performance",
    excerpt: "Our company achieved unprecedented growth in Q4 2025, with revenue increasing by 45% compared to the previous quarter.",
    image: "/assets/images/blogImage1.png"
  },
  {
    id: "pr-3",
    category: "PRESS RELEASES",
    date: "28th November 2025",
    title: "New Sustainable Development Project Launched in Downtown Metropolitan Area",
    excerpt: "Breaking ground on our largest eco-friendly residential complex, featuring innovative green building technologies and sustainable living solutions.",
    image: "/assets/images/blogImage2.png"
  },
  {
    id: "pr-4",
    category: "PRESS RELEASES",
    date: "22nd November 2025",
    title: "Award Recognition: Named Best Real Estate Investment Platform of 2025",
    excerpt: "We are honored to receive the prestigious Industry Excellence Award for our innovative approach to real estate investment technology.",
    image: "/assets/images/blogImage3.png"
  },
  {
    id: "pr-5",
    category: "PRESS RELEASES",
    date: "15th November 2025",
    title: "Expansion Announcement: Opening New Regional Offices Across Three States",
    excerpt: "To better serve our growing client base, we are expanding operations with new regional offices in California, Texas, and Florida.",
    image: "/assets/images/blogImage1.png"
  },
  {
    id: "pr-6",
    category: "PRESS RELEASES",
    date: "10th November 2025",
    title: "Strategic Acquisition of PropTech Startup Enhances Digital Platform",
    excerpt: "The acquisition of innovative property technology startup will significantly enhance our digital investment platform capabilities.",
    image: "/assets/images/blogImage2.png"
  },
  {
    id: "pr-7",
    category: "PRESS RELEASES",
    date: "05th November 2025",
    title: "Launch of New Mobile Investment App with AI-Powered Portfolio Management",
    excerpt: "Introducing our revolutionary mobile application featuring artificial intelligence to optimize real estate investment portfolios automatically.",
    image: "/assets/images/blogImage3.png"
  },
  {
    id: "pr-8",
    category: "PRESS RELEASES",
    date: "01st November 2025",
    title: "Community Impact Initiative: $5M Committed to Affordable Housing Development",
    excerpt: "As part of our social responsibility commitment, we are investing $5 million in affordable housing projects across underserved communities.",
    image: "/assets/images/blogImage1.png"
  },
  {
    id: "pr-9",
    category: "PRESS RELEASES",
    date: "25th October 2025",
    title: "Executive Leadership Change: New CEO Appointed to Drive Next Phase of Growth",
    excerpt: "We welcome our new Chief Executive Officer who brings extensive experience in real estate and financial technology industries.",
    image: "/assets/images/blogImage2.png"
  },
  {
    id: "pr-10",
    category: "PRESS RELEASES",
    date: "18th October 2025",
    title: "International Expansion: First European Office Opens in London",
    excerpt: "Marking our entry into the European market, our new London office will serve as headquarters for international operations and expansion.",
    image: "/assets/images/blogImage3.png"
  }
];

export const pressCoverageArticles: PressCoverageArticle[] = [
  {
    id: "pc-1",
    title: "Housing Market Jumps! Prices Climb Higher",
    description: "Experience luxury living at Rattha Greensville, a gated community with numerous amenities in Somajiguda",
    source: "ET Luxury",
    date: "20 Oct 2024",
    month: "October",
    year: "2024",
    category: "ENGLISH",
    image: "/assets/images/pressCoverage.jpg",
    downloadUrl: "/downloads/housing-market-oct-2024.pdf"
  },
  {
    id: "pc-2",
    title: "Real Estate Boom Continues in Metropolitan Areas",
    description: "Experience luxury living at Rattha Greensville, a gated community with numerous amenities in Somajiguda",
    source: "ET Luxury",
    date: "20 Oct 2024",
    month: "October",
    year: "2024",
    category: "ENGLISH",
    image: "/assets/images/pressCoverage.jpg",
    downloadUrl: "/downloads/real-estate-boom-oct-2024.pdf"
  },
  {
    id: "pc-3",
    title: "Property Investment Trends for 2024",
    description: "Experience luxury living at Rattha Greensville, a gated community with numerous amenities in Somajiguda",
    source: "ET Luxury",
    date: "12 Oct 2024",
    month: "October",
    year: "2024",
    category: "FEATURES",
    image: "/assets/images/pressCoverage.jpg",
    downloadUrl: "/downloads/property-trends-2024.pdf"
  },
  {
    id: "pc-4",
    title: "గృహ మార్కెట్ లో కొత్త రికార్డులు",
    description: "Experience luxury living at Rattha Greensville, a gated community with numerous amenities in Somajiguda",
    source: "ET Luxury",
    date: "18 Oct 2024",
    month: "October",
    year: "2024",
    category: "VERNACULAR",
    image: "/assets/images/pressCoverage.jpg",
    downloadUrl: "/downloads/telugu-housing-news.pdf"
  },
  {
    id: "pc-5",
    title: "Digital Revolution in Real Estate Marketing",
    description: "Experience luxury living at Rattha Greensville, a gated community with numerous amenities in Somajiguda",
    source: "ET Luxury",
    date: "25 Sep 2024",
    month: "September",
    year: "2024",
    category: "ONLINE",
    image: "/assets/images/pressCoverage.jpg",
    downloadUrl: "/downloads/digital-real-estate.pdf"
  },
  {
    id: "pc-6",
    title: "Sustainable Housing: The Future of Real Estate",
    description: "Experience luxury living at Rattha Greensville, a gated community with numerous amenities in Somajiguda",
    source: "ET Luxury",
    date: "20 Sep 2024",
    month: "September",
    year: "2024",
    category: "FEATURES",
    image: "/assets/images/pressCoverage.jpg",
    downloadUrl: "/downloads/sustainable-housing.pdf"
  },
   {
    id: "pc-7",
    title: "Housing Market Jumps! Prices Climb Higher",
    description: "Experience luxury living at Rattha Greensville, a gated community with numerous amenities in Somajiguda",
    source: "ET Luxury",
    date: "20 Oct 2024",
    month: "October",
    year: "2024",
    category: "ENGLISH",
    image: "/assets/images/pressCoverage.jpg",
    downloadUrl: "/downloads/housing-market-oct-2024.pdf"
  },
  {
    id: "pc-8",
    title: "Real Estate Boom Continues in Metropolitan Areas",
    description: "Experience luxury living at Rattha Greensville, a gated community with numerous amenities in Somajiguda",
    source: "ET Luxury",
    date: "20 Oct 2024",
    month: "October",
    year: "2024",
    category: "ENGLISH",
    image: "/assets/images/pressCoverage.jpg",
    downloadUrl: "/downloads/real-estate-boom-oct-2024.pdf"
  },
  {
    id: "pc-9",
    title: "Property Investment Trends for 2024",
    description: "Experience luxury living at Rattha Greensville, a gated community with numerous amenities in Somajiguda",
    source: "ET Luxury",
    date: "12 Oct 2024",
    month: "October",
    year: "2024",
    category: "FEATURES",
    image: "/assets/images/pressCoverage.jpg",
    downloadUrl: "/downloads/property-trends-2024.pdf"
  },
  {
    id: "pc-10",
    title: "Property Investment Trends for 2024",
    description: "Experience luxury living at Rattha Greensville, a gated community with numerous amenities in Somajiguda",
    source: "ET Luxury",
    date: "18 Oct 2024",
    month: "October",
    year: "2024",
    category: "VERNACULAR",
    image: "/assets/images/pressCoverage.jpg",
    downloadUrl: "/downloads/telugu-housing-news.pdf"
  },
  {
    id: "pc-11",
    title: "Digital Revolution in Real Estate Marketing",
    description: "Experience luxury living at Rattha Greensville, a gated community with numerous amenities in Somajiguda",
    source: "ET Luxury",
    date: "25 Sep 2024",
    month: "September",
    year: "2024",
    category: "ONLINE",
    image: "/assets/images/pressCoverage.jpg",
    downloadUrl: "/downloads/digital-real-estate.pdf"
  },
  {
    id: "pc-12",
    title: "Sustainable Housing: The Future of Real Estate",
    description: "Experience luxury living at Rattha Greensville, a gated community with numerous amenities in Somajiguda",
    source: "ET Luxury",
    date: "20 Sep 2024",
    month: "September",
    year: "2024",
    category: "FEATURES",
    image: "/assets/images/pressCoverage.jpg",
    downloadUrl: "/downloads/sustainable-housing.pdf"
  }
];