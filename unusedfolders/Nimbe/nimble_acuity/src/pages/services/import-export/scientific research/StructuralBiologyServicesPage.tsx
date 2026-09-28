import React from "react";
import NavigationMenu from "../MegaMenu";

type ServiceItem = {
  title: string;
  points?: string[];
  description?: string;
};

type Pillar = {
  heading: string;
  items: ServiceItem[];
};

const hero = {
  title: "Nimble Structural Biology Services",
  subtitle:
    "Get access to industry-leading structural biology research services provided by highly-qualified and experienced structural biologists (starting at just $14/hour)",
  ctaPrimary: "Contact Us",
  ctaSecondary: "Request a Quote",
};

const intro: string[] = [
  "Are you looking for a highly-experienced structural biology team that supports structure-based drug discovery right from gene to protein co-crystal structures at high resolution using X-ray crystallography? Are you looking for protein purification and protein expression services? Are you looking for services such as gene cloning and expression, construct design, protein characterization, custom protein production, structure solving, and X-ray diffraction data collection? If so, you are in the right place.",
  "Nimble Acuity is a leading structural biology service provider and can help you with any of the services listed above and more. Outsourcing structural biology services to us will allow you to focus on your other core areas while we provide high-quality structural biology research services from our state-of-the-art facilities. Our structural biology researchers work closely with scientific research firms and pharmaceutical companies and have developed effective processes to facilitate robust drug discovery techniques.",
];

const services: Pillar[] = [
  {
    heading: "Biophysical Analysis Services",
    items: [
      {
        title: "Comprehensive Biophysics",
        points: [
          "Protein melting temperature measurement",
          "Thermal Shift Assay (TSA)",
          "Suitable protein storage buffer identification",
          "Mass spectrometry (protein identification & intact mass measurement)",
          "Compound binding assessment with proteins",
          "Surface Plasmon Resonance (SPR): kon, kd, and koff in a single injection",
          "Fragment screening (including low Mw fragments)",
          "Irreversible inhibition analysis (kinact/KI or kon CC)",
          "Pioneer FE system-enabled assays",
        ],
      },
    ],
  },
  {
    heading: "Recombinant Protein Expression & Purification",
    items: [
      {
        title: "High-quality Proteins for HTS & Structural Studies",
        points: [
          "Screening across expression systems (baculo–insect, E. coli, mammalian)",
          "Construct design and co-expression with chaperones/regulatory domains",
          "Expression optimization and scale-up",
          "Chromatography with AKTA systems (affinity, ion exchange, size exclusion)",
          "Refolding from inclusion bodies",
          "Cell culture in flasks and wave bags",
          "Purity > 95% (SDS-PAGE)",
        ],
      },
    ],
  },
  {
    heading: "Stable Cell Line Generation",
    items: [
      {
        title: "Targeted Cell Engineering",
        points: [
          "Experience with ion channels, GPCRs, kinases, carboxylases, and more",
          "Stable lines in diverse cell backgrounds",
          "Lentiviral- or plasmid-mediated transfection workflows",
        ],
      },
    ],
  },
  {
    heading: "X-ray Crystal Structure Studies",
    items: [
      {
        title: "End-to-end Structure Determination",
        points: [
          "Protein engineering & multi-construct design (gene-to-structure)",
          "Crystallization screening using commercial kits",
          "Crystal hit optimization (additives, detergents, sparse matrix/in-house grids)",
          "Synchrotron beam access & in-house X-ray diffraction data collection",
          "Electron density evaluation for ligand binding",
          "Structure solution and in-depth structural analysis",
        ],
      },
    ],
  },
  {
    heading: "Fragment Screening",
    items: [
      {
        title: "Chemo-genomics–Informed Libraries",
        points: [
          "In-house fragment libraries designed with chemo-genomic tools",
          "Efficient identification of tractable fragment leads",
        ],
      },
    ],
  },
  {
    heading: "Protein Production & Crystallization",
    items: [
      {
        title: "Cloning to Crystal",
        points: [
          "Construct design & cloning",
          "Expression & purification optimized for crystallography",
          "Crystallization setup and optimization",
        ],
      },
    ],
  },
  {
    heading: "X-ray Crystallography",
    items: [
      {
        title: "Data to Model",
        points: [
          "Complete data collection & structure solution workflow",
          "Scaled/merged diffraction data, electron density maps, and refined coordinates",
          "Ligand binding analysis and medicinal chemistry guidance",
        ],
      },
    ],
  },
  {
    heading: "Library Services",
    items: [
      {
        title: "Ready-to-Use Targets",
        points: [
          "Curated in-house protein collection",
          "Rapid co-crystal structure determination with specific ligands",
        ],
      },
    ],
  },
];

const otherServices = [
  { title: "Medical Writing Support Services", href: "#" },
  { title: "Patent Landscape Analysis", href: "#" },
  { title: "Intellectual Property & Open Innovation", href: "#" },
  { title: "Market Forecast & Analysis", href: "#" },
];

const differentiators: ServiceItem[] = [
  {
    title: "World-class Infrastructure",
    description:
      "International-standard laboratories, state-of-the-art equipment, uninterrupted network connectivity, and 200% power backup.",
  },
  {
    title: "Affordable Pricing Options",
    description:
      "Specialist services at extremely competitive rates without compromising on quality.",
  },
  {
    title: "High-quality Services",
    description:
      "ISO-certified processes and rigorously validated workflows for exceptional output quality.",
  },
  {
    title: "Software",
    description:
      "Latest structure-solution suites and analysis tools to ensure accurate and current results.",
  },
  {
    title: "Quick Turnaround Time",
    description:
      "Streamlined, experience-driven processes to deliver well before deadlines.",
  },
  {
    title: "Experienced Team",
    description:
      "Highly experienced structural biology professionals with deep domain expertise.",
  },
  {
    title: "Data Security",
    description:
      "ISO/IEC 27001:2022 ISMS-certified with strict NDAs for secure handling of sensitive data.",
  },
  {
    title: "Capability to Scale",
    description:
      "Flexible resourcing to scale teams up or down in response to changing business needs.",
  },
];

const caseStudies = [
  {
    title:
      "Nimble Acuity Develops Patient Data Dashboard for Leading Pharmaceutical Company",
    blurb:
      "Built a patient dashboard using KPI factors like response rates, minimum treatment periods, site counts, and preferred locations.",
  },
  {
    title:
      "Nimble Acuity Delivers Research Assistance to 70-year-old UK-based Pharmaceutical Company",
    blurb:
      "Enabled targeted marketing campaigns across the world’s 50 busiest airports—on time and within budget.",
  },
];

const testimonials = [
  {
    quote:
      "Let me thank you for the professional way in which you are managing the project and meeting our deadlines. Unfortunately, our second supplier—I cannot say the same for and have let us down considerably.",
    author: "CEO, Technology Company, UK",
  },
];

const footerCta = {
  title: "Nimble Structural Biology Services to Nimble Acuity",
  body:
    "For 26+ years, we’ve supported global clients with high-quality structural biology services. From gene to structure, our team leverages cutting-edge methods and equipment to deliver accurate results, faster.",
  ctaPrimary: "Get Started",
  ctaSecondary: "Speak to an Expert",
};

export default function StructuralBiologyServicesPage(): JSX.Element {
  return (
    <main className="font-sans text-slate-800">
      {/* Hero */}
      <NavigationMenu/>
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-700">
            {hero.subtitle}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl bg-indigo-600 px-5 py-3 text-white shadow hover:bg-indigo-700"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 text-slate-800 hover:bg-white"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            {intro.map((p, i) => (
              <p key={i} className="mb-5 leading-relaxed text-slate-700">
                {p}
              </p>
            ))}
          </div>
          {/* Other Services */}
          <aside className="md:col-span-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Other Services You May Be Interested In
              </h3>
              <ul className="mt-4 space-y-3">
                {otherServices.map((s) => (
                  <li key={s.title}>
                    <a
                      href={s.href}
                      className="inline-flex items-start rounded-lg p-2 hover:bg-slate-50"
                    >
                      <span className="text-slate-700">{s.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Structural Biology Services We Offer
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {services.map((pillar) => (
              <div
                key={pillar.heading}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {pillar.heading}
                </h3>
                <div className="mt-4 space-y-6">
                  {pillar.items.map((item, idx) => (
                    <div key={idx}>
                      <h4 className="font-medium text-slate-800">
                        {item.title}
                      </h4>
                      {item.description && (
                        <p className="mt-2 text-slate-700">
                          {item.description}
                        </p>
                      )}
                      {item.points && (
                        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
                          {item.points.map((pt) => (
                            <li key={pt}>{pt}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Why Nimble Structural Biology Services to Nimble Acuity?
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {differentiators.map((d) => (
            <div
              key={d.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {d.title}
              </h3>
              {d.description && (
                <p className="mt-2 text-slate-700">{d.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Customer Success Stories
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {caseStudies.map((cs) => (
              <article
                key={cs.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-semibold text-slate-900">{cs.title}</h3>
                <p className="mt-2 text-slate-700">{cs.blurb}</p>
                <a href="#" className="mt-3 inline-block text-indigo-700">
                  Read more →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Testimonials
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-slate-800">“{t.quote}”</p>
              <footer className="mt-3 text-sm text-slate-600">
                — {t.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="bg-gradient-to-br from-indigo-600 to-cyan-600 py-14 text-white"
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold">{footerCta.title}</h2>
          <p className="mt-3 max-w-3xl text-white/90">{footerCta.body}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center rounded-xl bg-white px-5 py-3 font-medium text-indigo-700 shadow hover:bg-slate-100"
            >
              {footerCta.ctaPrimary}
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-xl border border-white/70 px-5 py-3 font-medium text-white hover:bg-white/10"
            >
              {footerCta.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <footer className="bg-white py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Nimble Acuity — Structural Biology Services
      </footer>
    </main>
  );
}
