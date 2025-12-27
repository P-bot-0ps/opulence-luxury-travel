"use client";
import { useState, useEffect } from "react";

export default function WidgetCarousel({ categoryKey }) {
  const baseLinks = {
    flight: "https://aviasales.tpx.lt/rncs1eKv",
    cruise: "https://searadar.tpx.lt/HPqvCP3V",
    hotel: "https://tiqets.tpx.lt/ZgDy8dBa",
    car: "https://economybookings.tpx.lt/nWcYhHEf",
    yacht: "https://searadar.tpx.lt/HPqvCP3V",
  };

  const [link, setLink] = useState(baseLinks[categoryKey]);

  useEffect(() => {
    // Add tracking params client-side only
    if (categoryKey === "cruise" || categoryKey === "yacht") {
      const journeyId = crypto.randomUUID();
      setLink(`${baseLinks[categoryKey]}?trs=477718&journey_id=${journeyId}`);
    }
  }, [categoryKey]);

  if (!categoryKey) return null;

  const cardTitles = {
    flight: "✈️ Book a Flight",
    cruise: "🚢 Cruise Inquiry",
    hotel: "🏨 Book Attractions & Hotels",
    car: "🚗 Rent a Car",
    yacht: "⛵ Charter a Yacht",
  };

  const buttonLabels = {
    flight: "Search Flights",
    cruise: "Find Cruises",
    hotel: "Explore Hotels & Tickets",
    car: "Find Cars",
    yacht: "Book Yachts",
  };

  return (
    <div className="rounded-lg shadow-xl bg-white p-4 mb-4 transition transform hover:scale-[1.02]">
      <h3 className="text-lg font-bold mb-3 text-[#1A5276]">
        {cardTitles[categoryKey]}
      </h3>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#D4AC0D] text-white py-2 rounded-lg hover:bg-[#B7950B] block text-center font-semibold transition duration-300 ease-in-out"
      >
        {buttonLabels[categoryKey]}
      </a>
    </div>
  );
}
