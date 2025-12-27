import Image from "next/image";
import Link from "next/link";

export default function WorkOverseasPage() {
  return (
    <main className="pt-[100px] bg-gradient-to-b from-[#fffaf0] to-[#fefefe] min-h-screen">
      {/* Hero Section with Image */}
      <section className="relative h-[400px]">
        <Image
          src="/image/waitress.jpg"
          alt="Luxury hospitality abroad"
          width={1600}
          height={400}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f9e4b7]/70 to-[#fffaf0]/70 flex items-center justify-center">
          <h1 className="text-[#5c3d2e] text-5xl font-bold drop-shadow-lg">
            Work Overseas in Style
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-3xl mx-auto text-center mt-12 px-4">
        <h2 className="text-4xl font-semibold text-[#5c3d2e] mb-4">
          Your Passport to Global Careers
        </h2>
        <p className="text-[#6b4c3b] text-2xl">
          Whether you are dreaming of working on a luxury cruise, in a five-star
          hotel, or at an exotic resort, Travel With Opulence helps you get
          there. We guide you through applications, training, and placement—so
          you can build a career that is as glamorous as your ambition.
        </p>
      </section>

      {/* Opportunity Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12 px-4">
        {[
          { title: "Cruise Ship Jobs", icon: "🚢" },
          { title: "Luxury Hotels", icon: "🏨" },
          { title: "Island Resorts", icon: "🏝️" },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white shadow-lg rounded-xl p-6 text-center border border-[#f3e5ab] hover:scale-105 transition-transform"
          >
            <div className="text-4xl mb-2">{item.icon}</div>
            <h3 className="text-xl font-semibold text-[#5c3d2e]">
              {item.title}
            </h3>
            {/* Consultation CTA */}
            <Link
              href={`/Contact?topic=${encodeURIComponent(item.title)}`}
              className="inline-block mt-4 bg-gradient-to-r from-[#f9e4b7] to-[#e2cfa5] text-[#5c3d2e] px-4 py-2 rounded-full font-medium hover:scale-105 transition-transform"
            >
              Get Consultation
            </Link>
          </div>
        ))}
      </section>

      {/* Testimonial */}
      <section className="max-w-4xl mx-auto mt-16 px-4">
        <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-6 text-center">
          Real Journeys, Real Impact
        </h2>
        <blockquote className="bg-[#fffaf0] p-6 rounded-xl shadow-md border-l-4 border-[#f9e4b7]">
          <p className="text-[#6b4c3b] italic">
            “I never imagined I’d be working on a luxury yacht in the
            Mediterranean. Travel With Opulence made it possible—from training
            to placement!”
          </p>
          <footer className="mt-2 text-sm text-[#5c3d2e]">
            — Carlos, Brazil
          </footer>
        </blockquote>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-16 mb-12">
        <h3 className="text-2xl font-semibold text-[#5c3d2e] mb-4">
          Ready to Launch Your Career Abroad?
        </h3>
        <Link
          href="/Contact"
          className="inline-block bg-gradient-to-r from-[#f9e4b7] to-[#e2cfa5] text-[#5c3d2e] text-2xl px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
        >
          Contact Us Today
        </Link>
      </section>
    </main>
  );
}
