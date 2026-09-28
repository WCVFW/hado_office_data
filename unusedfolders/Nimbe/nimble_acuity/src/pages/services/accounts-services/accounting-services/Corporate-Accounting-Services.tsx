import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const CorporateAccountingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Corporate Accounting Services
            </h2>
            <p className="text-lg text-gray-600">
              Keep track of accounting records, fixed assets, general ledgers, and more with our professional corporate accounting solutions.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Efficiently managing fixed assets, general ledgers, cash books, and other accounting records is crucial for any organization. Outsourcing your **corporate accounting services** to experienced professionals ensures accuracy, compliance, and actionable insights for better financial decision-making.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a trusted corporate accounting services provider, equipped with highly qualified accountants and international-standard software to deliver precise and reliable accounting solutions tailored to your unique business needs.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Corporate Accounting Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Management Reporting:</strong> Complete management accounting reporting, including journal support, monthly analysis, auditor liaison, and bank reconciliations to provide clear insights for decision-making.</li>
              <li><strong>Statutory Accounting Services:</strong> Prepare statutory financial statements compliant with international standards and relevant legislation, ensuring timely management review and regulatory adherence.</li>
              <li><strong>Project Management Services:</strong> Integrate your financial function with HR, budgeting, financial planning, and reporting to ensure cohesive project management and operational efficiency.</li>
              <li><strong>Corporate Governance Services:</strong> Multifunctional corporate accounting and governance support including taxation, advisory, compliance, and governance services tailored to your organization.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Corporate Accounting Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing Packages:</strong> Flexible, cost-effective solutions tailored to your business needs and budget.</li>
              <li><strong>Talented Accountants:</strong> Highly skilled professionals catering to all accounting requirements with expertise.</li>
              <li><strong>State-of-the-Art Infrastructure:</strong> International-standard offices and top accounting software tools ensure reliable services.</li>
              <li><strong>Easily Scalable Services:</strong> Resources and bandwidth to scale up accounting requirements as needed.</li>
              <li><strong>Short Turnaround Time:</strong> Delivery from multiple locations across time zones ensures timely completion of tasks.</li>
              <li><strong>Dedicated Manager:</strong> A single point of contact for all requests to streamline communication.</li>
              <li><strong>Round-the-Clock Support:</strong> 24/7 support from sales, marketing, and customer service teams via phone or email.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Optimize Your Financial Operations Today
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity provides the expertise you need to effectively manage and optimize your corporate finances. Our professional team ensures accuracy, compliance, and efficiency, allowing you to focus on your core business.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to streamline your corporate accounting?</span>
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

export default CorporateAccountingServices;