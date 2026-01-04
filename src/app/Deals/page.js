"use client";
import { useState, useEffect } from "react";

export default function Deals() {
  const [activePlan, setActivePlan] = useState("basic");

  useEffect(() => {
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

  const renderPlanContent = () => {
    const button = (
      <a
        href="/Contact"
        className="inline-block mt-6 bg-[#D4AC0D] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#B7950B] transition"
      >
        Book This Plan
      </a>
    );

    switch (activePlan) {
      case "basic":
        return (
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#1A5276] mb-4">
              Basic Planning — $99
            </h3>
            <ul className="text-gray-700 space-y-3">
              <li>• 3 curated hotel suggestions in one destination</li>
              <li>• Best flight routes + cheapest fare windows</li>
              <li>• Transportation overview (airport → hotel)</li>
              <li>• You receive a clean plan — you book everything yourself</li>
            </ul>
            {button}
          </div>
        );

      case "works":
        return (
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#1A5276] mb-4">
              The Works — $299
            </h3>
            <ul className="text-gray-700 space-y-3">
              <li>• Everything in Basic Planning</li>
              <li>• 3 hotel options across two neighborhoods</li>
              <li>• Flight comparison (airlines, layovers, baggage rules)</li>
              <li>• Local transportation plan (metro, Uber, transfers)</li>
              <li>• 3–5 activity suggestions</li>
              <li>• A polished PDF itinerary</li>
            </ul>
            {button}
          </div>
        );

      case "full":
        return (
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#1A5276] mb-4">
              Full Service — $199
            </h3>
            <ul className="text-gray-700 space-y-3">
              <li>• Full booking done for you</li>
              <li>• 3 hotel options — we book your choice</li>
              <li>• Flight booking assistance</li>
              <li>• Transportation arranged</li>
              <li>• Concierge-style support</li>
              <li>• WhatsApp support during your trip</li>
            </ul>
            {button}
          </div>
        );
    }
  };

  return (
    <main className="bg-gradient-to-br from-[#fdf6f0] to-[#f7f1e8] text-gray-800 font-inter">
      {/* Planning Packs Section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-4xl font-playfair text-[#3b2f2f] mb-6">
          ✨ Travel Planning Packs
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <button
            onClick={() => setActivePlan("basic")}
            className={`px-6 py-2 rounded-full font-semibold ${
              activePlan === "basic"
                ? "bg-[#D4AC0D] text-white"
                : "bg-white text-gray-700 shadow"
            }`}
          >
            Basic Planning — $99
          </button>

          <button
            onClick={() => setActivePlan("works")}
            className={`px-6 py-2 rounded-full font-semibold ${
              activePlan === "works"
                ? "bg-[#D4AC0D] text-white"
                : "bg-white text-gray-700 shadow"
            }`}
          >
            The Works — $299
          </button>

          <button
            onClick={() => setActivePlan("full")}
            className={`px-6 py-2 rounded-full font-semibold ${
              activePlan === "full"
                ? "bg-[#D4AC0D] text-white"
                : "bg-white text-gray-700 shadow"
            }`}
          >
            Full Service — $199
          </button>
        </div>

        {/* Tab Content */}
        <div className="max-w-3xl mx-auto">{renderPlanContent()}</div>
      </section>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-playfair text-[#3b2f2f] mb-4">
          ✨ Unmissable Travel Deals
        </h1>
        <p className="text-2xl max-w-3xl mx-auto text-[#5a4b4b]">
          Hand‑picked offers on flights and hotels — curated for elegance,
          adventure, and savings.
        </p>

        <img
          src="/image/deal.png"
          alt="Travel deals"
          loading="lazy"
          className="mx-auto mt-8 rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover"
        />
      </section>

      {/* Deals Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
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

        <img
          src="/image/sale.jpg"
          alt="sales promotion"
          loading="lazy"
          className="mx-auto mt-8 rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover"
        />
      </section>
    </main>
  );
}
