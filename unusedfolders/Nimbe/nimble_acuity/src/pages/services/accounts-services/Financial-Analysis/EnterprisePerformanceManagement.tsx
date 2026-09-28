import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const EnterprisePerformanceManagement = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Optimize Business Performance with Enterprise Performance Management
            </h2>
            <p className="text-lg text-gray-600">
              Plan, assess, and evaluate your business performance with our end-to-end Enterprise Performance Management (EPM) services, starting at just <strong>$12/hour</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              With over two decades of experience, we have assisted 18,000+ clients across industries. We work closely with your teams to deliver scalable EPM solutions that drive actionable insights and rapid results.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our EPM Consulting Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Integrated Business Planning:</strong> Unite disparate business processes to break departmental silos and improve collaboration, enabling better planning, forecasting, and performance management.</li>
              <li><strong>Financial Planning and Assessment:</strong> Centralize financial data for easier budgeting, spending analysis, and automated reporting to support performance and profitability.</li>
              <li><strong>Sales Planning:</strong> Streamline sales planning by converting insights from sales and marketing data into actionable strategies for more agile sales execution.</li>
              <li><strong>Extended Planning:</strong> Integrate processes across business partnerships, ensuring all stakeholders are included for consistent, unified planning.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Flexible Pricing:</strong> Customized options tailored to your specific EPM needs.</li>
              <li><strong>Information Security:</strong> ISO/IEC 27001:2022 certified, ensuring your data is always protected.</li>
              <li><strong>Quality Services:</strong> Extensive experience delivering back-office EPM solutions across HR, finance, IT, and procurement.</li>
              <li><strong>Advanced Technology:</strong> Expertise with SAP/BusinessObjects, Oracle/Hyperion, and other leading EPM software.</li>
              <li><strong>Quick Turnarounds:</strong> Committed to meeting project deadlines with timely delivery of services.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Equity Research Support:</strong> Assisted a portfolio management firm in creating a policy that yielded strong returns during a market downturn.</li>
              <li><strong>Financial and Accounting Support:</strong> Enabled a Loan Production Office to efficiently manage seasonal workloads and reduce costs.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Improve Your Business Performance
            </h3>
            <p className="text-gray-700 mb-6">
              Our expert consultants implement best-in-class EPM solutions to improve and maintain performance across your entire enterprise. We also provide complementary finance and accounting services to clients worldwide.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Looking for a reliable and expert EPM service provider?</span> Get in touch with our experts now.
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

export default EnterprisePerformanceManagement;
