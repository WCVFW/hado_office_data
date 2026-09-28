import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";


const FinancialInvestigationsServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Financial Investigations Services
            </h2>
            <p className="text-lg text-gray-600">
              Outsource financial investigations to Nimble Acuity to effectively examine allegations of bribery, corruption, fraud, and money laundering.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Enhance your company’s ability to detect and prevent financial wrongdoing. Our expert team traces the money trail, ensures regulatory compliance, and delivers actionable insights to safeguard your organization.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With over 6 years of experience, Nimble Acuity provides the most robust, comprehensive, and cost-effective financial forensics and fraud investigation services. Our forensic investigators have extensive backgrounds in regulatory agencies, accounting firms, and investigative practices.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Financial Investigations Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Fraud Prevention and Detection:</strong> Enhance corporate capabilities to prevent and detect fraud, corruption, and money laundering through expert investigative support.</li>
              <li><strong>Litigation Support:</strong> Provide law firms and clients with asset tracing, recovery services, data analytics, forensic accounting, and regulatory investigation assistance.</li>
              <li><strong>Money Laundering Investigations:</strong> Conduct independent investigations for financial institutions, regulators, and law enforcement to identify financial irregularities and ensure compliance.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Services:</strong> Reduce costs while receiving detailed, actionable investigations that help recover losses from corruption or fraud.</li>
              <li><strong>Data Security:</strong> Maintain strict confidentiality with secure handling of financial data and NDA agreements signed by our forensic investigators.</li>
              <li><strong>Quick Turnaround Times:</strong> Trusted for delivering comprehensive investigations on time without delays.</li>
              <li><strong>High-Quality Services:</strong> Experienced financial investigators provide reliable, thorough, and precise investigative services.</li>
              <li><strong>Robust Process:</strong> Proven workflows and advanced forensic methodologies ensure superior results and rapid completion.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Safeguard Your Organization with Expert Financial Investigations
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity offers comprehensive financial investigations tailored to your organization’s needs. Our expert team ensures regulatory compliance, mitigates financial risk, and provides cost-effective solutions delivered efficiently.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to protect your business from financial wrongdoing?</span>
              Contact us today to outsource your financial investigations and gain a trusted partner in safeguarding your organization.
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

export default FinancialInvestigationsServices;