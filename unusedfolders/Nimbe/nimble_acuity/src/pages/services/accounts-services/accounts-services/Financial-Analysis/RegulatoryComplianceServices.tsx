import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const RegulatoryComplianceServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Streamlined Regulatory Compliance Services
            </h2>
            <p className="text-lg text-gray-600">
              Stay on top of compliance with our expert services, designed to identify and mitigate risks while ensuring your organization adheres to all regulations. Services start at just <strong>$30/hour</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Our experienced team helps you implement governance frameworks, monitor compliance risks, and provide forecasts to support successful business and investment decisions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From SMBs to large enterprises, we create tailored compliance strategies to lighten your regulatory burden and strengthen operational oversight.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Regulatory Compliance Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Defining Compliance Policy:</strong> Build a robust framework integrated seamlessly across your organization.</li>
              <li><strong>Structuring Compliance Across the Organization:</strong> Develop reporting matrices aligned with company hierarchy to ensure compliance at every level.</li>
              <li><strong>Consolidating Committees:</strong> Support board members and committees under unified governance for better accountability.</li>
              <li><strong>Compliance Strategy & Charters:</strong> Formulate charters defining risks and responsibilities for SMBs and larger firms.</li>
              <li><strong>Maintenance of Compliance Registers:</strong> Identify, document, and track all general and product-specific compliance obligations.</li>
              <li><strong>Compliance Testing:</strong> Conduct rigorous testing to detect gaps and implement countermeasures.</li>
              <li><strong>Team Training & Certification:</strong> Develop training programs and monitor certification prerequisites for staff adoption.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Regulatory Compliance Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Preparation:</strong> Assess readiness and prepare your organization for full compliance adoption.</li>
              <li><strong>Planning:</strong> Create frameworks to accelerate policy adoption across all levels.</li>
              <li><strong>Compliance Test:</strong> Verify adherence to regulations and identify areas needing improvement.</li>
              <li><strong>Reporting:</strong> Deliver comprehensive reports highlighting lapses and expert recommendations.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing:</strong> Flexible, cost-effective options tailored to your needs.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 ISMS certified, ensuring maximum security for your data.</li>
              <li><strong>Superior Quality:</strong> ISO-certified compliance services guaranteeing excellence at every step.</li>
              <li><strong>World-Class Infrastructure:</strong> Fully equipped to manage complex compliance requirements.</li>
              <li><strong>Experienced Team:</strong> Skilled professionals enforcing compliance and addressing gaps efficiently.</li>
              <li><strong>Dedicated Manager:</strong> Single point of contact to maintain diligent oversight.</li>
              <li><strong>Highly Scalable Services:</strong> Quickly scale resources and expertise to meet evolving needs.</li>
              <li><strong>Quick Turnaround:</strong> Handle time-sensitive requests with efficiency.</li>
              <li><strong>24/7 Support:</strong> Complete assistance via phone, email, and chat whenever needed.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Finance and Accounting Support:</strong> Processed paperwork for a Bank Loan Production Office, assessed eligibility, and completed documentation on time.</li>
              <li><strong>Title Search Services:</strong> Enabled a client to meet property-related financial obligations efficiently as part of loan origination.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Choose a Partner You Can Trust
            </h3>
            <p className="text-gray-700 mb-6">
              Our experienced compliance experts use the latest tools and frameworks to ensure your organization stays compliant, productive, and secure.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Looking for reliable and cost-effective regulatory compliance services?</span> Get in touch with us today.
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

export default RegulatoryComplianceServices;
