import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const InvestmentAnalysisServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Comprehensive Investment Analysis Services
            </h2>
            <p className="text-lg text-gray-600">
              Enhance research coverage and streamline investment decisions with our expert services for hedge funds, private equity, and investment banks. Services start at just <strong>$12/hour</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Our team provides real-time, accurate investment data to help you track opportunities across sectors and geographies, allowing your in-house analysts to focus on high-impact work.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Investment Analysis Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Equity Analysis:</strong> Build responsive portfolios with financial modeling, sector research, pre-earnings reports, and market newsletters.</li>
              <li><strong>Credit and Fixed Income Analysis:</strong> Support key investment decisions with credit models, cash flow models, and database management across geographies.</li>
              <li><strong>Macroeconomic Analysis:</strong> Forecast economic conditions and market trends with insights on interest rates, FX, commodities, and global indicators.</li>
              <li><strong>Multi-asset Fund Analysis:</strong> Manage mutual funds and model portfolios across asset classes, assessing performance and risk.</li>
              <li><strong>DCF and WACC Analysis:</strong> Determine true enterprise and fair market value for informed investment decisions.</li>
              <li><strong>Custom Investment Analysis:</strong> Company earnings forecasts, IPO research, M&A analysis, valuation support, and pitch deck preparation.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Independent Data:</strong> Custom models and expertise to rationalize market expectations and identify opportunities.</li>
              <li><strong>Unbiased Opinion:</strong> Objective insights into competition dynamics and sector trends.</li>
              <li><strong>Efficient Information Delivery:</strong> Dedicated relationship manager ensures timely data delivery and seamless communication.</li>
              <li><strong>Differentiated Outlook:</strong> Tailored market intelligence aligned with your specific business requirements.</li>
            </ul>
          </div>

          {/* Key Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Benefits of Our Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Monitor and Strengthen Market Position:</strong> Secure historical data and create forecasts for a strong company position.</li>
              <li><strong>Generate New Ideas:</strong> Identify tech disruptions, startups, and create company primers for strategic planning.</li>
              <li><strong>Exceptional Launch Coverage:</strong> Track portfolios, perform SWOT analyses, and create projections.</li>
              <li><strong>Research Emerging Technologies:</strong> Stay ahead of new industry trends with targeted research.</li>
              <li><strong>Engage Industry Experts:</strong> Access second opinions and network with sector specialists.</li>
              <li><strong>Custom Research Methodologies:</strong> In-depth analysis considering multiple variables for up-to-date insights.</li>
            </ul>
          </div>

          {/* Why We Stand Out */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why We Stand Out
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost Savings:</strong> Efficient methodologies save 40–50% on research costs.</li>
              <li><strong>High-End Toolsets:</strong> Proprietary tools for investment valuation using the latest technologies.</li>
              <li><strong>Experienced Team:</strong> Analysts with prestigious degrees from top global universities.</li>
              <li><strong>Real-Time Data:</strong> Up-to-date analytics providing a critical edge in decision-making.</li>
              <li><strong>Exceptional Data Security:</strong> Secure IP, NDAs, and advanced cybersecurity protocols.</li>
              <li><strong>On-Time Reporting:</strong> Flexible reporting schedules: daily, weekly, or quarterly.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Elevate Your Investment Strategy
            </h3>
            <p className="text-gray-700 mb-6">
              Transform your research processes into actionable insights with our investment analysis services. Get the recommendations, reports, and intelligence you need to make better investment decisions.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Looking to enhance your investment research coverage?</span> Contact us now to learn more.
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

export default InvestmentAnalysisServices;
