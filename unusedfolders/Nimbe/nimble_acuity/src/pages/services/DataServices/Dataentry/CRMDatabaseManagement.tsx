import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, CheckCircle2, Clock, Shield, Database, Layers } from "lucide-react";
import DSmainmenu from "../DSmainmenu";

const CRMDatabaseManagement: React.FC = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Nimble CRM Database Management Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Nimble Acuity's CRM specialists help you select, customize, and manage CRMs —
          improving sales conversion rates starting at{" "}
          <span className="font-semibold">$6 per hour</span>.
        </p>
      </section>

      {/* Why Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Why Nimble CRM Database Management?
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-8">
          If your customers aren’t getting timely attention or your organization
          feels siloed, you need a robust CRM strategy. Nimble Acuity ensures
          seamless integration of marketing and sales teams, eliminating data
          gaps and improving lead conversions.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          CRM Database Management Services We Offer
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Evaluation & Selection of CRM",
              desc: "We assess your current system and recommend the right CRM tool for your business model.",
            },
            {
              title: "Customization & Integration",
              desc: "We enhance CRM capabilities, integrate sales & marketing tools, and add reporting systems.",
            },
            {
              title: "CRM Implementation & Training",
              desc: "Our experts implement CRMs and train your staff to use them effectively.",
            },
            {
              title: "Campaign & Lead Journey Management",
              desc: "We help design, manage, and track lead journeys through customized CRM solutions.",
            },
            {
              title: "Database Cleansing & Validation",
              desc: "We remove outdated data, validate customer records, and ensure accuracy.",
            },
          ].map((service, idx) => (
            <Card
              key={idx}
              className="rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Our CRM Database Management Process
        </h2>
        <ol className="space-y-6 max-w-3xl mx-auto">
          {[
            "Scan & Upload lead and CRM data in any format.",
            "Validate and verify the accuracy and completeness of data.",
            "Build or enhance CRM systems tailored to your needs.",
            "Provide comprehensive CRM training to your team.",
            "Conduct quality checks before project sign-off.",
          ].map((step, idx) => (
            <li key={idx} className="flex items-start space-x-3">
              <CheckCircle2 className="text-indigo-600 w-6 h-6 mt-1" />
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Benefits */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Why Choose Nimble Acuity?
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: <Shield className="w-10 h-10 text-indigo-600" />,
              title: "100% Data Security",
              desc: "ISO/IEC 27001:2022 certified with strong data protection protocols.",
            },
            {
              icon: <Clock className="w-10 h-10 text-indigo-600" />,
              title: "Quick Turnaround",
              desc: "Shorter TAT thanks to highly skilled CRM specialists.",
            },
            {
              icon: <Database className="w-10 h-10 text-indigo-600" />,
              title: "Multi-Format Support",
              desc: "We accept data in all formats and standardize for CRM usage.",
            },
            {
              icon: <Users className="w-10 h-10 text-indigo-600" />,
              title: "Experienced Professionals",
              desc: "Skilled experts in Salesforce, HubSpot, MS Dynamics, and more.",
            },
            {
              icon: <Layers className="w-10 h-10 text-indigo-600" />,
              title: "Scalable Solutions",
              desc: "Services tailored to your business scale and budget.",
            },
            {
              icon: <CheckCircle2 className="w-10 h-10 text-indigo-600" />,
              title: "High-Quality Services",
              desc: "ISO 9001:2015 certified processes with strict SLA compliance.",
            },
          ].map((benefit, idx) => (
            <Card
              key={idx}
              className="rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          Nimble CRM Database Management Today
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          With 26+ years of experience, Nimble Acuity helps global businesses
          streamline CRM systems, improve lead management, and achieve higher
          conversion rates. Get a free quote within 24 hours.
        </p>
        <button className="bg-white text-indigo-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default CRMDatabaseManagement;
