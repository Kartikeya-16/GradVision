"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [

     { 
      href: '/homepage', 
      text: 'Home',
      description: 'Return to our main MBA consulting homepage'
    },
   
    { 
      href: '/courses', 
      text: 'MBA Programs',
      description: 'Explore top MBA and PGDM program options and requirements'
    },
    { 
      href: '/admission', 
      text: 'Admissions Help',
      description: 'Get expert guidance on the MBA application process'
    },
    // { 
    //   href: '/events', 
    //   text: 'Events & Webinars',
    //   description: 'Upcoming educational events and online webinars'
    // },
    // { 
    //   href: '/contact', 
    //   text: 'Contact Us',
    //   description: 'Get in touch with our admissions team'
    // },
    { 
      href: '/blog', 
      text: 'MBA Insights',
      description: 'Expert articles and tips for MBA applicants'
    },
    // { 
    //   href: '/university', 
    //   text: 'University Page',
    //   description: 'Comprehensive information about our university'
    // },
    { 
      href: '/catprecentilecalculator', 
      text: 'CAT Calculator',
      description: 'Calculate your CAT exam score and percentile'
    },
    { 
      href: '/about', 
      text: 'Our Expertise',
      description: 'Learn about our MBA consulting experience and success stories'
    },
  ];

  return (
    <>
      <Head>
        <link rel="preload" href="/homepage/navlogo.png" as="image" />
        {/* Add structured data for organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "GradVision",
              "url": "https://gradvision.com",
              "logo": "https://gradvision.com/homepage/navlogo.png",
              "sameAs": [
                "https://www.facebook.com/gradvision",
                "https://twitter.com/gradvision",
                "https://www.linkedin.com/company/gradvision"
              ]
            })
          }}
        />
      </Head>

      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#010e20]/95 shadow-lg shadow-blue-900/30">
        <nav className="container mx-auto px-4 py-4" aria-label="Main navigation" role="navigation">
          <div className="flex items-center justify-between">
            {/* Logo with semantic markup */}
            <div className="flex items-center">
              <Link href="/" aria-label="Return to homepage" className="transition-transform duration-300 hover:scale-105">
                <div itemScope itemType="https://schema.org/Organization" className="flex items-center gap-3">
                  <Image
                    src="/homepage/navlogo.png"
                    alt="GradVision Logo"
                    width={50}
                    height={50}
                    priority
                    itemProp="logo"
                    className="drop-shadow-[0_0_8px_rgba(255,123,48,0.3)]"
                  />
                  <span className="hidden sm:block text-white font-bold text-xl tracking-tight bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Grad<span className="text-orange-500">Vision</span></span>
                </div>
              </Link>
            </div>

            {/* Mobile Menu Button with ARIA */}
            <button
              className="lg:hidden text-white hover:text-orange-500 transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Desktop Navigation with Semantic HTML */}
            <div className="hidden lg:block" role="navigation">
              <ul className="flex space-x-1 text-white text-sm font-semibold">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="relative px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300 group flex items-center"
                      title={link.description}
                      aria-label={link.description}
                    >
                      <span className="relative z-10">{link.text}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-orange-500 to-orange-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Join Now Button & Search */}
            <div className="hidden lg:flex items-center gap-4">
              <button 
                aria-label="Open search"
                title="Search our website"
                className="text-white hover:text-orange-500 transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <Link href="/admission" className="bg-gradient-to-r from-[#FF7B30] to-[#FF5B15] text-white px-5 py-2 rounded-full hover:shadow-[0_0_15px_rgba(255,123,48,0.5)] transition-all duration-300 font-medium text-sm">
                Get MBA Consulting
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Menu with ARIA */}
          <div
            id="mobile-menu"
            className={`${
              isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            } lg:hidden mt-4 overflow-hidden transition-all duration-500 ease-in-out border-t border-gray-700/50`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="mobile-menu-button"
          >
            <ul className="text-white text-sm font-semibold pt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href} className="py-2" role="none">
                  <Link
                    href={link.href}
                    className="block px-4 py-2 hover:bg-white/10 rounded-lg transition-colors duration-300 hover:text-orange-500"
                    onClick={() => setIsMenuOpen(false)}
                    title={link.description}
                    aria-label={link.description}
                    role="menuitem"
                  >
                    <span itemProp="name">{link.text}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2 pb-4">
                <Link 
                  href="/admission" 
                  className="block mx-4 text-center bg-gradient-to-r from-[#FF7B30] to-[#FF5B15] text-white px-5 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get MBA Consulting
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;