import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DSmainmenu from "../DSmainmenu";

const PdfAccessibility: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble PDF Accessibility Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Ensure inclusivity and compliance in high-volume documentation with
          scalable PDF accessibility services. Fully compliant with WCAG 2.1,
          Section 508, ADA, and PDF/UA standards.
        </p>
        <Button className="bg-white text-blue-900 font-semibold">
          Contact Us
        </Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Comprehensive PDF Accessibility Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Full PDF Remediation Services",
              desc: "Manual tagging, logical reading order, alt text, bookmarks, and metadata insertion for complete accessibility compliance.",
            },
            {
              title: "Accessible PDF Form Remediation",
              desc: "Form fields labeled with tooltips, tab order defined, and interactive elements optimized for screen readers.",
            },
            {
              title: "Batch PDF Document Remediation",
              desc: "Scalable workflows for high-volume files ensuring consistent tagging, metadata insertion, and QA compliance checks.",
            },
            {
              title: "OCR and Accessibility for Scanned PDFs",
              desc: "OCR converts image-based PDFs into readable text, followed by tagging, headings, and compliance checks.",
            },
            {
              title: "PDF Accessibility Audits & Compliance Reporting",
              desc: "Audits highlight accessibility gaps with detailed compliance reports and actionable remediation plans.",
            },
            {
              title: "Continuous Accessibility Upkeep & Assistance",
              desc: "Ongoing remediation, pre-release validation, consulting, and team training for long-term compliance.",
            },
          ].map((service, idx) => (
            <Card key={idx} className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Our PDF Accessibility Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Low-Cost Pricing Options",
              desc: "Affordable pricing models for one-time or recurring remediation needs.",
            },
            {
              title: "High Volume Processing Capability",
              desc: "Scalable workflows deliver accurate, accessible PDFs at enterprise scale.",
            },
            {
              title: "Data Security",
              desc: "Strict NDAs, encrypted transfers, and restricted access protect sensitive data.",
            },
            {
              title: "Quickest Turnaround Time",
              desc: "Optimized workflows ensure fast, compliant delivery.",
            },
            {
              title: "Structured Processes",
              desc: "SOPs and validation checks maintain consistent standards across all projects.",
            },
            {
              title: "24/7 Support",
              desc: "Round-the-clock assistance to answer queries and support workflows.",
            },
          ].map((item, idx) => (
            <Card key={idx} className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <blockquote className="bg-white shadow-md rounded-2xl p-6 italic text-gray-700">
          “Working with Nimble Acuity has been a great experience. They quickly learned
          our line of business, adapted to our requirements, and consistently
          performed well. They've gone above and beyond their duty. Reliable and
          wonderful partner.”
        </blockquote>
        <p className="mt-4 font-semibold">Spokesperson, Executive recruitment firm in US</p>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Streamline Your Document Workflows Today
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Ensure accessibility, compliance, and inclusivity at every stage.
          Transform scanned and digital files into standards-compliant,
          user-friendly documents.
        </p>
        <Button className="bg-white text-blue-900 font-semibold">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default PdfAccessibility;