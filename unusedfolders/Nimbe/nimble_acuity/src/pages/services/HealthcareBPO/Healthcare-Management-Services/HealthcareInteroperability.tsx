import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const HealthcareInteroperability: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Healthcare Interoperability Services
            </h2>
            <p className="text-lg text-gray-600">
              Unlock the power of interoperability and optimize your healthcare outcomes with our services, starting at $1280-$1440 per FTE/month.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Do you want to improve the performance of your healthcare center with effective interoperability solutions? Are you on the lookout for a trustworthy company that provides compliant turnkey solutions to seamlessly integrate enterprise-wide electronic health data? If you want to receive the best help for interoperability in healthcare, you are at the right place.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>nimble acuity</strong> is a leading provider of healthcare interoperability services. We have a turnkey platform that seamlessly integrates with enterprise applications and creates effortless solutions for healthcare management. Our interactive services help you convert your application data into interoperable resources. With a professional team of healthcare experts, we aim to create a place for interoperability in healthcare in an efficient manner.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Healthcare Interoperability Solutions We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Interoperability Strategy Design:</strong> We perform maturity assessments to create accurate execution maps, moving you toward digital transformation.</li>
              <li><strong>Health Data Management:</strong> Our professionals leverage advanced technologies to provide helpful insights into the transformation of healthcare data.</li>
              <li><strong>API Management:</strong> Our intuitive platform supports app registration, authentication, and API management to ensure secure and seamless data exchange.</li>
              <li><strong>Support and Implementation Services:</strong> We provide immaculate integration solutions, including monitoring and maintenance assistance.</li>
              <li><strong>Consumer Consent Management:</strong> Our services help you manage consumer requests and securely save data without compromising patient privacy.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Interoperability?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing:</strong> Our crucial interoperability solutions are highly affordable, making them accessible even for clients with smaller budgets.</li>
              <li><strong>High-Quality:</strong> We are ISO-certified and use streamlined processes to provide relevant and up-to-date solutions.</li>
              <li><strong>Experienced Professionals:</strong> Our skilled professionals have years of relevant experience and are trained to handle complicated projects.</li>
              <li><strong>Data Security:</strong> We take data security very seriously, ensuring your information is used judiciously and never shared with a third party.</li>
              <li><strong>Short Turnaround:</strong> Our services are delivered in a record-fast time to ensure you get quick results.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Patient Demographics Entry:</strong> Our medical billing specialists meticulously processed over 1,200 claims a month for a Georgia-based healthcare provider.</li>
              <li><strong>Medical Claims Processing:</strong> Our team processed over 17,000 medical claims a month for a Texas-based client, utilizing Kareo software.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "I want to thank you both for the great job you are doing. I could not be happier with my decision to work with you. I am looking forward to our continued relationship and growth."
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              — Owner, Medical Billing Services Company, California, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Get Turnkey Healthcare Interoperability Support at Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              We are a leading healthcare interoperability company providing seamless and effective solutions to a global clientele. Our interoperability solutions help you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Exchange and interpret health record data from various applications.</li>
              <li>Standardize and streamline communication among multiple healthcare systems.</li>
              <li>Improve care quality and deliver superior health outcomes.</li>
            </ul>
            <p className="text-gray-700 mb-8 font-medium">
              You are just a click away from optimizing your healthcare outcomes by integrating enterprise-wide health record data.
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

export default HealthcareInteroperability;