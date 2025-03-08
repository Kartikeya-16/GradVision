"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageSquare } from "lucide-react";
import Head from "next/head";

export default function FAQSection() {
  return (
    <>
      <Head>
        <title>FAQs</title>
      </Head>

      <section className="w-full bg-gray-100 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[#0A2472] text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* FAQ Accordion */}
            <div className="flex-1">
              <Accordion type="single" collapsible className="space-y-6">
                
                {/* FAQ Items */}
                {[
                  { id: "mba-vs-pgdm", question: "What is the difference between MBA and PGDM?", answer: "The main difference between an MBA and PGDM lies in the type of institution from where the programs spring. However, generally speaking, MBA programs are run under the aegis of universities, while PGDMs are run under autonomous bodies. The syllabi for the two programs are somewhat similar but include a greater emphasis on work relevance and industry input." },
                  { id: "timing for mba/pgdm", question: "What are the timings for the MBA/PGDM programs?", answer: "Most of the MBA or PGDM programs require typically two years to complete. Some institutions may grant a one-year accelerated study option for experienced professionals." },
                  { id: "can i do mba/pgdm", question: "Can I do an MBA/PGDM while working?", answer: "Sure! Many B-schools offer an evening, weekend, or part-time MBA or PGDM course meant for working professionals that allow you to pursue studies while keeping your job active." },
                  { id: "prepare for mba/pgdm", question: "How do I prepare for MBA/PGDM entrance exams?", answer: "You start preparing for the entrance exam by consulting the syllabus, taking mock tests, and targeting areas such as quantitative aptitude, logical reasoning, and verbal ability. We also offer personal coaching services to help you pass these examinations. " }
                ].map(({ id, question, answer }) => (
                  <AccordionItem 
                    key={id} 
                    value={id} 
                    className="border-2 border-[#012060] shadow-[6px_6px_0px_#012060] rounded-lg"
                  >
                    <AccordionTrigger className="bg-white px-6 py-4 text-left rounded-md hover:no-underline [&[data-state=open]]:rounded-b-none">
                      <span className="text-xl font-bold">{question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="bg-white px-6 py-4 rounded-b-lg mt-[1px]">
                      {answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}

              </Accordion>
            </div>

            {/* Contact Section */}
            <aside className="lg:w-[400px]">
              <div className="bg-white p-8 rounded-lg text-center border-2 border-[#012060]">
                <div className="flex justify-center mb-4">
                  <div className="bg-[#0A2472] p-4 rounded-lg">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h2 className="text-[#0A2472] text-2xl font-bold mb-4">
                  Do you have more questions?
                </h2>
                <p className="text-gray-600 mb-8">
                Feel free to contact us should you have any further questions or need personalized advice regarding the applications for MBA or PGDM programs. We will walk with you through the entire process. Schedule your consultation today, and let us discuss your aspirations!
                </p>
                <button 
                  className="w-full bg-[#E98A15] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#d17913] transition-colors"
                >
                  Shoot a Direct Mail
                </button>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  );
}
