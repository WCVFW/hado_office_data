import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const AccountsReceivableServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Nimble Accounts Receivable Services
            </h2>
            <p className="text-lg text-gray-600">
              Turn your outstanding invoices into powerful cash flow. Our services deliver{" "}
              <strong>nimble acuity</strong>—the speed and precision you need to transform
              your accounts receivable into a strategic asset for a strong, vibrant business.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="max-w-5xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              How We Boost Your Cash Flow
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Accelerate Collections:</strong> Consistent, professional follow-up ensures quicker payments and a healthier cash position.</li>
              <li><strong>Enhance Control:</strong> Detailed activity reports provide complete visibility, empowering data-driven decisions.</li>
              <li><strong>Improve Data Hygiene:</strong> Accurate, verified invoices reduce disputes and foster transparent billing.</li>
              <li><strong>Centralize Communication:</strong> A single, organized system eliminates confusion and prevents payment lapses.</li>
            </ul>
          </div>

          {/* Specialized Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Specialized Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Real Estate AR Services:</strong> Manage tenant payments, enhance cash flow, and better control debtors.</li>
              <li><strong>AR Factoring:</strong> Sell unpaid invoices for immediate cash with precision and cost-effectiveness.</li>
              <li><strong>AR Aging Reports:</strong> Clear, categorized reports help you prioritize collections with confidence.</li>
            </ul>
          </div>

          {/* Advantage Section */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              The Advantage of Partnership
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost-Effective:</strong> Access top-tier services at a price that fits your budget without sacrificing quality.</li>
              <li><strong>Data Security:</strong> Your financial data is safeguarded by our certified security framework.</li>
              <li><strong>World-Class Team:</strong> Experienced AR clerks and specialists deliver accuracy and quick turnaround using advanced software.</li>
              <li><strong>Tailored Solutions:</strong> Customized programs align with your customer relationship strategy for maximum impact.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Gain Full Control Over Your Cash Flow
            </h3>
            <p className="text-gray-700 mb-6">
              Ready to take charge of your receivables and elevate your business with
              clear, actionable insights?
            </p>
            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
              Contact Us to Get Started
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AccountsReceivableServices;
