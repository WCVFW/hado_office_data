import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const FixedAssetAccounting = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-bold text-[#006A7C] mb-6">
            Fixed Asset Accounting Services
          </h1>
          <p className="text-gray-700 mb-6">
            Enable accurate financial accounting, asset maintenance, and theft deterrence
            by choosing our <strong>fixed asset accounting services</strong>.
          </p>
          <p className="text-gray-700 mb-6">
            Are you spending too much time managing your fixed assets? Do you want to cut
            costs, improve control, and reduce the tedious work of asset tracking? Our
            fixed asset accounting services help you manage tangible assets or property,
            plant, and equipment (PP&E) with ease.
          </p>
          <p className="text-gray-700 mb-8">
            Nimble Acuity provides comprehensive solutions that track asset location,
            quantity, condition, depreciation, and maintenance — giving you more control
            and efficient management of your assets.
          </p>

          {/* Services Offered */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Fixed Asset Accounting Services We Offer
            </h2>
            <p className="text-gray-700 mb-4">
              Our team is proficient in all major depreciation methods
              (straight-line, declining balance, units-of-output, and accelerated methods).
              Our services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Updating fixed asset register with additions and write-offs</li>
              <li>Maintaining details like asset code, type, purchase info, and description</li>
              <li>Reconciling fixed assets and sub-ledgers with the general ledger</li>
              <li>Arranging assets by location, department, cost center, or category</li>
              <li>Calculating depreciation using appropriate rates and methods</li>
              <li>Preparing journal entries for purchases, sales, depreciation, and write-offs</li>
              <li>Conducting regular physical verification of assets</li>
              <li>Performing monthly variance analysis of capex vs. budget</li>
              <li>Reviewing invoices to classify expense vs. capitalization</li>
              <li>Generating reports (asset register, depreciation schedules, comparison reports, etc.)</li>
              <li>Coordinating with site and property managers for policy compliance</li>
              <li>Managing balance sheet accounts, ledger clean-up, and distributions</li>
              <li>Advising on write-offs and adjustments for each asset</li>
              <li>Providing accurate capital expenditure projections</li>
              <li>Accounting for the sale or disposal of assets</li>
            </ul>
          </div>

          {/* Other Services */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You May Benefit From
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Financial Write-up Services</li>
              <li>Accounts Reconciliation Services</li>
              <li>Real Estate Accounting</li>
              <li>Financial Reporting Services</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Fixed Asset Accounting Services?
            </h2>
            <p className="text-gray-700 mb-4">
              Partnering with Nimble Acuity ensures reliable, secure, and cost-effective
              fixed asset accounting. Key benefits include:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Affordable Pricing Options:</strong> Cost-effective services with
                maximum ROI.
              </li>
              <li>
                <strong>Data Security:</strong> Industry-leading practices keep your
                accounting data safe and secure.
              </li>
              <li>
                <strong>High-Quality Services:</strong> ISO 9001:2015-certified for
                excellence and accuracy.
              </li>
              <li>
                <strong>Superb Infrastructure:</strong> State-of-the-art offices and
                advanced resources ensure reliability.
              </li>
              <li>
                <strong>Tools & Technologies:</strong> Proficiency in advanced accounting
                software for smarter management.
              </li>
              <li>
                <strong>Structured Process:</strong> Streamlined, systematic workflows
                minimize errors.
              </li>
              <li>
                <strong>Experienced Team:</strong> Skilled professionals with global
                accounting expertise.
              </li>
              <li>
                <strong>Short Turnaround:</strong> Always on time, with efficient delivery
                across regions.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FixedAssetAccounting;
