import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const DentalAccountingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Dental Accounting Services
            </h2>
            <p className="text-lg text-gray-600">
              Streamline your accounting and refocus on patient care. Our end-to-end
              dental accounting services provide effective financial functions, expert
              guidance, and lower tax liabilities.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you struggling to manage your accounting while providing the best
              dental care to your patients? The financial operations of a dental
              practice require careful supervision.
            </p>
            <p className="text-gray-700 leading-relaxed">
              To navigate insurance complexities, maintain equipment, and comply with
              changing regulations, a dental practice needs a reliable accounting partner.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity understands the unique dynamics of a dental practice. Our
              experience allows us to offer tailored solutions that ensure your
              financial success. We provide tax optimization strategies to lower
              liabilities and handle your accounting requirements, freeing up your
              time and resources to focus on your patients.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Accounting Services for Dental Practices
            </h3>
            <p className="text-gray-700 mb-6">
              We offer a full spectrum of dental accounting services, from bookkeeping
              to practice benchmarking. Our solutions boost your bottom line by improving
              operations, reducing overheads, and driving value for your practice.
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Bookkeeping and Financial Statement Preparation:</strong> Tracking income, expenses, and preparing accurate statements.</li>
              <li><strong>Accounts Payable and Receivable Management:</strong> Processing invoices, managing payments, and scheduling timely collections.</li>
              <li><strong>Payroll Processing and Tax Compliance:</strong> Payroll checks, tax filings, and compliance with state and federal regulations.</li>
              <li><strong>Budgeting and Cash Flow Management:</strong> Forecasting, budgeting, and cash flow analysis for effective financial management.</li>
              <li><strong>Financial Reporting and Analysis:</strong> Detailed reports and insights into practice performance.</li>
              <li><strong>Practice Management Consulting:</strong> Operational strategies to increase revenue and profitability.</li>
              <li><strong>Tax Planning and Preparation:</strong> Tax-saving strategies, preparation, and compliance support.</li>
              <li><strong>Practice Acquisition and Sales Assistance:</strong> Due diligence, valuations, and negotiation guidance.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Your Dental Accounting Needs?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>High-Quality Services:</strong> ISO 9001:2015 certified with industry-leading practices.</li>
              <li><strong>Experienced Team:</strong> Significant expertise in serving dental practices worldwide.</li>
              <li><strong>Modern Infrastructure and Technology:</strong> Advanced systems and diverse accounting software.</li>
              <li><strong>Data Security:</strong> Stringent measures ensure confidentiality and safety.</li>
              <li><strong>Short Turnaround:</strong> Quick delivery without compromising quality.</li>
              <li><strong>Affordable Pricing:</strong> Cost-effective solutions tailored to your practice needs.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Empower Your Dental Practice with Expert Accounting
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity delivers specialized accounting solutions designed for dental practices.
              From bookkeeping to tax planning, we help you stay financially healthy while you focus on patient care.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Partner with us to simplify financial management and strengthen your practice.</span>
              Contact us today to discuss your accounting needs.
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

export default DentalAccountingServices;
