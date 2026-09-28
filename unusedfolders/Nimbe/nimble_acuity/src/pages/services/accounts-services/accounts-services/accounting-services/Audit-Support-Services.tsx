import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const AuditSupportServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Audit Support Services
            </h2>
            <p className="text-lg text-gray-600">
              Nimble Acuity offers comprehensive audit support services designed to help you navigate seasonal workloads. We help you deliver high-quality audits, increase capacity, and scale seamlessly.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16">
            <p className="text-gray-700 leading-relaxed mb-6">
              Audit season often brings a sudden surge in work, creating unique challenges for firms. Staff shortages, a lack of skilled auditors, high overheads, and strained margins can make it difficult to maintain quality while managing the increased volume.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity provides the expert support you need to scale quickly and efficiently, boosting your audit capacity and ensuring your deliverables are top-notch. We offer tailored solutions that cover every step of the audit process, from planning to completion.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Professional Audit Support Services
            </h3>
            <p className="text-gray-700 mb-6">
              For over two decades, Nimble Acuity has been a trusted provider of audit support services to firms globally. We understand your clients’ needs and offer customized solutions to help you meet their demands.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Tax Audit Support:</strong> Assistance with tax audits, including return reviews, responses to inquiries, and liaising with tax authorities.</li>
              <li><strong>Audit Assistance:</strong> Technical and advisory support for accounting, financial reporting, and tax compliance.</li>
              <li><strong>Compliance Audit Support:</strong> Policy and procedure reviews, plus control testing to meet legal and regulatory requirements.</li>
              <li><strong>Internal Audit Support:</strong> Objective operational reviews to help strengthen clients’ internal control systems.</li>
              <li><strong>Forensic Audit Support:</strong> Investigation support to detect, review, and prevent financial misconduct and fraud.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Experienced Auditors:</strong> Highly skilled professionals who can manage all audit support needs seamlessly.</li>
              <li><strong>Superior Quality:</strong> ISO-certified processes ensuring error-free audit support.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 ISMS certified, prioritizing secure handling of sensitive information.</li>
              <li><strong>Scalable Services:</strong> Flexible resources and bandwidth to meet fluctuating demands.</li>
              <li><strong>Short Turnaround Times:</strong> Global delivery centers enable efficient service with fast turnaround.</li>
              <li><strong>Dedicated Manager:</strong> A single point of contact to manage your projects efficiently.</li>
              <li><strong>Affordable Pricing:</strong> Transparent, cost-effective pricing tailored to your needs.</li>
            </ul>
          </div>

          {/* Additional Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Additional Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Financial Investigations:</strong> Collecting and analyzing financial data to detect fraud or financial crimes.</li>
              <li><strong>Valuation Advisory:</strong> Market, cash flow, and asset-based analysis for fair market value assessments.</li>
              <li><strong>Business Tax Services:</strong> Tax planning, compliance, and consulting across federal, state, and local levels.</li>
              <li><strong>Tax Preparation:</strong> Preparing returns, reviewing documents, and offering expert tax advice.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Scale Your Audit Capacity with Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Whether it’s tax audits, compliance, or forensic investigations, our experts provide reliable support so you can deliver excellence during busy audit seasons.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Partner with Nimble Acuity today</span> to streamline your audit process, reduce overhead, and deliver high-quality results on time.
            </p>
            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
              Contact Us Today
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AuditSupportServices;
