import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const TransactionAdvisoryServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Transaction Advisory Services
            </h2>
            <p className="text-lg text-gray-600">
              Access expert transaction advisory solutions across industries. Our services start at just <span className="font-medium">$8 per hour</span>, helping you navigate mergers, acquisitions, joint ventures, and divestitures with confidence.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16">
            <p className="text-gray-700 leading-relaxed mb-6">
              Mergers, acquisitions, and other transactions can unlock great opportunities, but managing the nuances of a deal is critical to its success. From accounting and taxation to regulatory, legal, and management aspects, expert evaluation is essential.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity’s transaction advisory team provides unbiased, strategic, and comprehensive support throughout the entire transaction lifecycle, guiding you with trusted counsel and actionable insights.
            </p>
          </div>

          {/* Our Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Transaction Consultancy Solutions
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Business Valuation:</strong> Establish company valuation, consider influencing factors, and build effective business models for new transactions.
              </li>
              <li>
                <strong>Accounting & Financial Due Diligence:</strong> Conduct thorough due diligence using industry-best methods to provide competitive intelligence and unbiased financial insights.
              </li>
              <li>
                <strong>Transaction Tax Advisory Services:</strong> Offer expert guidance on local and international tax regulations to support M&As, JVs, and cross-border deals.
              </li>
              <li>
                <strong>Exit Readiness & Deal Optimization:</strong> Assess target business readiness and identify operational improvements required post-transaction.
              </li>
              <li>
                <strong>Lender Services:</strong> Evaluate existing credit, asset coverage, risk, and capital security for the target company.
              </li>
              <li>
                <strong>Post-Transaction Integration Support:</strong> Assist with operational prioritization, risk mapping, and strategic development after deal closure.
              </li>
            </ul>
          </div>

          {/* Why Outsource */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Transaction Advisory Services to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Flexible Pricing:</strong> Choose a plan that suits your needs and pay only for the services you use.</li>
              <li><strong>Proven Track Record:</strong> Successfully managed advisory projects for Indian and international clients, including Fortune 1000 companies.</li>
              <li><strong>Assured Confidentiality:</strong> Maintain full confidentiality and follow standardized practices to protect sensitive information.</li>
              <li><strong>Comprehensive Support:</strong> End-to-end advisory services from pre-deal assessment to post-closing integration and strategy.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity for Transaction Consultancy
            </h3>
            <p className="text-gray-700 mb-6">
              Our team brings extensive experience to support buy-sell business deals, analyzing legal, financial, accounting, and management data to minimize risk and maximize deal value.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Talk to us today to learn more about our transaction advisory solutions.</span>
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

export default TransactionAdvisoryServices;
