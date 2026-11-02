"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { 
  MapPin, 
  MessageCircle, 
  SlidersHorizontal, 
  ChevronRight, 
  Heart,
  RotateCcw,
  ShieldCheck,
  Truck,
  Headphones,
  Star,
  ArrowRight,
  Sparkles
} from "lucide-react";

// Final Clean VAPE_PRODUCTS Array (Prices Completely Removed for Competitive Advantage)
const VAPE_PRODUCTS = [
  // Vaping Kits & Devices
  {
    id: 1,
    name: "Vaporesso Luxe X2 Pod Kit",
    brand: "vaporesso",
    flavor: "devices",
    nicotine: "0mg",
    badge: "Popular",
    badgeColor: "bg-[#F97316]",
    image: "/Vaporesso_Luxe_X2_Pod_Vape.png"
  },
  {
    id: 2,
    name: "Aspire Gotek X Pod Kit",
    brand: "aspire",
    flavor: "devices",
    nicotine: "3mg",
    badge: "Best Seller",
    badgeColor: "bg-[#22C55E]",
    image: "/Futuristic_Transparent_Aspire_Gotek_X_Vape.png"
  },
  {
    id: 3,
    name: "SMOK Nord 5 Pod Kit",
    brand: "smok",
    flavor: "devices",
    nicotine: "6mg",
    badge: "New",
    badgeColor: "bg-[#F97316]",
    image: "/SMOK_Nord_5_Carbon_Fibre_Pod_Vape.png"
  },
  {
    id: 4,
    name: "OXVA Xlim Pro Pod Kit",
    brand: "oxva",
    flavor: "devices",
    nicotine: "3mg",
    badge: "Top Rated",
    badgeColor: "bg-[#22C55E]",
    image: "/OXVA_XLIM_Pro_Neon_Green_Product_Shot.png"
  },
  {
    id: 5,
    name: "Voopoo Drag X Plus Kit",
    brand: "voopoo",
    flavor: "devices",
    nicotine: "6mg",
    badge: "Pro Series",
    badgeColor: "bg-[#F97316]",
    image: "/Voopoo_Drag_X_Plus_Studio_Product_Shot.png"
  },
  {
    id: 6,
    name: "Innokin Endura T22 Pro Kit",
    brand: "innokin",
    flavor: "devices",
    nicotine: "12mg",
    badge: null,
    image: "/Innokin_Endura_T22_Pro_Product_Render.png"
  },
  {
    id: 7,
    name: "SMOK Premium Gunmetal Vape Mod",
    brand: "smok",
    flavor: "devices",
    nicotine: "0mg",
    badge: "Heavy Mod",
    badgeColor: "bg-[#F97316]",
    image: "/Premium_Gunmetal_Vape_Mod_Product_Shot.png"
  },

  // E-Liquids & Juices
  {
    id: 8,
    name: "Elfliq Blueberry Ice 10ml Nic Salt",
    brand: "elfliq",
    flavor: "fruits",
    nicotine: "10mg",
    badge: "Hot Seller",
    badgeColor: "bg-[#F97316]",
    image: "/Blueberry_Ice_Nic_Salt_Bottle.png"
  },
  {
    id: 9,
    name: "IVG Cola Ice 50ml Shortfill",
    brand: "ivg",
    flavor: "menthol",
    nicotine: "0mg",
    badge: "Ice Fresh",
    badgeColor: "bg-[#22C55E]",
    image: "/IVG_Cola_Ice_E-Liquid_Bottle_Splash.png"
  },
  {
    id: 10,
    name: "Maryliq Cherry Fusion 10ml Nic Salt",
    brand: "maryliq",
    flavor: "fruits",
    nicotine: "20mg",
    badge: "Best Flavor",
    badgeColor: "bg-[#22C55E]",
    image: "/Maryliq_Cherry_Fusion_E-Liquid_Bottle.png"
  },
  {
    id: 11,
    name: "Nicomist Classic Tobacco 30ml",
    brand: "nicomist",
    flavor: "tobacco",
    nicotine: "12mg",
    badge: null,
    image: "/Nicomist_Classic_Tobacco_E-Liquid_Bottle.png"
  },

  // Disposables & Pod Devices
  {
    id: 12,
    name: "Lost Mary BM600 Orange Ice Disposable",
    brand: "lostmary",
    flavor: "fruits",
    nicotine: "20mg",
    badge: "Trending",
    badgeColor: "bg-[#F97316]",
    image: "/Lost_Mary_BM600_Orange_Ice_Vape.png"
  },
  {
    id: 13,
    name: "Lost Mary BM6000 Big Puffs Device",
    brand: "lostmary",
    flavor: "fruits",
    nicotine: "20mg",
    badge: "6000 Puffs",
    badgeColor: "bg-[#22C55E]",
    image: "/Silver_and_Green_Vape_Device.png"
  },
  {
    id: 14,
    name: "IVG Smart Max 10K Tropical Mango",
    brand: "ivg",
    flavor: "fruits",
    nicotine: "20mg",
    badge: "10K Puffs",
    badgeColor: "bg-[#F97316]",
    image: "/IVG_Smart_Max_Tropical_Mango_Vape.png"
  },
  {
    id: 15,
    name: "IVG Pro 10K Refillable Pod Kit",
    brand: "ivg",
    flavor: "devices",
    nicotine: "20mg",
    badge: "Popular",
    badgeColor: "bg-[#22C55E]",
    image: "/IVG_Pro_10K_Vape_Pod_Kit.png"
  },

  // Nicotine Pouches
  {
    id: 16,
    name: "Cuba White Ultra Strong Pouches",
    brand: "cuba",
    flavor: "other",
    nicotine: "18mg",
    badge: "Ultra Strong",
    badgeColor: "bg-[#F97316]",
    image: "/CUBA_White_Ultra_Strong_Tin.png"
  },
  {
    id: 17,
    name: "Cuba Black Extreme Nicotine Pouches",
    brand: "cuba",
    flavor: "other",
    nicotine: "24mg",
    badge: "Extreme",
    badgeColor: "bg-[#22C55E]",
    image: "/CUBA_Black_Extreme_Tin.png"
  },
  {
    id: 18,
    name: "PABLO White Ice Cold Nicotine Tin",
    brand: "pablo",
    flavor: "menthol",
    nicotine: "30mg",
    badge: "Extra Freeze",
    badgeColor: "bg-[#F97316]",
    image: "/PABLO_White_Ice_Cold_Tin.png"
  },
  {
    id: 19,
    name: "KILLA Cold Mint Nicotine Pouches",
    brand: "killa",
    flavor: "menthol",
    nicotine: "16mg",
    badge: "Best Seller",
    badgeColor: "bg-[#22C55E]",
    image: "/KILLA_Cold_Mint_Nicotine_Tin.png"
  },
  {
    id: 20,
    name: "Iceberg Extra Cool Nicotine Tin",
    brand: "iceberg",
    flavor: "menthol",
    nicotine: "20mg",
    badge: "Extra Cool",
    badgeColor: "bg-[#22C55E]",
    image: "/Iceberg_Extra_Cool_Metal_Tin.png"
  },

  // Group Collection Showcases
  {
    id: 21,
    name: "ROX Tech Solutions Disposable Variety Pack",
    brand: "rox",
    flavor: "fruits",
    nicotine: "20mg",
    badge: "Bundle Showcase",
    badgeColor: "bg-[#F97316]",
    image: "/Colorful_ROX_Vape_Product_Showcase.png"
  },
  {
    id: 22,
    name: "Vibrant Fruit E-Liquid 10ml Multi-Pack",
    brand: "rox",
    flavor: "fruits",
    nicotine: "10mg",
    badge: "E-Liquid Pack",
    badgeColor: "bg-[#22C55E]",
    image: "/Vibrant_Fruit_E-Liquid_Collection.png"
  }
];

export default function VapeShopPage() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);
  const [selectedNicotine, setSelectedNicotine] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleItem = (list: string[], setList: Function, value: string) => {
    setList(list.includes(value) ? list.filter(i => i !== value) : [...list, value]);
  };

  const handleReset = () => {
    setSelectedBrands([]);
    setSelectedFlavors([]);
    setSelectedNicotine([]);
    setActiveCategory(null);
    setSearchQuery("");
  };

  const filteredProducts = useMemo(() => {
    return VAPE_PRODUCTS.filter(product => {
      const matchBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const matchFlavor = selectedFlavors.length === 0 || selectedFlavors.includes(product.flavor);
      const matchNicotine = selectedNicotine.length === 0 || selectedNicotine.includes(product.nicotine);
      const matchCategory = !activeCategory || product.flavor === activeCategory || (activeCategory === "devices" && product.brand !== "elfliq" && product.brand !== "ivg");
      const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.brand.toLowerCase().includes(searchQuery.toLowerCase());

      return matchBrand && matchFlavor && matchNicotine && matchCategory && matchSearch;
    });
  }, [selectedBrands, selectedFlavors, selectedNicotine, activeCategory, searchQuery]);

  return (
    <div className="w-full bg-[#F1F5F9] min-h-screen text-[#0F172A] font-sans relative z-0">

      {/* ================= 1. HERO BANNER SECTION ================= */}
      <section className="relative w-full bg-[#CBD5E1] overflow-hidden border-b border-slate-300 z-10 shadow-sm">
        <div className="hidden lg:block">
          <div className="absolute inset-0 w-full h-full flex justify-end">
            <div className="relative w-full lg:w-[75%] h-full">
              <img
                src="/vape-hero-page.png"
                alt="ROX Vape & Tech Hub Showcase"
                className="w-full h-full object-cover object-right grayscale-[20%] lg:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#CBD5E1] via-[#CBD5E1]/90 lg:via-[#CBD5E1]/50 to-transparent" />
            </div>
          </div>

          <div className="relative z-10 max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-20 lg:py-24">
            <div className="max-w-xl space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-xs font-bold text-[#0F172A] shadow-sm border border-slate-200">
                <MapPin className="w-3.5 h-3.5 text-[#22C55E] fill-[#22C55E]" />
                <span>Cashel, Ireland</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] leading-[1.15] tracking-tight">
                Premium Vapes, Juices & <br />
                <span className="text-[#F97316]">Nicotine Pouches Hub</span>
              </h1>

              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed max-w-lg">
                Explore authentic vaping kits, premium e-liquids, disposables &amp; top pouches in Cashel. High-grade products directly sourced for trusted quality.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="#shop"
                  className="bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:opacity-95 text-white px-7 py-3.5 rounded-full text-xs font-bold flex items-center gap-2 transition-all shadow-md outline-none"
                >
                  <span>Explore Inventory</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="https://wa.me/353000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#00D66C] hover:bg-[#00B85C] text-white px-7 py-3.5 rounded-full text-xs font-bold flex items-center gap-2 transition-all shadow-md outline-none"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Hero View */}
        <div className="block lg:hidden px-5 py-8 space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-xs font-bold text-[#0F172A] shadow-xs border border-slate-200">
              <MapPin className="w-3.5 h-3.5 text-[#22C55E] fill-[#22C55E]" />
              <span>Cashel, Ireland</span>
            </div>

            <h1 className="text-3xl font-black text-[#0F172A] leading-tight tracking-tight">
              Premium Vapes, Juices & <br />
              <span className="text-[#F97316]">Nicotine Pouches Hub</span>
            </h1>

            <p className="text-xs text-slate-700 font-medium leading-relaxed">
              Explore authentic vaping kits, premium e-liquids, disposables &amp; top pouches in Cashel.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="#shop"
                className="flex-1 bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white py-3 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 shadow-md outline-none"
              >
                <span>Explore Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://wa.me/353000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#00D66C] text-white py-3 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 shadow-md outline-none"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="w-full rounded-2xl overflow-hidden shadow-md border border-slate-300 aspect-[16/9] bg-white flex items-center justify-center p-2">
            <img
              src="/vape-hero-showcase.png"
              alt="Vape Showcase"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* ================= 2. CATEGORY NAVIGATION CARDS BAR ================= */}
      <section className="w-full bg-[#E2E8F0] py-6 px-4 sm:px-10 lg:px-16 border-b border-slate-300 z-10 relative" id="shop">
        <div className="max-w-[1680px] mx-auto">
          <div className="flex lg:grid lg:grid-cols-6 gap-3 overflow-x-auto pb-2 scrollbar-none snap-x snap-mandatory">
            {[
              { title: "Vaping Kits", img: "/vape.png", key: "devices" },
              { title: "All Juices", img: "/juice.png", key: "fruits" },
              { title: "Disposables & Pods", img: "/colorfull.png", key: "pods" },
              { title: "Nicotine Pouches", img: "/pouch.png", key: "other" },
              { title: "Coils & Accessories", img: "/coils.png", key: "repairs" },
              { title: "All Products", img: "/all-pro.png", key: null }
            ].map((cat, idx) => (
              <div
                key={idx}
                onClick={() => setActiveCategory(cat.key)}
                className={`min-w-[140px] sm:min-w-0 flex-1 bg-white border rounded-2xl p-3 shadow-sm hover:shadow-md transition cursor-pointer group flex flex-col justify-between h-36 snap-start outline-none ${
                  activeCategory === cat.key ? "border-[#F97316] ring-2 ring-[#F97316]/30 bg-orange-50/40" : "border-slate-300"
                }`}
              >
                <div className="w-full h-20 flex items-center justify-center p-1 bg-slate-50/80 rounded-xl">
                  <img src={cat.img} alt={cat.title} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform" />
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                  <h3 className="text-[11px] sm:text-xs font-bold text-[#0F172A] truncate">{cat.title}</h3>
                  <ChevronRight className="w-3.5 h-3.5 text-[#F97316] group-hover:translate-x-1 transition shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. MAIN CONTENT: FILTERS SIDEBAR + PRODUCT GRID ================= */}
      <section className="w-full py-8 px-4 sm:px-10 lg:px-16 z-0 relative">
        <div className="max-w-[1680px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Sidebar: Filters */}
          <div className="lg:col-span-3 bg-white border border-slate-300 rounded-2xl p-5 shadow-sm space-y-6 static lg:sticky lg:top-24 z-10">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#F97316]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">Filter Inventory</h3>
              </div>
              <button
                onClick={handleReset}
                className="text-[11px] text-[#F97316] font-bold hover:underline lg:hidden"
              >
                Reset
              </button>
            </div>

            {/* Brands Filter */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-[#0F172A]">Brands</h4>
              <div className="space-y-2 text-xs text-slate-700 max-h-40 overflow-y-auto pr-1">
                {[
                  { name: "Vaporesso", key: "vaporesso" },
                  { name: "Aspire", key: "aspire" },
                  { name: "SMOK", key: "smok" },
                  { name: "OXVA", key: "oxva" },
                  { name: "Voopoo", key: "voopoo" },
                  { name: "Innokin", key: "innokin" },
                  { name: "Elfliq", key: "elfliq" },
                  { name: "IVG", key: "ivg" },
                  { name: "Maryliq", key: "maryliq" },
                  { name: "Lost Mary", key: "lostmary" },
                  { name: "Cuba", key: "cuba" },
                  { name: "Pablo", key: "pablo" },
                  { name: "Killa", key: "killa" },
                  { name: "Iceberg", key: "iceberg" }
                ].map((b) => (
                  <label key={b.key} className="flex items-center justify-between cursor-pointer hover:text-[#F97316] transition">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(b.key)}
                        onChange={() => toggleItem(selectedBrands, setSelectedBrands, b.key)}
                        className="rounded text-[#F97316] focus:ring-0 outline-none accent-[#F97316]"
                      />
                      <span>{b.name}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Category Profiles Filter */}
            <div className="space-y-3 pt-2 border-t border-slate-200">
              <h4 className="text-xs font-bold text-[#0F172A]">Category Profile</h4>
              <div className="space-y-2 text-xs text-slate-700">
                {[
                  { name: "Devices & Kits", key: "devices" },
                  { name: "Fruits & Juices", key: "fruits" },
                  { name: "Menthol & Ice", key: "menthol" },
                  { name: "Tobacco", key: "tobacco" },
                  { name: "Nicotine Pouches", key: "other" }
                ].map((f) => (
                  <label key={f.key} className="flex items-center justify-between cursor-pointer hover:text-[#F97316] transition">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedFlavors.includes(f.key)}
                        onChange={() => toggleItem(selectedFlavors, setSelectedFlavors, f.key)}
                        className="rounded text-[#F97316] focus:ring-0 outline-none accent-[#F97316]"
                      />
                      <span>{f.name}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Nicotine Strength */}
            <div className="space-y-3 pt-2 border-t border-slate-200">
              <h4 className="text-xs font-bold text-[#0F172A]">Nicotine Strength</h4>
              <div className="space-y-2 text-xs text-slate-700 max-h-32 overflow-y-auto pr-1">
                {["0mg", "3mg", "6mg", "10mg", "12mg", "16mg", "18mg", "20mg", "24mg", "30mg"].map((n) => (
                  <label key={n} className="flex items-center justify-between cursor-pointer hover:text-[#F97316] transition">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedNicotine.includes(n)}
                        onChange={() => toggleItem(selectedNicotine, setSelectedNicotine, n)}
                        className="rounded text-[#F97316] focus:ring-0 outline-none accent-[#F97316]"
                      />
                      <span>{n}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Desktop Reset Button */}
            <div className="hidden lg:block pt-2">
              <button
                onClick={handleReset}
                className="w-full text-xs text-slate-600 font-bold hover:text-[#F97316] hover:bg-orange-50/50 transition flex items-center justify-center gap-1.5 py-2.5 bg-slate-50 rounded-xl border border-slate-200 outline-none"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset Filters
              </button>
            </div>
          </div>

          {/* Right Area: Products Grid */}
          <div className="lg:col-span-9 space-y-6 z-0 relative">
            
            {/* Header Info Bar with Search Input */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-2xl border border-slate-300 shadow-sm">
              <div className="relative w-full sm:w-72">
                <input
                  type="text"
                  placeholder="Search product or flavor..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-[#0F172A] outline-none focus:border-[#F97316] transition"
                />
              </div>

              <div className="flex items-center justify-between w-full sm:w-auto gap-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#F97316]" />
                  <p className="text-xs text-slate-700 font-medium">
                    Displaying <span className="font-bold text-[#0F172A]">{filteredProducts.length}</span> Products
                  </p>
                </div>
                <div className="text-[11px] text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 font-bold shrink-0">
                  ● Live WhatsApp Quotes
                </div>
              </div>
            </div>

            {/* Enhanced Product Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-slate-300 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:border-[#22C55E] transition-all duration-300 flex flex-col justify-between space-y-4 group relative z-0"
                >
                  <div className="space-y-3">
                    {/* Extra Large Off-White Image Container for High PNG Clarity */}
                    <div className="relative w-full h-48 sm:h-56 rounded-xl bg-[#F8FAFC] border border-slate-200 overflow-hidden flex items-center justify-center p-3 group-hover:bg-slate-100/80 transition-colors">
                      {/* {product.badge && (
                        <span className={`absolute top-2.5 left-2.5 ${product.badgeColor || "bg-[#22C55E]"} text-white text-[10px] font-bold px-2 py-0.5 rounded-md z-10 shadow-sm`}>
                          {product.badge}
                        </span>
                      )}
                      <button className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-red-500 shadow-sm transition z-10 outline-none">
                        <Heart className="w-3.5 h-3.5" />
                      </button> */}
                      
                      {/* Crisp PNG Image Tag */}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain group-hover:scale-108 transition-transform duration-300 drop-shadow-md"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="space-y-1.5 pt-1">
                      <div className="flex items-center justify-between text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                        <span>{product.brand}</span>
                        <span className="text-emerald-600 font-bold">{product.nicotine}</span>
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-[#0F172A] leading-snug line-clamp-2 h-10 group-hover:text-[#F97316] transition-colors">
                        {product.name}
                      </h3>
                    </div>
                  </div>

                  {/* Direct WhatsApp Call-To-Action Button */}
                  <a
                    href={`https://wa.me/353000000000?text=Hi,%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#22C55E] hover:bg-[#1ea950] text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition shadow-sm outline-none"
                  >
                    <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Trust Footer */}
      <section className="w-full bg-white py-8 px-6 sm:px-10 lg:px-16 border-t border-slate-300 mt-6 relative z-10 shadow-sm">
        <div className="max-w-[1680px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-center">
            <div className="flex items-center gap-3 p-2">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#F97316]" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-[#0F172A]">100% Genuine</h3>
                <p className="text-[10px] text-slate-500">Authentic Vapes &amp; Pouches</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 shrink-0">
                <Truck className="w-5 h-5 text-[#F97316]" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-[#0F172A]">Fast Delivery</h3>
                <p className="text-[10px] text-slate-500">Across Ireland</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 shrink-0">
                <Headphones className="w-5 h-5 text-[#F97316]" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-[#0F172A]">Expert Support</h3>
                <p className="text-[10px] text-slate-500">7 Days a Week</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 shrink-0">
                <Star className="w-5 h-5 text-[#F97316] fill-[#F97316]" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-[#0F172A]">Trusted Quality</h3>
                <p className="text-[10px] text-slate-500">Cashel Local Store</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}