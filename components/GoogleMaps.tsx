'use client';
import React, { useEffect, useRef } from 'react';
import Script from 'next/script';

const GoogleMaps: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const isMapInitialized = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const originalConsoleError = console.error;

      console.error = (...args) => {
        const [message] = args;
        if (
          typeof message === 'string' &&
          message.includes('Google Maps JavaScript API error')
        ) {
          return; 
        }
        originalConsoleError(...args);
      };

      return () => {
        console.error = originalConsoleError;
      };
    }
  }, []);

useEffect(() => {
  const initMap = () => {
    if (
      typeof window !== "undefined" &&
      window.google &&
      mapRef.current &&
      !isMapInitialized.current
    ) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 22.9734, lng: 78.6569 },
        zoom: 5,
      });

      const transitLayer = new window.google.maps.TransitLayer();
      transitLayer.setMap(map);

      isMapInitialized.current = true;
    }
  };

  if (window.google) {
    initMap();
  } 
  // else {
  //   window.initMap = initMap; // no `any` cast needed
  // }
}, []);


  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=&callback=myMap`}
        strategy="afterInteractive"
        onError={() => {
          console.error('Google Maps script failed to load.');
        }}
      />
       
      <div
        ref={mapRef}
        suppressHydrationWarning
        id="map"
        className="max-w-[1160px] h-[726px] m-auto mb-[158px] bg-gray-100"
      />
    </>
  );
};

export default GoogleMaps;