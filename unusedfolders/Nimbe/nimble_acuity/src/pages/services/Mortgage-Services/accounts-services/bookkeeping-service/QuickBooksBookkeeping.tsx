import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const QuickBooksBookkeeping: React.FC = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4 text-center">
              Expert QuickBooks Bookkeeping Services
            </h2>
            <p className="text-lg text-gray-600 text-center">
              Over 40% of business owners spend 80 hours a year on bookkeeping and tax liabilities. QuickBooks can drastically reduce this time, but to truly benefit, you need expert setup and management.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mx-auto mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** provides **QuickBooks bookkeeping services** for businesses of all sizes. Our certified experts help you leverage QuickBooks to streamline financial operations and gain a clear financial picture.
            </p>
          </div>

          {/* QuickBooks Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our QuickBooks Bookkeeping Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>QuickBooks Accounting and Bookkeeping:</strong> Setup accounts, prepare invoices, record receipts, verify bills, track billable hours, and handle month-end/year-end closings.</li>
              <li><strong>QuickBooks Accounts Payable Services:</strong> Manage bills online, process payments, and ensure timely approvals for streamlined AP operations.</li>
              <li><strong>QuickBooks Accounts Receivable Services:</strong> Track AR, send estimates, record payments, manage collections, and generate cash flow reports.</li>
              <li><strong>QuickBooks Financial Reporting:</strong> Comprehensive reports including balance sheet, income statement, cash flow, general ledger, and fixed-asset accounts.</li>
              <li><strong>QuickBooks Payroll Services:</strong> Set up and manage payroll, calculate taxes, file tax forms, and generate year-end W-2 forms.</li>
              <li><strong>QuickBooks Bank and Credit Card Reconciliations:</strong> Reconcile accounts, match balances, and assist with multi-company account management.</li>
            </ul>
          </div>

          {/* QuickBooks Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our QuickBooks Live Bookkeeping Process
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Deep Dive:</strong> Analyze your business processes to understand your financial reporting requirements.</li>
              <li><strong>Software Selection:</strong> Select the right QuickBooks version and integrate with your existing applications.</li>
              <li><strong>Setup and Implementation:</strong> Configure accounts, payroll, and tax settings to ensure accuracy from day one.</li>
              <li><strong>Data Migration:</strong> Carefully import existing financial balances into QuickBooks.</li>
              <li><strong>Comprehensive Training:</strong> Train your team to effectively use QuickBooks and maximize its features.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Management of Diverse Needs:</strong> We handle bookkeeping for various industries, ensuring accuracy and compliance.</li>
              <li><strong>Security and Confidentiality:</strong> ISO-certified organization with NDA protection for your sensitive data.</li>
              <li><strong>Fast Turnaround Times:</strong> Timely service delivery to streamline your business operations.</li>
              <li><strong>Automation:</strong> Automate invoicing and financial statements to improve efficiency.</li>
              <li><strong>Expert Resources:</strong> Team includes CFAs, CPAs, and CAs proficient in QuickBooks.</li>
              <li><strong>Latest Software:</strong> We use the latest QuickBooks versions for maximum efficiency.</li>
              <li><strong>Scalable Services:</strong> Flexible and scalable services tailored to your needs.</li>
              <li><strong>Affordable Prices:</strong> Choose dedicated accountant at flat rate or hourly for cost-effective service.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Maximize Your QuickBooks Efficiency
            </h3>
            <p className="text-gray-700 mb-6">
              Maximize your QuickBooks efficiency and ensure accurate, audit-ready financial records with Nimble Acuity's expert services. Let us handle your bookkeeping so you can focus on growing your business.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to take control of your finances?</span>
              Contact us today to discuss your bookkeeping needs and get started.
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

export default QuickBooksBookkeeping;
