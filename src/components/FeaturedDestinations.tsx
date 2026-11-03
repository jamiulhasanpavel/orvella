"use client";

import { useEffect, useState } from "react";
import {
  MapPin,
  Star,
  CalendarDays,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const destinations = [
  {
    id: 1,
    country: "Maldives",
    name: "Maldives Paradise",
    price: 2700,
    duration: "7 Days/6 Nights",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 2,
    country: "Indonesia",
    name: "Bali Paradise",
    price: 2700,
    duration: "7 Days/6 Nights",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 3,
    country: "Nepal",
    name: "Mountain Escape",
    price: 1800,
    duration: "5 Days/4 Nights",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 4,
    country: "Switzerland",
    name: "Swiss Adventure",
    price: 3200,
    duration: "8 Days/7 Nights",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 5,
    country: "Thailand",
    name: "Tropical Thailand",
    price: 1500,
    duration: "6 Days/5 Nights",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1000&q=90",
  },
];

const FeaturedDestinations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!carouselApi) return;

    const intervalId = window.setInterval(() => {
      carouselApi.scrollNext();
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, [carouselApi]);

  useEffect(() => {
    if (!carouselApi) return;

    const updateCurrentIndex = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", updateCurrentIndex);
    carouselApi.on("reInit", updateCurrentIndex);

    return () => {
      carouselApi.off("select", updateCurrentIndex);
      carouselApi.off("reInit", updateCurrentIndex);
    };
  }, [carouselApi]);

  return (
    <section id="featured-destinations" className="w-full overflow-hidden bg-white py-20 md:py-24">
      <Carousel
        opts={{ align: "start", loop: true }}
        setApi={setCarouselApi}
        className="mx-auto max-w-[1440px] pl-5 md:pl-10 lg:pl-20"
      >

        {/* Heading */}
        <div className="mb-11 flex items-center justify-between gap-5 pr-5 md:pr-10 lg:pr-20">
          <div>
            <h2 className="text-4xl font-normal tracking-tight text-[#111111] md:text-5xl lg:text-[56px]">
              Featured Destinations
            </h2>

            <p className="mt-2 text-base text-[#777777] md:text-lg">
              Handpicked travel experiences for the adventure seekers
            </p>
          </div>

          <a
            href="/destinations"
            className="animated-rounded-border neon-button hidden shrink-0 items-center gap-5 rounded-full border border-[#08a8c8] px-6 py-4 text-sm font-medium text-[#08a8c8] transition hover:bg-[#08a8c8] hover:text-white sm:flex"
          >
            <span className="button-content gap-5">
              ALL DESTINATIONS
              <ArrowRight size={20} />
            </span>
          </a>
        </div>

        {/* Destination Cards */}
        <CarouselContent className="-ml-6 pr-5 lg:pr-0">
          {destinations.map((destination) => (
            <CarouselItem
              key={destination.id}
              className="basis-full pl-6 md:basis-1/2 lg:basis-1/3"
            >
              <div className="group/card overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#08a8c8]/50 hover:shadow-xl hover:shadow-cyan-900/10">

              {/* Image */}
              <div className="relative h-[300px] overflow-hidden md:h-[340px] lg:h-[400px]">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                />

                {/* Rating */}
                <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-white/60 bg-white/85 px-4 py-2 text-sm font-semibold text-black backdrop-blur-sm">
                  {destination.rating}
                  <Star size={18} fill="black" />
                </div>
              </div>

              {/* Details */}
              <div className="px-5 pb-5 pt-6">

                <div className="flex items-center gap-2 text-[#777777]">
                  <MapPin size={18} />
                  <span className="text-base">
                    {destination.country}
                  </span>
                </div>

                <div className="mt-3 flex items-start justify-between gap-3">
                  <h3 className="font-serif text-2xl font-normal tracking-tight text-[#111111] md:text-[28px]">
                    {destination.name}
                  </h3>

                  <div className="shrink-0 text-right">
                    <span className="font-serif text-2xl text-[#111111] md:text-[28px]">
                      ${destination.price}
                    </span>
                    <span className="text-sm text-[#777777]">
                      /Person
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-2 text-[#777777]">
                  <CalendarDays size={17} />
                  <span className="text-base">
                    {destination.duration}
                  </span>
                </div>

                <a
                  href={`/destinations/${destination.id}`}
                  className="animated-rounded-border neon-button mt-7 inline-flex items-center gap-3 rounded-full border border-[#08a8c8] px-4 py-2 text-sm font-medium text-[#08a8c8] transition hover:text-[#006b91]"
                >
                  <span className="button-content gap-3">
                    BOOK NOW
                    <ArrowUpRight size={20} />
                  </span>
                </a>
              </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Carousel Controls */}
        <div className="mt-14 flex items-center gap-5 pr-5 md:pr-10 lg:pr-20">

          <span className="text-2xl font-normal text-[#111111]">
            {currentIndex + 1}/{destinations.length}
          </span>

          <div className="h-[2px] flex-1 bg-[#e5e5e5]" />

          <CarouselPrevious
            aria-label="Previous destinations"
            className="animated-rounded-border neon-button static size-[60px] translate-y-0 rounded-full border-x-[#08a8c8] border-t-[#08a8c8] border-b-[#002c50] bg-white text-[#aaaaaa] shadow-none hover:bg-white hover:text-[#08a8c8]"
          />
          <CarouselNext
            aria-label="Next destinations"
            className="animated-rounded-border neon-button static size-[60px] translate-y-0 rounded-full border-x-[#08a8c8] border-t-[#08a8c8] border-b-[#002c50] bg-white text-[#aaaaaa] shadow-none hover:bg-white hover:text-[#08a8c8]"
          />
        </div>

      </Carousel>
    </section>
  );
};

export default FeaturedDestinations;
