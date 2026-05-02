import Link from "next/link";
import Image from "next/image";
import WBLOpportunitySlideshow from "../../components/WBLOpportunitySlideshow";

const coordinator = {
  name: "Shannon Samms-Lezama",
  role: "Partnership Coordinator",
  image: "/shannonwbl.jpg",
  initials: "SS",
  description:
    "The Work-Based Learning coordinator connects students with career-connected experiences that make the engineering, architecture, construction, and technology pathways feel real. That work includes building partner relationships, preparing students for professional settings, coordinating internships and site visits, and helping students reflect on the skills they are developing beyond the classroom.",
};

const opportunities = [
  {
    title: "Paid Internships",
    description:
      "Students apply classroom skills in professional settings while learning workplace communication, project ownership, and career expectations.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1400",
  },
  {
    title: "Career Site Visits",
    description:
      "Students step inside real workplaces, meet professionals, and see how design, transit, construction, operations, and technology teams solve problems.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1400",
  },
  {
    title: "Mentorship and Panels",
    description:
      "Industry mentors and guest speakers help students understand career pathways, professional habits, and the many routes into technical fields.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1400",
  },
  {
    title: "Workplace Challenges",
    description:
      "Partner-led projects give students authentic briefs, constraints, feedback cycles, and a chance to present solutions like emerging professionals.",
    image:
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=1400",
  },
];

const partnerLogos = [
  { name: "MTA", detail: "Transit internships and career exposure" },
  { name: "City Tech", detail: "Early college and pathway partner" },
  { name: "NYC Public Schools", detail: "Career-connected learning support" },
  { name: "NYC DYCD", detail: "Youth employment programs" },
  { name: "Industry Scholars", detail: "Internship readiness pathway" },
  { name: "WTS-GNY", detail: "Transportation career mentoring" },
];

const wblSteps = [
  "Resume, interview, and workplace-readiness coaching",
  "Professional panels, mentor conversations, and career day events",
  "Site visits, workplace challenges, and portfolio feedback",
  "Internship placement support and reflection after the experience",
];

export default function WorkBasedLearningPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-brand-light pb-20">
      <section className="w-full border-b border-brand-dark/10 bg-white px-6 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Link
              href="/"
              className="mb-8 inline-block font-mono text-sm text-brand-slate transition-colors hover:text-brand-primary"
            >
              &lt;- BACK TO HOME
            </Link>
            <span className="mb-5 block font-mono text-xs font-bold uppercase tracking-widest text-brand-slate">
              Academics / Career-Connected Learning
            </span>
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-brand-dark md:text-7xl">
              Work-Based <span className="text-brand-primary">Learning</span>
            </h1>
            <p className="max-w-3xl text-xl leading-relaxed text-brand-slate">
              City Poly students build career confidence through internships, mentorship,
              site visits, workplace challenges, and partner-led experiences connected to
              engineering, architecture, construction, technology, and public service.
            </p>
          </div>

          <div className="border border-brand-dark/10 bg-brand-gray p-6 shadow-xl">
            <div className="mb-5 grid grid-cols-2 gap-4 font-mono text-xs font-bold uppercase tracking-wider text-brand-slate">
              <div className="border border-brand-dark/10 bg-white p-4">
                <span className="block text-3xl text-brand-dark">100+</span>
                Career hours
              </div>
              <div className="border border-brand-dark/10 bg-white p-4">
                <span className="block text-3xl text-brand-dark">9-14</span>
                P-TECH model
              </div>
            </div>
            <p className="text-sm leading-relaxed text-brand-slate">
              Every touchpoint is designed to help students connect classroom learning to
              professional choices, industry expectations, and post-secondary goals.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="bg-white p-6 shadow-xl ring-1 ring-brand-dark/10">
            <div className="aspect-[4/5] w-full overflow-hidden bg-brand-dark">
              {coordinator.image ? (
                <Image
                  src={coordinator.image}
                  alt={coordinator.name}
                  width={720}
                  height={900}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-6 bg-brand-dark text-white">
                  <div className="flex h-32 w-32 items-center justify-center border-4 border-brand-primary font-mono text-5xl font-bold">
                    {coordinator.initials}
                  </div>
                  <Image
                    src="/cplogo.png"
                    alt="City Poly High School logo"
                    width={144}
                    height={96}
                    className="w-36 bg-white p-3"
                  />
                </div>
              )}
            </div>
          </div>

          <div>
            <span className="mb-4 block font-mono text-sm font-bold uppercase tracking-widest text-brand-primary">
              WBL Coordinator
            </span>
            <h2 className="mb-3 text-4xl font-bold text-brand-dark md:text-5xl">
              {coordinator.name}
            </h2>
            <p className="mb-8 font-mono text-sm font-bold uppercase tracking-wide text-brand-slate">
              {coordinator.role}
            </p>
            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-brand-slate">
              {coordinator.description}
            </p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {wblSteps.map((step, index) => (
                <div key={step} className="border border-brand-dark/10 bg-white p-5">
                  <span className="mb-3 block font-mono text-xs font-bold text-brand-primary">
                    0{index + 1}
                  </span>
                  <p className="font-bold leading-snug text-brand-dark">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 border-b border-brand-dark/10 pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-3 block font-mono text-sm font-bold uppercase tracking-widest text-brand-slate">
                Student Experiences
              </span>
              <h2 className="text-4xl font-bold text-brand-dark md:text-5xl">
                WBL in action
              </h2>
            </div>
            <p className="max-w-xl text-brand-slate">
              A rotating look at the kinds of experiences students encounter as
              they explore careers and build professional skills.
            </p>
          </div>

          <WBLOpportunitySlideshow opportunities={opportunities} />
        </div>
      </section>

      <section className="w-full px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <span className="mb-3 block font-mono text-sm font-bold uppercase tracking-widest text-brand-slate">
              Partner Network
            </span>
            <h2 className="mb-4 text-4xl font-bold text-brand-dark md:text-5xl">
              Companies and organizations opening doors
            </h2>
            <p className="text-lg leading-relaxed text-brand-slate">
              City Poly works with employers, college partners, public agencies, and
              workforce programs that help students see what their skills can become.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {partnerLogos.map((partner) => (
              <div
                key={partner.name}
                className="flex min-h-40 flex-col justify-between border border-brand-dark/10 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-20 items-center justify-center border border-brand-dark/10 bg-brand-gray px-4">
                  <span className="text-center font-mono text-2xl font-black uppercase tracking-wide text-brand-dark">
                    {partner.name}
                  </span>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-brand-slate">
                  {partner.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
