"use client";

import { useState } from "react";
import Link from "next/link";
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
  Laptop,
  Tablet,
  Headphones,
  CheckCircle2,
  BatteryCharging,
  Navigation,
  Send,
  HelpCircle,
  FileText,
  Store,
  Check
} from "lucide-react";

export default function RepairsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    deviceType: "",
    deviceBrand: "",
    repairIssue: "",
    description: "",
    contactMethod: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: `Repair Request - ${formData.deviceType} (${formData.deviceBrand}) - Issue: ${formData.repairIssue}`,
          message: `Device Type: ${formData.deviceType}\nBrand: ${formData.deviceBrand}\nIssue: ${formData.repairIssue}\nPreferred Contact: ${formData.contactMethod}\n\nDescription:\n${formData.description}`,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: "success", msg: "Thank you! Your repair request has been submitted successfully." });
        setFormData({
          name: "",
          email: "",
          phone: "",
          deviceType: "",
          deviceBrand: "",
          repairIssue: "",
          description: "",
          contactMethod: ""
        });
      } else {
        setStatus({ type: "error", msg: result.error || "Something went wrong." });
      }
    } catch (err) {
      setStatus({ type: "error", msg: "Failed to submit request. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#C0C0C0] min-h-screen text-[#0F172A] font-sans">

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative w-full bg-[#D1D5DB] overflow-hidden border-b border-gray-300/60">

        {/* ================= 1. DESKTOP HERO VIEW (EXACT UNTOUCHED CODE) ================= */}
        <div className="hidden lg:block">
          {/* Background Image Wrapper (Right Aligned & Smoothly Blended to Left) */}
          <div className="absolute inset-0 w-full h-full flex justify-end">
            <div className="relative w-full lg:w-[75%] sm:w-[10%] h-full">
              <img
                src="/rox-repair.png"
                alt="Expert Device Repairs Workbench"
                className="w-full h-full object-cover object-right grayscale-[40%] lg:grayscale-0"
              />

              {/* Soft Horizontal Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#D1D5DB] via-[#D1D5DB]/80 lg:via-[#D1D5DB]/40 to-transparent" />
            </div>
          </div>

          {/* Content Overlay Layer (Text & CTA Buttons on Left) */}
          <div className="relative z-10 max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-20 lg:py-24">
            <div className="max-w-xl space-y-6">

              {/* Cashel, Ireland Location Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-xs font-bold text-[#0F172A] shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-[#22C55E] fill-[#22C55E]" />
                <span>Cashel, Ireland</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] leading-[1.15] tracking-tight">
                Expert Device Repairs <br />
                in <span className="text-[#F97316]">Cashel</span>
              </h1>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-800 font-medium leading-relaxed max-w-lg">
                Professional, reliable and affordable repair assistance for smartphones, tablets, laptops and other supported devices. Get your devices back in top shape with our expert technicians.
              </p>

              {/* CTA Action Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="#quote-form"
                  className="bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:opacity-95 text-white px-7 py-3.5 rounded-full text-xs font-bold flex items-center gap-2 transition-all shadow-md"
                >
                  <span>Request a Repair</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

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


        {/* ================= 2. MOBILE HERO VIEW (MATCHING EXACT REFERENCE UI) ================= */}
        <div className="block lg:hidden px-5 py-8 space-y-6">
          
          {/* Top Content: Badge, Heading, Subtext */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-xs font-bold text-[#0F172A] shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-[#22C55E] fill-[#22C55E]" />
              <span>Cashel, Ireland</span>
            </div>

            <h1 className="text-3xl font-black text-[#0F172A] leading-tight tracking-tight">
              Expert Device Repairs <br />
              in <span className="text-[#F97316]">Cashel</span>
            </h1>

            <p className="text-xs text-gray-700 font-medium leading-relaxed">
              Professional, reliable and affordable repair assistance for smartphones, tablets, laptops and other supported devices. Get your devices back in top shape with our expert technicians.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="#quote-form"
                className="flex-1 bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white py-3 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 shadow-md"
              >
                <span>Request a Repair</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

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

          {/* Bottom Workbench Image Box */}
          <div className="w-full rounded-2xl overflow-hidden shadow-md border border-gray-300/80 aspect-[16/9] bg-white">
            <img
              src="/rox-repair.png"
              alt="Expert Device Repairs Workbench"
              className="w-full h-full object-cover object-center"
            />
          </div>

        </div>

      </section>


      {/* ================= 2. CORE FEATURES BAR ================= */}
      <section className="w-full bg-white py-6 px-6 sm:px-10 lg:px-16 border-b border-gray-300/60">
        <div className="max-w-[1680px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center divide-y md:divide-y-0 md:divide-x divide-gray-200">

            <div className="flex items-center gap-3 px-2">
              <div className="w-9 h-9 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                <Users className="w-4 h-4 text-[#22C55E]" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-[#0F172A]">Friendly Local Service</h3>
                <p className="text-[10px] text-gray-500">Here to help in Cashel</p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-2 pt-2 md:pt-0">
              <div className="w-9 h-9 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20">
                <Cog className="w-4 h-4 text-[#F97316]" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-[#0F172A]">Expert Assistance</h3>
                <p className="text-[10px] text-gray-500">Skilled & experienced</p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-2 pt-2 md:pt-0">
              <div className="w-9 h-9 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-[#0F172A]">Quality Parts Where Available</h3>
                <p className="text-[10px] text-gray-500">Reliable and durable</p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-2 pt-2 md:pt-0">
              <div className="w-9 h-9 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20">
                <FileText className="w-4 h-4 text-[#F97316]" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-[#0F172A]">Clear Repair Quotes</h3>
                <p className="text-[10px] text-gray-500">No hidden costs</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= 3. OUR REPAIR SERVICES ================= */}
      <section className="w-full bg-[#C0C0C0] py-12 sm:py-16 px-6 sm:px-10 lg:px-16 border-b border-gray-300/60">
        <div className="max-w-[1680px] mx-auto space-y-6">

          {/* Section Header */}
          <div className="flex justify-between items-end">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-1 h-3.5 bg-[#F97316] rounded-full inline-block" />
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#0F172A]">
                  Our Repair Services
                </h2>
              </div>
              <p className="text-xs text-gray-700 pl-3">
                Professional repairs for all your essential devices.
              </p>
            </div>
            <Link href="/services" className="text-xs font-bold text-[#F97316] hover:underline">
              View All Services →
            </Link>
          </div>

          {/* Services Grid (6 Cards Layout matching the reference image) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">

            {/* Service 1: Smartphone Screen Repairs */}
            <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 shadow-sm hover:border-[#F97316] transition flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-full h-28 rounded-xl bg-gray-50 overflow-hidden flex items-center justify-center p-2">
                  <img
                    src="/screen-repair.png"
                    alt="Smartphone Screen Repairs"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-bold text-[#0F172A]">Smartphone Screen Repairs</h3>
                  <p className="text-[11px] text-gray-600 leading-relaxed">Cracked or damaged screen? Get it fixed quickly and professionally.</p>
                </div>
              </div>
              <a href="#quote-form" className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-2 rounded-xl text-[11px] font-bold text-center transition block shadow-sm">
                Request Quote →
              </a>
            </div>

            {/* Service 2: Battery Replacement */}
            <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 shadow-sm hover:border-[#F97316] transition flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-full h-28 rounded-xl bg-gray-50 overflow-hidden flex items-center justify-center p-2">
                  <img
                    src="/battery-change.png"
                    alt="Battery Replacement"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-bold text-[#0F172A]">Battery Replacement</h3>
                  <p className="text-[11px] text-gray-600 leading-relaxed">Restore your device&apos;s battery life and performance.</p>
                </div>
              </div>
              <a href="#quote-form" className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-2 rounded-xl text-[11px] font-bold text-center transition block shadow-sm">
                Request Quote →
              </a>
            </div>

            {/* Service 3: Charging Port Repairs */}
            <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 shadow-sm hover:border-[#F97316] transition flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-full h-28 rounded-xl bg-gray-50 overflow-hidden flex items-center justify-center p-2">
                  <img
                    src="/charging-repair.png"
                    alt="Charging Port Repairs"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-bold text-[#0F172A]">Charging Port Repairs</h3>
                  <p className="text-[11px] text-gray-600 leading-relaxed">Fix charging issues and keep your device powered.</p>
                </div>
              </div>
              <a href="#quote-form" className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-2 rounded-xl text-[11px] font-bold text-center transition block shadow-sm">
                Request Quote →
              </a>
            </div>

            {/* Service 4: Device Diagnostics */}
            <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 shadow-sm hover:border-[#F97316] transition flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-full h-28 rounded-xl bg-gray-50 overflow-hidden flex items-center justify-center p-2">
                  <img
                    src="/sleek-phone.png"
                    alt="Device Diagnostics"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-bold text-[#0F172A]">Device Diagnostics</h3>
                  <p className="text-[11px] text-gray-600 leading-relaxed">Identify the issue with our professional testing.</p>
                </div>
              </div>
              <a href="#quote-form" className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-2 rounded-xl text-[11px] font-bold text-center transition block shadow-sm">
                Request Quote →
              </a>
            </div>

            {/* Service 5: Laptop Repairs */}
            <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 shadow-sm hover:border-[#F97316] transition flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-full h-28 rounded-xl bg-gray-50 overflow-hidden flex items-center justify-center p-2">
                  <img
                    src="/laptop-repair.png"
                    alt="Laptop Repairs"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-bold text-[#0F172A]">Laptop Repairs</h3>
                  <p className="text-[11px] text-gray-600 leading-relaxed">From screens to hardware, we&apos;ve got you covered.</p>
                </div>
              </div>
              <a href="#quote-form" className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-2 rounded-xl text-[11px] font-bold text-center transition block shadow-sm">
                Request Quote →
              </a>
            </div>

            {/* Service 6: Tablet Repairs */}
            <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 shadow-sm hover:border-[#F97316] transition flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-full h-28 rounded-xl bg-gray-50 overflow-hidden flex items-center justify-center p-2">
                  <img
                    src="/tab-repair.png"
                    alt="Tablet Repairs"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-bold text-[#0F172A]">Tablet Repairs</h3>
                  <p className="text-[11px] text-gray-600 leading-relaxed">Screen, battery and more for all major brands.</p>
                </div>
              </div>
              <a href="#quote-form" className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-2 rounded-xl text-[11px] font-bold text-center transition block shadow-sm">
                Request Quote →
              </a>
            </div>

          </div>

        </div>
      </section>


      {/* ================= 4. HOW OUR REPAIR PROCESS WORKS ================= */}
      <section className="w-full bg-white py-12 sm:py-16 px-6 sm:px-10 lg:px-16 border-b border-gray-300/60">
        <div className="max-w-[1680px] mx-auto space-y-6">

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-1 h-3.5 bg-[#F97316] rounded-full inline-block" />
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#0F172A]">
                How Our Repair Process Works
              </h2>
            </div>
            <p className="text-xs text-gray-700 pl-3">
              Simple and transparent steps to get your device fixed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-gray-50/80 border border-gray-200 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F97316] text-white font-bold flex items-center justify-center shrink-0">
                1
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-[#0F172A]">Tell Us About Your Device</h3>
                <p className="text-xs text-gray-600 leading-relaxed">Share the issue and device details with us.</p>
              </div>
            </div>

            <div className="bg-gray-50/80 border border-gray-200 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F97316] text-white font-bold flex items-center justify-center shrink-0">
                2
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-[#0F172A]">Get a Repair Quote</h3>
                <p className="text-xs text-gray-600 leading-relaxed">We&apos;ll review and provide a clear quote for the repair.</p>
              </div>
            </div>

            <div className="bg-gray-50/80 border border-gray-200 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F97316] text-white font-bold flex items-center justify-center shrink-0">
                3
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-[#0F172A]">Visit the Store</h3>
                <p className="text-xs text-gray-600 leading-relaxed">Bring your device to our Cashel store for professional service.</p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ================= 5. WHY CHOOSE ROX FOR REPAIRS & QUICK CTA ================= */}
      <section className="w-full bg-[#C0C0C0] py-12 sm:py-16 px-6 sm:px-10 lg:px-16 border-b border-gray-300/60">
        <div className="max-w-[1680px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Why Choose ROX */}
          <div className="lg:col-span-6 bg-white/95 border border-gray-300 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-lg font-black text-[#0F172A]">Why Choose ROX for Repairs?</h2>
            <ul className="space-y-2 text-xs text-gray-700 font-medium">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#22C55E]" />
                <span>Local, trusted and friendly service</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#22C55E]" />
                <span>Transparent communication</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#22C55E]" />
                <span>Professional troubleshooting</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#22C55E]" />
                <span>Quality parts where available</span>
              </li>
            </ul>
          </div>

          {/* Quick CTA Banner */}
          <div className="lg:col-span-6 bg-white/95 border border-gray-300 rounded-2xl p-6 sm:p-8 space-y-4 flex flex-col justify-between">
            <div className="space-y-1">
              <h2 className="text-lg font-black text-[#0F172A]">Need a Repair? We&apos;re Here to Help!</h2>
              <p className="text-xs text-gray-600">Visit our store in Cashel or get in touch for a quick quote.</p>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F97316] hover:bg-[#EA580C] text-white px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 transition-all shadow-md"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
              <a
                href="https://wa.me/353896091839"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00D66C] hover:bg-[#00B85C] text-white px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* ================= 6 & 7. GET A REPAIR QUOTE FORM & VISIT STORE SECTION ================= */}
      <section id="quote-form" className="w-full bg-white py-12 sm:py-16 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1680px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Detailed Form (Left Side) */}
          <div className="lg:col-span-8 bg-gray-50/80 border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-1 h-3.5 bg-[#F97316] rounded-full inline-block" />
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#0F172A]">
                  Get a Repair Quote
                </h2>
              </div>
              <p className="text-xs text-gray-700 pl-3">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
            </div>

            {status && (
              <div className={`p-3 rounded-xl text-xs font-medium ${status.type === "success" ? "bg-green-500/10 text-green-700 border border-green-500/20" : "bg-red-500/10 text-red-700 border border-red-500/20"}`}>
                {status.msg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div className="space-y-1">
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-xs text-[#0F172A] focus:ring-2 focus:ring-[#F97316] outline-none"
                />
              </div>

              <div className="space-y-1">
                <select
                  required
                  value={formData.deviceType}
                  onChange={(e) => setFormData({ ...formData, deviceType: e.target.value })}
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-xs text-[#0F172A] focus:ring-2 focus:ring-[#F97316] outline-none"
                >
                  <option value="" disabled>Device Type *</option>
                  <option value="smartphone">Smartphone</option>
                  <option value="tablet">Tablet</option>
                  <option value="laptop">Laptop</option>
                </select>
              </div>

              <div className="space-y-1">
                <input
                  type="email"
                  required
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-xs text-[#0F172A] focus:ring-2 focus:ring-[#F97316] outline-none"
                />
              </div>

              <div className="space-y-1">
                <input
                  type="text"
                  required
                  placeholder="Device Brand *"
                  value={formData.deviceBrand}
                  onChange={(e) => setFormData({ ...formData, deviceBrand: e.target.value })}
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-xs text-[#0F172A] focus:ring-2 focus:ring-[#F97316] outline-none"
                />
              </div>

              <div className="space-y-1">
                <input
                  type="tel"
                  required
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-xs text-[#0F172A] focus:ring-2 focus:ring-[#F97316] outline-none"
                />
              </div>

              <div className="space-y-1">
                <input
                  type="text"
                  required
                  placeholder="Repair Issue *"
                  value={formData.repairIssue}
                  onChange={(e) => setFormData({ ...formData, repairIssue: e.target.value })}
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-xs text-[#0F172A] focus:ring-2 focus:ring-[#F97316] outline-none"
                />
              </div>

              <div className="sm:col-span-2 space-y-1">
                <textarea
                  rows={3}
                  placeholder="Description of the Problem"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-xs text-[#0F172A] focus:ring-2 focus:ring-[#F97316] outline-none resize-none"
                />
              </div>

              <div className="sm:col-span-2 space-y-1">
                <select
                  required
                  value={formData.contactMethod}
                  onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-xs text-[#0F172A] focus:ring-2 focus:ring-[#F97316] outline-none"
                >
                  <option value="" disabled>Preferred Contact Method *</option>
                  <option value="phone">Phone</option>
                  <option value="email">Email</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
              </div>

              <div className="sm:col-span-2 pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition shadow-md disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? "Submitting..." : "Submit Repair Request"}</span>
                </button>
              </div>

            </form>
          </div>

          {/* Visit Store Card (Right Side) */}
          <div className="lg:col-span-4 bg-gray-50/80 border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="space-y-1">
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#0F172A]">
                Visit Our Cashel Store
              </h2>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-300 aspect-[16/10] bg-white">
              <img
                src="/shop-4.jpeg"
                alt="Cashel Store"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-gray-700 leading-relaxed">
              See our full range in person. Get expert advice and friendly support.
            </p>
            <div className="space-y-2 pt-2">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition shadow-md block text-center"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
              <a
                href="https://wa.me/353896091839"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#00D66C] hover:bg-[#00B85C] text-white py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition shadow-md block text-center"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}