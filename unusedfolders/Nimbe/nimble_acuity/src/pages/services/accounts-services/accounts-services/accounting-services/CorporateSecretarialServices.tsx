import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const CorporateSecretarialServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Corporate Secretarial Services
            </h2>
            <p className="text-lg text-gray-600">
              Improve your company's compliance and governance with Nimble Acuity’s corporate secretarial services. We provide accurate documentation, strategic board assistance, and advanced solutions to streamline processes.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16">
            <p className="text-gray-700 leading-relaxed mb-6">
              Organizations face challenges maintaining corporate governance while navigating complex regulatory systems. Exhaustive documentation and timely statutory filings can overwhelm internal capacities. Nimble Acuity ensures your business stays compliant and efficient with professional secretarial support.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our services include facilitating board meetings, maintaining company records, and providing dedicated corporate solutions with advanced technologies for increased data security.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Customized Corporate Secretarial Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Company Creation Documentation Assistance:</strong> Prepare accurate articles of incorporation, accelerate registration, and manage shareholder agreements.
              </li>
              <li>
                <strong>Registered Office Services:</strong> Ensure legal compliance, handle statutory mail, and maintain official communications.
              </li>
              <li>
                <strong>Annual Compliance Filings:</strong> Anticipate deadlines, file statutory returns on time, and reduce the risk of fines.
              </li>
              <li>
                <strong>Board Meeting Management:</strong> Prepare accurate resolutions, ensure governance compliance, and develop complete agendas and materials.
              </li>
              <li>
                <strong>Corporate Governance Advisory:</strong> Provide insights on compliance and risk, align strategies with international practices, and improve governance structures.
              </li>
              <li>
                <strong>Shareholder Services:</strong> Maintain share registers, manage shareholder meetings, and ensure clear investor communications.
              </li>
              <li>
                <strong>Document Custody and Management:</strong> Comply with data protection laws, provide electronic archiving, and ensure secure backup and recovery.
              </li>
              <li>
                <strong>Statutory Record Maintenance:</strong> Maintain statutory books and registers accurately and proactively control record-keeping.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Expertise and Specialization:</strong> Experienced professionals addressing governance, compliance, and regulatory needs aligned with industry standards.</li>
              <li><strong>Global Compliance Knowledge:</strong> Tailored solutions for varied jurisdictions reducing cross-border risks.</li>
              <li><strong>Technology-Driven Solutions:</strong> Advanced tools for document management, statutory filings, and board communications.</li>
              <li><strong>Proactive Risk Management:</strong> Identify and mitigate compliance risks to prevent fines and protect reputation.</li>
              <li><strong>Customized Advisory Services:</strong> Strategic advice aligned with your growth strategy while ensuring regulatory compliance.</li>
              <li><strong>Integrated Service Approach:</strong> End-to-end corporate secretarial support from statutory compliance to board meeting assistance.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Enhance Your Corporate Governance Today
            </h3>
            <p className="text-gray-700 mb-6">
              Improve compliance, minimize risks, and simplify board management with Nimble Acuity’s professional corporate secretarial services.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Contact us now to get started!</span>
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

export default CorporateSecretarialServices;
