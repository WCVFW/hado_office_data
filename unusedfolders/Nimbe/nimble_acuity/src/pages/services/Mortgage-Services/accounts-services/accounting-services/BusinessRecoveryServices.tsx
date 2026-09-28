import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const BusinessRecoveryServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Business Recovery Services
            </h2>
            <p className="text-lg text-gray-600">
              Overcome financial challenges with practical and efficient recovery solutions. Our services start at just <span className="font-medium">$8 per hour</span>, helping your business regain stability and thrive.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16">
            <p className="text-gray-700 leading-relaxed mb-6">
              Financial difficulties are a natural part of any business journey. When faced with challenges, expert guidance can make the difference between decline and recovery. Nimble Acuity’s experienced team provides strategic support to improve cash management, enhance operational resilience, restructure debts, and address other business hurdles.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With years of experience, our professionals help businesses navigate complex recovery scenarios and build a path toward long-term stability.
            </p>
          </div>

          {/* Our Business Recovery Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Business Recovery Solutions
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Restructuring & Turnaround Services:</strong> Stabilize core functions, address liquidity concerns, and identify non-core assets for sale.</li>
              <li><strong>Financial Advisory:</strong> Audit reports, cash flow analysis, projections, forecasts, and due diligence to support informed recovery decisions.</li>
              <li><strong>Strategic Counsel:</strong> Align company performance with strategic objectives to improve overall business functionality.</li>
              <li><strong>Valuation:</strong> Assess business equity, assets, and financial properties to create a roadmap for successful recovery.</li>
              <li><strong>Administrative Services:</strong> Manage liquidation, creditor communications, and business continuity planning.</li>
              <li><strong>Company Voluntary Arrangement (CVA):</strong> Draft proposals for creditors to accept a proportion of debt as a final settlement.</li>
              <li><strong>Bankruptcy Support:</strong> Comprehensive assistance including working capital optimization, stakeholder negotiation, asset sales, interim financing, and third-party funding where required.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Competitive Pricing:</strong> Flexible, reasonable pricing—pay only for the services you use.</li>
              <li><strong>Vast Experience:</strong> Trusted experts in company recovery services with years of proven results.</li>
              <li><strong>Skilled Team:</strong> Dedicated insolvency, financial, and accounting professionals guiding you every step of the way.</li>
              <li><strong>Assured Confidentiality:</strong> All business dealings and information are handled securely and confidentially.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Get Back on Your Feet with Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              We help your business recover with effective solutions and actionable support. From evaluating financial structures and operational viability to crisis analysis and asset valuation, our team builds a roadmap for continuity or liquidation.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Facing financial challenges?</span> Contact one of our experts today and take the first step toward business recovery.
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

export default BusinessRecoveryServices;
