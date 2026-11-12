"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, MessageCircle, ArrowRight, ChevronLeft } from "lucide-react";

const filterTabs = [
  "All",
  "Smartphones",
  "Laptops",
  "Accessories",
  "Audio",
  "Smart Gadgets",
  "Vapes",
];

const products = [
  {
    id: 1,
    title: "iPhone 18 Pro Max",
    specs: "Next-Gen Edition | Titanium",
    tag: "Popular",
    tagColor: "bg-[#F97316] text-white",
    image: "/products/iphone-18-pro-max.png",
    category: "Smartphones",
  },
  {
    id: 2,
    title: "MacBook Pro M3 (2024)",
    specs: "Space Black | 16GB RAM",
    tag: "Latest",
    tagColor: "bg-[#22C55E] text-white",
    image: "/products/Apple_MacBook_Pro_M3__2024.png",
    category: "Laptops",
  },
  {
    id: 3,
    title: "Transparent Shockproof Case",
    specs: "Anti-Yellowing | Extra Protection",
    tag: "Best Seller",
    tagColor: "bg-[#22C55E] text-white",
    image: "/products/Transparent_Shockproof_Phone_Case.png",
    category: "Accessories",
  },
  {
    id: 4,
    title: "AirPods Pro 3",
    specs: "USB-C | Active Noise Cancellation",
    tag: "Hot Deal",
    tagColor: "bg-[#F97316] text-white",
    image: "/air-pods-3.png",
    category: "Audio",
  },
  {
    id: 5,
    title: "Apple Watch Ultra 4",
    specs: "Titanium Case | Fitness Tracking",
    tag: "Popular",
    tagColor: "bg-[#F97316] text-white",
    image: "/ultra-watch-pro-4.png",
    category: "Smart Gadgets",
  },
   {
    id: 6,
    title: "Samsung Galaxy Smart Watch 9",
    specs: "Advanced Health Monitoring | Long Battery Life",
    tag: "Popular",
    tagColor: "bg-[#F97316] text-white",
    image: "/sumsung-smart-watch-9.png",
    category: "Smart Gadgets",
  },
  {
    id: 7,
    title: "Gotek Vape Pod Kit",
    specs: "Refillable Pod | Long Battery Life",
    tag: "Trending",
    tagColor: "bg-[#F97316] text-white",
    image: "/vapes/Gotek_Vape_Pod_Kit.png",
    category: "Vapes",
  },
];

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("All");
  const sliderRef = useRef<HTMLDivElement>(null);

  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter((p) => p.category === activeTab);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[#C0C0C0] py-6 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1500px] 2xl:max-w-[2400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* ================= LEFT MAIN CONTAINER ================= */}
        <div className="lg:col-span-8 xl:col-span-9 bg-gradient-to-b from-white/75 via-white/20 to-[#ECEEF1] border border-white/70 rounded-3xl p-4 sm:p-6 shadow-sm flex flex-col justify-between space-y-4">
          
          {/* 1. TOP HEADING */}
          <div className="flex items-center justify-between border-b border-gray-200/60 pb-3">
            <h2 className="text-lg sm:text-2xl font-black text-[#0F172A] tracking-tight">
              Featured Products & Deals
            </h2>

            {/* Mobile View All Link */}
            <Link
              href="/shop"
              className="sm:hidden inline-flex items-center gap-1 text-xs font-bold text-[#0F172A] hover:text-[#F97316]"
            >
              <span>View All</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 2. FILTERS & SLIDER CONTROLS ROW (DIRECTLY BELOW HEADING) */}
          <div className="hidden sm:flex items-center justify-between gap-3">
            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition whitespace-nowrap ${
                    activeTab === tab
                      ? "bg-[#F97316] text-white shadow-xs"
                      : "bg-white/80 text-gray-600 hover:bg-gray-100 border border-gray-200/60"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={() => scroll("left")}
                className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-xs flex items-center justify-center hover:bg-[#F97316] hover:text-white hover:border-[#F97316] transition text-gray-700"
                aria-label="Previous Products"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-xs flex items-center justify-center hover:bg-[#F97316] hover:text-white hover:border-[#F97316] transition text-gray-700"
                aria-label="Next Products"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 3. HORIZONTAL PRODUCTS SLIDER (1 LINE) */}
          <div
            ref={sliderRef}
            className="flex items-center gap-4 overflow-x-auto scrollbar-none scroll-smooth pb-2 snap-x snap-mandatory pt-2"
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="min-w-[240px] sm:min-w-[260px] max-w-[260px] bg-white/70 border border-gray-200/80 rounded-2xl p-4 flex flex-col justify-between shadow-xs hover:shadow-md transition snap-start shrink-0 relative"
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
                <div className="w-full h-36 flex items-center justify-center my-2 relative">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={200}
                    height={200}
                    sizes="200px"
                    className="max-h-full max-w-full w-auto h-auto object-contain"
                  />
                </div>

                {/* Details */}
                <div className="space-y-1 mt-2">
                  <h3 className="text-xs sm:text-sm font-bold text-[#0F172A] leading-tight truncate">
                    {product.title}
                  </h3>
                  <p className="text-[12px] text-black font-normal truncate">
                    {product.specs}
                  </p>
                </div>

                {/* WhatsApp Inquiry Button */}
                <a
                  href={`https://wa.me/353896091839?text=Hi, I am interested in ${encodeURIComponent(product.title)}`}
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

        </div>

        {/* ================= RIGHT PROMO BANNER ================= */}
        <div className="lg:col-span-4 xl:col-span-3 relative overflow-hidden rounded-3xl min-h-[220px] lg:min-h-full shadow-sm bg-white">
          <div 
            className="absolute inset-0 bg-cover bg-right bg-no-repeat"
            style={{ backgroundImage: "url('/card.jpg')" }}
          />
          <div 
            className="absolute inset-0 bg-[#0F291E] [clip-path:polygon(0_0,62%_0,48%_100%,0_100%)] z-10"
          />
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