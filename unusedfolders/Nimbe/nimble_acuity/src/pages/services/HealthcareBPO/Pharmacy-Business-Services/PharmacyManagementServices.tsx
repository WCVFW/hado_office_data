import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const PharmacyManagementServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Pharmacy Management Services
            </h2>
            <p className="text-lg text-gray-600">
              Stay ahead in the competitive pharmacy retail space by adopting effective pharmacy management systems from <strong>Nimble Acuity</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Pharmacy chains are increasingly challenged by shrinking margins, a scarcity of skilled personnel, and reduced government support. <strong>Nimble Acuity</strong> has a proven track record of providing reliable and effective pharmacy solutions to customers globally.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our comprehensive Pharmacy Management Services are provided by skilled pharmacists with a minimum of 4-5 years of experience. Our customized solutions are designed to streamline your processes, reduce costs, save time, and improve the overall efficiency of your workforce.
            </p>
          </div>

          {/* Customized Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Customized Pharmacy Management Solutions
            </h3>
            <p className="text-gray-700 mb-4">
              Our innovative pharmacy management system helps smooth out workflow issues. For instance, prescription management and refill request management can be seamlessly linked to your managerial functions.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Refill Order Entry:</strong> Our system allows patients to request medicine refills from any location. We ensure thorough authentication and verification before fulfilling any orders.</li>
              <li><strong>New Facility Entry:</strong> We help you eliminate the time and operational costs of registering a new facility by setting up efficient workflow processes.</li>
              <li><strong>Refill Request Management:</strong> We set up a highly effective system to manage all your bulk refill orders in a simple, user-friendly, and cost-effective manner.</li>
              <li><strong>Emergency Kit Order Entry:</strong> Our team of pharmacy experts helps create different emergency kits, which can be customized and made available online for your customers.</li>
            </ul>
          </div>
          
          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Pharmacy Management to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Experienced Professionals:</strong> Our team consists of reputable pharmacy management experts with 5-10 years of experience in the pharmaceutical industry.</li>
              <li><strong>Focus on Your Bottom Line:</strong> We are a professional service provider that knows how to prioritize your profitability.</li>
              <li><strong>Innovative Solutions:</strong> Our team is passionate and motivated, with a creative streak that helps us complete every job perfectly.</li>
              <li><strong>Dynamic and Scalable:</strong> We provide dynamic and scalable solutions to streamline your retail pharmacy business mechanism.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Revamp Your Pharmacy Management with Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              The team at <strong>Nimble Acuity</strong> is well-aware of the challenges that can affect your business. As a professional pharmacy management service provider, we know how to prioritize your bottom line and propel your business toward profitability.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Hire us today to revamp your pharmacy management needs and provide simplified, transparent, and seamless services to your clients. We will be glad to partner with you.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Contact Us
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default PharmacyManagementServices;