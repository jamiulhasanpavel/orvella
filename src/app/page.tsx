import Image from "next/image";
import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedDestinations from "@/components/FeaturedDestinations";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#001b31]">
      <Navbar />
      <Image
        src="/img/Explore%20the%20World%20with%20Orvella.png"
        alt="Orvella travel landing page design with mountain scenery, travel booking search, and destination features"
        width={1672}
        height={941}
        priority
        sizes="100vw"
        className="block h-auto w-full"
      />
      <FeaturedDestinations />
      <WhyChooseUs />
    </main>
  );
}