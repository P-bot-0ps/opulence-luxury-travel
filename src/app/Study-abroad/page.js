"use client";

import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const programs = [
    {
      country: "Italy",
      description: "Study in Rome and Florence with top universities.",
    },
    {
      country: "United Kingdom",
      description: "Explore London while earning credits abroad.",
    },
    {
      country: "Australia",
      description:
        "Experience Sydney and Melbourne with world-class education.",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredPrograms = programs.filter((program) =>
    program.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const suggestions = programs
    .map((program) => program.country)
    .filter((country) =>
      country.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

  return (
    <main className="bg-gradient-to-br from-[#fdf6f0] to-[#f7f1e8] text-gray-800 font-inter">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-playfair text-[#3b2f2f] mb-4">
          🌍 Study Abroad Opportunities
        </h1>
        <p className="text-2xl max-w-3xl mx-auto text-[#5a4b4b]">
          Discover programs around the world and take the next step toward your
          global education journey.
        </p>
        <img
          src="/image/study.jpg"
          alt="Study Abroad"
          loading="lazy"
          className="mx-auto mt-8 rounded-xl shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto"
        />
      </section>

      {/* Search Section */}
      <section className="py-10 px-6 bg-white text-center relative">
        <h2 className="text-3xl font-playfair text-[#1A5276] mb-4">
          🔎 Search for a Country
        </h2>
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Enter a country..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowSuggestions(true);
            }}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#32a8dd]"
          />
          {showSuggestions && searchTerm && suggestions.length > 0 && (
            <ul className="absolute left-0 right-0 bg-white border border-gray-300 rounded-lg mt-1 shadow-lg z-10 max-h-60 overflow-y-auto">
              {suggestions.map((country) => (
                <li
                  key={country}
                  onClick={() => {
                    setSearchTerm(country);
                    setShowSuggestions(false);
                  }}
                  className="px-4 py-2 cursor-pointer hover:bg-[#fdf6f0]"
                >
                  {country}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredPrograms.length > 0 ? (
            filteredPrograms.map((program) => (
              <div
                key={program.country}
                className="rounded-xl shadow-xl bg-[#fdf6f0] p-6 hover:scale-105 transition-transform duration-300"
              >
                <h2 className="text-3xl font-playfair text-[#1A5276] mb-4">
                  {program.country}
                </h2>
                <p className="text-[#5a4b4b] mb-6">{program.description}</p>

                <Link href="/Contact">
                  <button className="bg-[#32a8dd] text-white px-6 py-2 rounded-full hover:bg-[#1A5276] transition">
                    Get Consultation
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-lg text-center col-span-2">
              No programs found for "{searchTerm}".
            </p>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#f7f1e8] py-16 px-6 text-center">
        <h2 className="text-4xl font-playfair text-[#3b2f2f] mb-4">
          ✨ Your Future Awaits
        </h2>
        <p className="text-xl text-[#5a4b4b] max-w-3xl mx-auto mb-6">
          Take the leap and explore new horizons. Education abroad opens doors
          to endless opportunities.
        </p>
        <a
          href="/Contact"
          className="inline-block bg-[#a67c52] text-white text-2xl px-10 py-3 rounded-full hover:bg-[#8c6239] transition"
        >
          Get Guidance
        </a>
        <img
          src="/image/job.jpg"
          alt="Career Opportunities"
          loading="lazy"
          className="mx-auto mt-8 rounded-xl shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto"
        />
      </section>
    </main>
  );
}
