import React from "react";
import {
  LineChart,
  Users,
  Brain,
  Target,
  Layers,
  Sparkles,
  CheckCircle2,
  ClipboardList,
  BarChart3,
  MessageSquare,
  Lightbulb,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Building2,
  Globe2,
} from "lucide-react";
import NavigationMenu from "../MegaMenu";

/**
 * Nimble Quantitative Research Services
 * NOTE: Content includes extensive qualitative methods (ethnography, focus groups, diaries, etc.).
 * This page faithfully renders the provided copy while keeping a unified, modern layout.
 */


type Bullet = { title: string; points: string[] };
type Pill = { label: string };
type Step = { step: string; title: string; desc: string };


const heroBullets: string[] = [
  "Unbiased perspective that challenges assumptions",
  "Ethnography & segmentation for granular consumer insight",
  "Tailored strategies that track shifting trends in real time",
];

const serviceBuckets: Bullet[] = [
  {
    title: "Marketing Communication Qualitative Research Services",
    points: [
      "Focus groups for ad testing",
      "Dyadic interviews for marketing message evaluation",
      "Depth interviews for brand communication insights",
      "Online chat groups for ad concept feedback",
      "Digital ethnography for consumer–brand interactions",
    ],
  },
  {
    title: "Mental Health Services Qualitative Research",
    points: [
      "Sensitized groups for lived-experience understanding",
      "In-the-moment research for real-time emotional tracking",
      "Video diaries for patient experience documentation",
      "Online communities for therapy/support journeys",
    ],
  },
  {
    title: "Transcription Services for Qualitative Research",
    points: [
      "Converting audio from interviews",
      "Transcribing visual/audio information",
      "Multilingual transcriptions for global projects",
      "Time-stamped transcripts for easy analysis",
    ],
  },
  {
    title: "Qualitative Audience Research Services",
    points: [
      "Time-extended online forums",
      "Virtual shop-alongs for path-to-purchase",
      "Mobile qualitative interviews",
      "Live screen-sharing UX studies",
      "Online word association & perception tests",
    ],
  },
  {
    title: "Qualitative Brand Research Services",
    points: [
      "Video deep dives/forums for brand perception",
      "Experience interviews & close-ups",
      "Projective techniques for association mapping",
      "Iterative concept evolution for brand development",
    ],
  },
  {
    title: "Unconventional Qualitative Methods",
    points: [
      "Voicemail journaling",
      "Image/video/audio collages",
      "Sentence completion",
      "Hypotheses quantification",
    ],
  },
];

const process: Step[] = [
  {
    step: "01",
    title: "Research Framework Formulation",
    desc:
      "Define objectives, choose methodologies, and draft the detailed research plan.",
  },
  {
    step: "02",
    title: "Precision Participant Selection",
    desc:
      "Identify target demographics, recruit qualified participants, and prep them for fieldwork.",
  },
  {
    step: "03",
    title: "Systematic Data Acquisition",
    desc:
      "Conduct fieldwork, interviews, surveys, or focus groups with rigorous documentation.",
  },
  {
    step: "04",
    title: "In-depth Data Assessment",
    desc:
      "Transcribe, code consistently, and analyze emergent patterns and themes.",
  },
  {
    step: "05",
    title: "Insight Synthesis",
    desc:
      "Interpret findings, distill key insights, and validate results for reliability.",
  },
  {
    step: "06",
    title: "Strategic Reporting",
    desc:
      "Craft a clear report, visualize insights, and present implications for stakeholders.",
  },
  {
    step: "07",
    title: "Actionable Strategies",
    desc:
      "Translate insights into recommendations, implementation plans, and KPIs.",
  },
  {
    step: "08",
    title: "Implementation Guidance",
    desc:
      "Advise on rollout, monitor execution, and provide ongoing support.",
  },
  {
    step: "09",
    title: "Outcome Evaluation",
    desc:
      "Measure impact against benchmarks, capture learnings, and surface improvements.",
  },
  {
    step: "10",
    title: "Continual Refinement",
    desc:
      "Adjust strategies and plan future research for continuous optimization.",
  },
];

const benefits: Bullet[] = [
  {
    title: "Insightful Business Intelligence",
    points: [
      "Move beyond surface-level metrics to decision-grade insight.",
      "Inform strategic planning with nuanced context.",
    ],
  },
  {
    title: "Targeted Product Refinement",
    points: [
      "Reveal unexpressed needs and latent jobs-to-be-done.",
      "Prioritize features aligned to real customer value.",
    ],
  },
  {
    title: "Customer Relationship Management",
    points: [
      "Understand loyalty drivers and friction points.",
      "Design interventions that improve retention.",
    ],
  },
  {
    title: "Proactive Risk Management",
    points: [
      "Surface vulnerabilities through case study research.",
      "Mitigate market and execution risks early.",
    ],
  },
  {
    title: "Effective Branding Strategy",
    points: [
      "Align brand promise to lived customer perceptions.",
      "Optimize messaging, assets, and touchpoints.",
    ],
  },
  {
    title: "Optimized Sales Approach",
    points: [
      "Map decision journeys and buying triggers.",
      "Equip sales with narratives that convert.",
    ],
  },
];

const industries: Pill[] = [
  { label: "Banking & Finance" },
  { label: "Healthcare" },
  { label: "Hospitality" },
  { label: "Manufacturing" },
  { label: "Restaurant/Retail" },
  { label: "Accounting" },
  { label: "Technology" },
  { label: "Real Estate" },
  { label: "Education" },
  { label: "Insurance" },
  { label: "Legal Services" },
  { label: "Manufacturers & Distributors" },
  { label: "Grocery/Food Distributors" },
];

const addlServices: { icon: React.ReactNode; title: string; desc: string }[] = [
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Market Research Services",
    desc:
      "Data-centric findings to decode consumer behavior and outpace competitors.",
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Investment Market Research",
    desc:
      "Identify opportunities, enhance portfolio yield, and navigate volatility.",
  },
  {
    icon: <Building2 className="h-5 w-5" />,
    title: "Business Market Research",
    desc:
      "Spot expansion avenues, reduce risk, and gain competitive advantage.",
  },
  {
    icon: <Globe2 className="h-5 w-5" />,
    title: "Scientific Market Research",
    desc:
      "Translate complex scientific signals into commercial strategy in healthcare, biotech, and pharma.",
  },
];

export default function QuantitativeResearchPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* HERO */}
      <NavigationMenu/>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-1.5 text-xs font-medium tracking-wide text-white">
                <LineChart className="h-4 w-4" />
                Nimble Quantitative Research Services
              </span>
              <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
                Navigate shifting consumer trends with{" "}
                <span className="underline decoration-indigo-300 underline-offset-4">
                  ethnography & segmentation
                </span>{" "}
                — and an unbiased point of view.
              </h1>
              <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
                We uncover emotional drivers, lifestyles, and cultural cues to
                inform product, brand, and go-to-market decisions—so you respond
                to change in real time with confidence.
              </p>

              <ul className="mt-6 space-y-2">
                {heroBullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-indigo-600" />
                    <span className="text-slate-700">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700"
                >
                  <Rocket className="h-4 w-4" />
                  Start a Project
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  <ClipboardList className="h-4 w-4" />
                  Explore Services
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Feature icon={<Users />} title="Ethnography" />
                  <Feature icon={<Brain />} title="Segmentation" />
                  <Feature icon={<MessageSquare />} title="Diaries & Forums" />
                  <Feature icon={<Target />} title="Concept Testing" />
                  <Feature icon={<Layers />} title="Mixed-Methods" />
                  <Feature icon={<Sparkles />} title="Innovation Sprints" />
                </div>
              </div>
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-indigo-200/60 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <Header
            eyebrow="Quantitative Data Analysis We Offer"
            title="A qualitative-first toolkit for richer, faster signal"
            subtitle="From ad testing to digital ethnography, we blend conventional and unconventional methods to decode motivations and behaviors."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {serviceBuckets.map((b) => (
              <Card key={b.title} title={b.title} bullets={b.points} />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <Header
            eyebrow="Our Process"
            title="End-to-end rigor from brief to business impact"
            subtitle="A 10-step framework that moves seamlessly from discovery to activation and continuous improvement."
          />
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {process.map((s) => (
              <li
                key={s.step}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-3 inline-flex rounded-lg bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700">
                  {s.step}
                </div>
                <h4 className="text-lg font-semibold text-slate-900">
                  {s.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {s.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <Header
            eyebrow="Why Hire Us"
            title="Boost ROI with experienced qualitative consultants"
            subtitle="We convert complex market signals into clear, actionable strategies that move revenue, retention, and brand strength."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {benefits.map((b) => (
              <Card key={b.title} title={b.title} bullets={b.points} />
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <Header
            eyebrow="Industries We Serve"
            title="Versatile qualitative research across sectors"
            subtitle="Methods tailored to sector-specific challenges and competitive dynamics."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {industries.map((i) => (
              <span
                key={i.label}
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700"
              >
                {i.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ADDITIONAL SERVICES */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <Header
            eyebrow="Additional Services"
            title="Complementary research capabilities"
            subtitle="Extend qualitative depth with quantitative breadth and domain-specific analysis."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {addlServices.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-slate-100 p-2 text-slate-700">
                  {s.icon}
                </div>
                <h4 className="text-base font-semibold text-slate-900">
                  {s.title}
                </h4>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="border-t border-slate-200 bg-gradient-to-r from-indigo-600 to-indigo-500"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 text-white">
          <div className="grid items-center gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold">
                Ready to empower your strategic planning with insightful
                qualitative research?
              </h3>
              <p className="mt-2 text-indigo-100">
                Let’s decode future trends, competitive dynamics, and cultural
                influences—together.
              </p>
            </div>
            <div className="flex gap-3 md:justify-end">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-indigo-700 shadow-sm transition hover:bg-indigo-50"
              >
                <Lightbulb className="h-4 w-4" />
                Talk to an Expert
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <ShieldCheck className="h-4 w-4" />
                See Methods
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ========== UI Primitives ========== */

function Header({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 text-slate-600">{subtitle}</p>
      ) : null}
    </div>
  );
}

function Feature({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
        {icon}
      </div>
      <span className="text-sm font-medium text-slate-800">{title}</span>
    </div>
  );
}

function Card({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <ul className="mt-3 space-y-2">
        {bullets.map((p, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-600"></span>
            <span className="text-sm text-slate-700">{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
