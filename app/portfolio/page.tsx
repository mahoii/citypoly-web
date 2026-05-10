import Link from "next/link";
import { client } from "../../sanity/client";

type Project = {
  _id: string;
  title: string;
  studentName?: string;
  category?: string;
  description?: string;
  imageUrl?: string;
};

export default async function PortfolioPage() {
  const query = `*[_type == "portfolio"] | order(_createdAt desc) {
    _id,
    title,
    studentName,
    category,
    description,
    "imageUrl": mainImage.asset->url
  }`;

  const projects = await client.fetch<Project[]>(query);

  return (
    <main className="flex min-h-screen flex-col items-center pb-20 bg-brand-light">
      <section className="w-full py-16 px-6 max-w-7xl mx-auto border-b border-brand-dark/10 mb-12">
        <Link
          href="/"
          className="text-brand-slate font-mono text-sm hover:text-brand-primary transition-colors mb-8 inline-block"
        >
          &lt;- BACK_TO_HOME
        </Link>
        <h1 className="text-4xl md:text-6xl font-bold text-brand-dark tracking-tight mb-4">
          Student <span className="text-brand-primary">Portfolios</span>
        </h1>
        <p className="text-lg text-brand-slate max-w-2xl">
          Showcasing the technical prowess and creative problem-solving of City
          Poly&apos;s engineering and architecture students.
        </p>
      </section>

      <section className="w-full px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div
                key={project._id}
                className="group bg-white border border-brand-dark/10 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="w-full h-64 overflow-hidden relative bg-gray-100">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-mono text-sm text-brand-slate">
                      No image data
                    </div>
                  )}
                  {project.category && (
                    <div className="absolute top-4 right-4 bg-brand-primary text-brand-dark text-xs font-bold font-mono px-3 py-1 shadow-sm">
                      {project.category}
                    </div>
                  )}
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-brand-dark mb-1">
                    {project.title}
                  </h3>
                  {project.studentName && (
                    <p className="text-sm font-mono text-brand-primary mb-4">
                      By: {project.studentName}
                    </p>
                  )}
                  {project.description && (
                    <p className="text-sm text-brand-slate line-clamp-3">
                      {project.description}
                    </p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center border-2 border-dashed border-brand-dark/20 text-brand-slate font-mono">
              No portfolio projects found
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
