"use client";

import { Truck, Sparkles } from "lucide-react";

export function AnnouncementBanner() {
  return (
    <div className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white py-3 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
      <div className="animate-marquee whitespace-nowrap flex relative z-10">
        <span className="mx-8 inline-flex items-center gap-2 text-sm font-medium">
          <Truck className="w-5 h-5" />
          <span className="font-semibold">Free Shipping Above ₹499</span>
        </span>
        <span className="mx-8 inline-flex items-center gap-2 text-sm font-medium">
          <Sparkles className="w-5 h-5 text-yellow-300" />
          <span className="font-semibold">Boost Your Daily Nutrition with TAPTIFS</span>
        </span>
        <span className="mx-8 inline-flex items-center gap-2 text-sm font-medium">
          <Truck className="w-5 h-5" />
          <span className="font-semibold">Free Shipping Above ₹499</span>
        </span>
        <span className="mx-8 inline-flex items-center gap-2 text-sm font-medium">
          <Sparkles className="w-5 h-5 text-yellow-300" />
          <span className="font-semibold">Boost Your Daily Nutrition with TAPTIFS</span>
        </span>
        <span className="mx-8 inline-flex items-center gap-2 text-sm font-medium">
          <Truck className="w-5 h-5" />
          <span className="font-semibold">Free Shipping Above ₹499</span>
        </span>
        <span className="mx-8 inline-flex items-center gap-2 text-sm font-medium">
          <Sparkles className="w-5 h-5 text-yellow-300" />
          <span className="font-semibold">Boost Your Daily Nutrition with TAPTIFS</span>
        </span>
      </div>
    </div>
  );
}
