"use client";

import React from "react";
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";

const HeroSection = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Educational Leadership Programs",
    "description":
      "Educational programs tailored to build tomorrow's leaders with comprehensive leadership development courses.",
    "image": "/courses/hero.png",
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <meta
          name="description"
          content="Discover our comprehensive educational programs designed to build tomorrow's leaders. Join our transformative leadership development courses."
        />
        <meta
          name="keywords"
          content="leadership programs, education, leadership development, leadership training"
        />
        <meta
          property="og:title"
          content="Leadership Development Programs"
        />
        <meta
          property="og:description"
          content="Tailored educational programs building tomorrow's leaders through comprehensive leadership development."
        />
        <meta property="og:image" content="/courses/hero.png" />
      </Head>

      <section
        className="bg-gradient-to-b from-[#011838] to-[#07336B] relative overflow-hidden"
        aria-labelledby="hero-heading"
        role="banner"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('/homepage/grid-pattern.png')] bg-repeat opacity-5 z-0"></div>
        
        {/* Animated floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${
                i % 2 === 0 ? "bg-[#FF7B30]/30" : "bg-white/20"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 30 + 10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-auto lg:h-[600px] relative">
          <motion.div 
            className="px-4 sm:px-6 md:px-8 lg:px-12 pt-8 pb-12 sm:pb-16 space-y-6 md:space-y-8 text-center lg:text-left relative z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.03, 0.26, 1.0] }}
          >
            <motion.div
              className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full shadow-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              role="text"
            >
              <p className="text-white font-bold text-sm flex items-center">
                <span className="w-2 h-2 bg-[#FF7B30] rounded-full mr-2 animate-pulse"></span>
                Admission Process
              </p>
            </motion.div>
            
            <motion.h1 
              id="hero-heading" 
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-snug sm:leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="block">Your Journey to</span>
              <span className="bg-gradient-to-r from-white to-blue-200 text-transparent bg-clip-text">Excellence Begins Here.</span>
            </motion.h1>
            
            <motion.p 
              className="text-white/90 text-base sm:text-lg max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Discover our comprehensive educational programs designed to
              develop future leaders through practical and theoretical
              leadership training.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              className="pt-4"
            >
              <a 
                href="#admission-process" 
                className="inline-flex items-center bg-gradient-to-r from-[#FF7B30] to-[#FF5B15] text-white px-8 py-3 rounded-full hover:from-[#FF5B15] hover:to-[#FF7B30] transition-all duration-300 font-medium shadow-lg"
              >
                Explore Admission Process
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute inset-0 overflow-hidden rounded-l-3xl lg:rounded-none">
              <Image
                src="/admission/hero.png"
                alt="Students engaged in leadership development program in a modern classroom setting"
                fill
                className="object-cover object-center scale-[1.01]"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#011838]/80 to-transparent"></div>
              <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#011838] to-transparent hidden lg:block"></div>
              <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#011838] to-transparent hidden lg:block"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative wave shape at the bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto text-gray-50">
            <path fill="currentColor" fillOpacity="1" d="M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,48C672,32,768,32,864,48C960,64,1056,96,1152,96C1248,96,1344,64,1392,48L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export default HeroSection; 
