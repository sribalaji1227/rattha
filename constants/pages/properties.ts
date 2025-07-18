export interface Project {
    id: string;
    image: string;
    location: string;
    title: string;
    status: "New Launch" | "Under Construction" | "Completed" | "Ready to Move" | "Possession Ready";
    price: string;
    possessionDate: string;
}

export const propertiesStats = [
    { label: "Location", value: "Nelson Manickam Road" },
    { label: "Bedrooms", value: "3-4" },
    { label: "Units", value: "110" },
    { label: "Completion", value: "Q4 2030" },
];


export const propertiesData: Project[] = [
    {
        id: "1",
        image: "/assets/images/blogImage1.png",
        location: "Sector 54, Gurugram",
        title: "Rattha Realty Vista",
        status: "New Launch",
        price: "INR 11.00 Cr. Onwards |",
        possessionDate: "Jan 2031",
    },
    {
        id: "2",
        image: "/assets/images/residential_developement.png",
        location: "Sector 54, Gurugram",
        title: "Rattha Realty Vista",
        status: "Under Construction",
        price: "11.00 Cr. Onwards |",
        possessionDate: "Jan 2031",
    },
    {
        id: "3",
        image: "/assets/images/blogImage1.png",
        location: "Sector 54, Gurugram",
        title: "Rattha Realty Vista",
        status: "New Launch",
        price: "11.00 Cr. Onwards |",
        possessionDate: "Jan 2031",
    },
    {
        id: "4",
        image: "/assets/images/residential_developement.png",
        location: "Sector 54, Gurugram",
        title: "Rattha Realty Vista",
        status: "Under Construction",
        price: "11.00 Cr. Onwards |",
        possessionDate: "Jan 2031",
    },
    {
        id: "5",
        image: "/assets/images/blogImage1.png",
        location: "Sector 54, Gurugram",
        title: "Rattha Realty Vista",
        status: "New Launch",
        price: "11.00 Cr. Onwards |",
        possessionDate: "Jan 2031",
    },
    {
        id: "6",
        image: "/assets/images/residential_developement.png",
        location: "Sector 54, Gurugram",
        title: "Rattha Realty Vista",
        status: "Under Construction",
        price: "11.00 Cr. Onwards |",
        possessionDate: "Jan 2031",
    },
    {
        id: "7",
        image: "/assets/images/blogImage1.png",
        location: "Sector 54, Gurugram",
        title: "Rattha Realty Vista",
        status: "New Launch",
        price: "11.00 Cr. Onwards |",
        possessionDate: "Jan 2031",
    },
    {
        id: "8",
        image: "/assets/images/residential_developement.png",
        location: "Sector 54, Gurugram",
        title: "Rattha Realty Vista",
        status: "Under Construction",
        price: "11.00 Cr. Onwards |",
        possessionDate: "Jan 2031",
    },
    {
        id: "9",
        image: "/assets/images/blogImage1.png",
        location: "Sector 54, Gurugram",
        title: "Rattha Realty Vista",
        status: "New Launch",
        price: "11.00 Cr. Onwards |",
        possessionDate: "Jan 2031",
    }
];