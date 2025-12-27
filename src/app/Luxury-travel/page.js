"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LuxuryTravelPage() {
  useEffect(() => {
    // Attach affiliate widgets after mount
    const widgets = [
      {
        id: "flight-widget",
        src: "https://tpemd.com/content?trs=477718&shmarker=684257&locale=en&sustainable=false&deals=false&border_radius=5&plain=true&powered_by=true&promo_id=2693&campaign_id=84",
      },
      {
        id: "hotel-widget",
        src: "https://tpemd.com/content?currency=usd&trs=477718&shmarker=684257&show_hotels=true&powered_by=true&locale=en&searchUrl=www.aviasales.com%2Fsearch&primary_override=%2332a8dd&color_button=%2332a8dd&color_icons=%2332a8dd&dark=%23262626&light=%23FFFFFF&secondary=%23FFFFFF&special=%23C4C4C4&color_focused=%2332a8dd&border_radius=0&plain=false&promo_id=7879&campaign_id=100",
      },
      {
        id: "getyourguide-Paris",
        src: "https://tpemd.com/content?trs=477718&shmarker=684257&place=Paris&items=3&locale=en-US&powered_by=true&campaign_id=108&promo_id=4039",
      },
      {
        id: "getyourguide-Maldives",
        src: "https://tpemd.com/content?trs=477718&shmarker=684257&place=Maldives&items=3&locale=en-US&powered_by=true&campaign_id=108&promo_id=4039",
      },
      {
        id: "getyourguide-Kenya",
        src: "https://tpemd.com/content?trs=477718&shmarker=684257&place=Kenya&items=3&locale=en-US&powered_by=true&campaign_id=108&promo_id=4039",
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
    <main className="pt-[100px] bg-gradient-to-b from-[#fffaf0] to-[#fefefe] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="/image/window.jpg"
          alt="Luxury travel experience"
          width={1600}
          height={600}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <h1 className="text-white text-6xl md:text-7xl font-bold drop-shadow-xl text-center px-4">
            Discover the World in Style
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto text-center mt-16 px-4">
        <h2 className="text-4xl font-semibold text-[#5c3d2e] mb-6">
          Curated Journeys for the Sophisticated Explorer
        </h2>
        <p className="text-[#6b4c3b] text-xl md:text-2xl leading-relaxed">
          Travel With Opulence offers bespoke travel experiences—from private
          island escapes to luxury train adventures. We handle every detail so
          you can immerse yourself in elegance, culture, and unforgettable
          moments.
        </p>
      </section>

      {/* Destination Cards with GetYourGuide Affiliate Widgets */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16 px-4">
        <div className="bg-white shadow-lg rounded-xl p-8 text-center border border-[#f3e5ab] hover:scale-105 transition-transform">
          <div className="text-5xl mb-4">🗼</div>
          <h3 className="text-2xl font-semibold text-[#5c3d2e]">
            Paris & the Riviera
          </h3>
          <div id="getyourguide-Paris" className="mt-4 w-full"></div>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-8 text-center border border-[#f3e5ab] hover:scale-105 transition-transform">
          <div className="text-5xl mb-4">🌊</div>
          <h3 className="text-2xl font-semibold text-[#5c3d2e]">
            Maldives Retreat
          </h3>
          <div id="getyourguide-Maldives" className="mt-4 w-full"></div>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-8 text-center border border-[#f3e5ab] hover:scale-105 transition-transform">
          <div className="text-5xl mb-4">🦁</div>
          <h3 className="text-2xl font-semibold text-[#5c3d2e]">
            Safari in Style
          </h3>
          <div id="getyourguide-Kenya" className="mt-4 w-full"></div>
        </div>
      </section>

      {/* Exclusive Deals Section */}
      <section className="py-20 px-6 bg-white mt-20">
        <h2 className="text-4xl font-bold text-center text-[#5c3d2e] mb-12">
          ✨ Exclusive Travel Deals
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Flight Deals */}
          <div className="rounded-xl shadow-xl bg-[#fffaf0] p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-playfair text-[#1A5276] mb-4">
              ✈️ Flight Deals
            </h3>
            <p className="text-[#5a4b4b] mb-6">
              Explore discounted fares to top destinations. Fly in style for
              less.
            </p>
            <div id="flight-widget" className="w-full"></div>
          </div>

          {/* Hotel Deals */}
          <div className="rounded-xl shadow-xl bg-[#fffaf0] p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-playfair text-[#1A5276] mb-4">
              🏨 Hotel Deals
            </h3>
            <p className="text-[#5a4b4b] mb-6">
              Luxury stays at irresistible prices. From boutique villas to
              5‑star resorts.
            </p>
            <div id="hotel-widget" className="w-full"></div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="max-w-4xl mx-auto mt-20 px-4">
        <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-8 text-center">
          What Our Travelers Say
        </h2>
        <blockquote className="bg-[#fffaf0] p-8 rounded-xl shadow-md border-l-4 border-[#f9e4b7]">
          <p className="text-[#6b4c3b] italic text-lg md:text-xl leading-relaxed">
            “Every detail was flawless—from the private jet to the candlelit
            dinner in Santorini. Travel With Opulence redefined luxury for me.”
          </p>
          <footer className="mt-4 text-sm text-[#5c3d2e] text-right">
            — Isabella, Italy
          </footer>
        </blockquote>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-20 mb-16">
        <h3 className="text-3xl font-semibold text-[#5c3d2e] mb-6">
          Ready to Elevate Your Next Journey?
        </h3>
        <Link
          href="/Contact"
          className="inline-block bg-gradient-to-r from-[#f9e4b7] to-[#e2cfa5] text-[#5c3d2e] text-xl md:text-2xl px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform"
        >
          Contact Us Today
        </Link>
      </section>

      {/* Packages CTA */}
    <div className="bg-gradient-to-r from-pink-500 to-indigo-500 text-white text-center py-12 rounded-lg shadow-lg mt-12">
  <a
    href="/luxury-packages"
    className="text-2xl md:text-4xl font-bold hover:underline"
  >
    ✨ Explore Our Luxury Packages for Romance, Retreats & More →
  </a>
</div>
 </main> 
   );
}