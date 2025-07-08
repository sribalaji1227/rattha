"use client";

import React from "react";
import BlogCard, { BlogPost } from "./BlogCard";
import PressReleases from "./PressReleaseComponent";

interface PressReleasesContentProps {
  posts: BlogPost[];
  isAnimating: boolean;
  pressReleases: any[];
}

const PressReleasesContent: React.FC<PressReleasesContentProps> = ({
  isAnimating,
  pressReleases,
  posts
}) => {
  return (
    <div>
      {/* Featured Press Release Section */}
      {/* <PressRelease pressReleases={pressReleases} /> */}
      <PressReleases pressReleases={pressReleases} title={"PRESS RELEASE"} />

      {/* Regular Press Release Cards */}
      <div className="max-w-[1150px] mx-auto mt-[50px] md:mt-[20px]">
        {posts.length > 0 ? (
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center transition-all duration-500 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
            }`}>
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-[#6c757d] text-[16px] font-inter">No additional press releases found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PressReleasesContent;