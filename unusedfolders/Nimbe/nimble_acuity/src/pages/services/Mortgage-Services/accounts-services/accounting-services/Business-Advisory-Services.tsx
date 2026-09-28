import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const BusinessAdvisoryServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Business Advisory Services
            </h2>
            <p className="text-lg text-gray-600">
              Propel your business to new heights of growth and profitability with our expert business advisory services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you facing challenges in your business, regardless of its size? Do you need sound advice to make the right decisions? Whether you're a sole proprietor or part of a management team, our business advisory services can provide the strategic guidance you need. We offer proactive compliance and planning services to help you navigate new ventures and overcome obstacles.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity is a leading provider of business advisory services, offering comprehensive solutions from business commencement to cessation. Our services include packaged accounting, financial, strategic, tax, and VAT planning solutions for businesses across all sectors. When you partner with us, you get a dedicated team of qualified and experienced specialists chosen to meet your specific needs. We ensure all your personal compliance and business requirements are met with maximum efficiency.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Business Advisory Services
            </h3>
            <p className="text-gray-700 mb-6">
              With over 6 years of experience, Nimble Acuity offers a comprehensive range of advisory solutions designed to strengthen your business and guide it toward sustainable growth.
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Succession Services:</strong> Helping clients, including family businesses, create tax-efficient and robust succession plans. We also support family MBOS and MBIs to secure the future of your business and your retirement with a pragmatic, personal approach.
              </li>
              <li>
                <strong>Diversification Services:</strong> Assisting profitable businesses to diversify and build resilience. If your company is reliant on a single product or customer, we help identify new areas for growth and improvement to increase capital value.
              </li>
              <li>
                <strong>Growth Services:</strong> Crafting robust expansion plans using the latest technologies and proven workflows. We help you evaluate data, build strategy, and ensure your next steps lead to success.
              </li>
              <li>
                <strong>Restructuring Services:</strong> Guiding businesses through bold decisions when challenges arise. Our experts identify profitable segments, remove underperforming areas, and help you restructure to remain on a growth trajectory.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Services:</strong> Cost-effective solutions from a team of seasoned advisors delivering exceptional value.</li>
              <li><strong>Data Security:</strong> Your financial and company data is handled with strict confidentiality and top security standards.</li>
              <li><strong>Quick Turnaround Times:</strong> Fast delivery of advisory solutions, helping you act on time-sensitive opportunities.</li>
              <li><strong>High-Quality Services:</strong> Competent and experienced advisors delivering reliable, impactful guidance.</li>
              <li><strong>Robust Process:</strong> Proven workflows and advanced tools ensure efficiency and accuracy in all services.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Drive Growth with Expert Business Advisory
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity’s Business Advisory Services are designed to give you the strategic edge needed to tackle challenges and achieve success.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Let our experts guide you every step of the way.</span> Contact us today to start shaping your business future with confidence.
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

export default BusinessAdvisoryServices;
