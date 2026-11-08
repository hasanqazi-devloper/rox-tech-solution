"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MessageCircle,
  MapPin,
  Search,
  Menu,
  X,
  ShoppingBag,
  Sparkles
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Vapes", href: "/vapes" },
    { name: "Repairs", href: "/repairs" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const tickerItems = [
    { text: "iPhone 18, Pro & Pro Max - All Colors Available Now!", icon: "https://img.icons8.com/3d-fluent/100/iphone18-pro.png" },
    { text: "Call / WhatsApp Us: 00353896091839", icon: "https://img.icons8.com/3d-fluent/100/iphone18-pro.png" },
    { text: "Experience Next-Gen iPhone Flagships in Store - Cashel, Ireland", icon: "https://img.icons8.com/3d-fluent/100/iphone18-pro.png" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xs transition-all duration-300">

      {/* ================= PROFESSIONAL ANNOUNCEMENT TICKER BAR ================= */}
      <div className="bg-[#0B0F19] text-slate-300 text-xs py-2 overflow-hidden relative border-b border-slate-800/80 flex items-center shadow-xs">

        {/* Left Fade Gradient for Smooth Marquee Entry */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0B0F19] to-transparent z-20 pointer-events-none hidden md:block" />

        {/* Fixed Badge on Left - Sleek & Professional */}
        <div className="hidden md:flex items-center gap-1.5 px-3.5 bg-gradient-to-r from-orange-600 to-[#F97316] text-white font-bold text-[10px] tracking-widest uppercase z-10 shrink-0 h-full py-2 shadow-sm border-r border-orange-500/30">
          <Sparkles className="w-3 h-3 animate-pulse text-orange-200" />
          <span>Latest Stock</span>
        </div>

        {/* Marquee Slider */}
        <div className="flex w-max animate-marquee items-center space-x-12 whitespace-nowrap pl-6">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <div key={index} className="flex items-center gap-2.5 font-normal tracking-wide text-slate-300 hover:text-white transition-colors">
              <img
                src={item.icon}
                alt="Stock Icon"
                className="w-4 h-4 object-contain shrink-0 opacity-90"
              />
              <span className="text-[11px] sm:text-xs font-medium text-slate-200">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Right Fade Gradient for Smooth Marquee Exit */}
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0B0F19] to-transparent z-20 pointer-events-none" />

      </div>

      <div className="max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">

        {/* 1. Mobile Menu Toggle & Brand Logo Group */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 text-gray-800 hover:text-[#F97316] outline-none focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Brand Logo (Mobile) */}
          <Link href="/" className="flex items-center shrink-0 outline-none">
            <img
              src="/footer-logo.png"
              alt="ROX Tech Solutions Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>

        {/* 1. Brand Logo (Desktop) */}
        <Link href="/" className="hidden lg:flex items-center gap-2.5 group shrink-0 outline-none">
          <img
            src="/footer-logo.png"
            alt="ROX Tech Solutions Logo"
            className="h-12 xl:h-14 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-7 text-sm font-semibold text-[#0F172A]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-2 transition hover:text-[#F97316] outline-none ${isActive ? "text-[#F97316] font-bold" : "text-[#0F172A]"
                  }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#F97316] rounded-full animate-fadeIn" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Search Bar (Desktop) */}
        <div className="hidden md:flex items-center relative w-56 lg:w-72">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-100 border border-gray-300 rounded-full py-2 pl-4 pr-10 text-xs text-gray-800 placeholder-gray-400 focus:bg-white focus:border-[#F97316] outline-none transition"
          />
          <Search className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <button className="lg:hidden p-1 text-gray-800 hover:text-[#F97316] outline-none">
            <Search className="w-5 h-5" />
          </button>

          <a
            href="https://wa.me/353896091839"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 bg-[#22C55E] hover:bg-[#16A34A] text-white px-4 py-2.5 rounded-full font-bold text-xs shadow-sm transition outline-none"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>

          <Link
            href="/contact"
            className="hidden sm:flex items-center gap-1.5 bg-[#F97316] hover:bg-[#EA580C] text-white px-4 py-2.5 rounded-full font-bold text-xs shadow-sm transition outline-none"
          >
            <MapPin className="w-4 h-4" />
            <span>Visit Store</span>
          </Link>

          <div className="relative p-2 text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer transition">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-[#F97316] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-black border-2 border-white pointer-events-none">
              2
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-300 px-4 pt-3 pb-6 space-y-4 shadow-xl animate-fadeIn">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-gray-100 border border-gray-300 rounded-full py-2 pl-4 pr-10 text-xs text-gray-800 outline-none"
            />
            <Search className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
          </div>

          <div className="flex flex-col space-y-3 font-bold text-sm text-[#0F172A]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition ${isActive ? "text-[#F97316] pl-2 border-l-4 border-[#F97316]" : "hover:text-[#F97316]"}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://wa.me/353896091839"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#22C55E] text-white py-2.5 rounded-full font-bold text-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#F97316] text-white py-2.5 rounded-full font-bold text-xs"
            >
              <MapPin className="w-4 h-4" />
              <span>Visit Store</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}