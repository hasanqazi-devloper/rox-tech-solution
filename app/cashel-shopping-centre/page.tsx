import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Navigation,
  HelpCircle,
  ArrowRight,
  Star,
  ChevronRight,
  Car,
  CircleDot,
  CheckCircle2,
} from "lucide-react";
import ChristmasClubBanner from "@/components/ChristmasClubBanner";
import RepairQuoteWidget from "@/components/RepairQuoteWidget";

// ✅ Dynamic Metadata for Local SEO
export const metadata: Metadata = {
  title:
    "ROX Tech Solutions – Unit 3, Cashel Town Shopping Centre | Phone Repair, Vapes & Tech",
  description:
    "Visit ROX Tech Solutions at Cashel Town Shopping Centre (Unit 3), E25 EF82. Express repairs, smartphones, vapes & tech accessories. Trusted local service in Cashel, Co. Tipperary.",
  alternates: {
    canonical: "https://roxtechsolutions.ie/cashel-shopping-centre",
  },
};

// ==========================================
// ✅ PAGE COMPONENT
// ==========================================
export default function LocationPageShoppingCentre() {
  // ✅ JSON-LD LocalBusiness Schema for Google Local Pack Ranking
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobilePhoneStore",
    name: "ROX Tech Solutions - Cashel Town Shopping Centre (Unit 3)",
    image: "https://roxtechsolutions.ie/shop-1.jpg", 
    telephone: "+353896091839", 
    url: "https://roxtechsolutions.ie/cashel-shopping-centre",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unit 3, Cashel Town Shopping Centre, Cahir Rd",
      addressLocality: "Cashel",
      addressRegion: "Co. Tipperary",
      postalCode: "E25 EF82",
      addressCountry: "IE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.5146,
      longitude: -7.8894,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
    ],
  };

  return (
    <div className="w-full bg-[#C0C0C0] min-h-screen text-[#0F172A] font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ==========================================
          ✅ FIXED HERO SECTION (Clear Image, No Overlap, Bottom Info Bar)
          ========================================== */}
      <section className="relative w-full bg-[#C0C0C0] overflow-hidden border-b border-gray-300/80">
        
        {/* ================= DESKTOP VIEW ================= */}
        <div className="hidden lg:block relative min-h-[480px] xl:min-h-[520px] flex items-center">
          
          <div className="absolute inset-0 w-full h-full flex justify-end">
            <div className="relative w-full lg:w-[65%] h-full">
              <Image
                src="/shopping-center-hero.png" 
                alt="ROX Tech Solutions Cashel Shopping Centre Storefront"
                fill
                priority
                sizes="65vw"
                className="object-cover object-center brightness-105 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#C0C0C0] via-[#C0C0C0]/80 lg:via-[#C0C0C0]/30 to-transparent" />
            </div>
          </div>

          <div className="relative z-10 w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16 py-14">
            <div className="max-w-2xl space-y-6">
              
              <nav className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-800 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-300 shadow-xs">
                <Home className="w-3.5 h-3.5 text-[#F97316]" />
                <Link href="/" className="hover:text-[#F97316] transition">Home</Link>
                <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                <span>Locations</span>
                <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                <span className="text-[#0F172A] font-black">Unit 3</span>
              </nav>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-xs font-bold text-[#0F172A] shadow-xs">
                <CircleDot className="w-3.5 h-3.5 text-[#22C55E] fill-[#22C55E]" />
                <span>Cashel, Ireland • E25 EF82</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] leading-[1.15] tracking-tight">
                Cashel Town <br /> Shopping Centre <br /> <span className="text-[#F97316]">(Unit 3)</span>
              </h1>

              <p className="text-xs sm:text-sm text-gray-800 font-medium leading-relaxed max-w-lg">
                Your #1 local destination for Express Phone Repairs, Vapes, Tech & Accessories in Cashel, Co. Tipperary.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://wa.me/353896091839?text=Hi%20ROX%20Tech%20Shopping%20Centre,%20I%20have%20an%20inquiry!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#00D66C] hover:bg-[#00B85C] text-white px-7 py-3.5 rounded-full text-xs font-bold flex items-center gap-2 transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Quote</span>
                </a>

                <a
                  href="https://share.google/j6alfoimaC2IgJJoO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F97316] hover:bg-[#EA580C] text-white px-7 py-3.5 rounded-full text-xs font-bold flex items-center gap-2 transition-all shadow-md"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* ================= MOBILE VIEW ================= */}
        <div className="block lg:hidden px-5 py-8 space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-xs font-bold text-[#0F172A] shadow-xs">
              <CircleDot className="w-3.5 h-3.5 text-[#22C55E] fill-[#22C55E]" />
              <span>Cashel, Ireland • E25 EF82</span>
            </div>

            <h1 className="text-3xl font-black text-[#0F172A] leading-tight tracking-tight">
              Cashel Town Shopping Centre (Unit 3)
            </h1>

            <p className="text-xs text-gray-700 font-medium leading-relaxed">
              Your #1 local destination for Express Phone Repairs, Vapes, Tech & Accessories in Cashel, Co. Tipperary.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://wa.me/353896091839"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#00D66C] text-white py-3 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 shadow-md"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </a>

              <a
                href="https://share.google/j6alfoimaC2IgJJoO"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#F97316] text-white py-3 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 shadow-md"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Directions</span>
              </a>
            </div>
          </div>

          <div className="w-full rounded-2xl overflow-hidden shadow-md border border-gray-300/80 aspect-[16/9] bg-white relative">
            <Image
              src="/shopping-center-hero.png"
              alt="ROX Tech Solutions Shopping Centre Storefront"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* ================= BOTTOM STORE DETAILS PATTI (INFO BAR) ================= */}
        <div className="w-full bg-white border-t border-gray-300/80 shadow-sm py-4 px-6 sm:px-10 lg:px-16">
          <div className="max-w-[1680px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#F97316]/10 text-[#F97316] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">Store Address</p>
                <p className="text-xs font-bold text-[#0F172A]">Unit 3, Cashel Town Shopping Centre (E25 EF82)</p>
              </div>
            </div>

            <div className="flex items-center gap-3 md:border-l md:border-gray-200 md:pl-6">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">Opening Hours</p>
                <p className="text-xs font-bold text-[#0F172A]">Mon–Sat: 9AM – 8PM | Sun: 10AM – 8PM</p>
              </div>
            </div>

            <div className="flex items-center justify-between md:border-l md:border-gray-200 md:pl-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">Direct Contact</p>
                  <a href="tel:+353896091839" className="text-xs font-bold text-[#0F172A] hover:text-[#F97316]">
                    +353 89 609 1839
                  </a>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200 shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Open Now
              </span>
            </div>

          </div>
        </div>

      </section>

      {/* ==========================================
          ✅ CHRISTMAS CLUB BANNER ADDED
          ========================================== */}
      <ChristmasClubBanner />

      {/* ==========================================
          ✅ BROWSE CATEGORIES GRID
          ========================================== */}
      <section className="w-full py-10 px-4 md:px-8 xl:px-12 2xl:px-16">
        <div className="max-w-[1680px] mx-auto space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-7 bg-[#F97316] rounded-full" />
            <h2 className="text-xl md:text-2xl font-black text-[#0F172A] tracking-tight">
              Browse In-Store & Online Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                name: "Smartphones",
                subtitle: "Latest iPhone & Samsung",
                img: "/mobile.png",
                href: "/shop?cat=smartphones",
              },
              {
                name: "Vapes & E-Liquids",
                subtitle: "Kits, Pods & Juices",
                img: "/vapes/Gotek_Vape_Pod_Kit.png",
                href: "/vapes",
              },
              {
                name: "Laptops & Computing",
                subtitle: "MacBooks & Windows",
                img: "/laptop.png",
                href: "/shop?cat=laptops",
              },
              {
                name: "Audio & Headphones",
                subtitle: "Earbuds & Speakers",
                img: "/audio.png",
                href: "/shop?cat=audio",
              },
              {
                name: "Smart Watches",
                subtitle: "Apple Watch & Galaxy Watch",
                img: "/products/Samsung_Galaxy_Watch_6.png",
                href: "/shop?cat=smartwatches",
              },
              {
                name: "Gaming & Accessories",
                subtitle: "PS5, Xbox & Consoles",
                img: "/cat-game.png",
                href: "/shop?cat=gaming",
              },
            ].map((cat, i) => (
              <Link
                key={i}
                href={cat.href}
                className="group bg-white border border-gray-200/90 rounded-2xl px-6 py-5 flex items-center justify-between gap-5 shadow-sm hover:shadow-lg hover:border-[#F97316] transition-all duration-300 transform hover:-translate-y-0.5 min-h-[140px]"
              >
                <div className="w-32 h-32 sm:w-36 sm:h-32 flex items-center justify-center shrink-0 relative -ml-2">
                  <Image
                    src={cat.img}
                    alt={cat.name}
                    width={160}
                    height={140}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-black text-[#0F172A] group-hover:text-[#F97316] transition-colors leading-snug">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium mt-0.5 truncate">
                    {cat.subtitle}
                  </p>
                </div>

                <div className="w-9 h-9 rounded-full bg-[#F97316] group-hover:bg-[#EA580C] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:translate-x-0.5 transition-all">
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          ✅ OUR SERVICES & SPECIALTY
          ========================================== */}
      <section className="w-full py-8 px-4 md:px-8 xl:px-12 2xl:px-16">
        <div className="max-w-[1680px] mx-auto space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-7 bg-[#F97316] rounded-full" />
            <h2 className="text-xl md:text-2xl font-black text-[#0F172A] tracking-tight">
              Our Services & Specialty
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Express iPhone & Samsung Repairs",
                href: "/repairs",
                img: "/loc-mobile.png",
              },
              {
                name: "Vapes, Coils & Nicotine Pouches Hub",
                href: "/vapes",
                img: "/loc-vape.png",
              },
              {
                name: "Device Diagnostics & Trade-Ins",
                href: "/shop?cat=laptops",
                img: "/loc-laptop.png",
              },
            ].map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col border border-gray-200/80 hover:border-[#F97316]"
              >
                <div className="relative w-full h-60 sm:h-64 overflow-hidden bg-slate-100">
                  <Image
                    src={service.img}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="bg-white px-5 py-4 border-t border-gray-100 flex items-center justify-between gap-3">
                  <h3 className="text-sm sm:text-base font-black text-[#0F172A] leading-snug group-hover:text-[#F97316] transition-colors">
                    {service.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#F97316] shrink-0 group-hover:translate-x-1 transition-transform">
                    <span>Explore</span>
                    <span>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          ✅ REPAIR QUOTE WIDGET ADDED
          ========================================== */}
      <RepairQuoteWidget />

      {/* ==========================================
          ✅ HOW TO FIND US
          ========================================== */}
      <section className="w-full py-12 px-4 md:px-8 xl:px-12 2xl:px-16 border-t border-gray-300/80 mt-8 bg-gradient-to-b from-[#C0C0C0] to-[#B0B4BA]">
        <div className="max-w-[1680px] mx-auto bg-white/95 backdrop-blur-md border border-gray-200/90 rounded-[2.55rem] p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-2xl">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-8 bg-[#F97316] rounded-full shadow-xs" />
                <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                  How to Find Us
                </h2>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
                Located right inside <strong className="text-[#0F172A]">Cashel Town Shopping Centre (Unit 3)</strong> on Cahir Road — just a 2-minute drive from Main Street and the iconic <strong className="text-[#0F172A]">Rock of Cashel</strong>.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex gap-3.5 items-center bg-[#F97316]/5 text-[#EA580C] px-5 py-4 rounded-2xl border border-[#F97316]/20 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#F97316] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Car className="w-5 h-5"/>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-black text-[#0F172A]">Free Customer Parking Available</p>
                  <p className="text-[11px] text-gray-500 font-medium mt-0.5">Directly outside Shopping Centre main entrance.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a 
                href="https://share.google/j6alfoimaC2IgJJoO" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex gap-3 items-center justify-center w-full sm:w-auto bg-[#0F172A] hover:bg-[#F97316] text-white px-8 py-4 rounded-2xl font-bold text-xs sm:text-sm shadow-lg hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Navigation className="w-4 h-4 text-[#F97316] group-hover:text-white" /> 
                <span>Get Directions in Google Maps</span>
              </a>
            </div>

          </div>

          <div className="lg:col-span-7 w-full h-[380px] sm:h-[420px] rounded-3xl overflow-hidden border-2 border-gray-200/80 shadow-inner relative group">
            <iframe
              title="ROX Tech Solutions Cashel Town Shopping Centre (Unit 3) Google Map"
              src="https://www.google.com/maps?q=Unit+3,+Cashel+Town+Shopping+Centre,+Cashel,+Co.+Tipperary,+E25+EF82&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover filter contrast-[1.05]"
            />

            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-gray-200 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F97316] animate-ping" />
              <span className="text-xs font-black text-[#0F172A]">📍 Near Rock of Cashel</span>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          ✅ CUSTOMER REVIEWS & FAQ SECTION
          ========================================== */}
      <section className="w-full py-14 px-4 md:px-8 xl:px-12 2xl:px-16 bg-[#C0C0C0] border-t border-gray-300/80">
        <div className="max-w-[1680px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-8 bg-[#F97316] rounded-full shadow-xs" />
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                    What Our Customers Say
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-700 font-medium mt-0.5">Trusted by local customers across Cashel, Co. Tipperary.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { name: "David Murphy", text: "\"Very good service!\" Polite man, my go to shop.", time: "2 weeks ago" },
                { name: "Sarah O'Connor", text: "\"Highly recommended!\" Express repairs done in under 1 hour.", time: "1 month ago" },
                { name: "James Ryan", text: "\"Fast and professional!\" Great prices and helpful local staff.", time: "1 month ago" },
              ].map((rev, i) => (
                <div key={i} className="bg-white/95 backdrop-blur-md border border-gray-200/90 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                      <p className="text-xs sm:text-sm font-black text-[#0F172A]">{rev.name}</p>
                      <div className="flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600"/>
                        <span className="text-[9px] font-bold text-emerald-700 uppercase">Verified</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium italic">{rev.text}</p>
                  </div>
                  <div className="pt-2 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-[10px] text-gray-400 font-semibold">{rev.time}</span>
                    <span className="text-[10px] text-[#F97316] font-bold group-hover:translate-x-0.5 transition-transform">Google Review</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 bg-white/95 backdrop-blur-md border border-gray-200/90 rounded-[2.5rem] p-6 sm:p-8 shadow-xl space-y-5">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#F97316]/10 text-[#F97316] flex items-center justify-center shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-black text-[#0F172A] tracking-tight">FAQ</h2>
                <p className="text-[11px] text-gray-500 font-medium">Quick answers to common questions.</p>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              {[
                "Do you offer same-day screen repairs?",
                "Can I reserve vapes or phones via WhatsApp?",
                "Do you provide a warranty on repairs?",
              ].map((faq, i) => (
                <div key={i} className="p-4 bg-gray-50 hover:bg-orange-50/60 border border-gray-200/60 hover:border-[#F97316]/40 rounded-2xl flex items-center justify-between gap-3 cursor-pointer transition-all group">
                  <p className="font-bold text-[#0F172A] group-hover:text-[#F97316] transition-colors leading-snug">{faq}</p>
                  <div className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-[#F97316] group-hover:text-white group-hover:border-[#F97316] transition-all">
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-white shrink-0"/>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}