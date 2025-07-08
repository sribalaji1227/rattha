"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import LoadingScreen from './LoadingScreen';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();

  // Handle initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Handle route changes
  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setIsNavigating(false);
  };

  return (
    <>
      <LoadingScreen 
        isVisible={isLoading || isNavigating} 
        onComplete={handleLoadingComplete}
      />
      <div className={`transition-opacity duration-500 ${
        (isLoading || isNavigating) ? 'opacity-0' : 'opacity-100'
      }`}>
        {children}
      </div>
    </>
  );
};

export default AppLayout;