"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  MessageCircle,
  Clock,
  PhoneCall,
  Navigation,
  Send,
  ShoppingBag,
  Wrench,
  Info,
  ChevronRight
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    reason: "",
    subject: "",
    message: ""
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
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          service: `${formData.reason} - ${formData.subject}`,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: "success", msg: "Thank you! Your message has been sent successfully." });
        setFormData({ fullName: "", email: "", phone: "", reason: "", subject: "", message: "" });
      } else {
        setStatus({ type: "error", msg: result.error || "Something went wrong." });
      }
    } catch (err) {
      setStatus({ type: "error", msg: "Failed to submit. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#C0C0C0] min-h-screen text-[#0F172A] font-sans">

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative w-full bg-[#D1D5DB] overflow-hidden border-b border-gray-300/60">
        <div className="hidden lg:block">
          <div className="absolute inset-0 w-full h-full flex justify-end">
            <div className="relative w-full lg:w-[75%] h-full">
              <img
                src="/rox-contact.png"
                alt="ROX Tech Solutions Interior Showcase"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-right lg:grayscale-0"
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
                Get in Touch with <br /> <span className="text-[#F97316]">ROX Tech Solutions</span>
              </h1>
              <p className="text-xs sm:text-sm text-gray-800 font-medium leading-relaxed max-w-lg">
                Have a question about our products, accessories, repairs or want to visit our stores in Cashel? We&apos;re here to help!
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://wa.me/353896091839"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#00D66C] hover:bg-[#00B85C] text-white px-7 py-3.5 rounded-full text-xs font-bold flex items-center gap-2 transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Us</span>
                </a>
                <a
                  href="https://share.google/XIeHDurgfiVKCpBxz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F97316] hover:bg-[#EA580C] text-white px-7 py-3.5 rounded-full text-xs font-bold flex items-center gap-2 transition-all shadow-md"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Visit Our Stores</span>
                </a>
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
              Get in Touch with <br /> <span className="text-[#F97316]">ROX Tech Solutions</span>
            </h1>
            <p className="text-xs text-gray-700 font-medium leading-relaxed">
              Have a question about our products, accessories, repairs or want to visit our stores? We&apos;re here to help!
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://wa.me/353896091839"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#00D66C] text-white py-3 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 shadow-md"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="https://share.google/XIeHDurgfiVKCpBxz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#F97316] text-white py-3 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 shadow-md"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Visit Stores</span>
              </a>
            </div>
          </div>
          <div className="w-full rounded-2xl overflow-hidden shadow-md border border-gray-300/80 aspect-[16/9] bg-white">
            <img
              src="/rox-contact.png"
              alt="ROX Tech Solutions Interior Showcase"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* ================= 2. DUAL GMB LOCATIONS CARDS BAR ================= */}
      <section className="w-full bg-white py-8 px-6 sm:px-10 lg:px-16 border-b border-gray-300/60">
        <div className="max-w-[1680px] mx-auto space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-1 h-3.5 bg-[#F97316] rounded-full inline-block" />
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#0F172A]">
              Our Official Store Locations in Cashel
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Location 1 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4 hover:border-[#F97316] transition">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-orange-100 text-[#F97316] uppercase">
                    Location 01
                  </span>
                  <span className="text-xs font-mono text-gray-500 font-bold">E25 EF82</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#F97316] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-bold text-[#0F172A] leading-relaxed">
                    Unit 3, Cashel Town Shopping Centre, Ashwell&apos;s-Lot, Cashel, Co. Tipperary
                  </p>
                </div>
              </div>
              <div className="pt-2 border-t border-gray-200 flex items-center justify-between">
                <span className="text-[11px] text-gray-500 font-medium">Open for Tech, Vapes & Repairs</span>
                <a
                  href="https://share.google/XIeHDurgfiVKCpBxz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F97316] hover:bg-[#EA580C] text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps</span>
                </a>
              </div>
            </div>

            {/* Location 2 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4 hover:border-[#F97316] transition">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-700 uppercase">
                    Location 02
                  </span>
                  <span className="text-xs font-mono text-gray-500 font-bold">E25 VE04</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-bold text-[#0F172A] leading-relaxed">
                    Bank Pl, Cashel, Co. Tipperary
                  </p>
                </div>
              </div>
              <div className="pt-2 border-t border-gray-200 flex items-center justify-between">
                <span className="text-[11px] text-gray-500 font-medium">In-store Support & Quick Assistance</span>
                <a
                  href="https://share.google/j6alfoimaC2IgJJoO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#22C55E] hover:bg-[#1da852] text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. MAIN CONTENT: FORM & SIDECARDS ================= */}
      <section className="w-full bg-[#C0C0C0] py-12 sm:py-16 px-6 sm:px-10 lg:px-16 border-b border-gray-300/60">
        <div className="max-w-[1680px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Side: Send Us a Message Form */}
          <div className="lg:col-span-8 bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-3.5 bg-[#F97316] rounded-full inline-block" />
                  <h2 className="text-xs font-bold uppercase tracking-widest text-[#0F172A]">
                    Send Us a Message
                  </h2>
                </div>
                <p className="text-xs text-gray-600 pl-3">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
              </div>
              <span className="text-[10px] font-bold text-red-500">* Required fields</span>
            </div>

            {status && (
              <div className={`p-3 rounded-xl text-xs font-medium ${status.type === "success" ? "bg-green-500/10 text-green-700 border border-green-500/20" : "bg-red-500/10 text-red-700 border border-red-500/20"}`}>
                {status.msg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-[#0F172A]">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-xs text-[#0F172A] focus:ring-2 focus:ring-[#F97316] outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-[#0F172A]">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-xs text-[#0F172A] focus:ring-2 focus:ring-[#F97316] outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-[#0F172A]">Phone Number (Optional)</label>
                <input
                  type="tel"
                  placeholder="+353 ..."
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-xs text-[#0F172A] focus:ring-2 focus:ring-[#F97316] outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-[#0F172A]">Reason for Contact *</label>
                <select
                  required
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-xs text-[#0F172A] focus:ring-2 focus:ring-[#F97316] outline-none"
                >
                  <option value="" disabled>Select reason</option>
                  <option value="Device Repair">Device Repair</option>
                  <option value="Product Inquiry">Product Inquiry</option>
                  <option value="General Question">General Question</option>
                </select>
              </div>

              <div className="sm:col-span-2 space-y-1">
                <label className="text-[11px] font-bold text-[#0F172A]">Subject *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. iPhone 15 Pro repair"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-xs text-[#0F172A] focus:ring-2 focus:ring-[#F97316] outline-none"
                />
              </div>

              <div className="sm:col-span-2 space-y-1">
                <label className="text-[11px] font-bold text-[#0F172A]">Message *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us more about your enquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-xs text-[#0F172A] focus:ring-2 focus:ring-[#F97316] outline-none resize-none"
                />
              </div>

              <div className="sm:col-span-2 pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto bg-[#F97316] hover:bg-[#EA580C] text-white py-3.5 px-8 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition shadow-md disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? "Sending..." : "Submit Message"}</span>
                </button>
                <p className="text-[11px] text-gray-500 text-center sm:text-right">
                  🔒 Your information is safe with us. We&apos;ll only use it to respond to your enquiry.
                </p>
              </div>
            </form>
          </div>

          {/* Right Side: Sidecards */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-6 shadow-sm space-y-4">
              <div className="space-y-1">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#0F172A]">
                  Quick WhatsApp Assistance
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Need a faster reply? Chat with us on WhatsApp for product questions, repair enquiries or store visits.
                </p>
              </div>
              <a
                href="https://wa.me/353896091839"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#00D66C] hover:bg-[#00B85C] text-white py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition shadow-md block text-center"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Us →</span>
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-6 shadow-sm space-y-4">
              <div className="space-y-1">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#0F172A]">
                  Visit Our Stores
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  See our full range in person. Get expert advice and friendly support at either location.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-gray-300 aspect-[16/10] bg-gray-50">
                <img
                  src="/shop-4.jpeg"
                  alt="Cashel Store"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="https://share.google/XIeHDurgfiVKCpBxz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F97316] hover:bg-[#EA580C] text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition shadow-sm text-center"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Shopping Centre</span>
                </a>
                <a
                  href="https://share.google/j6alfoimaC2IgJJoO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#22C55E] hover:bg-[#1da852] text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition shadow-sm text-center"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Bank Place</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 4. HELPFUL LINKS SECTION ================= */}
      <section className="w-full bg-white py-10 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1680px] mx-auto space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-1 h-3.5 bg-[#F97316] rounded-full inline-block" />
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#0F172A]">
                Helpful Links
              </h2>
              <p className="text-[11px] text-gray-500">Quick access to our most popular pages.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/shop"
              className="bg-gray-50 border border-gray-200 rounded-2xl p-5 flex items-center justify-between shadow-sm hover:border-[#F97316] transition group"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20">
                  <ShoppingBag className="w-5 h-5 text-[#F97316]" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs font-bold text-[#0F172A]">Shop</h3>
                  <p className="text-[11px] text-gray-600">Browse our products</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition" />
            </Link>

            <Link
              href="/repairs"
              className="bg-gray-50 border border-gray-200 rounded-2xl p-5 flex items-center justify-between shadow-sm hover:border-[#F97316] transition group"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20">
                  <Wrench className="w-5 h-5 text-[#F97316]" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs font-bold text-[#0F172A]">Repairs</h3>
                  <p className="text-[11px] text-gray-600">Get a repair quote</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition" />
            </Link>

            <Link
              href="/about"
              className="bg-gray-50 border border-gray-200 rounded-2xl p-5 flex items-center justify-between shadow-sm hover:border-[#F97316] transition group"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20">
                  <Info className="w-5 h-5 text-[#F97316]" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs font-bold text-[#0F172A]">About</h3>
                  <p className="text-[11px] text-gray-600">Learn more about us</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}