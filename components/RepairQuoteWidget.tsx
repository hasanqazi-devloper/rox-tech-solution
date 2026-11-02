"use client";

import { useState } from "react";
import { Wrench, BatteryCharging, ShieldCheck, ArrowRight } from "lucide-react";

export default function RepairQuoteWidget() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    issue: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Request sent successfully!");
  };

  return (
    <section className="w-full bg-[#C0C0C0] py-6 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1500px] 2xl:max-w-[2400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* ================= LEFT CARD: EXPERT HELP FOR YOUR DEVICE ================= */}
        <div className="lg:col-span-6 relative overflow-hidden rounded-3xl bg-[#0F291E] text-white shadow-sm flex flex-col md:flex-row items-stretch">
          
          {/* Generated Repair Image Container */}
          <div className="w-full md:w-[42%] h-48 md:h-auto shrink-0 relative overflow-hidden">
            <img
              src="/mobile-repair.png"
              alt="Device Repair Tools & Smartphone"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle Gradient Overlay to blend image with card background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0F291E] hidden md:block" />
          </div>

          {/* Card Content */}
          <div className="w-full md:w-[58%] p-5 sm:p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-1.5">
              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white leading-tight">
                Expert Help for Your Device
              </h2>
              <p className="text-xs text-gray-200 font-normal leading-relaxed">
                Professional repair services for your smartphones, tablets and more.
              </p>
            </div>

            {/* Services Features Row */}
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/20">
              <div className="flex items-start gap-1.5">
                <Wrench className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[11px] font-bold text-white leading-tight">Screen Repairs</h4>
                  <p className="text-[9px] text-gray-300 font-normal mt-0.5 leading-tight">Cracked or unresponsive</p>
                </div>
              </div>

              <div className="flex items-start gap-1.5 border-l border-white/15 pl-2">
                <BatteryCharging className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[11px] font-bold text-white leading-tight">Battery & Charging</h4>
                  <p className="text-[9px] text-gray-300 font-normal mt-0.5 leading-tight">Power & performance</p>
                </div>
              </div>

              <div className="flex items-start gap-1.5 border-l border-white/15 pl-2">
                <ShieldCheck className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[11px] font-bold text-white leading-tight">Device Diagnostics</h4>
                  <p className="text-[9px] text-gray-300 font-normal mt-0.5 leading-tight">Find the real issue</p>
                </div>
              </div>
            </div>
          </div>

        </div>


        {/* ================= RIGHT CARD: REQUEST A QUOTE FORM ================= */}
        <div className="lg:col-span-6 relative overflow-hidden rounded-3xl bg-[#0F291E] text-white p-5 sm:p-6 shadow-sm flex flex-col justify-between">
          
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1 mb-3">
              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                Request a Quote
              </h2>
              <p className="text-xs text-gray-200 font-normal">
                Tell us what you need and we&apos;ll get back to you as soon as possible.
              </p>
            </div>

            {/* Generated Mascot Graphic */}
            <div className="hidden sm:flex flex-col items-center justify-center shrink-0 pr-1">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 bg-black flex items-center justify-center shadow-inner">
                <img
                  src="/freidly-mobile.png"
                  alt="Quick Response Phone Mascot"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              <span className="text-[10px] font-bold text-[#F97316] tracking-wide mt-1">
                Quick Response
              </span>
            </div>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="space-y-2.5">
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/95 border border-gray-300 rounded-lg px-3.5 py-2 text-xs text-[#0F172A] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F97316]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-white/95 border border-gray-300 rounded-lg px-3.5 py-2 text-xs text-[#0F172A] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F97316]"
              />

              <select
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-white/95 border border-gray-300 rounded-lg px-3.5 py-2 text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#F97316]"
              >
                <option value="" disabled className="text-gray-400">
                  Select Service
                </option>
                <option value="screen">Screen Repair</option>
                <option value="battery">Battery Replacement</option>
                <option value="diagnostic">Device Diagnostics</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 items-center">
              <div className="sm:col-span-8">
                <textarea
                  rows={1}
                  placeholder="Describe Your Issue (optional)"
                  value={formData.issue}
                  onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                  className="w-full bg-white/95 border border-gray-300 rounded-lg px-3.5 py-2 text-xs text-[#0F172A] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F97316] resize-none"
                />
              </div>

              <div className="sm:col-span-4">
                <button
                  type="submit"
                  className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-2 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition shadow-md transform hover:-translate-y-0.5"
                >
                  <span>Send Request</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}