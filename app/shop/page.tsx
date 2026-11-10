"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
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
  RotateCcw,
  X,
  Sparkles,
  CheckCircle2
} from "lucide-react";

// Complete Updated Inventory Retaining All Original Products + Added New Requested Stock
const INITIAL_PRODUCTS = [
  // ================= 1. SMARTPHONES =================
  // --- iPhones ---
  { 
    id: 101, 
    name: "iPhone 11", 
    category: "smartphones", 
    brand: "apple", 
    specs: "64GB / 128GB | Unlocked", 
    image: "/products/iphone-11.png",
    description: "Equipped with a dual-camera system, Liquid Retina LCD display, and reliable A13 Bionic performance. Unlocked for all networks in Ireland.",
    features: ["6.1-inch Liquid Retina Display", "Dual 12MP Ultra Wide Camera", "A13 Bionic Chip", "All-Day Battery Life"]
  },
  { 
    id: 1011, 
    name: "iPhone 11 Pro", 
    category: "smartphones", 
    brand: "apple", 
    specs: "Super Retina XDR | Triple Camera", 
    image: "/products/iphone-11-pro.png",
    description: "Pro camera system with triple 12MP lenses, textured matte glass design, and vibrant Super Retina XDR OLED display.",
    features: ["5.8-inch Super Retina XDR", "Triple 12MP Cameras", "A13 Bionic with Neural Engine", "Water Resistant IP68"]
  },
  { 
    id: 102, 
    name: "iPhone 11 Pro Max", 
    category: "smartphones", 
    brand: "apple", 
    specs: "Triple Camera | Unlocked", 
    image: "/products/iphone-11-pro-max.png",
    description: "Expansive 6.5-inch screen with extraordinary battery longevity and professional-grade photographic tools.",
    features: ["6.5-inch OLED Display", "Extended Battery Performance", "Pro Triple Camera Setup", "Face ID Security"]
  },

  { 
    id: 103, 
    name: "iPhone 12", 
    category: "smartphones", 
    brand: "apple", 
    specs: "5G Enabled | 128GB", 
    image: "/products/iphone-12.png",
    description: "Superfast 5G speeds, Ceramic Shield front cover, and A14 Bionic chip packaged in a sleek flat-edge design.",
    features: ["5G Cellular Connectivity", "Ceramic Shield Drop Protection", "A14 Bionic Chip", "MagSafe Wireless Charging"]
  },
  { 
    id: 104, 
    name: "iPhone 12 Pro", 
    category: "smartphones", 
    brand: "apple", 
    specs: "Stainless Steel Frame | LiDAR", 
    image: "/products/iphone-12-pro.png",
    description: "Featuring a LiDAR Scanner for immersive AR experiences, night mode portraits, and surgical-grade stainless steel finish.",
    features: ["LiDAR Scanner for AR", "Pro 12MP Camera System", "Apple ProRAW Support", "Stainless Steel Build"]
  },
  { 
    id: 1041, 
    name: "iPhone 12 Pro Max", 
    category: "smartphones", 
    brand: "apple", 
    specs: "6.7-inch Display | Sensor-shift OIS", 
    image: "/products/iphone-12-pro-max.png",
    description: "The ultimate 12-series flagship with a massive 6.7-inch display and advanced sensor-shift optical image stabilization.",
    features: ["6.7-inch Super Retina XDR", "Sensor-shift OIS", "Cinematic Video Recording", "A14 Bionic Power"]
  },

  { 
    id: 105, 
    name: "iPhone 13", 
    category: "smartphones", 
    brand: "apple", 
    specs: "Cinematic Mode | A15 Bionic", 
    image: "/products/iphone-13.png",
    description: "Advanced dual-camera system with Cinematic mode that automatically adds shallow depth of field to your videos.",
    features: ["Cinematic Mode in 1080p", "Bright Super Retina XDR", "A15 Bionic Chip", "Larger Battery Capacity"]
  },
  { 
    id: 1052, 
    name: "iPhone 13 Pro", 
    category: "smartphones", 
    brand: "apple", 
    specs: "120Hz ProMotion | Telephoto", 
    image: "/products/iphone-13-pro.png",
    description: "ProMotion technology with adaptive refresh rates up to 120Hz for incredibly smooth scrolling and responsiveness.",
    features: ["120Hz ProMotion Display", "Macro Photography Support", "A15 Pro GPU Performance", "Pro Camera System"]
  },
  { 
    id: 106, 
    name: "iPhone 13 Pro Max", 
    category: "smartphones", 
    brand: "apple", 
    specs: "ProMotion Display | Long Battery", 
    image: "/products/iphone-13-pro-max.png",
    description: "Unmatched battery life paired with a stunning 6.7-inch ProMotion display and lightning-fast A15 Bionic architecture.",
    features: ["Max Battery Longevity", "6.7-inch ProMotion OLED", "Telephoto & Wide Lenses", "Premium Ceramic Shield"]
  },

  { 
    id: 107, 
    name: "iPhone 14", 
    category: "smartphones", 
    brand: "apple", 
    specs: "Emergency SOS via Satellite", 
    image: "/products/iphone-14.png",
    description: "Critical safety features like Crash Detection and satellite connectivity alongside impressive low-light camera enhancements.",
    features: ["Crash Detection Safety", "Action Mode Video", "A15 Bionic with 5-core GPU", "All-Day Battery"]
  },
  { 
    id: 1072, 
    name: "iPhone 14 Pro", 
    category: "smartphones", 
    brand: "apple", 
    specs: "Dynamic Island | 48MP Camera", 
    image: "/products/iphone-14-pro.png",
    description: "Introducing the revolutionary Dynamic Island and an advanced 48MP Main camera for breathtaking ultra-high-resolution detail.",
    features: ["Dynamic Island Interface", "48MP Main Sensor", "Always-On Retina Display", "A16 Bionic Chip"]
  },
  { 
    id: 108, 
    name: "iPhone 14 Pro Max", 
    category: "smartphones", 
    brand: "apple", 
    specs: "Dynamic Island | Always-On Display", 
    image: "/products/iphone-14-pro-max.png",
    description: "The pinnacle of smartphone engineering with an immersive 6.7-inch display, Dynamic Island, and pro camera capabilities.",
    features: ["6.7-inch Always-On Screen", "Dynamic Island Tech", "Pro 48MP Camera System", "Surgical-grade Steel"]
  },

  { 
    id: 1090, 
    name: "iPhone 15", 
    category: "smartphones", 
    brand: "apple", 
    specs: "Dynamic Island | USB-C", 
    image: "/products/iphone-15.png",
    description: "Featuring Dynamic Island, a 48MP Main camera with 2x telephoto, and universal USB-C connectivity.",
    features: ["Universal USB-C Port", "Dynamic Island Experience", "48MP Main Camera", "Color-infused Glass Back"]
  },
  { 
    id: 1092, 
    name: "iPhone 15 Pro", 
    category: "smartphones", 
    brand: "apple", 
    specs: "Titanium Build | Action Button", 
    image: "/products/iphone-15-pro.png",
    description: "Forged in aerospace-grade titanium with a customizable Action button and powered by the ground-breaking A17 Pro chip.",
    features: ["Aerospace Titanium Frame", "Customizable Action Button", "A17 Pro Gaming Chip", "Pro Camera Flexibility"]
  },
  { 
    id: 1, 
    name: "iPhone 15 Pro Max", 
    category: "smartphones", 
    brand: "apple", 
    specs: "256GB | Titanium Design | 5x Telephoto", 
    image: "/products/iphone-15-pro-max.png",
    description: "The ultimate iPhone experience featuring a 5x Telephoto optical zoom lens, lightweight titanium design, and A17 Pro power.",
    features: ["5x Optical Zoom Telephoto", "Titanium Build & Contour", "A17 Pro Architecture", "USB 3 Speeds"]
  },

  { 
    id: 1093, 
    name: "iPhone 16", 
    category: "smartphones", 
    brand: "apple", 
    specs: "Camera Control | Apple Intelligence", 
    image: "/products/iphone-16.png",
    description: "Built for Apple Intelligence with dedicated Camera Control button and advanced dual-lens optical system.",
    features: ["Apple Intelligence Ready", "Dedicated Camera Control", "A18 Chip Efficiency", "Advanced Thermal Design"]
  },
  { 
    id: 1095, 
    name: "iPhone 16 Pro", 
    category: "smartphones", 
    brand: "apple", 
    specs: "A18 Pro | 4K 120 fps Dolby Vision", 
    image: "/products/iphone-16-pro.png",
    description: "Cinematic pro recording in 4K 120 fps Dolby Vision paired with the powerhouse A18 Pro chip and thinner borders.",
    features: ["4K 120 fps Dolby Vision", "A18 Pro Processor", "Studio-quality Mics", "Larger Display Real Estate"]
  },
  { 
    id: 1096, 
    name: "iPhone 16 Pro Max", 
    category: "smartphones", 
    brand: "apple", 
    specs: "6.9-inch Display | Titanium Frame", 
    image: "/products/iphone-16-pro-max.png",
    description: "The largest iPhone display ever at 6.9 inches, extreme battery life, and state-of-the-art pro optics.",
    features: ["6.9-inch Super Retina XDR", "Longest Battery Ever", "5x Telephoto Zoom", "Titanium Enclosure"]
  },

  { 
    id: 1097, 
    name: "iPhone 17 Pro", 
    category: "smartphones", 
    brand: "apple", 
    specs: "Next-Gen Performance | Pro Camera System", 
    image: "/products/iphone-17-pro.png",
    description: "Cutting-edge next-gen performance specs with upgraded optics and lightning-fast processing speeds.",
    features: ["Next-Gen Processor", "Upgraded Optical Zoom", "Advanced Thermal Cooling", "Sleek Finish"]
  },
  { 
    id: 1098, 
    name: "iPhone 17 Pro Max", 
    category: "smartphones", 
    brand: "apple", 
    specs: "Ultimate Flagship Edition", 
    image: "/products/iphone-17-pro-max.png",
    description: "The absolute pinnacle of mobile tech innovation, offering uncompromised speed, display, and camera capability.",
    features: ["Ultimate Flagship Tier", "Maximum Storage Options", "Revolutionary Optics", "Unrivaled Battery"]
  },

  { 
    id: 2001, 
    name: "iPhone 18 Duo", 
    category: "smartphones", 
    brand: "apple", 
    specs: "Next-Gen Base Model | Advanced Chip", 
    image: "/products/iphone-18.png",
    description: "Futuristic base model equipped with cutting-edge artificial intelligence integration and refined everyday efficiency.",
    features: ["Advanced Chipset", "Refined Dual Cameras", "All-Day Power", "Eco-friendly Build"]
  },
  { 
    id: 2002, 
    name: "iPhone 18 Pro", 
    category: "smartphones", 
    brand: "apple", 
    specs: "ProMotion Display | Advanced Camera", 
    image: "/products/iphone-18-pro.png",
    description: "Professional grade mobile device featuring enhanced ProMotion rendering and studio-grade capture tools.",
    features: ["Enhanced ProMotion", "Professional Optics", "Lightning Fast Storage", "Sleek Ergonomics"]
  },
  { 
    id: 2003, 
    name: "iPhone 18 Pro Max", 
    category: "smartphones", 
    brand: "apple", 
    specs: "Next-Gen Ultimate Flagship Edition", 
    image: "/products/iphone-18-pro-max.png",
    description: "The ultimate futuristic flagship combining maximum screen size, raw performance, and immaculate camera technology.",
    features: ["Ultimate Flagship Specs", "Massive Battery Reserve", "Elite Camera Array", "Premium Materials"]
  },

  // --- Samsung S Series (S22 to S26) & Foldables ---
 {
    id: 307,
    name: "Samsung Galaxy S22",
    category: "smartphones",
    brand: "samsung",
    specs: "128GB | Dynamic AMOLED 2X",
    image: "/products/Samsung_Galaxy_S22.png",
    description: "Compact flagship performance featuring Nightography camera tools, durable Armor Aluminum body, and smooth 120Hz refresh rates.",
    features: ["Dynamic AMOLED 2X", "Nightography Camera", "Armor Aluminum Frame", "120Hz Display"]
  },
  {
    id: 308,
    name: "Samsung Galaxy S22+",
    category: "smartphones",
    brand: "samsung",
    specs: "6.6-inch Screen | 45W Fast Charge",
    image: "/products/Samsung_Galaxy_S22+.png",
    description: "Larger 6.6-inch display, extended battery life, and super-fast 45W wired charging capabilities.",
    features: ["6.6-inch Vibrant Screen", "45W Super Fast Charging", "Snapdragon Power", "Pro Triple Camera"]
  },
  {
    id: 309,
    name: "Samsung Galaxy S22 Ultra",
    category: "smartphones",
    brand: "samsung",
    specs: "Built-in S-Pen | 108MP Camera",
    image: "/products/Samsung_Galaxy_S22_Ultra.png",
    description: "The first S-series phone with a built-in S Pen, 100x Space Zoom, and ultra-bright Quad HD+ display.",
    features: ["Embedded S Pen Stylus", "108MP Quad Camera", "100x Space Zoom", "Quad HD+ Display"]
  },
  {
    id: 310,
    name: "Samsung Galaxy S23",
    category: "smartphones",
    brand: "samsung",
    specs: "Snapdragon 8 Gen 2 for Galaxy",
    image: "/products/Samsung_Galaxy_S23.png",
    description: "Custom Snapdragon processor optimized for maximum efficiency, enhanced low-light photography, and eco-friendly build.",
    features: ["Snapdragon 8 Gen 2", "Enhanced Night Mode", "All-Day Battery Life", "Gorilla Glass Victus 2"]
  },
  {
    id: 311,
    name: "Samsung Galaxy S23+",
    category: "smartphones",
    brand: "samsung",
    specs: "256GB | Premium Ergonomics",
    image: "/products/Samsung_Galaxy_S23+.png",
    description: "Expansive battery capacity, sleek camera housing alignment, and ultra-smooth performance for heavy users.",
    features: ["4700mAh Long-life Battery", "Streamlined Design", "50MP Main Sensor", "Vision Booster Tech"]
  },
  {
    id: 312,
    name: "Samsung Galaxy S23 Ultra",
    category: "smartphones",
    brand: "samsung",
    specs: "200MP Main Camera | S-Pen",
    image: "/products/Samsung_Galaxy_S23_ultra.png",
    description: "Groundbreaking 200MP resolution photography paired with internal S-Pen and incredible battery longevity.",
    features: ["200MP Ultra Resolution", "Built-in S-Pen", "Astro Hyperlapse", "Dynamic AMOLED 2X"]
  },
  {
    id: 313,
    name: "Samsung Galaxy S24",
    category: "smartphones",
    brand: "samsung",
    specs: "Galaxy AI | Circle to Search",
    image: "/products/Samsung_Galaxy_S24.png",
    description: "Powered by Galaxy AI, bringing real-time call translation, Circle to Search, and intelligent photo editing tools.",
    features: ["Galaxy AI Integrated", "Circle to Search with Google", "Live Call Translation", "Uniform Bezel Design"]
  },
  {
    id: 3141,
    name: "Samsung Galaxy S24+",
    category: "smartphones",
    brand: "samsung",
    specs: "QHD+ Display | Galaxy AI Suite",
    image: "/products/Samsung_Galaxy_S24+.png",
    description: "Upgraded QHD+ display resolution, larger battery, and seamless AI productivity tools.",
    features: ["QHD+ Crisp Display", "Galaxy AI Editing", "Extended Battery Performance", "Armor Aluminum 2.0"]
  },
  {
    id: 314,
    name: "Samsung Galaxy S24 Ultra",
    category: "smartphones",
    brand: "samsung",
    specs: "Built-in S-Pen | Titanium Frame",
    image: "/products/Samsung_Galaxy_S24_Ultra.png",
    description: "Titanium exterior paired with intelligent productivity tools and professional grade zoom capability.",
    features: ["Titanium Frame", "S-Pen Included", "Galaxy AI Suite", "Quad Telephoto System"]
  },
  {
    id: 317,
    name: "Samsung Galaxy S25 Ultra",
    category: "smartphones",
    brand: "samsung",
    specs: "Snapdragon 8 Gen 4 | 200MP Camera",
    image: "/products/Samsung_Galaxy_S25_Ultra.png",
    description: "Snapdragon processing power meets professional-grade mobile photography with integrated AI assistance.",
    features: ["Snapdragon Processor", "200MP Main Sensor", "Built-in S-Pen", "Titanium Body"]
  },
  {
    id: 318,
    name: "Samsung Galaxy S26",
    category: "smartphones",
    brand: "samsung",
    specs: "Compact Flagship | 120Hz Display",
    image: "/products/Samsung_Galaxy_S26.png",
    description: "Compact form factor packed with flagship performance, pro cameras, and buttery-smooth 120Hz refresh rates.",
    features: ["120Hz Refresh Rate", "Compact Ergonomics", "Pro Triple Camera", "Fast Charging Support"]
  },
  {
    id: 319,
    name: "Samsung Galaxy S26+",
    category: "smartphones",
    brand: "samsung",
    specs: "Advanced Display | Dynamic Performance",
    image: "/products/Samsung_Galaxy_S26+.png",
    description: "Sleek and powerful with a vibrant Dynamic AMOLED 2X display and blazing-fast multi-tasking capabilities.",
    features: ["Dynamic AMOLED 2X", "High-Performance CPU", "Long-lasting Battery", "Sleek Bezels"]
  },
  {
    id: 320,
    name: "Samsung Galaxy S26 Ultra",
    category: "smartphones",
    brand: "samsung",
    specs: "Ultimate Flagship Edition | S-Pen",
    image: "/products/Samsung_Galaxy_S26_Ultra.png",
    description: "The ultimate Samsung Galaxy flagship featuring built-in S-Pen, cutting-edge AI processing, and an astonishing 200MP camera system.",
    features: ["Built-in S-Pen Stylus", "200MP Quad Camera", "Galaxy AI Integration", "Armor Aluminum Frame"]
  },

  // --- Samsung A Series ---
  {
    id: 330,
    name: "Samsung Galaxy A14",
    category: "smartphones",
    brand: "samsung",
    specs: "64GB / 128GB | 50MP Camera",
    image: "/products/Samsung_Galaxy_A14.png",
    description: "Essential everyday smartphone featuring a crisp 6.6-inch FHD+ screen, 50MP triple camera system, and long 5000mAh battery.",
    features: ["6.6-inch FHD+ Screen", "50MP Triple Camera", "5000mAh Battery", "Side Fingerprint Sensor"]
  },
  {
    id: 331,
    name: "Samsung Galaxy A15 5G",
    category: "smartphones",
    brand: "samsung",
    specs: "Super AMOLED 90Hz | 5G",
    image: "/products/Samsung_Galaxy_A15_5G.png",
    description: "Vibrant Super AMOLED display meets superfast 5G connectivity for smooth streaming and everyday productivity.",
    features: ["Super AMOLED 90Hz Display", "5G Data Connectivity", "Key Island Design", "5000mAh Battery"]
  },
  {
    id: 332,
    name: "Samsung Galaxy A25 5G",
    category: "smartphones",
    brand: "samsung",
    specs: "120Hz AMOLED | OIS Camera",
    image: "/products/Samsung_Galaxy_A25_5G.png",
    description: "Equipped with 120Hz display refresh rates, optical image stabilization (OIS) for steady video, and stereo speakers.",
    features: ["120Hz Super AMOLED Screen", "50MP OIS Camera", "Stereo Speakers", "Samsung Knox Security"]
  },
  {
    id: 333,
    name: "Samsung Galaxy A34 5G",
    category: "smartphones",
    brand: "samsung",
    specs: "IP67 Water Resistant | 120Hz",
    image: "/products/Samsung_Galaxy_A34_5G.png",
    description: "Sleek glass-like finish with IP67 water and dust resistance, bright outdoor vision, and 2-day battery life.",
    features: ["IP67 Water & Dust Resistant", "Bright 120Hz AMOLED", "2-Day Battery Life", "Smooth Octa-Core Performance"]
  },
  {
    id: 334,
    name: "Samsung Galaxy A35 5G",
    category: "smartphones",
    brand: "samsung",
    specs: "Premium Glass Back | 50MP OIS",
    image: "/products/Samsung_Galaxy_A35_5G.png",
    description: "Refined glass back design paired with upgraded 50MP camera sensors and Knox Vault hardware security.",
    features: ["Glass Back Finish", "Knox Vault Hardware Protection", "50MP Nightography", "FHD+ Infinity-O Display"]
  },
  {
    id: 335,
    name: "Samsung Galaxy A54 5G",
    category: "smartphones",
    brand: "samsung",
    specs: "Premium Design | VDIS Video",
    image: "/products/Samsung_Galaxy_A54_5G.png",
    description: "Flagship-inspired aesthetics with Video Digital Image Stabilization (VDIS) for smooth handheld video recording.",
    features: ["Flagship Design Look", "VDIS & OIS Stabilization", "IP67 Rating", "Bright Super AMOLED"]
  },
  {
    id: 336,
    name: "Samsung Galaxy A55 5G",
    category: "smartphones",
    brand: "samsung",
    specs: "Metal Frame | Exynos 1480 GPU",
    image: "/products/Samsung_Galaxy_A55_5G.png",
    description: "Premium metallic frame construction featuring AMD-powered graphics architecture for smooth mobile gaming.",
    features: ["Metal Side Frame", "AMD Xclipse 530 GPU", "Knox Vault Protection", "Pro-grade Triple Camera"]
  },

  // --- Samsung Foldables ---
  {
    id: 306,
    name: "Samsung Galaxy Z Fold 6",
    category: "smartphones",
    brand: "samsung",
    specs: "Dual Display | S-Pen Support",
    image: "/products/Samsung_Galaxy_Z_Fold_6.png",
    description: "Transform your mobile experience with a foldable tablet-sized inner screen and durable outer cover display.",
    features: ["Foldable Dual Display", "Multitasking Powerhouse", "S-Pen Compatible", "Slim Hinge Design"]
  },
  {
    id: 303,
    name: "Samsung Galaxy Z Flip 6",
    category: "smartphones",
    brand: "samsung",
    specs: "50MP FlexCam | Galaxy AI",
    image: "/products/Samsung_Galaxy_Z_Flip_6.png",
    description: "Pocket-friendly foldable smartphone with versatile FlexCam angles and large interactive cover window.",
    features: ["Compact Flip Design", "50MP FlexCam", "Interactive Cover Screen", "Galaxy AI Features"]
  },

  // --- Samsung Galaxy Tabs ---
  { 
    id: 501, 
    name: "Samsung Galaxy Tab A9", 
    category: "smartphones", 
    brand: "samsung", 
    specs: "8.7-inch Display | Compact", 
    image: "/products/Samsung_Galaxy_Tab_A9.png",
    description: "Sleek and portable tablet perfect for entertainment, social browsing, and kids' learning apps on the go.",
    features: ["8.7-inch Compact Size", "Dual Speakers", "Smooth Multi-Tasking", "Expandable MicroSD"]
  },
  { 
    id: 502, 
    name: "Samsung Galaxy Tab A9+", 
    category: "smartphones", 
    brand: "samsung", 
    specs: "11-inch 90Hz Display | Quad Speakers", 
    image: "/products/Samsung_Galaxy_Tab_A9+.png",
    description: "Expansive 11-inch display with 90Hz refresh rate and 3-screen multitasking capabilities for family use.",
    features: ["11-inch 90Hz Screen", "Quad Speakers with Dolby Atmos", "3-Split Screen View", "Slim Metal Unibody"]
  },
  { 
    id: 503, 
    name: "Samsung Galaxy Tab S9 FE", 
    category: "smartphones", 
    brand: "samsung", 
    specs: "IP68 Water Resistant | S-Pen Included", 
    image: "/products/Samsung_Galaxy_Tab_S9_FE.png",
    description: "Durable IP68 water-resistant tablet with included inbox S-Pen for creative artists and students.",
    features: ["Inbox S-Pen Included", "IP68 Water Resistance", "Vision Booster Technology", "Long-lasting Power"]
  },
  { 
    id: 5, 
    name: "Samsung Galaxy Tab S9", 
    category: "smartphones", 
    brand: "samsung", 
    specs: "AMOLED Display | Snapdragon 8 Gen 2", 
    image: "/products/Samsung_Galaxy_Tab_S9.png",
    description: "Immersive Dynamic AMOLED 2X screen with included S Pen for seamless note-taking, sketching, and entertainment.",
    features: ["AMOLED Display", "S Pen Included", "Water Resistant IP68", "Immersive Audio"]
  },
  { 
    id: 504, 
    name: "Samsung Galaxy Tab S9 Ultra", 
    category: "smartphones", 
    brand: "samsung", 
    specs: "14.6-inch AMOLED | Desktop Power", 
    image: "/products/Samsung_Galaxy_Tab_S9_Ultra.png",
    description: "Massive 14.6-inch screen providing laptop-replacement canvas productivity with Samsung DeX support.",
    features: ["14.6-inch Massive AMOLED", "Dual Front Cameras", "Samsung DeX Desktop Mode", "Ultra-thin Profile"]
  },
  // --- Samsung A Series ---
 

  // --- Tablets & iPads ---
  { 
    id: 4, 
    name: "Apple iPad Pro", 
    category: "smartphones", 
    brand: "apple", 
    specs: "12.9-inch | Cellular", 
    image: "/products/ipad.png",
    description: "Stunning Liquid Retina XDR display, M-series processing power, and cellular connectivity for workflow anywhere.",
    features: ["Liquid Retina XDR", "M-Series Performance", "Cellular & Wi-Fi", "Apple Pencil Support"]
  },
 
  { 
    id: 6, 
    name: "Hoco Android Tablet", 
    category: "smartphones", 
    brand: "hoco", 
    specs: "Performance Edition", 
    image: "/products/hoco-tab.png",
    description: "Reliable Android tablet engineered for smooth media streaming, reading, and everyday apps.",
    features: ["Smooth Android OS", "Reliable Battery", "Bright Display", "Affordable Performance"]
  },

  // ================= 2. LAPTOPS & DESKTOPS =================
  // --- MacBooks (2020 to Latest M4) ---
 { 
    id: 201, 
    name: "Apple MacBook Air 2020 (M1)", 
    category: "laptops", 
    brand: "apple", 
    specs: "M1 Chip | 8GB RAM | 256GB SSD", 
    image: "/products/Apple_MacBook_Air_2020__M1.png",
    description: "Incredibly thin and light notebook powered by the M1 chip with silent fanless design and all-day battery.",
    features: ["Fanless Silent Design", "Apple M1 Chip", "Retina Display", "Up to 18 Hours Battery"]
  },
  { 
    id: 202, 
    name: "Apple MacBook Pro 2020 (M1)", 
    category: "laptops", 
    brand: "apple", 
    specs: "Active Cooling | Touch Bar", 
    image: "/products/Apple_MacBook_Pro_2020__M1_.png",
    description: "Revolutionary M1 chip with active cooling fan for sustained peak performance and convenient Touch Bar control.",
    features: ["Apple M1 Chip with Active Cooling", "Interactive Touch Bar", "Crystal Clear Retina Display", "FaceTime HD Camera"]
  },
  { 
    id: 203, 
    name: "Apple MacBook Air M2 (2022)", 
    category: "laptops", 
    brand: "apple", 
    specs: "Redesigned Body | MagSafe 3", 
    image: "/products/Apple_MacBook_Air_M2__2022_.png",
    description: "Redesigned ultra-thin aluminum chassis featuring a 13.6-inch Liquid Retina screen and MagSafe charging.",
    features: ["M2 Processing Chip", "13.6-inch Liquid Retina", "MagSafe 3 Charging Port", "1080p HD Camera"]
  },
  { 
    id: 204, 
    name: "Apple MacBook Pro 2023 (M2 Pro / Max)", 
    category: "laptops", 
    brand: "apple", 
    specs: "High Performance Workflow", 
    image: "/products/Apple_MacBook_Pro_2023__M2_Pro__Max.png",
    description: "Engineered for demanding workflows, 8K video editing, and software development with pro ports and HDMI 2.1.",
    features: ["Pro Performance Architecture", "Advanced Connectivity Ports", "Stunning Retina Screen", "Quiet Cooling Fans"]
  },
  { 
    id: 7, 
    name: "Apple MacBook Pro M3 (2024)", 
    category: "laptops", 
    brand: "apple", 
    specs: "Space Black | 16GB RAM", 
    image: "/products/Apple_MacBook_Pro_M3__2024_.png",
    description: "Blazing-fast M3 chip architecture with stunning Space Black finish, advanced thermal cooling, and incredible battery life.",
    features: ["Apple M3 Chip", "Liquid Retina XDR Display", "Up to 22 Hours Battery", "Space Black Finish"]
  },
  { 
    id: 205, 
    name: "Apple MacBook Air M3 (2024)", 
    category: "laptops", 
    brand: "apple", 
    specs: "Dual External Display Support", 
    image: "/products/Apple_MacBook_Pro_M3__2024.png",
    description: "Powerful M3 chip enabling dual external display output when laptop lid is closed, Wi-Fi 6E speed, and sleek build.",
    features: ["Apple M3 Silicon", "Dual Display Support", "Wi-Fi 6E Speed", "Midnight Anti-Fingerprint"]
  },
  { 
    id: 206, 
    name: "Apple MacBook Pro M4 (Latest)", 
    category: "laptops", 
    brand: "apple", 
    specs: "M4 Architecture | Quantum Speed", 
    image: "/products/Apple_MacBook_Pro_M4__Latest_.png",
    description: "The absolute latest workstation computing power featuring next-generation M4 architecture and nano-texture glass options.",
    features: ["Apple M4 Processor", "Nano-Texture Display Option", "Thunderbolt 5 Speed", "Extreme AI Neural Engine"]
  },

  // --- PC & Gaming Laptops ---
  { 
    id: 8, 
    name: "ROG Gaming Laptop", 
    category: "gaming", 
    brand: "asus", 
    specs: "High Performance GPU", 
    image: "/products/ROG_Gaming_Laptop.png",
    description: "Heavy-duty gaming laptop equipped with dedicated high-end GPU and high refresh rate gaming display.",
    features: ["Dedicated Gaming GPU", "High Refresh Display", "RGB Backlit Keyboard", "Advanced Cooling"]
  },
  { 
    id: 9, 
    name: "Foldable Touchscreen Laptop", 
    category: "gaming", 
    brand: "lenovo", 
    specs: "Dual Screen Foldable", 
    image: "/products/foldable-touchscreen-laptop.png",
    description: "Next-gen foldable OLED screen laptop offering unmatched versatility for creators and professionals.",
    features: ["Foldable OLED Screen", "Touchscreen Versatility", "Portable Form Factor", "Modern Multi-tasking"]
  },
  { 
    id: 10, 
    name: "Custom Gaming PC Rig", 
    category: "gaming", 
    brand: "custom", 
    specs: "RGB Liquid Cooled", 
    image: "/products/custom-gamming-pc.png",
    description: "Custom built gaming rig featuring liquid cooling, vibrant RGB lighting, and ultimate desktop performance.",
    features: ["Liquid Cooling System", "Custom RGB Lighting", "High Tier Desktop Specs", "Easy Upgrade Path"]
  },
  { 
    id: 11, 
    name: "4K Curved Desktop Monitor", 
    category: "gaming", 
    brand: "samsung", 
    specs: "32-inch UltraWide", 
    image: "/products/4k-curved-desktop.png",
    description: "Immersive 32-inch 4K curved display designed for professional designers, gamers, and multitasking efficiency.",
    features: ["32-inch 4K Resolution", "Immersive Curve", "High Color Accuracy", "Multiple HDMI/DP Ports"]
  },
  { 
    id: 12, 
    name: "External Portable SSD Storage", 
    category: "laptops", 
    brand: "sandisk", 
    specs: "1TB High Speed", 
    image: "/products/External_Portable_SSD_Hard_Drive_product_shot.png",
    description: "Lightning-fast portable solid-state drive with rugged drop protection for secure file transfers on the go.",
    features: ["1TB High-Speed Storage", "Rugged Drop Protection", "Compact Pocket Size", "USB-C Fast Transfer"]
  },

  // ================= 3. AUDIO (AIRPODS & SPEAKERS) =================
  // --- AirPods Full Range ---
  { 
    id: 601, 
    name: "Apple AirPods (2nd Gen)", 
    category: "audio", 
    brand: "apple", 
    specs: "H1 Headphone Chip | Lightning Case", 
    image: "/products/Apple_AirPods_Pro_2.png",
    description: "Classic wireless earbuds with effortless setup, H1 chip connectivity, and quick access to Siri.",
    features: ["H1 Headphone Chip", "Automatic Setup", "24-Hour Battery with Case", "Voice-Activated Siri"]
  },
  { 
    id: 602, 
    name: "Apple AirPods (3rd Gen)", 
    category: "audio", 
    brand: "apple", 
    specs: "Spatial Audio | MagSafe Case", 
    image: "/products/Apple_AirPods_Pro_2.png",
    description: "Personalized Spatial Audio with dynamic head tracking, sweat/water resistance, and contoured ear fit.",
    features: ["Personalized Spatial Audio", "IPX4 Water Resistant", "MagSafe Charging Case", "Adaptive EQ"]
  },
  { 
    id: 603, 
    name: "Apple AirPods 4", 
    category: "audio", 
    brand: "apple", 
    specs: "H2 Chip | USB-C | Redesigned Fit", 
    image: "/products/Apple_AirPods_Pro_2.png",
    description: "All-new open-ear design powered by H2 chip with acoustic architecture improvements and compact USB-C case.",
    features: ["Apple H2 Chip", "Refined Open-Ear Shape", "USB-C Charging", "Voice Isolation Tech"]
  },
  { 
    id: 604, 
    name: "Apple AirPods 4 with ANC", 
    category: "audio", 
    brand: "apple", 
    specs: "Active Noise Cancellation | Speaker Case", 
    image: "/products/Apple_AirPods_Pro_2.png",
    description: "First open-ear AirPods featuring Active Noise Cancellation, Adaptive Audio, and wireless charging case with speaker.",
    features: ["Active Noise Cancellation", "Adaptive Audio & Transparency", "Case Speaker for Find My", "Wireless Charging"]
  },
  { 
    id: 25, 
    name: "Apple AirPods Pro 2", 
    category: "audio", 
    brand: "apple", 
    specs: "USB-C | Active Noise Cancellation", 
    image: "/products/Apple_AirPods_Pro_2.png",
    description: "Active Noise Cancellation, Adaptive Audio, and immersive Spatial Audio powered by the H2 chip in a USB-C charging case.",
    features: ["Active Noise Cancellation", "Adaptive Transparency", "Personalized Spatial Audio", "USB-C MagSafe Case"]
  },
  { 
    id: 605, 
    name: "Apple AirPods Max (USB-C)", 
    category: "audio", 
    brand: "apple", 
    specs: "Over-Ear | Hi-Fi Audio | USB-C", 
    image: "/products/Studio_Wired_Over_Ear_Headphones.png",
    description: "Ultimate over-ear listening experience featuring custom acoustic design, Digital Crown control, and USB-C port.",
    features: ["High-Fidelity Audio", "Pro Active Noise Cancellation", "Breathable Mesh Canopy", "USB-C Fast Audio"]
  },

  // --- Other Audio Gear ---
  { 
    id: 26, 
    name: "JBL Bluetooth Speaker", 
    category: "audio", 
    brand: "jbl", 
    specs: "Waterproof Portable", 
    image: "/products/JBL_Bluetooth_Speaker.png",
    description: "Bold sound, punchy bass, and waterproof portability make this Bluetooth speaker ready for any outdoor adventure.",
    features: ["IP67 Waterproof & Dustproof", "Long Battery Life", "Signature JBL Pro Sound", "Rugged Fabric Design"]
  },
  { 
    id: 27, 
    name: "JBL Wireless Earbuds", 
    category: "audio", 
    brand: "jbl", 
    specs: "Deep Bass Sound", 
    image: "/products/JBL_Wireless_Earbuds.png0",
    description: "True wireless earbuds delivering crisp acoustics and deep punchy bass for all-day listening comfort.",
    features: ["Deep Bass Sound", "Ergonomic Fit", "Touch Controls", "Charging Case Included"]
  },
  { 
    id: 28, 
    name: "Wireless Earbuds Case", 
    category: "audio", 
    brand: "generic", 
    specs: "Universal Charging", 
    image: "/products/Wireless_Earbuds_Charging_Case.png",
    description: "Replacement or universal protective charging case designed for seamless wireless earbud refueling.",
    features: ["Universal Compatibility", "LED Charge Status", "Compact Protection", "Pocket Friendly"]
  },
  { 
    id: 29, 
    name: "Wireless Vlogging Microphone", 
    category: "audio", 
    brand: "generic", 
    specs: "Type-C Clip-on Mic", 
    image: "/products/Wireless_Vlogging_Microphone_Type-C.png",
    description: "Plug-and-play wireless clip-on microphone delivering crystal clear audio for mobile content creators and vloggers.",
    features: ["Plug & Play Setup", "Crystal Clear Audio", "Low Latency Transmission", "Type-C Receiver"]
  },
  { 
    id: 30, 
    name: "Studio Wired Headphones", 
    category: "audio", 
    brand: "generic", 
    specs: "Over-Ear Monitoring", 
    image: "/products/Studio_Wired_Over_Ear_Headphones.png",
    description: "Over-ear studio monitoring headphones designed for accurate sound reproduction, mixing, and casual listening.",
    features: ["Over-Ear Comfort", "Accurate Sound Profile", "Durable Headband", "Detachable Audio Cable"]
  },

  // ================= 4. SMART WATCHES =================
 // --- Apple Watch Ultra Lineup (1 to 4) ---
  { 
    id: 701, 
    name: "Apple Watch Ultra 1", 
    category: "smartwatches", 
    brand: "apple", 
    specs: "49mm Titanium Case | Cellular", 
    image: "/products/apple-ultra-watch-1.png",
    description: "Built for endurance, exploration, and adventure with a 49mm aerospace titanium case and precision dual-frequency GPS.",
    features: ["49mm Aerospace Titanium", "Action Button Customization", "Depth Gauge to 40m", "Dual Frequency GPS"]
  },
  { 
    id: 31, 
    name: "Apple Watch Ultra 2", 
    category: "smartwatches", 
    brand: "apple", 
    specs: "S9 SiP | 3000 Nits Brightness", 
    image: "/products/apple-ultra-watch-2.png",
    description: "Powered by the S9 SiP with Double Tap gesture control, 3000 nits display, and expanded altitude range.",
    features: ["3000 Nits Bright Display", "Double Tap Gesture Control", "S9 SiP Architecture", "On-Device Siri Processing"]
  },
  { 
    id: 703, 
    name: "Apple Watch Ultra 3", 
    category: "smartwatches", 
    brand: "apple", 
    specs: "MicroLED Display | Satellite Messaging", 
    image: "/products/apple-ultra-watch-3.png",
    description: "Next-generation adventure timepiece with enhanced satellite communication capabilities and extreme battery endurance.",
    features: ["Satellite Connectivity", "Advanced Thermal Sensors", "Enhanced Titanium Finish", "Multi-day Battery Reserve"]
  },
  { 
    id: 704, 
    name: "Apple Watch Ultra 4", 
    category: "smartwatches", 
    brand: "apple", 
    specs: "Ultimate Future Flagship Watch", 
    image: "/products/apple-ultra-watch-4.png",
    description: "The peak of wearable smartwatch technology designed for extreme sports enthusiasts and professional divers.",
    features: ["Ultimate Titanium Build", "Bio-Metric Health Monitoring", "Maximum Depth Capability", "Quantum Display Tech"]
  },

  // --- Samsung Galaxy Watches (Active 2 to Watch 9 & Ultra) ---
  { 
    id: 801, 
    name: "Samsung Galaxy Watch Active 2", 
    category: "smartwatches", 
    brand: "samsung", 
    specs: "Digital Bezel | Fitness Tracker", 
    image: "/products/sumsung-galaxy-smart-watch-1.png",
    description: "Lightweight sport smartwatch featuring a touch bezel, heart rate monitoring, and sleep analysis.",
    features: ["Touch Bezel Navigation", "Heart Rate Monitor", "Lightweight Build", "Auto Workout Tracking"]
  },
  { 
    id: 802, 
    name: "Samsung Galaxy Watch 3", 
    category: "smartwatches", 
    brand: "samsung", 
    specs: "Physical Rotating Bezel | ECG", 
    image: "/products/samsung_galaxy_watch_3.png",
    description: "Classic design with a precision physical rotating bezel, fall detection, and advanced ECG diagnostics.",
    features: ["Physical Rotating Bezel", "ECG & Blood Pressure", "Fall Detection Safety", "Leather Strap Finish"]
  },
  { 
    id: 803, 
    name: "Samsung Galaxy Watch 4", 
    category: "smartwatches", 
    brand: "samsung", 
    specs: "Wear OS Powered | BioActive Sensor", 
    image: "/products/samsung_galaxy_watch_4.png",
    description: "First Galaxy Watch powered by Wear OS featuring body composition analysis and sleek aluminum casing.",
    features: ["Wear OS Powered by Samsung", "Body Composition BIA", "Vibrant Touch Display", "Seamless Google Play"]
  },
  { 
    id: 804, 
    name: "Samsung Galaxy Watch 4 Classic", 
    category: "smartwatches", 
    brand: "samsung", 
    specs: "Stainless Steel | Rotating Bezel", 
    image: "/products/samsung_galaxy_watch_4.png",
    description: "Timeless stainless steel watch housing with tactile rotating bezel and comprehensive fitness tracking.",
    features: ["Stainless Steel Casing", "Tactile Rotating Bezel", "Sleep Cycle Score", "Google Maps Navigation"]
  },
  { 
    id: 805, 
    name: "Samsung Galaxy Watch 5", 
    category: "smartwatches", 
    brand: "samsung", 
    specs: "Sapphire Crystal | Fast Charging", 
    image: "/products/samsung_galaxy_watch_5.png",
    description: "Enhanced battery durability featuring a scratch-resistant Sapphire Crystal front and fast wireless charging.",
    features: ["Sapphire Crystal Glass", "Curved BioActive Sensor", "Fast Wireless Charging", "Route Workout Support"]
  },
  { 
    id: 806, 
    name: "Samsung Galaxy Watch 5 Pro", 
    category: "smartwatches", 
    brand: "samsung", 
    specs: "Titanium Body | GPX Navigation", 
    image: "/products/samsung_galaxy_watch_5.png",
    description: "Outdoor adventure watch with rugged titanium chassis, GPX route navigation, and massive battery life.",
    features: ["Titanium Body Casing", "GPX Route File Export", "Huge Battery Reserve", "Raised Bezel Protection"]
  },
  { 
    id: 32, 
    name: "Samsung Galaxy Watch 6", 
    category: "smartwatches", 
    brand: "samsung", 
    specs: "Super AMOLED | Slim Bezel", 
    image: "/products/samsung_galaxy_watch_6.png",
    description: "Advanced wellness coaching, sleep score monitoring, and a 20% larger display with slimmer bezels.",
    features: ["Advanced Sleep Coaching", "20% Larger Screen", "Vibrant Sapphire Crystal", "Seamless Galaxy Sync"]
  },
  { 
    id: 807, 
    name: "Samsung Galaxy Watch 6 Classic", 
    category: "smartwatches", 
    brand: "samsung", 
    specs: "Rotating Bezel | Premium Steel", 
    image: "/products/samsung_galaxy_watch_6.png",
    description: "The iconic rotating bezel returns on a slimmed-down stainless steel frame with personalized HR zones.",
    features: ["Interactive Rotating Bezel", "Stainless Steel Frame", "Personalized HR Zones", "One-Click Band System"]
  },
  { 
    id: 808, 
    name: "Samsung Galaxy Watch 7", 
    category: "smartwatches", 
    brand: "samsung", 
    specs: "3nm Processor | Galaxy AI Health", 
    image: "/products/samsung_galaxy_watch_7.png",
    description: "Powered by a 3nm processor for extreme responsiveness and Galaxy AI Energy Score tracking.",
    features: ["Blazing 3nm Processor", "Galaxy AI Energy Score", "Dual-Frequency GPS", "Enhanced BioActive Sensor"]
  },
  { 
    id: 809, 
    name: "Samsung Galaxy Watch Ultra", 
    category: "smartwatches", 
    brand: "samsung", 
    specs: "Titanium Cushion Design | 100M Water", 
    image: "/products/samsung_galaxy_watch_2.png",
    description: "Extreme adventure watch crafted in grade 4 titanium with 100m water resistance and Quick Button action.",
    features: ["Grade 4 Titanium Case", "10ATM / 100M Water Proof", "Multi-Course Workout Mode", "Emergency Siren 86dB"]
  },
  { 
    id: 810, 
    name: "Samsung Galaxy Watch 8", 
    category: "smartwatches", 
    brand: "samsung", 
    specs: "Next-Gen AI Bio-Monitoring", 
    image: "/products/samsung_galaxy_watch_8.png",
    description: "Next-generation smartwatch featuring advanced continuous glucose trend insights and AI workout optimization.",
    features: ["Continuous Health AI", "Ultra-thin Profile", "All-Day Display", "Multi-Day Battery"]
  },
  { 
    id: 811, 
    name: "Samsung Galaxy Watch 9", 
    category: "smartwatches", 
    brand: "samsung", 
    specs: "Futuristic Health Ecosystem", 
    image: "/products/samsung_galaxy_watch_9.png",
    description: "The future of Samsung wearable technology with comprehensive cellular independence and micro-sensor telemetry.",
    features: ["Micro-Sensor Suite", "Independent Cellular", "Zero-Bezel AMOLED", "Quantum Health Engine"]
  },

  // --- Other Smartwatches & Wearables ---
  { 
    id: 33, 
    name: "Hoco Smartwatch", 
    category: "smartwatches", 
    brand: "hoco", 
    specs: "Bluetooth Calling", 
    image: "/products/Hoco_Smartwatch.png",
    description: "Affordable smartwatch featuring Bluetooth calling capability, daily activity tracking, and customizable watch faces.",
    features: ["Bluetooth Calling", "Activity Tracker", "Customizable Faces", "Touchscreen Display"]
  },
  { 
    id: 34, 
    name: "Casio G-Shock Watch", 
    category: "smartwatches", 
    brand: "casio", 
    specs: "Shock Resistant", 
    image: "/products/Casio_G-Shock_Watch.png",
    description: "Legendary shock-resistant toughness paired with rugged digital utility for outdoor and sports enthusiasts.",
    features: ["Shock Resistant Build", "200M Water Resistance", "World Time & Stopwatch", "Durable Resin Band"]
  },
  { 
    id: 35, 
    name: "Smart Health Ring", 
    category: "smartwatches", 
    brand: "generic", 
    specs: "Sleep & Fitness Tracker", 
    image: "/products/Smart_Health_Ring.png",
    description: "Discreet titanium smart ring that tracks your sleep quality, daily steps, and vital health metrics seamlessly.",
    features: ["Sleep & Recovery Tracking", "Heart Rate Monitor", "Lightweight Titanium", "Long Battery Life"]
  },

  // ================= 5. ACCESSORIES =================
  { 
    id: 36, 
    name: "iPhone Camera Lens Protector", 
    category: "accessories", 
    brand: "generic", 
    specs: "Tempered Glass", 
    image: "/products/iPhone_Camera_Lens_Protector.png",
    description: "Individual tempered glass rings to protect your iPhone camera lenses from scratches without affecting photo quality.",
    features: ["9H Hardness Glass", "Crystal Clear Optics", "Easy Installation", "Scratch Proof"]
  },
  { 
    id: 37, 
    name: "Transparent Shockproof Case", 
    category: "accessories", 
    brand: "generic", 
    specs: "Anti-Yellowing", 
    image: "/products/Transparent_Shockproof_Phone_Case.png",
    description: "Crystal clear shockproof bumper case with anti-yellowing technology to showcase your phone's original design.",
    features: ["Anti-Yellowing Material", "Corner Air Cushion", "Slim Profile", "Wireless Charging Compatible"]
  },
  { 
    id: 38, 
    name: "Tempered Glass Screen Protector", 
    category: "accessories", 
    brand: "generic", 
    specs: "9H Hardness Box", 
    image: "/products/Tempered_Glass_Screen_Protector_box.png",
    description: "Premium tempered glass screen protector offering edge-to-edge tough defense against drops and keys.",
    features: ["9H Surface Hardness", "Oleophobic Coating", "Bubble-free Adhesive", "High Touch Sensitivity"]
  },
  { 
    id: 39, 
    name: "Apple Watch Silicone Strap", 
    category: "accessories", 
    brand: "apple", 
    specs: "Comfortable Fit", 
    image: "/products/Apple_Watch_Silicone_strap.png",
    description: "Soft, breathable, and durable fluoroelastomer band designed for everyday wear and workouts.",
    features: ["Skin-friendly Silicone", "Secure Pin-and-Tuck", "Sweat Resistant", "Easy Swap Design"]
  },
  { 
    id: 40, 
    name: "SanDisk Micro SD Card", 
    category: "accessories", 
    brand: "sandisk", 
    specs: "Extreme Pro 128GB", 
    image: "/products/SanDisk_Micro_SD_Card_Extreme_product_shot.png",
    description: "High-speed micro SD card optimized for 4K video recording, drones, and smartphone storage expansion.",
    features: ["128GB Capacity", "4K Video Ready", "Fast Read/Write Speeds", "Durable Build"]
  },
  { 
    id: 41, 
    name: "Multi-Socket Extension Lead", 
    category: "accessories", 
    brand: "generic", 
    specs: "With USB Ports", 
    image: "/products/Multi_Socket_Extension_Lead_with_USB.png",
    description: "Convenient extension lead featuring multiple AC sockets and built-in USB charging ports for desk organization.",
    features: ["Multiple AC Outlets", "Built-in USB Charging", "Surge Protection", "Safe Power Switch"]
  },
  { 
    id: 42, 
    name: "Type-C Laptop Charger Adapter", 
    category: "accessories", 
    brand: "generic", 
    specs: "Fast Power Delivery", 
    image: "/products/Type-C_Laptop_Charger_Adapter.png",
    description: "High wattage USB-C power delivery adapter compatible with MacBooks, iPads, and modern laptops.",
    features: ["Fast Power Delivery", "Compact Wall Plug", "Overheat Protection", "Detachable Cable"]
  },
  { 
    id: 43, 
    name: "Magnetic Smart Watch Cable", 
    category: "accessories", 
    brand: "generic", 
    specs: "USB Charging Dock", 
    image: "/products/Magnetic_Smart_Watch_Charging_Cable.png",
    description: "Convenient magnetic alignment charging cable for quick and effortless smartwatch power replenishing.",
    features: ["Strong Magnetic Snap", "USB Powered", "Tangle-free Cord", "Portable Design"]
  },
  { 
    id: 44, 
    name: "65W GaN Dual USB Fast Charger", 
    category: "accessories", 
    brand: "generic", 
    specs: "Compact Wall Plug", 
    image: "/products/65W_GaN_Dual_USB_Fast_Charger.png",
    description: "Gallium Nitride (GaN) charger capable of powering two devices simultaneously at high speeds in a pocket-sized brick.",
    features: ["65W GaN Technology", "Dual USB Ports", "Cooler Operation", "Travel Friendly"]
  },
  { 
    id: 45, 
    name: "MagSafe Car Wireless Charger", 
    category: "accessories", 
    brand: "generic", 
    specs: "Vent Mount Holder", 
    image: "/products/MagSafe_Car_Wireless_Charger_Mount.png",
    description: "Magnetic wireless charging car mount that securely holds your iPhone while charging on bumpy roads.",
    features: ["MagSafe Alignment", "Secure Vent Mount", "Fast Wireless Charging", "360-Degree Rotation"]
  },
  { 
    id: 46, 
    name: "20000mAh Power Bank", 
    category: "accessories", 
    brand: "generic", 
    specs: "Fast Portable Battery", 
    image: "/products/20000mAh_Fast_Charging_Power_Bank_product_shot.png",
    description: "Massive 20000mAh capacity portable charger to keep your phones and tablets powered throughout travel.",
    features: ["20000mAh Capacity", "Multi-Device Charging", "LED Battery Indicator", "Flight Approved"]
  },
  { 
    id: 47, 
    name: "Universal Travel Adapter", 
    category: "accessories", 
    brand: "generic", 
    specs: "All-in-One Plugs", 
    image: "/products/Universal_All_in_One_Travel_Adapter.png",
    description: "All-in-one international plug adapter compatible with outlets across Europe, UK, USA, and Australia.",
    features: ["Global Plug Interchange", "Built-in Fuse Safety", "Compact Travel Case", "Multi-Country Use"]
  },
  { 
    id: 48, 
    name: "3.5mm Audio Cable", 
    category: "accessories", 
    brand: "generic", 
    specs: "Auxiliary Stereo Wire", 
    image: "/products/3.5mm_Audio_Cable.png",
    description: "High fidelity auxiliary stereo cable for connecting phones or media players to car stereos and speakers.",
    features: ["Gold-Plated Connectors", "Tangle-Resistant Wire", "Clear Stereo Sound", "Standard 3.5mm Jack"]
  },
  { 
    id: 49, 
    name: "High Speed Braided HDMI Cable", 
    category: "accessories", 
    brand: "generic", 
    specs: "4K Support", 
    image: "/products/High_Speed_Braided_HDMI_Cable.png",
    description: "Durable braided HDMI cable supporting 4K ultra HD video streaming and gaming display connectivity.",
    features: ["4K Ultra HD Support", "Nylon Braided Jacket", "Gold Connectors", "High Speed Data Transfer"]
  },
  { 
    id: 50, 
    name: "Apple AirTag", 
    category: "accessories", 
    brand: "apple", 
    specs: "Item Tracker", 
    image: "/products/Apple_AirTag.png",
    description: "Keep track of your keys, wallet, luggage, and more right inside the Find My app on your iPhone.",
    features: ["Precision Finding", "Replaceable Battery", "IP67 Water Resistant", "Find My Network Integration"]
  },
  { 
    id: 51, 
    name: "Apple Pencil 2nd Gen", 
    category: "accessories", 
    brand: "apple", 
    specs: "Stylus for iPad", 
    image: "/products/pple_Pencil_2nd_Gen.png",
    description: "Pixel-perfect precision and industry-low latency for drawing, sketching, and note-taking on compatible iPads.",
    features: ["Magnetic Attachment & Charging", "Double-Tap Tool Switch", "Pressure Sensitive", "Pixel-Perfect Accuracy"]
  },

  // ================= 6. GAMING ZONE =================
  { 
    id: 13, 
    name: "Sony PlayStation 5 Console", 
    category: "gaming", 
    brand: "sony", 
    specs: "Disc Edition", 
    image: "/products/Sony_PlayStation_5_Console_studio_shot.png",
    description: "Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with haptic feedback, and incredible 4K games.",
    features: ["Ultra-High Speed SSD", "Ray Tracing Support", "Tempest 3D AudioTech", "DualSense Wireless Controller"]
  },
  { 
    id: 14, 
    name: "Xbox Series X Console", 
    category: "gaming", 
    brand: "microsoft", 
    specs: "1TB SSD Gaming", 
    image: "/products/Xbox_Series_X_Console.png",
    description: "The fastest, most powerful Xbox ever. Explore rich new worlds with 12 teraflops of raw graphic processing power.",
    features: ["12 Teraflops Processing", "1TB Custom SSD", "True 4K Gaming", "Quick Resume Feature"]
  },
  { 
    id: 15, 
    name: "Nintendo Switch OLED", 
    category: "gaming", 
    brand: "nintendo", 
    specs: "White Console Edition", 
    image: "/products/Nintendo_Switch_OLED.png",
    description: "Featuring a vibrant 7-inch OLED screen, wide adjustable stand, and enhanced audio for gaming at home or on the go.",
    features: ["7-inch OLED Screen", "Wide Adjustable Stand", "Enhanced Audio Speakers", "64GB Internal Storage"]
  },
  // { 
  //   id: 16, 
  //   name: "PS5 DualSense Controller", 
  //   category: "gaming", 
  //   brand: "sony", 
  //   specs: "Wireless Controller", 
  //   image: "/products/PS5_DualSense_Controller.png",
  //   description: "Discover a deeper, highly immersive gaming experience with haptic feedback and dynamic trigger effects.",
  //   features: ["Haptic Feedback", "Adaptive Triggers", "Built-in Microphone", "Create Button"]
  // },
  { 
    id: 17, 
    name: "Logitech G923 Racing Wheel", 
    category: "gaming", 
    brand: "logitech", 
    specs: "TrueForce Feedback", 
    image: "/products/Logitech_G923_Gaming_Steering_Wheel.png",
    description: "High-performance racing wheel featuring TRUEFORCE high-definition force feedback connected directly to game engines.",
    features: ["TRUEFORCE Feedback", "Dual-Clutch Launch", "Brushed Metal Steering", "Responsive Floor Pedals"]
  },
  { 
    id: 18, 
    name: "Meta Quest 3 VR Headset", 
    category: "gaming", 
    brand: "meta", 
    specs: "Mixed Reality", 
    image: "/products/Meta_Quest_3_VR_Headset.png",
    description: "Dive into extraordinary virtual and mixed reality experiences with breakthrough performance and full color passthrough.",
    features: ["Mixed Reality Capabilities", "High-Resolution Display", "Touch Plus Controllers", "Wireless Freedom"]
  },
  { 
    id: 19, 
    name: "Portable Gaming Projector", 
    category: "gaming", 
    brand: "generic", 
    specs: "1080p HD Display", 
    image: "/products/Portable_Gaming_Projector.png",
    description: "Compact HD projector for big-screen gaming, movie nights, and presentations anywhere you set up camp.",
    features: ["1080p HD Output", "Compact Portable Design", "Built-in Speaker", "Multiple Input Ports"]
  },
  { 
    id: 20, 
    name: "Android TV Gaming Stick", 
    category: "gaming", 
    brand: "generic", 
    specs: "4K Streaming", 
    image: "/products/Android_TV_Gaming_Stick.png",
    description: "Transform any TV into a smart streaming and retro gaming entertainment hub with 4K output support.",
    features: ["4K Streaming Support", "Android TV OS", "Compact Stick Form", "Bluetooth Controller Pairing"]
  },
  { 
    id: 21, 
    name: "RGB Wireless Gaming Mouse", 
    category: "gaming", 
    brand: "generic", 
    specs: "High DPI Optical", 
    image: "/products/RGB_Wireless_Gaming_Mouse.png",
    description: "Ergonomic wireless gaming mouse with adjustable high DPI sensor and customizable RGB lighting zones.",
    features: ["High Precision Optical Sensor", "Customizable RGB Lighting", "Wireless Zero-Lag", "Ergonomic Grip"]
  },
  { 
    id: 22, 
    name: "Mechanical RGB Gaming Keyboard", 
    category: "gaming", 
    brand: "generic", 
    specs: "Mechanical Switches", 
    image: "/products/Mechanical_RGB_Gaming_Keyboard.png",
    description: "Tactile mechanical switches and per-key RGB backlighting engineered for competitive gaming and fast typing.",
    features: ["Tactile Mechanical Switches", "Per-Key RGB Lighting", "Anti-Ghosting Keys", "Durable Metal Plate"]
  },
  // --- Gaming Accessories ---
{ 
    id: 24, 
    name: "PS5 DualSense Wireless Controller", 
    category: "gaming", 
    brand: "sony", 
    specs: "Next-Gen Haptic Feedback", 
    image: "/products/ps5.png",
    description: "Immersive wireless controller for PlayStation 5 featuring haptic feedback, dynamic adaptive triggers, and built-in microphone.",
    features: ["Haptic Feedback Tech", "Adaptive Dynamic Triggers", "Built-in Microphone", "Signature Ergonomic Design"]
  },
  { 
    id: 295, 
    name: "PS4 DualShock 4 Wireless Controller", 
    category: "gaming", 
    brand: "sony", 
    specs: "Precision Control", 
    image: "/products/ps4.png",
    description: "Ergonomic wireless controller for PlayStation 4 offering precise analog sticks, integrated light bar, and intuitive touch pad.",
    features: ["Precision Analog Sticks", "Integrated Touch Pad", "Light Bar Tracking", "Built-in Mono Speaker"]
  },
  { 
    id: 23, 
    name: "Laptop Gaming Cooling Pad", 
    category: "gaming", 
    brand: "generic", 
    specs: "Dual Fan Cooling", 
    image: "/products/Laptop_Gaming_Cooling_Pad_RGB.png",
    description: "Keep your gaming laptop running at peak performance during intense sessions with quiet dual cooling fans.",
    features: ["Dual High-Speed Fans", "RGB Accent Lighting", "Adjustable Elevation Angles", "USB Powered"]
  },
  { 
    id: 246, 
    name: "Over-Ear Gaming Headset", 
    category: "gaming", 
    brand: "generic", 
    specs: "Surround Sound & Mic", 
    image: "/products/Over_Ear_Gaming_Headset_with_Mic.png",
    description: "Immersive surround sound headset featuring plush memory foam ear cushions and a noise-canceling boom mic.",
    features: ["Immersive Surround Sound", "Noise-Canceling Mic", "Plush Memory Foam", "Multi-Platform Compatibility"]
  },
  { 
    id: 52, 
    name: "Mini Foldable Camera Drone", 
    category: "gaming", 
    brand: "generic", 
    specs: "HD Aerial Camera", 
    image: "/products/Mini_Foldable_Camera_Drone.png",
    description: "Lightweight foldable drone equipped with an HD camera for capturing breathtaking aerial photography and videos.",
    features: ["Foldable Arm Design", "HD Aerial Camera", "Altitude Hold", "Easy Smartphone Control"]
  },
  { 
    id: 53, 
    name: "Remote Control Racing Car", 
    category: "gaming", 
    brand: "generic", 
    specs: "High Speed Toy", 
    image: "/products/Remote_Control_Racing_Car.png",
    description: "High-speed RC car built for thrilling outdoor racing performance and responsive maneuverability.",
    features: ["High Speed Motor", "Shock Absorbing Suspension", "Rechargeable Battery", "Responsive Controller"]
  },
  { 
    id: 54, 
    name: "Outdoor Smart Security Camera", 
    category: "gaming", 
    brand: "generic", 
    specs: "WiFi IP Camera", 
    image: "/products/Outdoor_Smart_Security_Camera_Wireless.png",
    description: "Weatherproof wireless IP security camera with night vision and motion alerts sent straight to your phone.",
    features: ["Weatherproof IP65", "Night Vision", "Motion Detection Alerts", "WiFi Connectivity"]
  },
  { 
    id: 55, 
    name: "Smart Video Doorbell Camera", 
    category: "gaming", 
    brand: "generic", 
    specs: "Two-Way Audio", 
    image: "/products/Smart_Video_Doorbell_Camera.png",
    description: "See, hear, and speak to visitors at your door from anywhere with crystal clear HD video and two-way audio.",
    features: ["HD Video Feed", "Two-Way Talk Audio", "Smart Motion Detection", "Easy App Setup"]
  },
  { 
    id: 56, 
    name: "TP-Link WiFi Range Extender", 
    category: "gaming", 
    brand: "tplink", 
    specs: "Signal Booster", 
    image: "/products/TP-Link_WiFi_Range_Extender.png",
    description: "Eliminate WiFi dead zones and boost your home network coverage with this wall-plug signal repeater.",
    features: ["WiFi Dead Zone Booster", "Ethernet Port Included", "Easy One-Button Setup", "Universal Compatibility"]
  },
  { 
    id: 57, 
    name: "Amazon Fire TV Stick 4K", 
    category: "gaming", 
    brand: "amazon", 
    specs: "Streaming Device", 
    image: "/products/Amazon_Fire_TV_Stick_4K.png",
    description: "Cinematic 4K Ultra HD streaming with Wi-Fi 6 support and Alexa Voice Remote capabilities.",
    features: ["4K Ultra HD Streaming", "Alexa Voice Remote", "Wi-Fi 6 Support", "Cinematic Dolby Vision"]
  },
  { 
    id: 58, 
    name: "Desktop Selfie Ring Light", 
    category: "gaming", 
    brand: "generic", 
    specs: "With Phone Holder", 
    image: "/products/Desktop_Selfie_Ring_Light_with_Phone_Holder.png",
    description: "Adjustable LED ring light with phone mount for flawless lighting during video calls, streaming, and selfies.",
    features: ["Adjustable Color Tones", "Phone Holder Mount", "USB Powered", "Stable Desk Stand"]
  },
  { 
    id: 59, 
    name: "1080p HD Webcam", 
    category: "gaming", 
    brand: "generic", 
    specs: "With Privacy Cover", 
    image: "/products/1080p_HD_Webcam_with_Privacy_Cover.png",
    description: "Crisp 1080p video calling webcam complete with a physical privacy shutter and built-in microphone.",
    features: ["1080p HD Video", "Physical Privacy Cover", "Plug & Play USB", "Built-in Mic"]
  },
  { 
    id: 60, 
    name: "RGB LED Strip Light Roll", 
    category: "gaming", 
    brand: "generic", 
    specs: "Remote Control", 
    image: "/products/RGB_LED_Strip_Light_Roll.png",
    description: "Flexible color-changing LED strip lights with remote control to elevate your room or desk ambiance.",
    features: ["Multi-Color RGB Modes", "Remote Control Included", "Cut-to-Fit Length", "Strong Adhesive Backing"]
  },
  { 
    id: 61, 
    name: "Digital Voice Recorder", 
    category: "gaming", 
    brand: "generic", 
    specs: "Portable Audio Recorder", 
    image: "/products/Digital_Voice_Recorder_Portable.png",
    description: "High-clarity portable digital voice recorder for lectures, interviews, and personal notes.",
    features: ["High Fidelity Recording", "Long Battery Backup", "Easy File Transfer", "Compact Recorder"]
  },
  { 
    id: 62, 
    name: "Auto Face Tracking Phone Holder", 
    category: "gaming", 
    brand: "generic", 
    specs: "Smart Gimbal Mount", 
    image: "/products/Auto_Face_Tracking_Phone_Holder.png",
    description: "Smart motorized gimbal mount that automatically tracks your face for hands-free video recording and live streaming.",
    features: ["360-Degree Face Tracking", "App-Free Operation", "Rechargeable Battery", "Standard Tripod Mount"]
  },
  { 
    id: 63, 
    name: "Flexible Phone Tripod Stand", 
    category: "gaming", 
    brand: "generic", 
    specs: "Compact & Bendable", 
    image: "/products/Flexible_Phone_Tripod_Stand.png",
    description: "Bendable octopus tripod legs allow you to wrap and secure your phone on virtually any surface for unique angles.",
    features: ["Flexible Bendable Legs", "Secure Phone Clamp", "Compact Travel Size", "360 Ball Head"]
  },
  { 
    id: 64, 
    name: "3-Axis Smartphone Gimbal", 
    category: "gaming", 
    brand: "generic", 
    specs: "Stabilizer", 
    image: "/products/3_Axis_Smartphone_Gimbal_Stabilizer.png",
    description: "Professional 3-axis motorized stabilization for cinematic smooth smartphone video recording.",
    features: ["3-Axis Motorized Stability", "Gesture Control", "Foldable Design", "Companion App Features"]
  }
];

const SHOP_CATEGORIES = [
  { title: "Smartphones", key: "smartphones", desc: "iPhone 11-18 & Samsung Galaxy", img: "/mobile.png" },
  { title: "Laptops", key: "laptops", desc: "MacBooks (M1-M4) & PCs", img: "/laptop.png" },
  { title: "Accessories", key: "accessories", desc: "Cases, Chargers & More", img: "/asseceries.png" },
  { title: "Audio", key: "audio", desc: "AirPods (1-4, Pro, Max) & JBL", img: "/audio.png" },
  { title: "Smart Watches", key: "smartwatches", desc: "Apple Ultra (1-4) & Galaxy Watches", img: "/products/Samsung_Galaxy_Watch_6.png" },
  { title: "Gaming Zone", key: "gaming", desc: "PS5, Xbox & Gear", img: "/repair.png" }
];

function ShopContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("popular");

  // Selected product for Modal Popup
  const [selectedProduct, setSelectedProduct] = useState<typeof INITIAL_PRODUCTS[0] | null>(null);

  // Sync category selection with URL parameter
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategories([categoryParam]);
    }
  }, [categoryParam]);

  // Quick Form State
  const [quickForm, setQuickForm] = useState({
    name: "",
    emailOrPhone: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  // Single Category Selection Logic
  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? [] : [cat]
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

  const handleQuickInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: quickForm.name,
          email: quickForm.emailOrPhone,
          phone: quickForm.emailOrPhone,
          service: "Shop Quick Product Inquiry",
          message: quickForm.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: "success", msg: "Inquiry submitted successfully!" });
        setQuickForm({ name: "", emailOrPhone: "", message: "" });
      } else {
        setStatus({ type: "error", msg: result.error || "Something went wrong." });
      }
    } catch (err) {
      setStatus({ type: "error", msg: "Failed to submit inquiry. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = useMemo(() => {
    let result = INITIAL_PRODUCTS.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.specs.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(product.category);

      const matchesBrand =
        selectedBrands.length === 0 || selectedBrands.includes(product.brand);

      return matchesSearch && matchesCategory && matchesBrand;
    });

    if (sortBy === "az") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [searchQuery, selectedCategories, selectedBrands, sortBy]);

  return (
    <div className="w-full bg-[#C0C0C0] min-h-screen text-[#0F172A] font-sans relative z-0">

      {/* ================= 1. HERO BANNER SECTION ================= */}
      <section className="relative w-full bg-[#D1D5DB] overflow-hidden border-b border-gray-300/65">
        <div className="hidden lg:block">
          <div className="absolute inset-0 w-full h-full flex justify-end">
            <div className="relative w-full lg:w-[75%] h-full">
              <img
                src="/shop-4.jpeg"
                alt="Shop Tech & Accessories Showcase"
                loading="eager"
                decoding="async"
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
            <img 
              src="/shop-4.jpeg" 
              alt="Shop Showcase" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center" 
            />
          </div>
        </div>
      </section>

      {/* ================= 2. SHOP CATEGORY CARDS BAR ================= */}
      <section className="w-full bg-white py-6 px-6 sm:px-10 lg:px-16 border-b border-gray-300/60">
        <div className="max-w-[1680px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {SHOP_CATEGORIES.map((cat) => {
              const isSelected = selectedCategories.includes(cat.key);
              return (
                <div
                  key={cat.key}
                  onClick={() => toggleCategory(cat.key)}
                  className={`bg-white border rounded-2xl p-4 shadow-sm transition-all duration-200 cursor-pointer group flex flex-col justify-between h-44 ${isSelected
                    ? "border-[#F97316] ring-1 ring-[#F97316]"
                    : "border-gray-200 hover:border-[#F97316] hover:shadow-md"
                    }`}
                >
                  <div className="w-full h-24 flex items-center justify-center p-1 overflow-hidden">
                    <img 
                      src={cat.img} 
                      alt={cat.title} 
                      loading="lazy"
                      decoding="async"
                      className="max-h-full max-w-full object-contain group-hover:scale-138 transition-transform duration-300 scale-130" 
                    />
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
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 3. MAIN CONTENT: FILTERS & PRODUCT GRID ================= */}
      <section className="w-full bg-[#C0C0C0] py-8 sm:py-12 px-4 sm:px-10 lg:px-16 border-b border-gray-300/60">
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
                  { name: "Smartphones", key: "smartphones" },
                  { name: "Laptops", key: "laptops" },
                  { name: "Accessories", key: "accessories" },
                  { name: "Audio", key: "audio" },
                  { name: "Smart Watches", key: "smartwatches" },
                  { name: "Gaming Zone", key: "gaming" }
                ].map((item) => (
                  <label key={item.key} className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="categoryFilter"
                        checked={selectedCategories.includes(item.key)}
                        onChange={() => toggleCategory(item.key)}
                        className="text-[#F97316] focus:ring-[#F97316]"
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
                {["apple", "samsung", "asus", "sony", "microsoft", "nintendo", "meta", "jbl", "hoco", "casio", "sandisk", "lenovo", "tplink", "amazon"].map((brand) => (
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
            <div 
              id="catalog-section" 
              className="bg-white border border-gray-200 rounded-2xl px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-sm scroll-mt-28 sm:scroll-mt-36"
            >
              <div>
                <h2 className="text-sm font-bold text-[#0F172A]">Shop Catalog ({filteredProducts.length} Items)</h2>
                <p className="text-[11px] text-gray-500">Click any product for details or inquire instantly via WhatsApp</p>
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

              {/* Filtered Products Grid */}
              <div className="xl:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <div 
                      key={product.id} 
                      onClick={() => setSelectedProduct(product)}
                      className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:border-[#F97316] transition cursor-pointer flex flex-col justify-between space-y-4 group"
                    >
                      <div className="space-y-3">
                        <div className="relative w-full h-52 rounded-xl bg-gray-50 overflow-hidden flex items-center justify-center p-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            loading="lazy"
                            decoding="async"
                            className="max-h-full max-w-full object-contain transition-transform duration-300 scale-[1.2]"
                          />
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-xs font-bold text-[#0F172A] group-hover:text-[#F97316] transition-colors">{product.name}</h3>
                          <p className="text-[11px] text-gray-500">{product.specs}</p>
                        </div>
                      </div>
                      <div className="space-y-2 pt-2">
                        <a
                          href={`https://wa.me/353896091839?text=Hi,%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
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
                    <img 
                      src="/shop-4.jpeg" 
                      alt="Store" 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <p className="text-[11px] text-gray-600">See our full range in person. Get expert advice and friendly support.</p>
                  <div className="grid grid-cols-2 gap-2">
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="bg-[#F97316] hover:bg-[#EA580C] text-white py-2 rounded-xl text-[10px] font-bold flex items-center justify-center gap-1">
                      <Navigation className="w-3 h-3" /> Get Directions
                    </a>
                    <a href="https://wa.me/353896091839" target="_blank" rel="noopener noreferrer" className="bg-[#00D66C] hover:bg-[#00B85C] text-white py-2 rounded-xl text-[10px] font-bold flex items-center justify-center gap-1">
                      <MessageCircle className="w-3 h-3 fill-white" /> WhatsApp
                    </a>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#0F172A]">Quick Product Inquiry</h3>

                  {status && (
                    <div className={`p-2.5 rounded-xl text-xs font-medium ${status.type === "success" ? "bg-green-500/10 text-green-700 border border-green-500/20" : "bg-red-500/10 text-red-700 border border-red-500/20"}`}>
                      {status.msg}
                    </div>
                  )}

                  <form onSubmit={handleQuickInquirySubmit} className="space-y-3">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      required
                      value={quickForm.name}
                      onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-300 rounded-xl px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-[#F97316]"
                    />
                    <input
                      type="text"
                      placeholder="Email or Phone *"
                      required
                      value={quickForm.emailOrPhone}
                      onChange={(e) => setQuickForm({ ...quickForm, emailOrPhone: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-300 rounded-xl px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-[#F97316]"
                    />
                    <textarea
                      rows={2}
                      placeholder="Tell us what you're looking for..."
                      required
                      value={quickForm.message}
                      onChange={(e) => setQuickForm({ ...quickForm, message: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-300 rounded-xl px-3 py-2 text-xs outline-none resize-none focus:ring-2 focus:ring-[#F97316]"
                    ></textarea>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition shadow-md disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{loading ? "Submitting..." : "Submit Inquiry"}</span>
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

      {/* ================= 5. POPUP MODAL ================= */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[99999] flex items-start justify-center p-4 sm:p-6 pt-36 sm:pt-44 bg-black/75 backdrop-blur-md animate-fadeIn overflow-y-auto">
          <div className="bg-white border border-slate-300 rounded-3xl max-w-4xl w-[95%] sm:w-[85%] lg:w-[75%] p-6 sm:p-10 shadow-2xl relative space-y-6 max-h-[85vh] overflow-y-auto my-auto mb-12">
            
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full p-2.5 transition outline-none z-10 shadow-md"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="w-full h-80 sm:h-96 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center p-6 shadow-inner">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  loading="lazy"
                  decoding="async"
                  className="max-h-full max-w-full object-contain drop-shadow-2xl scale-[1.3]"
                />
              </div>

              <div className="space-y-4">
                <div className="inline-flex items-center gap-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-md bg-orange-100 text-[#F97316] uppercase tracking-wider">
                    {selectedProduct.brand}
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-md bg-emerald-100 text-emerald-700 uppercase">
                    {selectedProduct.category}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0F172A] leading-tight">
                  {selectedProduct.name}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {selectedProduct.description || "Experience top-tier quality and seamless performance with this verified device, available directly at ROX Tech Solutions in Cashel."}
                </p>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                  <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
                    <span>Why Choose This Product at ROX Tech Cashel</span>
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Verified authentic stock available directly at our physical store in Cashel, County Tipperary. Enjoy expert local advice, quick WhatsApp inquiries, and guaranteed top-tier performance for all tech items.
                  </p>
                </div>

                {selectedProduct.features && (
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
                )}
              </div>
            </div>

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

    </div>
  );
}

export default function DynamicShopPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-xs font-bold">Loading Shop...</div>}>
      <ShopContent />
    </Suspense>
  );
}