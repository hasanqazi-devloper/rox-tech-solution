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
      <main className="w-full min-h-screen bg-[#C0C0C0] text-[#0F172A] font-sans overflow-x-hidden m-0 p-0 block">
        <WhatsAppButton />
        
        {/* Section 2: Hero Section */}
        <Hero />

        {/* Section 3: Shop by Category Grid */}
        <CategoriesGrid />
        <ChristmasClubBanner/>
        {/* Section 4: Featured Products & Deals */}
        <FeaturedProducts />

        {/* Section 5: Interactive Repair Quote Estimator */}
        <RepairQuoteWidget />
      </main>
    </LazyMotion>
  );
}