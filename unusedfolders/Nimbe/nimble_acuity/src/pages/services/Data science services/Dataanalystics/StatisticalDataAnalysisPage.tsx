import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sigma,
  BarChart3,
  PieChart,
  Layers3,
  Network,
  ScatterChart,
  Database,
  ShieldCheck,
  Clock,
  TrendingUp,
  Users,
  CheckCircle2,
  FileText,
} from "lucide-react";
import DSMainMenu from "../mainmenu";

// ---------- Motion presets (typed for TS safety) ----------
const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const stagger = {
  whileInView: { transition: { staggerChildren: 0.06 } },
  viewport: { once: true, amount: 0.12 },
};

// ---------- Page ----------
export default function StatisticalDataAnalysisPage() {
  const services = [
    {
      title: "Descriptive Statistics",
      icon: BarChart3,
      desc:
        "Summaries like mean, median, variance—by column or factor—to reveal distribution shape and similarity.",
    },
    {
      title: "Inferential Statistics",
      icon: PieChart,
      desc:
        "Hypothesis tests, confidence intervals, correlations, and models to generalize findings beyond samples.",
    },
    {
      title: "Venn Diagram Support",
      icon: Network,
      desc:
        "Visualize overlaps across sets/classes and taxonomies to simplify communication and decision‑making.",
    },
    {
      title: "Volcano Plotting",
      icon: ScatterChart,
      desc:
        "Rapidly surface significant fold‑changes at scale—ideal for genomics, proteomics, and large experiments.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Requirement Gathering",
      desc:
        "Collaborate to capture objectives, metrics, and governance—tailoring the classification/analysis approach.",
    },
    {
      step: "02",
      title: "Extract",
      desc:
        "Aggregate data from vendors, manufacturers, and internal systems to build a trusted corpus.",
    },
    {
      step: "03",
      title: "Transform",
      desc:
        "Design product trees/taxonomies and clean/standardize to simplify the structure for analysis.",
    },
    {
      step: "04",
      title: "Load",
      desc:
        "Publish classified, analysis‑ready data to your databases and downstream workflows.",
    },
  ];

  const benefits = [
    { title: "Save Money", desc: "Flexible pricing starting at $6/hour matched to scope and timeline.", icon: TrendingUp },
    { title: "Improve Productivity", desc: "Analyst playbooks and automation to accelerate time‑to‑insight.", icon: CheckCircle2 },
    { title: "Optimize Transparency", desc: "Clear SLAs, dashboards, and auditability across users.", icon: Layers3 },
    { title: "Data Security", desc: "Hardened environments and controls to prevent mishandling.", icon: ShieldCheck },
    { title: "Statistics Experts", desc: "Specialists with deep domain knowledge in applied statistics.", icon: Users },
    { title: "Easily Scalable", desc: "Elastic teams and capacity to meet demand spikes.", icon: Database },
    { title: "Assured Compliance", desc: "ISO 9001:2015 and global standards adherence.", icon: ShieldCheck },
    { title: "Quick Turnaround", desc: "Follow‑the‑sun execution with rapid cycles.", icon: Clock },
  ];

  const otherServices = [
    ["Data", "Processing", "Services"],
    ["Data", "Analytics", "Services"],
    ["Nimble", "ePUB", "Solutions"],
    ["Optical", "Character", "Recognition"],
  ];

  const caseStudies = [
    {
      title: "Scanning & Data Entry for UK Software Firm",
      blurb:
        "Configured a bespoke data management solution to close workload gaps and drive revenue for a Berkshire client.",
    },
    {
      title: "eCommerce Data Entry for Bike Accessories",
      blurb:
        "Delivered friendly‑budget data mining and entry for a Poland‑based parts & accessories manufacturer.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-slate-50 to-white text-slate-800">
      {/* Hero */}
      <DSMainMenu/>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-200">
              <Sigma className="h-3.5 w-3.5" /> Statistical Data Analysis Services
            </div>
            <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Nimble Statistical Data Analysis Services
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-slate-600">
              Running a lean architecture? Let our statisticians handle meticulous analysis—<span className="font-semibold">rates starting at $6/hr</span>.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Button className="rounded-2xl px-6 py-5 text-base">Get a Quote</Button>
              <Button variant="outline" className="rounded-2xl px-6 py-5 text-base">Talk to a Statistician</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro blurb */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-4">
        <p className="text-slate-600 text-center">
          We cover quantitative data collection, organization, summary, interpretation, and presentation—designing surveys
          and experiments, then applying descriptive and inferential methods to uncover trends when teams lack in‑house bandwidth.
          With <span className="font-semibold">26+ years</span> of experience across taxonomies and product classification, Nimble Acuity accelerates insight.
        </p>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Our Statistical Data Analysis Services</h2>
          <Badge variant="secondary" className="rounded-full">Specialized Methods</Badge>
        </div>
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" {...stagger}>
          {services.map((s, i) => (
            <motion.div key={i} {...fadeInUp}>
              <Card className="h-full rounded-2xl shadow-sm hover:shadow-md transition">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-3">
                    <s.icon className="h-5 w-5" /> {s.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-sm text-slate-600">{s.desc}</CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Our Statistical Data Analysis Process</h2>
          <p className="mt-2 text-slate-600">Proven stages for clarity, trust, and speed to insight.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-5">
          {process.map((ps, i) => (
            <motion.div key={i} {...fadeInUp}>
              <Card className="rounded-2xl shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-semibold">
                      {ps.step}
                    </span>
                    {ps.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-sm text-slate-600">{ps.desc}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">Other Services You Can Benefit From</h3>
        </div>
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" {...stagger}>
          {otherServices.map((o, i) => (
            <motion.div key={i} {...fadeIn}>
              <Card className="rounded-2xl shadow-sm">
                <CardContent className="p-5">
                  <div className="flex h-28 items-center justify-center text-center">
                    <div>
                      {o.map((ln: string, idx: number) => (
                        <div key={idx} className="text-sm font-medium text-slate-800 leading-tight">{ln}</div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Why Nimble Acuity */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Why Nimble Statistical Data Analysis to Nimble Acuity?</h2>
          <p className="mt-2 text-slate-600">Transparent engagement, certified quality, and expert statisticians.</p>
        </div>
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" {...stagger}>
          {benefits.map((b, i) => (
            <motion.div key={i} {...fadeInUp}>
              <Card className="h-full rounded-2xl shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2"><b.icon className="h-5 w-5" /> {b.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-sm text-slate-600">{b.desc}</CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Client Success Stories */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Client Success Stories</h2>
          <p className="mt-2 text-slate-600">Outcomes delivered across industries and geographies.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {caseStudies.map((c, i) => (
            <Card key={i} className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2"><FileText className="h-5 w-5" /> {c.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-sm text-slate-600">
                <p>{c.blurb}</p>
                <div className="mt-3">
                  <Button variant="outline" className="rounded-2xl">Read more</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <blockquote className="text-slate-700 italic text-center">
              “We were very satisfied with the quality of service Nimble Acuity provided. They met our requests with
              great professionalism and flexibility. We look forward to future projects.”
            </blockquote>
            <div className="mt-3 text-center text-sm text-slate-500">— Spokesperson, Online health lessons company in Canada</div>
          </CardContent>
        </Card>
      </section>

      {/* CTA band */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <Card className="rounded-2xl bg-slate-900 text-white">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-2xl font-bold">Nimble Statistical Data Analysis to Nimble Acuity</h3>
                <p className="mt-2 text-white/80">
                  26+ years of expertise, lightning‑fast processing, and measurable ROI. Let’s design a statistical analysis
                  plan that fits your data and decisions.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-white/90 text-sm">
                  <div className="inline-flex items-center gap-1"><ShieldCheck className="h-4 w-4" /> ISO 9001:2015</div>
                  <div className="inline-flex items-center gap-1"><Database className="h-4 w-4" /> Scalable Capacity</div>
                  <div className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> Quick Turnaround</div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut" as const }}
                className="flex flex-col gap-3 lg:items-end"
              >
                <div className="grid grid-cols-2 gap-3 w-full lg:w-auto">
                  {["Cost‑effective", "Transparent", "Secure", "Expert‑led"].map((m, i) => (
                    <div key={i} className="rounded-2xl bg-white/10 p-4 text-center">
                      <div className="text-sm font-semibold">{m}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex gap-3">
                  <Button className="bg-white text-slate-900 hover:bg-white/90 rounded-2xl px-6 py-5 text-base">Get Started</Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-2xl px-6 py-5 text-base">Contact Sales</Button>
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col items-center gap-3 text-center text-sm text-slate-500">
          <a href="#" className="underline decoration-dotted underline-offset-4">View our statistics playbook</a>
          <div>© {new Date().getFullYear()} Nimble Acuity. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
