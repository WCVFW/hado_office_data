import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const OrderProcessingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Streamline Your Customer Order Processing
            </h2>
            <p className="text-lg text-gray-600">
              Is your organization losing momentum due to slow or inefficient order fulfillment? Nimble Acuity helps you reduce costs, boost efficiency, and improve customer satisfaction so you can focus on growing your business with confidence.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16">
            <p className="text-gray-700 leading-relaxed mb-6">
              Order processing is critical for any business. Managing it in-house can be expensive, time-consuming, and distract your team from core business goals. Nimble Acuity’s expert services streamline this process, giving you a competitive edge and freeing resources to focus on growth.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By partnering with Nimble Acuity, you gain access to proven processes, experienced professionals, and advanced technology, ensuring orders are handled efficiently, accurately, and securely.
            </p>
          </div>

          {/* Why Outsource */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Your Order Processing?
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Your team is overwhelmed:</strong> Overworked staff struggle to handle orders accurately and on time, causing backlogs and frustrated customers.</li>
              <li><strong>You're losing focus:</strong> In-house processing consumes management time better spent on core business functions.</li>
              <li><strong>Compliance is a headache:</strong> Managing complex legal and regulatory obligations in-house drains resources.</li>
              <li><strong>Costs are out of control:</strong> Rising overhead for in-house teams eats into profits.</li>
              <li><strong>You lack the right tools:</strong> Without modern technology and proven processes, fast and error-free order processing is difficult.</li>
            </ul>
          </div>

          {/* Nimble Acuity Advantage */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              The Nimble Acuity Advantage
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Cost Savings & Efficiency:</strong> Reduce operational costs while ensuring orders are handled accurately and on time. We manage the effort of recruiting, training, and supervising staff.</li>
              <li><strong>Focus on Growth:</strong> Redirect time, money, and effort to product development, sales, and marketing.</li>
              <li><strong>Proven Process:</strong> Our streamlined workflow integrates seamlessly with your platform, keeping your supply chain moving smoothly.</li>
              <li><strong>Data Security:</strong> Advanced security measures, SLAs, and NDAs ensure complete confidentiality.</li>
              <li><strong>Experienced Team:</strong> Over two decades of experience across industries, with analysts, project managers, and customer support experts handling your orders efficiently.</li>
              <li><strong>Flexible & Scalable:</strong> Services designed to scale with your business, whether you handle a few orders or thousands.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Boost Your Business?
            </h3>
            <p className="text-gray-700 mb-6">
              Focus on what matters most—innovation, sales, and growth—while Nimble Acuity handles your order processing with speed and precision.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Contact us today to get started!</span>
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

export default OrderProcessingServices;
