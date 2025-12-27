import Image from "next/image";
import Link from "next/link";

export default function VisaHelpPage() {
  return (
    <main className="pt-[100px] bg-[#fffaf0] min-h-screen">
      {/* Hero Section with Image */}
      <section className="relative h-[500px]">
        <Image
          src="/image/passport.jpg"
          alt="Visa assistance travel imagery"
          width={1600}
          height={500}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold drop-shadow-xl text-center px-4">
            Visa Support Made Simple
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-3xl mx-auto text-center mt-12 px-4">
        <h2 className="text-2xl font-semibold text-[#5c3d2e] mb-4">
          Navigate Global Travel with Confidence
        </h2>
        <p className="text-[#6b4c3b] text-lg">
          Whether you are applying for a student visa, work permit, or travel
          documentation, Travel With Opulence offers personalized guidance every
          step of the way. We simplify the process so you can focus on your
          journey—not the paperwork.
        </p>
      </section>

      {/* Support Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12 px-4">
        {[
          { title: "Student Visas", icon: "🎓" },
          { title: "Work Permits", icon: "🧳" },
          { title: "Travel Documents", icon: "🌍" },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white shadow-lg rounded-xl p-6 text-center border border-[#f3e5ab] hover:scale-105 transition-transform"
          >
            <div className="text-4xl mb-2">{item.icon}</div>
            <h3 className="text-lg font-semibold text-[#5c3d2e]">
              {item.title}
            </h3>
          </div>
        ))}
      </section>

      {/* Testimonial */}
      <section className="max-w-4xl mx-auto mt-16 px-4">
        <h2 className="text-2xl font-semibold text-[#5c3d2e] mb-6 text-center">
          Real Support, Real Success
        </h2>
        <blockquote className="bg-[#fffaf0] p-6 rounded-xl shadow-md border-l-4 border-[#f9e4b7]">
          <p className="text-[#6b4c3b] italic">
            “I was overwhelmed by the visa process, but Travel With Opulence
            made it effortless. I’m now studying in Europe with full support.”
          </p>
          <footer className="mt-2 text-sm text-[#5c3d2e]">
            — Amina, Kenya
          </footer>
        </blockquote>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-16 mb-12">
        <h3 className="text-xl font-semibold text-[#5c3d2e] mb-4">
          Need Help With Your Visa?
        </h3>
        <Link
          href="/Contact"
          className="inline-block bg-gradient-to-r from-[#f9e4b7] to-[#e2cfa5] text-[#5c3d2e] px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
        >
          Contact Us Today
        </Link>
      </section>
    </main>
  );
}
