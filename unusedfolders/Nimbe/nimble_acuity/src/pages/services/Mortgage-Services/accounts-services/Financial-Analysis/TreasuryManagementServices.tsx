import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const TreasuryManagementServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Nimble Acuity Treasury Management Services
            </h2>
            <p className="text-lg text-gray-600">
              Optimize your cash flow, manage risk, and improve financial health with our comprehensive treasury management services, starting at just <strong>$12/hour</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Establishing and maintaining an in-house treasury center is costly and time-consuming. Outsourcing treasury functions to our experienced team provides a flexible, cost-effective solution without compromising quality.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our highly qualified professionals understand your organization's goals and deliver tailored solutions to meet your specific treasury needs.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Treasury Management Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Cash and Liquidity Management:</strong> Monitor cash flow, manage accounts, and ensure timely payments to maintain solvency and liquidity.</li>
              <li><strong>Treasury Risk Management:</strong> Identify, monitor, and manage liquidity, market, credit, and operational risks to ensure predictable business performance.</li>
              <li><strong>Treasury Financial Management:</strong> Review cash accounts and bank fees, optimize disbursement and receipt processes, and handle communications with banks and rating agencies.</li>
              <li><strong>Treasury Centralization:</strong> Improve efficiency by centralizing functions such as operations, accounting, and cash management while identifying economic and tax benefits.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing:</strong> Cost-effective solutions delivering high ROI.</li>
              <li><strong>Data Security:</strong> Stringent policies and processes ensure your information is safe.</li>
              <li><strong>Advanced Technology:</strong> Cutting-edge tools and technologies for superior service delivery.</li>
              <li><strong>Structured Process:</strong> Streamlined procedures ensure consistency, quality, and reliability.</li>
              <li><strong>High-Quality Service:</strong> ISO-certified provider with multi-level quality checks.</li>
              <li><strong>Experienced Team:</strong> Over 6 years of global experience delivering a wide range of services.</li>
              <li><strong>Quick Turnaround:</strong> Timely service delivery to meet critical business timelines.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Accounts Receivable:</strong> Helped small business owners cut costs with efficient accounts receivable and claims management.</li>
              <li><strong>Finance and Accounting Support:</strong> Processed paperwork for a Bank Loan Production Office, assessed loan eligibility, and generated required documentation.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Stay on Top of Your Treasury Needs
            </h3>
            <p className="text-gray-700 mb-6">
              Our world-class treasury management services ensure efficiency and effectiveness, helping you optimize financial performance across your organization.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Looking for reliable and professional treasury management services?</span> Contact us today to discuss your needs.
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

export default TreasuryManagementServices;
