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
  ShoppingBag 
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

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-300 shadow-sm transition-all duration-300">
      <div className="max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* ================= DESKTOP VIEW ================= */}
        {/* 1. Brand Logo (Left Side - Desktop) */}
        <Link href="/" className="hidden lg:flex items-center shrink-0 outline-none focus:outline-none">
          <div className="relative h-10 sm:h-16 w-36 flex items-center">
            <Image 
              src="/rox-logo.png" 
              alt="ROX Tech Solutions Logo" 
              fill
              className="object-contain object-left" 
              priority 
            />
          </div>
        </Link>

        {/* ================= MOBILE VIEW ================= */}
        {/* 1. Mobile Menu Toggle (Left) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-1 text-gray-800 hover:text-[#F97316] outline-none focus:outline-none focus:ring-0"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* 2. Brand Logo (Center - Mobile) */}
        <Link href="/" className="lg:hidden flex items-center justify-center shrink-0 absolute left-1/2 -translate-x-1/2 outline-none focus:outline-none">
          <div className="relative h-10 w-28 flex items-center">
            <Image 
              src="/rox-logo.png" 
              alt="ROX Tech Solutions Logo" 
              fill
              className="object-contain object-center" 
              priority 
            />
          </div>
        </Link>

        {/* 2. Navigation Links (Center - Desktop) with Active Underline Effect */}
        <nav className="hidden lg:flex items-center space-x-7 text-sm font-semibold text-[#0F172A]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`relative py-2 transition hover:text-[#F97316] outline-none focus:outline-none focus:ring-0 ${
                  isActive ? "text-[#F97316] font-bold" : "text-[#0F172A]"
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

        {/* 3. Search Bar (Desktop) */}
        <div className="hidden md:flex items-center relative w-64 lg:w-72">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-100 border border-gray-300 rounded-full py-2 pl-4 pr-10 text-xs text-gray-800 placeholder-gray-400 focus:bg-white focus:border-[#F97316] outline-none transition"
          />
          <Search className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
        </div>

        {/* ================= RIGHT ACTIONS ================= */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Mobile Search Icon Quick Toggle */}
          <button className="lg:hidden p-1 text-gray-800 hover:text-[#F97316] outline-none focus:outline-none">
            <Search className="w-5 h-5" />
          </button>

          {/* Desktop WhatsApp Button */}
          <a
            href="https://wa.me/353000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 bg-[#22C55E] hover:bg-[#16A34A] text-white px-4 py-2.5 rounded-full font-bold text-xs shadow-sm transition outline-none focus:outline-none"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>

          {/* Desktop Visit Store Button */}
          <Link
            href="/contact"
            className="hidden sm:flex items-center gap-1.5 bg-[#F97316] hover:bg-[#EA580C] text-white px-4 py-2.5 rounded-full font-bold text-xs shadow-sm transition outline-none focus:outline-none"
          >
            <MapPin className="w-4 h-4" />
            <span>Visit Store</span>
          </Link>

          {/* Cart Icon with Badge */}
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
                  className={`transition outline-none focus:outline-none ${isActive ? "text-[#F97316] pl-2 border-l-4 border-[#F97316]" : "hover:text-[#F97316]"}`}
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
              className="flex items-center justify-center gap-2 bg-[#22C55E] text-white py-2.5 rounded-full font-bold text-xs outline-none focus:outline-none"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#F97316] text-white py-2.5 rounded-full font-bold text-xs outline-none focus:outline-none"
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