import {
  ShieldCheck,
  Map,
  Headset,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: Map,
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-[#edfbfd] px-5 py-20 md:px-10 lg:py-28">
      <div className="mx-auto max-w-[1280px]">

        {/* Section Heading */}
        <div className="mb-11 text-center">
          <h2 className="font-serif text-4xl font-normal tracking-tight text-[#111111] md:text-5xl lg:text-[56px]">
            Why Choose ORVELLA
          </h2>

          <p className="mt-3 text-base text-[#777777] md:text-lg">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="min-h-[249px] rounded-2xl border border-[#d8e2e4] bg-white px-8 py-9 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#12a3c1]/60 hover:shadow-lg hover:shadow-cyan-900/10 md:px-10 md:py-10"
              >
                {/* Icon */}
                <Icon
                  size={43}
                  strokeWidth={2.3}
                  className="mb-6 text-[#12a3c1]"
                />

                {/* Title */}
                <h3 className="mb-3 font-serif text-[27px] font-normal tracking-tight text-[#111111]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="max-w-[370px] text-[16px] leading-6 text-[#777777]">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;