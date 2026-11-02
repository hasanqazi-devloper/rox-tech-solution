"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, MessageCircle, ArrowRight } from "lucide-react";

const filterTabs = [
  "All",
  "Smartphones",
  "Laptops",
  "Accessories",
  "Audio",
  "Smart Gadgets",
];

const products = [
  {
    id: 1,
    title: "iPhone 15 Pro Max",
    specs: "256GB | Titanium | 5G",
    tag: "Popular",
    tagColor: "bg-[#F97316] text-white",
    image: "/iphone.png",
    category: "Smartphones",
  },
  {
    id: 2,
    title: "MacBook Air M2",
    specs: '13.6" | 8GB | 256GB',
    tag: null,
    tagColor: "",
    image: "/macbook.png",
    category: "Laptops",
  },
  {
    id: 3,
    title: "SMOK Nord 5",
    specs: "2000mAh | Pod Kit",
    tag: "New",
    tagColor: "bg-[#22C55E] text-white",
    image: "/pods.png",
    category: "Accessories",
  },
  {
    id: 4,
    title: "AirPods Pro 2",
    specs: "USB-C | Noise Cancellation",
    tag: "Hot Deal",
    tagColor: "bg-[#F97316] text-white",
    image: "/airpods.png",
    category: "Audio",
  },
];

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <section className="w-full bg-[#C0C0C0] py-6 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1500px] 2xl:max-w-[2400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* ================= LEFT MAIN CONTAINER (Featured Products & Deals) ================= */}
        <div className="lg:col-span-8 xl:col-span-9 bg-gradient-to-b from-white/75 via-white/20 to-[#ECEEF1] border border-white/70 rounded-3xl p-4 sm:p-6 shadow-sm flex flex-col justify-between">
          
          {/* Header & Filter Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
            <h2 className="text-lg sm:text-2xl font-black text-[#0F172A] tracking-tight shrink-0">
              Featured Products & Deals
            </h2>

            {/* Desktop Filter Pills */}
            <div className="hidden sm:flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition whitespace-nowrap ${
                    activeTab === tab
                      ? "bg-[#F97316] text-white shadow-xs"
                      : "bg-white/80 text-gray-600 hover:bg-gray-100 border border-gray-200/60"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Mobile View All Link */}
            <Link
              href="/shop"
              className="sm:hidden self-end inline-flex items-center gap-1 text-xs font-bold text-[#0F172A] hover:text-[#F97316]"
            >
              <span>View All</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* ================= DESKTOP PRODUCT GRID (NO PRICE) ================= */}
          <div className="hidden sm:grid sm:grid-cols-2 xl:grid-cols-4 gap-3.5">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="relative bg-white/60 border border-gray-200/80 rounded-2xl p-4 flex flex-col justify-between shadow-xs hover:shadow-md transition"
              >
                {/* Badge Tag */}
                {product.tag && (
                  <span
                    className={`absolute top-3 right-3 text-[10px] font-bold px-2.5 py-0.5 rounded-full ${product.tagColor}`}
                  >
                    {product.tag}
                  </span>
                )}

                {/* Image */}
                <div className="w-full h-32 flex items-center justify-center my-2">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Details */}
                <div className="space-y-1 mt-2">
                  <h3 className="text-xs sm:text-sm font-bold text-[#0F172A] leading-tight">
                    {product.title}
                  </h3>
                  <p className="text-[10px] text-gray-500 font-normal">
                    {product.specs}
                  </p>
                </div>

                {/* WhatsApp Inquiry Button */}
                <a
                  href={`https://wa.me/353000000000?text=Hi, I am interested in ${product.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            ))}
          </div>

          {/* ================= MOBILE CAROUSEL CARD (NO PRICE) ================= */}
          <div className="block sm:hidden">
            <div className="flex overflow-x-auto gap-3 scrollbar-none pb-2 snap-x snap-mandatory">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="min-w-full bg-white/90 border border-gray-200/80 rounded-2xl p-4 flex items-center gap-3 shadow-xs snap-center relative"
                >
                  {product.tag && (
                    <span
                      className={`absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full ${product.tagColor}`}
                    >
                      {product.tag}
                    </span>
                  )}

                  <div className="w-24 h-24 shrink-0 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div className="flex-1 space-y-1 pr-6">
                    <h3 className="text-xs font-bold text-[#0F172A] leading-tight">
                      {product.title}
                    </h3>
                    <p className="text-[10px] text-gray-500 font-normal">
                      {product.specs}
                    </p>

                    <a
                      href={`https://wa.me/353000000000?text=Hi, I am interested in ${product.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 bg-[#22C55E] text-white px-3 py-1.5 rounded-full text-[10px] font-bold shadow-xs"
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span>WhatsApp Inquiry</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-1.5 pt-3">
              <span className="w-2 h-2 rounded-full bg-[#0F172A]" />
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
            </div>
          </div>

        </div>

        {/* ================= RIGHT PROMO BANNER (Exact Split Design with Diagonal Cut) ================= */}
        <div className="lg:col-span-4 xl:col-span-3 relative overflow-hidden rounded-3xl min-h-[220px] lg:min-h-full shadow-sm bg-white">
          
          {/* Right Side Shop Image */}
          <div 
            className="absolute inset-0 bg-cover bg-right bg-no-repeat"
            style={{ backgroundImage: "url('/card.jpeg')" }}
          />

          {/* Left Side Dark Green Slanted/Angled Mask */}
          <div 
            className="absolute inset-0 bg-[#0F291E] [clip-path:polygon(0_0,62%_0,48%_100%,0_100%)] z-10"
          />

          {/* Text Content Overlay */}
          <div className="relative z-20 h-full p-6 sm:p-7 flex flex-col justify-between items-start max-w-[65%]">
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                Best Prices <br />
                Real Support
              </h3>
              <p className="text-xs text-gray-300 font-normal leading-relaxed">
                Your trusted tech store in Cashel.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-md transition transform hover:-translate-y-0.5 mt-4"
            >
              <span>Visit Our Store</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}