import { motion } from "framer-motion";
import {
  Layers,
  PieChart,
  Search,
  ClipboardList,
  Factory,
  Truck,
  FileText,
  Users,
  Target,
  BarChart3,
  Shield,
  CheckCircle2,
  Clock,
  Server,
  Globe2,
  Quote,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationMenu from "../MegaMenu";

export default function FabricMarketResearch() {
  return (
    <div className="w-full">
      {/* Hero */}
      <NavigationMenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Nimble Fabric Market Research Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="max-w-3xl mx-auto text-lg mb-6"
        >
          Comprehensive, in-depth fabric industry insights—from segmentation to supply chain—
          starting at <span className="font-semibold">$14/hour</span>. Turn data into winning
          strategies with primary & secondary research tailored to your goals.
        </motion.p>
        <Button size="lg" className="bg-white text-indigo-700 font-semibold hover:bg-gray-100">
          Get a Free Consultation
        </Button>
      </section>

      {/* Intro */}
      <section className="py-14 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Actionable Intelligence for Fabric Markets</h2>
            <p className="text-gray-700">
              Nimble Acuity’s fabric research specialists deliver up-to-date market data and clear
              recommendations across local and global contexts. From synthetics and natural fibers
              to manufacturing and logistics, we provide the clarity you need to stay ahead.
            </p>
          </div>
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <ul className="space-y-3">
                {[
                  "Targeted market entry & growth playbooks",
                  "Competitor, legal & technology scans",
                  "Decision-ready dashboards & reports",
                  "Fast turnaround with scalable teams",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-indigo-600 mt-0.5" />
                    <span className="text-gray-700">{t}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Fabric Market Research Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: Layers,
              title: "Market Segmentation & Profiling",
              desc:
                "Identify and classify customers by demographics, location, and socio-cultural factors to run targeted campaigns.",
            },
            {
              icon: Search,
              title: "Fabric Market Research",
              desc:
                "Entry strategies with competitor analysis, SWOT, tech & legal scans for synthetic and natural fabric categories.",
            },
            {
              icon: PieChart,
              title: "Market Description Survey",
              desc:
                "Size, share, growth, and competitor positioning to guide investments and go-to-market.",
            },
            {
              icon: Shield,
              title: "Legal & Regulatory Research",
              desc:
                "Synopsis of applicable laws, reporting standards, export policies, and compliance considerations.",
            },
            {
              icon: ClipboardList,
              title: "New Product Analysis Surveys",
              desc:
                "Screen concepts with target audiences—acceptability, likes/dislikes, and purchase intent.",
            },
            {
              icon: Truck,
              title: "Supply Chain Research",
              desc:
                "Cost-benefit vendor comparisons and negotiation materials across mills, converters, and logistics partners.",
            },
            {
              icon: Target,
              title: "Customer Purchase Process",
              desc:
                "Map awareness → intent → trial → repeat to optimize conversion and lifetime value.",
            },
            {
              icon: Users,
              title: "Primary Research",
              desc:
                "Expert & competitor interviews, mail/online surveys, and mystery shopping in relevant markets.",
            },
            {
              icon: FileText,
              title: "Deliverables & Decision Support",
              desc:
                "Executive summaries, deep-dive reports, and visual dashboards that translate insight into action.",
            },
          ].map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <Card className="rounded-2xl shadow-md hover:shadow-lg transition">
                <CardContent className="p-6">
                  <s.icon className="w-10 h-10 text-indigo-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-gray-700">{s.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Fabric Market Research Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Requirement Analysis", desc: "Align on objectives, scope, and success metrics." },
            { step: "02", title: "Define Objectives", desc: "Convert goals to clear research questions." },
            { step: "03", title: "Research Design", desc: "Methodologies & sampling plan for data capture." },
            { step: "04", title: "Data Collection", desc: "Execute per plan across sources & markets." },
            { step: "05", title: "Quality Checks", desc: "Validate, cleanse, and standardize datasets." },
            { step: "06", title: "Visualization & Analysis", desc: "Turn data into insight with clear visuals." },
            { step: "07", title: "Reporting", desc: "Deliver decision-ready reports & recommendations." },
          ].map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-indigo-600 mb-3">{p.step}</div>
              <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
              <p className="text-gray-700">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Nimble Acuity */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Nimble Fabric Research to Nimble Acuity?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: CheckCircle2,
              title: "Affordable Pricing",
              desc: "Customized, value-for-money pricing aligned to scope and scale.",
            },
            {
              icon: Server,
              title: "Data Security (ISO/IEC 27001:2022)",
              desc: "Strict ISMS protocols to safeguard sensitive information.",
            },
            {
              icon: BarChart3,
              title: "High-quality Outputs (ISO 9001:2015)",
              desc: "Quality-first processes ensure accurate, error-free deliverables.",
            },
            {
              icon: Users,
              title: "Experienced Research Team",
              desc: "Domain-savvy analysts with proven fabric industry expertise.",
            },
            {
              icon: Clock,
              title: "Quick Turnaround",
              desc: "Global delivery model for speed without compromising quality.",
            },
            {
              icon: Globe2,
              title: "Modern Tooling & Footprint",
              desc: "10+ delivery locations and the latest BI/MR technologies.",
            },
          ].map((w, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <w.icon className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{w.title}</h3>
                <p className="text-gray-700">{w.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Primary Research for Top Trade Advisors in China",
              desc:
                "Delivered rapid primary research support out of Shanghai—actionable insights, on time.",
              cta: "Read More",
            },
            {
              title: "Primary & Secondary Research for a US Digital Transformation Firm",
              desc:
                "Provided FTE support for mixed-method research; accelerated strategic planning cycles.",
              cta: "Read More",
            },
          ].map((cs, i) => (
            <Card key={i} className="rounded-2xl shadow-md">
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
      <section className="bg-gray-50 py-16 px-6 text-center">
        <Quote className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
        <p className="text-xl text-gray-800 mb-2">
          “Let me thank you for the professional way in which you are managing the project and
          meeting our deadlines. Our second supplier has let us down considerably—Nimble Acuity has not.”
        </p>
        <p className="text-gray-600">— CEO, Technology Company, UK</p>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nimble Fabric Market Research to Nimble Acuity
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Get customized, decision-ready research that keeps you ahead of trends, threats, and
          opportunities across the fabric value chain.
        </p>
        <Button size="lg" className="bg-white text-violet-700 font-semibold hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
