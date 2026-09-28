import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Imainmenu from "../Imainmenu";

export default function QQCatalystManagement() {
  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-blue-50 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble QQCatalyst Management Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Partner with Nimble Acuity for streamlined QQCatalyst management to seamlessly
          automate and manage your insurance back-office tasks & pipeline
          starting at just $8/hour
        </p>
        <Button size="lg">Get Started</Button>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">
            QQCatalyst Management Services We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Sales Management with QQCatalyst",
                desc: "Our team streamlines your account, tracking the prospect journey throughout the insurance sales cycle.",
              },
              {
                title: "Email Marketing Management with QQCatalyst",
                desc: "We design and automate campaigns using QQCatalyst to cross-sell, upsell, and acquire new members.",
              },
              {
                title: "Operations Management with QQCatalyst",
                desc: "Track employee activities, spot leaders, and measure productivity with QQCatalyst.",
              },
            ].map((service, idx) => (
              <Card key={idx} className="shadow-md rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Our QQCatalyst Management Process
          </h2>
          <ol className="space-y-6 max-w-3xl mx-auto">
            {[
              "Consultation with your procurement team to understand business needs",
              "Design a successful approach based on collected data",
              "Finalize a project plan with SLA, cost, and turnaround time",
              "Contract signing and finalization",
              "Execution using QQCatalyst to automate tasks",
              "Quality control monitoring to ensure SLA compliance",
              "Final reports shared with stakeholders",
            ].map((step, idx) => (
              <li key={idx} className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full mr-4">
                  {idx + 1}
                </span>
                <p className="text-gray-700">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Other Services You Can Benefit From
          </h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {["Insurance Appointment Setting", "Insurance Reporting", "Insurance Data Entry", "Insurance Analytics"].map((srv, idx) => (
              <Card key={idx} className="shadow rounded-xl hover:shadow-lg transition">
                <CardContent className="p-6">
                  <p className="font-medium">{srv} Services</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Why Nimble QQCatalyst Management Services to Nimble Acuity?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Huge Cost Reduction",
              "ISO Standards Compliance",
              "Trained and Certified Team",
              "24/7 Services",
              "100% Data Confidentiality",
              "Quick TAT and Scalability",
              "Single Point of Contact (SPOC)",
            ].map((benefit, idx) => (
              <Card key={idx} className="shadow-md rounded-2xl">
                <CardContent className="p-6 text-center font-medium">
                  {benefit}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Client Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Maintenance of Insurance Accounts for US-based Insurance Agency",
                desc: "We enhanced their back-office functions to improve productivity and timeliness.",
              },
              {
                title: "Complete Insurance Back-Office Solutions for Renowned Health Insurance Company",
                desc: "We assisted a national healthcare insurance company by enhancing the efficiency of their back-office tasks.",
              },
            ].map((story, idx) => (
              <Card key={idx} className="shadow rounded-xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                  <p className="text-gray-600">{story.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble QQCatalyst Management Services to Nimble Acuity
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Stop wasting time looking for fresh hires. Pay attention to more
          strategic tasks while we manage your QQCatalyst automation.
        </p>
        <Button size="lg" variant="secondary">
          Contact Us
        </Button>
      </section>
    </div>
  );
}