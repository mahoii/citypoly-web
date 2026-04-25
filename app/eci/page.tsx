import Link from 'next/link';
import PathwaySlideshow from '../components/PathwaySlideshow';

const architectureImages = [
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200", 
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200", 
  "https://plus.unsplash.com/premium_photo-1661335257817-4552acab9656?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJjaGl0ZWN0fGVufDB8fDB8fHww", 
];

const civilImages = [
  "https://www.elcamino.edu/academics/areas-of-study/images/engineering-technology.jpg", 
  "https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&q=80&w=1200", 
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200", 
];

const constructionImages = [
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200", 
  "consmang.jpg", 
  "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&q=80&w=1200", 
];

export default function ECIPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      
      {/* --- HERO SECTION --- */}
      <section className="w-full py-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center border-b border-brand-dark/10">
        
        {/* --- NEW LOGO LOCKUP --- */}
        {/* Fixed: Reduced gap and padding on mobile, expands on md screens and larger */}
        <div className="flex items-center justify-center gap-4 md:gap-10 mb-8 bg-white px-4 py-6 md:px-14 md:py-9 border border-brand-dark/10 shadow-sm w-full md:w-auto rounded-sm">
          
          {/* City Poly Logo */}
          <div className="relative flex items-center justify-center">
            {/* Fixed: Removed hardcoded HTML width, used Tailwind responsive widths */}
            <img 
              src="cplogo.png" 
              alt="City Poly Logo" 
              className="w-20 md:w-[130px] object-contain"
            />
          </div>

          {/* The Plus Sign */}
          <span className="text-xl md:text-3xl text-brand-slate/30 font-dark">+</span>

          {/* City Tech Logo */}
          <div className="flex flex-col items-center justify-center">
             <a href='https://www.citytech.cuny.edu/'>
               {/* Fixed: Removed hardcoded HTML width, used Tailwind responsive widths */}
               <img 
                 src='citytechlogo.jpg' 
                 alt="City Tech Logo"
                 className="w-28 md:w-[180px] object-contain" 
               />
             </a>
          </div>

        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-brand-dark tracking-tight mb-6">
          Early College <span className="text-[#004B87]">Initiative</span>
        </h1>
        <p className="text-xl text-brand-slate max-w-3xl mb-10 leading-relaxed">
          Through our partnership with <strong className="text-brand-dark"><a href='https://www.citytech.cuny.edu/'>New York City College of Technology (City Tech)</a></strong>, 
          City Poly students don't just prepare for college—they experience it. Earn tuition-free college credits and an Associates Degree 
          while completing your high school diploma across three specialized pathways.
        </p>
      </section>

      {/* --- PATHWAY 1: ARCHITECTURE --- */}
      <section className="w-full py-24 px-6 bg-white border-b border-brand-dark/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 h-80 bg-gray-100 border border-brand-dark/10 relative overflow-hidden group">
            <PathwaySlideshow images={architectureImages} />
          </div>
          <div className="order-1 lg:order-2 flex flex-col items-start">
            <span className="text-5xl font-bold font-mono text-brand-primary/90 mb-4">01</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">Architecture</h2>
            <p className="text-lg text-brand-slate mb-6">
              Transform concepts into reality. Students in this pathway master design principles, 3D modeling, and architectural history, using industry-standard tools to draft residential and commercial structures.
            </p>
            <ul className="space-y-3 font-mono text-sm text-brand-dark font-bold">
              <li className="flex items-center gap-3"><span className="text-brand-primary">■</span> Architectural Drafting</li>
              <li className="flex items-center gap-3"><span className="text-brand-primary">■</span> Building Technology</li>
              <li className="flex items-center gap-3"><span className="text-brand-primary">■</span> Computer-Aided Design (CAD)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- PATHWAY 2: CIVIL ENGINEERING --- */}
      <section className="w-full py-24 px-6 bg-brand-gray text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-start">
            <span className="text-5xl font-bold font-mono text-brand-primary/90 mb-4">02</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">Civil Engineering Tech</h2>
            <p className="text-lg text-brand-slate mb-6">
              Design the infrastructure of tomorrow. This pathway dives deep into the mathematics and physics required to construct bridges, highways, and public works safely and sustainably.
            </p>
            <ul className="space-y-3 font-mono text-sm text-black font-bold">
              <li className="flex items-center gap-3"><span className="text-brand-primary">■</span> Structural Analysis</li>
              <li className="flex items-center gap-3"><span className="text-brand-primary">■</span> Surveying & Topography</li>
              <li className="flex items-center gap-3"><span className="text-brand-primary">■</span> Materials Testing</li>
            </ul>
          </div>
          <div className="h-80 bg-black/50 border border-white/10 relative overflow-hidden group">
            <PathwaySlideshow images={civilImages} />
          </div>
        </div>
      </section>

      {/* --- PATHWAY 3: CONSTRUCTION MANAGEMENT --- */}
      <section className="w-full py-24 px-6 bg-brand-light bg-grid-pattern">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 h-80 bg-white border-3 border-brand-dark relative overflow-hidden shadow-2xl group">
             <PathwaySlideshow images={constructionImages} />
          </div>
          <div className="order-1 lg:order-2 flex flex-col items-start">
            <span className="text-5xl font-bold font-mono text-brand-primary/90 mb-4">03</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">Construction Management</h2>
            <p className="text-lg text-brand-slate mb-6">
              Lead from the ground up. Learn the critical business, leadership, and logistical skills required to oversee massive urban development projects from blueprint to grand opening.
            </p>
            <ul className="space-y-3 font-mono text-sm text-brand-dark font-bold">
              <li className="flex items-center gap-3"><span className="text-brand-primary">■</span> Project Estimating</li>
              <li className="flex items-center gap-3"><span className="text-brand-primary">■</span> Construction Law & Safety</li>
              <li className="flex items-center gap-3"><span className="text-brand-primary">■</span> Site Planning & Logistics</li>
            </ul>
          </div>
        </div>
      </section>

    </main>
  );
}