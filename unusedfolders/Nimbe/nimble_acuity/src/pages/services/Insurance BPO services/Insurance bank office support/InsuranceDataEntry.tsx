import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Imainmenu from "../Imainmenu";

export default function InsuranceDataEntry(): JSX.Element {
  const services = [
    "New Business Data Entry",
    "Applications Data Entry",
    "Insurance Data Mining",
    "Quoting & Proposal Data Entry",
    "New Producer Books Data Entry",
    "Acquisition Integration Data Entry",
    "Insurance Data Analytics",
    "Professional License Verification",
    "Prospect & Market Research Data Entry",
  ];

  const softwares = [
    "Vertafore",
    "Nexsure",
    "Aspire",
    "InsurancePro",
    "HawkSoft",
    "Agency Matrix",
    "Applied Agency Management",
    "Insly",
    "QQCatalyst",
    "SAS Advanced Analytics",
    "IBM SPSS",
    "Bitrix24",
    "CommissionTrac",
    "CommissionsEZ",
    "inLOGIC.ca",
    "and many more...",
  ];

  const verticals = [
    "Life Insurance",
    "Annuity Insurance",
    "Property & Casualty",
    "Motor Insurance",
    "Health Insurance",
    "Liability Insurance",
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <Imainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nimble Insurance Data Entry Services</h1>
          <p className="text-lg md:text-xl">High accuracy, fast turnaround and domain expertise — trusted by insurance firms worldwide.</p>
          <div className="mt-8">
            <Button size="lg" className="bg-white text-blue-700 font-semibold">Get 1 Week Free Trial</Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <p className="mb-4">
          Insurance companies collect and process large volumes of data every day. Accurate data entry unlocks analytics, improves decision-making, and streamlines operations. Our specialized team is trained on major insurance systems and delivers high-quality, timely results.
        </p>
        <p>
          With 26+ years of experience, Nimble Acuity handles all types of insurance data entry — from new business and applications to complex acquisition integrations and analytics-ready datasets.
        </p>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Our Insurance Data Entry Services</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <Card key={i} className="shadow-sm hover:shadow-md transition">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-blue-600">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{s}</h3>
                    <p className="text-sm text-gray-600 mt-2">Precise, validated data entry tailored to insurance workflows.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button size="lg" className="bg-blue-700 text-white">Start Free Trial</Button>
        </div>
      </section>

      {/* Software & Tools */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Insurance Software We Use</h2>
          <p className="text-center text-gray-700 mb-6">We work across a wide range of agency management, analytics and commission platforms to ensure seamless delivery and integration.</p>

          <div className="grid md:grid-cols-3 gap-4">
            {softwares.map((sw, idx) => (
              <div key={idx} className="px-4 py-3 bg-white rounded-lg shadow-sm text-sm text-gray-700">{sw}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-6">Verticals We Serve</h2>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-4 text-center">
          {verticals.map((v, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm">{v}</div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Why Choose Nimble Acuity for Insurance Data Entry?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-3 list-inside list-disc text-gray-700">
            <li>Highly trained data-entry specialists with domain experience</li>
            <li>High accuracy and strict quality checks</li>
            <li>Multiple global delivery centers for guaranteed SLAs</li>
            <li>Security & compliance: authentication, authorization and privacy</li>
          </ul>

          <ul className="space-y-3 list-inside list-disc text-gray-700">
            <li>Expertise across agency management systems (AMS 360, Agency Matrix, QQ Catalyst, Nexsure)</li>
            <li>Backup resourcing to ensure zero business impact</li>
            <li>Fast turnarounds and cost-effective pricing</li>
            <li>Data analytics-ready outputs for BI and reporting</li>
          </ul>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-blue-700 text-white py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Nimble Insurance Data Entry Services to Us</h3>
          <p className="mb-6">If you need accurate, scalable and secure data entry services for your insurance business, our experts are ready to help. We also provide data analytics, accounting & billing, and document indexing as complementary services.</p>
          <Button size="lg" className="bg-white text-blue-700">Contact Us</Button>
        </div>
      </section>
    </div>
  );
}
