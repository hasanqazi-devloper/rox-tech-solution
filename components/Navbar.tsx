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
  Sparkles,
  ChevronDown,
  Phone,
  Clock,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [visitDropdownOpen, setVisitDropdownOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Vapes", href: "/vapes" },
    { name: "Repairs", href: "/repairs" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const storeLocations = [
    {
      name: "Unit 3, Cashel Shopping Centre",
      sub: "E25 EF82 • Tech, Repairs & Vapes",
      hours: "Mon–Thu 9–7 | Fri–Sat 9–10 | Sun 10–8",
      href: "/cashel-shopping-centre",
      mapUrl: "https://share.google/j6alfoimaC2IgJJoO",
    },
    {
      name: "Bank Place, Cashel",
      sub: "E25 VE04 • Vapes, Pouches & Mobile",
      hours: "Mon–Sat 9–7 | Sun Closed",
      href: "/bank-place-cashel",
      mapUrl: "https://share.google/XIeHDurgfiVKCpBxz",
    },
  ];

  const tickerItems = [
    {
      text: "iPhone 18 Pro , Pro Max & Duo - All Colors Available Now!",
      icon: "https://img.icons8.com/3d-fluent/100/iphone18-pro.png",
    },
    {
      text: "Call / WhatsApp Us: +353 89 609 1839",
      icon: "https://img.icons8.com/3d-fluent/100/iphone18-pro.png",
    },
    {
      text: "2 Cashel Stores: Shopping Centre (Unit 3) & Bank Place",
      icon: "https://img.icons8.com/3d-fluent/100/iphone18-pro.png",
    },
  ];

  const isLocationActive =
    pathname === "/cashel-shopping-centre" || pathname === "/bank-place-cashel";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xs transition-all duration-300">
      {/* ================= PROFESSIONAL ANNOUNCEMENT TICKER BAR ================= */}
      <div className="bg-[#0B0F19] text-slate-300 text-xs py-2 overflow-hidden relative border-b border-slate-800/80 flex items-center shadow-xs">
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0B0F19] to-transparent z-20 pointer-events-none hidden md:block" />

        <div className="hidden md:flex items-center gap-1.5 px-3.5 bg-gradient-to-r from-orange-600 to-[#F97316] text-white font-bold text-[10px] tracking-widest uppercase z-10 shrink-0 h-full py-2 shadow-sm border-r border-orange-500/30">
          <Sparkles className="w-3 h-3 animate-pulse text-orange-200" />
          <span>Latest Stock</span>
        </div>

        <div className="flex w-max animate-marquee items-center space-x-12 whitespace-nowrap pl-6">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 font-normal tracking-wide text-slate-300 hover:text-white transition-colors"
            >
              <img
                src={item.icon}
                alt="Stock Icon"
                className="w-4 h-4 object-contain shrink-0 opacity-90"
              />
              <span className="text-[11px] sm:text-xs font-medium text-slate-200">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0B0F19] to-transparent z-20 pointer-events-none" />
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <div className="max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* 1. Mobile Menu Toggle & Brand Logo */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-gray-800 hover:text-[#F97316] rounded-lg hover:bg-gray-100 transition outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          <Link href="/" className="flex items-center shrink-0 outline-none">
            <Image
              src="/rox-logo.png"
              alt="ROX Tech Solutions Logo"
              width={160}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>

        {/* 1. Desktop Brand Logo */}
        <Link
          href="/"
          className="hidden lg:flex items-center gap-2.5 group shrink-0 outline-none"
        >
          <Image
            src="/rox-logo.png"
            alt="ROX Tech Solutions Logo"
            width={180}
            height={56}
            className="h-12 xl:h-14 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* 2. Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7 text-sm font-semibold text-[#0F172A]">
          {navLinks.slice(0, 4).map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-2 transition hover:text-[#F97316] outline-none ${
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

          {/* LOCATIONS DROPDOWN (FOR MULTI-LOCATION LOCAL SEO) */}
          <div
            className="relative"
            onMouseEnter={() => setLocationsOpen(true)}
            onMouseLeave={() => setLocationsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setLocationsOpen(!locationsOpen)}
              className={`relative py-2 flex items-center gap-1.5 transition hover:text-[#F97316] outline-none ${
                isLocationActive ? "text-[#F97316] font-bold" : "text-[#0F172A]"
              }`}
            >
              <MapPin className="w-4 h-4 text-[#F97316]" />
              <span>Locations</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  locationsOpen ? "rotate-180" : ""
                }`}
              />
              {isLocationActive && (
                <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#F97316] rounded-full animate-fadeIn" />
              )}
            </button>

            {locationsOpen && (
              <div className="absolute left-0 top-full pt-2 w-80 z-50 animate-fadeIn">
                <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-2.5 space-y-1.5">
                  <p className="px-3 pt-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Our Cashel Stores
                  </p>
                  {storeLocations.map((loc) => (
                    <Link
                      key={loc.href}
                      href={loc.href}
                      onClick={() => setLocationsOpen(false)}
                      className={`block p-3 rounded-xl transition ${
                        pathname === loc.href
                          ? "bg-orange-50 border border-orange-200"
                          : "hover:bg-gray-50 border border-transparent"
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-[#F97316]/10 text-[#F97316] flex items-center justify-center shrink-0 mt-0.5">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#0F172A]">
                            {loc.name}
                          </p>
                          <p className="text-[11px] text-gray-600 mt-0.5">
                            {loc.sub}
                          </p>
                          <p className="text-[10px] text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {loc.hours}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.slice(4).map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-2 transition hover:text-[#F97316] outline-none ${
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

        {/* 3. Right Action Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* WhatsApp Direct CTA */}
          <a
            href="https://wa.me/353896091839"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 bg-[#22C55E] hover:bg-[#16A34A] text-white px-4 py-2.5 rounded-full font-bold text-xs shadow-sm transition outline-none"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>

          {/* Visit Store Interactive Dropdown CTA */}
          <div
            className="relative hidden sm:block"
            onMouseEnter={() => setVisitDropdownOpen(true)}
            onMouseLeave={() => setVisitDropdownOpen(false)}
          >
            <Link
              href="/cashel-shopping-centre"
              className="flex items-center gap-1.5 bg-[#F97316] hover:bg-[#EA580C] text-white px-4 py-2.5 rounded-full font-bold text-xs shadow-sm transition outline-none"
            >
              <MapPin className="w-4 h-4" />
              <span>Visit Store</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </Link>

            {visitDropdownOpen && (
              <div className="absolute right-0 top-full pt-2 w-72 z-50 animate-fadeIn">
                <div className="bg-[#0F172A] text-white border border-slate-700 rounded-2xl shadow-2xl p-3 space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2">
                    Choose Branch for Directions
                  </p>
                  {storeLocations.map((loc) => (
                    <div
                      key={loc.href}
                      className="p-2.5 rounded-xl bg-slate-800/70 hover:bg-slate-800 border border-slate-700/70 space-y-1.5"
                    >
                      <Link
                        href={loc.href}
                        className="block text-xs font-bold text-white hover:text-[#F97316]"
                      >
                        {loc.name}
                      </Link>
                      <div className="flex items-center justify-between text-[10px]">
                        <Link
                          href={loc.href}
                          className="text-orange-400 font-semibold hover:underline"
                        >
                          Store Page →
                        </Link>
                        <a
                          href={loc.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-400 font-semibold hover:underline"
                        >
                          Google Maps ↗
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bag / Inquiry Counter */}
          <Link
            href="/shop"
            aria-label="Browse Shop"
            className="relative p-2.5 text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer transition"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-[#F97316] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-black border-2 border-white pointer-events-none">
              2
            </span>
          </Link>
        </div>
      </div>

      {/* ================= MOBILE MENU DROPDOWN ================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-300 px-4 pt-3 pb-6 space-y-4 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-3 font-bold text-sm text-[#0F172A]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition ${
                    isActive
                      ? "text-[#F97316] pl-2 border-l-4 border-[#F97316]"
                      : "hover:text-[#F97316]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Mobile Store Locations Section */}
            <div className="pt-3 border-t border-gray-200 space-y-2.5">
              <p className="text-[11px] uppercase tracking-wider text-gray-400 font-bold">
                Our Cashel Locations
              </p>
              {storeLocations.map((loc) => (
                <Link
                  key={loc.href}
                  href={loc.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-start gap-2.5 p-2.5 rounded-xl bg-gray-50 border border-gray-200 hover:border-[#F97316]"
                >
                  <MapPin className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-[#0F172A]">
                      {loc.name}
                    </p>
                    <p className="text-[10px] text-gray-500">{loc.sub}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-2 grid grid-cols-2 gap-2">
            <a
              href="https://wa.me/353896091839"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 bg-[#22C55E] text-white py-2.5 rounded-full font-bold text-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:+353896091839"
              className="flex items-center justify-center gap-1.5 bg-[#F97316] text-white py-2.5 rounded-full font-bold text-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Call Store</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}