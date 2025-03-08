"use client";

import { ReactNode, JSX } from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: keyof JSX.IntrinsicElements;
  bgColor?: "white" | "gray" | "blue" | "orange" | "transparent";
  withPattern?: boolean;
}
//sectionContainerFunction
export default function SectionContainer({
  children,
  className,
  id,
  as: Component = "section",
  bgColor = "white",
  withPattern = false,
}: SectionContainerProps) {
  const bgClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    blue: "bg-gradient-to-b from-[#011838] to-[#07336B] text-white",
    orange: "bg-gradient-to-r from-[#FF7B30] to-[#FF5B15] text-white",
    transparent: "",
  };

  return (
    <Component
      id={id}
      className={cn(
        "py-16 sm:py-24 overflow-hidden relative",
        bgClasses[bgColor],
        className
      )}
    >
      {/* Optional pattern background */}
      {withPattern && (
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/homepage/grid-pattern.png')] bg-repeat"></div>
        </div>
      )}
      
      {/* Subtle light effects for blue background */}
      {bgColor === "blue" && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[15%] w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-3xl"></div>
          <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] rounded-full bg-[#FF7B30]/10 blur-3xl"></div>
        </div>
      )}
      
      <div className="container mx-auto px-6 sm:px-8 max-w-screen-xl relative z-10">
        {children}
      </div>
    </Component>
  );
} 