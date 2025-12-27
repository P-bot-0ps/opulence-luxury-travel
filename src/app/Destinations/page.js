"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Destinations() {
  useEffect(() => {
    const destinations = [
      { id: "santorini-widget", city: "santorini" },
      { id: "paris-widget", city: "paris" },
      { id: "kyoto-widget", city: "kyoto" },
      { id: "capetown-widget", city: "capetown" },
      { id: "dubai-widget", city: "dubai" },
      { id: "newyork-widget", city: "newyork" },
    ];

    destinations.forEach(({ id, city }) => {
      const container = document.getElementById(id);
      if (container) {
        const script = document.createElement("script");
        script.src = `https://tpemd.com/content?trs=477718&shmarker=684257&locale=en&destination=${city}&border_radius=5&plain=true&powered_by=true&promo_id=2693&campaign_id=84`;
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
          Explore Our Destinations
        </h1>
        <p className="text-2xl max-w-3xl mx-auto text-[#5a4b4b]">
          From private safaris to alpine retreats, our destinations are curated
          for elegance, culture, and transformation.
        </p>
      </section>

      {/* Destination Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Santorini */}
          <div className="rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <Link href="/destinations/santorini">
              <Image
                src="/image/Santorini.jpg"
                alt="Santorini, Greece"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="p-4 bg-[#fdf6f0]">
              <h3 className="text-2xl font-playfair text-[#3b2f2f] mb-2">
                Santorini, Greece
              </h3>
              <p className="text-[#5a4b4b] text-xl">
                Sunsets, cliffside villas, and Mediterranean charm.
              </p>
              <div id="santorini-widget"></div>
            </div>
          </div>

          {/* Paris */}
          <div className="rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <Link href="/destinations/paris">
              <Image
                src="/image/eiffel-tower.jpg"
                alt="Paris, France"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="p-4 bg-[#fdf6f0]">
              <h3 className="text-2xl font-playfair text-[#3b2f2f] mb-2">
                Paris, France
              </h3>
              <p className="text-[#5a4b4b] text-xl">
                Eiffel Tower views, café culture, and timeless romance.
              </p>
              <div id="paris-widget"></div>
            </div>
          </div>

          {/* Kyoto */}
          <div className="rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <Link href="/destinations/kyoto">
              <Image
                src="/image/Japan.jpg"
                alt="Kyoto, Japan"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="p-4 bg-[#fdf6f0]">
              <h3 className="text-2xl font-playfair text-[#3b2f2f] mb-2">
                Kyoto, Japan
              </h3>
              <p className="text-[#5a4b4b] text-xl">
                Zen gardens, cherry blossoms, and ancient temples.
              </p>
              <div id="kyoto-widget"></div>
            </div>
          </div>

          {/* Cape Town */}
          <div className="rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <Link href="/destinations/capetown">
              <Image
                src="/image/capetown.jpg"
                alt="Cape Town, South Africa"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="p-4 bg-[#fdf6f0]">
              <h3 className="text-2xl font-playfair text-[#3b2f2f] mb-2">
                Cape Town, South Africa
              </h3>
              <p className="text-[#5a4b4b] text-xl">
                Coastal cliffs, vibrant culture, and safari gateways.
              </p>
              <div id="capetown-widget"></div>
            </div>
          </div>

          {/* Dubai */}
          <div className="rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <Link href="/destinations/dubai">
              <Image
                src="/image/dubai.jpg"
                alt="Dubai, UAE"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="p-4 bg-[#fdf6f0]">
              <h3 className="text-2xl font-playfair text-[#3b2f2f] mb-2">
                Dubai, UAE
              </h3>
              <p className="text-[#5a4b4b] text-xl">
                Luxury hotels, desert adventures, and futuristic skyline.
              </p>
              <div id="dubai-widget"></div>
            </div>
          </div>

          {/* New York City */}
          <div className="rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <Link href="/destinations/newyork">
              <Image
                src="/image/liberty.jpg"
                alt="New York City, USA"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="p-4 bg-[#fdf6f0]">
              <h3 className="text-2xl font-playfair text-[#3b2f2f] mb-2">
                New York City, USA
              </h3>
              <p className="text-[#5a4b4b] text-xl">
                Broadway shows, Central Park, and iconic skyline views.
              </p>
              <div id="newyork-widget"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#f7f1e8] py-16 px-6 text-center">
        <h2 className="text-5xl font-playfair text-[#3b2f2f] mb-4">
          Elegant Travel
        </h2>
        <p className="text-2xl text-[#5a4b4b] max-w-3xl mx-auto mb-6">
          Nothing but the best! Let the fun begin, grab that chance and book
          your next trip.
        </p>
        <Link
          href="/Contact"
          className="inline-block bg-[#a67c52] text-white text-2xl px-10 py-3 rounded-full hover:bg-[#8c6239] transition"
        >
          Book Now
        </Link>
      </section>
    </main>
  );
}
