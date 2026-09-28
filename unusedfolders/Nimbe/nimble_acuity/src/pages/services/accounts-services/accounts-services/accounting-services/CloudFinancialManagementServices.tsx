import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const CloudFinancialManagementServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Cloud Financial Management Services
            </h2>
            <p className="text-lg text-gray-600">
              Automate financial resources and boost operational efficiency with our expert services, starting at just $12/hour.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Have you moved your business to the cloud but are now struggling to manage your financial operations? Are you finding it difficult to consolidate multiple financial platforms to enhance operational efficiency? We can help you leverage the best technology and services to address all your financial management needs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity is a leading provider of accounting and financial management services to companies worldwide. We help you deploy the best tools and tactics for quick and easy financial management, allowing you to optimize processes and reduce downtime across cloud platforms. Our team of expert professionals will ensure your needs for a functional cloud financial management framework are met efficiently.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Cloud Financial Management Solutions
            </h3>
            <p className="text-gray-700 mb-6">
              We are a leading provider of cloud financial management services and can help you address a wide range of financial management and cost optimization requirements. Our services include:
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Cloud Cost Visibility</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Gain granular visibility across different cloud environments to understand which projects and departments are increasing cloud usage and costs.</li>
                  <li>Track resource consumption and reduce miscalculations with our precise cloud solutions.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Workflow Streamlining Services</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Eliminate tedious, resource-intensive processes to streamline your workflows.</li>
                  <li>Benefit from the expertise of our managers who provide insights based on years of experience across various industries.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Cloud Cost Optimization</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Quickly identify opportunities to reduce operational overhead.</li>
                  <li>Receive custom recommendations to optimize costs and terminate unused assets for better efficiency.</li>
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
              <li><strong>Cost-Effective:</strong> Our services are highly affordable, and you only pay for the solutions you choose, allowing you to focus on business growth.</li>
              <li><strong>Data Security:</strong> As an ISO/IEC 27001:2022-certified company, we take all necessary steps to ensure your valuable data is kept safe and secure.</li>
              <li><strong>Expert Team:</strong> Our accountants and bookkeepers are highly qualified professionals with first-hand knowledge of all major cloud-based financial systems.</li>
              <li><strong>Quick Turnaround Time:</strong> We deliver results in record time, so you don't have to wait for the insights you need.</li>
              <li><strong>Advanced Tools:</strong> Our team uses the latest cloud financial management software and technologies to provide customized, cutting-edge solutions.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Revolutionize Your Financial Operations
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a leading provider of scalable and reliable financial management services with years of experience. Our expert team of skilled professionals is dedicated to offering seamless financial management services for your cloud resources.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Get quick, reliable, and powerful cloud financial management solutions that help you drive innovation and make data-driven decisions.</span>
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

export default CloudFinancialManagementServices;