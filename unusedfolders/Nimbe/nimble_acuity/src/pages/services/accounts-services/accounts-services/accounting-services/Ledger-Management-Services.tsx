import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const LedgerManagementServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Ledger Management Services
            </h2>
            <p className="text-lg text-gray-600">
              Reduce the risk of debts and improve cash flow by outsourcing your ledger management to experienced professionals.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Managing ledgers effectively is crucial for optimizing cash flow and reducing financial risks. Outsourcing ledger management allows your business to focus on growth while ensuring financial accuracy and compliance.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** offers expert ledger management services with highly skilled professionals and state-of-the-art software. We deliver accurate, reliable, and scalable services tailored to meet your unique business needs.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Ledger Management Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Fixed Period Ledger Management:</strong> Ideal for temporary staff shortages, we provide ledger management for fixed or short periods with precision and reliability.</li>
              <li><strong>Full-Service Ledger Management:</strong> Comprehensive ledger management services using the latest tools, customized to your business requirements for maximum efficiency.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Flexible Pricing:</strong> Cost-effective, customizable pricing options to fit your business needs and budget.</li>
              <li><strong>High-Quality Services:</strong> ISO-certified processes ensure error-free and top-quality ledger management services.</li>
              <li><strong>Certified Accountants:</strong> Experienced and qualified accountants handle all your accounting requirements with ease.</li>
              <li><strong>World-Class Infrastructure:</strong> Access to cutting-edge ledger management software, tools, and workspaces.</li>
              <li><strong>Highly Scalable Services:</strong> Scale team size and resources according to your business needs without compromising quality.</li>
              <li><strong>Quick Turnaround Time:</strong> Delivery centers across multiple time zones ensure timely and efficient service delivery.</li>
              <li><strong>Single Point of Contact (SPOC):</strong> A dedicated project manager to handle all your needs efficiently and transparently.</li>
              <li><strong>24/7 Customer Support:</strong> Round-the-clock support via email or phone to resolve any issues promptly.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Optimize Your Cash Flow and Reduce Risk
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity provides the expertise you need to effectively manage your ledgers. Our reliable and scalable solutions ensure financial accuracy and compliance, allowing you to focus on your core business.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to streamline your financial management?</span>
              Contact us today to discuss how our services can benefit your business.
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

export default LedgerManagementServices;