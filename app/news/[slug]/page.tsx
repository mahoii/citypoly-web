import { client } from '../../../sanity/client';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';

// Notice we changed params to be a Promise!
export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  
  // 1. Unwrap the URL parameters first
  const resolvedParams = await params;
  const currentSlug = resolvedParams.slug;

  // 2. Fetch the exact article using the resolved slug
  const query = `*[_type == "announcement" && slug.current == $slug][0] {
    title,
    date,
    tag,
    "imageUrl": mainImage.asset->url,
    body
  }`;
  
  const post = await client.fetch(query, { slug: currentSlug });

  // 3. If someone types a bad URL, show a 404 message
  if (!post) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-brand-dark mb-4">404 - Article Not Found</h1>
        <Link href="/" className="text-brand-primary font-mono hover:underline">← Return Home</Link>
      </main>
    );
  }

  // 4. Render the dynamic template!
  return (
    <main className="flex min-h-screen flex-col items-center pb-20">
      <article className="w-full max-w-4xl mx-auto px-6 py-16">
        
        <Link href="/" className="text-brand-slate font-mono text-sm hover:text-brand-primary transition-colors mb-12 inline-block">
          ← BACK_TO_HOME
        </Link>

        {/* Tag & Date */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs font-mono font-bold tracking-wider text-brand-dark bg-brand-primary px-3 py-1">
            {post.tag}
          </span>
          <span className="text-sm font-mono text-brand-slate font-bold">
            {post.date}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-brand-dark tracking-tight mb-10 leading-tight">
          {post.title}
        </h1>

        {/* Optional Hero Image */}
        {post.imageUrl && (
          <div className="w-full h-[400px] mb-12 border border-brand-dark/10 bg-gray-100 overflow-hidden relative">
             <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}

        {/* The Rich Text Content */}
        <div className="prose prose-lg max-w-none text-brand-dark/80 marker:text-brand-primary prose-headings:text-brand-dark prose-a:text-brand-primary">
           {post.body ? (
             <PortableText value={post.body} />
           ) : (
             <p className="font-mono text-brand-slate">// END_OF_TRANSMISSION</p>
           )}
        </div>

      </article>
    </main>
  );
}