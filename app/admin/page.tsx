"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/app/utils/supabase";
import { 
  Trash2, 
  Plus, 
  Lock, 
  Upload, 
  Package, 
  LogOut, 
  CheckCircle2, 
  Wind, 
  LayoutDashboard, 
  ShoppingBag, 
  Settings, 
  Headphones, 
  ArrowRight,
  TrendingUp,
  Layers,
  ShoppingCart
} from "lucide-react";
import Image from "next/image";

// Simple Admin Password
const ADMIN_PASS = "roxtech2026";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  
  // Navigation State: "dashboard" | "shop" | "vapes" | "settings"
  const [activeView, setActiveView] = useState<"dashboard" | "shop" | "vapes" | "settings">("dashboard");

  // Shop & Vapes Products State
  const [shopProducts, setShopProducts] = useState<any[]>([]);
  const [vapesProducts, setVapesProducts] = useState<any[]>([]);
  
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  // Shop Form State
  const [shopForm, setShopForm] = useState({
    name: "",
    category: "smartphones",
    brand: "apple",
    specs: "",
    image: "",
    description: "",
    features: "",
  });

  // Vapes Form State
  const [vapesForm, setVapesForm] = useState({
    name: "",
    brand: "vaporesso",
    flavor: "devices",
    nicotine: "20mg",
    badge: "Popular",
    badgeColor: "bg-[#F97316]",
    image: "",
    description: "",
    features: "",
  });

  useEffect(() => {
    if (sessionStorage.getItem("rox_admin") === "true") {
      setIsAuthenticated(true);
      fetchAllData();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASS) {
      sessionStorage.setItem("rox_admin", "true");
      setIsAuthenticated(true);
      fetchAllData();
    } else {
      alert("Wrong password!");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("rox_admin");
    setIsAuthenticated(false);
  };

  const fetchAllData = async () => {
    setLoading(true);
    
    // 1. Fetch Shop Products
    const { data: shopData } = await supabase
      .from("products")
      .select("*")
      .order("id", { ascending: false });
    if (shopData) setShopProducts(shopData);

    // 2. Fetch Vapes Products
    const { data: vapesData, error: vapesError } = await supabase
      .from("vapes_products")
      .select("*")
      .order("id", { ascending: false });
    
    if (!vapesError && vapesData) {
      setVapesProducts(vapesData);
    }

    setLoading(false);
  };

  // Image Upload to Supabase Storage
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: "shop" | "vapes") => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from("product-images")
      .upload(fileName, file);

    if (uploadError) {
      alert("Image upload failed: " + uploadError.message);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage
      .from("product-images")
      .getPublicUrl(fileName);

    if (type === "shop") {
      setShopForm({ ...shopForm, image: data.publicUrl });
    } else {
      setVapesForm({ ...vapesForm, image: data.publicUrl });
    }
    setUploading(false);
  };

  // Add Shop Product
  const handleAddShopProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    const featuresArray = shopForm.features
      ? shopForm.features.split(",").map((f) => f.trim())
      : ["Genuine Product", "ROX Tech Warranty"];

    const { error } = await supabase.from("products").insert([
      {
        name: shopForm.name,
        category: shopForm.category,
        brand: shopForm.brand,
        specs: shopForm.specs,
        image: shopForm.image || "/products/iphone-15.png",
        description: shopForm.description,
        features: featuresArray,
      },
    ]);

    if (error) {
      alert("Error: " + error.message);
    } else {
      alert("Shop Product Added Successfully!");
      setShopForm({
        name: "",
        category: "smartphones",
        brand: "apple",
        specs: "",
        image: "",
        description: "",
        features: "",
      });
      fetchAllData();
    }
  };

  // Add Vape Product
  const handleAddVapeProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    const featuresArray = vapesForm.features
      ? vapesForm.features.split(",").map((f) => f.trim())
      : ["Authentic Vape", "Cashel Store Stock"];

    const { error } = await supabase.from("vapes_products").insert([
      {
        name: vapesForm.name,
        brand: vapesForm.brand,
        flavor: vapesForm.flavor,
        nicotine: vapesForm.nicotine,
        badge: vapesForm.badge,
        badge_color: vapesForm.badgeColor,
        image: vapesForm.image || "/vapes/Vaporesso_Luxe_X2_Pod_Kit-removebg-preview.png",
        description: vapesForm.description,
        features: featuresArray,
      },
    ]);

    if (error) {
      alert("Error inserting: " + error.message);
    } else {
      alert("Vape Product Added Successfully!");
      setVapesForm({
        name: "",
        brand: "vaporesso",
        flavor: "devices",
        nicotine: "20mg",
        badge: "Popular",
        badgeColor: "bg-[#F97316]",
        image: "",
        description: "",
        features: "",
      });
      fetchAllData();
    }
  };

  const handleDeleteShopProduct = async (id: number) => {
    if (!confirm("Delete this shop product permanently?")) return;
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (!error) {
      setShopProducts(shopProducts.filter((p) => p.id !== id));
    }
  };

  const handleDeleteVapeProduct = async (id: number) => {
    if (!confirm("Delete this vape product permanently?")) return;
    const { error } = await supabase.from("vapes_products").delete().eq("id", id);
    if (!error) {
      setVapesProducts(vapesProducts.filter((p) => p.id !== id));
    }
  };

  // ================= LOGIN SCREEN =================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#C0C0C0] flex items-center justify-center p-4">
        <form
          onSubmit={handleLogin}
          className="bg-white border border-gray-200 rounded-3xl p-8 max-w-sm w-full shadow-2xl space-y-5 text-center"
        >
          <div className="w-14 h-14 bg-orange-100 text-[#F97316] rounded-2xl flex items-center justify-center mx-auto shadow-inner">
            <Lock className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-xl font-black text-[#0F172A]">ROX Admin Access</h1>
            <p className="text-xs text-gray-500 mt-1">Enter store password to manage inventory</p>
          </div>
          <input
            type="password"
            placeholder="Enter Password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-xs outline-none focus:border-[#F97316] transition"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-3.5 rounded-xl text-xs font-bold transition shadow-md"
          >
            Unlock Dashboard
          </button>
        </form>
      </div>
    );
  }

  // ================= MAIN LAYOUT WITH SIDEBAR =================
  return (
    <div className="min-h-screen bg-[#C0C0C0] text-[#0F172A] font-sans flex flex-col md:flex-row">
      
      {/* LEFT SIDEBAR */}
      <aside className="w-full md:w-64 bg-[#0F172A] text-white flex flex-col justify-between p-6 shrink-0 md:min-h-screen shadow-xl">
        <div className="space-y-8">
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#F97316] rounded-xl flex items-center justify-center font-black text-white shadow-md">
              ROX
            </div>
            <div>
              <h2 className="text-xs font-black tracking-wider uppercase text-white">TECH SOLUTIONS</h2>
              <p className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Online
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            <button
              onClick={() => setActiveView("dashboard")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition ${
                activeView === "dashboard"
                  ? "bg-[#F97316] text-white shadow-lg shadow-orange-500/20"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <LayoutDashboard className="w-4 h-4" /> Dashboard
            </button>

            <button
              onClick={() => setActiveView("shop")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition ${
                activeView === "shop"
                  ? "bg-[#F97316] text-white shadow-lg shadow-orange-500/20"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <ShoppingBag className="w-4 h-4" /> Shop Inventory
            </button>

            <button
              onClick={() => setActiveView("vapes")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition ${
                activeView === "vapes"
                  ? "bg-[#F97316] text-white shadow-lg shadow-orange-500/20"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Wind className="w-4 h-4" /> Vapes & Pouches
            </button>

            <button
              onClick={() => setActiveView("settings")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition ${
                activeView === "settings"
                  ? "bg-[#F97316] text-white shadow-lg shadow-orange-500/20"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Settings className="w-4 h-4" /> Settings
            </button>
          </nav>
        </div>

        {/* Sidebar Footer & Support */}
        <div className="space-y-4 pt-6">
          <div className="bg-slate-800/80 border border-slate-700/60 p-4 rounded-2xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-white">
              <Headphones className="w-4 h-4 text-[#F97316]" /> Need Help?
            </div>
            <p className="text-[10px] text-slate-400 leading-relaxed">
              Contact store developer for system support & updates.
            </p>
            <a
              href="https://wa.me/353896091839"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#F97316] hover:bg-[#EA580C] text-center text-white py-2 rounded-xl text-[11px] font-bold transition"
            >
              Contact Support
            </a>
          </div>

          <button
            onClick={handleLogout}
            className="w-full bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-6 md:p-10 space-y-8 overflow-y-auto">
        
        {/* TOP BAR */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 flex justify-between items-center shadow-sm">
          <div>
            <h1 className="text-xl font-black text-[#0F172A]">ROX Master Admin Panel</h1>
            <p className="text-xs text-gray-500">Cashel, County Tipperary Store Management</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Online
            </span>
          </div>
        </div>

        {/* ================= VIEW 1: DASHBOARD WELCOME HOME SCREEN ================= */}
        {activeView === "dashboard" && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* Welcome Banner Card */}
            <div className="bg-gradient-to-r from-[#0F172A] via-slate-800 to-[#0F172A] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="space-y-3 z-10 max-w-xl">
                <span className="bg-[#F97316] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Admin Portal v1.0
                </span>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                  Welcome back, Admin! 👋
                </h2>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Manage your inventory, track live stock counts, and keep ROX Tech Solutions fully updated across both Shop and Vapes inventories.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => setActiveView("shop")}
                    className="bg-[#F97316] hover:bg-[#EA580C] text-white px-6 py-3 rounded-xl text-xs font-bold flex items-center gap-2 transition shadow-md"
                  >
                    <span>Manage Shop Inventory</span> <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveView("vapes")}
                    className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl text-xs font-bold transition backdrop-blur-sm"
                  >
                    Manage Vapes Inventory
                  </button>
                </div>
              </div>

              {/* Decorative Stats Graphic or Illustration */}
              <div className="hidden lg:flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
                <div className="text-center px-4 border-r border-white/10">
                  <p className="text-2xl font-black text-[#F97316]">{shopProducts.length}</p>
                  <p className="text-[10px] text-slate-300 uppercase font-bold tracking-wider">Shop Items</p>
                </div>
                <div className="text-center px-4">
                  <p className="text-2xl font-black text-emerald-400">{vapesProducts.length}</p>
                  <p className="text-[10px] text-slate-300 uppercase font-bold tracking-wider">Vapes Items</p>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm space-y-2">
                <div className="flex items-center justify-between text-gray-500">
                  <span className="text-xs font-bold uppercase tracking-wider">Total Products</span>
                  <Package className="w-5 h-5 text-[#F97316]" />
                </div>
                <p className="text-2xl font-black text-[#0F172A]">{shopProducts.length + vapesProducts.length}</p>
                <p className="text-[10px] text-emerald-600 font-bold">● Active in Supabase DB</p>
              </div>

              <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm space-y-2">
                <div className="flex items-center justify-between text-gray-500">
                  <span className="text-xs font-bold uppercase tracking-wider">Shop Stock</span>
                  <ShoppingBag className="w-5 h-5 text-blue-500" />
                </div>
                <p className="text-2xl font-black text-[#0F172A]">{shopProducts.length}</p>
                <p className="text-[10px] text-blue-600 font-bold">Smartphones, Laptops & More</p>
              </div>

              <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm space-y-2">
                <div className="flex items-center justify-between text-gray-500">
                  <span className="text-xs font-bold uppercase tracking-wider">Vapes Stock</span>
                  <Wind className="w-5 h-5 text-emerald-500" />
                </div>
                <p className="text-2xl font-black text-[#0F172A]">{vapesProducts.length}</p>
                <p className="text-[10px] text-emerald-600 font-bold">Kits, Coils & Pouches</p>
              </div>

              <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm space-y-2">
                <div className="flex items-center justify-between text-gray-500">
                  <span className="text-xs font-bold uppercase tracking-wider">Store Location</span>
                  <Layers className="w-5 h-5 text-purple-500" />
                </div>
                <p className="text-lg font-black text-[#0F172A]">Cashel, Ireland</p>
                <p className="text-[10px] text-purple-600 font-bold">Main Street Hub</p>
              </div>
            </div>

            {/* Quick Actions Bar */}
            <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#0F172A]">Quick Navigation Shortcuts</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <button
                  onClick={() => setActiveView("shop")}
                  className="bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-[#F97316] p-4 rounded-xl text-left transition space-y-1 group"
                >
                  <p className="text-xs font-bold text-[#0F172A] group-hover:text-[#F97316]">📦 Shop Inventory</p>
                  <p className="text-[10px] text-gray-500">Add or remove electronics & tech items</p>
                </button>

                <button
                  onClick={() => setActiveView("vapes")}
                  className="bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-[#F97316] p-4 rounded-xl text-left transition space-y-1 group"
                >
                  <p className="text-xs font-bold text-[#0F172A] group-hover:text-[#F97316]">💨 Vapes & Pouches</p>
                  <p className="text-[10px] text-gray-500">Add or remove vapes, coils & e-liquids</p>
                </button>

                <a
                  href="/shop"
                  target="_blank"
                  className="bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-[#F97316] p-4 rounded-xl text-left transition space-y-1 group block"
                >
                  <p className="text-xs font-bold text-[#0F172A] group-hover:text-[#F97316]">🌐 View Live Store</p>
                  <p className="text-[10px] text-gray-500">Preview frontend website pages</p>
                </a>

                <button
                  onClick={() => setActiveView("settings")}
                  className="bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-[#F97316] p-4 rounded-xl text-left transition space-y-1 group"
                >
                  <p className="text-xs font-bold text-[#0F172A] group-hover:text-[#F97316]">⚙️ System Settings</p>
                  <p className="text-[10px] text-gray-500">Database & security configuration</p>
                </button>
              </div>
            </div>

          </div>
        )}

        {/* ================= VIEW 2: SHOP INVENTORY ================= */}
        {activeView === "shop" && (
          <div className="space-y-6 animate-fadeIn">
            
            {/* Header & Back */}
            <div className="flex justify-between items-center">
              <h2 className="text-sm font-black uppercase tracking-wider text-[#0F172A]">Shop Inventory Management</h2>
              <button
                onClick={() => setActiveView("dashboard")}
                className="text-xs font-bold text-[#F97316] hover:underline"
              >
                ← Back to Dashboard
              </button>
            </div>

            {/* Add Shop Product Form */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-5">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#0F172A] flex items-center gap-2">
                <Plus className="w-4 h-4 text-[#F97316]" /> Add New Shop Product
              </h3>

              <form onSubmit={handleAddShopProduct} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Product Name *"
                  required
                  value={shopForm.name}
                  onChange={(e) => setShopForm({ ...shopForm, name: e.target.value })}
                  className="bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-[#F97316]"
                />

                <select
                  value={shopForm.category}
                  onChange={(e) => setShopForm({ ...shopForm, category: e.target.value })}
                  className="bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-[#F97316]"
                >
                  <option value="smartphones">Smartphones</option>
                  <option value="laptops">Laptops</option>
                  <option value="accessories">Accessories</option>
                  <option value="audio">Audio</option>
                  <option value="smartwatches">Smart Watches</option>
                  <option value="gaming">Gaming Zone</option>
                </select>

                <select
                  value={shopForm.brand}
                  onChange={(e) => setShopForm({ ...shopForm, brand: e.target.value })}
                  className="bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-[#F97316]"
                >
                  <option value="apple">Apple</option>
                  <option value="samsung">Samsung</option>
                  <option value="sony">Sony</option>
                  <option value="asus">Asus</option>
                  <option value="microsoft">Microsoft</option>
                  <option value="nintendo">Nintendo</option>
                  <option value="meta">Meta</option>
                  <option value="jbl">JBL</option>
                  <option value="hoco">Hoco</option>
                  <option value="casio">Casio</option>
                  <option value="sandisk">SanDisk</option>
                  <option value="lenovo">Lenovo</option>
                  <option value="tplink">TP-Link</option>
                  <option value="amazon">Amazon</option>
                  <option value="generic">Generic / Other</option>
                </select>

                <input
                  type="text"
                  placeholder="Short Specs (e.g. 256GB | Titanium) *"
                  required
                  value={shopForm.specs}
                  onChange={(e) => setShopForm({ ...shopForm, specs: e.target.value })}
                  className="bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-[#F97316]"
                />

                <div className="flex items-center gap-2 bg-gray-50 border border-gray-300 rounded-xl px-3 py-2">
                  <label className="cursor-pointer flex items-center gap-2 text-xs font-bold text-[#F97316] hover:underline">
                    <Upload className="w-4 h-4" />
                    <span>{uploading ? "Uploading..." : "Upload Image"}</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, "shop")}
                      className="hidden"
                    />
                  </label>
                  {shopForm.image && (
                    <span className="text-[10px] text-green-600 flex items-center gap-1 ml-auto font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Ready
                    </span>
                  )}
                </div>

                <input
                  type="text"
                  placeholder="Features (comma separated)"
                  value={shopForm.features}
                  onChange={(e) => setShopForm({ ...shopForm, features: e.target.value })}
                  className="bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-[#F97316]"
                />

                <textarea
                  rows={2}
                  placeholder="Detailed Product Description..."
                  value={shopForm.description}
                  onChange={(e) => setShopForm({ ...shopForm, description: e.target.value })}
                  className="md:col-span-3 bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-[#F97316] resize-none"
                />

                <button
                  type="submit"
                  disabled={uploading}
                  className="md:col-span-3 bg-[#F97316] hover:bg-[#EA580C] text-white py-3 rounded-xl text-xs font-bold transition shadow-md disabled:opacity-50"
                >
                  + Add Product to Shop Live Store
                </button>
              </form>
            </div>

            {/* Shop Products List Grid */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#0F172A]">
                Shop Inventory ({shopProducts.length})
              </h3>

              {loading ? (
                <p className="text-xs text-gray-500 py-8 text-center">Loading shop inventory...</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {shopProducts.map((item) => (
                    <div
                      key={item.id}
                      className="border border-gray-200 rounded-2xl p-4 flex flex-col justify-between space-y-3 bg-gray-50/50"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 bg-white rounded-xl border border-gray-200 relative shrink-0 p-1">
                          <Image
                            src={item.image || "/products/iphone-15.png"}
                            alt={item.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-xs font-bold text-[#0F172A] truncate">{item.name}</h4>
                          <p className="text-[10px] text-gray-500 capitalize">
                            {item.brand} • {item.category}
                          </p>
                          <p className="text-[10px] text-gray-400 truncate">{item.specs}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDeleteShopProduct(item.id)}
                        className="w-full bg-red-50 hover:bg-red-500 hover:text-white text-red-600 py-2 rounded-xl text-[11px] font-bold flex items-center justify-center gap-1.5 transition"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Delete Product
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================= VIEW 3: VAPES INVENTORY ================= */}
        {activeView === "vapes" && (
          <div className="space-y-6 animate-fadeIn">
            
            {/* Header & Back */}
            <div className="flex justify-between items-center">
              <h2 className="text-sm font-black uppercase tracking-wider text-[#0F172A]">Vapes & Pouches Management</h2>
              <button
                onClick={() => setActiveView("dashboard")}
                className="text-xs font-bold text-[#F97316] hover:underline"
              >
                ← Back to Dashboard
              </button>
            </div>

            {/* Add Vape Product Form */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-5">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#0F172A] flex items-center gap-2">
                <Plus className="w-4 h-4 text-[#F97316]" /> Add New Vape / Pouch Product
              </h3>

              <form onSubmit={handleAddVapeProduct} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Vape/Pouch Name *"
                  required
                  value={vapesForm.name}
                  onChange={(e) => setVapesForm({ ...vapesForm, name: e.target.value })}
                  className="bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-[#F97316]"
                />

                <select
                  value={vapesForm.flavor}
                  onChange={(e) => setVapesForm({ ...vapesForm, flavor: e.target.value })}
                  className="bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-[#F97316]"
                >
                  <option value="devices">Vaping Kits / Devices</option>
                  <option value="coils">Coils & Batteries</option>
                  <option value="fruits">Fruits & Juices</option>
                  <option value="pods">Disposables & Pods</option>
                  <option value="pouches">Nicotine Pouches</option>
                </select>

                <input
                  type="text"
                  placeholder="Brand (e.g. Vaporesso, Elfbar, Cuba) *"
                  required
                  value={vapesForm.brand}
                  onChange={(e) => setVapesForm({ ...vapesForm, brand: e.target.value })}
                  className="bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-[#F97316]"
                />

                <input
                  type="text"
                  placeholder="Nicotine / Strength (e.g. 20mg, 0.8Ω) *"
                  required
                  value={vapesForm.nicotine}
                  onChange={(e) => setVapesForm({ ...vapesForm, nicotine: e.target.value })}
                  className="bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-[#F97316]"
                />

                <input
                  type="text"
                  placeholder="Badge (e.g. Popular, Hot Seller)"
                  value={vapesForm.badge}
                  onChange={(e) => setVapesForm({ ...vapesForm, badge: e.target.value })}
                  className="bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-[#F97316]"
                />

                <div className="flex items-center gap-2 bg-gray-50 border border-gray-300 rounded-xl px-3 py-2">
                  <label className="cursor-pointer flex items-center gap-2 text-xs font-bold text-[#F97316] hover:underline">
                    <Upload className="w-4 h-4" />
                    <span>{uploading ? "Uploading..." : "Upload Vape Image"}</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, "vapes")}
                      className="hidden"
                    />
                  </label>
                  {vapesForm.image && (
                    <span className="text-[10px] text-green-600 flex items-center gap-1 ml-auto font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Ready
                    </span>
                  )}
                </div>

                <input
                  type="text"
                  placeholder="Features (comma separated)"
                  value={vapesForm.features}
                  onChange={(e) => setVapesForm({ ...vapesForm, features: e.target.value })}
                  className="bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-[#F97316]"
                />

                <textarea
                  rows={2}
                  placeholder="Detailed Product Description..."
                  value={vapesForm.description}
                  onChange={(e) => setVapesForm({ ...vapesForm, description: e.target.value })}
                  className="md:col-span-2 bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-[#F97316] resize-none"
                />

                <button
                  type="submit"
                  disabled={uploading}
                  className="md:col-span-3 bg-[#F97316] hover:bg-[#EA580C] text-white py-3 rounded-xl text-xs font-bold transition shadow-md disabled:opacity-50"
                >
                  + Add Product to Vapes Live Store
                </button>
              </form>
            </div>

            {/* Vapes Products List Grid */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#0F172A]">
                Vapes Inventory ({vapesProducts.length})
              </h3>

              {loading ? (
                <p className="text-xs text-gray-500 py-8 text-center">Loading vapes inventory...</p>
              ) : vapesProducts.length === 0 ? (
                <div className="text-center py-10 space-y-2">
                  <p className="text-xs text-gray-500">No products found in `vapes_products` table yet.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {vapesProducts.map((item) => (
                    <div
                      key={item.id}
                      className="border border-gray-200 rounded-2xl p-4 flex flex-col justify-between space-y-3 bg-gray-50/50"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 bg-white rounded-xl border border-gray-200 relative shrink-0 p-1">
                          <Image
                            src={item.image || "/vapes/Vaporesso_Luxe_X2_Pod_Kit-removebg-preview.png"}
                            alt={item.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-xs font-bold text-[#0F172A] truncate">{item.name}</h4>
                          <p className="text-[10px] text-gray-500 capitalize">
                            {item.brand} • {item.flavor}
                          </p>
                          <p className="text-[10px] text-emerald-600 font-bold truncate">{item.nicotine}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDeleteVapeProduct(item.id)}
                        className="w-full bg-red-50 hover:bg-red-500 hover:text-white text-red-600 py-2 rounded-xl text-[11px] font-bold flex items-center justify-center gap-1.5 transition"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Delete Vape Product
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================= VIEW 4: SETTINGS ================= */}
        {activeView === "settings" && (
          <div className="bg-white border border-gray-200 rounded-2xl p-8 space-y-6 animate-fadeIn">
            <h2 className="text-base font-black uppercase tracking-wider text-[#0F172A]">System Settings</h2>
            <div className="space-y-4 text-xs text-slate-600">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-1">
                <p className="font-bold text-[#0F172A]">Store Information</p>
                <p>ROX Tech Solutions, Cashel Shopping Centre, Co. Tipperary, Ireland.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-1">
                <p className="font-bold text-[#0F172A]">Supabase Database Tables</p>
                <p>Connected to tables: <code className="text-[#F97316] font-bold">products</code> &amp; <code className="text-[#F97316] font-bold">vapes_products</code></p>
              </div>
              <button
                onClick={() => setActiveView("dashboard")}
                className="bg-[#0F172A] text-white px-6 py-3 rounded-xl font-bold"
              >
                Return to Dashboard
              </button>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}