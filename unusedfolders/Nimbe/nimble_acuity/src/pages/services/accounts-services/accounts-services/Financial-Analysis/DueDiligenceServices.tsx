import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const DueDiligenceServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Strategic Due Diligence Services to Mitigate Risk
            </h2>
            <p className="text-lg text-gray-600">
              Reduce transaction risk with our expert, error-free due diligence services starting at just <strong>$12/hour</strong>. Our experienced team ensures every analysis is precise and reliable.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Navigating business transactions requires thorough analysis of material facts. Outsourcing due diligence to skilled experts ensures error-free, reliable results. Our team leverages advanced tools and technologies to provide customized solutions that meet all your requirements with ease.
            </p>
          </div>

          {/* Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Comprehensive Due Diligence Solutions
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Financial Due Diligence:</strong> Analyze past and present financial statements and agreements to assess business risks accurately.</li>
              <li><strong>Legal Due Diligence:</strong> Error-free legal analysis by experienced experts using the latest tools for fast turnaround.</li>
              <li><strong>Tax Due Diligence:</strong> Manage tax risks during mergers, acquisitions, or divestitures with efficient, compliant strategies.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Us for Due Diligence Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing:</strong> Flexible, cost-effective options tailored to your needs and budget.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified, ensuring your data is safe and secure.</li>
              <li><strong>Superior Quality:</strong> ISO-certified services guarantee accuracy and reliability.</li>
              <li><strong>Experienced Team:</strong> Skilled specialists ready to handle all your due diligence requirements.</li>
              <li><strong>Dedicated Manager:</strong> Single point of contact for smooth, hassle-free communication.</li>
              <li><strong>Scalable Services:</strong> Quickly scale resources to meet project demands.</li>
              <li><strong>Quick Turnaround:</strong> Multiple delivery locations enable fast, high-quality service.</li>
              <li><strong>24/7 Support:</strong> Round-the-clock assistance from sales, marketing, and support teams.</li>
            </ul>
            <p className="text-gray-700 mt-4 leading-relaxed">
              We are pioneers in providing top-quality due diligence and financial analysis services to clients worldwide.
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Get Reliable and Cost-Effective Due Diligence
            </h3>
            <p className="text-gray-700 mb-6">
              Ensure error-free, efficient, and scalable due diligence for your business transactions.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Looking for a trusted partner?</span> Contact us today to learn more about our due diligence services.
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

export default DueDiligenceServices;
