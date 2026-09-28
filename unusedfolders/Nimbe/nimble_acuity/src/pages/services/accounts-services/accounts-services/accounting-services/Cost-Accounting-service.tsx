import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const CostAccounting = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Cost Accounting Services
            </h2>
            <p className="text-lg text-gray-600">
              Accurate financial records are the backbone of a successful business. With Nimble Acuity, you gain the insights needed to track, evaluate, and optimize profits — while saving costs compared to hiring full-time professionals.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a trusted provider of **cost accounting services** for businesses of all sizes. With years of experience and a skilled team of accounting professionals, we ease the burden of managing cost accounting so you can focus on growing your business with confidence.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Cost Accounting Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost Accounting System:</strong> We establish tailored cost accounting systems that ensure precise profit estimates, cost control, and smarter financial decision-making.</li>
              <li><strong>Accounting Records:</strong> Our experts handle the creation, maintenance, and updating of records to help you maximize profits and avoid costly errors.</li>
              <li><strong>Auditing:</strong> Regular audits ensure your cost accounting records remain error-free and compliant with industry standards.</li>
              <li><strong>Reports & Analysis:</strong> We provide detailed cost analysis reports to highlight improvement areas and support effective resource allocation.</li>
              <li><strong>Performance Management:</strong> Our specialists use data-driven insights to optimize your business’s resource allocation, leading to higher performance and profitability.</li>
            </ul>
          </div>

          {/* Our Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Cost Accounting Process
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Analysis:</strong> We start by analyzing your business requirements and create a detailed project scope with timelines and pricing.</li>
              <li><strong>Data Entry:</strong> Once approved, our team processes your files and inputs data for accurate analysis.</li>
              <li><strong>Analysis & Reporting:</strong> We conduct a deep cost analysis and generate comprehensive reports tailored to your business.</li>
              <li><strong>Delivery:</strong> The final report is securely delivered, including our recommendations to optimize costs and performance.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing:</strong> Our services are cost-effective, ensuring that businesses of all sizes can benefit from professional expertise.</li>
              <li><strong>Flexible Solutions:</strong> Our offerings are customizable to meet your specific needs without compromising industry compliance.</li>
              <li><strong>Professional Expertise:</strong> Our team consists of carefully selected, highly skilled accountants with proven industry experience.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Optimize Your Costs and Boost Profitability
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity provides the expert support you need to streamline your cost accounting processes. Our tailored solutions and industry expertise help you make smarter financial decisions and achieve long-term growth.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to take control of your costs?</span>
              Contact us today to discuss your accounting needs and get started.
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

export default CostAccounting;