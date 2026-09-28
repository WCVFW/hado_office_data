import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const FinanceTransformationServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Nimble Acuity: Finance Transformation Services
            </h2>
            <p className="text-lg text-gray-600">
              Adapt to the changing needs of your business and focus on your core competencies with our finance transformation services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking to modernize your finance function and free up internal resources? Do you need skilled experts to guide your finance transformation? Partnering with an experienced provider like Nimble Acuity is the ideal solution.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity offers top-notch finance transformation services tailored to your specific needs. Our team of experienced financial experts leverages the latest tools and technologies to deliver exceptional services efficiently and effectively.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Finance Transformation Services
            </h3>
            <p className="text-gray-700 mb-6">
              With over two decades of experience, Nimble Acuity provides customized finance transformation solutions that align with your business objectives:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Finance Transformation Strategy:</strong> We develop comprehensive strategies using the latest tools and technologies to deliver high-quality results on time.
              </li>
              <li>
                <strong>Business Finance Services:</strong> Accurate, error-free services powered by advanced financial tools for maximum reliability.
              </li>
              <li>
                <strong>Operational Finance Services:</strong> Tailored solutions with quick turnaround times to meet your unique operational finance needs.
              </li>
              <li>
                <strong>Finance Functions Optimization:</strong> Infrastructure-driven optimization to streamline processes and boost overall efficiency.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing:</strong> Flexible, cost-effective pricing tailored to your budget.</li>
              <li><strong>Skilled Financial Experts:</strong> Experienced consultants who excel at modernizing finance operations.</li>
              <li><strong>State-of-the-Art Infrastructure:</strong> Access to cutting-edge financial transformation tools and global office standards.</li>
              <li><strong>Dedicated Manager:</strong> A single point of contact ensures seamless communication and accountability.</li>
              <li><strong>Superior Quality:</strong> ISO-certified processes guarantee accuracy and error-free services.</li>
              <li><strong>Short Turnaround Time:</strong> Multiple delivery centers across time zones ensure fast results.</li>
              <li><strong>24/7 Support:</strong> Round-the-clock support from our customer service, sales, and project management teams.</li>
              <li><strong>Easily Scalable Services:</strong> The flexibility to expand services and resources as your needs grow.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Transform Your Finance Function with Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              From strategy to operations, Nimble Acuity delivers scalable, secure, and cost-effective finance transformation solutions.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Empower your business with modern finance practices.</span> Get in touch today to start your transformation journey.
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

export default FinanceTransformationServices;
