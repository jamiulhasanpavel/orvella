import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  Check,
  Compass,
  Globe2,
  Headphones,
  MapPin,
  Plane,
  Play,
  Search,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

const highlights = [
  {
    icon: Globe2,
    title: "120+ destinations",
    detail: "Around the world",
  },
  {
    icon: ShieldCheck,
    title: "Secure booking",
    detail: "Travel with confidence",
  },
  {
    icon: Headphones,
    title: "24/7 support",
    detail: "Here whenever you need",
  },
];

const HeroBanner = () => {
  return (
    <section className="relative isolate flex min-h-[980px] flex-col overflow-hidden bg-[#06263a] text-white lg:min-h-[940px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-[center_45%]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2400&q=90')",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#00182b]/90 via-[#00243a]/65 to-[#00243a]/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#001b31]/55 via-transparent to-[#001b31]/90"
      />

      <div className="mx-auto grid w-full max-w-[1600px] flex-1 items-center gap-8 px-5 pb-10 pt-36 sm:px-8 sm:pt-40 lg:px-14 lg:pb-16 lg:pt-44 xl:grid-cols-[1.05fr_.95fr]">
        <div className="max-w-[760px]">
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-black/10 backdrop-blur-md">
            <Plane size={17} className="text-[#43d4ff]" />
            <span>Your dream journey starts here</span>
          </div>

          <h1 className="text-[clamp(2.45rem,5.2vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.055em] text-white">
            Explore the world
            <br />
            with{" "}
            <span className="bg-gradient-to-r from-[#36d7ff] to-[#00a8ea] bg-clip-text italic text-transparent">
              Orvella
            </span>
            <Plane
              aria-hidden="true"
              size={42}
              className="ml-3 inline-block -rotate-12 text-[#43d4ff] sm:size-12"
            />
          </h1>

          <p className="mt-6 max-w-[600px] text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
            Discover breathtaking places, experience new cultures, and make
            memories that stay with you long after the journey ends.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#booking-search"
              className="animated-rounded-border neon-button inline-flex min-h-14 items-center justify-center rounded-full border border-white/40 bg-[#08baf0] px-7 py-4 font-bold text-[#00253d] shadow-lg shadow-cyan-950/25 transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <span className="button-content gap-3">
                Start booking
                <ArrowRight size={20} />
              </span>
            </a>
            <a
              href="#testimonials"
              className="animated-rounded-border neon-button inline-flex min-h-14 items-center justify-center rounded-full border border-white/70 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white hover:text-[#00253d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <span className="button-content gap-3">
                <span className="flex size-7 items-center justify-center rounded-full bg-white/20">
                  <Play size={14} fill="currentColor" />
                </span>
                Watch video
              </span>
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-white/90">
            <div className="flex items-center gap-1 text-amber-300" aria-label="Rated 4.9 out of 5">
              {Array.from({ length: 5 }, (_, index) => (
                <Star key={index} size={16} fill="currentColor" />
              ))}
            </div>
            <span>
              <strong className="text-white">4.9/5</strong> from 2,400+ happy
              travelers
            </span>
          </div>
        </div>

        <div className="relative hidden min-h-[430px] items-center justify-center xl:flex">
          <div
            aria-hidden="true"
            className="absolute right-[8%] top-[8%] size-[330px] rounded-full border border-white/15"
          />
          <div
            aria-hidden="true"
            className="absolute right-[14%] top-[14%] size-[250px] rounded-full border border-white/10"
          />
          <div className="animated-rounded-border relative ml-auto w-full max-w-[410px] rounded-[2rem] border border-white/25 bg-[#06263a]/45 p-7 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-white/70">
                  YOUR NEXT ADVENTURE
                </p>
                <p className="mt-2 text-3xl font-semibold tracking-tight">
                  Out there awaits.
                </p>
              </div>
              <span className="flex size-12 items-center justify-center rounded-2xl bg-[#08baf0] text-[#00253d]">
                <Compass size={25} />
              </span>
            </div>

            <div className="my-7 h-px bg-white/20" />

            <div className="space-y-5">
              {highlights.map((highlight) => {
                const Icon = highlight.icon;

                return (
                  <div key={highlight.title} className="flex items-center gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#53d7ff]">
                      <Icon size={21} />
                    </span>
                    <div className="flex-1">
                      <p className="font-semibold">{highlight.title}</p>
                      <p className="mt-0.5 text-sm text-white/65">
                        {highlight.detail}
                      </p>
                    </div>
                    <Check size={18} className="text-emerald-300" />
                  </div>
                );
              })}
            </div>

            <div className="mt-7 flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3">
              <div className="flex -space-x-2">
                {["A", "M", "S", "J"].map((initial, index) => (
                  <span
                    key={initial}
                    className="flex size-8 items-center justify-center rounded-full border-2 border-[#16415a] bg-cyan-100 text-xs font-bold text-[#07304a]"
                    style={{ transform: `translateY(${index % 2 ? 2 : 0}px)` }}
                  >
                    {initial}
                  </span>
                ))}
              </div>
              <p className="text-right text-xs text-white/80">
                <span className="block font-semibold text-white">
                  Join our travel community
                </span>
                Good trips are better together
              </p>
            </div>
          </div>
        </div>
      </div>

      <form
        id="booking-search"
        action="/#featured-destinations"
        method="get"
        className="animated-rounded-border relative z-10 mx-auto mb-8 w-[calc(100%-2.5rem)] max-w-[1320px] rounded-[1.75rem] border border-white/70 bg-white p-5 text-[#14243b] shadow-2xl shadow-[#00111f]/35 sm:mb-10 sm:p-7 lg:mb-10 lg:px-8"
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-center lg:gap-0">
          <label className="flex min-w-0 items-center gap-4 border-b border-slate-200 pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
            <MapPin size={28} className="shrink-0 text-[#08a8d7]" />
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-bold">Destination</span>
              <select
                name="destination"
                defaultValue=""
                className="mt-1 w-full cursor-pointer bg-transparent text-sm text-slate-500 outline-none"
              >
                <option value="" disabled>
                  Where would you like to go?
                </option>
                <option value="switzerland">Switzerland</option>
                <option value="maldives">Maldives</option>
                <option value="bali">Bali, Indonesia</option>
                <option value="nepal">Nepal</option>
                <option value="thailand">Thailand</option>
              </select>
            </span>
          </label>

          <label className="flex min-w-0 items-center gap-4 border-b border-slate-200 pb-4 lg:border-b-0 lg:border-r lg:px-6 lg:pb-0">
            <CalendarDays size={28} className="shrink-0 text-[#08a8d7]" />
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-bold">Travel date</span>
              <input
                name="travelDate"
                type="date"
                className="mt-1 w-full cursor-pointer bg-transparent text-sm text-slate-500 outline-none"
              />
            </span>
          </label>

          <label className="flex min-w-0 items-center gap-4 lg:px-6">
            <Users size={28} className="shrink-0 text-[#08a8d7]" />
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-bold">Travelers</span>
              <select
                name="travelers"
                defaultValue="1"
                className="mt-1 w-full cursor-pointer bg-transparent text-sm text-slate-500 outline-none"
              >
                <option value="1">1 traveler</option>
                <option value="2">2 travelers</option>
                <option value="3">3 travelers</option>
                <option value="4">4 travelers</option>
                <option value="5">5+ travelers</option>
              </select>
            </span>
          </label>

          <button
            type="submit"
            className="animated-rounded-border neon-button inline-flex min-h-14 items-center justify-center rounded-full border border-white/40 bg-gradient-to-r from-[#08baf0] to-[#0750a2] px-7 py-4 font-bold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#08a8d7] lg:ml-4"
          >
            <span className="button-content gap-3">
              <Search size={20} />
              Find a trip
            </span>
          </button>
        </div>
      </form>

      <div className="relative z-10 border-t border-white/15 bg-[#001b31]/65 backdrop-blur-md">
        <div className="mx-auto grid max-w-[1450px] grid-cols-1 divide-y divide-white/15 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-10">
          {highlights.map((highlight) => {
            const Icon = highlight.icon;

            return (
              <div
                key={highlight.title}
                className="flex items-center gap-4 py-5 sm:px-5 lg:px-8"
              >
                <Icon size={30} className="shrink-0 text-[#53d7ff]" />
                <div>
                  <p className="font-semibold text-white">{highlight.title}</p>
                  <p className="mt-0.5 text-sm text-white/65">
                    {highlight.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <a
        href="#featured-destinations"
        aria-label="Explore featured destinations"
        className="absolute bottom-28 right-7 hidden animate-bounce items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 xl:flex"
      >
        Scroll to explore
        <ArrowDown size={16} />
      </a>
    </section>
  );
};

export default HeroBanner;
