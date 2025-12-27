import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Travel With Opulence</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="bg-gradient-to-br from-[#fdf6f0] to-[#f7f1e8] text-gray-800 font-inter">
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-5xl font-playfair font-bold text-center text-[#3b2f2f] mb-6">
            About Us
          </h1>

          {/* Fade-in Video + CTA */}
          <div className="opacity-100 animate-fade-in delay-300 flex flex-col items-center">
            <video
              src="/brand-prompt.mp4"
              controls
              playsInline
              className="w-full max-w-4xl h-[500px] object-contain rounded-xl shadow-lg"
            />

            <Link
              href="/Contact"
              className="mt-6 bg-[#a67c52] text-white px-6 py-3 rounded-full hover:bg-[#8c6239] transition duration-300 ease-in-out font-semibold"
            >
              Book a Free Consultation
            </Link>
          </div>

          <p className="text-center text-2xl max-w-5xl mx-auto text-[#5a4b4b] mt-10">
            <br /> At{" "}
            <span className="font-semibold text-[#a67c52]">
              Travel With Opulence
            </span>{" "}
            our mission is to help people access global experiences with ease
            and style. We believe travel should be seamless, luxurious, and
            deeply personal. Beyond leisure, we proudly support students in
            applying to overseas universities and empower jobseekers to pursue
            careers in hospitality—whether aboard cruise ships, in luxury
            hotels, or on private yachts.
          </p>
        </section>

        <section className="bg-white py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-playfair text-[#3b2f2f] mb-4">
              Our Story
            </h2>
            <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
              <Image
                src="/image/rest.jpg"
                alt="Founder with passport"
                width={400}
                height={400}
                className="rounded-lg"
              />
              <p className="text-[#5a4b4b] leading-relaxed text-2xl">
                It all began with a passport, a dream, and a frustrating
                layover. After years of navigating the chaos of international
                travel, I realized something was missing: grace. I created{" "}
                <span className="font-semibold text-[#a67c52]">
                  Travel With Opulence
                </span>{" "}
                to redefine what it means to explore the world—not just
                destinations, but curated elegance. Today, our vision extends
                beyond leisure. We guide students toward global education
                opportunities and help jobseekers launch careers in luxury
                hospitality—from five-star hotels to cruise ships and private
                yachts. Because true opulence isn’t just about where you go—it’s
                about how you grow.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#fdf6f0] py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-playfair text-[#3b2f2f] mb-4">
              Why Trust Us
            </h2>
            <ul className="space-y-6 text-[#5a4b4b] text-xl">
              <li>
                <div className="flex items-center gap-4">
                  <p>
                    <Image
                      src="/logos.svg"
                      alt="Happy couple testimonial"
                      width={600}
                      height={100}
                      className="rounded-full"
                    />
                    <strong className="text-[#a67c52] text-xl">
                      🌟 Testimonials:
                    </strong>{" "}
                    “Travel With Opulence turned our honeymoon into a cinematic
                    experience.” — Jasmine & Malik
                  </p>
                </div>
              </li>
              <li>
                <strong className="text-[#a67c52] text-xl">
                  🏆 Success Stories:
                </strong>
                <p>
                  Over 2,000 travelers across 40+ countries. Bespoke itineraries
                  for CEOs, artists, and diplomats.
                </p>
              </li>
              <li>
                <strong className="text-[#a67c52] text-xl">
                  🛡️ Affiliations & Certifications:
                </strong>
                <p>
                  Virtuoso® member, IATA certified, Forbes Travel Guide
                  affiliate, and more.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-[#e8ded1] py-20 px-6 text-center">
          <h2 className="text-5xl font-playfair text-[#3b2f2f] mb-4">
            Let us Redefine Your Journey
          </h2>
          <p className="text-2xl text-[#5a4b4b] max-w-5xl mx-auto mb-6">
            Whether you are dreaming of a private safari, applying to a
            university abroad, or seeking a career aboard a luxury yacht,{" "}
            <span className="font-semibold text-[#a67c52]">
              Travel With Opulence
            </span>{" "}
            is your passport to the extraordinary. We offer curated destination
            suggestions, personalized student application support, and job
            placement guidance in elite hospitality settings—because your
            journey deserves more than just a ticket.
          </p>
          <a
            href="/Contact"
            className="inline-block bg-[#a67c52] text-white px-6 py-3 rounded-full hover:bg-[#8c6239] transition"
          >
            Start Your Journey
          </a>
        </section>
      </main>
    </>
  );
}
