import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const FixedAssetManagement = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Fixed Asset Management Services
            </h2>
            <p className="text-lg text-gray-600">
              Track, manage, and optimize your fixed assets with expert solutions from Nimble Acuity, ensuring compliance, accuracy, and cost-efficiency.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Managing fixed assets can be complex as your business grows. Outsourcing **fixed asset management services** ensures proper tracking, verification, depreciation management, and overall asset optimization.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** offers end-to-end fixed asset management solutions, using advanced software and professional expertise to streamline operations and maximize ROI.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Fixed Asset Management Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Asset Audit:</strong> Review fixed assets for compliance and optimization, with recommendations for improvement.</li>
              <li><strong>Asset Verification & Tagging:</strong> Physical checks and RFID/barcode tagging for accurate asset tracking.</li>
              <li><strong>Asset Tracking:</strong> Real-time tracking of assets using advanced systems to maintain organization.</li>
              <li><strong>Comprehensive Asset Management Systems:</strong> Integrated software solutions to manage assets and inventory efficiently.</li>
              <li><strong>Inventory Management:</strong> Track inventories, value, and shelf-life to prevent spoilage or obsolescence.</li>
              <li><strong>RFID & Barcode Solutions:</strong> Advanced tagging technology for grouping, locating, and auto-identification of assets.</li>
            </ul>
          </div>

          {/* Our Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Fixed Asset Management Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Discovery:</strong> Identify your business needs and create project scope.</li>
              <li><strong>Requirement Analysis:</strong> Assess and analyze asset data for insights.</li>
              <li><strong>Strategy Development:</strong> Create a customized management strategy for your assets.</li>
              <li><strong>Service Implementation:</strong> Execute verification, tagging, tracking, and reporting.</li>
              <li><strong>Final Reporting:</strong> Deliver secure, detailed reports with actionable insights.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Fixed Asset Management?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Data Security:</strong> Complete confidentiality and robust data protection protocols.</li>
              <li><strong>Affordable Services:</strong> Flexible pricing without compromising service quality.</li>
              <li><strong>Quick Turnaround:</strong> Timely delivery, even under tight deadlines.</li>
              <li><strong>Dedicated Project Manager:</strong> Single point of contact for seamless communication.</li>
              <li><strong>24/7 Support:</strong> Round-the-clock assistance via phone, email, or chat.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Optimize Your Assets and Maximize Your ROI
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity provides the expertise you need to effectively manage and optimize your fixed assets. Our comprehensive services ensure accuracy, compliance, and cost-efficiency, allowing you to focus on your core business.
            </p>
            <p className="text-700 mb-8">
              <span className="font-medium">Ready to gain better control over your assets?</span>
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

export default FixedAssetManagement;