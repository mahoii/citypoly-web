import type { Metadata } from "next";
import Link from "next/link";
import AboutFeatureSlideshow from "../../components/AboutFeatureSlideshow";

export const metadata: Metadata = {
  title: "About City Poly | City Poly High School",
  description:
    "Learn about City Poly's mission, early college partnership with City Tech, and work-based learning experiences.",
};

const missionSlides = [
  {
    title: "Downtown Brooklyn Learning",
    description:
      "Students learn in a small school environment built around engineering, architecture, technology, and real-world problem solving.",
    image: "/citypolyschool.jpg",
    alt: "City Poly students working together at school",
  },
  {
    title: "A Supported School Community",
    description:
      "City Poly pairs academic challenge with social and emotional support so students can grow with confidence.",
    image: "/citypolyschool2.jpg",
    alt: "City Poly students collaborating in a classroom",
  },
  {
    title: "Designing the Future",
    description:
      "Coursework connects ideas, technical skills, and career pathways so students can imagine what comes after graduation.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1400",
    alt: "Architectural drawings and tools on a desk",
  },
];

const collegeSlides = [
  {
    title: "City Tech Partnership",
    description:
      "Through New York City College of Technology, students can take college courses while still supported by City Poly.",
    image: "/citytechlogo.jpg",
    alt: "New York City College of Technology logo",
  },
  {
    title: "Early College Pathways",
    description:
      "Students explore architecture, civil engineering technology, and construction management through connected high school and college work.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1400",
    alt: "Students working at desks in a bright college-style classroom",
  },
  {
    title: "No-Cost College Credits",
    description:
      "The 9-14 model gives students a head start toward college and career goals, including the opportunity to earn an associate degree.",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1400",
    alt: "Students gathered in a lecture hall",
  },
];

const wblSlides = [
  {
    title: "Career Site Visits",
    description:
      "Students step into professional settings and see how technical teams solve problems across design, infrastructure, construction, and technology.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1400",
    alt: "Modern workplace with people collaborating",
  },
  {
    title: "Mentors and Industry Partners",
    description:
      "Partner conversations help students understand workplace expectations, professional habits, and possible career routes.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1400",
    alt: "People meeting around a table in a professional setting",
  },
  {
    title: "Internships and Challenges",
    description:
      "Students build resumes, practice interviews, complete partner-led projects, and reflect on what they are learning beyond the classroom.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1400",
    alt: "Team presenting ideas on sticky notes in a workplace",
  },
];

const missionPoints = [
  "Shared responsibility for learning and academic growth",
  "Support for students' social and cultural development",
  "College and career preparation through a 9-14 P-TECH model",
];

const collegeHighlights = [
  "Tuition-free college coursework through City Tech",
  "Pathways in architecture, civil engineering technology, and construction management",
  "Guidance for students choosing college options beyond the City Tech partnership",
];

const wblHighlights = [
  "Workplace readiness, resume, and interview preparation",
  "Partner-led career panels, mentorship, and site visits",
  "Internship support and reflection tied to student portfolios",
];

export default function AboutCityPolyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-brand-light pb-20">
      <section className="w-full border-b border-brand-dark/10 bg-white px-6 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Link
              href="/"
              className="mb-8 inline-block font-mono text-sm text-brand-slate transition-colors hover:text-brand-primary"
            >
              &lt;- BACK TO HOME
            </Link>
            <span className="mb-5 block font-mono text-xs font-bold uppercase tracking-widest text-brand-slate">
              About Us / About City Poly
            </span>
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-brand-dark md:text-7xl">
              About <span className="text-brand-primary">City Poly</span>
            </h1>
            <p className="mb-8 max-w-3xl text-xl leading-relaxed text-brand-slate">
              City Polytechnic High School of Engineering, Architecture, and Technology
              prepares students for college, careers, and civic life through rigorous
              academics, technical pathways, early college access, and career-connected
              learning.
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {missionPoints.map((point) => (
                <div key={point} className="border border-brand-dark/10 bg-brand-gray p-4">
                  <p className="font-mono text-xs font-bold uppercase leading-relaxed tracking-wide text-brand-dark">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <AboutFeatureSlideshow slides={missionSlides} label="City Poly mission highlights" />
        </div>
      </section>

      <section className="w-full px-6 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <AboutFeatureSlideshow slides={collegeSlides} label="Early college and City Tech highlights" />
          </div>

          <div className="order-1 lg:order-2">
            <span className="mb-4 block font-mono text-sm font-bold uppercase tracking-widest text-brand-primary">
              ECI / College Classes / City Tech
            </span>
            <div className="mb-6 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <h2 className="max-w-2xl text-4xl font-bold leading-tight text-brand-dark md:text-5xl">
                A head start on college, built into high school.
              </h2>
              <a
                href="https://www.schools.nyc.gov/enrollment/enroll-grade-by-grade/high-school"
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center justify-center rounded-md border-2 border-[#004B87] bg-[#004B87] px-4 py-3 text-center font-mono text-xs font-bold uppercase tracking-wide text-white transition-all hover:bg-white hover:text-[#004B87]"
              >
                Enroll your child today
              </a>
            </div>
            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-brand-slate">
              City Poly&apos;s Early College Initiative connects students with City Tech
              coursework while they complete high school. Students can build college
              confidence, earn credits, and pursue a no-cost associate degree in a
              technical pathway aligned to their interests.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {collegeHighlights.map((highlight, index) => (
                <div key={highlight} className="border border-brand-dark/10 bg-white p-5">
                  <span className="mb-3 block font-mono text-xs font-bold text-brand-primary">
                    0{index + 1}
                  </span>
                  <p className="font-bold leading-snug text-brand-dark">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <span className="mb-4 block font-mono text-sm font-bold uppercase tracking-widest text-brand-slate">
              Work-Based Learning
            </span>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-brand-dark md:text-5xl">
              Students practice professional skills before graduation.
            </h2>
            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-brand-slate">
              Work-Based Learning at City Poly connects classroom projects to the
              professional world. Students meet industry partners, visit job sites,
              prepare for internships, and learn how technical skills become real career
              choices.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {wblHighlights.map((highlight, index) => (
                <div key={highlight} className="border border-brand-dark/10 bg-brand-gray p-5">
                  <span className="mb-3 block font-mono text-xs font-bold text-brand-primary">
                    0{index + 1}
                  </span>
                  <p className="font-bold leading-snug text-brand-dark">{highlight}</p>
                </div>
              ))}
            </div>
            <Link
              href="/academics/work-based-learning"
              className="mt-8 inline-block border-2 border-brand-dark px-5 py-3 font-mono text-sm font-bold uppercase tracking-wide text-brand-dark transition-all hover:bg-brand-dark hover:text-white"
            >
              Explore Work-Based Learning
            </Link>
          </div>

          <AboutFeatureSlideshow slides={wblSlides} label="Work-based learning highlights" />
        </div>
      </section>
    </main>
  );
}
