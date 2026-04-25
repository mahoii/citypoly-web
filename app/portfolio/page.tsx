import { client } from '../../sanity/client';
import Link from 'next/link';

export default async function PortfolioPage() {
  
  // 1. The GROQ Query
  const query = `*[_type == "portfolio"] | order(_createdAt desc) {
    _id,
    title,
    studentName,
    category,
    description,
    "imageUrl": mainImage.asset->url
  }`;

  // 2. Fetch the data
  const projects = await client.fetch(query);

  return (
    <main className="flex min-h-screen flex-col items-center pb-20 bg-brand-light">
      
      {/* Header */}
      <section className="w-full py-16 px-6 max-w-7xl mx-auto border-b border-brand-dark/10 mb-12">
        <Link href="/" className="text-brand-slate font-mono text-sm hover:text-brand-primary transition-colors mb-8 inline-block">
          ← BACK_TO_HOME
        </Link>
        <h1 className="text-4xl md:text-6xl font-bold text-brand-dark tracking-tight mb-4">
          Student <span className="text-brand-primary">Portfolios</span>
        </h1>
        <p className="text-lg text-brand-slate max-w-2xl">
          Showcasing the technical prowess and creative problem-solving of City Poly's engineering and architecture students.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="w-full px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {projects.length > 0 ? (
            projects.map((project: any) => (
              <div key={project._id} className="group bg-white border border-brand-dark/10 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                
                {/* Image Container */}
                <div className="w-full h-64 overflow-hidden relative bg-gray-100">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-mono text-sm text-brand-slate">
                      // NO_IMAGE_DATA
                    </div>
                  )}
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-brand-primary text-brand-dark text-xs font-bold font-mono px-3 py-1 shadow-sm">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-brand-dark mb-1">{project.title}</h3>
                  <p className="text-sm font-mono text-brand-primary mb-4">
                    By: {project.studentName}
                  </p>
                  <p className="text-sm text-brand-slate line-clamp-3">
                    {project.description}
                  </p>
                </div>

              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center border-2 border-dashed border-brand-dark/20 text-brand-slate font-mono">
              // NO_PORTFOLIO_PROJECTS_FOUND
            </div>
          )}

        </div>
      </section>

    </main>
  );
}