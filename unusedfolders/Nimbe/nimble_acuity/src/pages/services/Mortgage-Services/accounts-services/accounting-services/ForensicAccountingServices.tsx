import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const ForensicAccountingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Forensic Accounting Services
            </h2>
            <p className="text-lg text-gray-600">
              Outsource forensic accounting services to Nimble Acuity and get access to exceptional services provided by seasoned forensic accountants.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you worried about accounting fraud, and is it distracting you from your core business operations? Are you looking for expert forensic accounting services to safeguard your assets and reputation? Do you want to identify culprits and take action with minimal disruption to your business? If regulatory scrutiny, financial reporting, or anti-corruption inquiries are concerns, our forensic accounting services can provide significant benefits.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity is a leading forensic accounting service provider with a team of expert forensic accountants and investigators. Our professionals have extensive backgrounds in accounting firms, regulatory agencies, and investigative practices. We stay at the forefront of new developments and have vast experience in resolving high-stakes matters involving accounting irregularities, corruption, and compliance issues.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Forensic Accounting Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Compliance Services:</strong> Review and enhance procedures, test controls, assess risk, and take effective action against critical exposures. Designed to deter fraud, prevent compliance violations, and minimize risks.
              </li>
              <li>
                <strong>Corporate Investigation Services:</strong> Respond quickly to allegations of impropriety such as accounting fraud, minimizing financial or reputational damage. We assess serious allegations involving employees, management, or third parties.
              </li>
              <li>
                <strong>Due Diligence Services:</strong> For mergers, acquisitions, or joint ventures, we gather essential intelligence to effectively assess potential relationships.
              </li>
              <li>
                <strong>Fraud Prevention and Detection:</strong> Strengthen your ability to prevent and detect fraud, bribery, corruption, and money laundering while staying aligned with compliance regulations.
              </li>
              <li>
                <strong>Litigation Support:</strong> Comprehensive support for law firms, including forensic accounting, asset tracking and recovery, data analytics, and regulatory investigation assistance.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Forensic Accounting?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Services:</strong> Cost-effective solutions backed by experienced professionals, providing the intelligence you need when you need it.</li>
              <li><strong>Data Security:</strong> Your financial and accounting data is handled with the strictest confidentiality.</li>
              <li><strong>Quick Turnaround Times:</strong> We deliver forensic accounting services faster than most providers in the industry.</li>
              <li><strong>High-Quality Services:</strong> Highly competent forensic accountants offering reliable and effective outcomes.</li>
              <li><strong>Robust Process:</strong> Proven workflows and the latest forensic accounting tools ensure efficiency and superior results.</li>
            </ul>
          </div>

          {/* CTA (added to match the style) */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Secure Your Business with Expert Forensic Accounting
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity provides the analytical and investigative solutions you need to uncover fraud and mitigate risks.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Partner with us to safeguard your assets and reputation.</span>
              Contact us today to discuss your forensic accounting needs.
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

export default ForensicAccountingServices;