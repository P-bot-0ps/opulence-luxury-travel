"use client";
import Link from "next/link";

export default function GildedGlobetrotter() {
  return (
    <main className="bg-gradient-to-b from-[#fffaf0] to-[#fefefe] min-h-screen pt-24 px-6">
      {/* Page Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#5c3d2e] drop-shadow-lg">
          🗺️ Gilded Globetrotter
        </h1>
        <p className="text-xl text-[#6b4c3b] mt-4 max-w-2xl mx-auto">
          Your passport to opulent adventures, global education insights, and
          exclusive updates from Travel With Opulence.
        </p>
      </header>

      {/* Featured Updates */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            title: "✨ Studying in Santorini",
            description:
              "Explore how students blend hospitality studies with island life—sunsets, internships, and unforgettable culture.",
          },
          {
            title: "💼 Cruise Ship Internships",
            description:
              "Learn how Travel With Opulence helps students land internships aboard luxury cruise liners—training, travel, and transformation.",
          },
          {
            title: "🎓 Top 5 University Destinations",
            description:
              "From Lithuania to Bali, discover the best places to study luxury tourism and hospitality abroad.",
          },
        ].map((update, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 border border-[#f3e5ab] hover:scale-105 transition-transform"
          >
            <h2 className="text-2xl font-semibold text-[#5c3d2e] mb-2">
              {update.title}
            </h2>
            <p className="text-[#6b4c3b] text-md">{update.description}</p>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="text-center mt-16 mb-12">
        <h3 className="text-2xl font-semibold text-[#5c3d2e] mb-4">
          Want to be featured in Gilded Globetrotter?
        </h3>
        <Link
          href="/Contact"
          className="inline-block bg-gradient-to-r from-[#f9e4b7] to-[#e2cfa5] text-[#5c3d2e] text-xl px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
        >
          Share Your Story
        </Link>
      </section>
    </main>
  );
}
