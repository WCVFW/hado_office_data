import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const ModelRiskManagementServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Model Risk Management Services
            </h2>
            <p className="text-lg text-gray-600">
              Financial organizations face constant model risk when using models for pricing, risk management, or general decision-making. At Nimble Acuity, we provide a comprehensive suite of <span className="font-medium">Model Risk Management services</span> to help you meet rigorous regulatory and operational requirements.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16">
            <p className="text-gray-700 leading-relaxed mb-6">
              Our experienced teams are skilled in Model Risk Management, leading to improved capital and asset management, greater transparency, and regulatory compliance. Consider our experts an extension of your own team, providing world-class services to help you achieve excellence.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Model Risk Management Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Model Development:</strong> Develop and test advanced statistical, economic, and machine learning models, and create benchmark models to assess effectiveness.
              </li>
              <li>
                <strong>Model Analysis:</strong> Validate models by evaluating principles, hypotheses, datasets, algorithms, and conclusions. Conduct model stress testing in line with regulatory guidance and risk appetite.
              </li>
              <li>
                <strong>Model Optimization:</strong> Perform audits to identify and address model flaws, including recalibration based on performance assessments.
              </li>
              <li>
                <strong>Documentation:</strong> Examine and process model documentation, ensuring assumptions, components, and processes comply with best practices.
              </li>
              <li>
                <strong>Automation:</strong> Automate routine model review and validation tasks such as parameter stability, backtesting, and sensitivity analysis.
              </li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Model Risk Management Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Preparation:</strong> Understand your objectives and set clear project goals.</li>
              <li><strong>Planning:</strong> Provide a customized Model Risk Management solution that fits within your budget.</li>
              <li><strong>Implementation:</strong> Deliver services on time and within budget, ensuring a smooth process.</li>
              <li><strong>Reporting:</strong> Provide a comprehensive report summarizing findings and actions.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Services:</strong> Transparent and reasonable pricing tailored to your needs.</li>
              <li><strong>Top-Notch Infrastructure:</strong> Remote management capabilities for seamless and efficient service delivery.</li>
              <li><strong>ISO Certified:</strong> ISO 9001:2015 certified, ensuring adherence to international standards.</li>
              <li><strong>Data Integrity:</strong> Secure cloud network ensures your data is protected and private.</li>
              <li><strong>High-Quality Services:</strong> Continuous quality assessment to provide the highest client satisfaction.</li>
              <li><strong>Scalability:</strong> Easily scale services to meet evolving business requirements.</li>
              <li><strong>Strict on Deadlines:</strong> Fast turnaround and adherence to strict project timelines.</li>
              <li><strong>24/7 Support:</strong> Around-the-clock assistance via email, phone, and web chat.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity for Model Risk Management
            </h3>
            <p className="text-gray-700 mb-6">
              Enhance your financial performance, meet regulatory demands, and reduce operational risk with our expert Model Risk Management services.
            </p>
            <p className="text-gray-700 mb-8">
              Ready to strengthen your model risk framework? <span className="font-medium">Contact Nimble Acuity today to get started.</span>
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

export default ModelRiskManagementServices;
