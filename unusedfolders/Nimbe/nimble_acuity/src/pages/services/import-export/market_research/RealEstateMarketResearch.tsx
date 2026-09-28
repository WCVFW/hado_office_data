import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Building2, BarChart3, ShieldCheck, MapPinned, LineChart, Users2, CircleDollarSign, Globe2, Layers, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import NavigationMenu from "../MegaMenu";

 <NavigationMenu/>
export default function RealEstateMarketResearch() {
   
  const highlights = [
    { icon: BarChart3, text: "Up-to-date market data & meticulous analysis" },
    { icon: ShieldCheck, text: "ISO/IEC 27001:2022 ISMS-certified data security" },
    { icon: Users2, text: "Seasoned analysts & domain experts" },
    { icon: Sparkles, text: "$14/hr flexible pricing" },
  ];

  const services = [
    { title: "Market Analysis & Feasibility Studies", desc: "Identify opportunities, risks, viability, and competitive dynamics to guide investment decisions.", icon: Building2 },
    { title: "Market Trend Forecasting & Predictive Analytics", desc: "Statistical modeling and AI-driven forecasts to anticipate demand, pricing, and cycles.", icon: LineChart },
    { title: "Demographic & Socioeconomic Research", desc: "Target-market profiles from demographics, income, migration, and consumer behavior.", icon: Users2 },
    { title: "Site Selection Analysis", desc: "Spatial analysis using geography, infra, comps, and local trends to pick winning locations.", icon: MapPinned },
    { title: "Competitor Analysis", desc: "Deep dives into strategies, positioning, pricing, and gaps to outmaneuver rivals.", icon: Globe2 },
    { title: "Investment Appraisal & Property Valuation", desc: "Valuations using accepted methodologies + market evidence for stronger deal underwriting.", icon: CircleDollarSign },
    { title: "Consulting & Advisory", desc: "Bespoke guidance to solve complex real estate challenges and unlock value.", icon: Layers },
    { title: "Supply & Demand Analysis", desc: "Granular view of pipeline, absorption, vacancy, and rent trajectories for better planning.", icon: BarChart3 },
    { title: "Location Advisory Analysis", desc: "Geo-data science to pinpoint optimal submarkets aligned to your strategy.", icon: MapPinned },
    { title: "Real Estate Investment Research", desc: "Actionable research memos and models to support go/no-go decisions.", icon: CircleDollarSign },
  ];

  const differentiators = [
    "Data Security – ISO/IEC 27001:2022 ISMS-certified",
    "Skilled Market Research Team on the latest tools & tech",
    "High-quality, error-free deliverables (ISO-certified)",
    "World-class infrastructure & workflows",
    "Flexible, cost-efficient pricing options",
    "Dedicated PM, easy scaling across time zones",
  ];

  const addlServices = [
    { title: "Property Risk Management Services", desc: "Expert analysis to identify, quantify, and mitigate asset risks." },
    { title: "Market Research Surveys", desc: "Instrument design, programming, and analysis for decision-grade feedback." },
    { title: "Consumer Market Research Services", desc: "Insight into buyer/renter preferences to shape product & pricing." },
    { title: "Financial Research Services", desc: "Deeper market understanding for robust financial planning." },
    { title: "Research Report Services", desc: "Crisp, visual reports that translate data into strategy." },
    { title: "Market Research Report Services", desc: "End-to-end market intelligence for timely decisions." },
  ];

  const caseStudies = [
    {
      title: "Business Plans for a Leading Australian Client",
      blurb: "A leading Australian client sought reliable business plan support; we delivered within short timelines.",
    },
    {
      title: "Primary Research for Top Chinese Trade Consultants",
      blurb: "We provided cost-effective primary research to a leading group of consultants in China.",
    },
  ];

  const relatedArticles = [
    "The Power of Data - How Research Services Drive Informed Decision-Making",
    "How to Stay Ahead of Your Competitors by Outsourcing Research & Analysis Services",
    "Revolutionary Growth of the Research Services Industry in the Next Decade",
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12">
      {/* Hero */}
      <NavigationMenu/>
      <section className="text-center space-y-6">
        <motion.h1 initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold">
          Nimble Real Estate Market Research Services
        </motion.h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Get up-to-date market data, meticulously analyzed to generate insightful reports with our comprehensive real estate market research services.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {highlights.map(({ icon: Icon, text }, i) => (
            <Badge key={i} className="text-sm px-3 py-1 rounded-2xl">
              <div className="flex items-center gap-2"><Icon size={16} />{text}</div>
            </Badge>
          ))}
        </div>
        <div className="flex gap-3 justify-center">
          <Button size="lg">Get a Quote</Button>
          <Button size="lg" variant="outline">See Sample Report</Button>
        </div>
      </section>

      {/* Value Prop */}
      <section className="grid md:grid-cols-2 gap-8 items-start">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Turn Research into a Strategic Advantage</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <p>
              We understand hurdles like time-consuming research, outdated data, and limited specialist bandwidth. Our custom assistance keeps you abreast of emerging trends and regulations across real estate categories.
            </p>
            <p>
              Access a dedicated team using advanced tools and robust methodologies to deliver accurate data, meticulous analysis, and tailored, decision-ready reports—saving time and resources while elevating outcomes.
            </p>
          </CardContent>
        </Card>
        <Card className="h-full">
          <CardHeader>
            <CardTitle>What You Gain</CardTitle>
          </CardHeader>
          <CardContent className="grid sm:grid-cols-2 gap-4">
            {["Faster time-to-insight","Lower research costs","Confident investment decisions","Clear competitive positioning","Location & product-fit clarity","Scalable support, 24/7"].map((b, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle2 className="mt-1" />
                <span>{b}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Services */}
      <section>
        <h2 className="text-2xl font-semibold text-center mb-6">Our Real Estate Market Research Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, desc, icon: Icon }, i) => (
            <Card key={i} className="h-full">
              <CardHeader className="space-y-2">
                <div className="flex items-center gap-3"><Icon /><CardTitle>{title}</CardTitle></div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Studies & Testimonials */}
      <section className="grid md:grid-cols-2 gap-8 items-start">
        <Card>
          <CardHeader>
            <CardTitle>Client Success Stories</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {caseStudies.map((c, i) => (
              <div key={i} className="p-4 rounded-xl border">
                <h4 className="font-semibold">{c.title}</h4>
                <p className="text-gray-600">{c.blurb}</p>
                <Button variant="link" className="px-0">Read more</Button>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Clients Speak</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <blockquote className="italic text-gray-700">
              “We have carefully reviewed your documents and are suitably impressed with the meticulous details with which you are conducting your audits to ensure exceptionally high quality for the extracted data delivered.”
            </blockquote>
            <p className="text-sm text-gray-500">VP, Leading STM Publisher, USA</p>
          </CardContent>
        </Card>
      </section>

      {/* Differentiators */}
      <section>
        <h2 className="text-2xl font-semibold text-center mb-6">What Sets Us Apart?</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {differentiators.map((d, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle2 className="mt-1" />
              <span>{d}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section>
        <h2 className="text-2xl font-semibold text-center mb-6">Additional Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {addlServices.map((s, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQs / Expanders */}
      <section>
        <h2 className="text-2xl font-semibold text-center mb-6">FAQs</h2>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do you ensure data security?</AccordionTrigger>
            <AccordionContent>
              We follow ISO/IEC 27001:2022 ISMS controls, with strict access governance and NDA-backed engagements.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What deliverables can I expect?</AccordionTrigger>
            <AccordionContent>
              Executive summaries, dashboards, forecast models, comps tables, heatmaps, and investment memos—tailored to your use case.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can you scale teams quickly?</AccordionTrigger>
            <AccordionContent>
              Yes. With multiple delivery locations and a dedicated PM, we scale resources to meet timelines across time zones.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Related Articles */}
      <section className="bg-gray-50 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Related Articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedArticles.map((a, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle className="text-base">{a}</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="px-0">Read more</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Stay Informed, Stay Ahead</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Partner with us for accurate, timely insights—from market sizing to location strategy and investment appraisal. Focus on your core business while we handle the research heavy-lifting.
        </p>
        <div className="flex gap-3 justify-center">
          <Button size="lg">Contact Us</Button>
          <Button size="lg" variant="outline">Download Brochure</Button>
        </div>
      </section>
    </div>
  );
}