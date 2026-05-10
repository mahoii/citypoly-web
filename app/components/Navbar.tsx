"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const academicLinks = [
  { href: "/eci", label: "Early College (ECI)" },
  { href: "/ptech", label: "P-TECH Program" },
  { href: "/academics/work-based-learning", label: "Work-Based Learning" },
  { href: "/portfolio", label: "Student Portfolios" },
];

const aboutLinks = [
  { href: "/about/about-city-poly", label: "About City Poly" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsAcademicsOpen(false);
    setIsAboutOpen(false);
  };

  return (
    <nav className="w-full border-b border-brand-dark/10 bg-white sticky top-0 z-50" aria-label="Primary navigation">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex flex-col" onClick={closeMenus}>
          <Image
            src="/cplogo.png"
            alt="City Poly High School logo"
            width={135}
            height={90}
            priority
            className="h-auto w-[135px] object-contain"
          />
        </Link>

        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2 z-50 relative"
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
          aria-label="Toggle menu"
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span
            aria-hidden="true"
            className={`w-6 h-0.5 bg-brand-dark transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            aria-hidden="true"
            className={`w-6 h-0.5 bg-brand-dark transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            aria-hidden="true"
            className={`w-6 h-0.5 bg-brand-dark transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>

        <div className="hidden md:flex items-center gap-8 text-sm font-mono font-bold text-brand-dark h-full">
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => {
              setIsAcademicsOpen(true);
              setIsAboutOpen(false);
            }}
            onMouseLeave={() => setIsAcademicsOpen(false)}
          >
            <button
              type="button"
              className="hover:text-brand-primary transition-colors flex items-center gap-2 h-full uppercase tracking-wide"
              onClick={() => {
                setIsAcademicsOpen((isOpen) => !isOpen);
                setIsAboutOpen(false);
              }}
              aria-expanded={isAcademicsOpen}
              aria-controls="academics-menu"
            >
              Academics <span aria-hidden="true" className="text-[10px]">v</span>
            </button>

            <div
              id="academics-menu"
              className={`absolute top-full left-0 w-64 transition-all duration-200 ${
                isAcademicsOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <div className="bg-white border border-brand-dark/10 border-t-2 border-t-brand-primary shadow-xl flex flex-col">
                {academicLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-5 py-4 hover:bg-brand-light hover:text-brand-primary border-b border-brand-dark/5 transition-colors font-bold last:border-b-0"
                    onClick={closeMenus}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => {
              setIsAboutOpen(true);
              setIsAcademicsOpen(false);
            }}
            onMouseLeave={() => setIsAboutOpen(false)}
          >
            <button
              type="button"
              className="hover:text-brand-primary transition-colors flex items-center gap-2 h-full uppercase tracking-wide"
              onClick={() => {
                setIsAboutOpen((isOpen) => !isOpen);
                setIsAcademicsOpen(false);
              }}
              aria-expanded={isAboutOpen}
              aria-controls="about-menu"
            >
              About Us <span aria-hidden="true" className="text-[10px]">v</span>
            </button>

            <div
              id="about-menu"
              className={`absolute top-full left-0 w-64 transition-all duration-200 ${
                isAboutOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <div className="bg-white border border-brand-dark/10 border-t-2 border-t-brand-primary shadow-xl flex flex-col">
                {aboutLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-5 py-4 hover:bg-brand-light hover:text-brand-primary border-b border-brand-dark/5 transition-colors font-bold last:border-b-0"
                    onClick={closeMenus}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/admin"
            className="bg-brand-dark text-white px-4 py-2 hover:bg-brand-primary hover:text-brand-dark transition-all uppercase tracking-wide"
            onClick={closeMenus}
          >
            Admin Hub
          </Link>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-brand-dark/10 shadow-2xl overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-[640px] border-t" : "max-h-0 border-transparent"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-4 font-mono">
          <div className="text-xs font-bold text-brand-slate tracking-widest uppercase mb-2 border-b border-brand-dark/10 pb-2">
            Academics
          </div>
          {academicLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="pl-4 font-bold text-lg text-brand-dark hover:text-brand-primary"
              onClick={closeMenus}
            >
              {item.label}
            </Link>
          ))}

          <div className="text-xs font-bold text-brand-slate tracking-widest uppercase mb-2 border-b border-brand-dark/10 pb-2">
            About Us
          </div>
          {aboutLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="pl-4 font-bold text-lg text-brand-dark hover:text-brand-primary"
              onClick={closeMenus}
            >
              {item.label}
            </Link>
          ))}

          <div className="w-full h-px bg-brand-dark/10 my-2" />

          <Link
            href="/admin"
            className="bg-brand-dark text-white text-center py-4 font-bold uppercase tracking-wide w-full"
            onClick={closeMenus}
          >
            Admin Hub
          </Link>
        </div>
      </div>
    </nav>
  );
}
