import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  BarChart3,
  Target,
  CheckCircle2,
  Layers,
  Sparkles,
  Users,
  ListChecks,
  LineChart,
  Zap,
  ShieldCheck,
  Headphones,
  Clock,
  DollarSign,
  FileText,
  Globe,
  Store,
  TrendingUp,
  Boxes,
  Landmark,
  Settings2,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import NavigationMenu from "../MegaMenu";

// Tailwind utility
const section = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 },
};

export default function AmazonProductResearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Hero */}
       <NavigationMenu/>
      <header className="relative overflow-hidden">
        <div className={`${section} pt-16 pb-12`}>
          <motion.div
            {...fadeUp}
            className="flex flex-col items-start gap-6 text-left"
          >
            <Badge className="rounded-2xl px-3 py-1" variant="secondary">
              Amazon Product Research Services
            </Badge>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
              Avoid analysis paralysis with our{" "}
              <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                analytics-powered, customer-focused
              </span>{" "}
              Amazon product research services.
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl">
              Consistently shortlist high-demand, low-competition items that
              assure healthy margins and zero legal issues. We identify
              products with favorable shipping conditions, strong profitability,
              and no category constraints—so you can scale with confidence.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button size="lg" className="rounded-2xl">
                Reach Out — Get a Shortlist
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl">
                Book a Discovery Call
              </Button>
              <div className="flex items-center gap-2 text-slate-500">
                <ShieldCheck className="h-4 w-4" />
                <span>No guesswork. Evidence-based.</span>
              </div>
            </div>

            <div className="flex items-center gap-5 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                <span>Starting at $14/hr</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Quick analysis & delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="h-4 w-4" />
                <span>24/7 customer support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Intro Blurb */}
      <section className={`${section} pb-6`}>
        <motion.div
          {...fadeUp}
          className="grid gap-6 md:grid-cols-3 rounded-2xl"
        >
          <Card className="md:col-span-2 shadow-sm">
            <CardContent className="p-6">
              <p className="text-slate-700">
                Choosing the right products on Amazon demands patience,
                extensive research, and a deep understanding of customer
                preferences. Our metrics-led, customer-attuned approach lets our
                consultants sift, organize, and condense large data volumes to
                surface your best opportunities—fast.
              </p>
              <p className="mt-4 text-slate-700">
                Ready to capitalize on seasoned guidance and eliminate
                guesswork? Connect with us to accelerate your success.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Key Outcomes</CardTitle>
              <CardDescription>
                What our research unlocks for you
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2">
              {[
                "High-demand, low-competition picks",
                "Healthy margins & smooth shipping",
                "No legal/category constraints",
                "Actionable, prioritized shortlists",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-green-600" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Services */}
      <section className={`${section} py-10`}>
        <motion.h2
          {...fadeUp}
          className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6"
        >
          Amazon Product Research Solutions We Offer
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Search,
              title: "Product Identification Services",
              desc:
                "ML-assisted trend & demand analysis to spot high-demand, low-competition winners aligned to your goals.",
            },
            {
              icon: Target,
              title: "Competitor Analysis",
              desc:
                "Deep dive on rivals’ assortment, pricing, reviews, content, and share to reveal exploitable gaps.",
            },
            {
              icon: BarChart3,
              title: "Sales Estimation",
              desc:
                "AI-powered forecasting to estimate volumes and guide confident inventory & launch decisions.",
            },
            {
              icon: DollarSign,
              title: "Pricing Strategy",
              desc:
                "Dynamic pricing guidance using elasticity insights to maximize contribution margins.",
            },
            {
              icon: FileText,
              title: "Product Listing Optimization",
              desc:
                "SEO-smart titles, bullets, and A+ content crafted to boost visibility and conversion.",
            },
            {
              icon: Globe,
              title: "Supplier & Manufacturer Research",
              desc:
                "Data-driven vendor discovery and vetting for reliability, quality, and landed-cost efficiency.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="h-full shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-sky-600" />
                  <CardTitle className="text-lg">{title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 text-sm">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Consulting */}
      <section className={`${section} py-10`}>
        <Card className="shadow-sm">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="max-w-3xl">
                <h3 className="text-xl font-semibold mb-2">
                  Amazon Product Research Consulting Services
                </h3>
                <p className="text-slate-700">
                  One-size-fits-all rarely works on Amazon. Our consultants
                  dissect your unique context, audience, and economics to craft
                  tailored strategies—so you uncover products that truly
                  resonate and scale.
                </p>
              </div>
              <Badge variant="secondary" className="h-fit rounded-2xl">
                Bespoke Research
              </Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Tools */}
      <section className={`${section} py-10`}>
        <motion.h2
          {...fadeUp}
          className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6"
        >
          Key Tools for Effective Amazon Product Research
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "Helium 10", icon: Layers },
            { name: "Jungle Scout", icon: TrendingUp },
            { name: "Viral Launch", icon: Rocket },
            { name: "AMZScout", icon: Boxes },
          ].map(({ name, icon: Icon }) => (
            <Card key={name} className="shadow-sm">
              <CardContent className="p-5 flex items-center gap-3">
                <Icon className="h-5 w-5 text-blue-600" />
                <span className="font-medium">{name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className={`${section} py-10`}>
        <motion.h2
          {...fadeUp}
          className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6"
        >
          Our Multi-step Process Flow
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            {
              step: "01",
              title: "Market Trend Identification",
              desc:
                "Spot current trends & evolving customer needs to get ahead of the curve.",
              icon: LineChart,
            },
            {
              step: "02",
              title: "Product Potential Evaluation",
              desc:
                "Assess profitability, demand, logistics, and competition for each candidate.",
              icon: ListChecks,
            },
            {
              step: "03",
              title: "Strategic Planning",
              desc:
                "Align launch, pricing, and positioning with product & market insights.",
              icon: Settings2,
            },
            {
              step: "04",
              title: "Continuous Monitoring",
              desc:
                "Track trends, sales signals, and rivals to refine decisions in real time.",
              icon: Zap,
            },
          ].map(({ step, title, desc, icon: Icon }) => (
            <Card key={step} className="shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Badge className="rounded-xl" variant="outline">
                    {step}
                  </Badge>
                  <Icon className="h-4 w-4 text-sky-600" />
                </div>
                <CardTitle className="mt-2 text-base">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-700">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Nimble Acuity */}
      <section className={`${section} py-10`}>
        <motion.h2
          {...fadeUp}
          className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6"
        >
          Why Nimble Amazon Product Research to Nimble Acuity?
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Users,
              title: "Access to Certified Business Experts",
              desc:
                "Seasoned product managers and analysts guide profitable, defensible picks.",
            },
            {
              icon: Sparkles,
              title: "Latest Tools & Technologies",
              desc:
                "Best-in-class suites to optimize visibility, content, and sales velocity.",
            },
            {
              icon: Target,
              title: "Result-oriented Solutions",
              desc:
                "Competitor audits, account reviews, and clear action plans tied to outcomes.",
            },
            {
              icon: DollarSign,
              title: "Best-in-class Prices",
              desc:
                "Pocket-friendly pricing so you can scale research without overspending.",
            },
            {
              icon: Clock,
              title: "Quick Analysis & Delivery",
              desc:
                "Fast turnaround on shortlists that meet demand, margin, and logistics criteria.",
            },
            {
              icon: Headphones,
              title: "Single POC & 24/7 Support",
              desc:
                "Dedicated PM plus around-the-clock support to keep momentum high.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="h-full shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-sky-600" />
                  <CardTitle className="text-lg">{title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-700">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials & Case Studies */}
      <section className={`${section} py-10`}>
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Client Success Stories</CardTitle>
              <CardDescription>Recent research engagements</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div>
                <h4 className="font-medium">
                  Research Support for Global Marketing Strategy Firm
                </h4>
                <p className="text-sm text-slate-700">
                  We gathered consumer benefits, manufacturer data, store
                  details, product images, USPs, wellness products and more;
                  validated all information and delivered a comprehensive report.
                </p>
              </div>
              <div className="border-t pt-4">
                <h4 className="font-medium">
                  KOL Identification & Mapping — UK Healthcare Provider
                </h4>
                <p className="text-sm text-slate-700">
                  Built a patented approach across data point identification,
                  extraction, rating, and mini-profiles—delivering accurate,
                  region-agnostic KOL databases.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Clients Speak</CardTitle>
              <CardDescription>Testimonials</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <blockquote className="rounded-xl border bg-white p-5 text-slate-700">
                “The services Nimble Acuity provided helped us achieve
                substantial cost and time savings on several difficult projects.
                Their prompt attention to our requests and attention to detail
                is excellent.”
                <footer className="mt-3 text-sm text-slate-500">
                  — Senior Vice President, Automotive, Transportation Industry
                  Solutions Group
                </footer>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Services */}
      <section className={`${section} py-10`}>
        <motion.h2
          {...fadeUp}
          className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6"
        >
          Additional Services You Can Benefit From
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Market Research Services",
              desc:
                "Uncover trends and insights to drive strategy and competitive advantage.",
              icon: Store,
            },
            {
              title: "Restaurant Market Research",
              desc:
                "Menu optimization and engagement insights for F&B brands.",
              icon: Users,
            },
            {
              title: "Product Research Services",
              desc:
                "Identify high-profit, low-competition products beyond Amazon.",
              icon: Search,
            },
            {
              title: "Financial Research Services",
              desc:
                "Evidence-based inputs to inform investments and performance.",
              icon: Landmark,
            },
            {
              title: "Market Research Survey Services",
              desc:
                "Design and deploy surveys that surface actionable insights.",
              icon: ListChecks,
            },
            {
              title: "Real Estate Market Research",
              desc:
                "Data-led guidance for profitable property bets and development.",
              icon: BarChart3,
            },
          ].map(({ title, desc, icon: Icon }) => (
            <Card key={title} className="shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-blue-600" />
                  <CardTitle className="text-base">{title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-700">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={`${section} py-14`}>
        <Card className="shadow-sm">
          <CardContent className="p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold">
                  Nimble Amazon Product Research Services to Transform Your
                  Marketplace Performance
                </h3>
                <p className="mt-3 text-slate-700">
                  We deliver analytics-powered, evidence-based shortlists that
                  align with trends and consumer patterns—so you can launch
                  confidently and scale sustainably.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Badge variant="outline" className="rounded-2xl">
                    Data-driven
                  </Badge>
                  <Badge variant="outline" className="rounded-2xl">
                    Customer-focused
                  </Badge>
                  <Badge variant="outline" className="rounded-2xl">
                    Fast Turnaround
                  </Badge>
                </div>
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="grid gap-3"
                aria-label="Contact form"
              >
                <Input placeholder="Your name" />
                <Input type="email" placeholder="Work email" />
                <Input placeholder="Company" />
                <Textarea placeholder="Tell us about your niche / goals" />
                <div className="flex items-center gap-3">
                  <Button type="submit" className="rounded-2xl">
                    Get My Shortlist
                  </Button>
                  <Button type="button" variant="outline" className="rounded-2xl">
                    Talk to an Expert
                  </Button>
                </div>
                <p className="text-xs text-slate-500">
                  By submitting, you agree to be contacted about our services.
                </p>
              </form>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Resources */}
      <section className={`${section} pb-20`}>
        <div className="grid lg:grid-cols-3 gap-4">
          {[
            "The Power of Data — How Research Services Drive Informed Decision-Making",
            "How to Stay Ahead of Competitors by Outsourcing Research & Analysis",
            "Revolutionary Growth of the Research Services Industry in the Next Decade",
          ].map((title) => (
            <Card key={title} className="shadow-sm hover:shadow-md transition">
              <CardContent className="p-5">
                <h4 className="font-medium">{title}</h4>
                <p className="text-sm text-slate-600 mt-2">
                  Read our perspective on where research is headed—and how to
                  use it to win.
                </p>
                <Button variant="link" className="px-0 mt-1">
                  Read more →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="border-t">
        <div className={`${section} py-8 text-sm text-slate-500`}>
          © {new Date().getFullYear()} Nimble Acuity — Amazon Product Research
          Services
        </div>
      </footer>
    </div>
  );
}
