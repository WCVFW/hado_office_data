import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const ExcelAccountingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Excel Accounting Services
            </h2>
            <p className="text-lg text-gray-600">
              Get customized, 100% accurate, and scalable Excel-based accounting solutions to optimize your financial processes.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Excel remains one of the most popular tools for accountants and finance managers. For smaller firms with less financial data, it provides flexibility for everything from budget planning and forecasting to building financial models.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At Nimble Acuity, we specialize in comprehensive Excel-based accounting services. Our experts help solve common challenges like manual entry errors and inefficient data presentation. With customized Excel templates and solutions, we transform your accounting processes into efficient, accurate, and scalable systems.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Excel Accounting Solutions
            </h3>
            <p className="text-gray-700 mb-6">
              We deliver advanced Excel-based accounting solutions trusted by clients across various industries.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Excel Templating Services</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Create powerful, user-friendly templates with complex formulas, features, and data connections.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Workbook Integration Services</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Automate repetitive tasks with macros and integrate Excel with external data sources.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Excel Accounting Tax Services</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Simplify tax accounting by coordinating workbooks for easy data access and compliance.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Custom Excel Business & Accounting Packages</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Design customized Excel accounting packages that help your business refocus on core capabilities and maximize returns.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Exceptional Services:</strong> Our team has proven expertise in helping businesses of all sizes meet their accounting needs with precision.</li>
              <li><strong>Globally Qualified Team:</strong> We have experienced accounting professionals from diverse backgrounds who deliver reliable solutions.</li>
              <li><strong>Best Accounting Practices:</strong> We use superior monitoring, reporting, and optimized processes to ensure accuracy and compliance.</li>
              <li><strong>Quickest Turnaround Times:</strong> Our global delivery centers enable around-the-clock support and a time-zone advantage.</li>
              <li><strong>Cost-Effective:</strong> We offer customized pricing packages, with services starting as low as $12 per hour.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Streamline Your Bookkeeping and Reporting
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has been delivering Excel accounting and finance solutions to clients worldwide for years. Our team uses advanced infrastructure and industry best practices to provide accurate, scalable, and cost-effective services.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Partner with us for reliable Excel accounting services that provide clarity and control.</span> Get in touch with our experts today!
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

export default ExcelAccountingServices;