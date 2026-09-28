import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Imainmenu from "../Imainmenu";

export default function CatastropheModelingPage(): JSX.Element {
  const services = [
    "Portfolio & Accounting Modeling",
    "Natural Catastrophe & Terrorism Modeling",
    "Exposure Profiling & Loss Report Generation",
    "Application of Reinsurance Programs",
    "Automation to Expedite Repetitive Processes",
    "Raw Data Scrubbing",
    "Conversion Projects Across Proprietary Models",
    "Accumulation Management",
  ];

  const softwareExamples = [
    "RMS - RiskLink, RiskBrowser, PTM",
    "CoreLogic - RQE",
    "AIR - TOUCHSTONE, CLASIC/2, CATRADER",
    "Plus integration with common AMS/analytics tools (Vertafore, Nexsure, SAS, IBM SPSS, Bitrix24, etc.)",
  ];

  const processSteps = [
    { step: "01. Event Generation", desc: "Simulate plausible catastrophic events capturing severity, frequency and location." },
    { step: "02. Intensity Calculation", desc: "Calculate event intensity at each exposed site for every simulated event." },
    { step: "03. Exposure Data", desc: "Input replacement values, property characteristics and other exposure attributes." },
    { step: "04. Damage Estimation", desc: "Estimate physical damage for each exposed site using model outputs." },
    { step: "05. Insured Loss Calculation", desc: "Apply policy terms to estimate insured losses and produce actionable results." },
  ];

  const benefits = [
    "Flexible Pricing",
    "ISO 27001-aligned Information Security",
    "Quick Turnaround via Global Delivery Centers",
    "Experienced Catastrophe Modeling Experts",
    "High-quality, ISO-compliant Deliverables",
    "State-of-the-art Modeling Infrastructure",
    "Dedicated Single Point of Contact (SPOC)",
    "24/7 Availability",
    "Easily Scalable Resources",
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <Imainmenu/>
      <section className="bg-gradient-to-r from-sky-700 to-indigo-700 text-white text-center py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nimble Catastrophe Modeling for Insurance
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Manage risk, monitor exposures, and prepare for rare catastrophic events with expert CAT modeling services.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary">Get Started</Button>
            <Button size="lg">Request Free Trial</Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <p className="text-center text-gray-700 max-w-3xl mx-auto">
          If you need robust stochastic modeling to analyze the after-effects of rare major events, our CAT modeling team
          provides validated model builds, exposure profiling, loss estimation and automation to make your portfolio resilient
          and decision-ready.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Catastrophe Modeling Services We Offer</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <Card key={i} className="shadow-sm hover:shadow-md transition">
              <CardContent className="p-5">
                <h3 className="font-semibold mb-2">{s}</h3>
                <p className="text-sm text-gray-600">
                  We deliver accurate, model-driven outputs tailored to underwriting, reinsurance and portfolio needs.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Free Trial */}
      <section className="py-10 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-yellow-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Avail 1 WEEK FREE TRIAL on any Service</h3>
          <p className="text-gray-700 mb-4">Try our CAT modeling service free for one week — see model outputs and workflow in action.</p>
          <Button size="lg">Start Free Trial</Button>
        </div>
      </section>

      {/* Software */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Catastrophe Modeling Tools & Integrations</h2>
        <Accordion type="single" collapsible className="mx-auto max-w-3xl">
          <AccordionItem value="tools">
            <AccordionTrigger>View Key Modeling Platforms & Integrations</AccordionTrigger>
            <AccordionContent>
              <ul className="mt-4 space-y-3 text-gray-700">
                {softwareExamples.map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-sky-600 mt-1" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                We also integrate outputs with insurers' AMS, BI and reinsurance placement systems to produce production-ready results.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Catastrophe Modeling Process We Follow</h2>
        <div className="max-w-5xl mx-auto space-y-6">
          {processSteps.map((p, idx) => (
            <div key={idx} className="flex items-start gap-4 bg-white rounded-lg p-4 shadow-sm">
              <div className="flex-none">
                <div className="w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center font-semibold">
                  {String(idx + 1).padStart(2, "0")}
                </div>
              </div>
              <div>
                <h3 className="font-semibold">{p.step}</h3>
                <p className="text-sm text-gray-600">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Why Choose Nimble Acuity for CAT Modeling?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-3 bg-white p-4 rounded shadow-sm">
              <CheckCircle className="w-6 h-6 text-emerald-500 mt-1" />
              <div className="text-gray-700">{b}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-gray-50 py-12 px-6">
        <h3 className="text-xl font-semibold text-center mb-6">Other Services You Can Benefit From</h3>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {["Insurance Data Entry", "Insurance Reporting", "Insurance Accounting & Billing", "Insurance BPO Customer Support"].map((s, i) => (
            <Card key={i} className="shadow-sm">
              <CardContent className="p-4 text-center font-medium">{s}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 px-6 text-center">
        <h3 className="text-2xl font-semibold mb-4">Client Success Stories</h3>
        <p className="max-w-3xl mx-auto text-gray-700 mb-6">
          We helped global insurers and brokers integrate CAT outputs into underwriting and reinsurance workflows, improving portfolio decisions and reducing post-event surprises.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline">Read Case Study</Button>
          <Button>Contact Sales</Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-sky-700 to-indigo-700 text-white text-center py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Nimble Catastrophe Modeling to Nimble Acuity</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Get production-ready CAT models, unbiased exposure analysis and insured-loss estimates — delivered securely and at scale.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" variant="secondary">Request Demo</Button>
          <Button size="lg">Start Free Trial</Button>
        </div>
      </section>
    </div>
  );
}
