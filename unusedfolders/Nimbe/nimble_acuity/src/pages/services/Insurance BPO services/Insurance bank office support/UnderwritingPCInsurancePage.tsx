import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Imainmenu from "../Imainmenu";

export default function UnderwritingPCInsurancePage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-44xl font-bold mb-4">
          Nimble Underwriting for Property and Casualty Insurance Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Streamline, automate, and scale underwriting with expert P&C insurance services that ensure compliance and improve customer experience.
        </p>
        <Button size="lg" variant="secondary">
          Get Started Now
        </Button>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Underwriting Services for Property and Casualty Insurance
        </h2>
        <p>
          Nimble Acuity helps insurers improve agility, reduce costs, and enhance customer loyalty through streamlined underwriting services for P&C insurance.
        </p>
      </section>

      {/* Services We Offer */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            "Authorization Status",
            "Financial Management",
            "Management Information",
            "Compliance, Governance, and Regulation Support",
            "Distribution and Capacity Management",
            "Product and Business Development",
            "Underwriting System",
            "Underwriting Management Controls",
            "Back-office Operational Support",
          ].map((service, idx) => (
            <Card key={idx} className="shadow-md">
              <CardContent className="p-6 text-center font-medium">
                {service}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Free Trial CTA */}
      <section className="bg-yellow-100 py-10 text-center px-6">
        <h2 className="text-2xl font-bold mb-2">
          Avail 1 WEEK FREE TRIAL on any Service
        </h2>
        <p className="mb-4">
          TRY before you BUY! Choose any service and experience the difference.
        </p>
        <Button size="lg">Start Free Trial</Button>
      </section>

      {/* Insurance Software */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          Insurance Software We Use
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>View Software List</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm leading-relaxed">
                Vertafore, Nexsure, Aspire, InsurancePro, HawkSoft, Agency Matrix, Applied Agency Management,
                Newton Agency Solution, Agency Systems, Insly, SEMCATA1, Tracker, Jenesis, ABS, SIBRO, 1app-C2MS,
                AgencyIntel, QQCatalyst, Board, EverString, Halo, IBM SPSS, Infer, Radius, SAS, Statistica,
                ClickClaims, PLEXIS, Record360, Virtual Claims Adjuster, Bitrix24, Commission Calculator,
                EZCommission, Trac, EvolveSPM, GoalPost, GreenWave, Iconixx, Incentive SPM, inLOGIC, Caseblocks,
                Cases CRM, DocuPhase, HealthQx, HEALTHsuite, INSIS, PCRS, QUICK CAP, QuickBooks, Billbooks,
                MYOB, Invoice Studio, Tradeshift, Sage, CheckMark, MultiLedger, Invoicera.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Underwriting Process
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {[
            { step: "01. Requirement Analysis", desc: "We understand client needs and identify challenges." },
            { step: "02. Planning", desc: "Our underwriters design a detailed underwriting plan." },
            { step: "03. Implementation", desc: "We execute the plan and provide regular client updates." },
            { step: "04. Quality Check", desc: "A multilevel QC process ensures accuracy and compliance." },
            { step: "05. Delivery", desc: "Final reports are delivered quickly after validation." },
          ].map((item, idx) => (
            <Card key={idx} className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{item.step}</h3>
                <p>{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Nimble Acuity for P&C Underwriting?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Flexible Pricing Options",
            "Data Security (ISO/IEC 27001:2022)",
            "Quick Turnaround Time",
            "Experienced Insurance Underwriters",
            "High-quality Services",
            "Best Infrastructure",
            "Single Point of Contact",
            "24/7 Availability",
            "Ease of Scalability",
          ].map((benefit, idx) => (
            <Card key={idx} className="shadow-sm">
              <CardContent className="p-4 text-center font-medium">
                {benefit}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-900 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Underwriting for Property and Casualty Insurance to Nimble Acuity
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Get reliable, cost-effective, and efficient P&C underwriting services with our expert team. Contact us today!
        </p>
        <Button size="lg" variant="secondary">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
