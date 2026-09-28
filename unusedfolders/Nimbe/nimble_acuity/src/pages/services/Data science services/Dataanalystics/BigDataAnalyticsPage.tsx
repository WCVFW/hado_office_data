import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Database,
  BarChart3,
  Rocket,
  Clock,
  Layers,
  Shield,
  Zap,
  Activity,
  Users,
  Wrench,
  BookOpen,
  Cpu,
  Merge,
  DownloadCloud,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import DSMainMenu from "../mainmenu";

// Motion presets
const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const containerStagger = {
  animate: { transition: { staggerChildren: 0.06 } },
};

// Data
const services = [
  {
    title: "Analytics Strategy & Planning",
    icon: BarChart3,
    desc:
      "Assess goals, data landscape, and KPIs. Craft a pragmatic analytics roadmap aligned to business outcomes.",
  },
  {
    title: "Data Integration & Migration",
    icon: Merge,
    desc:
      "Unify disparate sources, modernize pipelines, and move securely to cloud data platforms without downtime.",
  },
  {
    title: "Data Mining & DWH Implementation",
    icon: Database,
    desc:
      "Design scalable warehouses/lakes, model entities, and enable governed, performant access layers.",
  },
  {
    title: "Master Data Management (MDM)",
    icon: Layers,
    desc:
      "Create a single source of truth across customers, products, and vendors with stewardship and controls.",
  },
  {
    title: "Tool Implementation & Customization",
    icon: Wrench,
    desc:
      "Deploy, configure, and extend BI/AI stacks—get more value from the tools you already own.",
  },
  {
    title: "Advanced Analytics & Reporting",
    icon: Activity,
    desc:
      "Predictive models, dashboards, and self-service insights that drive decisions in real time.",
  },
];

const benefits = [
  {
    title: "Faster & Smarter Customer Info",
    icon: Users,
    desc:
      "Reveal behaviors and purchasing patterns—inform campaigns and influence outcomes with precision.",
  },
  {
    title: "Co‑related, Verified Signals",
    icon: Shield,
    desc:
      "Correlate and cross‑validate across channels to improve accuracy and reduce noise.",
  },
  {
    title: "Real‑time Insights",
    icon: Clock,
    desc:
      "Stream analytics keeps pace with data deluge so you can decide in the moment—sans assumptions.",
  },
  {
    title: "Faster Business Solutions",
    icon: Zap,
    desc:
      "Surface hidden patterns and opportunities that unlock growth and solve chronic problems.",
  },
  {
    title: "Sustainable Knowledgebase",
    icon: BookOpen,
    desc:
      "Continuously curated insights across customers, products, tech, and trends—your single source for decisions.",
  },
];

const metrics = [
  { value: "40%", label: "Cost Reduction" },
  { value: "8–24 Hrs", label: "Faster Turnaround" },
  { value: "500+", label: "Satisfied Clients" },
  { value: "350+", label: "Data Experts" },
  { value: "99%", label: "Accuracy" },
  { value: "21", label: "Years Experience" },
];

const steps = [
  {
    title: "Align Business Goals",
    desc:
      "We immerse in your objectives, define KPIs, estimate data scope, and agree on delivery cadences.",
  },
  {
    title: "Select the Right Tools",
    desc:
      "Enterprise‑grade and open‑source—aligned to outcomes, budget, security, and scale.",
  },
  {
    title: "Phase‑wise Migration",
    desc:
      "De‑risk change with staged rollouts that deliver value early while optimizing cost.",
  },
];

const toolBadges = [
  "Snowflake", "Databricks", "BigQuery", "Redshift", "Azure Synapse", "Spark",
  "Kafka", "dbt", "Airflow", "Fivetran", "Power BI", "Tableau", "Looker",
  "MLflow", "scikit‑learn", "TensorFlow", "PyTorch",
];

export default function BigDataAnalyticsPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-slate-50 to-white text-slate-800">
      {/* Hero */}
      <DSMainMenu/>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-200">
              <Rocket className="h-3.5 w-3.5" /> Big Data Analytics Services
            </div>
            <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              High‑performance analytics that turn big data into decisive action
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base sm:text-lg text-slate-600">
              Counter overwhelming data volumes with advanced pipelines, governed platforms, and
              real‑time intelligence—so every decision is backed by insight, not guesswork.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Button className="rounded-2xl px-6 py-5 text-base">Talk to a Data Expert</Button>
              <Button variant="outline" className="rounded-2xl px-6 py-5 text-base">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
          initial="initial"
          animate="animate"
          variants={containerStagger}
        >
          {metrics.map((m, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <Card className="rounded-2xl shadow-sm">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-extrabold text-slate-900">{m.value}</div>
                  <div className="text-xs text-slate-500">{m.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Our Big Data Analytics Services
          </h2>
          <Badge variant="secondary" className="rounded-full">End‑to‑end Delivery</Badge>
        </div>
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerStagger}
        >
          {services.map((s, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <Card className="h-full rounded-2xl shadow-sm hover:shadow-md transition">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <s.icon className="h-5 w-5" />
                    <CardTitle className="text-base">{s.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 text-sm text-slate-600">{s.desc}</CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Big Data that Fast‑Tracks Your Business
          </h2>
          <p className="mt-2 text-slate-600">
            Smarter analytics, correlated signals, and real‑time intelligence—engineered for action.
          </p>
        </div>
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerStagger}
        >
          {benefits.map((b, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <Card className="h-full rounded-2xl shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <b.icon className="h-5 w-5" />
                    <CardTitle className="text-base">{b.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 text-sm text-slate-600">{b.desc}</CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Knowledgebase highlight */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="rounded-2xl border-blue-100 bg-blue-50/50">
            <CardContent className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between p-6">
              <div className="flex items-center gap-3">
                <DownloadCloud className="h-5 w-5" />
                <div className="font-medium">Sustainable Knowledgebase</div>
              </div>
              <p className="text-sm text-slate-600 md:max-w-3xl">
                Continuous capture of customer, product, feedback, industry, and technology signals—segmented and
                governed to become your single best access point for decision‑making.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* How we deliver */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            How We Leverage Big Data for Your Business
          </h2>
          <p className="mt-2 text-slate-600">
            From alignment to adoption—value at every phase of your analytics journey.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <Card key={i} className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-semibold">
                    {i + 1}
                  </span>
                  {s.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-sm text-slate-600">{s.desc}</CardContent>
            </Card>
          ))}
        </div>

        {/* Tools */}
        <Card className="mt-6 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Cpu className="h-5 w-5" /> Big Data & Analytics Tooling We Work With
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-2">
              {toolBadges.map((t, i) => (
                <Badge key={i} variant="secondary" className="rounded-full">{t}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA band */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <Card className="rounded-2xl bg-slate-900 text-white">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-2xl font-bold">
                  Nimble Big Data Analytics to Nimble Acuity
                </h3>
                <p className="mt-2 text-white/80">
                  With deep expertise in data mining, scalable platforms, and advanced analytics, our team delivers
                  faster time‑to‑insight with accuracy and governance built in.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-white/90 text-sm">
                  <div className="inline-flex items-center gap-1"><TrendingUp className="h-4 w-4" /> Outcome‑driven</div>
                  <div className="inline-flex items-center gap-1"><Shield className="h-4 w-4" /> Secure & Governed</div>
                  <div className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> Rapid Value</div>
                  <div className="inline-flex items-center gap-1"><CheckCircle className="h-4 w-4" /> Proven at Scale</div>
                </div>
              </div>
              <div className="flex flex-col gap-3 lg:items-end">
                <div className="grid grid-cols-2 gap-3 w-full lg:w-auto">
                  {metrics.slice(0,4).map((m, i) => (
                    <div key={i} className="rounded-2xl bg-white/10 p-4 text-center">
                      <div className="text-xl font-extrabold">{m.value}</div>
                      <div className="text-xs text-white/80">{m.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex gap-3">
                  <Button className="bg-white text-slate-900 hover:bg-white/90 rounded-2xl px-6 py-5 text-base">
                    Get a Proposal
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-2xl px-6 py-5 text-base">
                    Contact Sales
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer note */}
      <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col items-center gap-3 text-center text-sm text-slate-500">
          <div className="inline-flex items-center gap-2">
            <a href="#" className="underline decoration-dotted underline-offset-4">
              Read our ultimate cheat sheet on Big Data Analytics
            </a>
          </div>
          <div>© {new Date().getFullYear()} Nimble Acuity. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}