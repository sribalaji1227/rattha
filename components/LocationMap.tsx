"use client";
import { useState, useMemo } from "react";  
import { ChevronRight } from "lucide-react";


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
  //Fake Data
  // // Colleges
  // {
  //   name: "SRM Institute of Science and Technology",
  //   lat: 12.8235,
  //   lng: 80.0457,
  //   category: "Colleges",
  //   distance: "4.5 km",
  // },
  // {
  //   name: "Loyola College",
  //   lat: 13.0695,
  //   lng: 80.2337,
  //   category: "Colleges",
  //   distance: "8 km",
  // },

  // // Schools
  // {
  //   name: "DAV Public School",
  //   lat: 12.9902,
  //   lng: 80.2201,
  //   category: "Schools",
  //   distance: "500 m",
  // },
  // {
  //   name: "PSBB Millennium School",
  //   lat: 12.9872,
  //   lng: 80.2235,
  //   category: "Schools",
  //   distance: "1.1 km",
  // },

  // // Malls
  // {
  //   name: "Phoenix Marketcity",
  //   lat: 12.9948,
  //   lng: 80.2189,
  //   category: "Malls",
  //   distance: "2.5 km",
  // },
  // {
  //   name: "Express Avenue Mall",
  //   lat: 13.0606,
  //   lng: 80.2612,
  //   category: "Malls",
  //   distance: "9 km",
  // },

  // // Metro Stations
  // {
  //   name: "Little Mount Metro Station",
  //   lat: 13.0121,
  //   lng: 80.2231,
  //   category: "Metro Stations",
  //   distance: "1.8 km",
  // },
  // {
  //   name: "Guindy Metro Station",
  //   lat: 13.0073,
  //   lng: 80.2219,
  //   category: "Metro Stations",
  //   distance: "2.2 km",
  // },

  // // Hotels
  // {
  //   name: "Taj Club House",
  //   lat: 13.0611,
  //   lng: 80.2613,
  //   category: "Hotels",
  //   distance: "9.2 km",
  // },
  // {
  //   name: "The Leela Palace Chennai",
  //   lat: 13.0065,
  //   lng: 80.2596,
  //   category: "Hotels",
  //   distance: "6.5 km",
  // },
];

 
const categories = [
  "Hospitals",
  "Colleges",
  "Schools",
  "Malls",
  "Metro Stations",
  "Hotels",
];

const EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.028780376515!2d80.226551!3d12.905870899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525c7b80d595ab%3A0x5bd1bad2453f2b25!2sRattha%20Group!5e0!3m2!1sen!2sin!4v1748411226346!5m2!1sen!2sin";


const LocationMap: React.FC = () => {
  const [activeCat, setActiveCat] = useState<string>(categories[0]);  
  const filteredLandmarks = useMemo(
    () => landmarksData.filter((lm) => lm.category === activeCat),
    [activeCat]
  );

  return (
    <div className="m-[15px] md:mt-[30px] md:mb-16 md:mx-auto max-w-[1200px] mx-auto px-0">
      <div className="w-full sm:max-w-full max-w-[380px] h-[400px] sm:h-[600px] mb-[20px]">
        <iframe
          title="Rattha Group location"
          src={EMBED_URL}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="flex justify-start gap-2 mb-[18px] md:mb-[28px] overflow-x-auto whitespace-nowrap px-0 pb-[10px] md:pb-0">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`font-inter inline-block px-[20px] py-[12px] rounded-full text-[14px] md:text-[15px] font-medium transition-all 
              ${
                activeCat === cat
                  ? "bg-[#107BC0] text-white"
                  : "border border-[#107BC0] text-[#107BC0] hover:bg-[#E6F7FF]"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="max-w-[1185px] mx-auto">
        {filteredLandmarks.map((lm, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center border-b border-[#DCDCDC] py-3"
          >
            <span className="text-[14px] md:text-[16px] text-[#787878] font-inter">
              {lm.name}
            </span>
            <div className="flex items-center">
              <span className="text-[14px] md:text-[16px] text-[#787878] mr-[12px] font-inter">
                {lm.distance}
              </span>
              <ChevronRight size={18} strokeWidth={2.4} color="#0070DE" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationMap;
