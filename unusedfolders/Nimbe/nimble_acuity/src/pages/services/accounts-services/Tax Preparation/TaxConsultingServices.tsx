import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const TaxConsultingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Nimble Tax Consulting Services
            </h2>
            <p className="text-lg text-gray-600">
              Navigating complex tax laws doesn&apos;t have to be overwhelming.
              Our nimble approach provides the strategic insight and expert guidance you need
              to minimize liabilities, ensure compliance, and stay focused on your business goals.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Effective tax planning is essential for profitability and compliance.
              Nimble Acuity helps you implement efficient tax structures, identify savings opportunities,
              and streamline operations—so you can reduce risks and focus on growth.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Tax Consulting Solutions
            </h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Business Tax Consulting:</strong> End-to-end support for compliance,
                planning, and audit representation.
              </li>
              <li>
                <strong>Sales Tax Consulting:</strong> Accurate collection, filing, and reporting
                to ensure regulatory compliance.
              </li>
              <li>
                <strong>Federal Tax Services:</strong> Strategic guidance on federal legislation
                to help you make informed, profitable decisions.
              </li>
              <li>
                <strong>VAT & Sales Tax Returns:</strong> Accurate preparation and filing of VAT
                and sales tax returns for complete compliance.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Expert Resources:</strong> A team of highly qualified professionals capable of handling diverse tax requirements.</li>
              <li><strong>Cost-Effective:</strong> Flexible pricing with affordable hourly or flat-rate options.</li>
              <li><strong>Security & Confidentiality:</strong> ISO-certified, with strict NDAs to safeguard your data.</li>
              <li><strong>Scalable & Efficient:</strong> Fast turnaround times and services that adapt to your business needs.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Turn Tax Complexity Into a Strategic Advantage
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with Nimble Acuity to transform tax compliance and planning into a
              powerful growth strategy for your business.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Smart, efficient, and compliant tax solutions are within reach.</span>
              Contact us today for a free quote.
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

export default TaxConsultingServices;
