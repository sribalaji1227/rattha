"use client";

import { useEffect, useState } from "react";
import { logo } from "@/constants/assets";
import Image from "next/image";

interface LoadingScreenProps {
  isVisible?: boolean;
  onComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  isVisible = true,
  onComplete,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    // Reset states when component becomes visible
    setProgress(0);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            onComplete?.();
          }, 500);
          return 100;
        }
        const increment = Math.random() * 15 + 5;
        return Math.min(prev + increment, 100);
      });
    }, 200);

    return () => {
      clearInterval(progressInterval);
    };
  }, [isVisible, onComplete]);

  // Reset progress when component unmounts or becomes invisible
  useEffect(() => {
    if (!isVisible) {
      setProgress(0);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-blue-500 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-blue-400 rotate-12 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 border border-blue-300 -rotate-12 animate-pulse delay-500"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 border border-blue-600 rotate-45 animate-pulse delay-700"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        {/* Logo Section */}
        <div>
          {/* Logo Image */}
          <div className="mb-5 md:mb-5">
            <Image
              src={logo}
              width={223}
              height={45}
              alt="RATTHA REALTY Logo"
              className="w-[180px] md:w-[223px] h-auto mx-auto"
              priority
            />
          </div>

          {/* Decorative Line - Progress Indicator */}
          <div className="w-32 md:w-40 h-[2px] bg-gray-700 mx-auto mb-6 md:mb-8 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 transition-all duration-300 ease-out shadow-lg"
              style={{
                width: `${progress}%`,
                boxShadow: "0 0 15px rgba(59, 130, 246, 0.8)",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50"></div>
    </div>
  );
};

export default LoadingScreen;
