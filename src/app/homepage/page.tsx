"use client"

import Nav from './navbar'
import Banner from './banner';
import Hero from './hero';
import AboutUs from './aboutus';
import ProgramsOffered from './programs';
import App from './app';
import Wherework from './work'
import TestimonialSection from './testomonials';
import Getintouch from './getintouch';
import AccreditationsSection from './AccreditationsSection.';
import WelcomeAnimation from '@/components/ui/WelcomeAnimation';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { useEffect, useState } from 'react';

export default function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Start rendering the content after the welcome animation
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000); // Slightly before welcome animation ends
    
    return () => clearTimeout(timer);
  }, []);

  // Stagger delay calculation for smoother visual flow
  const getStaggerDelay = (index: number) => {
    return index * 0.15; // 150ms stagger between sections
  };

  return (
    <main className="overflow-hidden bg-gray-50 selection:bg-[#FF7B30] selection:text-white">
      <WelcomeAnimation />
      
      <Banner />
      
      {/* Hero section doesn't need a wrapper as it has its own animations */}
      <Hero/>
      
      {/* Other sections with alternating backgrounds and staggered animations */}
      <AnimatedSection 
        animation="fadeInUp" 
        delay={getStaggerDelay(0)} 
        duration={0.7}
        className="mt-0" // Remove top margin due to the wave shape in hero
      >
        <AboutUs/>
      </AnimatedSection>
      
      <AnimatedSection 
        animation="fadeInRight" 
        delay={getStaggerDelay(1)} 
        duration={0.7}
      >
        <ProgramsOffered/>
      </AnimatedSection>
      
      <AnimatedSection 
        animation="fadeInLeft" 
        delay={getStaggerDelay(2)} 
        duration={0.7}
      >
        <Wherework/>    
      </AnimatedSection>
      
      <AnimatedSection 
        animation="scale" 
        delay={getStaggerDelay(3)} 
        duration={0.7}
      >
        <App/>
      </AnimatedSection>
      
      <AnimatedSection 
        animation="fadeInUp" 
        delay={getStaggerDelay(4)} 
        duration={0.7}
      >
        <TestimonialSection/>
      </AnimatedSection>
      
      <AnimatedSection 
        animation="fadeInRight" 
        delay={getStaggerDelay(5)} 
        duration={0.7}
      >
        <Getintouch/>
      </AnimatedSection>
      
      <AnimatedSection 
        animation="fadeIn" 
        delay={getStaggerDelay(6)} 
        duration={0.7}
      >
        <AccreditationsSection/>
      </AnimatedSection>
    </main>
  );
}
