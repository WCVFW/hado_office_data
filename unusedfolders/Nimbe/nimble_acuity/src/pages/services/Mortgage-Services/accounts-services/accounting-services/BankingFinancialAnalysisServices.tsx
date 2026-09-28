import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const BankingFinancialAnalysisServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Banking Financial Analysis Services
            </h2>
            <p className="text-lg text-gray-600">
              Track and optimize your bank’s cash flow and decision-making with accurate, expert financial analysis.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you struggling with inaccurate balance sheets or income statements? Do miscalculations affect your decision-making? At Nimble Acuity, we bring accuracy, expertise, and clarity to your banking financial analysis.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our financial experts have extensive experience proactively analyzing key banking data, including net interest income, non-interest income, deposits, securities, loans, and balance sheets. We ensure banks get reliable insights without spending excessive time or money.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Banking Financial Analysis Solutions
            </h3>
            <p className="text-gray-700 mb-6">
              We provide comprehensive solutions to optimize your financial operations and enhance decision-making.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">General Ledger Accounting & Reconciliation</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Ensure accuracy across payroll, reconciliations, adjustments, and financial term closures.</li>
                  <li>Match bank statements with internal records and flag discrepancies for swift resolution.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Revenue & Cash Flow Management</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Identify document shortfalls, accelerate collections, and improve revenue streams.</li>
                  <li>Get accurate forecasts and insights into spending gaps with detailed cash flow analysis.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Streamlined Process
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Data Collation & Review:</strong> We begin by gathering and reviewing all necessary financial statements, guarantor records, credit reports, and tax returns.</li>
              <li><strong>Credit & Financial Analysis:</strong> Our experts perform in-depth ratio analysis, repayment capacity checks, and loan spread analysis to evaluate credit risk.</li>
              <li><strong>Reporting:</strong> We deliver summarized, precise, and error-free reports to support your bank’s critical decision-making.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable & Scalable:</strong> Our flexible pricing and scalable services grow with your needs, starting at just $12 per hour.</li>
              <li><strong>Expert Team:</strong> Our team consists of highly qualified Chartered Accountants, CPAs, MBAs, and statisticians.</li>
              <li><strong>Quick Turnaround:</strong> We provide timely delivery to support your critical business decisions.</li>
              <li><strong>Dedicated Support:</strong> A single point of contact ensures seamless communication and support.</li>
              <li><strong>Advanced Tools & Technology:</strong> We use cutting-edge analytics and reporting systems for reliable, accurate results.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity for Financial Clarity
            </h3>
            <p className="text-gray-700 mb-6">
              When you outsource banking financial analysis to Nimble Acuity, you gain a trusted partner experienced in handling complex requirements for global banks. Our solutions help clients improve compliance, decision-making, and profitability.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Contact us today to discuss your banking financial analysis needs.</span> Our team will connect with you within 24 hours.
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

export default BankingFinancialAnalysisServices;