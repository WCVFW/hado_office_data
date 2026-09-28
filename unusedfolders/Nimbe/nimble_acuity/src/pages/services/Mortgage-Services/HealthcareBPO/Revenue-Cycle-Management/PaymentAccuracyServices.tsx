import React from "react";
import HealthcareHeader from "@/pages/services/HealthcareBPO/HealthcareHeader";
import { Link } from "react-router-dom";

const PaymentAccuracyServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Payment Accuracy Services
            </h2>
            <p className="text-lg text-gray-600">
              Get access to additional savings opportunities and supplement your existing payment options by choosing our services at prices starting at just <strong>$1280 per FTE per month</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Are you looking for ways to get additional savings opportunities and supplement your existing payment options? Are you on the lookout for skilled resources who can take care of all your requirements? Then the best option for you would be to outsource payment accuracy services to an experienced and skilled provider.
            </p>
            <p>
              <strong>Nimble Acuity</strong> is a leading payment accuracy service provider that can cater to all your requirements with ease. We have some of the most experienced and skilled payment accuracy experts who can cater to all your needs. We leverage the latest tools and technologies while delivering top-notch services to clients.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Payment Accuracy Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Payment Policy Management:</strong> Our team leverages the latest tools to deliver top-notch services, catering to all your payment policy management needs.</li>
              <li><strong>Coding Validation:</strong> Ensure accurate and efficient coding validation using advanced tools and expert oversight.</li>
              <li><strong>Payment Data Validation:</strong> Thorough validation of payment data for error-free reimbursements and compliance.</li>
              <li><strong>Contract Compliance Services:</strong> Customized services to ensure contract terms and policies are correctly followed.</li>
              <li><strong>FWA Management Services:</strong> Accurate and efficient management of Fraud, Waste, and Abuse (FWA) in claims processing.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Why Choose Nimble Acuity for Payment Accuracy Services?
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Affordable Pricing Options:</strong> Flexible and cost-effective plans tailored to your business requirements.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 ISMS certified, ensuring all shared data remains secure.</li>
              <li><strong>HIPAA Compliant Services:</strong> HIPAA agreements ensure patient-related data is protected at all times.</li>
              <li><strong>World-class Infrastructure:</strong> Access to the latest tools and technologies with a well-equipped workspace.</li>
              <li><strong>Error-free Services:</strong> ISO-certified processes guarantee high-quality, accurate results.</li>
              <li><strong>Dedicated Manager:</strong> Single Point of Contact (SPOC) for all your payment accuracy requirements.</li>
              <li><strong>Experienced Team:</strong> Skilled specialists managing all aspects of payment accuracy efficiently.</li>
              <li><strong>24/7 Customer Support:</strong> Round-the-clock assistance to resolve any issues promptly.</li>
              <li><strong>Highly Scalable Services:</strong> Ability to scale up resources and services as your business needs grow.</li>
              <li><strong>Short Turnaround Time:</strong> Global delivery locations enable quick and high-quality service delivery.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-3xl font-bold text-[#006A7C] mb-4">
              Outsource Payment Accuracy Services to Nimble Acuity
            </h3>
            <p className="text-gray-600 mb-6">
              Nimble Acuity is a leading provider of payment accuracy services and other revenue cycle management solutions to global clients. We leverage the latest tools and technologies while delivering top-quality services.
            </p>
            <p className="text-gray-600 mb-8 font-medium">
              If you are looking for a reliable and efficient payment accuracy service provider, you have come to the right place.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get in Touch Today
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default PaymentAccuracyServices;
