import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const TaxRegulatoryServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Nimble Tax & Regulatory Services
            </h2>
            <p className="text-lg text-gray-600">
              Staying ahead of complex tax and regulatory changes is a challenge.
              Our nimble approach delivers the speed and expertise you need to ensure compliance,
              mitigate risk, and free up time to focus on growing your business.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Regulations and tax rules are constantly evolving, often creating stress and uncertainty for businesses.
              Nimble Acuity simplifies this complexity by providing reliable tax and regulatory support tailored to your needs.
              Whether domestic or international, our services help you stay compliant and confident.
            </p>
          </div>

          {/* Our Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Tax & Regulatory Solutions
            </h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Domestic & International Taxation:</strong> From direct and indirect taxes to complex cross-border scenarios like expatriate or double taxation, our experts provide complete coverage.
              </li>
              <li>
                <strong>Tax Review:</strong> Using advanced tools, we perform thorough tax reviews to ensure accuracy and optimize your records for efficiency.
              </li>
              <li>
                <strong>Regulatory Advocacy:</strong> We provide strategic guidance and representation to help you navigate complex regulations with clarity and confidence.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Expertise:</strong> Access certified tax and regulatory specialists at a fraction of in-house costs.</li>
              <li><strong>Seamless Scalability:</strong> Scale services up or down based on your business needs without disruption.</li>
              <li><strong>Unmatched Efficiency:</strong> With global presence and advanced infrastructure, we deliver fast turnarounds and 24/7 support.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Focus on Growth, Leave Compliance to Us
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity provides the expertise and reliability you need to manage tax and regulatory challenges with confidence.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Gain peace of mind and protect your business from risk.</span>
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

export default TaxRegulatoryServices;
