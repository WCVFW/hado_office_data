import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const VirtualBookkeeping: React.FC = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4 text-center">
              Virtual Bookkeeping Services for Your Business
            </h2>
            <p className="text-lg text-gray-600 text-center">
              Struggling to maintain accurate financial records? Leverage outsourced virtual bookkeeping services to update your books and generate precise financial reports.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mx-auto mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** offers scalable, remote bookkeeping solutions. Our expert bookkeepers reconcile accounts, categorize transactions, and provide personalized insights for tax season and financial clarity.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Virtual Bookkeeping Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Consolidating Financial Reports:</strong> Streamline and consolidate multiple financial reports to analyze data and forecast cash flow accurately.</li>
              <li><strong>Generating Balance Sheets:</strong> Create precise balance sheets to project cash flow and monitor your financial position remotely.</li>
              <li><strong>Online Tax Consultation:</strong> Plan, implement, and file taxes efficiently with flexible online tax consultation services.</li>
              <li><strong>Financial Reporting Services:</strong> Visualize your financial data with monthly budgets and expense reports for better decision-making.</li>
              <li><strong>Tracking Employee Expenses:</strong> Monitor reimbursements and employee expenses accurately while keeping records updated.</li>
              <li><strong>Automating Accounts Payable and Receivable:</strong> Customize workflows to automate AP/AR processes and integrate with your existing software.</li>
              <li><strong>Payroll Accounting:</strong> Manage salaries, bonuses, deductions, and tax administration efficiently.</li>
              <li><strong>Reconciliation Services:</strong> Resolve bank discrepancies and maintain accurate records with our remote reconciliation support.</li>
              <li><strong>Accounting Services:</strong> Analyze and interpret financial statements efficiently with our expert accounting solutions.</li>
              <li><strong>Bookkeeping Services:</strong> Track, organize, and maintain up-to-date books using advanced technology.</li>
              <li><strong>Accounts Receivable Services:</strong> Manage pending invoices and improve cash flow with timely collection strategies.</li>
              <li><strong>Accounts Payable Services:</strong> Automate and optimize payment workflows to ensure timely disbursements.</li>
              <li><strong>Tax Preparation Services:</strong> Prepare and update tax documents accurately to stay compliant and ready for filing.</li>
              <li><strong>Financial Analysis Services:</strong> Gain actionable insights by analyzing financial data to forecast profits and improve planning.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>IFRS Compliance:</strong> All services comply with International Financial Reporting Standards (IFRS) for consistent financial statements.</li>
              <li><strong>Financial Data Security:</strong> Encrypted servers, secure VPNs, and multi-step security processes ensure your data remains protected.</li>
              <li><strong>Easy Scalability:</strong> Our solutions scale to match your business workload, including seasonal peaks.</li>
              <li><strong>24/7 Support:</strong> Access round-the-clock support via multiple communication channels for all your bookkeeping needs.</li>
              <li><strong>Reasonable Pricing:</strong> Flexible, project-based pricing ensures predictable costs tailored to your requirements.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Streamline Your Finances with Virtual Bookkeeping
            </h3>
            <p className="text-gray-700 mb-6">
              Streamline your remote bookkeeping, gain accurate financial insights, and focus on growing your business with Nimble Acuity's expert virtual bookkeeping services.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to simplify your financial management?</span>
              Contact us today to discuss your bookkeeping needs and get started.
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

export default VirtualBookkeeping;
