import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const PayrollComplianceServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Seamless Payroll Compliance Services
            </h2>
            <p className="text-lg text-gray-600">
              Streamline your payroll process and ensure full compliance with our expert team. Our certified financial experts handle all payroll compliance requirements efficiently, starting at <strong>$12/hour</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Partnering with an experienced payroll compliance service provider ensures accuracy, efficiency, and adherence to the latest regulations. We leverage advanced tools and technologies to deliver high-quality, reliable services tailored to your needs.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Payroll Compliance Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Registrations, renewals, and amendments</li>
              <li>Timely remittance of statutory contributions</li>
              <li>Filing statutory returns on time</li>
              <li>Wage data processing for contribution challans</li>
              <li>Maintaining statutory registers and records</li>
              <li>Compliance under various ESI codes</li>
              <li>EPF account transfers and settlements</li>
              <li>Helpdesk for payroll-related compliances</li>
              <li>Support during inspections by authorities</li>
              <li>Coordination with diverse authorities</li>
              <li>Dissemination of error data, statutory documentation, and MIS</li>
              <li>Assistance for employees with application processing</li>
              <li>Comprehensive payroll reporting compliance</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Flexible Pricing:</strong> Affordable and customizable pricing for your business needs.</li>
              <li><strong>Information Security:</strong> ISO/IEC 27001:2022 ISMS certified firm ensures full data protection.</li>
              <li><strong>Error-Free Services:</strong> ISO-certified quality guarantees accurate and reliable service delivery.</li>
              <li><strong>World-Class Infrastructure:</strong> Access to the latest tools, technologies, and office resources.</li>
              <li><strong>Skilled Team:</strong> Experienced certified financial experts manage all payroll compliance requirements.</li>
              <li><strong>Dedicated Manager:</strong> Single point of contact for streamlined communication and support.</li>
              <li><strong>Scalable Services:</strong> Quickly scale team and services to meet your evolving business needs.</li>
              <li><strong>Quick Turnaround:</strong> Multiple global delivery centers ensure timely and efficient service delivery.</li>
              <li><strong>24/7 Support:</strong> Round-the-clock assistance via phone and email.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Accounts Receivable:</strong> Delivered cost-effective accounts receivable services for a leading client.</li>
              <li><strong>Accounting Back-Office Support:</strong> Provided quick and efficient back-office support for a major bank loan production office.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              End Your Search for a Reliable Partner
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a pioneer in payroll compliance services, providing top-quality, efficient solutions with a team of experienced professionals.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">For reliable, cost-effective payroll compliance services,</span> contact us today.
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

export default PayrollComplianceServices;
