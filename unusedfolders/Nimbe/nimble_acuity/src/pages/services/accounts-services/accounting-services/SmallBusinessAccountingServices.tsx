import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const SmallBusinessAccountingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Small Business Accounting Services
            </h2>
            <p className="text-lg text-gray-600">
              We manage cash flows, prepare financial statements, plan business taxes, and keep your books compliant.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Meticulous accounting is an integral part of running a successful business. Small business owners often face budget constraints and may hesitate to outsource due to data security concerns. With over 6 years of experience, we understand your unique needs and challenges.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our CPAs work closely with you to ensure long-term financial compliance and growth. We guarantee 100% accuracy and take personal responsibility for safeguarding your business data. Our balance sheets, expense reports, and income statements provide the insights you need to grow your business. Choose us to optimize your business structure and make better financial decisions.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Small Business Accounting Solutions
            </h3>

            {/* Service Categories */}
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Bookkeeping Services</h4>
                <p className="text-gray-700">
                  Virtual bookkeeping solutions to organize your financial data, clean up your books, handle budgeting, reconcile statements, and monitor KPIs.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Payroll Services</h4>
                <p className="text-gray-700">
                  Customized payroll processing to meet your specific needs, helping you scale efficiently and effectively.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Tax Services</h4>
                <p className="text-gray-700">
                  Comprehensive tax preparation ensuring compliance with the latest rules and regulations, easing your compliance workload.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Business Accounting Services</h4>
                <p className="text-gray-700">
                  Centralized accounting and real-time asset management, with reviews of your methods and policies so you can focus on core business functions.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">CPA Services</h4>
                <p className="text-gray-700">
                  Dedicated CPA support to analyze market trends, map growth goals, review statements, and craft a personalized strategy.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing:</strong> Competitively priced services that maximize value.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified with NDAs for complete data privacy and security.</li>
              <li><strong>Top-notch Services:</strong> Industry best practices and multiple quality checks ensure accuracy.</li>
              <li><strong>Superb Infrastructure:</strong> World-class offices equipped to deliver premium accounting services.</li>
              <li><strong>Advanced Tools and Technologies:</strong> Proficient use of the latest industry-standard accounting software.</li>
              <li><strong>Short Turnaround Time:</strong> Fast, reliable delivery with global dusk-to-dawn operations.</li>
            </ul>
          </div>

          {/* CTA (added to match the style) */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Get Started with Professional Small Business Accounting
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity offers reliable and secure accounting solutions so you can focus on growing your business.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Let us handle your financial details with precision and expertise.</span>
              Contact us today to discuss your business needs.
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

export default SmallBusinessAccountingServices;