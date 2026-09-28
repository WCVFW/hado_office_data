import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const PortfolioAnalysisServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Streamlined Portfolio Analysis for Maximum Returns
            </h2>
            <p className="text-lg text-gray-600">
              Ensure your investments work as hard as you do. Our portfolio analysis services provide deep insights to help you make smart, profitable decisions, starting at just <strong>$12/hour</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Regular portfolio analysis is essential for understanding asset strengths, weaknesses, and opportunities. We handle the complex calculations, providing accurate, actionable insights that empower you to improve profitability and boost returns.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Partnering with our financial experts ensures you have the intelligence to make informed decisions and enhance your portfolio’s performance.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Portfolio Analysis Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Statistical Analysis:</strong> Advanced techniques to evaluate risk, historical returns, and expected performance.</li>
              <li><strong>Diversification Risks:</strong> Optimize asset allocation to mitigate risks and improve overall portfolio performance.</li>
              <li><strong>Equity Factor Analysis:</strong> Identify factors driving the best risk-adjusted returns and target portfolio risks effectively.</li>
              <li><strong>Money Manager/Mutual Fund Analysis:</strong> Review strategies, growth value, and returns by region, sector, and asset class.</li>
              <li><strong>Client Education:</strong> Empowering clients with insights to improve performance, minimize risks, and achieve financial goals.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Streamlined Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Analysis:</strong> Align services with your specific investment goals.</li>
              <li><strong>Secure File Transfer:</strong> Share files securely via encrypted channels for analysis.</li>
              <li><strong>In-Depth Analysis:</strong> Experts analyze instruments, review records, and provide future forecasts.</li>
              <li><strong>Detailed Reporting:</strong> Receive clear, actionable insights through comprehensive reports.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner With Us?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Services:</strong> Pay only for the services you need with competitive rates.</li>
              <li><strong>ISO Certified Quality:</strong> ISO 9001:2013 standards ensure top-quality service.</li>
              <li><strong>Complete Data Security:</strong> NDA agreements and secure protocols protect your information.</li>
              <li><strong>Fast Turnaround Times:</strong> Timely delivery for informed investment decisions.</li>
              <li><strong>Dedicated Point of Contact:</strong> Single manager for seamless communication and updates.</li>
              <li><strong>24/7 Support:</strong> Round-the-clock assistance for any questions or concerns.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Empower Your Investments
            </h3>
            <p className="text-gray-700 mb-6">
              Gain clear insights into your portfolio’s strengths and weaknesses to make the best possible investment decisions.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to enhance your portfolio's performance?</span> Contact us today for a free consultation.
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

export default PortfolioAnalysisServices;
