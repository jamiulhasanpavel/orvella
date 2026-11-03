"use client";

import { useState } from "react";
import {
  MapPin,
  Star,
  CalendarDays,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % destinations.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + destinations.length) % destinations.length
    );
  };

  const visibleDestinations = Array.from(
    { length: 3 },
    (_, i) => destinations[(currentIndex + i) % destinations.length]
  );

  return (
    <section className="w-full overflow-hidden bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[1440px] pl-5 md:pl-10 lg:pl-20">

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
            className="hidden shrink-0 items-center gap-5 border border-[#08a8c8] px-6 py-4 text-sm font-medium text-[#08a8c8] transition hover:bg-[#08a8c8] hover:text-white sm:flex"
          >
            ALL DESTINATIONS
            <ArrowRight size={20} />
          </a>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 gap-6 pr-5 md:grid-cols-2 lg:grid-cols-3 lg:pr-0">

          {visibleDestinations.map((destination) => (
            <div key={destination.id} className="min-w-0">

              {/* Image */}
              <div className="group relative h-[300px] overflow-hidden md:h-[340px] lg:h-[400px]">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Rating */}
                <div className="absolute right-5 top-5 flex items-center gap-2 border border-white/60 bg-white/80 px-4 py-2 text-sm font-semibold text-black backdrop-blur-sm">
                  {destination.rating}
                  <Star size={18} fill="black" />
                </div>
              </div>

              {/* Details */}
              <div className="pt-6">

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
                  className="mt-7 inline-flex items-center gap-3 text-sm font-medium text-[#08a8c8] transition hover:text-[#006b91]"
                >
                  BOOK NOW
                  <ArrowUpRight size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="mt-14 flex items-center gap-5 pr-5 md:pr-10 lg:pr-20">

          <span className="text-2xl font-normal text-[#111111]">
            {currentIndex + 1}/{destinations.length}
          </span>

          <div className="h-[2px] flex-1 bg-[#e5e5e5]" />

          <button
            onClick={prevSlide}
            aria-label="Previous destinations"
            className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-[#cccccc] text-[#aaaaaa] transition hover:border-[#08a8c8] hover:text-[#08a8c8]"
          >
            <ChevronLeft size={25} />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next destinations"
            className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-[#cccccc] text-[#aaaaaa] transition hover:border-[#08a8c8] hover:text-[#08a8c8]"
          >
            <ChevronRight size={25} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default FeaturedDestinations;
