
import { ArrowRight, Plane } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative flex min-h-[440px] w-full items-center justify-center overflow-hidden bg-[#071b20]">

      {/* Background Image */}
      <div
        className="cta-background-drift absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2400&q=90')",
        }}
      />

      <div
        aria-hidden="true"
        className="cta-plane-photo-drift absolute inset-y-0 right-0 z-0 w-full bg-cover bg-center opacity-90 sm:w-[58%]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85')",
          maskImage:
            "linear-gradient(to right, transparent, black 18%, black)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 18%, black)",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-[#001b31]/25" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#001b31]/75 via-[#001b31]/30 to-[#001b31]/5" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#001b31]/55 via-transparent to-[#001b31]/20" />

      <div
        aria-hidden="true"
        className="cta-plane-flight pointer-events-none absolute right-[8%] top-[16%] z-[1] text-white drop-shadow-[0_0_18px_rgba(74,220,255,0.9)]"
      >
        <Plane className="size-12 -rotate-12 sm:size-16 md:size-20" />
      </div>

      {/* Content */}
      <div className="cta-content-enter relative z-10 mx-auto px-4 text-center text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.55)]">

        <h2 className="font-serif text-3xl font-light tracking-tight sm:text-4xl md:text-5xl lg:text-[52px]">
          Ready To Start Your Journey?
        </h2>

        <p className="mt-4 text-sm text-white/90 sm:text-base md:text-lg">
          Join thousands of travelers who have discovered the world with us
        </p>

        {/* CTA Button */}
        <a
          href="/contact"
          className="animated-rounded-border cta-button-enter neon-button group mx-auto mt-11 inline-flex items-center gap-7 rounded-full border border-white/60 bg-white px-7 py-5 text-sm font-medium text-black transition-all duration-300 hover:bg-[#0d9488] hover:text-white"
        >
          <span className="button-content gap-7">
            BOOK YOUR TRIP TODAY
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-2"
            />
          </span>
        </a>

      </div>
    </section>
  );
};

export default CTASection;
