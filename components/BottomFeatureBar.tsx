import { Package, Wrench, UserCheck, MessageSquare } from "lucide-react";

export default function BottomFeatureBar() {
  return (
    <div className="w-full bg-white border-t border-b border-gray-300/80 py-4 sm:py-5 px-4 sm:px-12 shadow-sm m-0">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-center">
        
        <div className="flex items-center gap-3">
          <Package className="w-7 h-7 sm:w-8 sm:h-8 text-[#0F172A] shrink-0" />
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[#0F172A] leading-tight">Wide Range of Products</h4>
            <p className="text-[10px] sm:text-xs text-gray-500">Top Brands & Accessories</p>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:border-l sm:border-gray-200 sm:pl-6">
          <Wrench className="w-7 h-7 sm:w-8 sm:h-8 text-[#0F172A] shrink-0" />
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[#0F172A] leading-tight">Expert Device Repairs</h4>
            <p className="text-[10px] sm:text-xs text-gray-500">Fast & Reliable Service</p>
          </div>
        </div>

        <div className="flex items-center gap-3 lg:border-l lg:border-gray-200 lg:pl-6">
          <UserCheck className="w-7 h-7 sm:w-8 sm:h-8 text-[#0F172A] shrink-0" />
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[#0F172A] leading-tight">Local Customer Support</h4>
            <p className="text-[10px] sm:text-xs text-gray-500">Friendly & Knowledgeable</p>
          </div>
        </div>

        <div className="flex items-center gap-3 lg:border-l lg:border-gray-200 lg:pl-6">
          <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 text-[#0F172A] shrink-0" />
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[#0F172A] leading-tight">Convenient Contact</h4>
            <p className="text-[10px] sm:text-xs text-gray-500">WhatsApp, Call or Visit</p>
          </div>
        </div>

      </div>
    </div>
  );
}