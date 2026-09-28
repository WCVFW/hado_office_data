import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const CFOServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              CFO Services
            </h2>
            <p className="text-lg text-gray-600">
              Empower your business with strategic financial leadership. Our CFO services provide advanced financial modeling, decision-making support, effective cash flow control, and precise performance metrics to help you navigate a complex financial landscape.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16">
            <p className="text-gray-700 leading-relaxed mb-6">
              Managing financial reporting and regulatory compliance while focusing on business growth is a challenge. Our tailored CFO services are designed to address these challenges head-on. Our experienced CFOs use advanced modeling tools for budgeting and forecasting, monitor cash flow, and perform detailed cost analysis to optimize expenses.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We also leverage advanced software for <span className="font-medium">Key Performance Indicator (KPI) Analysis</span> to track performance and highlight areas for improvement. With our strategic planning, risk management, investment strategies, and M&A support, you can expect financial stability, sustainable growth, and compliance with corporate governance and data security standards.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive CFO Services
            </h3>
            <p className="text-gray-700 mb-6">
              Our services are crafted to align with your business goals, offering strategic insights that drive growth and profitability.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Fractional CFO Services:</strong> Strategic planning, board reporting, cash flow management, fundraising, and decision-making support.</li>
              <li><strong>Virtual CFO Services:</strong> Remote financial expertise using cloud-based solutions to enhance efficiency and financial operations.</li>
              <li><strong>Part-Time CFO Services:</strong> Consistent financial guidance for startups and growing businesses without a full-time commitment.</li>
              <li><strong>CFO Advisory Services:</strong> Expert advice for complex financial decisions, profitability analysis, and capital raising.</li>
              <li><strong>Corporate Finance Advisory:</strong> Support for mergers, acquisitions, restructuring, due diligence, and private equity.</li>
              <li><strong>Interim CFO Services:</strong> Swift financial leadership during transitions or sudden leadership gaps.</li>
              <li><strong>CFO Services for Small Business:</strong> Tailored financial strategies, cash flow management, budgeting, and profitability analysis.</li>
              <li><strong>CFO Services for Startups:</strong> Support with financing, capital raising, projections, burn rate analysis, and investor relations.</li>
              <li><strong>CFO Accounting Services:</strong> Outsourced accounting, financial reporting, compliance, tax strategy, and audit management.</li>
            </ul>
          </div>

          {/* Integrated Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Integrated Process
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li><strong>Introductory Consultation:</strong> Understanding your goals and challenges to establish a strong partnership.</li>
              <li><strong>Financial Analysis & Strategic Blueprint:</strong> Comprehensive analysis with a tailored roadmap for long-term success.</li>
              <li><strong>Execution, Review, and Recommendations:</strong> Proactive management, reviews, and strategic recommendations to optimize performance.</li>
              <li><strong>Transparent Reporting & Continuous Engagement:</strong> Clear communication and regular updates to keep you informed and involved.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Strategic Insight:</strong> Beyond financial management, we drive strategic decision-making.</li>
              <li><strong>Transparent Communication:</strong> Open, clear updates at every stage of the process.</li>
              <li><strong>Flexible and Scalable Solutions:</strong> Services tailored to startups and enterprises with evolving needs.</li>
              <li><strong>Collaborative Partnership:</strong> A team-driven approach ensuring your success through close collaboration.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Build a Resilient Financial Future with Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              From fractional CFOs to corporate finance advisory, we deliver flexible financial solutions tailored to your needs.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Let’s shape your growth journey together.</span> Contact us today to explore how our CFO services can transform your business.
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

export default CFOServices;
