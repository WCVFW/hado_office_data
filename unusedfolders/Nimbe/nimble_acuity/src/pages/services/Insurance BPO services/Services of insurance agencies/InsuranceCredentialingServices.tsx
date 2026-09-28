import React from "react";
import Imainmenu from "../Imainmenu";

const InsuranceCredentialingServices: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Insurance Credentialing Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Eliminate credentialing hurdles with rigorous primary source
          verification that validates provider expertise and trustworthiness.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-6 text-lg">
        <p>
          Manual data reconciliation is a tedious process, and without proper
          credential software integration, it often leads to silos. Add to that
          compliance lapses, data breaches, and regulatory penalties.
        </p>
        <p>
          Nimble insurance credentialing services to automate verification of
          provider credentials, drastically reducing manual errors and processing
          time. We integrate seamlessly with your healthcare management systems
          for a smoother process.
        </p>
        <p>
          Stay ahead of regulatory changes with our compliance updates. Let us
          help minimize risks while ensuring adherence to industry benchmarks.
        </p>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-8">
          Our Professional Insurance Credentialing Solutions
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Provider Enrollment",
              items: [
                "NPI registry (National Provider Identifier)",
                "CAQH profile management",
                "Enrollment status tracking",
              ],
            },
            {
              title: "License Verification",
              items: [
                "Automated license tracking",
                "Multi-state license management",
                "Expiry alerts and notifications",
              ],
            },
            {
              title: "Contracting Services",
              items: [
                "Contract compliance analysis",
                "Fee schedule optimization",
                "Payer contract negotiation techniques",
              ],
            },
            {
              title: "Credentialing Audit",
              items: [
                "Process compliance review",
                "Credentialing file accuracy",
                "Discrepancy identification",
              ],
            },
            {
              title: "Re-credentialing",
              items: [
                "Renewal timeline management",
                "Updated documentation compliance",
                "Continuous eligibility monitoring",
              ],
            },
            {
              title: "Primary Source Verification",
              items: [
                "Source data validity",
                "Real-time verification platforms",
                "Credential authenticity assurance",
              ],
            },
            {
              title: "Network Management",
              items: [
                "Provider data integrity",
                "Network adequacy analysis",
                "Access and availability monitoring",
              ],
            },
            {
              title: "Claims Management",
              items: [
                "Claims submission tracking",
                "Denial management analytics",
                "Reimbursement optimization strategies",
              ],
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Avail 1 WEEK FREE TRIAL on Any Service
        </h2>
        <p className="mb-6 text-lg">TRY before you BUY – Get started today!</p>
        <button className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold shadow hover:bg-gray-100">
          Get Started Now
        </button>
      </section>

      {/* Software */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-6">
          Insurance Credentialing Software We Use
        </h2>
        <p className="mb-4 text-gray-700 italic text-sm">
          (Disclaimer: We use third-party tools solely for operational purposes
          and do not endorse or sponsor these entities.)
        </p>
        <div className="flex flex-wrap gap-3">
          {["Kareo", "CAQH Proview", "Symplr", "Md-Staff", "QuickBooks"].map(
            (tool, idx) => (
              <span
                key={idx}
                className="bg-gray-200 px-4 py-2 rounded-full text-sm"
              >
                {tool}
              </span>
            )
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Why Choose Our Insurance Credentialing Company?
        </h2>
        <ul className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 list-disc list-inside text-lg">
          <li>Real-time credential status tracking with dashboards.</li>
          <li>AI-optimized workflows for throughput acceleration.</li>
          <li>End-to-end audit readiness with ledger-enabled trails.</li>
          <li>Optimized KPIs for faster credential approvals.</li>
          <li>Elasticity with automated queue management.</li>
          <li>Reduced compliance risks with strong governance.</li>
          <li>Fraud detection accuracy with advanced algorithms.</li>
        </ul>
      </section>

      {/* Additional Services */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-6">
          Additional Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Insurance Back Office Management Services",
            "Insurance Claims Management Services",
            "Insurance Services for MGAs",
            "Insurance Claims Administration Services",
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-md"
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-indigo-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-lg italic">
          “We chose Nimble Acuity for their reasonable cost, agreeable terms,
          and flexibility. Their employees learned our workflows and worked the
          way we wanted—unlike other firms.”
        </blockquote>
        <p className="mt-4 font-medium">
          – Chief Operating Officer, Insurance Marketing Company, Florida
        </p>
      </section>

      {/* Case Studies */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-6">Case Studies</h2>
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold">
              Insurance Policy Checking Services – NY
            </h3>
            <p>
              We provided back-office support to a NY-based risk insurance agent
              and helped them achieve 22% profit with our affordable services.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold">
              Back-office Operations for Health Insurance Company
            </h3>
            <p>
              We optimized back-office workflows for a reputed health insurance
              firm, enabling record-breaking operational speed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-indigo-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Establish credibility with verified credentials
        </h2>
        <p className="mb-6 text-lg">
          Expedite approval with a robust portfolio of certifications.
        </p>
        <button className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold shadow hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default InsuranceCredentialingServices;
