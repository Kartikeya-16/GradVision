"use client"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useState } from "react"
import { type SyntheticEvent } from "react"

const testimonials = [
  {
    id: 1,
    quote:
      "Thanks to BeSchool4U, I made it to IIM Ahmedabad! The team helped in choosing the right schools and was a great support throughout the essay-writing and the interview prep. Their expertise was the icing on the cake!",
    author: "John Doe",
    role: "IIM Ahmedabad",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    logo: "/homepage/penn.png",
  },
  {
    id: 2,
    quote: "I was stuck in a tussle between schools; but fortunately, with the personalized counseling, I made an informed choice and got into SPJIMR. The attention to detail was amazing!",
    author: "Jane Smith",
    role: "SPJIMR",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    logo: "/homepage/penn.png",
  },
  {
    id: 3,
    quote: "The whole process of MBA applications can be intimidating; however, [Your Firm Name] assured me through it all. Their essay editing and interview prep were perfect. I highly recommended their services.",
    author: "Michael Johnson",
    role: "ISB",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    logo: "/homepage/penn.png",
  },
  {
    id: 4,
    quote: "I had a wonderful experience working with [Your Firm Name]. The whole point was that they helped me with my story and their coaching took away the stress of the interview. And now, I am a proud XLRI student!",
    author: "Emma Davis",
    role: "XLRI",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    logo: "/homepage/penn.png",
  },
  {
    id: 5,
    quote: "The consultants were knowledgeable; they were always on call to answer any of my questions. Because of them, I got into Harvard Business School, my dream school!",
    author: "William Brown",
    role: "Harvard Business School",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    logo: "/homepage/penn.png",
  },
  {
    id: 6,
    quote: "I never thought I had a chance to get into any upper-tier schools. [Your Firm Name] guided me in strengthening my application to enter INSEAD.",
    author: "Sophia Wilson",
    role: "INSEAD",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    logo: "/homepage/penn.png",
  },
  {
    id: 7,
    quote: "I had absolutely no idea how to even proceed with my MBA-specific application, but the team listed everything step by step for me. The insights were extremely helpful, and now I am a student at MIT Sloan!",
    author: "James Taylor",
    role: "MIT Sloan",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    logo: "/homepage/penn.png",
  },
  {
    id: 8,
    quote: "I would never have been able to traverse my admissions process without [Your Firm Name]'s guidance. They were highly expert and dedicated in their advice. And I am now going to Wharton!",
    author: "Olivia Harris",
    role: "Wharton School of Business",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    logo: "/homepage/penn.png",
  },
  {
    id: 9,
    quote: "The personalized attention certainly made things easier. I am sincerely grateful to them to help me make it to IIM Bangalore.",
    author: "Benjamin Clark",
    role: "IIM Bangalore",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    logo: "/homepage/penn.png",
  },
  {
    id: 10,
    quote: "The support I received throughout my application journey from the team was amazing: from school selection to essay editing. I am now at London Business School!",
    author: "Amelia Lewis",
    role: "London Business School",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    logo: "/homepage/penn.png",
  },
  {
    id: 11,
    quote: "I cannot thank [Your Firm Name] enough for their unwavering support. They provided ample insight into my profile and great advice on the way forward. As a result, I did get into one of the best business schools in the world!",
    author: "David Walker",
    role: "Stanford Graduate School of Business",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    logo: "/homepage/penn.png",
  },
]

export default function TestimonialSection() {
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  // Let's remove the onSelect prop since it might not be properly integrated with
  // this specific Carousel component. Instead, we'll rely on an existing feature
  // in the Carousel component to track the active slide, or we could use a ref instead.

  return (
    <section className="bg-gradient-to-r from-sky-50 to-indigo-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" aria-labelledby="testimonial-heading">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-indigo-200 opacity-20 blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <h2 id="testimonial-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A4DA2] mb-4 leading-tight">
            Success Stories
          </h2>
          <div className="w-24 h-1.5 bg-[#FF7B30] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-700 max-w-2xl mx-auto text-lg">
            Hear from our students who achieved their dream of getting into top business schools around the world.
          </p>
        </div>

        <Carousel className="w-[95%] sm:w-[90%] mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="p-7 sm:p-9 md:w-2/3 relative">
                    <svg className="absolute top-6 left-6 text-[#FF7B30]/20 w-14 h-14" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.7,8c1.1,0,2,0.4,2.7,1.1C14.1,9.9,14.5,10.8,14.5,12c0,1.1-0.3,2.5-1,4.2c-0.7,1.7-1.3,3-2,4
	                    c-0.7,1-1.4,1.9-2.1,2.7c-0.8,0.8-1.4,1.3-2,1.5l-1.1-2.2c1.1-0.7,2.1-1.8,3-3.5c0.9-1.7,1.3-3.1,1.3-4.3
	                    c-0.1,0-0.3,0.1-0.4,0.1c-0.1,0-0.3,0-0.4,0c-1,0.1-1.8-0.2-2.5-0.9c-0.7-0.7-1-1.6-1-2.7c0-1.1,0.4-2,1.1-2.8
	                    C8.2,8.4,9.1,8,10.7,8z M24.7,8c1.1,0,2,0.4,2.7,1.1c0.7,0.7,1.1,1.6,1.1,2.8c0,1.1-0.3,2.5-1,4.2s-1.3,3-2,4
	                    c-0.7,1-1.4,1.9-2.1,2.7c-0.8,0.8-1.4,1.3-2,1.5l-1.1-2.2c1.1-0.7,2.1-1.8,3-3.5c0.9-1.7,1.3-3.1,1.3-4.3
	                    c-0.1,0-0.3,0.1-0.4,0.1c-0.1,0-0.3,0-0.4,0c-1,0.1-1.8-0.2-2.5-0.9c-0.7-0.7-1-1.6-1-2.7c0-1.1,0.4-2,1.1-2.8
	                    C22.1,8.4,23.1,8,24.7,8z"/>
                    </svg>
                    <blockquote className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-7 pt-4 pl-4">
                      <p className="line-clamp-6 md:line-clamp-none leading-relaxed">{testimonial.quote}</p>
                    </blockquote>
                    <div className="flex items-center">
                      <div className="border-l-4 border-[#FF7B30] pl-4 py-1 flex-1">
                        <p className="font-bold text-[#0A4DA2] text-lg">{testimonial.author}</p>
                        <p className="text-sm text-slate-600 font-medium">{testimonial.role}</p>
                      </div>
                      <div className="w-24 sm:w-32 opacity-90 flex-shrink-0 pl-4">
                        <Image
                          src={testimonial.logo || "/placeholder.svg"}
                          alt="University logo"
                          width={128}
                          height={64}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="relative md:w-1/3 bg-gradient-to-br from-[#0A4DA2] to-[#1268D3] flex items-center justify-center p-7 sm:p-9">
                    <div
                      className="absolute w-36 h-36 sm:w-48 sm:h-48 bg-[#FF7B30]/20 rounded-full -z-10 blur-lg"
                      aria-hidden="true"
                    ></div>
                    <div className="relative w-full max-w-xs overflow-hidden rounded-xl border-4 border-white/30 shadow-xl">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt="Graduate student smiling"
                        width={320}
                        height={320}
                        className="w-full h-auto transition-transform duration-700 hover:scale-110"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden sm:block">
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/80 hover:bg-white border-none shadow-lg" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white/80 hover:bg-white border-none shadow-lg" />
          </div>
        </Carousel>

        {/* Dot indicators for mobile */}
        <div className="flex justify-center mt-6 sm:hidden">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`h-2.5 w-2.5 mx-1 rounded-full transition-all duration-300 ${
                currentSlide === i ? "bg-[#FF7B30] w-6" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}