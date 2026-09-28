import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const WealthManagement = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Wealth Management Services
            </h2>
            <p className="text-lg text-gray-600">
              Make sound financial decisions by partnering with **Nimble Acuity’s expert wealth managers**, who help you align strategies with your financial goals.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              In today’s dynamic business environment, financial planning and risk mitigation are more important than ever. Business owners are under constant pressure to allocate resources wisely and adapt to changing demands. This is where outsourcing wealth management delivers significant value — by standardizing operations, strategically allocating resources, reducing costs, and maximizing growth.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With extensive industry expertise, **Nimble Acuity** partners with clients to transform their financial strategy, ensure compliance, and optimize wealth allocation. Our trusted team combines technology, insight, and proven strategies to deliver results with quick turnaround and exceptional service.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Wealth Management Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Research & Analytics:</strong> In-depth financial research and analysis to ensure strategies are based on solid insights. Includes New Business Pitch Books, Fund Research, Portfolio Measurement, CRM Support, and Client Investment Research.</li>
              <li><strong>Investment Research:</strong> Market and portfolio analysis with risk assessments to guide informed, goal-driven investment decisions. Includes Market Analysis, Portfolio Performance Review, Risk Assessment, and Manager Identification.</li>
              <li><strong>Compliance Support:</strong> Comprehensive compliance checks to reduce risk and ensure adherence to trust account regulations. Includes Document Review, Regulatory Compliance, Audit & Litigation Risk Mitigation, and Technology-Compatible Compliance Docs.</li>
              <li><strong>Asset Management:</strong> Mitigate risk and grow asset value with tailored strategies and in-depth financial analysis. Includes Micro & Macro Research, Risk Reduction Strategies, Asset Appreciation Planning, and End-to-End Wealth Management.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Proven Expertise:</strong> Decades of experience in wealth and asset management across industries.</li>
              <li><strong>Customized Strategies:</strong> Tailored financial planning that aligns with your unique business goals.</li>
              <li><strong>Risk Mitigation:</strong> Proactive strategies to reduce financial risks and ensure compliance.</li>
              <li><strong>Technology-Driven:</strong> Modern solutions that integrate analytics, compliance, and automation.</li>
              <li><strong>End-to-End Support:</strong> From research to reporting, we manage every aspect of wealth management.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Secure Your Financial Future
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity provides the expert guidance you need to navigate the complexities of wealth management. Our tailored strategies and comprehensive support help you make informed decisions, mitigate risks, and achieve your long-term financial goals.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to take control of your wealth?</span>
              Contact us today to discuss your financial goals.
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

export default WealthManagement;