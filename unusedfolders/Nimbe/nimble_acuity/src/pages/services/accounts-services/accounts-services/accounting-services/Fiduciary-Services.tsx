import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const FiduciaryServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Nimble Acuity: Fiduciary Services
            </h2>
            <p className="text-lg text-gray-600">
              We provide experienced fiduciaries to manage estates, implement restructuring strategies, and resolve insolvencies.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Do you need a strong vision and steady leadership to maximize the value of an insolvent business? Are you looking for help to manage an estate, resolve an insolvency, or implement a financial or operational restructuring strategy? Do you need to reorganize a debtor into a successful business?
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you're a stakeholder looking to sell a business or manage complex litigation, our trust and fiduciary services can provide significant benefits.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity is a leading fiduciary services provider with extensive experience in fiduciary management. We combine operational expertise with robust financial discipline to provide exceptional, cost-effective results, always striving to maximize the value of the estates we serve.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Fiduciary Services
            </h3>
            <p className="text-gray-700 mb-6">
              Our professional financial and legal advisors, along with chartered accountants, have a thorough understanding of fiduciary laws and exceptional accounting skills. We offer the following services:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Acting as a Chapter 11 Trustee:</strong> Our restructuring professionals act as Chapter 11 Trustees, providing operational expertise while fulfilling fiduciary responsibilities. We quickly identify areas for improvement to generate liquidity while assets are restructured.
              </li>
              <li>
                <strong>Court-Appointed Examiner/Receiver:</strong> We provide independent, objective perspectives as Court-Appointed Examiners or Receivers. Our team reviews restructuring issues from a practical business standpoint.
              </li>
              <li>
                <strong>Court-Appointed Responsible Officer:</strong> Our experts serve as Responsible Officers, offering insights to navigate the complexities of the restructuring process.
              </li>
              <li>
                <strong>Post-Confirmation Fiduciary:</strong> Our seasoned professionals provide independent leadership in Chapter 11 proceedings, serving as post-confirmation trustees, plan administrators, and liquidating trustees.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Services:</strong> Access the expertise of seasoned fiduciaries at a fraction of traditional firm costs.</li>
              <li><strong>Data Security:</strong> Your information remains secure under strict non-disclosure agreements.</li>
              <li><strong>Quick Turnaround Times:</strong> We pride ourselves on delivering timely and efficient fiduciary solutions.</li>
              <li><strong>Superb Infrastructure:</strong> Our professionals operate with world-class infrastructure and technology.</li>
              <li><strong>Customized Solutions:</strong> We collaborate with you to develop tailored roadmaps that add the most value to your estate.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Trusted Fiduciary Services for Every Challenge
            </h3>
            <p className="text-gray-700 mb-6">
              From insolvency management to estate administration and restructuring, Nimble Acuity delivers reliable fiduciary solutions tailored to your needs.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Let us guide you with steady leadership and proven expertise.</span> Contact us today to learn more about our fiduciary services.
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

export default FiduciaryServices;
