import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const OrderManagementServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Order Management Services
            </h2>
            <p className="text-lg text-gray-600">
              Efficiently process and manage your orders and streamline your supply
              chain with Nimble Acuity&apos;s order management services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              A key factor in a business&apos;s success is how quickly and efficiently
              customer orders are taken, managed, processed, and delivered. Maintaining
              a loyal client base is just as important as acquiring new customers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              However, with the growing need for speed and agility, this can be a significant challenge.
              Order management requires optimized processes and efficient systems that can be difficult to maintain in-house.
              Outsourcing to an expert partner is a smart solution.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity is a trusted order management service provider with extensive
              experience in supply chain management. We stay up-to-date with all industry
              developments to offer cutting-edge order management services that alleviate
              the burden on our clients.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Order Management Services
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity offers end-to-end order management services for companies
              struggling to keep up with increasing order volumes. We work with specialists
              in every area of the order management process.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Customer Service</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Taking orders via calls, live chats, email, and websites.</li>
                  <li>Customer query resolution and complaint management.</li>
                  <li>Quoting and service contract renewal.</li>
                  <li>Assisting with returns and refunds.</li>
                  <li>Collections and customer follow-up services.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Back-Office BPO Services</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Order data entry, verification, and validation.</li>
                  <li>Customer information and contract validation.</li>
                  <li>Customer database management.</li>
                  <li>Order status checks and cancellation/refund management.</li>
                  <li>Transaction processing and management.</li>
                  <li>Billing and invoice services.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Finance and Accounting Outsourcing</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Invoice data entry, processing, and dispatch.</li>
                  <li>Credit checks and billing record creation.</li>
                  <li>Accounts receivable processing.</li>
                  <li>Cost savings tracking and reporting.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our 3-Step Order Management Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Analysis:</strong> Understanding your business needs and allocating the right resources.</li>
              <li><strong>Initiation:</strong> Developing and executing the project strategy with clear scope definition.</li>
              <li><strong>Reporting:</strong> Maintaining transparency with regular updates and reports.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Order Management?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost-Efficiency:</strong> Save on hiring full-time employees with competitively priced services.</li>
              <li><strong>Time-Saving Solutions:</strong> Free up resources to focus on core business operations.</li>
              <li><strong>Scalability:</strong> Efficiently handle increasing order volumes with ease.</li>
              <li><strong>Advanced Technology:</strong> Use of the best systems and tools for superior order management.</li>
              <li><strong>Transparency:</strong> Regular reports and updates to keep you informed.</li>
              <li><strong>24/7 Assistance:</strong> Round-the-clock customer support for all queries.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Streamline Your Business with Expert Order Management
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity delivers comprehensive order management solutions that enhance efficiency, reduce costs, and improve customer satisfaction.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Partner with us to simplify and strengthen your order management process.</span>
              Contact us today to discuss your needs.
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

export default OrderManagementServices;
