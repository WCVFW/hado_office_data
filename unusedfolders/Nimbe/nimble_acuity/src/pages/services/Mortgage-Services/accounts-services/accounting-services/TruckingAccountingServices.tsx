import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const TruckingAccountingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Trucking Accounting Services
            </h2>
            <p className="text-lg text-gray-600">
              Streamline and optimize your accounting processes, enhance efficiency, and ensure compliance with applicable regulations.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16">
            <p className="text-gray-700 leading-relaxed mb-6">
              Many trucking businesses face challenges dedicating time and resources to accounting and bookkeeping. Partnering with a professional trucking accounting service can help you optimize cash flow, manage debt, and ensure compliance efficiently.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity provides specialized trucking accounting services delivered by seasoned accountants with global experience across the US, Australia, Asia Pacific, Europe, and the Middle East.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Trucking Accounting Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Invoicing and Accounts Receivable:</strong> Streamline unpaid invoices and archived records for faster, reliable collections.</li>
              <li><strong>Accounts Payable Services:</strong> Track and manage payments, improve working capital, and reduce inconsistencies.</li>
              <li><strong>Payroll Services:</strong> Complete payroll management including computations, year-end taxes, and benefits.</li>
              <li><strong>Tax Compliance Services:</strong> In-depth tax compliance reviews to minimize tax outflow while ensuring regulatory compliance.</li>
              <li><strong>Financial Reporting Services:</strong> Generate precise reports using top accounting software for full financial transparency.</li>
              <li><strong>Cost Control and Management:</strong> Identify areas for cost reduction and manage expenditures effectively.</li>
              <li><strong>Fleet Management Services:</strong> Support fleet managers in accounting procedures for optimal fleet operations.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why We Are the Preferred Trucking Accounting Services Company
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Data Security:</strong> Strict compliance with international data security regulations for all client data.</li>
              <li><strong>Quick Turnaround Times:</strong> Timely delivery of accounting solutions without delays.</li>
              <li><strong>Superb Infrastructure:</strong> Services delivered from world-class offices for consistent results.</li>
              <li><strong>Customized Solutions:</strong> Services tailored to each client’s specific requirements by experienced accountants.</li>
              <li><strong>Affordable Accounting Services:</strong> Cost-effective solutions delivered by expert consultants.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              As a leading provider of trucking accounting solutions, we help clients streamline processes, improve productivity, and cut costs while maintaining compliance and accuracy.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Get in touch with us now to ensure all your books are compliant and accurate.</span>
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

export default TruckingAccountingServices;
