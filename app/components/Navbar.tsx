"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-brand-dark/10 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* School Logo */}
        <Link href="/" className="flex flex-col">
          <img src='cplogo.png' alt='City Poly High School Logo' width='135'></img>
        </Link>
        
        {/* --- MOBILE HAMBURGER BUTTON --- */}
        <button 
          className="md:hidden flex flex-col gap-1.5 p-2 z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className={`w-6 h-0.5 bg-brand-dark transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-brand-dark transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-brand-dark transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>

        {/* --- DESKTOP NAVIGATION --- */}
        <div className="hidden md:flex items-center gap-8 text-sm font-mono font-bold text-brand-dark h-full">
          
          {/* Academics Dropdown */}
          <div className="relative group h-full flex items-center">
            <span className="hover:text-brand-primary transition-colors flex items-center gap-2 h-full cursor-pointer uppercase tracking-wide">
              Academics <span className="text-[10px]">▼</span>
            </span>
            
            <div className="absolute top-full left-0 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
              <div className="bg-white border border-brand-dark/10 border-t-2 border-t-brand-primary shadow-xl flex flex-col">
                <Link href="/eci" className="px-5 py-4 hover:bg-brand-light hover:text-brand-primary border-b border-brand-dark/5 transition-colors font-bold">
                  Early College (ECI)
                </Link>
                <Link href="/ptech" className="px-5 py-4 hover:bg-brand-light hover:text-brand-primary border-b border-brand-dark/5 transition-colors font-bold">
                  P-TECH Program
                </Link>
                <Link href="/portfolio" className="px-5 py-4 hover:bg-brand-light hover:text-brand-primary transition-colors font-bold">
                  Student Portfolios
                </Link>
              </div>
            </div>
          </div>

          <Link href="/admin" className="bg-brand-dark text-white px-4 py-2 hover:bg-brand-primary hover:text-brand-dark transition-all uppercase tracking-wide">
            Admin Hub
          </Link>
        </div>
      </div>

      {/* --- MOBILE DROPDOWN MENU --- */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-brand-dark/10 shadow-2xl overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-[400px] border-t" : "max-h-0 border-transparent"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-4 font-mono">
          <div className="text-xs font-bold text-brand-slate tracking-widest uppercase mb-2 border-b border-brand-dark/10 pb-2">Academics</div>
          <Link href="/eci" className="pl-4 font-bold text-lg text-brand-dark hover:text-brand-primary" onClick={() => setIsMobileMenuOpen(false)}>Early College (ECI)</Link>
          <Link href="/ptech" className="pl-4 font-bold text-lg text-brand-dark hover:text-brand-primary" onClick={() => setIsMobileMenuOpen(false)}>P-TECH Program</Link>
          <Link href="/portfolio" className="pl-4 font-bold text-lg text-brand-dark hover:text-brand-primary" onClick={() => setIsMobileMenuOpen(false)}>Student Portfolios</Link>
          
          <div className="w-full h-px bg-brand-dark/10 my-2"></div>
          
          <Link href="/admin" className="bg-brand-dark text-white text-center py-4 font-bold uppercase tracking-wide w-full" onClick={() => setIsMobileMenuOpen(false)}>
            Admin Hub
          </Link>
        </div>
      </div>
    </nav>
  );
}