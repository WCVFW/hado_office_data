import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const AccountingCleanupServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Accounting Cleanup and Historic Accounting Services
            </h2>
            <p className="text-lg text-gray-600">
              Accurate and up-to-date financial records are essential for running a smooth and successful business. Our cleanup and historic accounting services give you clarity and peace of mind to focus on growth.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16">
            <p className="text-gray-700 leading-relaxed mb-6">
              Maintaining accurate and current books can be challenging, especially for small and medium-sized businesses. Tracking expenses, cash flow, and all transactions requires expertise, and hiring full-time professionals can be costly. Outsourcing to a trusted partner like <span className="font-medium">Nimble Acuity</span> is the optimal solution.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity provides high-quality, affordable cleanup and historic accounting services. Our team of seasoned professionals ensures your financial records are accurate and orderly, helping you reduce your burden and focus on growing your business.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Cleanup and Historic Accounting Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>QuickBooks Cleanup:</strong> Ensure accurate and well-organized accounts:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700">
                  <li>Cleaning up the chart of accounts by removing duplicates or unused accounts.</li>
                  <li>Clearing unposted historic transactions.</li>
                  <li>Structuring accounts for systematic overview.</li>
                  <li>Correcting miscoded GL entries (wrongly booked income/expenses).</li>
                  <li>Adjusting entries to current accounting standards.</li>
                  <li>Reconciling historic accounts with banks, credit cards, merchant accounts, and more.</li>
                </ul>
              </li>
              <li>
                <strong>Book Cleaning and Bookkeeping:</strong> Organize your records and maintain ongoing clean books, ready for tax season or audits.
              </li>
              <li>
                <strong>Accounts Payable and Receivable Cleanup:</strong> Resolve inconsistent vendor payments and mend incorrectly applied customer payments. Review unpaid bills, undeposited funds, and non-collectible invoices for accurate reporting.
              </li>
              <li>
                <strong>Bank Reconciliation:</strong> Review bank and credit card accounts to resolve missing checks and other inconsistencies.
              </li>
              <li>
                <strong>Account Balances and Journal Entries:</strong> Reclassify historic transactions, correct data entry errors, and prepare journal entries to adjust inconsistencies.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Cleanup Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing:</strong> Flexible solutions that allow businesses of all sizes to access high-quality accounting services.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2015 certified, ensuring your financial information remains secure and private.</li>
              <li><strong>Cutting-Edge Technology:</strong> We leverage the latest accounting tools like QuickBooks for precise and efficient services.</li>
              <li><strong>Scalability:</strong> Easily scale services and team size as your business grows or requires higher volume handling.</li>
              <li><strong>Dedicated Project Manager:</strong> A single point of contact ensures smooth communication and timely updates.</li>
              <li><strong>Quick Turnaround:</strong> Efficient processes and experienced professionals deliver fast and reliable results.</li>
              <li><strong>24/7 Assistance:</strong> Customer support available around the clock to answer your questions and provide guidance.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Let Nimble Acuity Clean Up Your Books
            </h3>
            <p className="text-gray-700 mb-6">
              Focus on growing your business while we handle your cleanup and historic accounting needs with precision and expertise.
            </p>
            <p className="text-gray-700 mb-8">
              Ready to get started? <span className="font-medium">Contact Nimble Acuity today and let us help your business thrive.</span>
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

export default AccountingCleanupServices;
