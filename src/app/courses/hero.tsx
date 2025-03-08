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
        <meta property="og:image" content="/courses/hero.png" />
      </Head>

      <section
        className="bg-[#012060] relative overflow-hidden"
        aria-labelledby="hero-heading"
        role="banner"
      >
        <div className="grid lg:grid-cols-2 items-center h-auto lg:h-[650px] relative">
          <div className="px-6 py-12 space-y-6 sm:py-16 sm:px-8 md:space-y-8 lg:px-12">
            <div
              className="inline-block px-4 py-2 bg-white rounded-full shadow-lg"
              role="text"
            >
              <p className="text-[#012060] font-extrabold  text-sm">
                Our Programs
              </p>
            </div>
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-snug sm:leading-tight"
            >
              Tailored to Build Tomorrow&apos;s Leaders.
            </h1>
            <div className="sr-only">
              <p>
                Discover our comprehensive educational programs designed to
                develop future leaders through practical and theoretical
                leadership training.
              </p>
            </div>
          </div>

          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-full">
            <Image
              src="/courses/hero.png"
              alt="Students engaged in leadership development program in a modern classroom setting"
              fill
              className="rounded-none object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#012060] to-transparent"
              aria-hidden="true"
            ></div>
            <div
              className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#012060] to-transparent"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
