"use client";
import { useState, useEffect } from "react";
import Icon from "./icon";
import WidgetCarousel from "./WidgetCarousel";


const categories = [
  {
    key: "cruise",
    label: "Cruise Lines",
    icon: "cruise",
    deal: {
      title: "MSC, Carnival,Princess,Royal Caribbean Escape",
      description: "Luxury cruise to the Mediterranean",
      style: "heart",
    },
  },
  {
    key: "flight",
    label: "Flights",
    icon: "flight",
    deal: {
      title: "Emirates Business Class",
      description: "Save 25% to Dubai",
      style: "block",
    },
  },
  {
    key: "hotel",
    label: "Hotels",
    icon: "hotel",
    deal: {
      title: "Santorini Suites",
      description: "5 nights for 3",
      style: "plain",
    },
  },
  {
    key: "car",
    label: "Car Rentals",
    icon: "car",
    deal: {
      title: "Convertible in Monaco",
      description: "Drive the coast in style",
      style: "block",
    },
  },
  {
    key: "experience",
    label: "Experiences",
    icon: "experience",
    deal: {
      title: "Safari Adventure",
      description: "Book now, pay later",
      style: "heart",
    },
  },
];

export default function CategoryTabs({ onTabChange }) {
  const [active, setActive] = useState("cruise");
  const activeCategory = categories.find((cat) => cat.key === active);

  useEffect(() => {
    if (onTabChange && activeCategory?.deal) {
      onTabChange(activeCategory.deal);
    }
  }, [activeCategory, onTabChange]);

  return (
    <div className="w-full bg-white/70 backdrop-blur-md rounded-lg shadow-xl p-2">
      <h2 className="text-xl font-bold text-center text-[#1A5276] mb-6">
        🔍 Explore by Category
      </h2>

      {/* Horizontal Icon Tabs */}
      <div className="flex justify-center gap-6 mb-6 overflow-x-auto scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition ${
              active === cat.key
                ? "bg-[#D4AC0D] text-[#1A5276] shadow"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Icon name={cat.icon} />
            <span className="text-sm font-semibold">{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Optional: Category content */}
      <div className="text-center text-gray-700">
        <p className="text-sm font-semibold">{activeCategory.label}</p>
      </div>
      <WidgetCarousel categoryKey={active} />
    </div>
  );
}
