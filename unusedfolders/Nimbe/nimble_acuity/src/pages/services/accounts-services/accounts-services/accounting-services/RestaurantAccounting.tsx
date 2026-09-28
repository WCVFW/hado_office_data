import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const RestaurantAccounting = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Restaurant Accounting Services
            </h2>
            <p className="text-lg text-gray-600">
              Streamline your accounting processes. Monitor cash flow. Grow your business.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              The restaurant industry is highly competitive. Owners must manage workers, deal with suppliers, and satisfy customers, all while keeping their accounting in order. If this is a challenge for you, Nimble Acuity can assist. We understand the unique demands of the restaurant accounting environment and the inner workings of the food and beverage sector.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We provide clients worldwide with streamlined restaurant accounting solutions. With our outsourced services, you can concentrate on your core strengths while we handle your accounting books, ensuring they are current and compliant with industry standards. This allows you to effectively manage cash flow, boost profit margins, and focus on expanding your company.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Restaurant Accounting Solutions
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We are an experienced and reliable provider of accounting services for restaurants. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Bookkeeping Services:</strong> Ensure records are accurate, current, and compliant with regulations.</li>
              <li><strong>Cost Analysis:</strong> Use visualization tools to track and manage spending effectively.</li>
              <li><strong>Financial Reporting:</strong> Monitor, assess, and report on expenses and revenue with in-depth insights.</li>
              <li><strong>Payroll Processing Services:</strong> Complete payroll tasks with accuracy and efficiency.</li>
              <li><strong>Budgeting and Forecasting:</strong> Track and optimize operating, capital, project, and cash flow budgets.</li>
              <li><strong>Sales Tax Compliance:</strong> Expedite collections, filing, and payments for restaurant sales tax.</li>
              <li><strong>Tax Planning and Preparation:</strong> Ensure compliance with laws and minimize tax liabilities.</li>
              <li><strong>Inventory Management Accounting:</strong> Simplify ordering, storing, usage, and sales of inventory.</li>
              <li><strong>Restaurant Accounting Consulting:</strong> Optimize and simplify restaurant accounting processes.</li>
              <li><strong>Restaurant Accounting Software:</strong> Support for leading software solutions, tailored to your needs.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why We Are the Preferred Restaurant Accounting Services Company
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Outsourcing to us is the right choice for many reasons, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Services:</strong> Cost-effective solutions that help maintain clean books.</li>
              =            <li><strong>Quick Turnaround Times:</strong> Always delivered within promised deadlines.</li>
              <li><strong>Accounts Receivable Services:</strong> Register and reconcile inflows while tracking metrics.</li>
              <li><strong>Accounts Payable Services:</strong> Ensure timely payments for better cash flow management.</li>
              <li><strong>Scalability:</strong> Flexible services that scale with your business growth.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Grow Your Restaurant Business with Expert Accounting
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has helped numerous clients save money and streamline operations. Our offerings cover the entire spectrum of restaurant accounting, helping you cut costs, simplify workflows, and grow your business with confidence.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to simplify your financial management?</span>
              Contact us today to discuss your restaurant accounting needs.
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

export default RestaurantAccounting;