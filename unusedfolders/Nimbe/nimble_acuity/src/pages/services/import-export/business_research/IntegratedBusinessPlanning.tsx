import React from "react";
import NavigationMenu from "../MegaMenu";

const IntegratedBusinessPlanning: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <NavigationMenu/>
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-violet-700 to-fuchsia-600 text-white">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-black/10 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 py-20 text-center relative">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Nimble Integrated Business Planning Services
          </h1>
          <p className="mt-5 max-w-3xl mx-auto text-lg md:text-xl text-white/90">
            Get access to high-quality and accurate integrated business planning services to
            enhance the effectiveness of your business processes, at prices starting at{" "}
            <span className="font-semibold text-white">$14/hour</span>.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-white text-indigo-700 font-semibold shadow hover:bg-gray-100 transition"
            >
              Get a Quote
            </a>
            <a
              href="#services"
              className="px-6 py-3 rounded-xl bg-white/10 text-white font-semibold ring-1 ring-white/30 hover:bg-white/15 transition"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Align, Anticipate, and Act — Cohesively</h2>
            <p className="text-gray-700">
              If firefighting is the norm, budgets miss targets, and teams pull in different
              directions, our Integrated Business Planning (IBP) brings everything together:
              demand, supply, finance, and strategy—into one plan, one cadence, one truth.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              {[
                "Management misalignment and siloed planning",
                "Budgets disconnected from operational reality",
                "Rapid growth outpacing informal processes",
                "Service levels slipping amid demand variability",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-white text-xs">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-white p-6 border border-indigo-100">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { k: "26+ yrs", v: "Planning Experience" },
                { k: "Single SoT", v: "Single Source of Truth" },
                { k: "S&OP+", v: "Finance-Aligned IBP" },
                { k: "Faster", v: "Decisions & Responses" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white shadow-sm border border-gray-100 p-5 text-center"
                >
                  <div className="text-xl font-bold text-indigo-700">{stat.k}</div>
                  <div className="text-gray-600">{stat.v}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-gray-700">
              We consolidate data from disparate sources and align plans across horizons—so you can
              seize opportunities and minimize downside risks with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-4">
            Integrated Business Planning Services We Offer
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            Tailored IBP services aligned to your operating model, maturity, and market cadence.
          </p>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                t: "IBP Diagnostic & Maturity Assessment",
                d: "Evaluate current IBP/S&OP effectiveness, identify gaps, and prioritize fixes.",
              },
              {
                t: "S&OP Review & Optimization",
                d: "Tighten demand, supply, and inventory alignment; enable executive trade-offs.",
              },
              {
                t: "Knowledge Transfer & Enablement",
                d: "Upskill teams to run and sustain IBP cycles with clear roles & RACI.",
              },
              {
                t: "Change Management",
                d: "Plan, monitor, and embed behavioral change for adoption at scale.",
              },
              {
                t: "IBP Design & Operating Model",
                d: "Design the cadence, forums, inputs/outputs, and metrics for your business.",
              },
              {
                t: "Strategy to Action Plan",
                d: "Translate strategy into scenarios, guardrails, and integrated action plans.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="group rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <div className="flex items-start gap-4">
                  <span className="shrink-0 mt-1 h-10 w-10 rounded-xl bg-indigo-600/10 text-indigo-700 grid place-items-center font-semibold">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{card.t}</h3>
                    <p className="text-gray-600">{card.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Nimble Acuity */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Why Nimble Integrated Business Planning to Nimble Acuity?
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
          Decades of multi-industry experience, proven playbooks, and a pragmatic approach to
          integrated planning that sticks.
        </p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              t: "Affordable Pricing",
              d: "Flexible hourly/FTE models to fit your budget and scope.",
            },
            {
              t: "High-quality Services",
              d: "ISO-certified practices with outcome-focused delivery.",
            },
            {
              t: "Superb Infrastructure",
              d: "World-class tools and seasoned planning professionals.",
            },
            {
              t: "Latest Tools & Tech",
              d: "Advanced analytics and scenario planning accelerators.",
            },
            {
              t: "Structured Process",
              d: "Time-tested IBP blueprints and repeatable cadences.",
            },
            {
              t: "Experienced Team",
              d: "26+ years designing/assessing plans across industries.",
            },
            {
              t: "Data Security",
              d: "Strict compliance and enterprise-grade security controls.",
            },
            {
              t: "Short Turnaround",
              d: "Rapid, iterative improvements without quality trade-offs.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold mb-1">{item.t}</h3>
              <p className="text-gray-600 text-sm">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-4">How We Engage</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            A clear, collaborative path from current-state to a sustainable, value-driving IBP.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                t: "Discovery & Diagnostic",
                d: "Understand objectives, assess current IBP/S&OP, map gaps and opportunities.",
              },
              {
                n: "02",
                t: "Design & Alignment",
                d: "Define cadence, forums, data inputs/outputs, KPIs, and decision rights.",
              },
              {
                n: "03",
                t: "Pilot & Enablement",
                d: "Run pilots, train teams, refine workflows, and finalize playbooks.",
              },
              {
                n: "04",
                t: "Scale & Integrate",
                d: "Roll out across business units with change management and governance.",
              },
              {
                n: "05",
                t: "Monitor & Improve",
                d: "Track KPIs, run scenarios, and course-correct with executive reviews.",
              },
              {
                n: "06",
                t: "Sustain & Evolve",
                d: "Embed continuous improvement and evolve with market dynamics.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-9 w-9 rounded-full bg-indigo-600 text-white grid place-items-center font-semibold">
                    {step.n}
                  </span>
                  <h3 className="font-semibold">{step.t}</h3>
                </div>
                <p className="text-gray-600 text-sm">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Other Services You Can Benefit From</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
          Complement your IBP with research-backed insights and financial clarity.
        </p>
        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {[
            "Business Research Services",
            "Market Research Services",
            "Financial Research Report Services",
            "Research Reports Services",
          ].map((srv, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white p-5 border border-gray-100 shadow-sm text-center hover:shadow-md transition"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600/10 text-indigo-700 font-semibold">
                {i + 1}
              </span>
              <p className="mt-3 font-medium">{srv}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-10">Client Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                t: "Reliable Primary Research for Shanghai Trade Consultants",
                d: "Delivered accurate and cost-effective primary research services with a dedicated team and clear governance.",
              },
              {
                t: "World-class Secondary Research for Swiss Firm",
                d: "Rapid turnaround with validated sources and synthesis into actionable decision-ready findings.",
              },
            ].map((cs, i) => (
              <article
                key={i}
                className="rounded-2xl bg-white p-6 border border-gray-100 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg">{cs.t}</h3>
                <p className="text-gray-600 mt-2">{cs.d}</p>
                <button className="mt-4 text-indigo-700 font-medium hover:underline">
                  Read more →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white p-8">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <p className="text-lg md:text-xl leading-relaxed">
                “Nimble Acuity has been a tremendous resource for our team. They are very precise
                and attentive to all our needs and have been able to learn our procedures quicker
                than I ever thought possible.”
              </p>
              <p className="mt-4 font-semibold">— General Partner, Manufacturing Company (US)</p>
            </div>
            <div className="text-center md:text-right">
              <a
                href="#contact"
                className="inline-block mt-2 px-6 py-3 rounded-xl bg-white text-indigo-700 font-semibold shadow hover:bg-gray-100 transition"
              >
                Talk to an IBP Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold">Nimble Integrated Business Planning to Nimble Acuity</h2>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
            We align your S&OP, finance, and strategy into a single, integrated plan—powered by
            robust processes, secure data, and seasoned practitioners. Let’s design an IBP that
            accelerates growth and resilience.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#"
              className="px-6 py-3 rounded-xl bg-indigo-700 text-white font-semibold shadow hover:bg-indigo-800 transition"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="px-6 py-3 rounded-xl bg-white text-indigo-700 font-semibold ring-1 ring-indigo-200 hover:bg-indigo-50 transition"
            >
              Download Capabilities Deck
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">Starts at $14/hour • ISO-certified • 26+ years</p>
        </div>
      </section>
    </div>
  );
};

export default IntegratedBusinessPlanning;
