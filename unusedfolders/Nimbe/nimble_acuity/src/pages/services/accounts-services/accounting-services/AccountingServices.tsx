import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const AccountingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Nimble Accounting Services
            </h2>
            <p className="text-lg text-gray-600">
              Don't let complex global accounting slow down your business. We deliver <strong>nimble acuity</strong>—speed, precision, and strategic insight to manage multinational accounting challenges with ease.
            </p>
          </div>

          {/* Approach Section */}
          <div className="max-w-5xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Approach: Simplify the Complex
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Real-Time Clarity:</strong> Instant access to financial data via AI-driven reporting and analytics.</li>
              <li><strong>Reduced Risk:</strong> Compliance with global standards (SOX, IFRS) to minimize penalties.</li>
              <li><strong>Lower Overhead:</strong> Skilled professionals and advanced technology at a fraction of in-house costs.</li>
              <li><strong>Scalability:</strong> Flexible solutions that grow and adapt with your business.</li>
            </ul>
          </div>

          {/* Expert Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              A Spectrum of Expert Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>General Accounting:</strong> Balance sheet audits, cash flow analysis, and a complete, compliant view of your financial health.</li>
              <li><strong>Specialized Accounting:</strong> Custom solutions for industries like Real Estate, Healthcare, Automotive, and Hospitality.</li>
              <li><strong>Virtual CFO Services:</strong> Executive-level financial strategy, planning, forecasting, and business advice without the full-time cost.</li>
              <li><strong>Audit & Tax Support:</strong> End-to-end documentation and support for tax and audit processes.</li>
            </ul>
          </div>

          {/* How We Work */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              How We Work
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Data Collection:</strong> Securely and systematically collect your financial data.</li>
              <li><strong>Meticulous Bookkeeping:</strong> Certified professionals record every transaction accurately.</li>
              <li><strong>Comprehensive Reconciliation:</strong> Reconcile all accounts to ensure complete accuracy.</li>
              <li><strong>Actionable Reporting:</strong> Deliver insightful reports that empower data-driven decisions.</li>
            </ol>
          </div>

          {/* Partnership Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              The Benefit of Partnership
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Skilled Professionals:</strong> Access a global pool of certified accountants and financial experts.</li>
              <li><strong>Advanced Technology:</strong> Leverage platforms like SAP, QuickBooks, and Xero for optimized results.</li>
              <li><strong>Global Credibility:</strong> Strict adherence to international standards ensures recognized excellence.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Transform Your Accounting Today
            </h3>
            <p className="text-gray-700 mb-6">
              Ready to turn complex accounting challenges into strategic advantages?
            </p>
            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
              Contact Us for a Free Quote
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AccountingServices;
