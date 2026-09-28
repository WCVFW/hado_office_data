import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const SmallBusinessBookkeeping: React.FC = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4 text-center">
              Bookkeeping Services for Small Businesses
            </h2>
            <p className="text-lg text-gray-600 text-center">
              In the dynamic world of small business, maintaining accurate financial records is crucial. At Nimble Acuity, we provide professional bookkeeping services tailored specifically for small businesses, ensuring expert, efficient, and error-free financial management.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mx-auto mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              From recording daily transactions, reconciling bank accounts, producing financial statements, to managing accounts payable and receivable, we handle all tasks with meticulous attention to detail. Our services help you focus on core business operations while we manage your finances. Our certified professionals uphold the highest standards of integrity and confidentiality, providing reliable, timely, and accurate financial information.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Small Business Bookkeeping Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Accounts Payable Management:</strong> Automate invoice management for timely payments and improved credit standing.</li>
              <li><strong>Accounts Receivable Management:</strong> Streamline billing and ensure timely collection of outstanding payments.</li>
              <li><strong>Expense Tracking and Reporting:</strong> Monitor and analyze expenditures to identify inefficiencies and optimize costs.</li>
              <li><strong>Payroll Processing:</strong> Handle wage calculations, deductions, and employee benefits with precision.</li>
              <li><strong>Financial Statement Preparation:</strong> Compile income statements, balance sheets, and cash flow reports for visibility.</li>
              <li><strong>Tax Preparation Support:</strong> Ensure accurate and optimized tax filings, maintaining compliance.</li>
              <li><strong>Cash Flow Analysis:</strong> Examine inflows and outflows to manage expenses and optimize revenue.</li>
              <li><strong>Budgeting and Forecasting:</strong> Create detailed financial maps for goal setting and resource allocation.</li>
              <li><strong>Customized Reporting:</strong> Generate visually engaging, real-time reports for timely decisions.</li>
              <li><strong>Inventory Management:</strong> Integrate data with real-time updates and automated replenishment for efficient inventory control.</li>
              <li><strong>Audit Preparation Support:</strong> Provide consultations, documentation management, and pre-audit evaluations for a stress-free audit experience.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Your Small Business?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Accuracy:</strong> Meticulous attention to detail guarantees precise financial records.</li>
              <li><strong>Time Savings:</strong> Reclaim valuable time to focus on strategic activities and business growth.</li>
              <li><strong>Scalability:</strong> Flexible services adapt to your changing business needs.</li>
              <li><strong>Reduced Compliance Risks:</strong> Stay compliant with tax regulations and financial standards.</li>
              <li><strong>Access to Experts:</strong> Seasoned accountants and financial experts provide guidance and insights.</li>
              <li><strong>Consistency and Reliability:</strong> Dependable, on-time financial support for peace of mind.</li>
              <li><strong>Improved Financial Planning:</strong> Gain data and insights to make informed financial decisions.</li>
              <li><strong>Audit Preparedness:</strong> Maintain organized and compliant records for audit readiness.</li>
              <li><strong>Objective Financial Advice:</strong> Receive impartial financial guidance for better business decisions.</li>
              <li><strong>Data Security:</strong> Strict standards ensure protection of sensitive financial data.</li>
              <li><strong>Flexible Pricing:</strong> Cost-effective services tailored to your budget and needs.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Empower Your Small Business with Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Empower your small business with Nimble Acuity's professional bookkeeping services. Gain accurate, timely, and audit-ready financial records while focusing on growing your business.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to take control of your small business finances?</span>
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

export default SmallBusinessBookkeeping;
