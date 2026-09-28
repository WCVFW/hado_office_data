import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const TaxProcessingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Nimble Tax Processing Services
            </h2>
            <p className="text-lg text-gray-600">
              Stop letting manual tax processing drain your time and resources.
              Our nimble approach delivers the speed, accuracy, and expertise you need
              to handle complex filings—without the “busy season” burnout.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At Nimble Acuity, we combine advanced automation with expert tax professionals
              to streamline your tax workflow. From eliminating errors to adapting quickly
              to regulatory changes, we make the entire process seamless and efficient.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Tax Services
            </h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Federal Tax Returns:</strong> Full coverage for individuals, C Corporations,
                S Corporations, and non-profits.
              </li>
              <li>
                <strong>State Tax Returns:</strong> Accurate, compliant filings for all state-specific tax obligations.
              </li>
              <li>
                <strong>Tax Preparation:</strong> Quick, precise return preparation with an average turnaround of 12–24 hours.
              </li>
            </ul>
          </div>

          {/* Our Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Streamlined Process
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Secure Submission:</strong> Send us your scanned tax documents safely.</li>
              <li><strong>Accurate Data Entry:</strong> Our team enters all financial details into the right software.</li>
              <li><strong>Quality Check:</strong> Rigorous reviews ensure accuracy and compliance.</li>
              <li><strong>Client Review:</strong> You review the prepared tax return before filing.</li>
              <li><strong>Final Delivery:</strong> Receive a ready-to-file copy with full support if needed.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Technology-Driven:</strong> Seamless e-filing powered by Intuit ProSeries, QuickBooks, and automation tools.</li>
              <li><strong>Assured Compliance:</strong> Aligned with regulations like Sarbanes-Oxley for transparency and trust.</li>
              <li><strong>Expert Team:</strong> Over 6 years of proven tax and compliance experience.</li>
              <li><strong>Cost-Effective:</strong> Outsourcing reduces overhead and boosts profitability.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Achieve Efficiency and Growth with Nimble Tax Processing
            </h3>
            <p className="text-gray-700 mb-6">
              Let our experts manage your tax processing so you can focus on strategy, growth,
              and what matters most for your business.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Faster, smarter, and more reliable tax processing is just one step away.</span>
              Contact us today to get started.
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

export default TaxProcessingServices;
