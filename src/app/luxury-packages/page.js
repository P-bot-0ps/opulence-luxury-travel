"use client";

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function LuxuryPackagesPage() {
  useEffect(() => {
    // Attach Travelpayouts widget after mount
    const container = document.getElementById("packages-widget");
    if (container) {
      const script = document.createElement("script");
      script.src =
        "https://tpemd.com/content?currency=usd&trs=477718&shmarker=684257&locale=en&category=4&amount=3&powered_by=true&campaign_id=137&promo_id=4497";
      script.async = true;
      script.charset = "utf-8";
      container.appendChild(script);
    }
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-100 via-indigo-100 to-teal-100">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/luxury-hero.mp4"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-6xl text-white font-bold text-center px-4">
            Curated Escapes for the Opulent Soul
          </h1>
        </div>
      </section>

      {/* Real-Time Deals Widget */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-12">
          ✨ Live Luxury Packages
        </h2>
        <p className="text-center text-xl text-gray-600 mb-8">
          Browse real‑time curated deals powered by our affiliate partners.
        </p>
        <div
          id="packages-widget"
          className="max-w-5xl mx-auto rounded-xl shadow-lg p-6 bg-[#fffaf0]"
        ></div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-12">
          What Our Travelers Say
        </h2>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="max-w-7xl mx-auto"
        >
          {[
            {
              quote:
                "“Our honeymoon in Santorini was beyond magical. Every detail was handled with care.”",
              name: "— Aisha & Malik",
              color: "from-pink-100 to-indigo-100",
              text: "text-pink-600",
            },
            {
              quote:
                "“The business retreat in Monaco helped me recharge and network in style.”",
              name: "— Jordan M.",
              color: "from-teal-100 to-indigo-100",
              text: "text-indigo-600",
            },
            {
              quote:
                "“Our girls’ trip to Tulum was unforgettable—luxury, adventure, and pure joy.”",
              name: "— The Fab Five",
              color: "from-yellow-100 to-pink-100",
              text: "text-yellow-600",
            },
          ].map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                className={`bg-gradient-to-br ${testimonial.color} p-6 rounded-xl shadow-lg`}
              >
                <p className="text-lg italic text-gray-700 mb-4">
                  {testimonial.quote}
                </p>
                <h4 className={`text-xl font-semibold ${testimonial.text}`}>
                  {testimonial.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* CTA */}
      <div className="text-center mt-12 pb-20">
        <a
          href="/Contact"
          className="inline-block bg-pink-600 text-white text-xl font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-pink-700 transition"
        >
          Book Your Escape Now
        </a>
      </div>
    </main>
  );
}
