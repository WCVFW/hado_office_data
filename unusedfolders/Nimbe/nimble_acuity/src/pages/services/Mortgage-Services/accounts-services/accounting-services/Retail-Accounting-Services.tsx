import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const RetailAccountingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Retail Accounting Services
            </h2>
            <p className="text-lg text-gray-600">
              Streamline retail accounting, gain real-time financial visibility, and improve your bottom line with Nimble Acuity’s expert support.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you a retail owner looking to optimize accounting functions? We help you reduce costs and make faster, smarter decisions with accurate, timely financials.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our retail accounting process covers every key parameter—expenses, income, assets, and liabilities—so you get clearer profitability, stronger controls, and accelerated workflows through automation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With dependable, around-the-clock support and scalable engagement models, we make outsourcing smooth and effective for growing retail businesses.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Retail Accounting Solutions
            </h3>
            <p className="text-gray-700 mb-6">
              Comprehensive, end-to-end services tailored to the realities of multi-location, omni-channel retail.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Bookkeeping Services</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Record year-round transactions and maintain ledgers for sales, purchases, and expenses.</li>
                  <li>Prepare financial statements, including balance sheet and profit &amp; loss.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Point of Sale (POS) Accounting</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Reconcile POS transactions and cash register entries.</li>
                  <li>Provide IT coordination for electronic terminals.</li>
                  <li>Track pricing and purchase trends for margin insights.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Inventory Management</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Optimize inventory strategy and supply chain data management.</li>
                  <li>Support logistics, planning, and demand forecasting.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Sales Tax Compliance</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Gather and validate tax data, populate returns, and file on time.</li>
                  <li>Prevent peak-season bottlenecks with streamlined workflows.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Financial Reporting</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Translate raw data into clear, decision-ready reports and dashboards.</li>
                  <li>Provide KPI tracking for sales, margins, and cash conversion.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Cash Flow Management</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Forecast cash movements and identify cost-reduction opportunities.</li>
                  <li>Run vendor credit checks to minimize default risks.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Additional Services</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Accounts Payable</li>
                  <li>Accounts Receivable</li>
                  <li>Retail Accounting Software Solutions</li>
                  <li>Retail Financial Management</li>
                  <li>Audit Support Services</li>
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
              <li><strong>Compliance &amp; Data Security:</strong> Up-to-date with professional standards; stringent controls keep your data safe.</li>
              <li><strong>Cost-Effective:</strong> Flexible, tailored pricing aligned to your retail footprint and volumes.</li>
              <li><strong>Premium Quality:</strong> ISO 9001:2015 practices for consistent, high-quality outputs.</li>
              <li><strong>Modern Infrastructure &amp; Tools:</strong> World-class systems and current accounting tech for reliability.</li>
              <li><strong>Retail Expertise:</strong> Deep experience across categories and formats with quick turnaround times.</li>
              <li><strong>Scalable Growth:</strong> Services that expand seamlessly as your business grows.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Power Your Retail Growth with Better Numbers
            </h3>
            <p className="text-gray-700 mb-6">
              From POS reconciliation to inventory and tax, we deliver accurate, on-time retail accounting so you can focus on sales and customer experience.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Partner with Nimble Acuity to gain clarity, control, and confidence in your finances.</span> Contact us to discuss your retail accounting needs.
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

export default RetailAccountingServices;
