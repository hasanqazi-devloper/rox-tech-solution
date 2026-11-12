"use client";

import { useState } from "react";
import { X, Sparkles, ArrowRight } from "lucide-react";

export default function WhatsAppCommunitySticky() {
  const [isOpen, setIsOpen] = useState(false);

  // Aap yahan apna actual WhatsApp Community Invite Link paste kar sakte ho
  const communityLink = "https://chat.whatsapp.com/YOUR_COMMUNITY_INVITE_LINK";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* ================= EXPANDABLE COMMUNITY CARD ================= */}
      {isOpen && (
        <div className="mb-3 w-72 bg-[#0F291E] border border-[#22C55E]/40 text-white rounded-3xl p-4 shadow-2xl animate-fadeIn relative">
          
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-gray-400 hover:text-white bg-gray-800/80 rounded-full p-1 transition"
            aria-label="Close Community Window"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-1.5 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
            <span className="text-[10px] font-extrabold text-[#22C55E] uppercase tracking-wider">
              Exclusive Access
            </span>
          </div>

          <h3 className="text-xs font-black text-white leading-tight mb-1">
            Join Our WhatsApp Community 🔥
          </h3>
          <p className="text-[11px] text-gray-300 mb-3 leading-relaxed">
            Stay updated with latest stock, iPhone arrivals & special store deals in Cashel!
          </p>

          <a
            href={communityLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-95 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition shadow-md"
          >
            <span>Join Community</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}

      {/* ================= PREMIUM WHATSAPP FLOATING BUTTON ================= */}
      <div 
        role="button"
        tabIndex={0}
        aria-label="Open WhatsApp Community"
        className="flex items-center gap-2.5 group cursor-pointer select-none outline-none" 
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsOpen(!isOpen); }}
      >
        
        {/* Attractive Text Bubble Tag */}
        <div className="bg-[#0F291E] text-white px-3.5 py-2 rounded-2xl shadow-xl border border-[#22C55E]/40 text-xs font-bold flex items-center gap-1.5 transition-all duration-300 group-hover:scale-105">
          <span className="text-sm">🔥</span>
          <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Join Community</span>
        </div>

        {/* Enhanced Realistic WhatsApp Icon Button */}
        <div className="relative">
          <div className="w-14 h-14 bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 border-2 border-white/20">
            {/* Custom SVG for exact clean WhatsApp logo */}
            <svg className="w-7 h-7 fill-current drop-shadow-sm" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </div>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#F97316] rounded-full animate-ping pointer-events-none" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#F97316] rounded-full text-[9px] font-bold text-white flex items-center justify-center pointer-events-none">1</span>
        </div>

      </div>

    </div>
  );
}