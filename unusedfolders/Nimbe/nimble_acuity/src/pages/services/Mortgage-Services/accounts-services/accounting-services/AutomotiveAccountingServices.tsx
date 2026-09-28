import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const AutomotiveAccountingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Automotive Accounting Services
            </h2>
            <p className="text-lg text-gray-600">
              Are you looking for specialized accounting services to maximize your automotive business's profit margins and cut costs? Talk to us. We are experts in automotive accounting.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Is your business being held back by a lack of time and resources to manage your accounts? Are you seeking specialized accounting support to optimize cash flow and manage debt? Do you want to free up more time for your core business activities? Partnering with Nimble Acuity ensures your books remain compliant, accurate, and up to date.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity is a leading provider of automotive accounting services, offering a wide range of specialized solutions for the industry. With over 6 years of experience serving clients across the US, Europe, Australia, and the Middle East, we help businesses streamline their accounting and enhance financial efficiency.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Automotive Accounting Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Accounts Payable & Receivable</strong></li>
              <li><strong>General Accounting & Bookkeeping</strong></li>
              <li><strong>Reconciliation</strong></li>
              <li><strong>Reporting & Analysis</strong></li>
              <li><strong>Tax Preparation & Compliance</strong></li>
              <li><strong>Cash Management</strong></li>
              <li><strong>General Financial & Cost Accounting</strong></li>
              <li><strong>Managerial Accounting</strong></li>
              <li><strong>Internal Control & Fraud Prevention</strong></li>
              <li><strong>Pre-Audit & Audit Check</strong></li>
              <li><strong>Work Opportunity Tax Credit</strong></li>
              <li><strong>Parts & Payroll Costing</strong></li>
              <li><strong>Reporting & Oversight</strong></li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Services:</strong> Cost-effective accounting solutions delivered by seasoned consultants.</li>
              <li><strong>Data Security:</strong> All accounting data is handled with strict compliance to international security standards.</li>
              <li><strong>Quick Turnaround Times:</strong> Guaranteed delivery within agreed deadlines so you're never left waiting.</li>
              <li><strong>Superb Infrastructure:</strong> International-standard offices and modern facilities for consistent service excellence.</li>
              <li><strong>Customized Solutions:</strong> Tailored services designed to meet your exact business requirements.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Optimize Your Automotive Business with Expert Accounting
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has helped clients streamline accounting processes with professionalism and competitive pricing. We know what it takes to deliver results that drive success.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Let us work as your trusted financial partner.</span>
              Contact us today to outsource your automotive accounting needs.
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

export default AutomotiveAccountingServices;