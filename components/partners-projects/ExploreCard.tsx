"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export interface Project {
  id: string;
  image: string;
  location: string;
  title: string;
  status: "New Launch" | "Under Construction" | "Completed" | "Ready to Move" | "Possession Ready";
  price: string;
  possessionDate: string;
}

export type ProjectStatus = "New Launch" | "Under Construction" | "Ready to Occupy";

interface ExploreCardProps {
  project: Project;
  index?: number;
}



const ExploreCard: React.FC<ExploreCardProps> = ({ project, index = 0 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.classList.add("animate-card-enter");
              contentRef.current?.classList.add("animate-content-slide");
              buttonRef.current?.classList.add("animate-button-pulse");
            }, index * 120);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  const StatusIcon =
    project.status === "New Launch" ? (
      <Image
        src="/assets/icons/new_launch.svg"
        alt="Launch"
        height={25}
        width={25}
      />
    ) : project.status === "Under Construction" ? (
      <Image
        src="/assets/icons/construction.svg"
        alt="Construction"
        height={25}
        width={25}
      />
    ) : (
      <Image
        src="/assets/icons/completed.svg"
        alt="Launch"
        height={25}
        width={25}
      />
    );

  return (
    <div
      ref={cardRef}
      className="opacity-0 w-full max-w-[382px] sm:w-[362px] mx-auto translate-y-8 transition-all flex justify-center duration-700 ease-out"
    >
      <div className="bg-white border w-full max-w-[382px] sm:w-[362px] border-[#E5E7EB] shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="relative w-full max-w-[382px] h-[320px] sm:w-[360px] sm:h-[300px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
        <div
          ref={contentRef}
          className="px-6 py-5 opacity-0 transition-all duration-500"
        >
          <p className="text-[12px] md:text-[14px] text-[#9F9C9C] font-medium mb-1 font-inter">
            {project.location}
          </p>
          <h3 className="text-[16px] md:text-[18px] font-medium text-[#107BC0] mb-2 font-inter">
            {project.title}
          </h3>

          <div className="flex items-center text-[14px] md:text-[16px] font-medium text-black mb-3 font-inter">
            {StatusIcon}
            <span className="ml-2">{project.status}</span>
          </div>

          <p className="text-[#101114] text-[14px] mb-1 font-inter">
            <strong>INR</strong> <span>{project.price}</span>
          </p>
          <p className="text-[#101114] text-[14px] mb-[20px] font-inter">
            <strong>Possession Date</strong>
            <span> {project.possessionDate}</span>
          </p>
          <Link
            ref={buttonRef}
            href={`/projects/${project.id}`}
            className="font-inter inline-block text-[14px] font-medium text-[#107BC0] border border-[#107BC0] rounded-full px-[10px] md:px-[20px] py-[10px] transition-colors duration-300 hover:bg-[#107BC0] hover:text-white"
          >
            LEARN MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
