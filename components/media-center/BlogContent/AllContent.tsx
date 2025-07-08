"use client";

import React from "react";
import BlogCard from "./BlogCard";

export interface BlogPost {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  readTime?: string;
}


interface AllContentProps {
  posts: BlogPost[];
  isAnimating?: boolean;
}

const AllContent: React.FC<AllContentProps> = ({ posts, isAnimating }) => {
  return (
    <div className="max-w-[1158px] mx-auto mt-[50px] md:mt-[130px]">
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center transition-all duration-500 ${
        isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
      }`}>
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default AllContent;