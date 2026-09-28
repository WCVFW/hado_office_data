import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const AccountsPayableServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Nimble Accounts Payable
            </h2>
            <p className="text-lg text-gray-600">
              Transform your payment operations with intelligent automation and expert oversight. We handle everything from document handling to final disbursement, ensuring your payment processes are fast, accurate, and secure.
            </p>
          </div>

          {/* Why Partner with Us */}
          <div className="max-w-5xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Us?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Boost Efficiency:</strong> Streamlined, automated processes eliminate manual work and errors, so you can focus on core business activities.</li>
              <li><strong>Enhance Control:</strong> Gain real-time visibility and detailed reports on all your payments and financial liabilities, reducing fraud risk.</li>
              <li><strong>Cut Costs:</strong> Leverage advanced technology and skilled professionals without high in-house expenses.</li>
              <li><strong>Strengthen Vendor Relationships:</strong> Timely, accurate payments help you build trust and improve vendor relationships.</li>
              <li><strong>Ensure Compliance:</strong> Processes follow industry best practices, including Sarbanes-Oxley compliance.</li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Core Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Invoice Processing:</strong> Manage the entire lifecycle of invoices, from receipt and data capture to secure processing and archiving.</li>
              <li><strong>Exception Management:</strong> Identify and resolve payment discrepancies proactively for a smooth approval process.</li>
              <li><strong>Duplicate Payment Analysis:</strong> Advanced audits and controls prevent duplicate payments, saving money and supporting recovery.</li>
              <li><strong>Disbursement Services:</strong> Handle all payment methods, including checks and electronic payments, ensuring timely, secure disbursements.</li>
            </ul>
          </div>

          {/* Expertise / Experience */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              See Our Expertise in Action
            </h3>
            <p className="text-gray-700 mb-6">
              Whether you need full outsourcing or specific task support, Nimble Accounts Payable offers flexible solutions. With over <strong>6 years of experience</strong>, we help businesses of all sizes optimize their financial operations.
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Optimize Your Accounts Payable Today

            </h3>
            <p className="text-gray-700 mb-6">
              Discover how our expert services can streamline your payment processes, reduce errors, and enhance vendor relationships.
            </p>
            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
              Get a Free Quote
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AccountsPayableServices;
