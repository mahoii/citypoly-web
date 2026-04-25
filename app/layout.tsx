import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "City Poly High School | Engineering & Architecture",
  description: "Official portal for City Polytechnic High School of Engineering, Architecture, and Technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-brand-light">
        <Navbar />
        {children}
        <footer className="w-full py-12 border-t border-brand-dark/10 bg-white mt-auto">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xs font-mono text-brand-slate">
              <strong>© 2026 CITY POLYTECHNIC HIGH SCHOOL // 105 TECH PLACE // BROOKLYN, NY</strong>
            </div>
            <div className="flex gap-6 text-xs font-mono font-bold text-brand-dark">
              <span><a href='https://www.instagram.com/citypolyhs/'>INSTAGRAM</a></span>
              <span><a href='https://www.youtube.com/channel/UCiX_rGiHz04qiIwGKIR5fZg'>YOUTUBE</a></span>
              <span><a href='https://www.facebook.com/CityPolytechnicHS/'>FACEBOOK</a></span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}