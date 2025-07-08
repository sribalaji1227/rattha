"use client";

import { PressCalendarIcon, PressFileIcon } from "@/constants/assets";
import { pressCoverageArticles } from "@/constants/pages/mediaCenter";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

export interface PressCoverageArticle {
  id: string;
  title: string;
  description: string;
  source: string;
  date: string;
  month: string;
  year: string;
  category: string;
  image: string;
  downloadUrl: string;
}



const PressCoverage: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("ENGLISH");
  const [filteredArticles, setFilteredArticles] = useState<PressCoverageArticle[]>(pressCoverageArticles);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);

  const years = ["2024", "2023", "2022"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const categories = ["ENGLISH", "VERNACULAR", "FEATURES", "ONLINE"];

  useEffect(() => {
    setIsAnimating(true);
    
    setTimeout(() => {
      let filtered = pressCoverageArticles;

      if (selectedYear) {
        filtered = filtered.filter(article => article.year === selectedYear);
      }

      if (selectedMonth) {
        filtered = filtered.filter(article => article.month === selectedMonth);
      }

      if (selectedCategory) {
        filtered = filtered.filter(article => article.category === selectedCategory);
      }

      setFilteredArticles(filtered);
      setIsAnimating(false);
    }, 300);
  }, [selectedYear, selectedMonth, selectedCategory]);

  useEffect(() => {
    // Animate container on mount
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    if (filtersRef.current) observer.observe(filtersRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
      if (filtersRef.current) observer.unobserve(filtersRef.current);
    };
  }, []);

  const handleSearch = () => {
    // Search functionality - could trigger additional filtering or API calls
    console.log("Search triggered with:", { selectedYear, selectedMonth, selectedCategory });
  };

  return (
    <div ref={containerRef} className="w-full max-w-[1150px] mx-auto px-4  opacity-0">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-[28px] md:text-[36px] font-serif text-[#333] tracking-wide animate-slide-up">
          PRESS COVERAGE
        </h1>
      </div>

      {/* Search Filters */}
      <div ref={filtersRef} className="mb-8 opacity-0">
        {/* Mobile Layout */}
        <div className="md:hidden space-y-4 bg-[#F0F0F0] p-3">
          <div className="flex gap-3">
            {/* Year Dropdown */}
            <div className="flex-1">
              <div className="relative">
                <label className="block text-[14px] text-[#107BC0]   font-[500] mb-1 ">
                  YEAR
                </label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full appearance-none bg-[#F0F0F0] border-none rounded-[8px]  py-2.5 text-[13px] text-[#6c757d] focus:outline-none focus:ring-2 focus:ring-[#107BC0] focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select</option>
                  {years.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none mt-5">
                  <svg className="w-3 h-3 text-[#6c757d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Month Dropdown */}
            <div className="flex-1">
              <div className="relative">
                <label className="block text-[14px] text-[#107BC0]   font-[500]">
                  MONTH
                </label>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="w-full appearance-none bg-[#F0F0F0] border-none rounded-[8px] py-2.5 text-[13px] text-[#6c757d] focus:outline-none focus:ring-2 focus:ring-[#107BC0] focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select</option>
                  {months.map((month) => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none mt-5">
                  <svg className="w-3 h-3 text-[#6c757d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Search Button - Full Width Below */}
          <button
            onClick={handleSearch}
            className="w-full bg-[#107BC0] text-white py-3 rounded-[25px] text-[14px] font-semibold hover:bg-[#0d6aa3] transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            SEARCH
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block brounded-[15px] px-5 py-4 bg-[#F0F0F0]">
          <div className="flex gap-[80px] items-end">
            {/* Year Dropdown */}
            <div className="flex-1">
              <label className="block text-[14px] text-[#000000]  font-[500]">
                YEAR
              </label>
              <div className="relative">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full appearance-none  bg-[#F0F0F0] border-none rounded-[8px]  py-1 text-[16px] text-[#6c757d] focus:outline-none  transition-all duration-300"
                >
                  <option value="" className="text-[#969696] text-[14px]">Select</option>
                  {years.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-4 h-4 text-[#6c757d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Month Dropdown */}
            <div className="flex-1">
              <label className="block text-[14px] text-[#000000]  font-[500]">
                MONTH
              </label>
              <div className="relative">
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="w-full appearance-none bg-[#F0F0F0] border-none rounded-[8px]  py-1 text-[16px] text-[#6c757d] focus:outline-none focus:border-gray-200 transition-all duration-300"
                >
                  <option value="">Select</option>
                  {months.map((month) => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-4 h-4 text-[#6c757d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="flex-shrink-0">
              <button
                onClick={handleSearch}
                className="bg-[#107BC0] text-white px-8 py-3 rounded-[25px] text-[15px] font-semibold hover:bg-[#0d6aa3] transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap"
              >
                SEARCH
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="mb-8 w-full md:max-w-[504px]  mx-auto">
        <div className="flex md:justify-center overflow-x-auto md:overflow-visible scrollbar-hide gap-6 md:gap-6 px-4 md:px-0">
          <div className="flex gap-6 md:gap-6 min-w-max md:min-w-0">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-2 py-2 text-[14px] md:text-[20px] font-medium transition-all duration-300 hover:scale-105 whitespace-nowrap ${
                  selectedCategory === category
                    ? "text-[#000000]  "
                    : "text-[#787878] "
                }`}
                style={{
                  animation: `slideUpFade 0.5s ease-out ${index * 0.1}s forwards`,
                  opacity: 0,
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className={`transition-all duration-500 ${
        isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
      }`}>
        {filteredArticles?.length > 0 ? (
          <div className="space-y-6">
            {filteredArticles.map((article, index) => (
              <div
                key={article.id}
                className="bg-white rounded-[1px] py-[20px] shadow-[0_5px_24px_0_rgba(0,0,0,0.1)] hover:shadow-lg transition-all duration-500 p-4 md:p-6 animate-slide-up"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
                  {/* Article Image */}
                  <div className="lg:w-[232px] lg:h-[232px] flex-shrink-0 px-0 md:px-2">
                    <div className="relative w-full max-w-[340px] h-[340px]  sm:min-w-[230px] sm:h-[230px] overflow-hidden bg-gray-100">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                       
                      />
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="flex-1 flex flex-col justify-between py-3">
                    <div className="space-y-3 md:space-y-6 max-w-[778px]">
                      <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-[500] text-[#000000]  leading-relaxed">
                        {article.description}
                      </h3>
                      
                   
                      {/* Meta Information */}
                      <div className="flex sm:flex-row sm:items-center font-[600] gap-10 sm:gap-6 text-[14px] md:text-[16px] text-[#6E6E6E]">
                        <div className="flex items-center gap-4">
                          <Image src={PressFileIcon} width={24} height={24} alt="file"/>
                          <span>{article.source}</span>
                        </div>
                        
                        <div className="flex items-center gap-4 md:text-[16px] text-[#6E6E6E]">
                           <Image src={PressCalendarIcon} width={24} height={24} alt="file"/>
                          
                          <span>{article.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Download Button */}
                    <div className="mt-4 md:mt-6">
                      <a
                        href={article.downloadUrl}
                        download
                        className="inline-flex items-center bg-[#107BC0] text-[#FFFFFF] px-[50px] py-[16px] rounded-[40px] text-[15px] font-semibold hover:bg-[#0d6aa3] transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        DOWNLOAD
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 animate-fade-in">
            <div className="text-[#6c757d] text-[16px] md:text-[18px]">
              No articles found for the selected filters.
            </div>
            <p className="text-[#999] text-[14px] mt-2">
              Try adjusting your search criteria or clearing some filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PressCoverage;