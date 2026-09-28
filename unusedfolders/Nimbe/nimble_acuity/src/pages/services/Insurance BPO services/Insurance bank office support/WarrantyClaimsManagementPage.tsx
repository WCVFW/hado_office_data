import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Imainmenu from "../Imainmenu";

export default function WarrantyClaimsManagementPage(): JSX.Element {
  const features = [
    { title: "Easy Claims Submission", desc: "Clients can easily submit claims from any location and track them in real-time." },
    { title: "Coverage Validity", desc: "Our system cross-checks and verifies claim validity across dealer locations efficiently." },
    { title: "Claim Routing", desc: "Claim details can be routed to specific job codes using rule-based integration." },
    { title: "Supplier Recovery", desc: "Easily track suppliers under claim and share cost-bearing responsibilities fairly." },
    { title: "Payments", desc: "Claim-related transactions processed per rules set for suppliers, OEM, or customers." },
  ];

  const software = [
    "A1 Tracker",
    "Caseblocks",
    "ClickClaims",
    "DocuPhase",
    "HealthQx",
    "HEALTHsuite",
    "PLEXIS payer platforms",
    "Record360",
    "QUICK CAP",
    "Virtual Claims Adjuster",
  ];

  const benefits = [
    "Affordable Pricing Options",
    "ISO/IEC 27001:2022 Certified Information Security",
    "Quick Turnaround via Global Delivery Centers",
    "Experienced Insurance Experts",
    "High-quality, ISO-compliant Services",
    "Best-in-class Infrastructure",
    "Dedicated Single Point of Contact",
    "24/7 Availability",
    "Scalable Service Capacity",
  ];

  const otherServices = [
    "Underwriting for Property & Casualty Insurance",
    "Insurance Reporting Services",
    "Insurance Data Entry Services",
    "Insurance BPO Customer Support",
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <Imainmenu/>
      <section className="bg-gradient-to-r from-indigo-700 to-sky-700 text-white text-center py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nimble Warranty Claims Management
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Accelerate performance, reduce fraudulent claims, and improve warranty claims management efficiency with Nimble Acuity.
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
          If your team struggles to reduce fraud, shorten turnaround, or improve claims-tracking, outsourcing warranty claims management lets you save time, cut costs, and focus on core competencies.
        </p>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Warranty Claims Management Services We Offer</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Card key={i} className="shadow-sm hover:shadow-md transition">
              <CardContent className="p-5">
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Free Trial */}
      <section className="py-10 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-yellow-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Avail 1 WEEK FREE TRIAL on any Service</h3>
          <p className="text-gray-700 mb-4">Try our warranty claims management services free for one week and experience the benefits before committing.</p>
          <Button size="lg">Start Free Trial</Button>
        </div>
      </section>

      {/* Software */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Warranty Claims Management Software We Use</h2>
        <Accordion type="single" collapsible className="mx-auto max-w-3xl">
          <AccordionItem value="software">
            <AccordionTrigger>View Software Tools</AccordionTrigger>
            <AccordionContent>
              <ul className="mt-4 space-y-3 text-gray-700">
                {software.map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-600 mt-1" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Why Choose Nimble Acuity for Warranty Claims Management?</h2>
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
      <section className="py-12 px-6">
        <h3 className="text-xl font-semibold text-center mb-6">Other Services You Can Benefit From</h3>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherServices.map((s, i) => (
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
          We’ve helped insurance providers streamline warranty claims and back-office operations, cutting fraud and reducing turnaround times significantly.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline">Read Case Study</Button>
          <Button>Contact Sales</Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-indigo-700 to-sky-700 text-white text-center py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Nimble Warranty Claims Management to Nimble Acuity</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Get cost-effective, secure, and efficient warranty claims management that helps you save time and reduce fraud.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" variant="secondary">Request Demo</Button>
          <Button size="lg">Start Free Trial</Button>
        </div>
      </section>
    </div>
  );
}
