import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const BusinessForecastingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Business Forecasting Services
            </h2>
            <p className="text-lg text-gray-600">
              Stay ahead in a competitive market with our expert <strong>business forecasting services</strong>. Make informed decisions, manage cash flow, and secure funding with solutions starting at <strong>$12/hour</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Our global team of experts is available around the clock to handle fluctuating workloads and provide tailored forecasting solutions that fit your business needs.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Business Forecasting Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Preliminary Analysis:</strong> Examine existing data and predict market reactions to new products or services.</li>
              <li><strong>Cash Flow Forecasting:</strong> Estimate incoming and outgoing cash flows to identify funding needs and maintain liquidity.</li>
              <li><strong>Data Analysis:</strong> Process raw data into actionable insights for predicting future outcomes.</li>
              <li><strong>Choosing the Right Forecasting Model:</strong> Select the most suitable forecasting model based on available business data.</li>
              <li><strong>Qualitative Forecasting:</strong> Use market research and Delphi methods when historical data is unavailable.</li>
              <li><strong>Quantitative Forecasting:</strong> Apply tools like DataQlick and exponential moving average methods to predict product sales.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>IFRS-Compliant Services:</strong> Adherence to ISO 9001:2015 and IFRS accounting standards.</li>
              <li><strong>Secure Services:</strong> Rigorous data security to safeguard privacy at all stages.</li>
              <li><strong>Competitive Pricing:</strong> Affordable solutions starting at $12-$15/hour.</li>
              <li><strong>Cost Benefits:</strong> Offshoring reduces infrastructure, taxes, and overhead costs.</li>
              <li><strong>Fast and Scalable Services:</strong> Leverage global teams for quick turnarounds and scalable solutions.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Equity Research Support:</strong> Helped a portfolio management firm implement policies yielding strong returns during downturns.</li>
              <li><strong>Financial and Accounting Support:</strong> Assisted a Loan Production Office in managing seasonal workloads and reducing costs.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Trust Our Expertise
            </h3>
            <p className="text-gray-700 mb-6">
              With over 6 years of experience, we deliver precise business forecasting solutions that help over 18,000 clients make data-driven decisions and improve revenue.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Looking to enhance your forecasting capabilities?</span> Contact us today to learn more.
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

export default BusinessForecastingServices;
