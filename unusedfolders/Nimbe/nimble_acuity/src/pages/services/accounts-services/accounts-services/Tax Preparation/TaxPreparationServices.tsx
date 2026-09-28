import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const TaxPreparationServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Nimble Tax Preparation Services
            </h2>
            <p className="text-lg text-gray-600">
              Tax season doesn&apos;t have to be a race against time. Our nimble approach delivers the speed, precision, and expertise you need to stay compliant, maximize returns, and eliminate stress.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              For CPAs, CFOs, tax preparers, and businesses, filing taxes can feel overwhelming. Nimble Acuity transforms that challenge into an opportunity by simplifying compliance, improving accuracy, and saving you valuable time.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With our expert support, you can reduce administrative burdens, avoid costly errors, and focus on strategic priorities while we handle the complexities of tax law and filing.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Tax Preparation Solutions
            </h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>For CPA Firms:</strong> Outsource tax prep tasks so your firm can focus on high-value advisory and client engagement.
              </li>
              <li>
                <strong>Business Tax:</strong> Simplify complex corporate filings, ensure compliance, and uncover every possible savings opportunity.
              </li>
              <li>
                <strong>Industry-Specific Expertise:</strong> Tailored tax support for sectors like Real Estate, Healthcare, Technology, and Manufacturing.
              </li>
              <li>
                <strong>Virtual Tax Services:</strong> Access secure, cloud-based tax preparation services from anywhere, anytime.
              </li>
            </ul>
          </div>

          {/* Our Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Tax Preparation Process
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Data Collection:</strong> Securely gather and organize your financial records.</li>
              <li><strong>Preparation & Review:</strong> Our experts prepare your return, double-checking for compliance and benefits.</li>
              <li><strong>Client Briefing:</strong> We review the return with you, answering questions and providing clarity.</li>
              <li><strong>Submission & Support:</strong> File your tax return and receive ongoing assistance for audits or follow-ups.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Boost Efficiency:</strong> Round-the-clock support and proven processes ensure timely results.</li>
              <li><strong>Stay Compliant:</strong> We keep pace with changing tax regulations to minimize risk and penalties.</li>
              <li><strong>Data Security:</strong> GDPR, certified, with secure servers and NDAs.</li>
              <li><strong>Save Time & Money:</strong> Reduce administrative costs and free up your team for strategic work.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Gain Peace of Mind This Tax Season
            </h3>
            <p className="text-gray-700 mb-6">
              Let Nimble Acuity handle your tax preparation so you can focus on running and growing your business.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Stress-free, compliant, and efficient tax solutions are just one step away.</span>
              Contact us today for a free consultation.
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

export default TaxPreparationServices;
