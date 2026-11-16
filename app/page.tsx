import Hero from "@/components/Hero";
import CategoriesGrid from "@/components/CategoriesGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import RepairQuoteWidget from "@/components/RepairQuoteWidget";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChristmasClubBanner from "@/components/ChristmasClubBanner";

export default function RoxTechHomePage() {
  return (
    <div className="w-full flex flex-col items-center justify-start bg-[#C0C0C0] text-[#0F172A] font-sans m-0 p-0">
      <WhatsAppButton />

      {/* Section 1: Hero Section */}
      <Hero />

      {/* Section 2: Shop by Category Grid */}
      <CategoriesGrid />

      {/* Section 3: Christmas Club Banner */}
      <ChristmasClubBanner />

      {/* Section 4: Featured Products & Deals */}
      <FeaturedProducts />

      {/* Section 5: Interactive Repair Quote Estimator */}
      <RepairQuoteWidget />
    </div>
  );
}