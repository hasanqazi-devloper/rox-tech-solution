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

        {/* ================= 1. DESKTOP HERO VIEW ================= */}
        <div className="hidden lg:block">
          <div className="absolute inset-0 w-full h-full flex justify-end">
            <div className="relative w-full lg:w-[75%] h-full">
              <img
                src="/about-hero.png"
                alt="ROX Tech Store Showcase in Cashel"
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
                Your Local Technology <br /> Store in <span className="text-[#F97316]">Cashel</span>
              </h1>

              <p className="text-xs sm:text-sm text-gray-800 font-medium leading-relaxed max-w-lg">
                ROX Tech Solutions is your go-to local destination for electronics, everyday accessories and device repair assistance. We bring you the latest technology with friendly, local service.
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


        {/* ================= 2. MOBILE HERO VIEW ================= */}
        <div className="block lg:hidden px-5 py-8 space-y-6">

          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-xs font-bold text-[#0F172A] shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-[#22C55E] fill-[#22C55E]" />
              <span>Cashel, Ireland</span>
            </div>

            <h1 className="text-3xl font-black text-[#0F172A] leading-tight tracking-tight">
              Your Local Technology <br /> Store in <span className="text-[#F97316]">Cashel</span>
            </h1>

            <p className="text-xs text-gray-700 font-medium leading-relaxed">
              ROX Tech Solutions is your go-to local destination for electronics, everyday accessories and device repair assistance. We bring you the latest technology with friendly, local service.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <Link
                href="/shop"
                className="flex-1 bg-[#F97316] text-white py-3 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 shadow-md"
              >
                <span>Explore Our Shop</span>
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

          <div className="w-full rounded-2xl overflow-hidden shadow-md border border-gray-300/80 aspect-[16/9] bg-white">
            <img
              src="/shop-2.jpeg"
              alt="ROX Tech Store Showcase in Cashel"
              className="w-full h-full object-cover object-center"
            />
          </div>

        </div>

      </section>


      {/* ================= 2. OUR STORY & WHAT WE OFFER ================= */}
      <section className="w-full bg-white py-12 sm:py-16 px-6 sm:px-10 lg:px-16 border-b border-gray-300/60 space-y-12">
        <div className="max-w-[1680px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          <div className="lg:col-span-6 order-1 lg:order-1 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-1 h-3.5 bg-[#F97316] rounded-full inline-block" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#0F172A]">
                Our Story
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] leading-tight tracking-tight">
              Technology, Accessories & <br />
              <span className="text-[#F97316]">Friendly Local Service</span>
            </h2>

            <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed max-w-2xl">
              At ROX Tech Solutions, we&apos;re passionate about technology and dedicated to helping our customers find the right products and get the support they need. From the latest devices to everyday accessories and expert repair assistance, we&apos;re here to make technology easier and more accessible for everyone in Cashel.
            </p>
          </div>

          <div className="lg:col-span-6 order-2 lg:order-2">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-black/10 aspect-[16/10] w-full bg-white">
              <img
                src="/shop-3.jpeg"
                alt="ROX Tech Solutions Storefront Cashel"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>

        {/* What We Offer Container */}
        <div className="max-w-[1680px] mx-auto pt-4">
          <div className="bg-gray-50/80 border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">

            <div className="flex items-center gap-2">
              <span className="w-1 h-3.5 bg-[#F97316] rounded-full inline-block" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] leading-tight tracking-tight">
                What We Offer
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white border border-gray-200 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:border-[#F97316] transition">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                  <Smartphone className="w-6 h-6 text-[#0F172A]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-[#0F172A]">Electronics & Devices</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">Latest smartphones, laptops, tablets and more.</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:border-[#F97316] transition">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                  <Headphones className="w-6 h-6 text-[#0F172A]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-[#0F172A]">Everyday Accessories</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">Cases, chargers, cables, audio and more.</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:border-[#F97316] transition">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                  <Wrench className="w-6 h-6 text-[#0F172A]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-[#0F172A]">Device Repair Assistance</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">Professional repairs for phones, tablets, laptops & more.</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:border-[#F97316] transition">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                  <UserCheck className="w-6 h-6 text-[#0F172A]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-[#0F172A]">Local Customer Support</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">Friendly, helpful and always nearby.</p>
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-widest text-[#0F172A]">
                Inside Our Store
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 font-medium pl-3">
              Take a look at our real store photos and see what we have in store for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            <div className="rounded-2xl overflow-hidden border border-gray-300 bg-white shadow-sm aspect-[16/10] group">
              <img
                src="/shop-8.jpeg"
                alt="ROX Tech Store Interior 1"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-300 bg-white shadow-sm aspect-[16/10] group">
              <img
                src="/shop-7.jpeg"
                alt="ROX Tech Store Interior 2"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-300 bg-white shadow-sm aspect-[16/10] group">
              <img
                src="/shop-6.jpeg"
                alt="ROX Tech Store Interior 3"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-300 bg-white shadow-sm aspect-[16/10] group">
              <img
                src="/shop-5.jpeg"
                alt="ROX Tech Store Interior 4"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
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
            <p className="text-xs text-gray-700 pl-3">
              What drives us every day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 w-full">
            <div className="bg-white/95 border border-gray-300/80 rounded-xl p-3.5 flex items-center gap-3 shadow-sm hover:border-[#F97316] hover:shadow-md transition-all duration-200 group">
              <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 group-hover:bg-[#F97316] transition-colors duration-200">
                <Lightbulb className="w-4 h-4 text-[#F97316] group-hover:text-white transition-colors" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-xs font-bold text-[#0F172A] leading-tight">Helpful Advice</h3>
                <p className="text-[10px] text-gray-600 leading-tight">
                  Get the right product or repair guidance.
                </p>
              </div>
            </div>

            <div className="bg-white/95 border border-gray-300/80 rounded-xl p-3.5 flex items-center gap-3 shadow-sm hover:border-[#F97316] hover:shadow-md transition-all duration-200 group">
              <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 group-hover:bg-[#F97316] transition-colors duration-200">
                <ShieldCheck className="w-4 h-4 text-[#F97316] group-hover:text-white transition-colors" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-xs font-bold text-[#0F172A] leading-tight">Quality-Focused</h3>
                <p className="text-[10px] text-gray-600 leading-tight">
                  We stock reliable & trusted brands.
                </p>
              </div>
            </div>

            <div className="bg-white/95 border border-gray-300/80 rounded-xl p-3.5 flex items-center gap-3 shadow-sm hover:border-[#F97316] hover:shadow-md transition-all duration-200 group">
              <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 group-hover:bg-[#F97316] transition-colors duration-200">
                <MessageSquare className="w-4 h-4 text-[#F97316] group-hover:text-white transition-colors" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-xs font-bold text-[#0F172A] leading-tight">Clear Communication</h3>
                <p className="text-[10px] text-gray-600 leading-tight">
                  Honest advice & transparent details.
                </p>
              </div>
            </div>

            <div className="bg-white/95 border border-gray-300/80 rounded-xl p-3.5 flex items-center gap-3 shadow-sm hover:border-[#22C55E] hover:shadow-md transition-all duration-200 group">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:bg-[#22C55E] transition-colors duration-200">
                <MapPin className="w-4 h-4 text-[#22C55E] group-hover:text-white transition-colors" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-xs font-bold text-[#0F172A] leading-tight">Local Support</h3>
                <p className="text-[10px] text-gray-600 leading-tight">
                  A store you can count on in Cashel.
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>


      {/* ================= 4. WHY CHOOSE ROX ================= */}
      <section className="w-full bg-white py-12 px-6 sm:px-10 lg:px-16 border-b border-gray-300/60">
        <div className="max-w-[1680px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

          <div className="lg:col-span-4 space-y-1">
            <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">
              Why Choose ROX
            </h2>
            <p className="text-xs text-gray-600 font-normal">
              More than just a store — we&apos;re your local tech partner.
            </p>
          </div>

          <div className="lg:col-span-8 bg-gray-50/80 border border-gray-200 rounded-2xl p-4 sm:p-5 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 items-center divide-y sm:divide-y-0 sm:divide-x divide-gray-200">

              <div className="flex items-center gap-3.5 sm:px-4 first:pl-0">
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 border border-gray-200 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#0F172A]" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs font-bold text-[#0F172A] leading-tight">
                    Wide Range
                  </h3>
                  <p className="text-[10px] text-gray-500 leading-tight">
                    of Tech & Accessories
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 sm:px-6 pt-3 sm:pt-0">
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 border border-gray-200 shadow-sm">
                  <Cog className="w-5 h-5 text-[#0F172A]" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs font-bold text-[#0F172A] leading-tight">
                    Expert Technicians
                  </h3>
                  <p className="text-[10px] text-gray-500 leading-tight">
                    Skilled & Experienced
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 sm:px-6 pt-3 sm:pt-0">
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 border border-gray-200 shadow-sm">
                  <Users className="w-5 h-5 text-[#0F172A]" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs font-bold text-[#0F172A] leading-tight">
                    Local & Friendly
                  </h3>
                  <p className="text-[10px] text-gray-500 leading-tight">
                    Here to Help
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* ================= 5. COME VISIT ROX TECH SOLUTIONS ================= */}
      <section className="w-full bg-[#C0C0C0] py-12 sm:py-16 px-6 sm:px-10 lg:px-16 border-b border-gray-300/60">
        <div className="max-w-[1680px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-1 h-3.5 bg-[#F97316] rounded-full inline-block" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#0F172A]">
                Visit Us
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] leading-tight tracking-tight">
              Come Visit ROX Tech Solutions
            </h2>

            <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed max-w-md">
              See our full range in person, get expert advice and friendly support.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F97316] hover:bg-[#EA580C] text-white px-6 py-3 rounded-full text-xs font-bold flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href="https://wa.me/353896091839"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00D66C] hover:bg-[#00B85C] text-white px-6 py-3 rounded-full text-xs font-bold flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-black/10 aspect-[16/7] w-full bg-white">
              <img
                src="/shop-4.jpeg"
                alt="Come Visit ROX Tech Solutions Store Showcase"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </section>


      {/* ================= 6. GET IN TOUCH ================= */}
      <section className="w-full bg-white py-12 sm:py-16 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1680px] mx-auto">

          <div className="bg-gray-50/80 border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">

            <div className="">
              <div className="flex items-center gap-2">
                <span className="w-1 h-3.5 bg-[#F97316] rounded-full inline-block" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-widest text-[#0F172A]">
                  Get in Touch
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 font-medium">
                Have a question about a product or repair? We&apos;re here to help.
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