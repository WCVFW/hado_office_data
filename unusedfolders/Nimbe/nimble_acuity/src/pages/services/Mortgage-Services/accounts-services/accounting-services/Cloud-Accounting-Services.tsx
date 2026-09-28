import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const CloudAccountingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Cloud Accounting Services for Nimble Acuity
            </h2>
            <p className="text-lg text-gray-600">
              Get access to your financial data instantly, improve efficiency, and automate your accounting processes.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16">
            <p className="text-gray-700 leading-relaxed mb-6">
              Do you spend too much time on bookkeeping and financial management instead of growing your business? Partnering with <span className="font-medium">Nimble Acuity</span> for cloud accounting ensures all your accounting needs are handled efficiently and accurately.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As a trusted provider of <span className="font-medium">cloud accounting services</span>, Nimble Acuity leverages modern tools and technologies to deliver tailored solutions for your unique business needs. We have been helping businesses worldwide streamline their financial operations and achieve success for over two decades.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Cloud Accounting Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Financial Dashboard Creation:</strong> Accurate, error-free dashboards providing real-time insights into your financial health for smarter decision-making.
              </li>
              <li>
                <strong>Financial Management Services:</strong> Comprehensive handling of your finances using the latest cloud accounting software to ensure everything is in order.
              </li>
              <li>
                <strong>Workflow Streamlining Services:</strong> Streamlined, efficient, and accurate accounting workflows optimized with modern tools and technology.
              </li>
              <li>
                <strong>Information Backup Services:</strong> Reliable and secure backup solutions for all your cloud-based accounting data, keeping your information safe and accessible.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Flexible Pricing:</strong> Cost-effective plans designed to fit your business requirements and budget.</li>
              <li><strong>Information Security:</strong> ISO/IEC 27001:2022 ISMS certified, ensuring your financial data remains secure and private.</li>
              <li><strong>Skilled Professionals:</strong> Experienced cloud accounting experts who manage your finances with precision and ease.</li>
              <li><strong>World-Class Infrastructure:</strong> Access to the best cloud accounting software and international-standard offices for high-quality service delivery.</li>
              <li><strong>Dedicated Point of Contact:</strong> A single project manager ensures clear communication and efficient service.</li>
              <li><strong>Error-Free Services:</strong> ISO-certified processes guarantee error-free and top-quality cloud accounting systems.</li>
              <li><strong>Quick Turnaround:</strong> Multi-location operations across time zones allow fast delivery of services.</li>
              <li><strong>24/7 Customer Support:</strong> Support teams available round-the-clock to assist with questions or issues.</li>
              <li><strong>Highly Scalable:</strong> Easily scale services and team size to meet the evolving needs of your business.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Simplify Your Financial Management with Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Focus on growing your business while we handle your cloud accounting with precision, advanced tools, and expert professionals.
            </p>
            <p className="text-gray-700 mb-8">
              Ready to streamline your accounting and improve efficiency? <span className="font-medium">Contact us today and let Nimble Acuity help your business thrive.</span>
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

export default CloudAccountingServices;
