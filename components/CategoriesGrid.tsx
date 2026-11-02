import Link from "next/link";
import { ChevronRight } from "lucide-react";

const categories = [
  {
    title: "Smartphones",
    subtitle: "Latest Models",
    image: "/mobile.png",
    href: "/shop/smartphones",
  },
  {
    title: "Laptops",
    subtitle: "Work & Play",
    image: "/laptop.png",
    href: "/shop/laptops",
  },
  {
    title: "Accessories",
    subtitle: "Cases - Chargers - More",
    image: "/asseceries.png",
    href: "/shop/accessories",
  },
  {
    title: "Audio",
    subtitle: "Headphones - Earbuds",
    image: "/audio.png",
    href: "/shop/audio",
  },
  {
    title: "Smart Gadgets",
    subtitle: "Innovative Tech",
    image: "/smart.png",
    href: "/shop/smart-gadgets",
  },
  {
    title: "Repairs",
    subtitle: "Screen - Battery - More",
    image: "/repair.png",
    href: "/repairs",
  },
];

export default function CategoriesGrid() {
  return (
    <section className="w-full bg-[#C0C0C0] py-6 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1500px] 2xl:max-w-[2400px] mx-auto space-y-4">
        
        {/* Section Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-2xl xl:text-3xl font-black text-[#0F172A] tracking-tight">
            Shop by Category
          </h2>
          <Link
            href="/shop"
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#0F172A] hover:text-[#F97316] transition"
          >
            <span>View All</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Categories Grid / Horizontal Scroll for Mobile */}
        <div className="flex lg:grid lg:grid-cols-6 overflow-x-auto lg:overflow-visible gap-3 sm:gap-4 pb-2 scrollbar-none">
          {categories.map((cat, index) => (
            <Link
              key={index}
              href={cat.href}
              className="group min-w-[160px] sm:min-w-[180px] lg:min-w-0 bg-gradient-to-b from-white/95 via-white/60 to-[#ECEEF1] border border-white/60 rounded-2xl p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition transform hover:-translate-y-1 shrink-0"
            >
              {/* Product Image Preview */}
              <div className="w-full h-28 sm:h-32 flex items-center justify-center mb-3">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Title, Subtitle & Arrow */}
              <div className="border-t border-gray-200/50 pt-3 flex items-center justify-between">
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#0F172A] group-hover:text-[#F97316] transition leading-tight">
                    {cat.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-gray-500 font-normal mt-0.5">
                    {cat.subtitle}
                  </p>
                </div>
                <div className="w-5 h-5 rounded-full bg-white/80 flex items-center justify-center text-gray-400 group-hover:bg-[#F97316] group-hover:text-white transition shrink-0 shadow-xs">
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}