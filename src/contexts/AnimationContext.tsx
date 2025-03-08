"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type AnimationContextType = {
  prefersReducedMotion: boolean;
  isFirstVisit: boolean;
  setIsFirstVisit: (value: boolean) => void;
  animationsLoaded: boolean;
  setAnimationsLoaded: (value: boolean) => void;
  entranceAnimationsComplete: boolean;
  setEntranceAnimationsComplete: (value: boolean) => void;
};

// Initial default context values
const defaultContext: AnimationContextType = {
  prefersReducedMotion: false,
  isFirstVisit: true,
  setIsFirstVisit: () => {},
  animationsLoaded: false,
  setAnimationsLoaded: () => {},
  entranceAnimationsComplete: false,
  setEntranceAnimationsComplete: () => {},
};

const AnimationContext = createContext<AnimationContextType>(defaultContext);

export const useAnimation = () => useContext(AnimationContext);

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [animationsLoaded, setAnimationsLoaded] = useState(false);
  const [entranceAnimationsComplete, setEntranceAnimationsComplete] = useState(false);

  // Check for user's motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Check if this is the first visit in the session
  useEffect(() => {
    const visitStatus = sessionStorage.getItem('hasVisited');
    if (visitStatus === 'true') {
      setIsFirstVisit(false);
    } else {
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const value = {
    prefersReducedMotion,
    isFirstVisit,
    setIsFirstVisit,
    animationsLoaded,
    setAnimationsLoaded,
    entranceAnimationsComplete,
    setEntranceAnimationsComplete,
  };

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};

export default AnimationProvider; 