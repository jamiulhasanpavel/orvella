
import {
  Plane,
  MapPin,
  CalendarDays,
  Users,
  ChevronDown,
  Search,
  ArrowRight,
  PlayCircle,
  Globe,
  ShieldCheck,
  Headset,
  Star,
} from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="relative min-h-[950px] overflow-hidden bg-[#00344e]">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2400&q=95')",
        }}
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001b31]/85 via-[#002b43]/30 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#001b31]/30 via-transparent to-[#001b31]/75" />

      {/* Main Hero */}
      <div className="relative z-10 mx-auto grid min-h-[730px] max-w-[1600px] grid-cols-1 items-center px-6 pb-32 pt-36 lg:grid-cols-2 lg:px-12">

        {/* Left Content */}
        <div className="max-w-[800px]">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-white backdrop-blur-md">
            <Plane size={19} />
            <span className="text-sm font-semibold">
              Your Dream Journey Awaits
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-extrabold leading-[1.08] tracking-tight text-white md:text-7xl">
            Explore the World
            <br />
            with{" "}
            <span className="italic text-[#08baf0]">
              Orvella
            </span>
            <Plane
              size={52}
              className="ml-2 inline-block -rotate-12 text-[#08baf0]"
            />
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[650px] text-base leading-8 text-white md:text-xl">
            Discover breathtaking destinations, experience new cultures,
            and create unforgettable memories with us.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-5">
            <a
              href="/destinations"
              className="flex items-center gap-3 rounded-full bg-[#08baf0] px-9 py-5 font-bold text-[#002b45] transition hover:bg-white"
            >
              Start Booking
              <ArrowRight size={22} />
            </a>

            <button className="flex items-center gap-3 rounded-full border border-white px-8 py-5 font-semibold text-white transition hover:bg-white hover:text-[#002b45]">
              <PlayCircle size={22} />
              Watch Video
            </button>
          </div>
        </div>

        {/* Right Traveler */}
        <div className="relative hidden h-full min-h-[550px] items-end justify-center lg:flex">

          <img
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=700&q=90"
            alt="Traveler exploring nature"
            className="absolute bottom-0 right-0 max-h-[560px] w-auto object-contain drop-shadow-2xl"
          />

          {/* Travel Text */}
          <div className="absolute right-0 top-12 z-10 rotate-[-9deg] text-right">
            <p className="font-serif text-5xl italic text-white">
              Travel More
            </p>
            <p className="font-serif text-5xl italic text-white">
              Live Better
            </p>
            <div className="ml-auto mt-4 h-1 w-44 rotate-[-8deg] rounded-full bg-yellow-400" />
          </div>
        </div>
      </div>

      {/* Booking Search Bar */}
      <div className="absolute bottom-[125px] left-1/2 z-20 w-[92%] max-w-[1310px] -translate-x-1/2">

        <div className="grid items-center gap-5 rounded-[25px] bg-white p-5 text-[#14243b] shadow-2xl md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] lg:px-8 lg:py-6">

          {/* Destination */}
          <div className="flex items-center gap-4 border-b border-gray-200 pb-4 lg:border-b-0 lg:border-r lg:pb-0">
            <MapPin size={34} className="shrink-0 text-[#08baf0]" />

            <div className="min-w-0 flex-1">
              <p className="font-bold">Destination</p>
              <input
                type="text"
                placeholder="Where to?"
                className="mt-1 w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
            </div>

            <ChevronDown className="text-gray-400" />
          </div>

          {/* Date */}
          <div className="flex items-center gap-4 border-b border-gray-200 pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pl-5">
            <CalendarDays size={34} className="shrink-0 text-[#08baf0]" />

            <div className="min-w-0 flex-1">
              <p className="font-bold">Travel Date</p>
              <input
                type="date"
                className="mt-1 w-full bg-transparent text-sm text-gray-400 outline-none"
              />
            </div>
          </div>

          {/* Travelers */}
          <div className="flex items-center gap-4 lg:pl-5">
            <Users size={34} className="shrink-0 text-[#08baf0]" />

            <div className="min-w-0 flex-1">
              <p className="font-bold">Travelers</p>

              <select className="mt-1 w-full bg-transparent text-sm text-gray-400 outline-none">
                <option>1 Person</option>
                <option>2 Persons</option>
                <option>3 Persons</option>
                <option>4 Persons</option>
                <option>5+ Persons</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <button className="flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#08baf0] to-[#003d91] px-8 py-5 font-bold text-white transition hover:scale-105">
            <Search size={22} />
            Search Flights
          </button>
        </div>
      </div>

      {/* Bottom Features */}
      <div className="absolute bottom-0 left-0 z-10 w-full border-t border-white/10 bg-[#001b31]/85 backdrop-blur-md">

        <div className="mx-auto grid max-w-[1450px] grid-cols-2 gap-6 px-6 py-7 md:grid-cols-4 lg:px-10">

          <Feature
            icon={<Globe size={43} />}
            title="100+"
            description="Popular Destinations"
          />

          <Feature
            icon={<ShieldCheck size={43} />}
            title="Secure Booking"
            description="Your Data is Safe"
          />

          <Feature
            icon={<Headset size={43} />}
            title="24/7 Support"
            description="Always Here to Help"
          />

          <Feature
            icon={<Star size={43} className="fill-yellow-400 text-yellow-400" />}
            title="Trusted by Millions"
            description="Travel with Confidence"
          />

        </div>
      </div>
    </section>
  );
};

const Feature = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex items-center gap-4 border-white/30 md:border-r md:last:border-r-0">
      <div className="shrink-0 text-[#62d9ff]">
        {icon}
      </div>

      <div>
        <h3 className="text-base font-bold text-white md:text-lg">
          {title}
        </h3>
        <p className="text-xs text-gray-300 md:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
