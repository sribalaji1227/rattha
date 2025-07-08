"use client";

import React, { useState, useEffect, useRef } from "react";
import ExploreCard, { Project } from "./ExploreCard";
import ExploreFilterBar from "./ExploreFilterBar";

interface ExploreListProps {
  projects: Project[];
  postsPerLoad?: number;
}

const ExploreList: React.FC<ExploreListProps> = ({
  projects,
  postsPerLoad = 6,
}) => {
  const [allProjects] = useState<Project[]>(projects); // Original projects
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects); // Filtered projects
  const [displayed, setDisplayed] = useState<Project[]>([]); // Currently displayed projects
  const [hasMore, setHasMore] = useState(false);
  const loadMoreRef = useRef<HTMLButtonElement>(null);
   const filterBarRef = useRef<any>(null); // Add a ref for the filter bar

  // Handle filter changes from ExploreFilterBar
  const handleFilterChange = (filtered: Project[]) => {
    setFilteredProjects(filtered);
    // Reset displayed projects when filters change
    const initialDisplay = filtered.slice(0, postsPerLoad);
    setDisplayed(initialDisplay);
    setHasMore(filtered.length > postsPerLoad);
  };

  const handleResetAllFilters  = () => {
    setFilteredProjects(allProjects);
    if (filterBarRef.current) {
      filterBarRef.current.resetFilters();
    }
  };

  // Initialize first batch
  useEffect(() => {
    const initialDisplay = filteredProjects.slice(0, postsPerLoad);
    setDisplayed(initialDisplay);
    setHasMore(filteredProjects.length > postsPerLoad);
  }, [filteredProjects, postsPerLoad]);

  const loadMore = () => {
    const currentLength = displayed.length;
    const nextBatch = filteredProjects.slice(
      currentLength,
      currentLength + postsPerLoad
    );
    
    setDisplayed((prev) => [...prev, ...nextBatch]);
    setHasMore(filteredProjects.length > currentLength + postsPerLoad);
  };

  // Animate "VIEW MORE" button on scroll into view
  useEffect(() => {
    const btn = loadMoreRef.current;
    if (!btn || !hasMore) return;
    
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            btn.classList.add("animate-fade-in", "animate-slide-up");
            setTimeout(() => btn.classList.add("animate-button-pulse"), 600);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    
    obs.observe(btn);
    return () => obs.disconnect();
  }, [hasMore]);

  return (
    <section className="py-12 bg-white">
      {/* Filter Bar Section */}
      <section className="py-6 bg-white">  
        <ExploreFilterBar 
          ref={filterBarRef}
          projects={allProjects} 
          onFilterChange={handleFilterChange}
        />     
      </section>
      
      <div className="max-w-[1190px] mx-auto px-6">
        {/* Results Header */}
        <div className="flex items-center justify-center mt-4 mb-8">
          <h2 className="text-center text-[20px] md:text-[40px] font-medium text-[#107BC0] font-cormorant">
            EXPLORE PROJECTS
          </h2>         
        </div>        

        {/* Projects Grid */}
        {displayed.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayed.map((proj, idx) => (
                <ExploreCard key={proj.id} project={proj} index={idx} />
              ))}
            </div>
            
            {/* Load More Button */}
            {hasMore && (
              <div className="text-center mt-8">
                <button
                  ref={loadMoreRef}
                  onClick={loadMore}
                  className="font-inter translate-y-4 inline-block px-8 py-3 text-sm bg-[#107BC0] text-white rounded-full font-medium hover:scale-105 transition-transform duration-300"
                >
                  VIEW MORE
                </button>
              </div>
            )}
          </>
        ) : (
          // No Results Message
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🏘️</div>
            <h3 className="text-xl font-medium text-gray-600 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your filters to see more results
            </p>
            <button
              // onClick={() => {
              //   handleFilterChange(allProjects)
              //   handleResetFilters()
              // }}
              onClick={handleResetAllFilters}
              className="px-6 py-2 bg-[#107BC0] text-white rounded-full hover:bg-[#0e6aa3] transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExploreList;
