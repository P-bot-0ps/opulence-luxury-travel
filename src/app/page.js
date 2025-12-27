"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="text-center py-12">
        <Hero />
      </section>

      {/* ChatWidget floats freely */}
      <ChatWidget />
    </>
  );
}
