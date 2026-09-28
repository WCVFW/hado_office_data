import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const VirtualAccountingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Virtual Accounting Services
            </h2>
            <p className="text-lg text-gray-600">
              Organize your finances and ace tax season with our virtual accounting services. Get on-demand expert assistance to achieve accounting excellence.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16">
            <p className="text-gray-700 leading-relaxed mb-6">
              Disparate financial transactions, lack of skilled staff, tax obligations, and prevailing uncertainties can reduce accounting efficiency. Our state-of-the-art virtual accounting services eliminate daily accounting challenges and keep your business future-ready.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our certified virtual accountants provide turnkey solutions, from full accounting management to boutique on-demand support. Personalized dashboards across cloud-based platforms give you 24/7 access to your accounts, saving time and enhancing accuracy.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Take the first step toward hassle-free accounting to accelerate your business success. <span className="font-medium">Claim your free consultation now!</span>
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Virtual Accounting Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Bookkeeping Services:</strong> Streamlined transaction management for clear financial visibility.</li>
              <li><strong>Payroll Services:</strong> Seamless payroll management with compliance and timely disbursements.</li>
              <li><strong>Accounts Receivable Services:</strong> Manage invoicing, collections, and reporting to optimize cash inflow.</li>
              <li><strong>Accounts Payable Services:</strong> Ensure accurate, timely payments and strategic cash management.</li>
              <li><strong>Financial Statements Services:</strong> Comprehensive, accurate reports reflecting your fiscal status.</li>
              <li><strong>Inventory Management Services:</strong> Optimize inventory levels with advanced tracking and reporting tools.</li>
              <li><strong>Virtual CFO Services:</strong> High-level financial strategy, forecasting, and management for sustainable growth.</li>
              <li><strong>Tax Return Preparation and Planning:</strong> Proactive planning for savings and strategic advantages.</li>
              <li><strong>QuickBooks Accounting Services:</strong> Streamlined accounting using QuickBooks for efficient financial management.</li>
            </ul>
          </div>

          {/* Our Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Process
            </h3>
            <ul className="list-decimal list-inside space-y-3 text-gray-700">
              <li><strong>Initial Consultation:</strong> Discuss requirements, understand your business, and identify areas of value.</li>
              <li><strong>Account Setup and Secure Data Transfer:</strong> Create virtual accounts with secure protocols for sensitive data.</li>
              <li><strong>Regular Client Communication:</strong> Provide updates and address queries regarding financial data.</li>
              <li><strong>Accounting and Financial Review:</strong> Analyze financial data and provide actionable insights for improvement.</li>
              <li><strong>Ongoing Virtual Accounting Assistance:</strong> Continuous support ensuring smooth financial operations.</li>
            </ul>
          </div>

          {/* Tailored Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Tailored Solutions for Every Industry
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Automotive Accounting:</strong> Real-time insights to optimize operations and manage production costs.</li>
              <li><strong>Healthcare:</strong> Streamlined billing, improved revenue cycles, and regulatory compliance.</li>
              <li><strong>Hospitality:</strong> Enhanced budgeting, financial planning, and cash flow management.</li>
              <li><strong>Manufacturing:</strong> Monitor production costs, optimize supply chain finances, and make informed investments.</li>
              <li><strong>Restaurant/Retail Accounting:</strong> Manage daily sales, track inventory, and optimize cost control.</li>
              <li><strong>Real Estate:</strong> Streamline property management accounting and enhance financial visibility.</li>
              <li><strong>Legal Services:</strong> Ensure accurate client billing, manage trust accounting, and improve reporting.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Maximizing Financial Efficiency: The Virtual Accounting Advantage
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity consolidates your accounting needs into a seamless platform, transforming complex financial data into actionable reports. Our virtual accountants provide insights that facilitate strategic decision-making and eliminate stress from your accounting operations.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Contact us today for effective virtual accounting solutions!</span>
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

export default VirtualAccountingServices;
