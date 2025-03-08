"use client"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import messages from "@/message.json";
import Image from "next/image";

const AluminiReviews = () => {
  return (
    <div className="flex flex-col h-auto px-4 md:px-8 mt-6">
      <h2 className='text-[30px] text-center my-5 text-[#012060] font-[700] md:px-12 px-4'>ALUMINI REVIEWS</h2>
      <div className="flex justify-center items-center mb-10 w-full h-auto px-14">
        <Carousel
          plugins={[Autoplay({ delay: 5000 })]}
          className="w-full md:w-4/5 flex flex-col"
        >
          <CarouselContent>
            {messages.map((message, index) => (
              <CarouselItem key={index}>
                <div className="p-2">
                  <Card className="flex flex-col md:flex-row items-center md:items-start">
                    <Image
                      src={message.image}
                      alt={message.title}
                      width={200}
                      height={200}
                      className="w-full md:w-1/2 flex mt-0 md:mt-10 justify-center items-center h-auto p-4 border-none"
                    />
                    <div className="text-center md:text-left p-4">
                      <CardHeader className="text-[24px] font-[700] text-[#3D3D3D]">
                        {message.title}
                      </CardHeader>
                      <CardContent className="flex items-center justify-center p-4">
                        <span className="text-[18px] font-[400] text-[#3D3D3D]">
                          {message.content}
                        </span>
                      </CardContent>
                      <CardFooter className="text-[12px] font-[400] text-[#525252] text-center md:text-start">
                        {message.date}
                      </CardFooter>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default AluminiReviews;
