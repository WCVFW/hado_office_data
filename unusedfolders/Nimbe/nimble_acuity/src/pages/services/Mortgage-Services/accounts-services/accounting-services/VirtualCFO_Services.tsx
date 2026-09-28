import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const VirtualCFO_Services = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Virtual CFO Services
            </h2>
            <p className="text-lg text-gray-600">
              Fuel profitability and gain greater financial control with our sophisticated risk analysis and strategic financial planning.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Improve your financial management with customized solutions for cash flow, financial planning, and comprehensive reporting. Our virtual CFO services provide detailed financial dashboards that deliver clear, actionable insights to accelerate your company’s financial well-being.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As a trusted virtual CFO firm, Nimble Acuity helps you identify and mitigate financial risks. We provide guidance on corporate restructuring, cost-benefit analysis, and financial planning so you can explore new opportunities with assurance.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Virtual CFO Solutions
            </h3>
            <p className="text-gray-700 mb-6">
              We provide virtual CFO support to manage your finances and offer personalized financial guidance to help you succeed. Our services include:
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Financial Planning and Analysis</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Conduct thorough variance and sensitivity analysis to improve capital allocation and optimization.</li>
                  <li>Provide real-time, data-driven financial insights for better decision-making.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Cash Flow Management & Budgeting</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Offer accurate cash flow forecasting and interactive liquidity management.</li>
                  <li>Implement zero-based budgeting and precision trend analysis for cost-effectiveness.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Risk Management and Strategic Planning</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Provide detailed credit and market risk evaluations with financial hedging techniques.</li>
                  <li>Develop strategic plans and metric-based market segmentation for long-term growth.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Financial Reporting & Compliance</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Deliver GAAP and IFRS-compliant automated reporting with key financial metrics and ratio analysis.</li>
                  <li>Recommend taxation approaches and compliance systems for navigating international markets.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Responsive Budgeting:</strong> We create responsive budgets based on market conditions, ensuring accurate financial planning for long-term growth.</li>
              <li><strong>Strategic Capital Deployment:</strong> Our financial analyses ensure your resources are invested in opportunities that provide maximum returns.</li>
              <li><strong>Detailed Financial Reporting:</strong> We use automated tools to provide accurate and detailed reports, enabling you to make informed decisions.</li>
              <li><strong>Industry-Specific Analysis:</strong> Our extensive industry experience allows us to provide highly tailored financial insights and guidance.</li>
              <li><strong>Scenario Planning:</strong> We develop financial forecasts based on potential future outcomes, helping you anticipate risks and identify opportunities.</li>
              <li><strong>International Overview:</strong> We help you develop international growth plans by analyzing financial operations and reporting across multiple jurisdictions.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity to Future-Proof Your Financial Strategy
            </h3>
            <p className="text-gray-700 mb-6">
              Leverage our online CFO services for expert financial modeling, dynamic cash flow management, and strategic forecasting. Our custom solutions help you stay ahead of your finances, whether you're a small business or a larger enterprise.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Contact us today to learn how our virtual CFO services can help you achieve your long-term success.</span>
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

export default VirtualCFO_Services;