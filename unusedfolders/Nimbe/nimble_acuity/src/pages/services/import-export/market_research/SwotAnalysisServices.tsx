import { motion } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  AlertTriangle,
  Target,
  Building2,
  Users,
  Cpu,
  LineChart,
  BarChart3,
  FileText,
  CheckCircle2,
  Quote,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationMenu from "../MegaMenu";

export default function SwotAnalysisServices() {
  return (
    <div className="w-full">
      {/* Hero */}
      <NavigationMenu/>
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Nimble SWOT Analysis Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-3xl mx-auto text-lg mb-6"
        >
          Avail our expert SWOT analysis services and take your business to greater heights —
          prices starting from <span className="font-semibold">$14/hour</span>. Get an unbiased
          outside-in view of your strengths, weaknesses, opportunities, and threats.
        </motion.p>
        <Button size="lg" className="bg-white text-emerald-700 font-semibold hover:bg-gray-100">
          Get a Free Consultation
        </Button>
      </section>

      {/* Intro / Value */}
      <section className="py-14 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Make Better-Informed Decisions</h2>
            <p className="text-gray-700">
              Nimble Acuity (Nimble Acuity) is a leading SWOT analysis provider. Our seasoned research
              analysts evaluate internal and external factors and deliver a balanced, actionable
              view of your company’s standing—so leaders can prioritize with confidence.
            </p>
          </div>
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <ul className="space-y-3">
                {[
                  "Unbiased, outside-in evaluation",
                  "Decision-oriented matrices & reports",
                  "PESTEL, TOWS, and quantitative add-ons",
                  "Fast turnaround & scalable capacity",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-0.5" />
                    <span className="text-gray-700">{t}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SWOT Breakdown */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">SWOT Breakdown</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            {
              icon: ShieldCheck,
              title: "Strengths",
              bullets: [
                "What do you do better than competitors?",
                "Unique or lowest-cost resources available?",
                "Advantages the market recognizes?",
              ],
              color: "text-emerald-600",
            },
            {
              icon: AlertTriangle,
              title: "Weaknesses",
              bullets: [
                "What should you improve or avoid?",
                "Gaps customers/competitors perceive?",
                "Internal bottlenecks limiting growth?",
              ],
              color: "text-rose-600",
            },
            {
              icon: TrendingUp,
              title: "Opportunities",
              bullets: [
                "Promising market or tech shifts",
                "Policy or audience lifestyle changes",
                "Industry events you can leverage",
              ],
              color: "text-indigo-600",
            },
            {
              icon: Target,
              title: "Threats",
              bullets: [
                "Competitive moves & new entrants",
                "Tech disruption & spec changes",
                "Cash-flow risks and volatility",
              ],
              color: "text-amber-600",
            },
          ].map((b, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <Card className="rounded-2xl shadow-md h-full">
                <CardContent className="p-6">
                  <b.icon className={`w-10 h-10 ${b.color} mb-4`} />
                  <h3 className="text-xl font-semibold mb-3">{b.title}</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {b.bullets.map((x, i) => (
                      <li key={i}>{x}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our SWOT Analysis Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Building2,
              title: "Industry SWOT Analysis",
              desc:
                "Evaluate strengths, weaknesses, opportunities, and threats for one or more industries—trends, regulation, barriers, and saturation.",
            },
            {
              icon: FileText,
              title: "Company / Project SWOT",
              desc:
                "Full-scope SWOT for an organization or specific initiatives. Tailored depth and deliverables to your use case.",
            },
            {
              icon: Users,
              title: "HR SWOT Analysis",
              desc:
                "Assess staff knowledge, turnover, training, leadership, and external HR factors impacting productivity.",
            },
            {
              icon: LineChart,
              title: "PESTEL + Technology SWOT",
              desc:
                "Macro-environment & technology lenses to enrich SWOT with innovation trends and infra readiness.",
            },
            {
              icon: BarChart3,
              title: "Marketing & Financial SWOT",
              desc:
                "Analyze brand, demand shifts, competitive posture, liquidity, terms, interest rate sensitivity, and volatility.",
            },
            {
              icon: Target,
              title: "Customer SWOT & Matrix",
              desc:
                "Service-level strengths/weaknesses, opportunity discovery, and decision-oriented SWOT/TOWS matrices.",
            },
            {
              icon: LineChart,
              title: "Primary & Secondary Research",
              desc:
                "Interviews, surveys, and literature scans across customers, suppliers, employees, and partners.",
            },
            {
              icon: BarChart3,
              title: "Quantitative Add-ons",
              desc:
                "Probability models, statistical tests, and Monte Carlo to quantify SWOT/PESTEL/TOWS impact.",
            },
            {
              icon: FileText,
              title: "Reports & Presentations",
              desc:
                "Visual summaries, charts, and prioritized recommendations for executives and operating teams.",
            },
          ].map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <Card className="rounded-2xl shadow-lg hover:shadow-xl transition">
                <CardContent className="p-6">
                  <s.icon className="w-10 h-10 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-gray-700">{s.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">SWOT Analysis Process We Follow</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            {
              step: "01",
              title: "Requirement Gathering",
              desc: "Collaborate to define scope, goals, and decision context.",
            },
            {
              step: "02",
              title: "Data Collection",
              desc: "Collect from multiple sources, then sort and organize.",
            },
            {
              step: "03",
              title: "Data Analysis",
              desc: "Analyze via SWOT matrix; enrich with PESTEL/TOWS where relevant.",
            },
            {
              step: "04",
              title: "Report Generation",
              desc: "Actionable findings, visualizations, and strategic guidance.",
            },
          ].map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-emerald-600 mb-4">{p.step}</div>
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-700">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Nimble SWOT to Nimble Acuity?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ul className="space-y-4">
            {[
              "Affordable pricing with high value delivery.",
              "ISO/IEC 27001:2022 certified information security.",
              "Experienced analysts and research specialists.",
              "Latest software tools and robust infrastructure.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <ul className="space-y-4">
            {[
              "Quality guaranteed with rigorous QA.",
              "Quick turnaround leveraging global delivery.",
              "Scalable teams to meet urgent timelines.",
              "Decision-oriented, executive-ready outputs.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title:
                "Company Profiling & SWOT for a Large Australian TPA Provider",
              desc:
                "Completed comprehensive profiling and SWOT within a week; delivered error-free, decision-ready reports.",
              cta: "Read More",
            },
            {
              title:
                "Market Research Survey for a Top Government Organization",
              desc:
                "Executed time-bound surveys on fintech firms across the UK and US; delivered requested formats quickly.",
              cta: "Read More",
            },
          ].map((cs, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-2">{cs.title}</h3>
                <p className="text-gray-700 mb-4">{cs.desc}</p>
                <div className="mt-auto">
                  <Button variant="outline">{cs.cta}</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <Quote className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
        <p className="text-xl text-gray-800 mb-2">
          “The services that Nimble Acuity provided helped us achieve substantial cost and time
          savings on several difficult projects. Their prompt attention to our requests and
          attention to detail are excellent.”
        </p>
        <p className="text-gray-600">
          — Senior Vice President, Automotive & Transportation Industry Solutions Group
        </p>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nimble SWOT Analysis Services to Nimble Acuity
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Get expert, comprehensive, and in-depth SWOT with clear recommendations and
          executive-ready deliverables.
        </p>
        <Button size="lg" className="bg-white text-teal-700 font-semibold hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
