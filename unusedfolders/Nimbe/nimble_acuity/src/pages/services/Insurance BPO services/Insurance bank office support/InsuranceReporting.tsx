import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Imainmenu from "../Imainmenu";

export default function InsuranceReporting(): JSX.Element {
  const services = [
    {
      title: "Insurance Claims Reporting",
      desc: "Detailed, categorized reports for present and historical customer claims."
    },
    {
      title: "Commission Reporting",
      desc: "Comprehensive commission reports to monitor payouts and identify improvement areas."
    },
    {
      title: "Insurance Accounts Reporting",
      desc: "Accurate accounting reports and insights to track financial performance."
    },
    {
      title: "Transaction & Policy Renewal Reporting",
      desc: "Regular transaction logs and renewal reminders to improve retention."
    },
    {
      title: "Active Reporting",
      desc: "Lists of active policies and segmentation-ready datasets for campaign planning."
    }
  ];

  const process = [
    { step: "01. Design", desc: "Design reporting structures aligned to client needs." },
    { step: "02. Model Integration", desc: "Integrate cashflow, CRM, risk and accounting models into reports." },
    { step: "03. Analysis", desc: "Analyze outputs to validate effectiveness and identify improvements." },
    { step: "04. Maintenance", desc: "Ongoing monitoring and tuning of reporting components and tools." }
  ];

  const benefits = [
    "Affordable & flexible pricing",
    "ISO/IEC 27001:2022 certified information security",
    "Fast turnaround via multiple global delivery centers",
    "Experienced insurance reporting experts",
    "High-quality, error-free reports",
    "Robust infrastructure & analytics tools",
    "Single point of contact (SPOC)",
    "24/7 availability",
    "Easy scalability"
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <Imainmenu/>
      <section className="bg-gradient-to-r from-sky-600 to-indigo-700 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nimble Insurance Reporting Services</h1>
          <p className="text-lg md:text-xl">Accurate, compliant and timely insurance reporting that reduces risk and operational cost.</p>
          <div className="mt-8">
            <Button size="lg" className="bg-white text-indigo-700">Start 1 Week Free Trial</Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Insurance Reporting Services We Offer</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <Card key={i} className="shadow-sm hover:shadow-md">
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

      {/* Software (compact) */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Insurance Software We Use</h3>
          <p className="text-gray-600 mb-6">We integrate with leading AMS, analytics and finance systems to generate reliable reports.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-700">
            {[
              "Vertafore","Nexsure","Aspire","InsurancePro","HawkSoft","Agency Matrix",
              "Applied Agency Management","IQCatalyst","IBM SPSS","SAS Advanced Analytics","Bitrix24",
              "CommissionTrac","CommissionsEZ","QuickBooks","Sage","Invoicera","and more..."
            ].map((name, idx) => (
              <div key={idx} className="bg-white p-3 rounded shadow-sm">{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Insurance Reporting Process</h2>
        <div className="space-y-6">
          {process.map((p, i) => (
            <div key={i} className="flex items-start gap-4">
              <CheckCircle className="text-indigo-600 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold">{p.step}</h4>
                <p className="text-gray-600">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Why Choose Nimble Acuity for Insurance Reporting?</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-white rounded shadow-sm">
              <CheckCircle className="text-green-600 w-5 h-5 mt-1" />
              <p className="text-gray-700">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Story + CTA */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4">Client Success Story</h3>
        <p className="text-gray-600 mb-6">A leading US-based insurance agency trusted Nimble Acuity for accounts maintenance and reporting, enabling faster decision-making and regulatory compliance.</p>
        <Button className="bg-indigo-700 text-white">Read Case Study</Button>
      </section>

      <section className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Nimble Insurance Reporting Services to Nimble Acuity</h2>
        <p className="max-w-3xl mx-auto mb-6">Reliable, compliant, and insightful reporting delivered by industry experts. Contact us to streamline your reporting operations and cut costs.</p>
        <Button className="bg-white text-indigo-700">Contact Us</Button>
      </section>
    </div>
  );
}
