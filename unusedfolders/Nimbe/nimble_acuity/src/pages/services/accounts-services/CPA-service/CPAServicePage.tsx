import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const CPAServicePage = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Professional CPA Services for a Competitive Edge
            </h2>
            <p className="text-lg text-gray-600">
              Managing complex cross-border finances can be daunting. Our CPA support services
              streamline your workflow, shorten turnaround times, and provide strategic insights.
              Partner with certified financial experts to navigate international tax laws, stay
              compliant, and gain actionable, data-driven strategies for growth.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Ready to optimize your tax strategies and boost profitability? Our team ensures
              your financial operations are efficient, accurate, and fully compliant with
              global and local accounting standards.
            </p>
          </div>

          {/* Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Comprehensive CPA Solutions
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>CPA Tax Services:</strong> Strategic tax planning and compliance
                using TurboTax, H&R Block, and more.
              </li>
              <li>
                <strong>CPA Accounting Services:</strong> GAAP & IFRS-compliant
                accounting with QuickBooks, Sage, budgeting, and forecasting.
              </li>
              <li>
                <strong>Small Business CPA Services:</strong> Tailored tax & cash flow
                management with Xero and Wave for sustainable growth.
              </li>
              <li>
                <strong>Virtual CPA Services:</strong> Cloud-based, real-time solutions
                via NetSuite and FreshBooks with complete data security.
              </li>
              <li>
                <strong>CPA Advisory Services:</strong> Valuation, risk management, and
                performance improvement strategies.
              </li>
              <li>
                <strong>Startup CPA Services:</strong> Guidance from business plan
                development to tax structuring for scalable growth.
              </li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Streamlined Process
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li><strong>Consultation:</strong> Understand your business needs and objectives.</li>
              <li><strong>Analysis:</strong> Examine financials to identify risks and opportunities.</li>
              <li><strong>Planning:</strong> Build a strategy to optimize resources and reduce risk.</li>
              <li><strong>Execution:</strong> Implement tailored financial solutions aligned with goals.</li>
              <li><strong>Review:</strong> Track performance and recommend improvements.</li>
              <li><strong>Reporting:</strong> Deliver transparent reports and ongoing updates.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Us?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Regulatory Expertise:</strong> Always compliant with global and local laws.</li>
              <li><strong>Strategic Insights:</strong> Transform complex data into actionable intelligence.</li>
              <li><strong>Cost-Optimized:</strong> High-quality services without straining resources.</li>
              <li><strong>Scalable & Flexible:</strong> Services adapt to startups, SMEs, and enterprises.</li>
              <li><strong>Proactive Risk Management:</strong> Identify and mitigate potential fiscal threats.</li>
              <li><strong>Data Security:</strong> State-of-the-art protocols safeguard sensitive information.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Transform Your Financial Operations
            </h3>
            <p className="text-gray-700 mb-6">
              We handle financial complexities so you can focus on scaling your business.
              Leverage global expertise and AI-driven technologies for real-time insights,
              automation, and compliance.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to optimize your financial operations?</span>{" "}
              Contact us today to discuss your CPA support needs.
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

export default CPAServicePage;
