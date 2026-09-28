import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const FinancialBudgetingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Financial Budgeting Services
            </h2>
            <p className="text-lg text-gray-600">
              Gain access to a custom-made budget that fits your personal situation with our financial budgeting services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking for a plan to tackle mounting debt, or a strategy to use debt to improve your credit score? Do you want to understand your spending habits and find the right savings amount—one that&apos;s large enough to make a difference but small enough to be maintained? If so, our financial budgeting services can help.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity is a leading provider of financial budgeting services. We create budgets that positively impact your cash flow. Acting as your financial advisor, we provide money-saving strategies and help you set clear, short- and long-term financial goals for a more secure and fulfilling life.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Financial Budgeting Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Create a Savings Plan:</strong> With 6+ years of experience, we help individuals and businesses handle savings efficiently—whether for major purchases, new gadgets, or long-awaited vacations.
              </li>
              <li>
                <strong>Schedule for Extra Expenses:</strong> We guide you in setting aside funds for both planned and unexpected expenses, such as office equipment or last-minute social events.
              </li>
              <li>
                <strong>Provide Alerts for Late Fees:</strong> Our experts help you track bills and due dates, preventing unnecessary late fees while improving debt management.
              </li>
              <li>
                <strong>Map Financial Transactions:</strong> We create a detailed map of your income and expenses, helping you understand spending habits and prepare for unexpected events like job loss or medical emergencies.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing:</strong> Cost-effective services designed to maximize value.</li>
              <li><strong>High-Quality Services:</strong> ISO-certified processes ensure reliable and robust financial budgeting solutions.</li>
              <li><strong>Superb Infrastructure:</strong> World-class offices and tools to deliver exceptional services.</li>
              <li><strong>Experienced Team:</strong> 6+ years of experience supporting individuals and firms in financial planning.</li>
              <li><strong>Short Turnaround:</strong> We respect deadlines and deliver results on time, every time.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Take Control of Your Finances with Expert Budgeting Services
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity helps clients worldwide maximize their finances by providing accurate, high-quality budgeting solutions.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Get in touch with us today for a professional and affordable financial budgeting service.</span>
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

export default FinancialBudgetingServices;