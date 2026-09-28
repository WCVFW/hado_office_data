import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const FixedAssetAuditingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-bold text-[#006A7C] mb-6">
            Fixed Asset Auditing Services
          </h1>
          <p className="text-gray-700 mb-6">
            Ensure that your balance sheets are correct, prevent losses, and ensure that your
            fixed assets are available when needed by choosing our fixed asset auditing services.
          </p>
          <p className="text-gray-700 mb-6">
            Are the records of your fixed assets—long-term property pieces used to generate income,
            including everything from laptops to office appliances and warehouse machinery—inaccurate
            or incomplete? Are inaccurate asset records causing losses, incorrect balance sheets,
            or missing fixed assets when needed? Are you worried that manual fixed asset auditing
            will be time-consuming and difficult? If so, you can significantly benefit from our
            streamlined fixed asset auditing services.
          </p>
          <p className="text-gray-700 mb-8">
            Nimble Acuity is a leading fixed asset auditing service provider. We help businesses track,
            automate, and simplify their auditing process using advanced asset management solutions
            and mobile capability. With experienced accountants and taxation experts, we ensure accurate
            fixed asset reporting to safeguard your business against losses, errors, and compliance risks.
          </p>

          {/* Services Offered */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Fixed Asset Auditing Services We Offer
            </h2>
            <p className="text-gray-700 mb-4">
              All audits are performed by professional legal advisors or chartered accountants
              with deep expertise in property laws and accounting standards. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Physical Observations:</strong> Verification of assets through
                on-site visits, images, or video calls. Records include asset location, size,
                purchase date, value, tax compliance, documents, and serial numbers.
              </li>
              <li>
                <strong>Log Book Creation:</strong> Detailed recording of each fixed asset with
                supporting documents stored securely alongside asset records.
              </li>
              <li>
                <strong>Current Value & Depreciation Calculation:</strong> Assessment of
                appreciation or depreciation over time, including rigorous valuation of
                machinery, equipment, and property.
              </li>
            </ul>
          </div>

          {/* Other Services */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You May Benefit From
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Financial Analysis Services</li>
              <li>Accounting Services</li>
              <li>Bookkeeping Services</li>
              <li>Payroll Processing Services</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Fixed Asset Auditing Services?
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Affordable Services:</strong> Access experienced auditors at
                cost-effective rates, maximizing ROI.
              </li>

              <li>
                <strong>Data Security:</strong> Strict confidentiality with NDAs and secure
                processes for every project.
              </li>
              <li>
                <strong>Quick Turnaround Times:</strong> Efficient delivery with expert
                chartered accountants and legal advisors.
              </li>
              <li>
                <strong>Superb Infrastructure:</strong> World-class offices, facilities,
                and auditing technologies for precise results.
              </li>
              <li>
                <strong>Customized Solutions:</strong> Tailored auditing services aligned with
                your company’s operations and challenges.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FixedAssetAuditingServices;
