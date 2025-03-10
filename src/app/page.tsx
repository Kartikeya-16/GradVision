"use client";

import { useEffect } from 'react';
import Banner from './homepage/banner';
import Hero from './homepage/hero';
import AboutUs from './homepage/aboutus';
import ProgramsOffered from './homepage/programs';
import App from './homepage/app';
import Wherework from './homepage/work';
import TestimonialSection from './homepage/testomonials';
import Getintouch from './homepage/getintouch';
import AccreditationsSection from './homepage/AccreditationsSection.';
import WelcomeAnimation from '@/components/ui/WelcomeAnimation';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function Home() {
  useEffect(() => {
    // Ensure animations start after a short delay
    const timer = setTimeout(() => {}, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Stagger delay calculation for smoother visual flow
  const getStaggerDelay = (index: number) => index * 0.15; // 150ms stagger between sections

  return (
    <main>
      {/* Hero section */}
      <Hero />
      
      {/* Other sections with animations */}
      <AnimatedSection delay={getStaggerDelay(0)}>
        <Banner />
      </AnimatedSection>
      
      <AnimatedSection delay={getStaggerDelay(1)}>
        <AboutUs />
      </AnimatedSection>
      
      <AnimatedSection delay={getStaggerDelay(2)}>
        <ProgramsOffered />
      </AnimatedSection>
      
      <AnimatedSection delay={getStaggerDelay(3)}>
        <App />
      </AnimatedSection>
      
      <AnimatedSection delay={getStaggerDelay(4)}>
        <Wherework />
      </AnimatedSection>
      
      <AnimatedSection delay={getStaggerDelay(5)}>
        <TestimonialSection />
      </AnimatedSection>
      
      <AnimatedSection delay={getStaggerDelay(6)}>
        <AccreditationsSection />
      </AnimatedSection>
      
      <AnimatedSection delay={getStaggerDelay(7)}>
        <Getintouch />
      </AnimatedSection>
      
      <WelcomeAnimation />
    </main>
  );
}