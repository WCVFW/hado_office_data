import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const ConstructionAccountingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-bold text-[#006A7C] mb-6">
            Construction Accounting Services
          </h1>
          <p className="text-gray-700 mb-8">
            Strengthen your accounting department and support your construction firm's management team
            with high-quality accounting services.
          </p>
          <p className="text-gray-700 mb-8">
            Are you looking for ways to manage inconsistent cash flow in your construction business?
            Do you want help with generating financial statements that accurately represent the work
            your firm is performing? Do you need support in evaluating operational efficiency or
            pricing change orders quickly? If so, you can greatly benefit from our construction
            accounting solutions.
          </p>
          <p className="text-gray-700 mb-8">
            Nimble Acuity is a leading construction accounting service provider with vast experience
            in helping construction firms and contractors. We provide high-quality services that help
            you track, review, and communicate key financial insights, so you can focus on growing
            your business.
          </p>

          {/* Services Offered */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Construction Accounting Services We Offer
            </h2>
            <p className="text-gray-700 mb-4">
              We understand the unique accounting challenges construction firms face, which is why
              we deliver specialized solutions designed for this industry. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Pay applications and draw request services</li>
              <li>Revenue recognition analysis and implementation</li>
              <li>Work in progress schedule & maintenance</li>
              <li>Progress, unit-based, and time & material billing</li>
              <li>Assistance with obtaining financing</li>
              <li>Audit preparation services</li>
              <li>CFO and controller services</li>
              <li>Payroll services & staff accounting</li>
              <li>Claims accounting and change order management</li>
              <li>Comprehensive job cost tracking & analysis</li>
              <li>Financial report preparation</li>
              <li>Project performance analysis</li>
              <li>Equipment costing and analysis</li>
              <li>GL budget preparation & review</li>
              <li>Subcontract management services</li>
              <li>Software selection and optimization</li>
              <li>Due diligence and transaction support</li>
              <li>Retainage process management</li>
              <li>Prevailing wage reporting</li>
            </ul>
          </div>

          {/* Other Services */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You May Benefit From
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Real Estate Accounting</li>
              <li>Financial Reporting Services</li>
              <li>Financial Write-up Services</li>
              <li>Accounts Reconciliation Services</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Construction Accounting Services to Nimble Acuity?
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Affordable Pricing Options:</strong> Cost-effective solutions with maximum ROI.</li>
              <li><strong>Data Security:</strong> Fully GDPR-compliant with secure communication channels.</li>
              <li><strong>Superb Infrastructure:</strong> World-class office spaces and tools for robust services.</li>
              <li><strong>Latest Tools & Technologies:</strong> Advanced construction accounting software.</li>
              <li><strong>Structured Process:</strong> Disciplined and reliable service delivery framework.</li>
              <li><strong>Experienced Team:</strong> Skilled professionals with deep industry expertise.</li>
              <li><strong>Short Turnaround:</strong> Fast delivery to meet critical timelines.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConstructionAccountingServices;
