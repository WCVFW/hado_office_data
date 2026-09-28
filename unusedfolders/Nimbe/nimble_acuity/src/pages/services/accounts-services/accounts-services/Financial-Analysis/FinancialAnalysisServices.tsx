import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const FinancialAnalysisServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Financial Analysis Services for Actionable Insights
            </h2>
            <p className="text-lg text-gray-600">
              Struggling to extract actionable insights from your financial data? Our expert financial analysis services help you plan, monitor, and optimize your business strategy.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Our qualified financial analysts and chartered accountants provide in-depth analysis of your operations, including accounting, auditing, and taxation. We integrate your financial data to build robust risk management and fraud protection strategies, helping you identify challenges, forecast growth, and make data-driven decisions.
            </p>
          </div>

          {/* Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Solutions to Drive Your Business Forward
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Regulatory Compliance Services:</strong> Define policies, conduct testing, and mitigate compliance risks effectively.</li>
              <li><strong>Due Diligence Services:</strong> Analyze material facts with financial, legal, and tax due diligence using advanced tools.</li>
              <li><strong>Financial Statement Audit Services:</strong> Ensure adherence to financial reporting frameworks and international accounting standards.</li>
              <li><strong>Business Forecasting & Budgeting:</strong> Analyze finances to project future profits and make informed, data-driven decisions.</li>
              <li><strong>Investment & Portfolio Analysis:</strong> Track assets, optimize portfolios, and prevent potential losses.</li>
              <li><strong>Treasury Management & Enterprise Performance:</strong> Monitor business performance and safeguard investments with comprehensive diagnostics.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Us for Financial Analysis?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>IFRS Compliant:</strong> Our services follow international accounting standards for world-class solutions.</li>
              <li><strong>Absolute Data Security:</strong> Stringent policies and secure servers ensure protection from data breaches.</li>
              <li><strong>Comprehensive Financial Support:</strong> Full portfolio of accounting, bookkeeping, and tax preparation services.</li>
              <li><strong>Easy Scalability:</strong> Flexible solutions to handle fluctuating volumes of financial data.</li>
              <li><strong>Competitive Pricing:</strong> Transparent and flexible pricing with no hidden costs.</li>
            </ul>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Our team includes chartered accountants, statisticians, and MBAs using advanced techniques like Ratio Analysis, Break-even Analysis, and Cost/Benefit Analysis to forecast your company's financial health.
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Accelerate Your Success with Actionable Insights
            </h3>
            <p className="text-gray-700 mb-6">
              Make informed decisions, mitigate risks, and unlock growth potential with our financial analysis expertise.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to transform your financial strategy?</span> Contact us today to learn more about our services.
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

export default FinancialAnalysisServices;
