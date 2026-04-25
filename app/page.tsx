import { client } from '../sanity/client';
import Link from 'next/link';
import HeroSlideshow from './components/HeroSlideshow'; // Restored your import!

export default async function HomePage() {
  
  const query = `*[_type == "announcement"] | order(_createdAt desc) {
    _id,
    title,
    date,
    tag,
    "slug": slug.current
  }`;

  const announcements = await client.fetch(query);

  return (
    <main className="flex min-h-screen flex-col items-center pb-20">
      
      {/* --- HERO SECTION --- */}
      <section className="w-full py-16 px-6 max-w-7xl mx-auto border-b border-brand-dark/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start">
            <h1 className="text-5xl md:text-7xl font-bold text-brand-dark tracking-tight mb-6 leading-tight">
              Engineer Your <br />
              <span className="relative inline-block">
                <span className="absolute bottom-2 left-0 w-full h-1/2 bg-brand-primary -z-10"></span>
                Future.
              </span>
            </h1>
            <p className="text-xl text-brand-slate max-w-lg mb-10">
              City Polytechnic High School of Engineering, Architecture, and Technology. 
              Building the next generation of innovators in downtown Brooklyn.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/ptech" className="bg-brand-primary text-brand-dark font-bold font-mono text-sm px-6 py-3 border-2 border-brand-primary hover:shadow-lg transition-all inline-block">
                EXPLORE P-TECH
              </Link>
              <Link href="/portfolio" className="bg-transparent text-brand-dark font-bold font-mono text-sm px-6 py-3 border-2 border-brand-dark hover:bg-brand-dark hover:text-brand-light transition-all inline-block">
                STUDENT PORTFOLIOS
              </Link>
            </div>
          </div>
          <div className="w-full h-80 lg:h-full min-h-[400px] relative bg-gray-100 border border-brand-dark/10 overflow-hidden">
             {/* --- RESTORED SLIDESHOW --- */}
             <HeroSlideshow />
          </div>
        </div>
      </section>

      {/* --- LATEST EVENTS FEED --- */}
      <section className="w-full pt-16 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10 border-b border-brand-dark/10 pb-4">
          <h2 className="text-3xl font-bold text-brand-dark">Latest Events</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {announcements.length > 0 ? (
            announcements.map((post: any) => (
              <Link 
                href={post.slug ? `/news/${post.slug}` : '#'} 
                key={post._id} 
                className="group border border-brand-dark/10 p-6 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col min-h-[200px]"
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-mono font-bold tracking-wider text-brand-dark bg-brand-primary px-3 py-1">
                    {post.tag}
                  </span>
                  <span className="text-xs font-mono text-brand-slate font-bold">
                    {post.date}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-brand-dark leading-snug group-hover:text-brand-primary transition-colors flex-grow">
                  {post.title}
                </h3>
                
                <div className="mt-6 pt-4 border-t border-brand-dark/10 flex justify-between items-center text-xs font-mono text-brand-slate">
                  <span>READ_ARTICLE</span>
                  <span className="group-hover:translate-x-2 transition-transform font-bold text-brand-primary">→</span>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-12 text-center border-2 border-dashed border-brand-dark/20 text-brand-slate font-mono">
              // NO_EVENTS_FOUND
            </div>
          )}

        </div>
      </section>

    </main>
  );
}