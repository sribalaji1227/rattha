"use client";

import React, { useState, useEffect, useRef } from "react";
import AllContent from "./BlogContent/AllContent";
import PressReleasesContent from "./BlogContent/PressReleasesContent";
import PressCoverageContent from "./BlogContent/PressCoverageContent";
import PressKitContent from "./BlogContent/PressKitContent";
import BlogContent from "./BlogContent/BlogContent";

export interface BlogPost {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  readTime?: string;
}

interface BlogListProps {
  posts: BlogPost[];
  postsPerLoad?: number;
  filterOptions?: string[];
}

const BlogList: React.FC<BlogListProps> = ({
  posts,
  postsPerLoad = 9,
  filterOptions = ["ALL", "PRESS RELEASES", "PRESS COVERAGE", "PRESS KIT", "BLOG"],
}) => {
  const [displayedPosts, setDisplayedPosts] = useState<BlogPost[]>([]);
  const [selectedFilter, setSelectedFilter] = useState("ALL");
  const [hasMore, setHasMore] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const loadMoreRef = useRef<HTMLButtonElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  // Sample press releases data
  const pressReleases = [
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

  useEffect(() => {
    setIsAnimating(true);
    
    const filteredPosts = selectedFilter === "ALL" 
      ? posts 
      : posts.filter(post => post.category.toUpperCase() === selectedFilter.toUpperCase());
    
    setTimeout(() => {
      setDisplayedPosts(filteredPosts.slice(0, postsPerLoad));
      setHasMore(filteredPosts.length > postsPerLoad);
      setIsAnimating(false);
    }, 300);
    
  }, [selectedFilter, posts, postsPerLoad]);

  const loadMore = () => {
    const filteredPosts = selectedFilter === "ALL" 
      ? posts 
      : posts.filter(post => post.category.toUpperCase() === selectedFilter.toUpperCase());
    
    const currentLength = displayedPosts.length;
    const nextPosts = filteredPosts.slice(currentLength, currentLength + postsPerLoad);
    
    setDisplayedPosts([...displayedPosts, ...nextPosts]);
    setHasMore(currentLength + postsPerLoad < filteredPosts.length);
  };

  useEffect(() => {
    // Animate filters on mount
    const filterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (filterRef.current) filterObserver.observe(filterRef.current);

    // Animate button
    const buttonObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-4");
            entry.target.classList.add("animate-fade-in", "animate-slide-up");
            
            setTimeout(() => {
              entry.target.classList.add("animate-button-pulse");
            }, 500);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (loadMoreRef.current) buttonObserver.observe(loadMoreRef.current);

    return () => {
      if (filterRef.current) filterObserver.unobserve(filterRef.current);
      if (loadMoreRef.current) buttonObserver.unobserve(loadMoreRef.current);
    };
  }, [hasMore]);

  // Simplified render content using separate components
  const renderContent = () => {
    const commonProps = {
      displayedPosts,
      isAnimating,
    };

    switch (selectedFilter) {
      case "PRESS RELEASES":
        return <PressReleasesContent {...commonProps} pressReleases={pressReleases} posts={displayedPosts} />;
      
      case "PRESS COVERAGE":
        return <PressCoverageContent  />;
      
      case "PRESS KIT":
        return <PressKitContent  />;
      
      case "BLOG":
        return <BlogContent {...commonProps}  posts={displayedPosts} />;
      
      case "ALL":
      default:
        return <AllContent posts={displayedPosts} isAnimating={isAnimating} />;
    }
  };

  return (
    <div className="py-8 px-4 bg-white overflow-hidden">
      {/* Filter Tabs with smooth animations */}
      <div ref={filterRef} className="flex flex-wrap justify-center gap-2 md:gap-10 mb-8 opacity-0">
        {filterOptions.map((filter, idx) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`relative px-4 py-2 text-[14px] md:text-[18px] font-inter font-[700] rounded-full transition-all duration-500 transform hover:scale-105 ${
              selectedFilter === filter
                ? "text-[#107BC0] scale-105"
                : "text-[#A1A5A3] hover:text-[#107BC0]"
            }`}
            style={{
              animation: `fadeIn 0.5s ease-out ${idx * 0.1}s forwards`,
              opacity: 0,
            }}
          >
            <span className="relative z-10">{filter}</span>
            
            {selectedFilter === filter && (
              <span className="absolute inset-0 bg-[#107BC0]/10 rounded-full scale-x-0 animate-[scaleX_0.5s_ease-out_forwards]" />
            )}
          </button>
        ))}
      </div>

      {/* Dynamic Content Based on Filter */}
      {renderContent()}

      {/* Load More Button */}
      {
        selectedFilter !== "PRESS KIT" && hasMore &&(
        <div className="text-center mt-[80px]">
          <button
            ref={loadMoreRef}
            onClick={loadMore}
            className="relative px-8 py-3 text-[14px] bg-[#107BC0] text-white rounded-full font-inter font-[600] transition-all duration-500 opacity-0 translate-y-4 hover:scale-105 hover:shadow-lg overflow-hidden group"
          >
            <span className="absolute inset-0 bg-white/20 scale-0 rounded-full transition-transform duration-700 group-hover:scale-150" />
            <span className="relative z-10">LOAD MORE</span>
            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin opacity-0" />
            </span>
          </button>
        </div>
        )
      }
    </div>
  );
};

export default BlogList;