"use client";
import Image from "next/image";

export default function ProgramHighlights() {
  return (
    <section className="bg-white py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-[#00205B] mb-8">
          PROGRAM HIGHLIGHTS
        </h2>
        <div className="relative">
          <div className="max-w-[70%]">
            <ul className="space-y-6 text-lg text-[#4A4A4A]">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <div>
                  <span className="font-semibold text-[#333333]">Global Recognition:</span> Recognized worldwide, MBAs and PGDMs offer global career opportunities.
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <div>
                  <span className="font-semibold text-[#333333]">Expert Faculty:</span> Enjoy engaging classes taught by an array of accomplished professionals in the industry and qualified academicians able to imbue their sessions with real-world knowledge.
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <div>
                  <span className="font-semibold text-[#333333]">Real-Life Experience:</span> An experience that offers internships, live projects, and collaboration with industry practitioners.
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <div>
                  <span className="font-semibold text-[#333333]">Career Support:</span> Placement cell; career fairs; career counseling and support to help you further your career and to provide placements for respective career options.
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <div>
                  <span className="font-semibold text-[#333333]">Alumni Network:</span> A strong alumni network offering mentoring, career guidance, and collaboration opportunities.
                </div>
              </li>
            </ul>
          </div>
          <div className="absolute top-[-40px] right-0 w-64 h-64">
            <Image
              src="/courses/ph.png"
              alt="Students studying"
              fill
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}