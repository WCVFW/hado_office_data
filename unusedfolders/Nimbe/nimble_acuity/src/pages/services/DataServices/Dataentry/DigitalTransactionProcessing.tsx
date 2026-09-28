import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, Shield, Users, Database } from "lucide-react";
import DSmainmenu from "../DSmainmenu";

const DigitalTransactionProcessing: React.FC = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Nimble Digital Transaction Processing Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Streamline digital transactions and ensure hassle-free & secure electronic payments at rates starting at just <span className="font-semibold">$6 per hour</span>.
        </p>
      </section>

      {/* Why Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Why Nimble Digital Transaction Processing?
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-8">
          In today’s digitized world, managing high-volume transactions with speed, precision, and compliance can be a challenge. 
          Outsourcing helps reduce costs, save time, and ensure secure, accurate processing without the overhead of in-house staffing.
        </p>
      </section>

      {/* Services */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Digital Transaction Processing Services We Offer
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Order Processing", desc: "Process inbound orders with real-time tracking and accuracy." },
            { title: "Loan Processing", desc: "Support across appraisal, mortgages, tax returns, and CRM recordkeeping." },
            { title: "Claims Processing", desc: "Streamline claim registration, validation, and settlement cycles." },
            { title: "Financial Transaction Processing", desc: "Handle payroll, invoices, card dues, and service fees securely." },
            { title: "Inventory Processing", desc: "Ensure accuracy in procurement, repairs, and materials tracking." },
            { title: "Payroll & Record Processing", desc: "On-time payroll management with auditable recordkeeping." },
            { title: "Online Transaction Processing", desc: "Manage commercial and non-commercial transactions efficiently." },
          ].map((service, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Our Digital Transaction Processing Workflow
        </h2>
        <ol className="space-y-6 max-w-3xl mx-auto">
          {[
            "Scan & Upload transactional data in any format.",
            "Download & verify records for completeness and accuracy.",
            "Process transactions using advanced tools and workflows.",
            "Verify payment records with audit checks.",
            "Quality checks by QA professionals to ensure compliance.",
          ].map((step, idx) => (
            <li key={idx} className="flex items-start space-x-3">
              <CheckCircle2 className="text-blue-600 w-6 h-6 mt-1" />
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
            { icon: <Shield className="w-10 h-10 text-blue-600" />, title: "100% Data Security", desc: "ISO/IEC 27001:2022 compliant with strict access controls." },
            { icon: <Clock className="w-10 h-10 text-blue-600" />, title: "Quick Turnaround", desc: "Faster processing to avoid bottlenecks and delays." },
            { icon: <Users className="w-10 h-10 text-blue-600" />, title: "Skilled Experts", desc: "Experienced professionals across industries and workflows." },
            { icon: <Database className="w-10 h-10 text-blue-600" />, title: "Multiple Data Formats", desc: "Support for text, images, PDFs, and standardized conversions." },
            { icon: <CheckCircle2 className="w-10 h-10 text-blue-600" />, title: "High Accuracy", desc: "99% accuracy guaranteed with multi-layer QC." },
            { icon: <Clock className="w-10 h-10 text-blue-600" />, title: "Scalable Services", desc: "Flexible pricing and scale-up options as per requirements." },
          ].map((benefit, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md hover:shadow-lg transition">
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
      <section className="py-16 px-6 text-center bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          Nimble Digital Transaction Processing Today
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          With over 26+ years of expertise, Nimble Acuity ensures secure, accurate, and cost-effective transaction processing. 
          Contact us today to streamline your financial operations and get a free quote within 24 hours.
        </p>
        <button className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default DigitalTransactionProcessing;
