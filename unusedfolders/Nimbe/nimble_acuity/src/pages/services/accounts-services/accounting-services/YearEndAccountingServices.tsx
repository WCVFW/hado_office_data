import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const YearEndAccountingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Year-end Accounting Services
            </h2>
            <p className="text-lg text-gray-600">
              Meet your deadlines and ensure accuracy with our reliable year-end accounting, tax reporting, and financial services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              The end of the year is the busiest time for most firms, as year-end accounting is essential for closing records and carrying profits and losses forward. This period of high workload can lead to bottlenecks and last-minute errors. Outsourcing your year-end accounting needs is a reliable way to manage this pressure effectively.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity is a dedicated year-end accounting services company that assists clients with the preparation of reports required for shareholders and tax authorities. Our team of certified accountants provides top-notch, error-free services to help you navigate this critical period with ease.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Year-end Accounting Solutions
            </h3>
            <p className="text-gray-700 mb-6">
              We provide direct access to a team of internationally certified accountants who can handle every aspect of your year-end process. Our services include:
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Financial Statement Preparation</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Gather and analyze your financial data to prepare accurate income statements, balance sheets, and cash flow statements.</li>
                  <li>Review ledgers and records to make necessary adjusting entries for accurate closing balances.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Reconciliation and Organization</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Help you switch to up-to-date accounting platforms and reconcile bank accounts and credit cards with your financial statements.</li>
                  <li>Gather and organize receipts, leveraging technology to streamline and sync all your financial accounts.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Tax and Compliance</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Provide expert advice on corporation tax, including computation and adjustments.</li>
                  <li>Prepare and file all necessary accounts and tax returns before their deadlines to avoid penalties.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Budgeting and Forecasting</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Review financial statements from previous years to identify patterns and create a strategic budget for the upcoming year.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Latest Tools & Technology:</strong> We leverage the most current software to provide you with a clear, real-time view of your finances.</li>
              <li><strong>Team of Financial Experts:</strong> Our team of seasoned accountants helps your business perform better, grow faster, and make more money.</li>
              <li><strong>Scalable & Tailored Services:</strong> We offer flexible, customizable services that can be scaled to meet your needs, from simple accounting to partial CFO support.</li>
              <li><strong>Cost-Effective Solutions:</strong> Our transparent and flexible pricing ensures you get the best value for your investment, with services starting at just $12/hour.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Complete Your Year-end Accounting with Confidence
            </h3>
            <p className="text-gray-700 mb-6">
              The year-end is a critical time, and our experts are here to help you avoid bottlenecks and discrepancies. We've been offering a range of finance and accounting services to global clients for years. Our experts work as a flexible business partner, taking care of the hustle so you can focus on your business goals.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Contact us today to get a free quote and discover how our year-end accounting services can benefit you.</span>
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

export default YearEndAccountingServices;