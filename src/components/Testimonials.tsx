
"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Michael Chen",
    location: "Singapore",
    review:
      '"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."',
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=90",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    location: "New York, USA",
    review:
      '"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"',
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=90",
  },
  {
    id: 3,
    name: "David Wilson",
    location: "London, UK",
    review:
      '"ORVELLA made our Thailand vacation truly unforgettable. Everything was organized perfectly, and the experience was amazing from beginning to end."',
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=90",
  },
  {
    id: 4,
    name: "Emily Davis",
    location: "Toronto, Canada",
    review:
      '"Our Maldives trip was beyond beautiful. The service, hotel, and travel arrangements were excellent. I would definitely travel with ORVELLA again!"',
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=500&q=90",
  },
];

const Testimonials = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!carouselApi) return;

    const intervalId = window.setInterval(() => {
      carouselApi.scrollNext();
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, [carouselApi]);

  return (
    <section id="testimonials" className="w-full bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          setApi={setCarouselApi}
        >
          {/* Section Header */}
          <div className="mb-11 flex items-center justify-between">
            <div>
              <h2 className="font-serif text-4xl font-normal tracking-tight text-[#111111] md:text-5xl lg:text-[56px]">
                What Travelers Say
              </h2>

              <p className="mt-2 text-base text-[#777777] md:text-lg">
                Real experiences from our happy travelers
              </p>
            </div>

            {/* Carousel Navigation */}
            <div className="hidden items-center gap-4 sm:flex">
              <CarouselPrevious className="neon-button static size-[60px] translate-y-0 rounded-full border-x-[#08a8c8] border-t-[#08a8c8] border-b-[#002c50] bg-white text-[#aaaaaa] shadow-none hover:bg-white hover:text-[#08a8c8]" />

              <CarouselNext className="neon-button static size-[60px] translate-y-0 rounded-full border-x-[#08a8c8] border-t-[#08a8c8] border-b-[#002c50] bg-white text-[#aaaaaa] shadow-none hover:bg-white hover:text-[#08a8c8]" />
            </div>
          </div>

        {/* Testimonials Carousel */}
          <CarouselContent className="-ml-3">

            {testimonials.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-3 md:basis-1/2"
              >
                <Card className="group h-full overflow-hidden rounded-2xl border border-[#e8e8e8] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#08a8c8]/50 hover:shadow-lg hover:shadow-cyan-900/10">
                  <CardContent className="flex h-full min-h-[310px] gap-4 p-5 md:gap-5 md:p-6">

                    {/* Review Content */}
                    <div className="flex min-w-0 flex-1 flex-col justify-between">

                      <p className="font-serif text-[18px] leading-[1.22] text-[#111111] md:text-[21px]">
                        {item.review}
                      </p>

                      <div className="mt-5">
                        <h3 className="text-[17px] font-normal text-[#08a8c8]">
                          — {item.name}
                        </h3>

                        <p className="pl-6 text-sm text-[#888888]">
                          {item.location}
                        </p>
                      </div>

                    </div>

                    {/* Traveler Image */}
                    <div className="w-[38%] shrink-0 overflow-hidden rounded-xl">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full min-h-[250px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                  </CardContent>
                </Card>
              </CarouselItem>
            ))}

          </CarouselContent>

          {/* Mobile Navigation */}
          <div className="mt-6 flex justify-end gap-3 sm:hidden">
            <CarouselPrevious className="neon-button static size-11 translate-y-0 rounded-full border-x-[#08a8c8] border-t-[#08a8c8] border-b-[#002c50] shadow-none" />
            <CarouselNext className="neon-button static size-11 translate-y-0 rounded-full border-x-[#08a8c8] border-t-[#08a8c8] border-b-[#002c50] shadow-none" />
          </div>
        </Carousel>

      </div>
    </section>
  );
};

export default Testimonials;
