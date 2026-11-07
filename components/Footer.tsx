import Link from "next/link";
import { 
  MapPin, 
  MessageCircle, 
  Mail, 
  Clock, 
  ChevronRight, 
  Smartphone, 
  Laptop, 
  Tablet, 
  Headphones, 
  Cigarette, 
  Wrench, 
  ShieldCheck, 
  Users, 
  ArrowRight
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#080D1A] text-white pt-16 pb-10 px-6 sm:px-10 lg:px-16 relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-[1600px] 2xl:max-w-[2400px] mx-auto">
        
        {/* ================= MAIN FOOTER GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 pb-12">
          
          {/* COLUMN 1: Brand Info & Feature Badges */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo */}
            <div>
              <div className="flex items-center">
                <img
                  src="/rox-logo.png"
                  alt="ROX Tech Solutions Logo"
                  className="h-12 sm:h-16 w-auto object-contain"
                />
              </div>    
            </div>

            {/* Description */}
            <p className="text-sm text-gray-300 font-normal leading-relaxed max-w-md">
              Your local tech store in Cashel, offering electronics, accessories and professional device repair services. Quality products, expert advice and friendly local support.
            </p>

            {/* 4 Feature Badges Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Smartphone className="w-4 h-4 text-[#F97316]" />
                </div>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-white leading-tight">Latest Devices</h5>
                  <p className="text-xs text-gray-400 mt-0.5">Phones, Laptops & More</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                </div>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-white leading-tight">Genuine Products</h5>
                  <p className="text-xs text-gray-400 mt-0.5">Trusted Brands</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Wrench className="w-4 h-4 text-[#F97316]" />
                </div>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-white leading-tight">Expert Repairs</h5>
                  <p className="text-xs text-gray-400 mt-0.5">Phones, Tablets & Laptops</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-4 h-4 text-[#22C55E]" />
                </div>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-white leading-tight">Local Support</h5>
                  <p className="text-xs text-gray-400 mt-0.5">In Cashel</p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Contact Us & Opening Hours */}
          <div className="lg:col-span-3 space-y-8">
            {/* Contact Us */}
            <div className="space-y-4">
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white tracking-wide">Contact Us</h4>
                <div className="w-8 h-0.5 bg-[#F97316] rounded-full" />
              </div>

              <ul className="space-y-3.5 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#F97316] shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Cashel,</p>
                    <p className="text-xs text-gray-300">County Tipperary, Ireland</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 text-[#22C55E] shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">WhatsApp & Phone</p>
                    <p className="text-xs text-gray-300">Get in touch via WhatsApp or call us</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#F97316] shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-xs text-gray-300">Send us a message</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div className="space-y-4 pt-2">
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white tracking-wide">Opening Hours</h4>
                <div className="w-8 h-0.5 bg-[#F97316] rounded-full" />
              </div>

              <div className="flex items-start gap-3 text-sm">
                <Clock className="w-4 h-4 text-[#F97316] shrink-0 mt-1" />
                <div className="space-y-2.5 text-xs sm:text-sm w-full max-w-[240px]">
                  <div className="flex justify-between text-gray-200">
                    <span>Monday - Thursday</span>
                    <span className="text-gray-300 font-mono text-xs">9:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between text-gray-200">
                    <span>Friday - Saturday</span>
                    <span className="text-gray-300 font-mono text-xs">9:00 AM – 10:00 PM</span>
                  </div>
                  <div className="flex justify-between text-gray-200">
                    <span>Sunday</span>
                    <span className="text-gray-300 font-mono text-xs">9:00 AM – 8:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 3: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white tracking-wide">Quick Links</h4>
              <div className="w-8 h-0.5 bg-[#F97316] rounded-full" />
            </div>

            <ul className="space-y-3 text-sm text-gray-200">
              {["Home", "Shop", "Repairs", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="hover:text-[#F97316] transition flex items-center gap-2 group">
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#F97316] transition" />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Shop Categories */}
          <div className="lg:col-span-3 space-y-6">
            {/* Categories List */}
            <div className="space-y-4">
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white tracking-wide">Shop Categories</h4>
                <div className="w-8 h-0.5 bg-[#F97316] rounded-full" />
              </div>

              <ul className="space-y-3 text-sm text-gray-200">
                <li className="flex items-center gap-2.5 hover:text-[#F97316] transition cursor-pointer">
                  <Smartphone className="w-4 h-4 text-gray-300" />
                  <span>Smartphones</span>
                </li>
                <li className="flex items-center gap-2.5 hover:text-[#F97316] transition cursor-pointer">
                  <Laptop className="w-4 h-4 text-gray-300" />
                  <span>Laptops</span>
                </li>
                <li className="flex items-center gap-2.5 hover:text-[#F97316] transition cursor-pointer">
                  <Tablet className="w-4 h-4 text-gray-300" />
                  <span>Tablets</span>
                </li>
                <li className="flex items-center gap-2.5 hover:text-[#F97316] transition cursor-pointer">
                  <Headphones className="w-4 h-4 text-gray-300" />
                  <span>Accessories</span>
                </li>
                <li className="flex items-center gap-2.5 hover:text-[#F97316] transition cursor-pointer">
                  <Cigarette className="w-4 h-4 text-gray-300" />
                  <span>Vapes</span>
                </li>
                <li className="flex items-center gap-2.5 hover:text-[#F97316] transition cursor-pointer">
                  <Wrench className="w-4 h-4 text-gray-300" />
                  <span>Repairs</span>
                </li>
              </ul>
            </div>

            {/* Stay Connected & Social Section */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-serif italic text-gray-200">
                  Stay Connected
                </span>
                <span className="text-xs text-gray-400 rotate-[45deg] font-mono">↴</span>
              </div>

              {/* Social Icons Bar */}
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a href="#" className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center hover:opacity-90 transition">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                {/* TikTok */}
                <a href="#" className="w-9 h-9 rounded-full bg-black border border-gray-700 text-white flex items-center justify-center hover:opacity-90 transition">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                {/* YouTube */}
                <a href="#" className="w-9 h-9 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:opacity-90 transition">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>

              {/* Newsletter Form */}
              <div className="pt-3 space-y-2">
                <h5 className="text-xs sm:text-sm font-bold text-white">Be the first to know</h5>
                <p className="text-xs text-gray-300">Get updates on new products, special offers and more.</p>
                
                <div className="flex items-center gap-1.5 pt-1">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full bg-[#0F172A] border border-gray-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#F97316]"
                  />
                  <button className="bg-[#F97316] hover:bg-[#EA580C] text-white p-2.5 rounded-xl transition shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>


        {/* ================= BOTTOM COPYRIGHT & PAYMENT SECTION ================= */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-300">
          
          {/* Copyright */}
          <p className="text-xs sm:text-sm">
            © {new Date().getFullYear()} ROX Tech Solutions. All rights reserved.
          </p>

          {/* Payment Method Badges */}
          <div className="flex items-center gap-2">
            <span className="bg-[#0A1124] border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-bold text-blue-400 flex items-center gap-1">
              VISA
            </span>
            <span className="bg-[#0A1124] border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-bold text-orange-400 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-red-500 inline-block -mr-1 opacity-90" />
              <span className="w-2 h-2 rounded-full bg-yellow-500 inline-block opacity-90" />
            </span>
            <span className="bg-[#0A1124] border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-medium text-white">
               Pay
            </span>
            <span className="bg-[#0A1124] border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-medium text-white">
              G Pay
            </span>
          </div>

        </div>

        {/* ================= SIGNATURE BOTTOM ACCENT LINE ================= */}
        <div className="mt-10 flex flex-col items-center justify-center space-y-2.5">
          <div className="w-56 h-[2px] bg-gradient-to-r from-transparent via-[#F97316] to-transparent rounded-full" />
          <p className="text-[10px] sm:text-xs font-mono font-medium tracking-[0.2em] text-gray-400 uppercase">
            BETTER TECH &nbsp;/&nbsp; BETTER SERVICE &nbsp;/&nbsp; LOCAL SUPPORT
          </p>
        </div>

      </div>
    </footer>
  );
}