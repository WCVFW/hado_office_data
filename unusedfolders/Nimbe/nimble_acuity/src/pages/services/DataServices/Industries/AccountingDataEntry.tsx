import React from "react";
import DSmainmenu from "../DSmainmenu";


const AccountingDataEntry: React.FC = () => {
  return (
    <div>
      {/* Main Menu */}
      <DSmainmenu />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-20 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Accounting Data Entry Services
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          Efficient, accurate, and cost-effective accounting data entry solutions with Nimble Auity.
        </p>
      </section>

      {/* Services Introduction */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="bg-gradient-to-r from-blue-200 to-teal-200 text-gray-800 py-3 px-4 rounded-md text-2xl font-bold mb-4 inline-block">
          Accounting Data Entry Services
        </h2>
        <p className="text-gray-700 mb-6 text-xl">
          Each organization, big or small, deals with numerous finance and account statements. Entering financial data daily is time-consuming and tedious. Nimble Auity’s expert accounting data entry services reduce operational costs and ensure fast, accurate results so your team can focus on core accounting tasks.
        </p>
      </section>

      {/* Accounting Data Entry Solutions */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="bg-gradient-to-r from-blue-200 to-teal-200 text-gray-800 py-3 px-4 rounded-md text-2xl font-bold mb-4 inline-block">
          Accounting Data Entry Solutions We Offer
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 text-xl">
          <li>Invoicing</li>
          <li>Auditing Data Entry</li>
          <li>Bookkeeping Data Entry</li>
          <li>Daily General Ledger Entry</li>
          <li>Financial Data Entry</li>
          <li>Manual Journal Entry</li>
          <li>Financial Status Reports Generation</li>
          <li>Accounts Receivable and Accounts Payable Data Entry</li>
          <li>Preparation of Bank Reconciliation Statements</li>
        </ul>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 py-12 px-6 md:px-20 text-center rounded-lg mb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div>
            <h3 className="text-3xl font-bold text-blue-600">40%</h3>
            <p className="text-gray-700">Cost Reduction</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">8-24 Hrs</h3>
            <p className="text-gray-700">Faster Turnaround</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">500+</h3>
            <p className="text-gray-700">Satisfied Clients</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">350+</h3>
            <p className="text-gray-700">Skilled Data Experts</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">99%</h3>
            <p className="text-gray-700">Accuracy</p>
          </div>
        </div>
      </section>

      {/* Why Choose Nimble Auity */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="bg-gradient-to-r from-blue-200 to-teal-200 text-gray-800 py-3 px-4 rounded-md text-2xl font-bold mb-4 inline-block">
          Why Choose Nimble Auity?
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 text-xl">
          <li><strong>Enormous Cost Savings:</strong> Save up to 60% on operating costs with flexible, cost-effective pricing.</li>
          <li><strong>Data Entry Quality:</strong> Rigorous QA processes ensure an average 98% accuracy for all your accounting data.</li>
          <li><strong>Quick Turnaround Time:</strong> Timely services delivered well within your schedule.</li>
          <li><strong>Strict Data Security:</strong> Confidentiality agreements and security audits prevent breaches.</li>
          <li><strong>Format of Your Choice:</strong> Data delivered in your preferred format for seamless integration.</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-12 px-6 md:px-20 text-center rounded-lg mt-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Partner with Nimble Auity Today!
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Get reliable, accurate, and timely accounting data entry services. Let our experts handle the work so you can focus on growing your business.
        </p>
        <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-md hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default AccountingDataEntry;
