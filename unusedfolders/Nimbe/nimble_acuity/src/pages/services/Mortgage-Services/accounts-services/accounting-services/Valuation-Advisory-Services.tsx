import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const ValuationAdvisory = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Valuation Advisory Services
            </h2>
            <p className="text-lg text-gray-600">
              At **Nimble Acuity**, we provide holistic valuation advisory services by following globally accepted methodologies and best practices. Our team of finance, accounting, litigation, and tax experts delivers solutions with transparency and clarity—empowering you to manage risks, maximize value, and make confident business decisions.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Valuation Advisory Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Business Valuation Services:</strong> We evaluate capital sources, company development stages, and industry factors to provide accurate and reliable business valuations.</li>
              <li><strong>Derivatives & Share-Based Compensation:</strong> Valuations using Black-Scholes, Monte Carlo, and binomial lattice models for equity awards, derivatives, and share-based compensation.</li>
              <li><strong>Intellectual Property & Intangible Assets:</strong> Valuation for IP and intangible assets—covering insurance, tax, financial reporting, and impairment testing.</li>
              <li><strong>Tax Valuation:</strong> Legal and business valuations, cost segregation, estate & gift tax valuations, and purchase price allocations.</li>
              <li><strong>Business Combinations:</strong> Expert support for mergers & acquisitions through accurate purchase price allocations and valuation issue resolution.</li>
              <li><strong>Strategic Value Advisory:</strong> Identify opportunities, optimize growth strategies, and enhance company value for informed decision-making.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Flexible Pricing Options:</strong> Affordable, customizable pricing—you only pay for the services you need.</li>
              <li><strong>Information Security:</strong> Stringent measures to protect your data with complete confidentiality.</li>
              <li><strong>State-of-the-Art Infrastructure:</strong> Equipped with the latest systems and software for reliable valuations.</li>
              <li><strong>Operational Transparency:</strong> We maintain full compliance with industry norms and regulations.</li>
              <li><strong>Scalability:</strong> Easily scale services up or down without compromising on quality.</li>
              <li><strong>24/7 Availability:</strong> Round-the-clock customer support via phone, email, or messages.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Make Confident Decisions With Accurate Valuations
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity provides the expert valuation services you need to manage risks and maximize value. Our transparent and reliable solutions empower you to make informed decisions and drive business success.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to get started?</span>
              Contact us today to discuss your valuation needs and get started.
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

export default ValuationAdvisory;