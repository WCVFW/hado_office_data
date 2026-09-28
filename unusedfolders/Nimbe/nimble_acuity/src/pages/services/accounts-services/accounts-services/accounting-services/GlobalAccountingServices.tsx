import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const GlobalAccountingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Global Accounting Services
            </h2>
            <p className="text-lg text-gray-600">
              We help companies cope with diverse accounting requirements across different countries. Our services start at <span className="font-medium">$12 per hour</span>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16">
            <p className="text-gray-700 leading-relaxed mb-6">
              Global accounting is essential for businesses operating internationally. It helps companies navigate unique challenges while maintaining compliance and consistent financial reporting.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity delivers comprehensive global accounting solutions backed by local experts across multiple jurisdictions. Leveraging advanced software and an agile delivery model, we simplify complex accounting processes with integrated outsourcing solutions.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Global Accounting Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Accounts Receivable:</strong> AR aging reports, billing, periodic statements, and subsidiary receivable ledger management.</li>
              <li><strong>Accounts Payable:</strong> Invoice data capture, processing, exception handling, and matching.</li>
              <li><strong>Accounts Taxation:</strong> Bookkeeping, payroll processing, audit, tax filing, and reporting.</li>
              <li><strong>Accounts VAT:</strong> VAT payment assistance and VAT registration compliance.</li>
              <li><strong>Account Bookkeeping:</strong> Organize, classify, and summarize transactions for better decision-making.</li>
              <li><strong>Bank Reconciliation Statement:</strong> Reconcile company accounts with banks for accurate financial tracking.</li>
              <li><strong>Daily Ledger Entry Management:</strong> General ledger management, double-entry accounting, and journal transfers.</li>
              <li><strong>Financial Accounting Services:</strong> Preparation of income statements, balance sheets, and cash flow statements.</li>
              <li><strong>Management Accounts:</strong> Monthly or quarterly financial reports including balance sheet and P&L.</li>
              <li><strong>Payroll Timesheets Processing:</strong> Track productivity, calculate labor costs, monitor projects, and forecast needs.</li>
              <li><strong>Sales Tax Management:</strong> Ensure accurate sales tax payments, reduce liability, and meet deadlines.</li>
              <li><strong>Tax Return Preparation:</strong> Assistance with federal and state tax return filings for businesses and individuals.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Global Accounting Services to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Global Services:</strong> Supporting Fortune 1000 clients across North America, Europe, the Middle East, and Australia.</li>
              <li><strong>Expert Team:</strong> In-house accounting specialists leveraging advanced tools and secure infrastructure worldwide.</li>
              <li><strong>Best Accounting Practices:</strong> Established processes, superior monitoring, reporting, and optimized workflows.</li>
              <li><strong>Cost-Effective Services:</strong> Flexible and customized pricing to ensure maximum value for clients.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With years of experience serving global clients, Nimble Acuity provides top-notch international accounting services. Our experts act as a seamless extension of your team, ensuring compliance, accuracy, and timely reporting.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">If you are looking for the best global accounting services, get in touch with our experts now.</span>
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

export default GlobalAccountingServices;
