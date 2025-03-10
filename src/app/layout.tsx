import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import PopupForm from "./homepage-components/PopupForm";
import Footer from "./homepage/Footer";
import Nav from './homepage/navbar';
import AnimationProvider from "@/contexts/AnimationContext";
import PageTransition from "@/components/ui/PageTransition";
import ScrollToTop from "@/components/ui/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GradVision - Your Guide to Academic Excellence",
  description: "Navigate your path to top business schools and academic success with expert admissions consulting and personalized guidance for your educational journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-[#FF7B30] selection:text-white`}
      >
        <AnimationProvider>
          <Nav />
          {/* <PopupForm/> */}
          
          <PageTransition>
            {children}
          </PageTransition>

          <Footer/>
          <ScrollToTop />
        </AnimationProvider>
      </body>
    </html>
  );
}
