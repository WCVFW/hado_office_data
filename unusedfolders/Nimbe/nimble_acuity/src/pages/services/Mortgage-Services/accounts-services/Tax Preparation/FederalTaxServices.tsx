import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const FederalTaxServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Expert Federal Tax Services for a Changing Environment
            </h2>
            <p className="text-lg text-gray-600">
              Navigating federal tax laws is challenging—regulations change
              constantly, and opportunities for incentives and credits are often
              overlooked. Nimble Acuity helps you stay compliant, maximize
              savings, and reduce risks with{" "}
              <span className="font-semibold">6+ years of proven expertise</span>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Our federal tax specialists work closely with your team to assess
              your unique situation, uncover tax-saving opportunities, and provide
              clarity in a complex regulatory environment. With deep expertise and
              a strategic approach, we ensure compliance while dramatically
              reducing your tax burden.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Comprehensive Federal Tax Solutions
            </h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Accounting Methods &amp; Periods:</strong> Guidance on
                revenue recognition, income, and deductions.
              </li>
              <li>
                <strong>Inventory Rules:</strong> Expertise in UNICAP, LIFO, and
                other complex calculations.
              </li>
              <li>
                <strong>International Tax:</strong> Support for GILTI, CFCs, FDII,
                and other cross-border compliance issues.
              </li>
              <li>
                <strong>Dispute Mitigation:</strong> Strategies to minimize fines,
                penalties, and Section 1341 settlements.
              </li>
              <li>
                <strong>Contracts &amp; Planning:</strong> Short-, medium-, and
                long-term planning to mitigate BEAT and Section 163(j)
                disallowance.
              </li>
              <li>
                <strong>Capitalization:</strong> Guidance on capitalizing tangible
                and intangible assets with proper cost recovery.
              </li>
              <li>
                <strong>Mergers &amp; Acquisitions:</strong> Support on accounting
                methods during complex M&amp;A transactions.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Federal Tax Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Affordable Expertise:</strong> Access top-tier tax
                professionals at a fraction of in-house costs.
              </li>
              <li>
                <strong>Data Security:</strong> Strict NDA &amp; SLA compliance to
                protect your financial data.
              </li>

              <li>
                <strong>Quick Turnaround:</strong> Efficient teams ensure timely
                filings and compliance.
              </li>
              <li>
                <strong>Customized Solutions:</strong> Tailored strategies that
                align with your unique tax challenges.
              </li>
              <li>
                <strong>Superb Infrastructure:</strong> State-of-the-art offices
                with advanced systems to deliver excellence.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Minimize Liability. Maximize Savings.
            </h3>
            <p className="text-gray-700 mb-6">
              We help businesses meet deadlines, optimize tax structures, and
              manage complex financial data with ease. With Nimble Acuity, you
              gain a trusted partner who delivers real value to your enterprise.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to streamline your federal tax strategy?</span>{" "}
              Contact us today to get started.
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

export default FederalTaxServices;
