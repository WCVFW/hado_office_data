import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const SleepMedicineEMR: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Sleep Medicine EMR Services
            </h2>
            <p className="text-lg text-gray-600">
              Boost productivity, reduce waste, meet patient needs effectively, and manage resources efficiently with our expert <strong>Sleep Medicine EMR services</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Is your organization lacking the right resources to manage sleep medicine EMR services? <strong>Nimble Acuity</strong> provides skilled EMR specialists who leverage the latest tools and technologies to deliver high-quality, error-free services tailored to your practice needs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our sleep medicine EMR services ensure your workflows are streamlined, patient data is accurately recorded, and your practice is compliant with industry standards.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Sleep Medicine EMR Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 columns-1 sm:columns-2">
              <li>Procedure orders and results</li>
              <li>Consultation letters</li>
              <li>Consultation reports</li>
              <li>Patient education</li>
              <li>Consultation order custom lists</li>
              <li>Procedure order custom lists</li>
              <li>Sleep lab electronic data</li>
              <li>Epworth sleepiness scale</li>
              <li>Inventory tracking</li>
              <li>Polysomnography diagnostics</li>
              <li>Disease care review</li>
            </ul>

            <h4 className="text-xl font-semibold text-[#006A7C] mt-8 mb-4">
              Specialized Sleep Medicine Templates
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Bruxism</li>
              <li>Hypoxia</li>
              <li>Narcolepsy</li>
              <li>Parasomnia</li>
              <li>Bedwetting</li>
              <li>Delayed Sleep Phase Disorder</li>
              <li>Insomnia</li>
              <li>Restless Leg Syndrome</li>
              <li>Somnolence</li>
              <li>Sleep Walking</li>
              <li>Sleep Paralysis</li>
              <li>Sleep Apnea</li>
              <li>Septoplasty</li>
              <li>Sleep Medicine Patient Education</li>
              <li>Sleep Talking</li>
              <li>Sleep Terror</li>
              <li>Snoring</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Sleep Medicine EMR Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing Options:</strong> Customized pricing tailored to your requirements and budget.</li>
              <li><strong>Information Security:</strong> ISO/IEC 27001:2022 certified to ensure data confidentiality and authorized access only.</li>
              <li><strong>Best Infrastructure:</strong> Access to the latest EMR software and world-class office spaces for error-free delivery.</li>
              <li><strong>HIPAA Compliance:</strong> Ensures patient data is protected and not shared with unauthorized parties.</li>
              <li><strong>Error-free Services:</strong> ISO-certified processes to deliver high-quality, accurate EMR services consistently.</li>
              <li><strong>Dedicated Manager:</strong> Single point of contact to manage your project and resolve issues efficiently.</li>
              <li><strong>24/7 Support:</strong> Round-the-clock assistance for queries, project management, and service delivery.</li>
              <li><strong>Experienced Team:</strong> Skilled EMR specialists trained on the latest tools for fast, high-quality service.</li>
              <li><strong>Scalable Services:</strong> Flexible resource allocation to meet project demands and changing requirements.</li>
              <li><strong>Quick Turnaround Time:</strong> Global delivery locations allow fast, efficient, and timely service completion.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Sleep Medicine EMR Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with <strong>Nimble Acuity</strong> for skilled, reliable, and cost-effective sleep medicine EMR services tailored to your practice requirements.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today to get started with an experienced EMR service provider.
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

export default SleepMedicineEMR;
