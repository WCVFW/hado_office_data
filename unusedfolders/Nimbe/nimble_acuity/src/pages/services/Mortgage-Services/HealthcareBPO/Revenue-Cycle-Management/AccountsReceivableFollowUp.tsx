import React from "react";
import HealthcareHeader from "@/pages/services/HealthcareBPO/HealthcareHeader";
import { Link } from "react-router-dom";

const AccountsReceivableFollowUp: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Accounts Receivable Follow-up Services
            </h2>
            <p className="text-lg text-gray-600">
              Have you noticed a steady increase in healthcare charges to your patients but not a similar growth in your organization's net cash flow? The issue might be in your accounts receivable process. Complete claims reimbursement requires accurate charge capture and clean claims. If claims are rejected, managing the receivables for those unclean claims can become a daunting task.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4 text-gray-700 leading-relaxed">
            <p>
              At <strong>Nimble Acuity</strong>, we ensure a validated AR follow-up process. Our highly-trained and competent AR experts use advanced, robust tools to accurately examine, correct, appeal, and re-file claims. Our accounts receivable follow-up service focuses on the issues that hinder collection efforts from the start. We have a dedicated team of medical billing collection experts.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Accounts Receivable Follow-up Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Healthcare AR Follow-up:</strong> Track pending claims, investigate denials, and follow up on collections to reduce AR days and improve cash flow.</li>
              <li><strong>Online Claims Follow-up:</strong> Leverage payer portals and insurer websites to quickly check claim status.</li>
              <li><strong>AR Recovery Services:</strong> Identify non-payment factors and recover debts by addressing rejected claims.</li>
              <li><strong>Financial Reports Creation:</strong> Generate monthly, quarterly, and yearly reports, differentiating between collectibles and non-collectibles.</li>
            </ul>
          </div>

          {/* Tools We Leverage */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              AR Follow-up Tools We Leverage
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We use state-of-the-art software to provide fast, secure, and efficient accounts receivable follow-up services. Our tools track unpaid claims, flag underpayments or overpayments, manage patient balances, and generate detailed AR reports. With real-time alerts and payment tracking, our technology ensures improved accuracy and stronger cash flow.
            </p>
          </div>

          {/* Process Flow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Our Accounts Receivable Follow-up Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Document Verification:</strong> Ensure accuracy and completeness of collected documentation.</li>
              <li><strong>Review Procedure Codes:</strong> Match procedure codes with diagnoses, correcting mismatches.</li>
              <li><strong>Address Rejection:</strong> Analyze rejected claims for systemic issues and resolve them proactively.</li>
              <li><strong>Check Claim:</strong> Validate adjudication accuracy and pursue appeals if necessary.</li>
              <li><strong>Patient Collections:</strong> Pursue balances via calls, billing cycles, and online payment options in compliance with state and federal laws.</li>
            </ol>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Benefits of Choosing Nimble Acuity for AR Follow-up Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Affordable Services:</strong> Flexible pricing models tailored to your needs.</li>
              <li><strong>Data Security:</strong> Secure servers, monitored workstations, and strict compliance with safety policies.</li>
              <li><strong>HIPAA Compliance:</strong> Fully HIPAA-compliant processes with ISO 9001:2000 certification.</li>
              <li><strong>Accuracy:</strong> 98% accuracy rates with dedicated QA teams surpassing industry standards.</li>
              <li><strong>Scalability:</strong> Resources and infrastructure to handle spikes in demand seamlessly.</li>
              <li><strong>Productivity Gains:</strong> Systematic rejection analysis and validated coding for immediate improvements.</li>
              <li><strong>Time Savings:</strong> Free your healthcare staff from repetitive AR follow-ups to focus on patient care.</li>
              <li><strong>Skilled Team:</strong> 50+ AR experts proficient in code accuracy, denial management, and patient balance recovery.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-3xl font-bold text-[#006A7C] mb-4">
              Outsource AR Follow-up Services to Nimble Acuity
            </h3>
            <p className="text-gray-600 mb-6">
              Nimble Acuity is a trusted provider of accounts receivable follow-up services and medical billing solutions. With extensive industry expertise and a skilled team, we deliver accurate, cost-effective, and scalable AR solutions to healthcare providers worldwide.
            </p>
            <p className="text-gray-600 mb-8 font-medium">
              Looking for a reliable AR partner to streamline your collections and improve cash flow? Contact us today.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get in Touch Today
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default AccountsReceivableFollowUp;
