"use client";

import { useEffect, useState } from 'react';

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Handle initial page load
    const handleLoad = () => setIsLoading(false);
    const handleBeforeUnload = () => setIsLoading(true); 

    // Listen for browser navigation
    window.addEventListener('load', handleLoad);
    window.addEventListener('beforeunload', handleBeforeUnload);
    
  
    return () => {
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return { isLoading, setIsLoading };
};