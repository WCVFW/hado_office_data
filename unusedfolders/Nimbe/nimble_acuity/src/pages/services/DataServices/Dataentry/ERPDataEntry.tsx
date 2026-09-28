import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DSmainmenu from "../DSmainmenu";

const ERPDataEntry: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Nimble ERP Data Entry Services</h1>
        <p className="max-w-3xl mx-auto text-lg">
          Our professional ERP Data Entry experts handle data entry, data standardization, and scrubbing of ERP data at rates starting at just{" "}
          <span className="font-semibold">$6 per hour</span>.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <p className="text-lg leading-relaxed">
          Is your business operations lacking transparency? Do you face challenges in coordinating information? It's best to leave the repetitive data entry tasks to outsourcing experts like Nimble Acuity. 
          We handle all types of ERP data entry services, ensuring completeness of ERP data while optimizing ERP modules for consistent data hygiene.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">ERP Data Entry Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "ERP CRM Data Entry",
              desc: "Collecting and consolidating data from multiple sources to ensure CRM records are accurate and complete."
            },
            {
              title: "Enriching ERP Data",
              desc: "Standardizing, cleansing, and eliminating redundant business data to ensure meaningful ERP utilization."
            },
            {
              title: "Segmentation of ERP Data",
              desc: "Segmenting data based on classification criteria to enable targeted marketing and improved decision-making."
            },
            {
              title: "Invoice Generation & Reporting",
              desc: "Synchronizing invoice data with your CRM and generating reports for accurate business insights."
            },
            {
              title: "Preparation of ERP Data",
              desc: "Interpreting and standardizing datasets across languages, currencies, and business metrics."
            },
          ].map((service, idx) => (
            <Card key={idx} className="shadow-md rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">ERP Data Entry Process We Follow</h2>
        <ol className="space-y-6 max-w-3xl mx-auto text-lg">
          <li><span className="font-semibold">01. Scan and Upload:</span> Clients send raw datasets via secure channels (SFTP or Cloud).</li>
          <li><span className="font-semibold">02. Download/Access Files:</span> Our team evaluates data scope and accuracy before entry.</li>
          <li><span className="font-semibold">03. Key-in Document:</span> Using OCR and data scanning tools, we digitize and capture information.</li>
          <li><span className="font-semibold">04. Index, Sort & Move:</span> Captured data is segmented, indexed, and prepared for ERP entry.</li>
          <li><span className="font-semibold">05. Quality Check:</span> QA experts validate accuracy before final submission.</li>
        </ol>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">Why Nimble ERP Data Entry Services to Nimble Acuity?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Friendly, customizable rates for every budget",
            "ISO/IEC 27001:2022 compliant – 100% data security",
            "Ability to handle multiple raw data formats",
            "High-quality, error-free ERP data entry services",
            "Quick turnaround times with global delivery centers",
            "ISO 9001:2015 certified ERP Data Entry provider",
            "Scalable services to match your business growth",
            "Experienced professionals with ERP CRM expertise",
            "24/7 support via email, phone, and chat",
          ].map((reason, idx) => (
            <Card key={idx} className="shadow-md rounded-2xl">
              <CardContent className="p-6 text-gray-700">{reason}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Nimble ERP Data Entry Services to Nimble Acuity</h2>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          With 26+ years of experience, Nimble Acuity has earned the trust of 1000+ global clients for ERP Data Entry. 
          We provide reliable, scalable, and customizable ERP solutions that ensure accuracy and efficiency.
        </p>
        <Button size="lg" className="rounded-2xl px-8 py-4 text-lg">Contact Us</Button>
      </section>
    </div>
  );
};

export default ERPDataEntry;
