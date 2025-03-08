"use client";

import React from "react";
import Image from "next/image";
import Head from "next/head";

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
        <meta property="og:image" content="/blog/hero.png" />
      </Head>

      <section
        className="bg-[#012060] relative overflow-hidden"
        aria-labelledby="hero-heading"
        role="banner"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-auto lg:h-[538px] relative">
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 pt-6 pb-12 sm:pb-16 space-y-6 md:space-y-8 text-center lg:text-left">
            <div
              className="inline-block px-4 py-2 bg-white rounded-full shadow-lg mx-auto lg:mx-0"
              role="text"
            >
              <p className="text-[#012060] font-extrabold text-sm">
              Explore Our Blogs.
              </p>
            </div>
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-snug sm:leading-tight"
            >
              Your Guide to Knowledge, Industry Trends, and  Success.
            </h1>
            
          </div>

          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full">
            <Image
              src="/blog/hero.png"
              alt="Students engaged in leadership development program in a modern classroom setting"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#012060] to-transparent hidden lg:block"
              aria-hidden="true"
            ></div>
            <div
              className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#012060] to-transparent hidden lg:block"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection; 
