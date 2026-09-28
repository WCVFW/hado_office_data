import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const GeneralAccountingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              General Accounting Services
            </h2>
            <p className="text-lg text-gray-600">
              Streamline your bookkeeping and financial management while focusing on your core business functions with Nimble Acuity's professional accounting services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Accurate financial records are critical for businesses of all sizes to make informed decisions about investments, expenditures, and profits. General accounting involves specialized knowledge that can be time-consuming and costly if managed in-house.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** provides reliable general accounting services with experienced accountants and financial advisors. Our team ensures compliance with GAAP and other financial regulations while delivering cost-effective solutions tailored to your business.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              General Accounting Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Bookkeeping Services:</strong> Track and record all financial transactions, manage accounts payable and receivable, and generate accurate financial statements. Essential for tax filing and overall financial health.</li>
              <li><strong>Payroll Services:</strong> Manage payroll efficiently, track employee payments, and ensure timely and accurate reporting to prevent errors and streamline processes.</li>
              <li><strong>Auditing and Reviewing:</strong> Examine transactions, detect inconsistencies, and generate audit reports with recommendations to enhance your financial management processes.</li>
              <li><strong>Tax-Related Services:</strong> Receive expert guidance on sales tax and other tax obligations, ensuring accurate reporting and compliance for both businesses and individuals.</li>
              <li><strong>Consulting Services:</strong> Get strategic financial guidance for short-term and long-term decision-making, with customized financial plans aligned to your business goals.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Experienced Accountants:</strong> Our team consists of skilled accountants proficient in GAAP and financial regulations.</li>
              <li><strong>Cost-Effective Solutions:</strong> Outsource general accounting services at affordable rates without compromising quality.</li>
              <li><strong>Accurate Record-Keeping:</strong> We maintain precise financial records to help you make informed business decisions.</li>
              <li><strong>Regulatory Compliance:</strong> All services are compliant with GAAP and other authoritative financial standards.</li>
              <li><strong>Tailored Services:</strong> We customize our accounting solutions based on your business requirements and goals.</li>
              <li><strong>24/7 Support:</strong> Our support team is available around the clock to address your accounting needs and queries.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Take Control of Your Financial Future
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity provides the expert support you need to streamline your general accounting processes. Our reliable and cost-effective solutions free you from administrative burden, allowing you to focus on what matters most: growing your business.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to simplify your finances?</span>
              Contact us today to discuss your accounting needs and get started.
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

export default GeneralAccountingServices;