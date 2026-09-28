import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const FinancialReportingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Financial Reporting Services
            </h2>
            <p className="text-lg text-gray-600">
              Get access to specialized financial reporting services from Nimble Acuity’s finance and accounting experts.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Every organization needs financial reporting and analysis to assess its financial performance. Financial reports provide crucial insights into how your company is performing, helping you evaluate results over a specific period.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These reports are essential for making informed business decisions and ensuring compliance. With structured, accurate reporting, you gain the ability to identify trends, risks, and opportunities for growth.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Outsourcing financial reporting services to Nimble Acuity gives you access to professional, effective reporting and analysis from seasoned experts who deliver accurate and timely data.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Financial Reporting Services We Offer
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Income Statement Preparation &amp; Analysis</h4>
                <p className="text-gray-700">We prepare and analyze profit and loss statements summarizing costs, expenses, and revenues.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Monthly Income Statements</h4>
                <p className="text-gray-700">Timely reports summarizing the latest twelve-month financial performance.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Balance Sheet Preparation</h4>
                <p className="text-gray-700">Detailed balance sheets displaying equity, assets, and liabilities on a specific date.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Cash Flow Statements</h4>
                <p className="text-gray-700">Comprehensive summaries of cash movements across operating, investing, and financing activities.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Bank Reconciliation Reports</h4>
                <p className="text-gray-700">Ensure accuracy by reconciling your cash balances with bank statements.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Payroll Registers</h4>
                <p className="text-gray-700">Detailed monthly registers with gross pay, taxes, and deductions for employees.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Journal Entry &amp; Check Registers</h4>
                <p className="text-gray-700">Month-wise registers of all checks issued, tied directly to ledger accounts.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">General Ledger Reports</h4>
                <p className="text-gray-700">Complete activity overview of accounts for a given month.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Business Analysis Reports</h4>
                <p className="text-gray-700">Key financial statement metrics for evaluating overall performance.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Financial Analysis Reports</h4>
                <p className="text-gray-700">Balance sheet comparisons highlighting changes in equity, assets, and liabilities.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Operations Analysis Reports</h4>
                <p className="text-gray-700">Year-over-year comparisons of sales, costs, and expenses by category.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Additional Reports</h4>
                <p className="text-gray-700">Tailored management, sales, sales tax, and purchase reports as per business needs.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing:</strong> Extremely cost-effective reporting solutions.</li>
              <li><strong>High-Quality Services:</strong> ISO-certified, following the latest reporting best practices.</li>
              <li><strong>Superb Infrastructure:</strong> Strong systems and skilled resources ensure reliability.</li>
              <li><strong>Advanced Tools:</strong> Use of modern financial reporting technologies.</li>
              <li><strong>Experienced Team:</strong> Wide expertise across diverse reporting solutions.</li>
              <li><strong>Data Security:</strong> Strict compliance with global regulations.</li>
              <li><strong>Quick Turnaround:</strong> Timely delivery aligned with business priorities.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Drive Better Decisions with Expert Financial Reporting
            </h3>
            <p className="text-gray-700 mb-6">
              From income statements to detailed analysis, our reporting services give you the clarity and confidence needed to make smarter business moves.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Partner with Nimble Acuity</span> for structured, insightful, and reliable financial reporting. Contact us today to get started.
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

export default FinancialReportingServices;
