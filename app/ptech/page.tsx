import Link from "next/link";
import { client } from "../../sanity/client";

type Milestone = {
  _id: string;
  title: string;
  gradeLevel: string;
  description: string;
};

export default async function PTechPage() {
  const query = `*[_type == "milestone"] {
    _id,
    title,
    gradeLevel,
    description
  }`;

  const rawMilestones = await client.fetch<Milestone[]>(query);
  const sortMap: Record<string, number> = {
    "9": 1,
    "10": 2,
    "11": 3,
    "12": 4,
    "13": 5,
    "14": 6,
  };
  const milestones = [...rawMilestones].sort(
    (a, b) => sortMap[a.gradeLevel] - sortMap[b.gradeLevel],
  );

  return (
    <main className="flex min-h-screen flex-col items-center pb-20 bg-brand-light">
      <section className="w-full py-16 px-6 max-w-4xl mx-auto border-b border-brand-dark/10 mb-12">
        <Link
          href="/"
          className="text-brand-slate font-mono text-sm hover:text-brand-dark transition-colors mb-8 inline-block"
        >
          &lt;- BACK TO HOME
        </Link>
        <h1 className="text-4xl md:text-6xl font-bold text-brand-dark tracking-tight mb-4">
          The 9-14 <span className="text-brand-primary">P-TECH</span> Journey
        </h1>
        <p className="text-lg text-brand-slate">
          Track the exact academic and technical milestones our students conquer
          from freshman year to their Associate&apos;s Degree.
        </p>
      </section>

      <section className="w-full px-6 max-w-3xl mx-auto relative">
        <div className="absolute left-[39px] md:left-[50px] top-0 bottom-0 w-0.5 bg-brand-dark/10" />

        <div className="flex flex-col gap-12">
          {milestones.length > 0 ? (
            milestones.map((milestone) => (
              <div
                key={milestone._id}
                className="relative flex items-start gap-6 md:gap-10 group"
              >
                <div className="relative z-10 flex-shrink-0 w-8 h-8 md:w-12 md:h-12 bg-white border-4 border-brand-primary rounded-full flex items-center justify-center font-bold font-mono text-brand-dark shadow-sm group-hover:bg-brand-primary transition-colors">
                  {milestone.gradeLevel}
                </div>

                <div className="flex-grow border border-brand-dark/10 bg-white p-6 hover:shadow-xl transition-all duration-300 translate-y-1">
                  <span className="text-xs font-mono font-bold tracking-wider text-brand-slate uppercase mb-2 block">
                    Year / Grade {milestone.gradeLevel}
                  </span>
                  <h3 className="text-2xl font-bold text-brand-dark mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-brand-slate leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="pl-16 py-8 text-brand-slate font-mono">
              Awaiting milestone data
            </div>
          )}
        </div>
      </section>

      <section className="w-full py-24 px-6 bg-[#004B87] text-white border-t-8 border-brand-primary relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">
          <span className="text-brand-primary font-mono font-bold tracking-widest text-sm mb-6 uppercase border border-brand-primary/50 px-4 py-1">
            Accelerate Your Future
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Interested in taking early college courses?
          </h2>

          <p className="text-xl md:text-2xl text-blue-100 mb-12 font-light max-w-2xl">
            Dual enroll with{" "}
            <strong className="text-white font-bold">City Tech </strong> and
            start earning your Associate&apos;s Degree for{" "}
            <span className="text-brand-primary font-bold underline decoration-4 underline-offset-4">
              free
            </span>
            .
          </p>

          <Link
            href="/eci"
            className="bg-brand-primary text-brand-dark font-bold font-mono text-lg px-8 py-4 hover:bg-white hover:text-[#004B87] transition-all shadow-xl hover:-translate-y-1 flex items-center gap-3"
          >
            EXPLORE ECI PATHWAYS <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
