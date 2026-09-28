import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const RealEstateBookkeepingServices: React.FC = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4 text-center">
              Specialized Bookkeeping for Real Estate
            </h2>
            <p className="text-lg text-gray-600 text-center">
              At Nimble Acuity, we provide specialized bookkeeping services for property managers, real estate investors, and developers. Our core functions include rent roll reconciliation, mortgage account management, and financial forecasting.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mx-auto mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, accuracy, streamlined processes, and regulatory compliance are at the core of our financial management. We provide effective decision-making, optimal cash flow management, tax reduction, and increased operational efficiency—leaving you more time to expand.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Real Estate Bookkeeping Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Accounts Payable Management:</strong> We ensure timely vendor payments and expense tracking, which minimizes late fees and errors.</li>
              <li><strong>Accounts Receivable Management:</strong> We provide accurate rent and payment tracking, automated reminders for overdue accounts, and improved cash flow.</li>
              <li><strong>Financial Reporting:</strong> We deliver customized profit & loss statements, in-depth balance sheets, and cash flow reports for transparent, real-time financial insights.</li>
              <li><strong>Bank Reconciliation:</strong> We reconcile your bank statements and records to detect and correct errors, enhancing the accuracy of your financial reporting.</li>
              <li><strong>Lease Abstraction:</strong> We review lease terms to identify key dates and obligations, simplifying lease management and ensuring compliance.</li>
              <li><strong>Property Management Accounting:</strong> We provide real-time tracking of property-related expenses and effective management of tenant billing and payments.</li>
              <li><strong>Tax Preparation:</strong> We organize financial records, maximize deductions, and ensure timely and accurate tax filings.</li>
              <li><strong>Budgeting and Forecasting:</strong> We create precise budgets for property expenses and dynamic forecasts based on market trends to support your long-term financial success.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Precision on Accounts Reconciliation:</strong> We ensure more than 98% accuracy in bank and rent roll reconciliation, eliminating discrepancies that can affect cash flow or financial reporting.</li>
              <li><strong>Income Tax Reduction Planning:</strong> Our tax planning involves real estate-specific deductions, 1031 exchange tracking, and cost segregation benefits that increase profits while lowering taxable income.</li>
              <li><strong>Proactive Financial Reporting for Investors:</strong> With our reports, you can understand your investment better through capitalization rate analysis, DSCR monitoring, and property profitability.</li>
              <li><strong>Lease Compliance & Abstraction:</strong> We extract vital lease data, determine rental payment obligations, and monitor important dates for landlords’ compliance with legal and financial obligations.</li>
              <li><strong>Compliance & Bookkeeping Accuracy:</strong> Our structured bookkeeping enables compliance with real estate tax law requirements, GAAP, and legal provisions, reducing risks for legal entities.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Optimize Your Real Estate Finances Today
            </h3>
            <p className="text-gray-700 mb-6">
              Minimize tax liabilities and improve cash flow with Nimble Acuity's professional real estate bookkeeping services. Our audit-ready books will help you maximize your profitability.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to take control of your real estate finances?</span>
              Contact us today to discuss your accounting needs and get started.
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

export default RealEstateBookkeepingServices;