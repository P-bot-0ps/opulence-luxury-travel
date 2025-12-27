"use client";

import { useState } from "react";
import Link from "next/link";
import CategoryTabs from "./CategoryTabs";
import DealBanner from "./DealBanner";
import ChatWidget from "./ChatWidget";

export default function Hero() {
  const [activeDeal, setActiveDeal] = useState(null); // Track selected deal

  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden bg-black/40 text-white">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videoH.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6">
          {/* CategoryTabs + DealBanner side-by-side on desktop, stacked on mobile */}
          <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl">
            <div className="w-full lg:w-2/3">
              <CategoryTabs onTabChange={setActiveDeal} />
            </div>
            <div className="w-full lg:w-1/3">
              <DealBanner deal={activeDeal} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            {[
              { label: "Study Abroad", href: "/Study-abroad" },
              { label: "Work Overseas", href: "/Work-overseas" },
              { label: "Luxury Travel", href: "/Luxury-travel" },
              { label: "Visa Help", href: "/Visa-help" },
            ].map(({ label, href }) => (
              <Link key={label} href={href} passHref>
                <button className="px-4 sm:px-6 py-2 rounded-full bg-[#D4AC0D] text-[#1A5276] text-sm sm:text-lg font-semibold hover:bg-[#F7DC6F] transition duration-300 ease-in-out shadow-md w-full sm:w-auto">
                  {label}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Widget stays above everything */}
      <div className="relative z-20">
        <ChatWidget />
      </div>
    </>
  );
}
