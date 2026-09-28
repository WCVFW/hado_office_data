import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const CPAAccountingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Professional CPA Accounting Services to Boost Efficiency
            </h2>
            <p className="text-lg text-gray-600">
              Struggling to find qualified CPAs? Talent shortages can impact growth and operational efficiency.
              Our expert CPA accounting services help streamline your firm's operations and support business goals.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              With over two decades of experience serving US firms, our certified accountants provide end-to-end solutions—from accounts payable and receivable to taxation and financial planning.
              We also specialize in fraud investigations and business consulting to ensure you meet all client needs.
            </p>
          </div>

          {/* Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Comprehensive CPA Accounting Solutions
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>CPA Tax Services:</strong> Accurate federal, state, and local tax preparation and filing.
              </li>
              <li>
                <strong>Audit Services:</strong> Objective evaluation of financial position with GAAP-compliant audits.
              </li>
              <li>
                <strong>Management Services:</strong> Budgeting, strategic planning, risk management, and investment guidance.
              </li>
              <li>
                <strong>Fraud Investigation Services:</strong> Forensic accounting and financial record reconstruction.
              </li>
              <li>
                <strong>Bankruptcy & Insolvency Services:</strong> Integrated solutions for critical business situations.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Us for CPA Accounting Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Expert Team:</strong> Certified professionals with deep understanding of your firm's needs.</li>
              <li><strong>Latest Technology:</strong> Cutting-edge accounting tools for smooth, efficient services.</li>
              <li><strong>Proven Processes:</strong> Six-sigma and industry best practices for high-quality delivery.</li>
              <li><strong>Operational Transparency:</strong> Clear processes with no hidden costs.</li>
              <li><strong>Scalability:</strong> Easily adapt to resource needs during seasonal peaks.</li>
              <li><strong>24/7 Availability:</strong> Round-the-clock support across multiple time zones.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Gain a Competitive Edge with Our CPA Accounting Services
            </h3>
            <p className="text-gray-700 mb-6">
              Overcome talent shortages and enhance operational efficiency with our experienced team and proven processes.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to optimize your accounting operations?</span> Contact us now to discuss your CPA accounting needs.
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

export default CPAAccountingServices;
