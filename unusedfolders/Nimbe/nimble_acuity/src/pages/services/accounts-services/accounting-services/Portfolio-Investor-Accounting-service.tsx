import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const PortfolioInvestorAccounting = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-bold text-[#006A7C] mb-6">
            Portfolio Investor Accounting Services
          </h1>
          <p className="text-gray-700 mb-6">
            We offer a comprehensive range of portfolio investor accounting services that provide
            you with a highly robust accounting solution.
          </p>
          <p className="text-gray-700 mb-6">
            Are you looking for fund and portfolio accounting services that provide your
            organization with a capable, accurate, and flexible accounting solution? Do you want
            access to portfolio holdings through secure web portals that facilitate safekeeping
            and management? Or are you searching for a reliable third-party provider who can
            maintain and process your portfolio investment reporting in a highly responsive and
            accurate manner? <strong>If so, you are in the right place.</strong>
          </p>
          <p className="text-gray-700 mb-8">
            Nimble Acuity is a leading provider of portfolio investor accounting solutions to
            clients worldwide. By performing our processing in-house, we ensure faster
            turnaround, greater flexibility for special requests, and adjustments even after
            deadlines. We also provide efficient monthly reports on portfolio holdings and run
            “what-if” scenarios to help you assess potential impacts of different processes and
            assumptions.
          </p>

          {/* Services Offered */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Portfolio Investor Accounting Services We Offer
            </h2>
            <p className="text-gray-700 mb-4">
              Our comprehensive suite of portfolio investor accounting services includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Calculating daily, weekly, monthly, or quarterly net asset values of portfolio items.</li>
              <li>Independently valuing portfolios to ensure maximum accuracy and accountability.</li>
              <li>Performing automated calculations across fund structures and performance reports.</li>
              <li>Provisioning detailed investment manager reports.</li>
              <li>Providing portfolio analysis and corporate governance support.</li>
              <li>Reconciling and verifying portfolio records with prime brokers or custodians.</li>
              <li>Maintaining share registers and AML (anti-money laundering) compliance records.</li>
              <li>Maintaining books and records in accordance with fund governing documents.</li>
              <li>Monitoring and recording all corporate actions linked to the portfolio.</li>
              <li>Reconciling and recording all income and expense accruals related to the fund.</li>
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
              Why Choose Nimble Acuity for Portfolio Investor Accounting Services?
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Affordable Pricing Options:</strong> Cost-effective solutions that deliver
                tangible ROI with no hidden fees.
              </li>
              <li>
                <strong>Data Security:</strong> Your portfolio data is safeguarded with strict
                security protocols and compliance standards.
              </li>

              <li>
                <strong>Superb Infrastructure:</strong> Our professionals work from
                state-of-the-art facilities equipped with world-class technology.
              </li>
              <li>
                <strong>Tools and Technologies:</strong> Expertise in advanced accounting and
                portfolio management software.
              </li>
              <li>
                <strong>Structured Process:</strong> A systematic, streamlined workflow that
                eliminates errors and enhances reliability.
              </li>
              <li>
                <strong>Experienced Team:</strong> Skilled professionals with global experience
                across diverse portfolio accounting needs.
              </li>
              <li>
                <strong>Short Turnaround:</strong> We take deadlines seriously and ensure
                on-time, every-time delivery.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioInvestorAccounting;
