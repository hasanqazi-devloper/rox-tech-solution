"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  MapPin,
  MessageCircle,
  SlidersHorizontal,
  ChevronRight,
  RotateCcw,
  ShieldCheck,
  Truck,
  Headphones,
  Star,
  ArrowRight,
  Sparkles,
  X,
  CheckCircle2
} from "lucide-react";

// Strictly Categorized VAPE_PRODUCTS Array with Exact Folder Filenames & SEO Content
const VAPE_PRODUCTS = [
  // --- Coils & Batteries (Coils Category) ---
  {
    id: 101,
    name: "SMOK TFV Series Replacement Coils",
    brand: "smok",
    flavor: "coils",
    nicotine: "Accessories",
    badge: "Essential",
    badgeColor: "bg-[#22C55E]",
    image: "/vapes/Vaporesso_High-Capacity_18650_Battery.png",
    description: "High-performance replacement mesh coils engineered for immense vapor production, superior wicking, and rich flavor clarity across sub-ohm tanks. Available locally at ROX Tech Solutions Cashel.",
    features: ["Pack of 3 Coils", "Advanced Mesh Heating", "Extended Coil Lifespan", "Authentic SMOK Product"]
  },
  {
    id: 102,
    name: "Vaporesso High-Capacity 18650 Battery",
    brand: "vaporesso",
    flavor: "coils",
    nicotine: "Hardware",
    badge: "Power",
    badgeColor: "bg-[#F97316]",
    image: "/vapes/SMOK_TFV_Series_Replacement_Coils.png",
    description: "Reliable high-drain rechargeable battery designed for safe, consistent power output and long usage hours across all advanced vape mods.",
    features: ["3000mAh Capacity", "Overheat Protection", "High Drain Performance", "Fast Recharge Support"]
  },

  // --- Vaping Kits & Devices (Devices Category) ---
  {
    id: 1,
    name: "Vaporesso Luxe X2 Pod Kit",
    brand: "vaporesso",
    flavor: "devices",
    nicotine: "0mg",
    badge: "Popular",
    badgeColor: "bg-[#F97316]",
    image: "/vapes/Vaporesso_Luxe_X2_Pod_Kit-removebg-preview.png",
    description: "Features a massive 2000mAh battery and COREX heating technology for ultimate flavor precision and long-lasting vaping sessions in Cashel.",
    features: ["2000mAh Battery", "COREX Flavor Tech", "AXON Chipset", "Adjustable Airflow"]
  },
  {
    id: 2,
    name: "Aspire Gotek X Pod Kit",
    brand: "aspire",
    flavor: "devices",
    nicotine: "3mg",
    badge: "Best Seller",
    badgeColor: "bg-[#22C55E]",
    image: "/vapes/Aspire_Gotek_X_Pod_Kit-removebg-preview.png",
    description: "Futuristic transparent body design housing a robust pod system. Ideal for beginners and experienced vapers seeking portability.",
    features: ["Transparent Body", "Draw-Activated", "Leakproof Refillable Pod", "Compact & Lightweight"]
  },
  {
    id: 3,
    name: "SMOK Nord 5 Pod Kit",
    brand: "smok",
    flavor: "devices",
    nicotine: "6mg",
    badge: "New",
    badgeColor: "bg-[#F97316]",
    image: "/vapes/SMOK_Nord_5_Pod_Kit-removebg-preview.png",
    description: "Delivering up to 80W of power, the SMOK Nord 5 utilizes a dual air inlet system and RPM 3 coils for stunning cloud production.",
    features: ["80W Max Output", "2000mAh Battery", "Stepless Airflow Control", "RPM 3 Coil Compatible"]
  },
  {
    id: 4,
    name: "OXVA Xlim Pro Pod Kit",
    brand: "oxva",
    flavor: "devices",
    nicotine: "3mg",
    badge: "Top Rated",
    badgeColor: "bg-[#22C55E]",
    image: "/vapes/OXVA_Xlim_Pro_Pod_Kit-removebg-preview.png",
    description: "An upgraded pro edition featuring dazzling RGB lighting, a 1000mAh battery, and a stellar 30W output for robust throat hits.",
    features: ["30W Max Power", "1000mAh Battery", "RGB Light Display", "Auto-draw & Button"]
  },
  {
    id: 5,
    name: "Voopoo Drag X Plus Kit",
    brand: "voopoo",
    flavor: "devices",
    nicotine: "6mg",
    badge: "Pro Series",
    badgeColor: "bg-[#F97316]",
    image: "/vapes/Voopoo_Drag_X_Plus_Kit-removebg-preview.png",
    description: "Single battery mod equipped with advanced GENE.FAN 2.0 chip, combining leather texture with durable metal alloy.",
    features: ["GENE.FAN 2.0 Chip", "100W Max Output", "Leather & Metal Design", "Type-C Fast Charge"]
  },
  {
    id: 6,
    name: "Innokin Endura T22 Pro Kit",
    brand: "innokin",
    flavor: "devices",
    nicotine: "12mg",
    badge: null,
    badgeColor: "",
    image: "/vapes/Innokin_Endura_T22_Pro_Kit-removebg-preview.png",
    description: "Classic mouth-to-lung vaping experience with easy top-fill design and adjustable wattage output levels.",
    features: ["3000mAh Battery", "4 Level Wattage Adjust", "Easy Top-Fill Tank", "Optimized MTL Draw"]
  },
  {
    id: 7,
    name: "SMOK Premium Gunmetal Vape Mod",
    brand: "smok",
    flavor: "devices",
    nicotine: "0mg",
    badge: "Heavy Mod",
    badgeColor: "bg-[#F97316]",
    image: "/vapes/SMOK_Premium_Gunmetal_Vape_Mod-removebg-preview.png",
    description: "Heavy-duty gunmetal mod crafted for cloud chasers who demand rugged durability and advanced temperature control modes.",
    features: ["Rugged Gunmetal Finish", "Advanced TC Mode", "Ergonomic Grip", "High Wattage Capability"]
  },

  // --- E-Liquids & Juices (Fruits / Menthol / Tobacco Categories) ---
  {
    id: 8,
    name: "Elfliq Blueberry Ice 10ml Nic Salt",
    brand: "elfliq",
    flavor: "fruits",
    nicotine: "10mg",
    badge: "Hot Seller",
    badgeColor: "bg-[#F97316]",
    image: "/vapes/Elfliq_Blueberry_Ice_10ml_Nic_Salt-removebg-preview.png",
    description: "Sweet, juicy blueberries layered with an ice-cold menthol finish, formulated in 10ml nicotine salt for smooth throat hits.",
    features: ["10ml Nic Salt", "50VG / 50PG Ratio", "Ice Menthol Blast", "Smooth Nicotine Absorption"]
  },
  {
    id: 9,
    name: "IVG Cola Ice 50ml Shortfill",
    brand: "ivg",
    flavor: "menthol",
    nicotine: "0mg",
    badge: "Ice Fresh",
    badgeColor: "bg-[#22C55E]",
    image: "/vapes/IVG_Cola_Ice_50ml_Shortfill-removebg-preview.png",
    description: "Classic fizzy cola taste infused with crushed ice cubes. Supplied in a 50ml shortfill bottle with space for a nicotine shot.",
    features: ["50ml Shortfill", "Classic Cola Flavor", "Refreshing Ice Hit", "Sub-Ohm Optimized"]
  },
  {
    id: 10,
    name: "Maryliq Cherry Fusion 10ml Nic Salt",
    brand: "maryliq",
    flavor: "fruits",
    nicotine: "20mg",
    badge: "Best Flavor",
    badgeColor: "bg-[#22C55E]",
    image: "/vapes/Maryliq_Cherry_Fusion_10ml_Nic_Salt-removebg-preview.png",
    description: "A rich fusion of ripe dark cherries delivering an explosion of sweet and tart notes with every single puff.",
    features: ["20mg Nic Salt", "Rich Cherry Blend", "Long-lasting Coil Life", "Premium Ingredients"]
  },
  {
    id: 11,
    name: "Nicomist Classic Tobacco 30ml",
    brand: "nicomist",
    flavor: "tobacco",
    nicotine: "12mg",
    badge: null,
    badgeColor: "",
    image: "/vapes/Nicomist_Classic_Tobacco_30ml-removebg-preview.png",
    description: "Smooth, earthy traditional tobacco flavor designed for transitioning smokers looking for an authentic taste profile.",
    features: ["Authentic Tobacco Taste", "30ml Bottle", "Smooth Throat Hit", "All-Day Vape"]
  },

  // --- Disposables & Pod Devices (Pods Category) ---
  {
    id: 12,
    name: "Lost Mary BM600 Orange Ice Disposable",
    brand: "lostmary",
    flavor: "pods",
    nicotine: "20mg",
    badge: "Trending",
    badgeColor: "bg-[#F97316]",
    image: "/vapes/Lost_Mary_BM600_Orange_Ice_Disposable-removebg-preview.png",
    description: "Compact bottle-shaped disposable packed with zesty orange and frosty ice. Zero maintenance required.",
    features: ["Up to 600 Puffs", "20mg Nic Salt", "Draw Activated", "Vibrant Citrus Taste"]
  },
  {
    id: 13,
    name: "Lost Mary BM6000 Big Puffs Device",
    brand: "lostmary",
    flavor: "pods",
    nicotine: "20mg",
    badge: "6000 Puffs",
    badgeColor: "bg-[#22C55E]",
    image: "/vapes/Lost_Mary_BM6000_Big_Puffs_Device-removebg-preview.png",
    description: "Massive 6000 puff capacity device featuring a built-in rechargeable battery and visible e-liquid container.",
    features: ["6000 Puffs Capacity", "Rechargeable Battery", "Container Window", "Consistent Flavor"]
  },
  {
    id: 14,
    name: "IVG Smart Max 10K Tropical Mango",
    brand: "ivg",
    flavor: "pods",
    nicotine: "20mg",
    badge: "10K Puffs",
    badgeColor: "bg-[#F97316]",
    image: "/vapes/IVG_Smart_Max_10K_Tropical_Mango-removebg-preview.png",
    description: "Exotic tropical mango flavor built for endurance with up to 10,000 puffs of satisfying satisfaction.",
    features: ["10,000 Puffs", "Tropical Mango Flavor", "Smart Display Battery", "Mesh Coiling"]
  },
  {
    id: 15,
    name: "IVG Pro 10K Refillable Pod Kit",
    brand: "ivg",
    flavor: "pods",
    nicotine: "20mg",
    badge: "Popular",
    badgeColor: "bg-[#22C55E]",
    image: "/vapes/IVG_Pro_10K_Refillable_Pod_Kit-removebg-preview.png",
    description: "Advanced refillable pod kit offering long-term economic vaping with premium IVG flavor pods.",
    features: ["Refillable System", "10K Eco Friendly", "Fast USB-C Charging", "Ergonomic Design"]
  },

  // --- Nicotine Pouches (Pouches Category) ---
  {
    id: 16,
    name: "Cuba White Ultra Strong Pouches",
    brand: "cuba",
    flavor: "pouches",
    nicotine: "18mg",
    badge: "Ultra Strong",
    badgeColor: "bg-[#F97316]",
    image: "/vapes/Cuba_White_Ultra_Strong_Pouches-removebg-preview.png",
    description: "Tobacco-free ultra strong nicotine pouches delivering a rapid and enduring nicotine release.",
    features: ["18mg Strength", "100% Tobacco Free", "Slim Comfortable Fit", "Long Release Profile"]
  },
  {
    id: 17,
    name: "Cuba Black Extreme Nicotine Pouches",
    brand: "cuba",
    flavor: "pouches",
    nicotine: "24mg",
    badge: "Extreme",
    badgeColor: "bg-[#22C55E]",
    image: "/vapes/Cuba_Black_Extreme_Nicotine_Pouches-removebg-preview.png",
    description: "Extreme strength nicotine pouches tailored for experienced users seeking maximum intensity.",
    features: ["24mg Extreme Strength", "Discreet Under Lip", "No Stain Formula", "Intense Kick"]
  },
  {
    id: 18,
    name: "PABLO White Ice Cold Nicotine Tin",
    brand: "pablo",
    flavor: "pouches",
    nicotine: "30mg",
    badge: "Extra Freeze",
    badgeColor: "bg-[#F97316]",
    image: "/vapes/PABLO_White_Ice_Cold_Nicotine_Tin-removebg-preview.png",
    description: "Legendary ice-cold mint sensation combined with an exceptionally high nicotine content.",
    features: ["30mg High Strength", "Ice Cold Mint", "20 Pouches Per Tin", "Instant Absorption"]
  },
  {
    id: 19,
    name: "KILLA Cold Mint Nicotine Pouches",
    brand: "killa",
    flavor: "pouches",
    nicotine: "16mg",
    badge: "Best Seller",
    badgeColor: "bg-[#22C55E]",
    image: "/vapes/KILLA_Cold_Mint_Nicotine_Pouches-removebg-preview.png",
    description: "Crisp spearmint and peppermint flavor profile with a steady, satisfying nicotine delivery.",
    features: ["16mg Nicotine", "Refreshing Mint", "Soft Pouch Material", "Clean Experience"]
  },
  {
    id: 20,
    name: "Iceberg Extra Cool Nicotine Tin",
    brand: "iceberg",
    flavor: "pouches",
    nicotine: "20mg",
    badge: "Extra Cool",
    badgeColor: "bg-[#22C55E]",
    image: "/vapes/Iceberg_Extra_Cool_Nicotine_Tin-removebg-preview.png",
    description: "An arctic blast of menthol paired with a potent nicotine kick for ultimate refreshment.",
    features: ["20mg Strength", "Arctic Menthol Blast", "Premium Metal Tin", "Fast Action"]
  },

  // --- Group Collections ---
  {
    id: 21,
    name: "Vibrant Fruit E-Liquid 10ml Multi-Pack",
    brand: "rox",
    flavor: "fruits",
    nicotine: "10mg",
    badge: "E-Liquid Pack",
    badgeColor: "bg-[#22C55E]",
    image: "/vapes/Vibrant_Fruit_E-Liquid_10ml_Multi-Pack-removebg-preview.png",
    description: "A handpicked multi-pack collection of top fruit e-liquids offering variety and value.",
    features: ["Multi-Flavor Pack", "10ml Bottles", "Assorted Fruit Notes", "Great Value"]
  }
];

export default function VapeShopPage() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);
  const [selectedNicotine, setSelectedNicotine] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Selected product for Modal Popup
  const [selectedProduct, setSelectedProduct] = useState<typeof VAPE_PRODUCTS[0] | null>(null);

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
      const matchCategory = !activeCategory || product.flavor === activeCategory || (activeCategory === "fruits" && (product.flavor === "fruits" || product.flavor === "menthol" || product.flavor === "tobacco"));
      const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase());

      return matchBrand && matchFlavor && matchNicotine && matchCategory && matchSearch;
    });
  }, [selectedBrands, selectedFlavors, selectedNicotine, activeCategory, searchQuery]);

  return (
    <div className="w-full bg-[#F1F5F9] min-h-screen text-[#0F172A] font-sans relative z-0">

      {/* ================= 1. HERO BANNER SECTION ================= */}
      <section className="relative w-full bg-[#D1D5DB] overflow-hidden border-b border-gray-300/60">
        <div className="hidden lg:block">
          <div className="absolute inset-0 w-full h-full flex justify-end">
            <div className="relative w-full lg:w-[75%] h-full">
              <img
                src="/vape-hero-page.png"
                alt="ROX Tech Store Showcase in Cashel"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-right"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#D1D5DB] via-[#D1D5DB]/80 lg:via-[#D1D5DB]/40 to-transparent" />
            </div>
          </div>

          <div className="relative z-10 max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-20 lg:py-24">
            <div className="max-w-xl space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-xs font-bold text-[#0F172A] shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-[#22C55E] fill-[#22C55E]" />
                <span>Cashel, Ireland</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] leading-[1.15] tracking-tight">
                Premium Vapes, Coils, Juices &amp; <br /> Nicotine Pouches Hub <span className="text-[#F97316]">Cashel</span>
              </h1>

              <p className="text-xs sm:text-sm text-gray-800 font-medium leading-relaxed max-w-lg">
                Explore authentic vaping kits, replacement coils, batteries, premium e-liquids &amp; pouches in Cashel.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <Link
                  href="/shop"
                  className="bg-[#F97316] hover:bg-[#EA580C] text-white px-7 py-3.5 rounded-full text-xs font-bold flex items-center gap-2 transition-all shadow-md"
                >
                  <span>Explore Our Shop</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="https://wa.me/353896091839"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#00D66C] hover:bg-[#00B85C] text-white px-7 py-3.5 rounded-full text-xs font-bold flex items-center gap-2 transition-all shadow-md"
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
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-xs font-bold text-[#0F172A] shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-[#22C55E] fill-[#22C55E]" />
              <span>Cashel, Ireland</span>
            </div>

            <h1 className="text-3xl font-black text-[#0F172A] leading-tight tracking-tight">
              Premium Vapes, Coils &amp; Pouches Hub <span className="text-[#F97316]">Cashel</span>
            </h1>

            <p className="text-xs text-gray-700 font-medium leading-relaxed">
              Explore authentic vaping kits, replacement coils, batteries &amp; e-liquids in Cashel.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <Link
                href="/shop"
                className="flex-1 bg-[#F97316] text-white py-3 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 shadow-md"
              >
                <span>Explore Shop</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href="https://wa.me/353896091839"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#00D66C] text-white py-3 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 shadow-md"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="w-full rounded-2xl overflow-hidden shadow-md border border-gray-300/80 aspect-[16/9] bg-white">
            <img
              src="/vape-hero-page.png"
              alt="ROX Tech Store Showcase in Cashel"
              loading="lazy"
              decoding="async"
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
              {
                title: "Vaping Kits",
                img: "/vapes/Vaping_Kits-removebg-preview.png",
                key: "devices"
              },
              {
                title: "Coils & Batteries",
                img: "/vapes/coils.png",
                key: "coils"
              },
              {
                title: "All Juices",
                img: "/vapes/All_Juices-removebg-preview.png",
                key: "fruits"
              },
              {
                title: "Disposables & Pods",
                img: "/vapes/Disposables___Pods-removebg-preview.png",
                key: "pods"
              },
              {
                title: "Nicotine Pouches",
                img: "/vapes/Nicotine_Pouches-removebg-preview.png",
                key: "pouches"
              },
              {
                title: "All Products",
                img: "/vapes/All_Products-removebg-preview.png",
                key: null
              }
            ].map((cat, idx) => (
              <div
                key={idx}
                onClick={() => setActiveCategory(cat.key)}
                className={`min-w-[150px] sm:min-w-0 flex-1 bg-white border rounded-2xl p-3.5 shadow-sm hover:shadow-md transition cursor-pointer group flex flex-col justify-between h-40 snap-start outline-none ${activeCategory === cat.key ? "border-[#F97316] ring-2 ring-[#F97316]/30 bg-orange-50/40" : "border-slate-300"
                  }`}
              >
                <div className="w-full h-24 flex items-center justify-center p-1 bg-slate-50/80 rounded-xl overflow-hidden">
                  <img 
                    src={cat.img} 
                    alt={cat.title} 
                    loading="lazy"
                    decoding="async"
                    className="max-h-full max-w-full object-contain group-hover:scale-120 transition-transform duration-300 scale-130" 
                  />
                </div>
                <div className="flex items-center justify-between pt-1.5 border-t border-slate-100">
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
                  { name: "Coils & Batteries", key: "coils" },
                  { name: "Fruits & Juices", key: "fruits" },
                  { name: "Disposables & Pods", key: "pods" },
                  { name: "Nicotine Pouches", key: "pouches" }
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
                  placeholder="Search product, coil, battery..."
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
                  onClick={() => setSelectedProduct(product)}
                  className="bg-white border border-slate-300 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:border-[#22C55E] transition-all duration-300 flex flex-col justify-between space-y-4 group relative z-0 cursor-pointer"
                >
                  <div className="space-y-3">
                    <div className="relative w-full h-64 sm:h-72 rounded-xl bg-[#F8FAFC] border border-slate-200 overflow-hidden flex items-center justify-center p-4 group-hover:bg-slate-100/80 transition-colors">
                      {product.badge && (
                        <span className={`absolute top-2.5 left-2.5 ${product.badgeColor || "bg-[#22C55E]"} text-white text-[10px] font-bold px-2 py-0.5 rounded-md z-10 shadow-sm`}>
                          {product.badge}
                        </span>
                      )}

                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        decoding="async"
                        className="max-h-full max-w-full object-contain group-hover:scale-145 transition-transform duration-300 drop-shadow-lg scale-140"
                      />
                    </div>

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

                  <a
                    href={`https://wa.me/353896091839?text=Hi,%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
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

      {/* ================= 4. PERFECT LOWER-START MODAL (CLEARS NAVBAR COMPLETELY WITH PT-36 / PT-44) ================= */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[99999] flex items-start justify-center p-4 sm:p-6 pt-36 sm:pt-44 bg-black/75 backdrop-blur-md animate-fadeIn overflow-y-auto">
          <div className="bg-white border border-slate-300 rounded-3xl max-w-4xl w-[95%] sm:w-[85%] lg:w-[75%] p-6 sm:p-10 shadow-2xl relative space-y-6 max-h-[85vh] overflow-y-auto my-auto mb-12">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full p-2.5 transition outline-none z-10 shadow-md"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Large Centered Modal Image */}
              <div className="w-full h-80 sm:h-96 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center p-6 shadow-inner">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  loading="lazy"
                  decoding="async"
                  className="max-h-full max-w-full object-contain drop-shadow-2xl scale-130"
                />
              </div>

              {/* Modal Information & SEO Rich Content */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-md bg-orange-100 text-[#F97316] uppercase tracking-wider">
                    {selectedProduct.brand}
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-md bg-emerald-100 text-emerald-700">
                    {selectedProduct.nicotine}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0F172A] leading-tight">
                  {selectedProduct.name}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {selectedProduct.description}
                </p>

                {/* Extended SEO Value Section */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                  <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
                    <span>Why Choose This Product at ROX Tech Cashel</span>
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Verified authentic stock available directly at our physical store in Cashel, County Tipperary. Enjoy expert local advice, quick WhatsApp inquiries, and guaranteed top-tier performance for all vaping kits, e-liquids, coils, and pouches.
                  </p>
                </div>

                {/* Key Features List */}
                <div className="space-y-2 pt-1">
                  <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">Key Specifications:</h4>
                  <div className="grid grid-cols-2 gap-2.5">
                    {selectedProduct.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer WhatsApp CTA */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 font-medium">
                📍 Available now at ROX Tech Store, Cashel, Co. Tipperary.
              </div>
              <a
                href={`https://wa.me/353896091839?text=Hi,%20I%20want%20to%20order%20or%20inquire%20about%20${encodeURIComponent(selectedProduct.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#22C55E] hover:bg-[#1ea950] text-white px-8 py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition shadow-lg outline-none"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Instant WhatsApp Quote</span>
              </a>
            </div>

          </div>
        </div>
      )}

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
                <p className="text-[10px] text-slate-500">Authentic Vapes &amp; Coils</p>
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