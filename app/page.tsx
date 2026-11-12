"use client";

import { LazyMotion, domMax } from "framer-motion";
import Hero from "@/components/Hero";
import CategoriesGrid from "@/components/CategoriesGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import RepairQuoteWidget from "@/components/RepairQuoteWidget";
import WhatsAppButton from "@/components/WhatsAppButton";
import BottomFeatureBar from "@/components/BottomFeatureBar";
import ChristmasClubBanner from "@/components/ChristmasClubBanner";

export default function RoxTechHomePage() {
  return (
    <LazyMotion features={domMax}>
      {/* ✅ Clean block rendering matching the #C0C0C0 Light Silver European Retail Theme */}
      <div className="w-full flex flex-col items-center justify-start bg-[#C0C0C0] text-[#0F172A] font-sans m-0 p-0">
        <WhatsAppButton />
        
        {/* Section 2: Hero Section */}
        <Hero />

        {/* Section 3: Shop by Category Grid */}
        <CategoriesGrid />
        
        {/* Section: Christmas Club Banner */}
        <ChristmasClubBanner />

        {/* Section 4: Featured Products & Deals */}
        <FeaturedProducts />

        {/* Section 5: Interactive Repair Quote Estimator */}
        <RepairQuoteWidget />
        
        {/* Optional Bottom Feature Bar if needed */}
        {/* <BottomFeatureBar /> */}
      </div>
    </LazyMotion>
  );
}