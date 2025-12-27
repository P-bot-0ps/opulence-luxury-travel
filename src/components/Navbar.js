// src/app/components/Navbar.js
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-[100px]">
        {/* 🔱 Logo + Brand Name */}
        <div className="flex items-center space-x-4 h-full">
          <Link href="/" className="flex items-center h-full">
            <div className="h-full flex items-center overflow-hidden">
              <Image
                src="/logos.svg"
                alt="Travel with Opulence"
                width={200}
                height={100}
                className="h-[100px] w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          </Link>

          <Link
            href="/"
            className="text-2xl font-playfair text-[#1A5276] font-bold"
          >
            Travel with Opulence
          </Link>
        </div>

        {/* 🌍 Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-[#1A5276] text-xl">
          <Link href="/Deals" className="hover:text-[#D4AC0D] transition">
            Deals
          </Link>
          <Link
            href="/Destinations"
            className="hover:text-[#D4AC0D] transition"
          >
            Destinations
          </Link>
          <Link
            href="/GildedGlobetrotter"
            className="hover:text-[#D4AC0D] transition"
          >
            Globetrotter blog
          </Link>
          <Link href="/Luxury-travel" className="hover:text-[#D4AC0D] transition">
            Luxury-travel
          </Link>
          <Link href="Study-abroad" className="hover:text-[#D4AC0D] transition">
            Study-Abroad
          </Link>
        </div>

        {/* 📱 Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#1A5276] focus:outline-none"
          >
            {isOpen ? (
              <i className="fas fa-times text-2xl"></i>
            ) : (
              <i className="fas fa-bars text-2xl"></i>
            )}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 text-[#1A5276] text-lg">
          <Link href="/Deals" className="block hover:text-[#D4AC0D] transition">
            Deals
          </Link>
          <Link
            href="/Destinations"
            className="block hover:text-[#D4AC0D] transition"
          >
            Destinations
          </Link>
          <Link
            href="/GildedGlobetrotter"
            className="block hover:text-[#D4AC0D] transition"
          >
            Globetrotter blog
          </Link>
          <Link
            href="/Signup"
            className="block hover:text-[#D4AC0D] transition"
          >
            Signup
          </Link>
          <Link href="/Login" className="block hover:text-[#D4AC0D] transition">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
