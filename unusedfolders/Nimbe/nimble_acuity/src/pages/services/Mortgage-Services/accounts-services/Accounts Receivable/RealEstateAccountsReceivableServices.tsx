import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const RealEstateAccountsReceivable = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Nimble Real Estate Accounts Receivable
            </h2>
            <p className="text-lg text-gray-600">
              Don't let slow payments burden your real estate portfolio. Our services bring <strong>nimble acuity</strong> to accounts receivable, turning a cumbersome task into an efficient engine for cash flow. With over 6 years of experience, we understand the unique challenges of the real estate industry.
            </p>
          </div>

          {/* Solutions Section */}
          <div className="max-w-5xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Solutions for Your Success
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Tenant Management:</strong> Handle move-ins, renewals, security deposits, and bill backs with precision throughout the tenant billing cycle.</li>
              <li><strong>Rent & Invoice Processing:</strong> Accurate monthly rent processing, professional invoices, and strategic follow-ups to keep payments on track.</li>
              <li><strong>Detailed Reporting:</strong> In-depth reports offering a complete view of assets, liabilities, and tenant ledgers.</li>
              <li><strong>Cash Flow Optimization:</strong> Convert receivables to revenue quickly, ensuring consistent and predictable cash flow.</li>
              <li><strong>Budgeting & Analysis:</strong> Expert support with cash flow forecasting and site-based budgeting to inform smarter property decisions.</li>
            </ul>
          </div>

          {/* Advantage Section */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              The Advantage of Nimble Acuity
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Speed & Accuracy:</strong> Quick turnaround times and high billing accuracy.</li>
              <li><strong>Cost-Effectiveness:</strong> Top-tier services at a fraction of in-house team costs.</li>
              <li><strong>Data Security:</strong> Strict protocols ensure your confidential financial data is always secure.</li>
              <li><strong>Best-in-Class Technology:</strong> Leverage leading accounting and property management software like QuickBooks, Sage, and more.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Boost Your Cash Flow Today
            </h3>
            <p className="text-gray-700 mb-6">
              Ready to streamline your accounts receivable, accelerate collections, and improve your real estate portfolio's cash flow?
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

export default RealEstateAccountsReceivable;
