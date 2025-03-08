"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string | ReactNode;
  center?: boolean;
  className?: string;
  subtitleClassName?: string;
  light?: boolean;
  animated?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  center = false,
  className = "",
  subtitleClassName = "",
  light = false,
  animated = true,
}: SectionHeadingProps) {
  const Wrapper = animated ? motion.div : "div";
  const Title = animated ? motion.h2 : "h2";
  const Subtitle = animated ? motion.p : "p";

  return (
    <Wrapper
      className={cn(
        "mb-12 sm:mb-16",
        center && "text-center",
        className
      )}
      initial={animated ? { opacity: 0, y: 20 } : undefined}
      whileInView={animated ? { opacity: 1, y: 0 } : undefined}
      viewport={animated ? { once: true, margin: "-50px" } : undefined}
      transition={animated ? { duration: 0.6 } : undefined}
    >
      <Title 
        className={cn(
          "relative inline-block text-3xl sm:text-4xl font-bold mb-5 tracking-tight",
          light ? "text-white" : "text-[#07336B]",
        )}
      >
        {title}
        <span className={cn(
          "absolute bottom-0 left-0 h-1 w-12",
          center ? "left-1/2 -translate-x-1/2" : "",
          light ? "bg-[#FF7B30]" : "bg-[#FF7B30]"
        )}></span>
      </Title>
      
      {subtitle && (
        <Subtitle 
          className={cn(
            "max-w-3xl text-base sm:text-lg leading-relaxed",
            light ? "text-blue-100" : "text-gray-600",
            center && "mx-auto",
            subtitleClassName
          )}
        >
          {subtitle}
        </Subtitle>
      )}
    </Wrapper>
  );
} 