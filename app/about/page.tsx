"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  MessageCircle,
  MessageSquare,
  Lightbulb,
  Wrench,
  Cog,
  ShieldCheck,
  Users,
  UserCheck,
  ArrowRight,
  Smartphone,
  Headphones,
  CheckCircle2,
  Navigation,
  Send
} from "lucide-react";

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    reason: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.emailOrPhone,
          phone: formData.emailOrPhone,
          service: `${formData.reason} - ${formData.subject}`,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: "success", msg: "Thank you! Your message has been sent successfully." });
        setFormData({ name: "", emailOrPhone: "", reason: "", subject: "", message: "" });
      } else {
        setStatus({ type: "error", msg: result.error || "Something went wrong." });
      }
    } catch (err) {
      setStatus({ type: "error", msg: "Failed to send message. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#C0C0C0] min-h-screen text-[#0F172A] font-sans">

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative w-full bg-[#D1D5DB] overflow-hidden border-b border-gray-300/60">

        {/* ================= DESKTOP HERO VIEW ================= */}
        <div className="hidden lg:block">
          <div className="absolute inset-0 w-full h-full flex justify-end">
            <div className="relative w-full lg:w-[75%] h-full">
              <Image
                src="/about-hero.png"
                alt="ROX Tech Store Showcase in Cashel"
                fill
                priority
                sizes="75vw"
                className="object-cover object-right"
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

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-[1.15] tracking-tight">
                Your Local Technology <br /> Store in <span className="text-[#F97316]">Cashel</span>
              </h1>

              <p className="text-xs sm:text-sm text-gray-700 font-normal leading-relaxed max-w-lg">
                ROX Tech Solutions is your go-to local destination across two convenient locations for electronics, everyday accessories, vapes and professional device repair assistance.
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

        {/* ================= MOBILE HERO VIEW ================= */}
        <div className="block lg:hidden px-5 py-8 space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-xs font-bold text-[#0F172A] shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-[#22C55E] fill-[#22C55E]" />
              <span>Cashel, Ireland</span>
            </div>

            <h1 className="text-3xl font-bold text-[#0F172A] leading-tight tracking-tight">
              Your Local Technology <br /> Store in <span className="text-[#F97316]">Cashel</span>
            </h1>

            <p className="text-xs text-gray-700 font-normal leading-relaxed">
              ROX Tech Solutions is your go-to local destination for electronics, everyday accessories, vapes and professional device repair assistance.
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
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          <div className="w-full rounded-2xl overflow-hidden shadow-md border border-gray-300/80 aspect-[16/9] bg-white relative">
            <Image
              src="/shop-2.jpeg"
              alt="ROX Tech Store Showcase in Cashel"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>

      </section>

      {/* ================= 2. OUR STORY & WHAT WE OFFER ================= */}
      <section className="w-full bg-white py-12 sm:py-16 px-6 sm:px-10 lg:px-16 border-b border-gray-300/60 space-y-12">
        <div className="max-w-[1680px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-1 h-3.5 bg-[#F97316] rounded-full inline-block" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#0F172A]">
                Our Story
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] leading-tight tracking-tight">
              Technology, Accessories, Vapes & <br />
              <span className="text-[#F97316]">Friendly Local Service</span>
            </h2>

            <p className="text-xs sm:text-sm text-gray-700 font-normal leading-relaxed max-w-2xl">
              At ROX Tech Solutions, operating across two convenient locations in Cashel, we are passionate about technology and dedicated to helping our customers. From the latest devices and premium vapes to everyday accessories and expert repair assistance, we make technology accessible for everyone.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-black/10 aspect-[16/10] w-full bg-white">
              <Image
                src="/shop-3.jpeg"
                alt="ROX Tech Solutions Storefront Cashel"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>

        {/* What We Offer Container */}
        <div className="max-w-[1680px] mx-auto pt-4">
          <div className="bg-gray-50/80 border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">

            <div className="flex items-center gap-2">
              <span className="w-1 h-3.5 bg-[#F97316] rounded-full inline-block" />
              <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                What We Offer
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white border border-gray-200 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:border-[#F97316] transition">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                  <Smartphone className="w-6 h-6 text-[#0F172A]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs sm:text-sm font-bold text-[#0F172A]">Electronics & Devices</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">Latest smartphones, laptops, tablets and more.</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:border-[#F97316] transition">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                  <Headphones className="w-6 h-6 text-[#0F172A]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs sm:text-sm font-bold text-[#0F172A]">Everyday Accessories</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">Cases, chargers, cables, audio gear & vapes.</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:border-[#F97316] transition">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                  <Wrench className="w-6 h-6 text-[#0F172A]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs sm:text-sm font-bold text-[#0F172A]">Device Repair Assistance</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">Professional repairs for phones, tablets & laptops.</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:border-[#F97316] transition">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                  <UserCheck className="w-6 h-6 text-[#0F172A]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs sm:text-sm font-bold text-[#0F172A]">Local Support</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">Friendly, helpful support across 2 locations.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 3. INSIDE OUR STORE & OUR VALUES ================= */}
      <section className="w-full bg-[#C0C0C0] py-12 sm:py-16 px-6 sm:px-10 lg:px-16 border-b border-gray-300/60 space-y-12">

        {/* Inside Our Store */}
        <div className="max-w-[1680px] mx-auto space-y-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-1 h-3.5 bg-[#F97316] rounded-full inline-block" />
              <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-widest text-[#0F172A]">
                Inside Our Stores
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 font-normal pl-3">
              Take a look at our real store environments in Cashel.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            <div className="rounded-2xl overflow-hidden border border-gray-300 bg-white shadow-sm aspect-[16/10] group relative">
              <Image
                src="/shop-8.jpeg"
                alt="ROX Tech Store Interior 1"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-300 bg-white shadow-sm aspect-[16/10] group relative">
              <Image
                src="/shop-7.jpeg"
                alt="ROX Tech Store Interior 2"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-300 bg-white shadow-sm aspect-[16/10] group relative">
              <Image
                src="/shop-6.jpeg"
                alt="ROX Tech Store Interior 3"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-300 bg-white shadow-sm aspect-[16/10] group relative">
              <Image
                src="/shop-5.jpeg"
                alt="ROX Tech Store Interior 4"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>

        {/* Our Values Cards */}
        <div className="max-w-[1680px] mx-auto space-y-5 pt-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-1 h-3.5 bg-[#F97316] rounded-full inline-block" />
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#0F172A]">
                Our Values
              </h2>
            </div>
            <p className="text-xs text-gray-700 pl-3 font-normal">
              What drives us every day to deliver exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 w-full">
            <div className="bg-white/95 border border-gray-300/80 rounded-xl p-3.5 flex items-center gap-3 shadow-sm hover:border-[#F97316] transition">
              <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                <Lightbulb className="w-4 h-4 text-[#F97316]" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-xs font-bold text-[#0F172A]">Helpful Advice</h3>
                <p className="text-[10px] text-gray-600">Right product & repair guidance.</p>
              </div>
            </div>

            <div className="bg-white/95 border border-gray-300/80 rounded-xl p-3.5 flex items-center gap-3 shadow-sm hover:border-[#F97316] transition">
              <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-[#F97316]" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-xs font-bold text-[#0F172A]">Quality-Focused</h3>
                <p className="text-[10px] text-gray-600">Reliable & trusted brands.</p>
              </div>
            </div>

            <div className="bg-white/95 border border-gray-300/80 rounded-xl p-3.5 flex items-center gap-3 shadow-sm hover:border-[#F97316] transition">
              <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                <MessageSquare className="w-4 h-4 text-[#F97316]" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-xs font-bold text-[#0F172A]">Clear Communication</h3>
                <p className="text-[10px] text-gray-600">Honest advice & transparent pricing.</p>
              </div>
            </div>

            <div className="bg-white/95 border border-gray-300/80 rounded-xl p-3.5 flex items-center gap-3 shadow-sm hover:border-[#22C55E] transition">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-[#22C55E]" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-xs font-bold text-[#0F172A]">Local Support</h3>
                <p className="text-[10px] text-gray-600">Stores across Cashel.</p>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ================= 4. WHY CHOOSE ROX ================= */}
      <section className="w-full bg-white py-12 px-6 sm:px-10 lg:px-16 border-b border-gray-300/60">
        <div className="max-w-[1680px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

          <div className="lg:col-span-4 space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
              Why Choose ROX
            </h2>
            <p className="text-xs text-gray-600 font-normal">
              More than just a store — your trusted local tech partner.
            </p>
          </div>

          <div className="lg:col-span-8 bg-gray-50/80 border border-gray-200 rounded-2xl p-4 sm:p-5 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 items-center divide-y sm:divide-y-0 sm:divide-x divide-gray-200">

              <div className="flex items-center gap-3.5 sm:px-4 first:pl-0">
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 border border-gray-200 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#0F172A]" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs font-bold text-[#0F172A] leading-tight">Wide Range</h3>
                  <p className="text-[10px] text-gray-500 leading-tight">Tech, Vapes & Accessories</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 sm:px-6 pt-3 sm:pt-0">
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 border border-gray-200 shadow-sm">
                  <Cog className="w-5 h-5 text-[#0F172A]" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs font-bold text-[#0F172A] leading-tight">Expert Assistance</h3>
                  <p className="text-[10px] text-gray-500 leading-tight">Skilled & Professional</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 sm:px-6 pt-3 sm:pt-0">
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 border border-gray-200 shadow-sm">
                  <Users className="w-5 h-5 text-[#0F172A]" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs font-bold text-[#0F172A] leading-tight">Dual Locations</h3>
                  <p className="text-[10px] text-gray-500 leading-tight">Conveniently in Cashel</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= 5. VISIT OUR STORES (WITH DUAL GMB LOCATIONS) ================= */}
      <section className="w-full bg-[#C0C0C0] py-12 sm:py-16 px-6 sm:px-10 lg:px-16 border-b border-gray-300/60">
        <div className="max-w-[1680px] mx-auto space-y-8">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="w-1 h-3.5 bg-[#F97316] rounded-full inline-block" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#0F172A]">
                  Visit Us
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] leading-tight tracking-tight">
                Our Two Store Locations in Cashel
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 font-normal max-w-xl">
                Visit either of our physical stores in Cashel to explore our full range in person, get expert advice, or drop off devices for repair.
              </p>
            </div>

            <a
              href="https://wa.me/353896091839"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00D66C] hover:bg-[#00B85C] text-white px-6 py-3 rounded-full text-xs font-bold flex items-center gap-2 transition shadow-md w-fit"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat via WhatsApp</span>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            
            {/* Location 1 Card */}
            <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6 hover:border-[#F97316] transition">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-3 py-1 rounded-md bg-orange-100 text-[#F97316] uppercase">
                    Location 01
                  </span>
                  <span className="text-xs font-mono text-gray-500 font-bold bg-gray-100 px-2.5 py-1 rounded-md">
                    E25 EF82
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#F97316] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#0F172A]">Shopping Centre Store</h3>
                    <p className="text-xs text-gray-600 leading-relaxed mt-1">
                      Unit 3, Cashel Town Shopping Centre, Ashwell&apos;s-Lot, Cashel, Co. Tipperary
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] text-gray-500 font-medium">Full Tech, Vape & Repair Hub</span>
                <a
                  href="https://share.google/XIeHDurgfiVKCpBxz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F97316] hover:bg-[#EA580C] text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps</span>
                </a>
              </div>
            </div>

            {/* Location 2 Card */}
            <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6 hover:border-[#22C55E] transition">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-3 py-1 rounded-md bg-emerald-100 text-emerald-700 uppercase">
                    Location 02
                  </span>
                  <span className="text-xs font-mono text-gray-500 font-bold bg-gray-100 px-2.5 py-1 rounded-md">
                    E25 VE04
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#0F172A]">Bank Place Store</h3>
                    <p className="text-xs text-gray-600 leading-relaxed mt-1">
                      Bank Pl, Cashel, Co. Tipperary
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] text-gray-500 font-medium">In-Store Assistance & Accessories</span>
                <a
                  href="https://share.google/j6alfoimaC2IgJJoO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#22C55E] hover:bg-[#1da852] text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 6. GET IN TOUCH ================= */}
      <section className="w-full bg-white py-12 sm:py-16 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1680px] mx-auto">

          <div className="bg-gray-80/80 border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">

            <div className="space-y-1 bg-grey/80">
              <div className="flex items-center gap-2">
                <span className="w-1 h-3.5 bg-[#F97316] rounded-full inline-block" />
                <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-widest text-[#0F172A]">
                  Get in Touch
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 font-normal pl-3">
                Have a question about a product, vape or repair? We&apos;re here to help.
              </p>
            </div>

            {status && (
              <div className={`p-3 rounded-xl text-xs font-medium ${status.type === "success" ? "bg-green-500/10 text-green-700 border border-green-500/20" : "bg-red-500/10 text-red-700 border border-red-500/20"}`}>
                {status.msg}
              </div>
            )}

            <form onSubmit={handleSendMessage} className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

              <div className="space-y-4">
                <div className="space-y-1">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-xs text-[#0F172A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  />
                </div>

                <div className="space-y-1">
                  <select
                    required
                    aria-label="Select Reason or Department"
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  >
                    <option value="" disabled>Select Reason / Department</option>
                    <option value="Device Repair">Device Repair</option>
                    <option value="Product Inquiry">Product Inquiry</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <input
                    type="text"
                    required
                    placeholder="Subject (e.g. iPhone Screen Quote)"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-xs text-[#0F172A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <input
                    type="text"
                    required
                    placeholder="Email or Phone Number"
                    value={formData.emailOrPhone}
                    onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-xs text-[#0F172A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#22C55E]"
                  />
                </div>

                <div className="space-y-1">
                  <textarea
                    rows={4}
                    required
                    placeholder="Your Message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-xs text-[#0F172A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#22C55E] resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-[#F97316] hover:bg-[#EA580C] text-white py-3.5 px-6 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition shadow-md disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? "Sending..." : "Send Message"}</span>
                  </button>

                  <a
                    href="https://wa.me/353896091839"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#00D66C] hover:bg-[#00B85C] text-white py-3.5 px-6 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition shadow-md text-center"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>

            </form>

          </div>

        </div>
      </section>

    </div>
  );
}