"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Calendar, Clock, CheckCircle2, Sparkles } from "lucide-react";

export default function ChristmasClubBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 43,
    hours: 2,
    minutes: 37,
    seconds: 50
  });

  useEffect(() => {
    // Target date set for Christmas Eve
    const targetDate = new Date("2026-12-24T23:59:59").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-[1680px] mx-auto my-8 px-4 sm:px-10 lg:px-16">
      {/* Main Banner Container with Rich Christmas Background */}
      <div className="relative w-full rounded-[32px] overflow-hidden shadow-[0_30px_80px_-15px_rgba(0,0,0,0.85)] border border-amber-500/40 p-6 sm:p-10 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 bg-gradient-to-r from-[#8B0000] via-[#560606] to-[#04341B]">
        
        {/* Festive Background Lighting, Glows & Bokeh Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-amber-400/25 via-transparent to-transparent pointer-events-none z-0" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-emerald-500/25 rounded-full blur-[100px] pointer-events-none" />

        {/* 1. LEFT SECTION: Christmas Heading & Subtext */}
        <div className="relative z-10 space-y-5 max-w-md lg:max-w-lg text-center lg:text-left">
          
          {/* Golden Christmas Header (Starting directly with Christmas) */}
          <div className="space-y-1">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-amber-300 to-amber-500 drop-shadow-[0_4px_16px_rgba(245,158,11,0.6)]">
              Christmas
            </h2>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] flex items-center justify-center lg:justify-start gap-2">
              Savings Club <span className="text-3xl sm:text-4xl">🎄</span>
            </h3>
          </div>

          {/* Subtext Offer Description */}
          <p className="text-xs sm:text-sm lg:text-base text-slate-100 font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] max-w-md">
            Spread the cost <span className="text-amber-300 font-bold underline decoration-amber-400/50 underline-offset-4">weekly</span>. Reserve <span className="text-white font-bold">iPhones, MacBooks, PS5 &amp; Vapes</span> with <span className="text-amber-300 font-bold">0% interest</span> in Cashel!
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
            <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/60 border border-emerald-500/60 text-white text-xs font-bold backdrop-blur-md shadow-lg">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 fill-emerald-400 text-black" />
              <span>Stock Guaranteed</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/60 border border-amber-500/60 text-white text-xs font-bold backdrop-blur-md shadow-lg">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Flexi Pay</span>
            </div>
          </div>
        </div>

        {/* 2. CENTER SECTION: Responsive Pro-Sized club.png Image */}
        <div className="relative z-10 w-full max-w-xs sm:max-w-sm lg:max-w-md flex items-center justify-center my-4 lg:my-0">
          <div className="relative w-full flex items-center justify-center">
            {/* Ambient Backlight Glow behind the PNG */}
            <div className="absolute w-40 h-40 bg-amber-400/25 rounded-full blur-3xl pointer-events-none" />
            
            <img
              src="/club.png" 
              alt="ROX Christmas Tech Gifts"
              className="h-48 sm:h-64 lg:h-80 w-auto object-contain drop-shadow-[0_30px_45px_rgba(0,0,0,0.9)] hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>
        </div>

        {/* 3. RIGHT SECTION: High-Conversion Glassmorphic Timer & CTA */}
        <div className="relative z-10 w-full lg:w-auto shrink-0 flex flex-col items-center">
          <div className="w-full max-w-xs sm:max-w-sm bg-white/95 backdrop-blur-2xl border border-white/90 rounded-[28px] p-6 shadow-[0_25px_60px_-10px_rgba(0,0,0,0.65)] space-y-5 text-center">
            
            {/* Offer Ends Header */}
            <div className="flex items-center justify-center gap-2 text-slate-900 font-black text-sm sm:text-base">
              <Clock className="w-5 h-5 text-red-600 animate-pulse" />
              <span>Offer Ends <span className="text-red-600 font-black">Dec 24</span></span>
              <Sparkles className="w-4 h-4 text-amber-500" />
            </div>

            {/* Redesigned Premium Countdown Blocks */}
            <div className="grid grid-cols-4 gap-2.5 pt-2 border-t border-slate-200">
              <div className="bg-gradient-to-b from-slate-50 to-slate-100 rounded-2xl p-2.5 border border-slate-200 shadow-sm">
                <span className="block text-xl sm:text-2xl lg:text-3xl font-black text-slate-950 leading-none">
                  {String(timeLeft.days).padStart(2, "0")}
                </span>
                <span className="text-[9px] uppercase font-extrabold text-slate-500 tracking-wider">Days</span>
              </div>

              <div className="bg-gradient-to-b from-slate-50 to-slate-100 rounded-2xl p-2.5 border border-slate-200 shadow-sm">
                <span className="block text-xl sm:text-2xl lg:text-3xl font-black text-slate-950 leading-none">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
                <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">Hours</span>
              </div>

              <div className="bg-gradient-to-b from-slate-50 to-slate-100 rounded-2xl p-2.5 border border-slate-200 shadow-sm">
                <span className="block text-xl sm:text-2xl lg:text-3xl font-black text-slate-950 leading-none">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">Mins</span>
              </div>

              <div className="bg-gradient-to-b from-slate-50 to-slate-100 rounded-2xl p-2.5 border border-slate-200 shadow-sm">
                <span className="block text-xl sm:text-2xl lg:text-3xl font-black text-slate-950 leading-none">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
                <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">Secs</span>
              </div>
            </div>

            {/* Action CTA Button */}
            <a
              href="https://wa.me/353896091839?text=Hi,%20I%20want%20to%20start%20my%20Christmas%20Weekly%20Savings%20Plan!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#00C853] hover:bg-[#00B248] text-white py-4 px-6 rounded-2xl font-black text-xs sm:text-sm flex items-center justify-center gap-2.5 transition-all shadow-[0_12px_28px_rgba(0,200,83,0.45)] active:scale-95 border border-emerald-400"
            >
              <span>Start Weekly Plan</span>
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>
        </div>

      </div>
    </div>
  );
}