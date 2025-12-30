"use client";

import { useEffect } from "react";

export default function Deals() {
  useEffect(() => {
    // Attach scripts after mount to avoid hydration mismatch
    const widgets = [
      {
        id: "flight-widget",
        src: "https://tpemd.com/content?currency=usd&trs=477718&shmarker=684257&show_hotels=true&powered_by=true&locale=en&searchUrl=www.aviasales.com%2Fsearch&primary_override=%2332a8dd&color_button=%2332a8dd&color_icons=%2332a8dd&dark=%23262626&light=%23FFFFFF&secondary=%23FFFFFF&special=%23C4C4C4&color_focused=%2332a8dd&border_radius=0&plain=false&promo_id=7879&campaign_id=100",
      },
      {
        id: "hotel-widget",
        src: "https://tpemd.com/content?trs=477718&shmarker=684257&locale=en&sustainable=false&deals=false&border_radius=5&plain=true&powered_by=true&promo_id=2693&campaign_id=84",
      },
    ];

    widgets.forEach(({ id, src }) => {
      const container = document.getElementById(id);
      if (container) {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.charset = "utf-8";
        container.appendChild(script);
      }
    });
  }, []);

  return (
    <main className="bg-gradient-to-br from-[#fdf6f0] to-[#f7f1e8] text-gray-800 font-inter">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-playfair text-[#3b2f2f] mb-4">
          ✨ Unmissable Travel Deals
        </h1>
        <p className="text-2xl max-w-3xl mx-auto text-[#5a4b4b]">
          Hand‑picked offers on flights and hotels — curated for elegance,
          adventure, and savings.
        </p>

        {/* Optimized Responsive Hero Image */}
        <img
          src="/image/deal.png"
          alt="Travel deals"
          loading="lazy"
          className="
    mx-auto mt-8 rounded-xl shadow-lg
    w-full
    max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
    h-auto object-cover
          "
        />
      </section>

      {/* Deals Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Flight Deals */}
          <div className="rounded-xl shadow-xl bg-[#fdf6f0] p-6 hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl font-playfair text-[#1A5276] mb-4">
              ✈️ Flight Deals
            </h2>
            <p className="text-[#5a4b4b] mb-6">
              Explore discounted fares to top destinations. Fly in style for
              less.
            </p>
            <div id="flight-widget" className="w-full"></div>
          </div>

          {/* Hotel Deals */}
          <div className="rounded-xl shadow-xl bg-[#fdf6f0] p-6 hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl font-playfair text-[#1A5276] mb-4">
              🏨 Hotel Deals
            </h2>
            <p className="text-[#5a4b4b] mb-6">
              Luxury stays at irresistible prices. From boutique villas to
              5‑star resorts.
            </p>
            <div id="hotel-widget" className="w-full"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#f7f1e8] py-16 px-6 text-center">
        <h2 className="text-4xl font-playfair text-[#3b2f2f] mb-4">
          Don’t Miss Out
        </h2>
        <p className="text-xl text-[#5a4b4b] max-w-3xl mx-auto mb-6">
          These deals won’t last forever. Book your next elegant escape today.
        </p>

        <a
          href="/Contact"
          className="inline-block bg-[#a67c52] text-white text-2xl px-10 py-3 rounded-full hover:bg-[#8c6239] transition"
        >
          Book Now
        </a>

        {/* Optimized Responsive CTA Image */}
        <img
          src="/image/sale.jpg"
          alt="sales promotion"
          loading="lazy"
          className="
    mx-auto mt-8 rounded-xl shadow-lg
    w-full
    max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
    h-auto object-cover
          "
        />
      </section>
    </main>
  );
}
