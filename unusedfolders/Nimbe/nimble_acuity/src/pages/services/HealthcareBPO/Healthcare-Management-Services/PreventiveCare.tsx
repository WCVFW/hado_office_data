import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const PreventiveCare: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Preventive Care Services
            </h2>
            <p className="text-lg text-gray-600">
              Our Medicare preventive care services help healthcare organizations transition from traditional to more preventive approaches. Join 150+ customers who have benefited from our healthcare BPO services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              In the present times, the success of healthcare industries depends on the success rate of treatment and preventive care. With value-based preventive services, patients can get a faster diagnosis and treatment to control the spread of disease. At <strong>nimble acuity</strong>, we have helped over 18,000 clients transition to more preventive methods. We collaborate with your team to help your patients take control of their health and make informed decisions about their condition.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Preventive Healthcare Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Preventive Healthcare Support:</strong> Our expert managers assist with patient monitoring and health check-ups, ensuring that preventive steps are taken early.</li>
              <li><strong>Annual Check-ups:</strong> We facilitate annual check-ups so patients can detect ailments early and receive timely treatment.</li>
              <li><strong>Care Management:</strong> We improve care management outcomes by assigning each patient a preventive healthcare assistant to guide them through their journey.</li>
              <li><strong>Screening Services:</strong> Our experts conduct annual screenings to detect diseases in their early stages, providing patients with a better chance for early treatment.</li>
              <li><strong>Patient Support Services:</strong> We offer dedicated patient support with round-the-clock services to take care of the nitty-gritty.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Preventive Healthcare?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Rates:</strong> We provide highly affordable pricing options to suit your budget and business requirements. Prices start at $1280/FTE/month.</li>
              <li><strong>Data Security:</strong> We take data security extremely seriously, with every precaution taken to safeguard patient data.</li>
              <li><strong>HIPAA Compliance:</strong> We offer HIPAA-compliant services, ensuring your patient data and medical records are safe and will not be divulged to any third party.</li>
              <li><strong>Advanced Infrastructure:</strong> Our systems are updated with the latest software and we are equipped with the latest tools for preventive check-ups and screenings.</li>
              <li><strong>Experienced Team:</strong> Our globally qualified experts offer customized solutions to cater to your unique business needs.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Patient Demographics Entry:</strong> Our medical billing specialists processed over 1,200 claims a month for a Georgia-based healthcare provider with 98% accuracy.</li>
              <li><strong>Medical Claims Processing:</strong> Our team processed over 17,000 medical claims a month for a Texas-based client, utilizing Kareo software to key in charge and demographic details.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "I want to thank you for the professional way in which you are managing the project and meeting our deadlines."
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              — CEO, Medical Company, UK
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Preventive Care Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              As a premier service provider, we offer an extensive preventive care network and a range of healthcare BPO services to clients around the globe. Our team comprises talented and skilled experts who provide fast, streamlined, and accurate solutions.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> for cutting-edge services at the best rates.
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

export default PreventiveCare;