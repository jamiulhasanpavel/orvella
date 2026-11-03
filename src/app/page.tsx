import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#001b31]">
      <Navbar />
      <HeroBanner />
      <FeaturedDestinations />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}