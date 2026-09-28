import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const CashFlowForecasting = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Cash Flow Forecasting Services
            </h2>
            <p className="text-lg text-gray-600">
              Our certified cash flow analysts use specialized tools to predict your business's financial prospects and suggest ways to avoid bad decisions.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Wouldn't it benefit your business to have a clear outlook on your financial health and an early warning system for potential issues? By outsourcing cash flow forecasting to Nimble Acuity, you can stay ahead of financial crises. Our professionals handle the number crunching, giving you direct access to indicators that warn you about potential insolvencies and financial management challenges before they escalate.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As a leading cash flow forecasting service provider, Nimble Acuity has deep expertise in financial analysis software. We help you identify gaps in your financial health so you can make informed decisions to improve performance.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Cash Flow Forecasting Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              At Nimble Acuity, we provide a suite of cash flow forecasting services for businesses of all sizes, along with personalized advisory support to help you prepare for a changing financial landscape. Using proprietary analytics tools, we deliver reliable forecasting to help you navigate any situation.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Negotiation of Bank Overdrafts:</strong> Identify gaps in your current arrangements and provide support to secure necessary funding.</li>
              <li><strong>Securing Funds from Investors and Banks:</strong> Present financial projections to funding sources, proving business viability and closing borrowings.</li>
              <li><strong>Credit Control Support:</strong> Liaise with funding providers to justify your credit history and secure funding with ease.</li>
              <li><strong>Invoice Factoring:</strong> Convert outstanding invoices into immediate funding by selling invoices for faster cash access.</li>
              <li><strong>Financial Regulation:</strong> Build and monitor a clear business plan, track daily costs, and ensure tax compliance.</li>
            </ul>
          </div>

          {/* Our Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Cash Flow Forecasting Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Preparation:</strong> We capture your goals and understand your objectives.</li>
              <li><strong>Planning:</strong> We create a focused forecasting model based on your data.</li>
              <li><strong>Cash Flow Forecasting:</strong> Our experts provide detailed projections on the agreed schedule.</li>
              <li><strong>Reporting:</strong> A comprehensive report is prepared and presented with actionable insights.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Services:</strong> Budget-friendly quotes that deliver excellent value.</li>
              <li><strong>Top-notch Infrastructure:</strong> Robust infrastructure to manage your forecasting needs remotely.</li>
              <li><strong>Data Integrity:</strong> Strong focus on secure and accurate data handling.</li>
              <li><strong>High-Quality Services:</strong> Robust QA checks ensure accuracy and reliability of reports.</li>
              <li><strong>Scalable Services:</strong> Easily scale services to match your growing needs.</li>
              <li><strong>Strict on Deadlines:</strong> Committed to delivering results within promised timelines.</li>
              <li><strong>24/7 Support:</strong> Multilingual agents available via email, phone, and webchat.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Gain Financial Clarity with Expert Cash Flow Forecasting
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity helps you turn uncertainty into opportunity with accurate, actionable insights.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Stay financially prepared and mitigate risks.</span>
              Contact us today to discuss your cash flow forecasting needs.
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

export default CashFlowForecasting;