"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { 
  MapPin, 
  MessageCircle, 
  Search, 
  SlidersHorizontal, 
  ShieldCheck, 
  Users, 
  Send,
  Navigation,
  ArrowRight,
  RotateCcw
} from "lucide-react";

// Complete Categorized Inventory Mapped to Public Folders (Prices removed for competitive protection)
const INITIAL_PRODUCTS = [
  // --- Smartphones & Tablets ---
  { id: 1, name: "iPhone 15 Pro Max", category: "smartphones", brand: "apple", specs: "256GB | Unlocked", image: "/products/iphone.png" },
  { id: 2, name: "iPhone 18 Pro Max Concept", category: "smartphones", brand: "apple", specs: "Next-Gen Edition", image: "/products/iphone-18.png" },
  { id: 3, name: "Samsung Galaxy S24 Ultra", category: "smartphones", brand: "samsung", specs: "512GB | Unlocked", image: "/products/samsung.png" },
  { id: 4, name: "Apple iPad Pro", category: "smartphones", brand: "apple", specs: "12.9-inch | Cellular", image: "/products/ipad.png" },
  { id: 5, name: "Samsung Galaxy Tab S9", category: "smartphones", brand: "samsung", specs: "AMOLED Display", image: "/products/sumsung-tab.png" },
  { id: 6, name: "Hoco Android Tablet", category: "smartphones", brand: "hoco", specs: "Performance Edition", image: "/products/hoco-tab.png" },

  // --- Laptops & Computing ---
  { id: 7, name: "Apple MacBook Pro M3", category: "laptops", brand: "apple", specs: "Space Black | 16GB RAM", image: "/products/macbppk-pro-m3.png" },
  { id: 8, name: "ROG Gaming Laptop", category: "laptops", brand: "asus", specs: "High Performance GPU", image: "/products/ROG_Gaming_Laptop.png" },
  { id: 9, name: "Foldable Touchscreen Laptop", category: "laptops", brand: "lenovo", specs: "Dual Screen Foldable", image: "/products/foldable-touchscreen-laptop.png" },
  { id: 10, name: "Custom Gaming PC Rig", category: "laptops", brand: "custom", specs: "RGB Liquid Cooled", image: "/products/custom-gamming-pc.png" },
  { id: 11, name: "4K Curved Desktop Monitor", category: "laptops", brand: "samsung", specs: "32-inch UltraWide", image: "/products/4k-curved-desktop.png" },
  { id: 12, name: "External Portable SSD Storage", category: "laptops", brand: "sandisk", specs: "1TB High Speed", image: "/products/External_Portable_SSD_Hard_Drive_product_shot.png" },

  // --- Gaming Zone ---
  { id: 13, name: "Sony PlayStation 5 Console", category: "gadgets", brand: "sony", specs: "Disc Edition", image: "/products/Sony_PlayStation_5_Console_studio_shot.png" },
  { id: 14, name: "Xbox Series X Console", category: "gadgets", brand: "microsoft", specs: "1TB SSD Gaming", image: "/products/Xbox_Series_X_Console.png" },
  { id: 15, name: "Nintendo Switch OLED", category: "gadgets", brand: "nintendo", specs: "White Console Edition", image: "/products/Nintendo_Switch_OLED.png" },
  { id: 16, name: "PS5 DualSense Controller", category: "gadgets", brand: "sony", specs: "Wireless Controller", image: "/products/PS5_DualSense_Controller.png" },
  { id: 17, name: "Logitech G923 Racing Wheel", category: "gadgets", brand: "logitech", specs: "TrueForce Feedback", image: "/products/Logitech_G923_Gaming_Steering_Wheel.png" },
  { id: 18, name: "Meta Quest 3 VR Headset", category: "gadgets", brand: "meta", specs: "Mixed Reality", image: "/products/Meta_Quest_3_VR_Headset.png" },
  { id: 19, name: "Portable Gaming Projector", category: "gadgets", brand: "generic", specs: "1080p HD Display", image: "/products/Portable_Gaming_Projector.png" },
  { id: 20, name: "Android TV Gaming Stick", category: "gadgets", brand: "generic", specs: "4K Streaming", image: "/products/Android_TV_Gaming_Stick.png" },
  { id: 21, name: "RGB Wireless Gaming Mouse", category: "gadgets", brand: "generic", specs: "High DPI Optical", image: "/products/RGB_Wireless_Gaming_Mouse.png" },
  { id: 22, name: "Mechanical RGB Gaming Keyboard", category: "gadgets", brand: "generic", specs: "Mechanical Switches", image: "/products/Mechanical_RGB_Gaming_Keyboard.png" },
  { id: 23, name: "Laptop Gaming Cooling Pad", category: "gadgets", brand: "generic", specs: "Dual Fan Cooling", image: "/products/Laptop_Gaming_Cooling_Pad_RGB.png" },
  { id: 24, name: "Over-Ear Gaming Headset", category: "gadgets", brand: "generic", specs: "Surround Sound & Mic", image: "/products/Over_Ear_Gaming_Headset_with_Mic.png" },

  // --- Audio & Wearables ---
  { id: 25, name: "Apple AirPods Pro 2", category: "audio", brand: "apple", specs: "USB-C | ANC", image: "/products/Apple_AirPods_Pro_2.png" },
  { id: 26, name: "JBL Bluetooth Speaker", category: "audio", brand: "jbl", specs: "Waterproof Portable", image: "/products/JBL_Bluetooth_Speaker.png" },
  { id: 27, name: "JBL Wireless Earbuds", category: "audio", brand: "jbl", specs: "Deep Bass Sound", image: "/products/JBL_Wireless_Earbuds.png" },
  { id: 28, name: "Wireless Earbuds Case", category: "audio", brand: "generic", specs: "Universal Charging", image: "/products/Wireless_Earbuds_Charging_Case.png" },
  { id: 29, name: "Wireless Vlogging Microphone", category: "audio", brand: "generic", specs: "Type-C Clip-on Mic", image: "/products/Wireless_Vlogging_Microphone_Type-C.png" },
  { id: 30, name: "Studio Wired Headphones", category: "audio", brand: "generic", specs: "Over-Ear Monitoring", image: "/products/Studio_Wired_Over_Ear_Headphones.png" },
  { id: 31, name: "Apple Watch Ultra 2", category: "audio", brand: "apple", specs: "Titanium Case", image: "/products/Apple_Watch_Ultra_2.png" },
  { id: 32, name: "Samsung Galaxy Watch 6", category: "audio", brand: "samsung", specs: "Health Tracking", image: "/products/Samsung_Galaxy_Watch_6.png" },
  { id: 33, name: "Hoco Smartwatch", category: "audio", brand: "hoco", specs: "Bluetooth Calling", image: "/products/Hoco_Smartwatch.png" },
  { id: 34, name: "Casio G-Shock Watch", category: "audio", brand: "casio", specs: "Shock Resistant", image: "/products/Casio_G-Shock_Watch.png" },
  { id: 35, name: "Smart Health Ring", category: "audio", brand: "generic", specs: "Sleep & Fitness Tracker", image: "/products/Smart_Health_Ring.png" },

  // --- Accessories & Chargers ---
  { id: 36, name: "iPhone Camera Lens Protector", category: "accessories", brand: "generic", specs: "Tempered Glass", image: "/products/iPhone_Camera_Lens_Protector.png" },
  { id: 37, name: "Transparent Shockproof Case", category: "accessories", brand: "generic", specs: "Anti-Yellowing", image: "/products/Transparent_Shockproof_Phone_Case.png" },
  { id: 38, name: "Tempered Glass Screen Protector", category: "accessories", brand: "generic", specs: "9H Hardness Box", image: "/products/Tempered_Glass_Screen_Protector_box.png" },
  { id: 39, name: "Apple Watch Silicone Strap", category: "accessories", brand: "apple", specs: "Comfortable Fit", image: "/products/Apple_Watch_Silicone_strap.png" },
  { id: 40, name: "SanDisk Micro SD Card", category: "accessories", brand: "sandisk", specs: "Extreme Pro 128GB", image: "/products/SanDisk_Micro_SD_Card_Extreme_product_shot.png" },
  { id: 41, name: "Multi-Socket Extension Lead", category: "accessories", brand: "generic", specs: "With USB Ports", image: "/products/Multi_Socket_Extension_Lead_with_USB.png" },
  { id: 42, name: "Type-C Laptop Charger Adapter", category: "accessories", brand: "generic", specs: "Fast Power Delivery", image: "/products/Type-C_Laptop_Charger_Adapter.png" },
  { id: 43, name: "Magnetic Smart Watch Cable", category: "accessories", brand: "generic", specs: "USB Charging Dock", image: "/products/Magnetic_Smart_Watch_Charging_Cable.png" },
  { id: 44, name: "65W GaN Dual USB Fast Charger", category: "accessories", brand: "generic", specs: "Compact Wall Plug", image: "/products/65W_GaN_Dual_USB_Fast_Charger.png" },
  { id: 45, name: "MagSafe Car Wireless Charger", category: "accessories", brand: "generic", specs: "Vent Mount Holder", image: "/products/MagSafe_Car_Wireless_Charger_Mount.png" },
  { id: 46, name: "20000mAh Power Bank", category: "accessories", brand: "generic", specs: "Fast Portable Battery", image: "/products/20000mAh_Fast_Charging_Power_Bank_product_shot.png" },
  { id: 47, name: "Universal Travel Adapter", category: "accessories", brand: "generic", specs: "All-in-One Plugs", image: "/products/Universal_All_in_One_Travel_Adapter.png" },
  { id: 48, name: "3.5mm Audio Cable", category: "accessories", brand: "generic", specs: "Auxiliary Stereo Wire", image: "/products/3.5mm_Audio_Cable.png" },
  { id: 49, name: "High Speed Braided HDMI Cable", category: "accessories", brand: "generic", specs: "4K Support", image: "/products/High_Speed_Braided_HDMI_Cable.png" },
  { id: 50, name: "Apple AirTag", category: "accessories", brand: "apple", specs: "Item Tracker", image: "/products/Apple_AirTag.png" },
  { id: 51, name: "Apple Pencil 2nd Gen", category: "accessories", brand: "apple", specs: "Stylus for iPad", image: "/products/pple_Pencil_2nd_Gen.png" },

  // --- Smart Gadgets, Security & Toys ---
  { id: 52, name: "Mini Foldable Camera Drone", category: "gadgets", brand: "generic", specs: "HD Aerial Camera", image: "/products/Mini_Foldable_Camera_Drone.png" },
  { id: 53, name: "Remote Control Racing Car", category: "gadgets", brand: "generic", specs: "High Speed Toy", image: "/products/Remote_Control_Racing_Car.png" },
  { id: 54, name: "Outdoor Smart Security Camera", category: "gadgets", brand: "generic", specs: "WiFi IP Camera", image: "/products/Outdoor_Smart_Security_Camera_Wireless.png" },
  { id: 55, name: "Smart Video Doorbell Camera", category: "gadgets", brand: "generic", specs: "Two-Way Audio", image: "/products/Smart_Video_Doorbell_Camera.png" },
  { id: 56, name: "TP-Link WiFi Range Extender", category: "gadgets", brand: "tplink", specs: "Signal Booster", image: "/products/TP-Link_WiFi_Range_Extender.png" },
  { id: 57, name: "Amazon Fire TV Stick 4K", category: "gadgets", brand: "amazon", specs: "Streaming Device", image: "/products/Amazon_Fire_TV_Stick_4K.png" },
  { id: 58, name: "Desktop Selfie Ring Light", category: "gadgets", brand: "generic", specs: "With Phone Holder", image: "/products/Desktop_Selfie_Ring_Light_with_Phone_Holder.png" },
  { id: 59, name: "1080p HD Webcam", category: "gadgets", brand: "generic", specs: "With Privacy Cover", image: "/products/1080p_HD_Webcam_with_Privacy_Cover.png" },
  { id: 60, name: "RGB LED Strip Light Roll", category: "gadgets", brand: "generic", specs: "Remote Control", image: "/products/RGB_LED_Strip_Light_Roll.png" },
  { id: 61, name: "Digital Voice Recorder", category: "gadgets", brand: "generic", specs: "Portable Audio Recorder", image: "/products/Digital_Voice_Recorder_Portable.png" },
  { id: 62, name: "Auto Face Tracking Phone Holder", category: "gadgets", brand: "generic", specs: "Smart Gimbal Mount", image: "/products/Auto_Face_Tracking_Phone_Holder.png" },
  { id: 63, name: "Flexible Phone Tripod Stand", category: "gadgets", brand: "generic", specs: "Compact & Bendable", image: "/products/Flexible_Phone_Tripod_Stand.png" },
  { id: 64, name: "3-Axis Smartphone Gimbal", category: "gadgets", brand: "generic", specs: "Stabilizer", image: "/products/3_Axis_Smartphone_Gimbal_Stabilizer.png" }
];

export default function DynamicShopPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("popular");

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleResetFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSearchQuery("");
    setSortBy("popular");
  };

  const filteredProducts = useMemo(() => {
    return INITIAL_PRODUCTS.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.specs.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(product.category);

      const matchesBrand =
        selectedBrands.length === 0 || selectedBrands.includes(product.brand);

      return matchesSearch && matchesCategory && matchesBrand;
    });
  }, [searchQuery, selectedCategories, selectedBrands]);

  return (
    <div className="w-full bg-[#C0C0C0] min-h-screen text-[#0F172A] font-sans">

      {/* ================= 1. HERO BANNER SECTION ================= */}
      <section className="relative w-full bg-[#D1D5DB] overflow-hidden border-b border-gray-300/60">
        <div className="hidden lg:block">
          <div className="absolute inset-0 w-full h-full flex justify-end">
            <div className="relative w-full lg:w-[75%] h-full">
              <img
                src="/shop-4.jpeg"
                alt="Shop Tech & Accessories Showcase"
                className="w-full h-full object-cover object-right"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#D1D5DB] via-[#D1D5DB]/80 lg:via-[#D1D5DB]/40 to-transparent" />
            </div>
          </div>

          <div className="relative z-10 max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-20 lg:py-24">
            <div className="max-w-xl space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-xs font-bold text-[#0F172A] shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-[#22C55E] fill-[#22C55E]" />
                <span>Cashel, Ireland</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] leading-[1.15] tracking-tight">
                Shop Technology & <br />
                <span className="text-[#F97316]">Accessories</span>
              </h1>

              <p className="text-xs sm:text-sm text-gray-800 font-medium leading-relaxed max-w-lg">
                Latest devices, premium accessories and expert advice — all in one place. Quality products, trusted brands and local support in Cashel.
              </p>

              <div className="relative max-w-xl pt-2">
                <div className="relative flex items-center w-full">
                  <div className="absolute left-4 text-gray-400 pointer-events-none">
                    <Search className="w-4 h-4" />
                  </div>

                  <input
                    type="text"
                    placeholder="Search for products, brands or categories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/90 backdrop-blur-sm border border-gray-300/80 rounded-full pl-11 pr-32 py-3.5 text-xs font-medium text-[#0F172A] placeholder-gray-400 shadow-sm transition-all duration-200 focus:bg-white focus:border-[#F97316] focus:ring-4 focus:ring-[#F97316]/10 outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="block lg:hidden px-5 py-8 space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-xs font-bold text-[#0F172A] shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-[#22C55E] fill-[#22C55E]" />
              <span>Cashel, Ireland</span>
            </div>

            <h1 className="text-3xl font-black text-[#0F172A] leading-tight tracking-tight">
              Shop Technology & <br />
              <span className="text-[#F97316]">Accessories</span>
            </h1>

            <p className="text-xs text-gray-700 font-medium leading-relaxed">
              Latest devices, premium accessories and expert advice — all in one place in Cashel.
            </p>

            <div className="relative w-full pt-1">
              <div className="relative flex items-center w-full">
                <div className="absolute left-3.5 text-gray-400 pointer-events-none">
                  <Search className="w-3.5 h-3.5" />
                </div>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-gray-300/80 rounded-full pl-9 pr-4 py-3 text-xs font-medium text-[#0F172A] placeholder-gray-400 shadow-xs focus:border-[#F97316] outline-none"
                />
              </div>
            </div>
          </div>

          <div className="w-full rounded-2xl overflow-hidden shadow-md border border-gray-300/80 aspect-[16/9] bg-white">
            <img src="/shop-4.jpeg" alt="Shop Showcase" className="w-full h-full object-cover object-center" />
          </div>
        </div>
      </section>

      {/* ================= 2. CATEGORY NAVIGATION CARDS BAR ================= */}
      <section className="w-full bg-white py-6 px-6 sm:px-10 lg:px-16 border-b border-gray-300/60">
        <div className="max-w-[1680px] mx-auto"> 
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"> 
            {[
              { title: "Smartphones & Tabs", key: "smartphones", desc: "iPhone • Samsung • iPad", img: "/cat-mobile.png" },
              { title: "Laptops & Computing", key: "laptops", desc: "MacBooks • PCs • Storage", img: "/cat-lap.png" },
              { title: "Gaming Zone", key: "gadgets", desc: "PS5 • Xbox • Controllers", img: "/cat-game.png" },
              { title: "Audio & Watches", key: "audio", desc: "AirPods • Speakers • Smartwatch", img: "/cat-watch.png" },
              { title: "Accessories & Chargers", key: "accessories", desc: "Cables • Adapters • Cases", img: "/cat-case.png" }
            ].map((cat) => (
              <div
                key={cat.key}
                onClick={() => toggleCategory(cat.key)}
                className={`bg-white border rounded-2xl p-4 shadow-sm transition-all duration-200 cursor-pointer group flex flex-col justify-between h-44 ${
                  selectedCategories.includes(cat.key)
                    ? "border-[#F97316] ring-1 ring-[#F97316]"
                    : "border-gray-200 hover:border-[#F97316] hover:shadow-md"
                }`}
              >
                <div className="w-full h-24 flex items-center justify-center p-1">
                  <img src={cat.img} alt={cat.title} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200" />
                </div>
                <div className="flex items-end justify-between pt-2 border-t border-gray-100">
                  <div className="space-y-0.5">
                    <h3 className="text-xs font-bold text-[#0F172A] leading-tight">{cat.title}</h3>
                    <p className="text-[10px] text-gray-500 font-medium leading-tight">{cat.desc}</p>
                  </div>
                  <div className="w-6 h-6 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-[#F97316] group-hover:text-white group-hover:border-[#F97316] transition shrink-0">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. MAIN CONTENT: WORKING FILTERS & PRODUCT GRID ================= */}
      <section className="w-full bg-[#C0C0C0] py-12 px-6 sm:px-10 lg:px-16 border-b border-gray-300/60">
        <div className="max-w-[1680px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sidebar: Interactive Filters */}
          <div className="lg:col-span-3 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#0F172A] flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#F97316]" />
                Filters
              </h3>
              <button
                onClick={handleResetFilters}
                className="text-[11px] text-[#F97316] font-bold hover:underline flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" /> Reset
              </button>
            </div>

            {/* Category Filter */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-[#0F172A]">Category</h4>
              <div className="space-y-2 text-xs text-gray-700">
                {[
                  { name: "Smartphones & Tabs", key: "smartphones" },
                  { name: "Laptops & Computing", key: "laptops" },
                  { name: "Gaming Zone", key: "gadgets" },
                  { name: "Audio & Watches", key: "audio" },
                  { name: "Accessories", key: "accessories" }
                ].map((item) => (
                  <label key={item.key} className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(item.key)}
                        onChange={() => toggleCategory(item.key)}
                        className="rounded text-[#F97316] focus:ring-[#F97316]"
                      />
                      <span>{item.name}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Brand Filter */}
            <div className="space-y-3 pt-2 border-t border-gray-100">
              <h4 className="text-xs font-bold text-[#0F172A]">Brand</h4>
              <div className="space-y-2 text-xs text-gray-700 max-h-48 overflow-y-auto">
                {["apple", "samsung", "hoco", "asus", "sony", "microsoft", "nintendo", "meta", "jbl", "sandisk"].map((brand) => (
                  <label key={brand} className="flex items-center justify-between cursor-pointer capitalize">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                        className="rounded text-[#F97316] focus:ring-[#F97316]"
                      />
                      <span>{brand}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Product Listing Area */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Sorting Header */}
            <div className="bg-white border border-gray-200 rounded-2xl px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-sm">
              <div>
                <h2 className="text-sm font-bold text-[#0F172A]">Shop Catalog ({filteredProducts.length} Items)</h2>
                <p className="text-[11px] text-gray-500">Inquire instantly via WhatsApp to get competitive pricing</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-600 font-medium">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-gray-50 border border-gray-300 rounded-xl px-3 py-2 text-xs text-[#0F172A] outline-none"
                >
                  <option value="popular">Popularity</option>
                  <option value="az">Name: A to Z</option>
                </select>
              </div>
            </div>

            {/* Grid Layout: Products + Right Sidebars */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
              
              {/* Filtered Products Grid (Prices Hidden) */}
              <div className="xl:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <div key={product.id} className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:border-[#F97316] transition flex flex-col justify-between space-y-4">
                      <div className="space-y-3">
                        <div className="relative w-full h-44 rounded-xl bg-gray-50 overflow-hidden flex items-center justify-center p-2">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-xs font-bold text-[#0F172A]">{product.name}</h3>
                          <p className="text-[11px] text-gray-500">{product.specs}</p>
                        </div>
                      </div>
                      <div className="space-y-2 pt-2">
                        <a
                          href={`https://wa.me/353000000000?text=Hi,%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-[#00D66C] hover:bg-[#00B85C] text-white py-2.5 rounded-xl text-[11px] font-bold flex items-center justify-center gap-1.5 transition shadow-sm"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-white" />
                          <span>WhatsApp Inquiry</span>
                        </a>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 bg-white rounded-2xl p-8 text-center space-y-3 border border-gray-200">
                    <p className="text-xs text-gray-500 font-bold">No products match your selected filters.</p>
                    <button
                      onClick={handleResetFilters}
                      className="bg-[#F97316] text-white px-4 py-2 rounded-xl text-xs font-bold"
                    >
                      Reset All Filters
                    </button>
                  </div>
                )}
              </div>

              {/* Right Side Banners & Quick Inquiry Form */}
              <div className="xl:col-span-4 space-y-6">
                <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#0F172A]">Visit Our Cashel Store</h3>
                  <div className="rounded-xl overflow-hidden border border-gray-200 aspect-[16/9]">
                    <img src="/shop-4.jpeg" alt="Store" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-[11px] text-gray-600">See our full range in person. Get expert advice and friendly support.</p>
                  <div className="grid grid-cols-2 gap-2">
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="bg-[#F97316] hover:bg-[#EA580C] text-white py-2 rounded-xl text-[10px] font-bold flex items-center justify-center gap-1">
                      <Navigation className="w-3 h-3" /> Get Directions
                    </a>
                    <a href="https://wa.me/353000000000" target="_blank" rel="noopener noreferrer" className="bg-[#00D66C] hover:bg-[#00B85C] text-white py-2 rounded-xl text-[10px] font-bold flex items-center justify-center gap-1">
                      <MessageCircle className="w-3 h-3 fill-white" /> WhatsApp
                    </a>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#0F172A]">Quick Product Inquiry</h3>
                  <form onSubmit={(e) => { e.preventDefault(); alert("Inquiry submitted!"); }} className="space-y-3">
                    <input type="text" placeholder="Your Name *" required className="w-full bg-gray-50 border border-gray-300 rounded-xl px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-[#F97316]" />
                    <input type="text" placeholder="Email or Phone *" required className="w-full bg-gray-50 border border-gray-300 rounded-xl px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-[#F97316]" />
                    <textarea rows={2} placeholder="Tell us what you're looking for..." className="w-full bg-gray-50 border border-gray-300 rounded-xl px-3 py-2 text-xs outline-none resize-none focus:ring-2 focus:ring-[#F97316]"></textarea>
                    <button type="submit" className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition shadow-md">
                      <Send className="w-3.5 h-3.5" /> Submit Inquiry
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= 4. TRUST HIGHLIGHTS BAR ================= */}
      <section className="w-full bg-[#C0C0C0] py-8 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1680px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="bg-white border border-gray-300 rounded-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#22C55E]" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-[#0F172A]">Genuine Products</h3>
                <p className="text-[11px] text-gray-600">100% Authentic</p>
              </div>
            </div>

            <div className="bg-white border border-gray-300 rounded-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 shrink-0">
                <Users className="w-5 h-5 text-[#F97316]" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-[#0F172A]">Expert Support</h3>
                <p className="text-[11px] text-gray-600">Friendly & Professional</p>
              </div>
            </div>

            <div className="bg-white border border-gray-300 rounded-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shrink-0">
                <MapPin className="w-5 h-5 text-[#22C55E]" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-[#0F172A]">Local Service</h3>
                <p className="text-[11px] text-gray-600">Cashel, Ireland</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}