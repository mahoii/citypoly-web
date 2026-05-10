import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement | City Poly High School",
  description:
    "Accessibility statement for City Polytechnic High School of Engineering, Architecture, and Technology.",
};

export default function AccessibilityPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-brand-light pb-20">
      <section className="w-full border-b border-brand-dark/10 bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <span className="mb-5 block font-mono text-xs font-bold uppercase tracking-widest text-brand-slate">
            City Polytechnic High School
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-brand-dark md:text-6xl">
            Accessibility Statement
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-brand-slate">
            We are working to make this website easier to access for people with
            disabilities, and will follow the Web Content Accessibility
            Guidelines 2.2 AA level.
          </p>
        </div>
      </section>

      <section className="w-full px-6 py-16">
        <div className="mx-auto max-w-4xl border border-brand-dark/10 bg-white p-8 shadow-sm">
          <h2 className="mb-5 text-2xl font-bold text-brand-dark">
            Need Assistance?
          </h2>
          <p className="mb-6 text-brand-slate leading-relaxed">
            We are committed to creating accessible digital experiences for all
            website visitors. If you need assistance with a particular page or
            document on our current site, please contact the school for
            assistance.
          </p>

          <dl className="grid gap-5 font-mono text-sm text-brand-dark">
            <div>
              <dt className="font-bold uppercase tracking-wide text-brand-slate">
                Phone
              </dt>
              <dd className="mt-1">
                <a href="tel:+17188751473" className="underline decoration-brand-primary decoration-2 underline-offset-4">
                  (718) 875-1473
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-bold uppercase tracking-wide text-brand-slate">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href="https://www.citypolyhs.org/apps/pages/index.jsp?uREC_ID=4453235&type=d&pREC_ID=2709691"
                  className="underline decoration-brand-primary decoration-2 underline-offset-4"
                >
                  Use the school contact page for general inquiries
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-bold uppercase tracking-wide text-brand-slate">
                Mailing Address
              </dt>
              <dd className="mt-1">
                City Polytechnic High School
                <br />
                105 Tech Place, 3rd Floor
                <br />
                Brooklyn, NY 11201
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
