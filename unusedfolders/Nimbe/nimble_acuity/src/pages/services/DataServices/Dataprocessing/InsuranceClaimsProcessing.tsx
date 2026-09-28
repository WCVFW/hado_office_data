import React from "react";
import { FileText, Shield, Activity, Database, CheckCircle, RefreshCw } from "lucide-react";
import DSmainmenu from "../DSmainmenu";

const insuranceServices = [
  {
    title: "Claims Data Entry",
    description:
      "Simplified claim intake via digital forms, emails, IVRs, and portals. Automated data parsing with OCR ensures accuracy and FNOL tracking.",
    icon: <FileText className="text-blue-600" size={32} />,
  },
  {
    title: "Insurance Claims Administration",
    description:
      "Oversee claims process adhering to SLAs, with compliance checks and omnichannel support for enhanced customer satisfaction.",
    icon: <Shield className="text-blue-600" size={32} />,
  },
  {
    title: "Insurance Reporting",
    description:
      "Real-time KPI panels, compliance statements, and consolidated reports for executive decision-making across all insurance portfolios.",
    icon: <Activity className="text-blue-600" size={32} />,
  },
  {
    title: "Advanced Fraud Detection",
    description:
      "AI-powered anomaly detection identifies duplicate claims, contrived losses, and high-risk patterns for quick intervention.",
    icon: <CheckCircle className="text-blue-600" size={32} />,
  },
  {
    title: "Claims Adjudication",
    description:
      "Automated-human adjudication process with multi-payer analysis and medical/non-medical expertise for precise claim processing.",
    icon: <Database className="text-blue-600" size={32} />,
  },
  {
    title: "Payment Processing & Reconciliation",
    description:
      "Accurate EOB distribution, deductible calculations, and complete logs for internal and external financial audits.",
    icon: <RefreshCw className="text-blue-600" size={32} />,
  },
  {
    title: "Denial Management & Appeals",
    description:
      "Intelligent denial code sorting, expert appeal preparation, and monitoring for continuous improvement.",
    icon: <FileText className="text-blue-600" size={32} />,
  },
];

const additionalServices = [
  "Insurance Services for MGAs",
  "Insurance Back Office Management",
  "BPM for Insurance",
  "Insurance Eligibility Management Services",
];

const InsuranceClaimsProcessing: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Nimble Insurance Claims Processing Services
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Enhance customer retention and experience with improved insurance claims processes. Streamline operations, reduce errors, and accelerate claim resolution.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Core Services */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          Our Insurance Claims Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insuranceServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center text-center"
            >
              {service.icon}
              <h3 className="font-semibold text-xl mt-4 mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-6">Additional Services</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {additionalServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition flex items-center justify-center"
              >
                <CheckCircle className="text-blue-600 mr-3" size={24} />
                <p className="font-semibold">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="text-3xl font-bold text-blue-700 mb-6 text-center">Success Stories</h3>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-xl mb-2">Cost Reduction for a San Francisco-based Health Insurance Firm</h4>
            <a href="#" className="text-blue-600 hover:underline">Read more</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-xl mb-2">Insurance Agency in the US Boosts Efficiency by 40% with Our BPO Services</h4>
            <a href="#" className="text-blue-600 hover:underline">Read more</a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-4xl mx-auto text-center px-4 text-white">
          <h3 className="text-3xl font-bold mb-4">Client Testimonials</h3>
          <p className="mb-6">
            "Working with Nimble has been a great experience. They quickly adapted to our line of business, our changing requirements, and have consistently performed well. They're reliable. A wonderful partner."
          </p>
          <span className="italic">Spokesperson, Executive recruitment firm in the US</span>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold text-blue-700 mb-4">Transform Your Insurance Claims Process</h3>
          <p className="text-gray-700 mb-6">
            Establish and build your reputation in the insurance sector by partnering with Nimble Auity. Talk to our experts today.
          </p>
          <a
            id="contact"
            href="#"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default InsuranceClaimsProcessing;
