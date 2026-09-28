import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const SpacTransactionServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              SPAC Transaction Services
            </h2>
            <p className="text-lg text-gray-600">
              Invest in private equity transactions, including leveraged buyouts, with the guidance of our certified CPA and accounting experts.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you seeking capital in volatile markets or looking to reduce transaction fees to go public quickly? If your management team isn’t ready to operate as a public company, outsourcing SPAC transaction services is the solution. Nimble Acuity handles all accounting and reporting processes over the typical 19-month SPAC lifecycle.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our expert teams streamline SPAC transactions, improve capital yield, and ensure timely financial statement filing and disclosure. Think of us as an extension of your team, providing world-class SPAC services with a commitment to quality.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              SPAC Transaction Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Tax Structuring:</strong> Comprehensive legal and equity restructuring support, ensuring proper tax treatment and growth planning.</li>
              <li><strong>Public Company Readiness:</strong> Complete preparation for SPAC merger and listing, including due diligence, SEC engagement, and prospectus drafting.</li>
              <li><strong>PCAOB Audits:</strong> Audit interim and annual financial statements to meet PCAOB standards and resolve older audit complexities.</li>
              <li><strong>SEC Reporting Preparedness:</strong> Ensure target company is ready for SEC reporting, including understanding relief measures.</li>
              <li><strong>Financial Statement Preparation:</strong> Prepare accurate and compliant statements for SEC reporting requirements.</li>
              <li><strong>8-K Filing Support:</strong> Assist with timely filing of 8-K forms after SPAC closing for companies lacking in-house expertise.</li>
              <li><strong>Management Discussion & Analysis (MD&A):</strong> Prepare investor-ready disclosures summarizing operational and financial performance.</li>
            </ul>
          </div>

          {/* Our Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our SPAC Transaction Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Preparation:</strong> Understand client-specific needs and establish clear project goals.</li>
              <li><strong>Planning:</strong> Devise a tailored SPAC transaction solution within budget.</li>
              <li><strong>SPAC Transaction:</strong> Execute accounting and advisory services according to schedule.</li>
              <li><strong>Reporting:</strong> Deliver a detailed project report providing a comprehensive overview of all activities.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Services:</strong> Budget-friendly SPAC transaction solutions.</li>
              <li><strong>Top-notch Infrastructure:</strong> World-class infrastructure to manage SPAC transactions remotely.</li>
              <li><strong>Data Integrity:</strong> Secure handling of your financial data on protected cloud networks.</li>
              <li><strong>High-Quality Services:</strong> Stringent quality checks ensure reliable and accurate services.</li>
              <li><strong>Scalable Services:</strong> Flexible solutions to match evolving business needs.</li>
              <li><strong>Strict on Deadlines:</strong> Timely delivery with industry-leading turnaround times.</li>
              <li><strong>24/7 Support:</strong> Multilingual agents available via email, phone, and webchat for immediate assistance.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Navigate SPAC Transactions with Expert Guidance
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity provides customized SPAC transaction services for clients of all sizes. With over 6 years of experience, we deliver high-quality solutions tailored to your specific requirements, helping you achieve successful SPAC transactions efficiently and cost-effectively.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to partner with a trusted financial expert?</span>
              Contact us today for reliable SPAC transaction services and expert accounting support throughout your SPAC lifecycle.
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

export default SpacTransactionServices;