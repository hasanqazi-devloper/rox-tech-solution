import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Headphones,
  MapPin,
  Package,
  Wrench,
  UserCheck,
  MessageSquare
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full h-auto bg-[#C0C0C0] overflow-hidden flex flex-col items-center m-0 p-0">

      {/* ================= UNIFIED HERO CONTAINER ================= */}
      <div className="w-full max-w-[2700px] mx-auto lg:bg-[url('/home-hero-banner.png?v=2')] lg:bg-cover lg:bg-right lg:bg-no-repeat lg:h-[540px] xl:h-[560px] 2xl:h-[900px] relative flex flex-col justify-center">
        
        {/* Desktop Gradient Overlay */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#C0C0C0]/40 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-15 w-full max-w-[1500px] 2xl:max-w-[2400px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-20 py-6 lg:py-0 flex flex-col lg:flex-row items-center">
          
          {/* ================= SHARED TEXT CONTENT (SINGLE H1 FOR SEO) ================= */}
          <div className="w-full max-w-2xl 2xl:max-w-4xl space-y-4 sm:space-y-5 2xl:space-y-8">

            <div className="inline-flex items-center gap-1.5 2xl:gap-2.5 text-xs 2xl:text-base font-semibold text-gray-800 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 2xl:px-6 2xl:py-2.5 rounded-full border border-gray-300 shadow-sm">
              <MapPin className="w-3.5 h-3.5 2xl:w-5 2xl:h-5 text-[#F97316]" />
              <span>Cashel, County Tipperary, Ireland</span>
            </div>

            {/* Poore page ka iklaota SEO-friendly H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl 2xl:text-7xl 3xl:text-8xl font-black text-[#0F172A] leading-tight tracking-tight">
              Your Premier Tech & <br />
              Repair Hub in Cashel
            </h1>

            <p className="text-gray-800 text-sm sm:text-base xl:text-lg 2xl:text-2xl 3xl:text-3xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl">
              Discover the latest technology, everyday accessories and reliable device repairs, backed by friendly local service in Cashel.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 2xl:gap-5 pt-2">
              <Link
                href="/shop"
                className="flex items-center gap-2 2xl:gap-3 bg-[#F97316] hover:bg-[#EA580C] text-white px-6 py-3 2xl:px-9 2xl:py-4 rounded-full font-bold text-sm 2xl:text-lg shadow-md transition transform hover:-translate-y-0.5"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 2xl:w-6 2xl:h-6" />
              </Link>

              <a
                href="https://wa.me/353896091839"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 2xl:gap-3 bg-[#22C55E] hover:bg-[#16A34A] text-white px-6 py-3 2xl:px-9 2xl:py-4 rounded-full font-bold text-sm 2xl:text-lg shadow-md transition transform hover:-translate-y-0.5"
              >
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Desktop Badges */}
            <div className="hidden lg:grid grid-cols-3 gap-3 2xl:gap-6 pt-6 2xl:pt-9 border-t border-gray-400/50 text-xs 2xl:text-base font-bold text-gray-800">
              <div className="flex items-center gap-2 2xl:gap-3">
                <ShieldCheck className="w-4 h-4 2xl:w-6 2xl:h-6 text-[#0F172A] shrink-0" />
                <div>
                  <p className="text-[#0F172A] leading-tight text-xs 2xl:text-base">Quality Products</p>
                  <p className="text-[10px] 2xl:text-sm text-gray-700 font-normal">Trusted Brands</p>
                </div>
              </div>

              <div className="flex items-center gap-2 2xl:gap-3">
                <Headphones className="w-4 h-4 2xl:w-6 2xl:h-6 text-[#0F172A] shrink-0" />
                <div>
                  <p className="text-[#0F172A] leading-tight text-xs 2xl:text-base">Expert Support</p>
                  <p className="text-[10px] 2xl:text-sm text-gray-700 font-normal">Local Team</p>
                </div>
              </div>

              <div className="flex items-center gap-2 2xl:gap-3">
                <MapPin className="w-4 h-4 2xl:w-6 2xl:h-6 text-[#0F172A] shrink-0" />
                <div>
                  <p className="text-[#0F172A] leading-tight text-xs 2xl:text-base">Local Service</p>
                  <p className="text-[10px] 2xl:text-sm text-gray-700 font-normal">In Cashel</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ================= MOBILE ONLY IMAGE ================= */}
      <div className="block lg:hidden w-full px-4 pt-2 pb-4 space-y-3">
        <div className="w-full overflow-hidden my-1 relative h-64 sm:h-80">
          <Image
            src="/home-hero-mobile.png?v=2"
            alt="ROX Tech Devices Showcase"
            fill
            priority
            sizes="100vw"
            className="object-cover rounded-lg shadow-sm"
          />
        </div>

        {/* Mobile Badges Card */}
        <div className="grid grid-cols-3 gap-1 p-3 bg-white rounded-xl shadow-sm border border-gray-200 text-xs font-bold text-gray-800">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#0F172A] shrink-0" />
            <div>
              <p className="text-[#0F172A] text-[10px] sm:text-xs leading-tight">Quality Products</p>
              <p className="text-[8px] sm:text-[10px] text-gray-700 font-normal">Trusted Brands</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <Headphones className="w-4 h-4 text-[#0F172A] shrink-0" />
            <div>
              <p className="text-[#0F172A] text-[10px] sm:text-xs leading-tight">Expert Support</p>
              <p className="text-[8px] sm:text-[10px] text-gray-700 font-normal">Local Team</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#0F172A] shrink-0" />
            <div>
              <p className="text-[#0F172A] text-[10px] sm:text-xs leading-tight">Local Service</p>
              <p className="text-[8px] sm:text-[10px] text-gray-700 font-normal">In Cashel</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM FEATURE BAR (Desktop Only) ================= */}
      <div className="hidden lg:block w-full bg-white border-t border-b border-gray-300/80 py-4 sm:py-5 px-4 sm:px-12 shadow-sm m-0">
        <div className="w-full grid grid-cols-4 gap-6 items-center">
          
          <div className="flex items-center gap-3">
            <Package className="w-8 h-8 text-[#0F172A] shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-[#0F172A] leading-tight">Wide Range of Products</h4>
              <p className="text-xs text-gray-500">Top Brands & Accessories</p>
            </div>
          </div>

          <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
            <Wrench className="w-8 h-8 text-[#0F172A] shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-[#0F172A] leading-tight">Expert Device Repairs</h4>
              <p className="text-xs text-gray-500">Fast & Reliable Service</p>
            </div>
          </div>

          <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
            <UserCheck className="w-8 h-8 text-[#0F172A] shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-[#0F172A] leading-tight">Local Customer Support</h4>
              <p className="text-xs text-gray-500">Friendly & Knowledgeable</p>
            </div>
          </div>

          <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
            <MessageSquare className="w-8 h-8 text-[#0F172A] shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-[#0F172A] leading-tight">Convenient Contact</h4>
              <p className="text-xs text-gray-500">WhatsApp, Call or Visit</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}