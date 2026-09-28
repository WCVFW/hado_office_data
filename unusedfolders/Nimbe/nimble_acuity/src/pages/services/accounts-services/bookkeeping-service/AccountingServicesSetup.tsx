import React from 'react';
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const NimbleAcuityAccountingServices: React.FC = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4 text-center">
              Specialized Accounting for Your Business
            </h2>
            <p className="text-lg text-gray-600 text-center">
              Are you finding it difficult to hire and train the right team to manage your complex financial needs? The most efficient solution is to partner with an experienced accounting services provider.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mx-auto mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading **accounting services provider** that offers comprehensive solutions for businesses of all sizes. Our team consists of highly skilled and experienced accountants who can handle all your requirements with precision and ease. We leverage the latest tools and technologies to deliver exceptional service and help you achieve financial clarity.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Accounting Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Financial Accounting & Reporting:</strong> We handle your day-to-day financial accounting, ensuring accuracy and compliance.</li>
              <li><strong>Tax Planning & Compliance:</strong> Our experts help you navigate the complexities of tax laws.</li>
              <li><strong>Payroll Processing:</strong> We offer end-to-end payroll services, from calculating wages to managing tax withholdings.</li>
              <li><strong>Bookkeeping:</strong> We keep your financial records organized and up-to-date.</li>
              <li><strong>Business Advisory:</strong> Strategic guidance to help you make informed business decisions.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost-Effective Solutions:</strong> Flexible pricing models tailored to your needs.</li>
              <li><strong>Data Security:</strong> Protecting your sensitive financial information with state-of-the-art security.</li>
              <li><strong>Unmatched Expertise:</strong> Experienced accountants with deep industry knowledge.</li>
              <li><strong>Scalable Services:</strong> Easily scale up or down based on your requirements.</li>
              <li><strong>Dedicated Support:</strong> A dedicated account manager as your single point of contact.</li>
              <li><strong>Quick Turnaround:</strong> Streamlined processes ensure timely delivery of services.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Simplify Your Financial Management
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a leader in providing top-tier accounting and financial services. Our mission is to help businesses like yours succeed by taking the complexity out of financial management.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to simplify your accounting?</span>
              Contact us today to discuss your needs and get started.
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

export default NimbleAcuityAccountingServices;