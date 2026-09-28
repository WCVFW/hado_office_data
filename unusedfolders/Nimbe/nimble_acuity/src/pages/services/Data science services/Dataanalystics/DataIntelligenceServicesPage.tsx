import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  BarChart3,
  Database,
  Cloud,
  Search,
  Layers,
  Rocket,
  ShieldCheck,
  Users,
  Headphones,
  Clock,
  CheckCircle2,
  LineChart,
  Globe2,
  BookText,
  Cpu,
  FileText,
  Building2,
  Landmark,
  PhoneCall,
  ShoppingCart,
  Shield,
  Flame,
  GraduationCap,
  Stethoscope,
  Scale,
  Megaphone,
} from "lucide-react";
import DSMainMenu from "../mainmenu";

// ---------- Motion presets (typed to avoid TS errors) ----------
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

// ---------- Data ----------
const services = [
  {
    title: "Machine Learning & AI",
    icon: Brain,
    desc:
      "Accelerate transformation using ML/AI models that augment insights and automate decisions across the business.",
  },
  {
    title: "Data Strategy",
    icon: BarChart3,
    desc:
      "Define business and governance goals; assess current state; build a pragmatic roadmap for analytics maturity.",
  },
  {
    title: "Data Storage Platforms",
    icon: Database,
    desc:
      "Modernize and scale your data platforms to handle large datasets and high‑concurrency, reliably and securely.",
  },
  {
    title: "Cloud Analytics",
    icon: Cloud,
    desc:
      "Design cloud‑native data stacks, centralized platforms, and embed intelligence into existing applications.",
  },
  {
    title: "Cognitive Search",
    icon: Search,
    desc:
      "Deliver enterprise search experiences powered by NLP, relevance tuning, and knowledge graph integrations.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Accurate, Targeted Data Foundation",
    desc:
      "We start with a customized, up‑to‑date database to ensure you reach the right prospects and segments.",
  },
  {
    step: "02",
    title: "Deeper Prospect Intelligence",
    desc:
      "Gain remarkable insights into your highest‑value prospects with enrichment and behavioral signals.",
  },
  {
    step: "03",
    title: "Sales Analytics for Optimization",
    desc:
      "Measure, comprehend, and optimize your sales process to maximize conversion and lifetime value.",
  },
];

const industries = [
  { label: "Finance & Banking", icon: Landmark },
  { label: "Telecom", icon: PhoneCall },
  { label: "Retail", icon: ShoppingCart },
  { label: "Insurance", icon: Shield },
  { label: "Oil & Gas", icon: Flame },
  { label: "Monetary Organizations", icon: Building2 },
  { label: "Real Estate", icon: Building2 },
  { label: "Non‑profits", icon: Building2 },
  { label: "Colleges / Institutions", icon: GraduationCap },
  { label: "DMS Companies", icon: Layers },
  { label: "Healthcare", icon: Stethoscope },
  { label: "Law Firms", icon: Scale },
  { label: "Advertising Firms", icon: Megaphone },
];

const benefits = [
  {
    title: "High‑quality Management (ISO 9001:2015)",
    icon: CheckCircle2,
    desc:
      "Quality gates, reviews, and playbooks ensure near‑100% accuracy across deliveries.",
  },
  {
    title: "High Data Security (ISO/IEC 27001:2022)",
    icon: ShieldCheck,
    desc:
      "Audited ISMS with strict access controls keeps your data private and compliant.",
  },
  {
    title: "Cost‑effective Pricing",
    icon: LineChart,
    desc:
      "Engagement models aligned to scope and budget without compromising outcomes.",
  },
  {
    title: "End‑to‑End Processing",
    icon: BookText,
    desc:
      "From collection and verification to submission—streamlined, measurable, and documented.",
  },
  {
    title: "Certifications & Compliance",
    icon: ShieldCheck,
    desc:
      "ISO certified operations and HIPAA‑compliant processes for regulated workloads.",
  },
  {
    title: "Dedicated Project Manager",
    icon: Users,
    desc:
      "Single point of contact orchestrating cadence, communication, and outcomes.",
  },
  {
    title: "World‑class Infrastructure",
    icon: Cpu,
    desc:
      "Secure environments, modern toolchains, and 24/7 monitored operations.",
  },
  {
    title: "Robust Technologies",
    icon: Rocket,
    desc:
      "Systematic processes, quality reviews, on‑time reports, and high scalability.",
  },
  {
    title: "Quick Turnaround & Scalability",
    icon: Clock,
    desc:
      "Follow‑the‑sun delivery and elastic teams to hit aggressive milestones.",
  },
  {
    title: "24/7 Customer Support",
    icon: Headphones,
    desc:
      "Global support across time zones via phone and email for rapid response.",
  },
];

const otherServices = [
  { lines: ["Artificial", "Intelligence", "Services"] },
  { lines: ["AI‑Driven", "Digital", "Transformation"] },
  { lines: ["Computer", "Vision", "Services"] },
  { lines: ["Cognitive", "Process", "Automation"] },
];

const caseStudies = [
  {
    title: "Document Processing Automation Platform",
    blurb:
      "Built a big‑data platform to automate document processing for a banking firm, cutting manual effort dramatically.",
    cta: "Read the case study",
  },
  {
    title: "Open‑source Analytics Workbench",
    blurb:
      "Delivered an analytics platform for a finance provider across structured and unstructured data with rapid turnaround.",
    cta: "Read the case study",
  },
];

// ---------- Page ----------
export default function DataIntelligenceServicesPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-slate-50 to-white text-slate-800">
      {/* Hero */}
      <DSMainMenu/>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-200">
              <Brain className="h-3.5 w-3.5" /> Data Intelligence Services
            </div>
            <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Turn critical business data into actionable insights
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base sm:text-lg text-slate-600">
              Whether you want to understand your clients or target them better, we transform data with ML/AI and
              cloud analytics to keep decisions accurate, current, and trusted.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Button className="rounded-2xl px-6 py-5 text-base">Get a Proposal</Button>
              <Button variant="outline" className="rounded-2xl px-6 py-5 text-base">Talk to an Expert</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Data Intelligence Services We Offer</h2>
          <Badge variant="secondary" className="rounded-full">Outcome‑driven</Badge>
        </div>
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" {...stagger}>
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
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Our Data Intelligence Process</h2>
          <p className="mt-2 text-slate-600">From accurate foundations to optimized sales analytics—value at each step.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {processSteps.map((ps, i) => (
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

      {/* Industries */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">Industries We Serve</h3>
        </div>
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" {...stagger}>
          {industries.map((ind, i) => (
            <motion.div key={i} {...fadeIn}>
              <Card className="rounded-2xl shadow-sm">
                <CardContent className="p-5">
                  <div className="flex h-28 items-center justify-center text-center">
                    <div className="flex flex-col items-center gap-2">
                      <ind.icon className="h-6 w-6" />
                      <div className="text-sm font-medium text-slate-800 leading-tight">
                        {ind.label}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Other Services */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">Other Services You Can Benefit From</h3>
        </div>
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" {...stagger}>
          {otherServices.map((o, i) => (
            <motion.div key={i} {...fadeInUp}>
              <Card className="rounded-2xl shadow-sm">
                <CardContent className="p-5">
                  <div className="flex h-28 items-center justify-center text-center">
                    <div>
                      {o.lines.map((ln: string, idx: number) => (
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

      {/* Why Nimble */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Why Nimble Data Intelligence to Nimble Acuity?</h2>
          <p className="mt-2 text-slate-600">
            Data made more valuable—richer context, faster decisions, and measurable ROI with certified security.
          </p>
        </div>
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" {...stagger}>
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
          <p className="mt-2 text-slate-600">Real outcomes from our analytics and platform engineering programs.</p>
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
                  <Button variant="outline" className="rounded-2xl">{c.cta}</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <Card className="rounded-2xl bg-slate-900 text-white">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-2xl font-bold">Nimble Data Intelligence Services to Nimble Acuity</h3>
                <p className="mt-2 text-white/80">
                  With 26+ years of experience and 700+ global clients, we convert complex data into actionable insight—
                  securely, scalably, and fast.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-white/90 text-sm">
                  <div className="inline-flex items-center gap-1"><ShieldCheck className="h-4 w-4" /> ISO/IEC 27001:2022</div>
                  <div className="inline-flex items-center gap-1"><Globe2 className="h-4 w-4" /> Global Delivery</div>
                  <div className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> Quick Turnaround</div>
                </div>
              </div>
              <div className="flex flex-col gap-3 lg:items-end">
                <div className="grid grid-cols-2 gap-3 w-full lg:w-auto">
                  {["Cost‑effective", "Scalable", "Secure", "Experienced"].map((m, i) => (
                    <div key={i} className="rounded-2xl bg-white/10 p-4 text-center">
                      <div className="text-sm font-semibold">{m}</div>
                    </div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: "easeOut" as const }}
                  className="mt-3 flex gap-3"
                >
                  <Button className="bg-white text-slate-900 hover:bg-white/90 rounded-2xl px-6 py-5 text-base">Get Started</Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-2xl px-6 py-5 text-base">Contact Sales</Button>
                </motion.div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col items-center gap-3 text-center text-sm text-slate-500">
          <a href="#" className="underline decoration-dotted underline-offset-4">Explore our data intelligence playbook</a>
          <div>© {new Date().getFullYear()} Nimble Acuity. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
