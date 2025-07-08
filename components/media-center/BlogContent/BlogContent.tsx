"use client";

import React from "react";
import BlogCard, { BlogPost } from "./BlogCard";
import PressReleases from "./PressReleaseComponent";
// import Blogs from "./Blogs";
// import { BlogPost } from "./BlogList";

interface BlogContentProps {
  posts: BlogPost[];
  isAnimating: boolean;
  // posts:any[]
}

const BlogContent: React.FC<BlogContentProps> = ({ 
  isAnimating, 
  posts
}) => {
    const pressReleases = [

      {
      id: "1",
      category: "Blogs",
      date: "07 May 2025",
      title: "Why Investing in Real Estate Early In the Year Could be You",
      excerpt: "Lorem ipsum dolor sit amet consectetur. Ornare pretium tristique sit nulla felis. Ipsum in commodo tincidunt dui sodales malesuada cursus nisl.",
      image: "/assets/images/blogCard.jpg",
      featured: true
    }
  ];
  console.log("BlogContent posts:", posts);

  return (
    <div>
      {/* Featured Blog Section */}
      <PressReleases pressReleases={pressReleases} title={"BLOGS"} />
      
      {/* Regular Blog Cards */}
      <div className="max-w-[1150px] mx-auto mt-[50px] md:mt-[80px]">
        {posts.length > 0 ? (
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center transition-all duration-500 ${
            isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
          }`}>
            {posts.map((post) => (
              <BlogCard key={post.id} post={post}  />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-[#6c757d] text-[16px] font-inter">No additional blog posts found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogContent;