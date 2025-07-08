// BlogCard.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export interface BlogPost {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  readTime?: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="relative bg-white w-full max-w-[382px] sm:min-w-[360px] sm:max-w-[360px] h-full flex flex-col border border-[#CCCCCC] mt-[10px] md:mt-[20px] overflow-hidden transition-all duration-500 ease-out hover:translate-y-[-8px] hover:shadow-lg hover:border-[#107BC0] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      {/* Glow effect on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-[#107BC0]/10 to-[#107BC0]/5 opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-100" : ""
          }`}
      />

      {/* Image Container */}
      <div className="relative w-full max-w-[382px] h-[260px] sm:h-[260px] sm:min-w-[360px] overflow-hidden">
        {/* Loading shimmer effect */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
        )}

        <div
          className={`relative h-full transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"
            }`}
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-all duration-700"
            onLoadingComplete={() => setImageLoaded(true)}
            style={{
              transform: isHovered ? "scale(1.1) translateY(-5px)" : "scale(1)",
              filter: isHovered ? "brightness(1.1)" : "brightness(1)",
            }}
          />
        </div>

        {/* Category badge that slides in */}
        <div
          className={`absolute top-4 left-4 px-3 py-1 bg-[#107BC0] text-white text-xs font-semibold rounded-full transform transition-all duration-500 ${isHovered
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
            }`}
        >
          {post.category}
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6 flex flex-col flex-1">
        {/* Date */}
        <div
          className={`flex items-center gap-1 mb-4 transition-all duration-500 ${isHovered ? "translate-x-2" : ""
            }`}
        >
          <span className="text-[#107BC0] text-[14px] font-inter font-[700] transition-colors">
            {post.category}
          </span>
          <span className="text-[#107BC0] text-sm font-medium">-</span>
          <span className="text-[#107BC0] text-[14px] font-inter font-[500]">
            {post.date}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`text-[14px] font-inter font-[300] mb-3 line-clamp-2 transition-all duration-500 ${isHovered ? "text-[#107BC0] translate-x-2" : "text-[#212529]"
            }`}
        >
          {post.title}
        </h3>

        {/* Excerpt */}
        <p
          className={`text-[10px] text-[#212529] font-inter font-[500] mb-6 line-clamp-3 transition-all duration-500 ${isHovered ? "translate-x-2" : ""
            }`}
        >
          {post.excerpt}
        </p>

        {/* Read Button */}
        <div className="mt-auto">
          <Link
            href={`/blog/${post.id}`}
            className="relative inline-flex items-center justify-center px-8 py-2 border border-[#107BC0] text-[#107BC0] rounded-full text-sm font-medium overflow-hidden transition-all duration-500 group/button hover:shadow-md"
          >
            {/* Button background animation */}
            <span className="absolute inset-0 bg-[#107BC0] transform scale-x-0 transition-transform duration-500 origin-left group-hover/button:scale-x-100" />

            {/* Button text */}
            <span className="relative z-10 transition-colors duration-500 group-hover/button:text-white">
              READ
            </span>
          </Link>
        </div>
      </div>

      {/* Floating elements for extra visual interest */}
      {isHovered && (
        <>
          <div className="absolute top-2 right-2 w-2 h-2 bg-[#107BC0] rounded-full animate-ping" />
          <div className="absolute bottom-2 left-2 w-2 h-2 bg-[#107BC0] rounded-full animate-ping"
            style={{ animationDelay: '200ms' }} />
        </>
      )}
    </div>
  );
};

export default BlogCard;