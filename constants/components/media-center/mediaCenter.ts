import { LogoItem, MediaContact, PhotographItem, ProfileItem } from "@/types/mediaCenter";

// Sample data - replace with your actual data
 export const logoItems: LogoItem[] = [
    {
      id: "logo-1",
      title: "Rattha Logo Black",
      image: "/assets/images/ratthaLogo.jpg",
      downloadUrl: "/downloads/rattha-logo-black.zip",
    },
    {
      id: "logo-2",
      title: "Rattha Logo White",
      image: "/assets/images/ratthaLogo.jpg",
      downloadUrl: "/downloads/rattha-logo-white.zip",
    },
  ];

export const profileItems: ProfileItem[] = [
    {
      id: "profile-1",
      title: "RATTHA & SUSTAINABILITY",
      subtitle: "Rattha Realty",
      image: "/assets/images/pressKitProfile1.jpg",
      downloadUrl: "/downloads/rattha-sustainability.pdf",
    },
    {
      id: "profile-2",
      title: "CSR PROFILE",
      subtitle: "Rattha Realty",
      image: "/assets/images/pressKitProfile2.jpg",
      downloadUrl: "/downloads/csr-profile.pdf",
    },
    {
      id: "profile-3",
      title: "CORPORATE PROFILE",
      subtitle: "Rattha Realty",
      image: "/assets/images/pressKitProfile3.jpg",
      downloadUrl: "/downloads/corporate-profile.pdf",
    },
  ];

 export const photographItems: PhotographItem[] = [
    {
      id: "photo-1",
      name: "GURIBINDER RATTHA",
      position: "Founder",
      image: "/assets/images/pressKitPhotograph1.jpg",
      downloadUrl: "/downloads/guribinder-founder.jpg",
    },
    {
      id: "photo-2",
      name: "GURIBINDER RATTHA",
      position: "Chairman",
      image: "/assets/images/pressKitPhotograph2.jpg",
      downloadUrl: "/downloads/guribinder-chairman.jpg",
    },
    {
      id: "photo-3",
      name: "GURIBINDER RATTHA",
      position: "Managing Director",
      image: "/assets/images/pressKitPhotograph3.jpg",
      downloadUrl: "/downloads/guribinder-md.jpg",
    },
    {
      id: "photo-3",
      name: "GURIBINDER RATTHA",
      position: "Managing Director",
      image: "/assets/images/pressKitPhotograph3.jpg",
      downloadUrl: "/downloads/guribinder-md.jpg",
    },
    {
      id: "photo-3",
      name: "GURIBINDER RATTHA",
      position: "Managing Director",
      image: "/assets/images/pressKitPhotograph3.jpg",
      downloadUrl: "/downloads/guribinder-md.jpg",
    },
  ];

 export const mediaContact: MediaContact = {
    name: "Mr. Rajendra Singh",
    company: "Rattha Realty & Infrastructure Pvt Ltd.",
    address: [
      "Rattha Realty & Infrastructure Pvt Ltd.",
      "Regd Office: 6th Floor, Tower C, ",
      "Tek Meadows,",
      "51, Rajiv Gandhi Salai (OMR)",
      "Sholnganallur, Chennai-600118",
    ],
    phone: "+91 9380247254",
    email: "marketing@rattha.com",
  };



  export const pressReleases = [
      {
        id: "1",
        category: "PRESS RELEASES",
        date: "07 APR 2025",
        title: "Why Investing in Real Estate Early In the Year Could be You",
        excerpt: "Lorem ipsum dolor sit amet consectetur. Ornare pretium tristique sit nulla felis. Ipsum in commodo tincidunt dui sodales malesuada cursus nisl.",
        image: "/assets/images/pressRelease.jpg",
        featured: true
      },
      {
        id: "2",
        category: "Blogs",
        date: "07 May 2025",
        title: "Why Investing in Real Estate Early In the Year Could be You",
        excerpt: "Lorem ipsum dolor sit amet consectetur. Ornare pretium tristique sit nulla felis. Ipsum in commodo tincidunt dui sodales malesuada cursus nisl.",
        image: "/assets/images/blogCard.jpg",
        featured: true
      }
    ];