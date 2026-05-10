import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "City Poly High School | Engineering & Architecture",
  description:
    "Official portal for City Polytechnic High School of Engineering, Architecture, and Technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-brand-light">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand-primary focus:px-4 focus:py-3 focus:font-mono focus:text-sm focus:font-bold focus:text-brand-dark"
        >
          Skip to main content
        </a>
        <Navbar />
        <div id="main-content">{children}</div>
        <footer className="w-full py-12 border-t border-brand-dark/10 bg-white mt-auto">
          <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-center">
            <a
              href="https://www.schools.nyc.gov"
              className="inline-flex justify-self-start"
              aria-label="NYC Public Schools family website"
            >
              <Image
                src="/nycps.png"
                alt="New York City Public Schools logo"
                width={130}
                height={97}
                className="h-auto w-[130px] object-contain"
              />
            </a>

            <div className="text-xs font-mono text-brand-slate">
              <strong className="block text-brand-dark">
                (c) 2026 City Polytechnic High School
              </strong>
              <span className="block mt-2">
                105 Tech Place, 3rd Floor, Brooklyn, NY 11201
              </span>
              <span className="block mt-1">Phone: (718) 875-1473</span>
              <Link
                href="/accessibility"
                className="mt-3 inline-block font-bold text-brand-dark underline decoration-brand-primary decoration-2 underline-offset-4 hover:text-brand-primary"
              >
                Accessibility Statement
              </Link>
            </div>

            <div className="flex flex-wrap gap-5 text-xs font-mono font-bold text-brand-dark md:justify-end">
              <a
                href="https://www.instagram.com/citypolyhs/"
                className="hover:text-brand-primary"
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/channel/UCiX_rGiHz04qiIwGKIR5fZg"
                className="hover:text-brand-primary"
              >
                YouTube
              </a>
              <a
                href="https://www.facebook.com/CityPolytechnicHS/"
                className="hover:text-brand-primary"
              >
                Facebook
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
