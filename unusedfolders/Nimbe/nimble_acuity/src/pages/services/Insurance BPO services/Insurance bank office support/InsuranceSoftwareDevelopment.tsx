import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Imainmenu from "../Imainmenu";

export default function InsuranceSoftwareDevelopment(): JSX.Element {
  const services = [
    {
      title: "Decision Management Solution",
      desc: "Centralized decision repository for consistent, reusable business rules and policy logic.",
    },
    {
      title: "Life, Pension & Investment Market Solution",
      desc: "End-to-end insurance administration with workflow, event-driven architecture and lifecycle automation.",
    },
    {
      title: "Non-life P&C Market Solution",
      desc: "Cloud-based modular systems for personal, commercial and specialty lines with automated processing.",
    },
    {
      title: "Reinsurance Market Solution",
      desc: "Comprehensive contract, placement, reporting and accounting capabilities for reinsurance operations.",
    },
  ];

  const process = [
    { step: "01. Requirement Analysis", desc: "Gather requirements and define scope aligned to business objectives." },
    { step: "02. Design", desc: "Design scalable, secure architecture and UX for the insurance solution." },
    { step: "03. Implementation", desc: "Iterative development with CI/CD, code reviews and incremental deliveries." },
    { step: "04. Testing", desc: "End-to-end QA, integration, performance and security testing before release." },
    { step: "05. Final Delivery", desc: "Handover, documentation, training and post-production support." },
  ];

  const otherServices = [
    "Insurance Reporting",
    "Document Indexing",
    "Insurance BPO Customer Support",
    "Insurance Accounting & Billing",
  ];

  const benefits = [
    "Flexible Pricing",
    "ISO/IEC 27001:2022 Data Security",
    "Quick Turnaround via Global Delivery Centers",
    "Experienced Insurance Software Experts",
    "ISO-certified Quality Delivery",
    "State-of-the-art Infrastructure",
    "Dedicated Project Manager (SPOC)",
    "24/7 Availability",
    "Seamless Scalability",
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <Imainmenu/>
      <section className="bg-gradient-to-r from-indigo-700 to-sky-600 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nimble Insurance Software Development Services</h1>
          <p className="text-lg md:text-xl mb-6">
            Get efficient, innovative, customized and cost-effective insurance software by partnering with Nimble Acuity.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary">Get Started</Button>
            <Button size="lg">Request Free Trial</Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto py-12 px-6 text-center">
        <p className="text-gray-700">
          If developing insurance software in-house is expensive or you lack domain expertise, Nimble to our experienced
          team to access talent, cut costs and accelerate delivery without compromising quality.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Insurance Software Services We Offer</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <Card key={i} className="shadow-sm hover:shadow-md transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Free Trial CTA */}
      <section className="py-10 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-yellow-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Avail 1 WEEK FREE TRIAL on any Service</h3>
          <p className="text-gray-700 mb-4">TRY before you BUY — test any software service free for one week.</p>
          <Button size="lg">Start Free Trial</Button>
        </div>
      </section>

      {/* Software Accordion */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">Insurance Software We Use / Integrate With</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="software">
            <AccordionTrigger>View Full Software & Integration List</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-gray-700 leading-relaxed">
                Vertafore, Nexsure, Aspire, InsurancePro, HawkSoft, Agency Matrix, Applied Agency Management, Newton Agency Solution,
                Agency Systems, Insly, QQCatalyst, IBM SPSS, SAS Advanced Analytics, Bitrix24, CommissionTrac, CommissionsEZ, QuickBooks,
                Sage, DocuPhase, ClickClaims, PLEXIS, Record360, and many more. We also integrate with client AMS, CRM and reinsurance systems.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Insurance Software Development Process</h2>
        <div className="max-w-5xl mx-auto space-y-4">
          {process.map((p, i) => (
            <div key={i} className="flex items-start gap-4 bg-white p-4 rounded shadow-sm">
              <div className="flex-none">
                <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold">{String(i+1).padStart(2,'0')}</div>
              </div>
              <div>
                <h3 className="font-semibold">{p.step}</h3>
                <p className="text-gray-600">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6">
        <h3 className="text-2xl font-semibold text-center mb-6">Other Services You Can Benefit From</h3>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherServices.map((s, i) => (
            <Card key={i} className="shadow-sm">
              <CardContent className="p-4 text-center font-medium">{s}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Why Choose Nimble Acuity for Insurance Software Development?</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-3 bg-white p-4 rounded shadow-sm">
              <CheckCircle className="w-6 h-6 text-emerald-500 mt-1" />
              <div className="text-gray-700">{b}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 px-6 text-center">
        <h3 className="text-2xl font-semibold mb-4">Client Success Stories</h3>
        <p className="max-w-3xl mx-auto text-gray-700 mb-6">
          We've delivered end-to-end insurance systems and integrations for global insurers, improving automation, reporting and time-to-market.
        </p>
        <Button variant="outline">Read Case Study</Button>
      </section>

      {/* Final CTA */}
      <section className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Nimble Insurance Software Services to Nimble Acuity</h2>
        <p className="max-w-3xl mx-auto mb-6">If you’re looking for cost-effective, secure, and fast insurance software development, let’s talk. Get in touch today!</p>
        <div className="flex justify-center gap-4">
          <Button size="lg" variant="secondary">Contact Us</Button>
          <Button size="lg">Request Free Trial</Button>
        </div>
      </section>
    </div>
  );
}
