import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CCmainmenu from "../CCmainmenu";

const MortgageLeadGeneration: React.FC = () => {
  const services = [
    {
      title: "Creative Direction",
      desc: "Expert planning and optimization of campaigns with compelling outreach strategies.",
    },
    {
      title: "Web & Creative Design",
      desc: "Tailored creatives with the right mix of visuals and content to drive action.",
    },
    {
      title: "Copywriting",
      desc: "Content that resonates with your audience and keeps leads focused on your offer.",
    },
    {
      title: "Conversion Optimization",
      desc: "Testing layouts, CTAs, and funnels to maximize conversions from clicks to leads.",
    },
  ];

  const leadTypes = [
    "Different mortgage loan types",
    "Frequent home buyers",
    "Military loan opportunities",
    "Reverse mortgage candidates",
    "Subprime leads",
    "FHA leads",
    "Purchase-based leads",
    "Loan modification leads",
    "Refinance leads",
    "HARP leads",
    "Excellent and fair credit leads",
    "Second mortgage leads",
    "VA home loan-based leads",
    "Debt settlement leads",
    "First-time homebuyer leads",
    "Credit repair leads",
  ];

  const process = [
    {
      step: "Customize and Choose Plan",
      desc: "We help you select the right plan that balances your requirements and budget.",
    },
    {
      step: "Lead Generation Campaign Setup",
      desc: "Landing pages, ads, and questionnaires created using proven templates.",
    },
    {
      step: "Leads Delivered Directly to You",
      desc: "Receive validated, pre-screened leads with complete contact details.",
    },
  ];

  const differentiators = [
    "Efficient Lead Generation using advanced technology",
    "Refinance Assistance with built-in call center support",
    "Cost-effective Pricing Options",
    "Rapid Response with 24/7 live & automated call support",
    "Complete Ownership of Fresh Leads",
    "Analytics-driven Approach for better targeting",
    "ISO/IEC 27001:2022 Certified Data Security",
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Outsource Mortgage Lead Generation Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Secure high-quality mortgage leads, boost brand awareness, and drive conversions with our specialized mortgage lead generation solutions.
        </p>
        <Button className="mt-6 bg-white text-blue-700 hover:bg-gray-100">
          Contact Us
        </Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Mortgage Lead Generation Services
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <Card key={idx} className="shadow-md hover:shadow-xl transition rounded-xl">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-blue-700">{s.title}</h3>
                <p className="mt-3 text-gray-600">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Lead Types Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Types of Mortgage Leads We Deliver
        </h2>
        <ul className="max-w-4xl mx-auto grid gap-3 sm:grid-cols-2 text-gray-700">
          {leadTypes.map((lead, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✔</span> {lead}
            </li>
          ))}
        </ul>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Mortgage Leads Generation Process
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {process.map((p, idx) => (
            <Card key={idx} className="rounded-xl border border-blue-200 shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-extrabold text-blue-600 mb-3">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-semibold">{p.step}</h3>
                <p className="mt-3 text-gray-600">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="bg-blue-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Outsource Mortgage Lead Generation to Us?
        </h2>
        <ul className="max-w-5xl mx-auto grid gap-4 md:grid-cols-2 text-gray-700">
          {differentiators.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✔</span> {point}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-700 text-white text-center py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Mortgage Lead Generation Made Simple with O2I
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Identify, target, and engage high-quality mortgage loan leads with our proven strategies. Gain complete ownership of fresh leads and maximize ROI with our expertise.
        </p>
        <Button className="bg-white text-indigo-700 hover:bg-gray-200">
          Start Your Project Today
        </Button>
      </section>
    </div>
  );
};

export default MortgageLeadGeneration;
