import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const ManagementAdvisoryServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Management Advisory Services
            </h2>
            <p className="text-lg text-gray-600">
              Outsource management advisory services to Nimble Acuity and enhance your business performance with expert insights, strategies, and actionable recommendations.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Facing constant financial, competitive, and regulatory pressures? Outsourcing **management advisory services** ensures your organization gains access to high-level business intelligence, expert insights, and strategic guidance to solve complex business challenges.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** provides comprehensive management advisory solutions, including risk management, performance improvement, strategy formulation, digital transformation, and operations optimization, delivered by seasoned professionals with years of consulting and business experience.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Management Advisory Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Financial Performance Improvement:</strong> Data-driven insights to forecast financial issues, enhance performance, and implement automation tools for the finance function.</li>
              <li><strong>Business Strategy Services:</strong> Formulate and optimize business strategies to respond to market shifts, capitalize on opportunities, and balance short-term and long-term goals.</li>
              <li><strong>Digital Transformation:</strong> Build digital solutions and strategies to increase operational potential, drive innovation, and adapt to evolving market trends.</li>
              <li><strong>Operations & Supply Chain Management:</strong> Optimize supply chains for cost efficiency, agility, risk management, and service excellence, enhancing competitive advantage.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Management Advisory Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Services:</strong> Access seasoned management experts at a fraction of the cost of in-house teams or consulting firms.</li>
              <li><strong>Data Security:</strong> All shared business information remains confidential, protected with NDAs and robust protocols.</li>
              <li><strong>Quick Turnaround Times:</strong> Efficient execution ensures timely delivery of projects and advisory reports.</li>
              <li><strong>Superb Infrastructure:</strong> International-standard offices and modern tools enable top-quality advisory services.</li>
              <li><strong>Customized Solutions:</strong> Tailored advisory services designed to enhance efficiency, cut costs, and capitalize on opportunities.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Unlock Your Business's Full Potential
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity provides the expert guidance you need to solve complex business challenges. Our seasoned professionals deliver strategic insights and actionable recommendations to help you navigate market pressures, optimize operations, and achieve sustainable growth.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to enhance your business performance?</span>
              Contact us today to discuss your management advisory needs.
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

export default ManagementAdvisoryServices;