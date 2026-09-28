import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Imainmenu from "../Imainmenu";

export default function InsuranceBPMPage() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="w-full bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Nimble Business Process Management (BPM) for Insurance</h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          With Nimble Acuity's business process management for insurance you can boost profits, expand your market share, and stand out among your competitors.
        </p>
        <Button variant="secondary" size="lg">Get Started</Button>
      </section>

      {/* Services Section */}
      <section className="w-full max-w-6xl py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Business Process Management for Insurance Back Office Support We Offer</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Insurance Claims Entry", desc: "Setting up your claims in your software system and configuring the claim notice with error-free entry." },
            { title: "Insurance Claims Follow-up", desc: "Follow-up with authorities, assign adjusters, and manage client communication." },
            { title: "Claim Status Updation", desc: "Update claim status and maintain client communication notes." },
            { title: "Claim Close Outs", desc: "Ensure information accuracy and proper closure of claims." },
            { title: "Reporting", desc: "Compile data and deliver daily, weekly, monthly, or quarterly reports." },
          ].map((s, i) => (
            <Card key={i} className="shadow-md">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Free Trial */}
      <section className="w-full bg-gray-100 py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-2">Avail 1 WEEK FREE TRIAL on any Service</h2>
        <p className="mb-4">TRY, before you BUY! Avail 1 WEEK FREE TRIAL on any service of your choice.</p>
        <Button size="lg">Get Started Now</Button>
      </section>

      {/* Insurance Software Accordion */}
      <section className="w-full max-w-4xl py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Insurance Software We Use</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="software">
            <AccordionTrigger>View Full List of Insurance Software</AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700 text-sm leading-6">
                Vertafore, Nexsure, Aspire, InsurancePro, HawkSoft, Agency Matrix, Applied Agency Management, Newton Agency Solution, Agency Systems, Insly, SEMCATA, A1 Tracker, Jenesis, ABS, SIBRO, 1app - C2MS, AgencyIntel, QQCatalyst, Board, EverString, Halo, IBM SPSS, Radius, SAS, Statistica, ClickClaims, PLEXIS, Record360, Virtual Claims Adjuster, Bitrix24, Commission calculator, CommissionsEZ, CommissionTrac, EvolveSPM, GoalPost, GreenWave, Iconixx, Incentive SPm, LOGIC.ca, Caseblocks, Cases CRM, Claims Manager, DocuPhase, HealthQx, HEALTHsuite, INSIS, PCRS, QUICK CAP, QuickBooks, Billbooks, MYOB, Invoice Studio, Tradeshift, Sage, CheckMark, MultiLedger, Invoicera.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Process Section */}
      <section className="w-full max-w-5xl py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Business Process Management for Insurance - Process We Follow</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Claims Handling", "Policy Servicing", "Submission to Issue", "Quality Assurance", "Accounting", "Claims Renewal"].map((step, i) => (
            <Card key={i} className="shadow-md">
              <CardContent className="p-6 text-center font-semibold">{step}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Why Choose Nimble Acuity for Offshore BPM for Insurance?</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Affordable Pricing Options",
            "Information Security (ISO/IEC 27001:2022)",
            "Quick Turnaround Time",
            "Experienced BPM Experts",
            "High-quality Services",
            "Best Infrastructure",
            "Single Point of Contact",
            "24/7 Availability",
            "Ease of Scalability",
          ].map((point, i) => (
            <Card key={i}>
              <CardContent className="p-6 text-center text-gray-700">{point}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="w-full max-w-5xl py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Insurance Policy Checking for NY-based Client", desc: "A leading New York-based client needed policy checking services. Our team provided cost-effective and quick solutions." },
            { title: "Back-office Operations for Miami-based Customer", desc: "A Miami-based insurance company required back-office operations support. We delivered within a short turnaround time." },
          ].map((story, i) => (
            <Card key={i} className="shadow-md">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2">{story.title}</h3>
                <p className="text-gray-600">{story.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Nimble Business Process Management for Insurance to Nimble Acuity</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Looking for a cost-effective, efficient, and reliable BPM for insurance back office support provider? You’ve come to the right place. Get in touch with us today!
        </p>
        <Button variant="secondary" size="lg">Contact Us</Button>
      </section>
    </div>
  );
}