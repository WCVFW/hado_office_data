import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const FinanceAccountingFinOps = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Use the AccountsHeader component */}
      <AccountsHeader />
      {/* Main Content */}
      <div className="px-4 md:px-6 max-w-7xl mx-auto space-y-12 pt-16">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#006A7C] mt-10 mb-8">
          Finance, Accounting & FinOps Solutions
        </h1>
        {/* Main Image */}
        <div className="w-full mb-12">
          <img
            src="/images/img4.jpg"
            alt="Finance, Accounting & FinOps"
            className="w-full rounded-lg shadow-lg object-cover max-h-96 mx-auto"
          />
        </div>
        <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
          From daily transactions to high-level strategy, our services are designed to streamline your financial operations, ensure compliance, and drive business growth.
        </p>

        

        {/* Core Accounting & Bookkeeping */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-[#006A7C] mb-4">
            Core Accounting & Bookkeeping
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            These are the foundational services that keep your financial records accurate and up-to-date. We handle everything from Bookkeeping & General Ledger to Accounts Payable and Accounts Receivable processing. Our team also manages Payroll processing and ensures that all bank and cash reconciliations are completed accurately and on time, giving you a clear, real-time view of your company's financial health.
          </p>
        </section>

        {/* Tax & Compliance */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-[#006A7C] mb-4">
            Tax & Compliance
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Navigating tax regulations can be complex. Our tax services simplify this process by managing Payroll tax filings, Sales & use tax compliance, and Income tax preparation. We also provide expert Tax planning advisory to minimize your liabilities and offer specialized support for 1099/1096 compliance and Grants & fund accounting for nonprofits.
          </p>
        </section>

        {/* Financial Planning & Analysis (FP&A) */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-[#006A7C] mb-4">
            Financial Planning & Analysis (FP&A)
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Effective financial planning is key to strategic decision-making. Our FP&A services include providing a Fractional/Virtual CFO for executive-level guidance, developing robust Budgeting & forecasting models, and creating detailed Financial modeling for scenario analysis. We also deliver insightful Management reporting (MIS) and perform meticulous Cost accounting to help you understand and control your expenses.
          </p>
        </section>

        {/* Audit, Risk & Compliance */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-[#006A7C] mb-4">
            Audit, Risk & Compliance
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We help you maintain financial integrity and mitigate risk. Our team offers Audit preparation & support, conducts thorough Internal audit & SOX testing, and provides expert Credit risk assessment. We also ensure that your financial statements are transparent and accurate by assisting with complex accounting standards like Revenue recognition (ASC 606).
          </p>
        </section>

        {/* Financial Operations (FinOps) & Process Optimization */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-[#006A7C] mb-4">
            Financial Operations (FinOps) & Process Optimization
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Efficiency is paramount in modern finance. Our FinOps services focus on streamlining your workflows from end-to-end. We manage Vendor master data, handle all aspects of Customer billing & invoicing, and enforce Expense management & policy enforcement. By designing and optimizing your Procure-to-Pay (P2P) and Order-to-Cash (O2C) processes, we help improve cash flow and reduce operational costs.
          </p>
        </section>

        {/* Advanced & Strategic Services */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-[#006A7C] mb-4">
            Advanced & Strategic Services
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            For businesses ready to scale, we offer strategic support that leverages technology and new operational models. Our services include end-to-end ERP finance implementation for major platforms like NetSuite and SAP, and we can guide you through the Finance shared services (SSC) setup to centralize operations, improve consistency, and boost overall efficiency.
          </p>
        </section>
      </div>
    </div>
  );
};

export default FinanceAccountingFinOps;
