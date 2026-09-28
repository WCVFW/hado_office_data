import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const SpendAnalysisServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Spend Analysis Services
            </h2>
            <p className="text-lg text-gray-600">
              Derive key insights from your spend data and streamline your processes with our expert spend analysis services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Is your internal team struggling to make sense of all your spending data and derive key insights? Are you on the lookout for highly skilled and experienced spend analysis experts who can take care of all your needs? Outsourcing spend analysis to a trusted provider is your best option.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity is a premier spend analysis service provider and your one-stop shop for all your needs. Our team of experts leverages the latest tools and technologies to deliver top-notch spend analysis services with precision and efficiency.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Spend Analysis Solutions
            </h3>
            <p className="text-gray-700 mb-6">
              With over two decades of experience, we tailor our solutions to meet each customer’s unique requirements. Our key services include:
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Data Enrichment Services</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Aggregate, normalize, and enrich diverse types of spend data in a streamlined and accurate manner.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Attribute Comparison & Strategic Sourcing</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Deliver accurate attribute comparisons using the latest spend analysis tools.</li>
                  <li>Provide strategic sourcing solutions that boost cost savings and reduce sourcing cycle times.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Contract Compliance Improvement</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Ensure all spend data is compliant with industry standards by leveraging advanced tools and proven methods.</li>
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
              <li><strong>Affordable Pricing:</strong> We offer flexible and affordable packages designed to fit your budget.</li>
              <li><strong>Data Security:</strong> As an ISO/IEC 27001:2022 ISMS certified company, we ensure your spend data is always secure.</li>
              <li><strong>High-Quality Services:</strong> Our ISO-certified processes guarantee accuracy and error-free results.</li>
              <li><strong>Experienced Analysts:</strong> Our team of seasoned experts delivers insights quickly and effectively.</li>
              <li><strong>Dedicated Manager:</strong> A single point of contact streamlines all your service needs.</li>
              <li><strong>Scalable Services:</strong> We offer flexible capacity to ramp up resources as your requirements grow.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Transform Your Spend Data into Actionable Insights
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has been a pioneer in delivering quality spend analysis and accounting services to global clients. Our experienced experts leverage advanced tools and technologies to provide tailored, accurate solutions.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Get in touch with us today to partner with a reliable and cost-effective spend analytics provider.</span>
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

export default SpendAnalysisServices;