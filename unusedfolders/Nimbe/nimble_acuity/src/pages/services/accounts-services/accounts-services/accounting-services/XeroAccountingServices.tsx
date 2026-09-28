import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const XeroAccountingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Xero Accounting Services
            </h2>
            <p className="text-lg text-gray-600">
              Manage all your financial needs—including accounting, financial operations, payroll, and taxes—by outsourcing Xero accounting services at a budget-friendly rate starting at <span className="font-medium">$12 per hour</span>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16">
            <p className="text-gray-700 leading-relaxed mb-6">
              Managing accounts can be time-consuming and diverts focus from core business activities. Xero accounting software simplifies financial management, but dealing with it can be complex. Most businesses outsource to professionals like Nimble Acuity.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Nimble Acuity provides skilled accountants and financial professionals experienced in Xero setup, bookkeeping, invoicing, report generation, and payment processing. Our infrastructure, 24/7 support, and customized pricing ensure high-quality Xero accounting services.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Xero Accounting Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Migration and Xero Setup:</strong> Setup or migrate your accounts to Xero for a robust, cloud-based platform.</li>
              <li><strong>Inventory Management:</strong> Track and manage inventory efficiently to support timely business decisions.</li>
              <li><strong>Depreciation Schedule:</strong> Maintain accurate schedules for fixed assets with automated Xero tools.</li>
              <li><strong>Bookkeeping:</strong> Manage sales, purchase ledgers, income, expenditure, and month-end reporting professionally.</li>
              <li><strong>Financial Reporting:</strong> Access timely financial reports at any point to analyze business performance.</li>
              <li><strong>Accounts Payable and Receivable:</strong> Efficiently manage all payables and receivables to boost profitability.</li>
              <li><strong>Sales Tax:</strong> Process taxes in real-time and keep your accounts up to date.</li>
              <li><strong>Vendor Payments:</strong> Track and process vendor payments accurately and on time.</li>
              <li><strong>Payroll Management:</strong> Handle payroll, salary disbursements, taxes, and deductions seamlessly using Xero.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Xero Accounting Process
            </h3>
            <ul className="list-decimal list-inside space-y-3 text-gray-700">
              <li><strong>Easy Migration:</strong> Automated migration of data from old systems to Xero accurately.</li>
              <li><strong>Xero Setup:</strong> Customized setup based on your business needs with shared access upon completion.</li>
              <li><strong>Project Initiation:</strong> Begin financial management activities with continuous data backup.</li>
              <li><strong>Quality Assurance:</strong> Multiple audits and quality checks ensure accuracy in financial data.</li>
              <li><strong>Regular Reporting:</strong> Auto-generated reports with on-demand access whenever needed.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Should You Outsource Xero Accounting Services to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost-efficient Services:</strong> Save up to 40% with flexible, affordable packages.</li>
              <li><strong>High Data Security:</strong> Secure, backed-up Xero cloud data with integrity assurance.</li>
              <li><strong>ISO Certified Service Provider:</strong> International standard quality delivered consistently.</li>
              <li><strong>Experienced Accounting Professionals:</strong> Skilled team with local and global accounting expertise.</li>
              <li><strong>High Scalability:</strong> Expandable accounting solutions to match business growth.</li>
              <li><strong>High-Quality Service:</strong> Stringent internal quality control ensures error-free output.</li>
              <li><strong>Customized Packages:</strong> Tailored packages for specific sub-verticals of your business.</li>
              <li><strong>Latest Tools and Technologies:</strong> Cutting-edge software for secure, effective accounting.</li>
              <li><strong>24/7 Customer Support:</strong> Round-the-clock assistance from multiple centers worldwide.</li>
              <li><strong>Short Turnaround Time:</strong> Timely delivery ensured through robust processes.</li>
              <li><strong>Single Point of Contact:</strong> Dedicated manager for seamless communication and service.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity provides real-time, cloud-based Xero accounting services, enabling you to focus on core business functions while we handle accurate bookkeeping, taxes, payroll, and reporting.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">If you are looking for customized, reliable, and flawless Xero accounting outsourcing services, contact us right now.</span>
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

export default XeroAccountingServices;
