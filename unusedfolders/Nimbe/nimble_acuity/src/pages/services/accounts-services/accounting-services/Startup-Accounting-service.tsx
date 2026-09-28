import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const StartupAccounting = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-bold text-[#006A7C] mb-6">
            Accounting Services for Startups
          </h1>
          <p className="text-gray-700 mb-6">
            Get access to comprehensive accounting services for your startup provided by seasoned accountants that make a real difference to your business.
          </p>
          <p className="text-gray-700 mb-6">
            Are you a startup struggling with unique financial and accounting challenges? Do you find yourself too busy building your business and bringing your ideas to life to focus on accounting? Looking for an expert partner who can ensure all your accounting needs are handled efficiently, effectively, and compliantly? If yes, our industry-leading <strong>accounting services for startups</strong> are built for you.
          </p>
          <p className="text-gray-700 mb-8">
            Nimble Acuity is a trusted provider of startup accounting services. We help startups manage financial complexities with tailored solutions, seamless bookkeeping, tax compliance, and advisory support—empowering you to achieve your growth goals.
          </p>

          {/* Services Offered */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Accounting Services for Startups
            </h2>
            <p className="text-gray-700 mb-4">
              We provide end-to-end accounting and bookkeeping support for startups. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Tax Services:</strong> Comprehensive support covering corporation taxes, payroll taxes, HST, and tax planning—ensuring compliance and peace of mind.
              </li>
              <li>
                <strong>Accounting Services:</strong> Preparation of audits, reviews, and financial statements on time, every time.
              </li>
              <li>
                <strong>Advisory Services:</strong> Expert guidance in business consulting, SR&ED claims, budgeting, and forecasting for smarter decision-making.
              </li>
              <li>
                <strong>Bookkeeping Services:</strong> Professional bookkeeping that keeps your records clean, accurate, and fully compliant with regulations.
              </li>
            </ul>
          </div>

          {/* Other Services */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You May Benefit From
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Accounts Payable Services</li>
              <li>Accounting Services</li>
              <li>Bookkeeping Services</li>
              <li>Payroll Processing Services</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Startup Accounting?
            </h2>
            <p className="text-gray-700 mb-4">
              Partnering with Nimble Acuity means reliable, affordable, and expert startup accounting. Key benefits include:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Affordable Pricing Options:</strong> Cost-effective services tailored to your startup’s needs.
              </li>
              <li>
                <strong>High-Quality Services:</strong> ISO 9001:2015-certified processes ensure accuracy and excellence.
              </li>
              <li>
                <strong>Superb Infrastructure:</strong> Skilled professionals supported by world-class infrastructure.
              </li>
              <li>
                <strong>Tools and Technologies:</strong> Expertise in multiple accounting platforms for seamless integration.
              </li>
              <li>
                <strong>Structured Process:</strong> Streamlined workflows minimize errors and maximize efficiency.
              </li>
              <li>
                <strong>Experienced Team:</strong> A seasoned finance and accounting team with proven startup expertise.
              </li>
              <li>
                <strong>Data Security:</strong> Your sensitive financial data is always kept safe and secure.
              </li>
              <li>
                <strong>Short Turnaround:</strong> On-time delivery of all accounting services, every single time.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartupAccounting;
