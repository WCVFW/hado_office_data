import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const VirtualTaxPreparationServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Seamless & Professional Virtual Tax Preparation Services
            </h2>
            <p className="text-lg text-gray-600">
              Outsource your tax preparation and eliminate the stress of tax season.
              Our seasoned tax specialists provide reliable, professional virtual tax
              preparation services—helping you minimize errors, stay compliant, and
              optimize your tax outcomes.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              We support businesses of all sizes, CPAs, and CPA firms—including
              Fortune 1000 organizations across North America, Western Europe,
              Australia, and the Middle East. With decades of experience in both
              individual and commercial tax preparation, we deliver quick, accurate,
              and compliant solutions tailored to your needs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our team meticulously reviews financial statements and categorizes
              line items to ensure precise, on-time filings—resulting in higher refunds
              and lower tax obligations.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Comprehensive Virtual Tax Solutions
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Tax & Regulatory Services:</strong> Develop and implement
                efficient tax strategies for optimal outcomes.
              </li>
              <li>
                <strong>Federal Tax Services:</strong> Navigate complex federal tax
                laws with expert regulatory guidance.
              </li>
              <li>
                <strong>VAT Return Services:</strong> Accurate preparation and filing
                of VAT returns for compliance and savings.
              </li>
              <li>
                <strong>Sales Tax Return Services:</strong> Compliant sales tax
                records handled with precision.
              </li>
              <li>
                <strong>Business Tax Services:</strong> Strategies to ensure
                consistency in taxes, earnings, and cash flow.
              </li>
              <li>
                <strong>Remote & Online Tax Preparation:</strong> Reliable, precise,
                and accessible tax compliance services online.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Us for Virtual Tax Preparation?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">

              <li>
                <strong>Data Security:</strong> Your financial information is kept
                fully private and protected.
              </li>
              <li>
                <strong>Rapid Turnaround:</strong> Proven ability to deliver all tax
                services on schedule.
              </li>
              <li>
                <strong>Robust Infrastructure:</strong> World-class facilities and
                tools support reliable service delivery.
              </li>
              <li>
                <strong>Cost-Effective:</strong> Affordable solutions that make
                high-quality tax services accessible to all.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource to Trusted Virtual Tax Experts
            </h3>
            <p className="text-gray-700 mb-6">
              As a top provider of virtual tax preparation, we guide you through
              today’s evolving tax environment with unbiased, professional support.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to simplify your tax season?</span>{" "}
              Contact us today to start a partnership that delivers peace of mind
              and measurable financial benefits.
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

export default VirtualTaxPreparationServices;
