import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const RealEstateFinancialReporting = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Real Estate Financial Statement Reporting Services
            </h2>
            <p className="text-lg text-gray-600">
              Ensure accurate financial accounting and enhanced real estate asset maintenance with our expert services, starting at just <span className="font-medium">$12 per hour</span>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16">
            <p className="text-gray-700 leading-relaxed mb-6">
              Looking for reliable real estate financial statement reporting services to track and manage your assets? Nimble Acuity provides experienced professionals to reduce your workload and enhance decision-making.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Acting as an extension of your team, we consolidate all relevant financial information to give you a clear view of your portfolio, helping you make informed investment decisions.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Real Estate Financial Statement Reporting Services We Offer
            </h3>
            <p className="text-gray-700 mb-4">
              Our specialists provide custom business intelligence, data warehousing, and detailed reporting solutions to give you a complete overview of your real estate investments.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
              <li>
                <strong>Financial Statement Reports:</strong> Accurate balance sheets, income statements, accounts payable/receivable reports, cash flow statements, general ledger reports, U.S. GAAP reports, construction budgets, country-specific reporting, prospective audits, bank reconciliations, carried interest reports, consolidated entity reports, fixed asset and depreciation reports, and inventory/payroll registers.
              </li>
              <li>
                <strong>Financial Write-up Reports:</strong> Investor reports, management reports, ad hoc reports, transaction entry reports, expense ledger reports, trial balances, profit and loss statements, assets/equipment ledgers, and journal entry reports.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing Options:</strong> Cost-effective services for maximum ROI.</li>
              <li><strong>Data Security:</strong> Strict measures to ensure your real estate financial data is secure.</li>
              <li><strong>High-Quality Services:</strong> ISO 9001:2015-certified, committed to world-class service delivery.</li>
              <li><strong>Experienced Team:</strong> Years of experience providing comprehensive solutions to a global clientele.</li>
              <li><strong>Short Turnaround:</strong> Timely delivery, every time.</li>
              <li><strong>Structured Process:</strong> Systematic approach to eliminate errors in deliverables.</li>
              <li><strong>Superb Infrastructure:</strong> State-of-the-art facilities for robust service delivery.</li>
              <li><strong>Advanced Tools:</strong> Expert use of advanced software for sophisticated reporting solutions.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a leading provider of real estate financial reporting services, offering customized solutions to help clients succeed in the competitive real estate market.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Get in touch with us today for reliable and cost-effective real estate financial statement reporting services.</span>
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

export default RealEstateFinancialReporting;
