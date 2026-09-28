import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const EMRServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              EMR Services
            </h2>
            <p className="text-lg text-gray-600">
              Leverage the latest EMR technology for precise billing, revenue cycle,
              and workflow management with our consolidated EMR solutions.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you struggling to streamline resource-intensive administrative tasks? 
              Do you lack in-house expertise to create EMR solutions for your practice?
            </p>
            <p className="text-gray-700 leading-relaxed">
              Hospitals and clinics are exploring ways to boost productivity, reduce wastage, 
              and improve patient satisfaction while staying competitive. If you need customized 
              EMR solutions aligned with your workflows, <strong>Nimble Acuity</strong> is your 
              trusted partner.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With <strong>20+ years of experience</strong>, we deliver comprehensive EMR services 
              worldwide — simplifying clinical processes, optimizing efficiency, and ensuring a 
              high return on investment.
            </p>
          </div>

          {/* Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              EMR Solutions We Offer
            </h3>
            <p className="text-gray-700 mb-4">
              Our team provides EMR services for clinics, practitioners, and multi-specialty hospitals. 
              Solutions are customizable, template-based, and tailored to your practice style:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>EMR Software Development:</strong> Custom solutions to record, analyze, and integrate all medical data.</li>
              <li><strong>EMR Integration Services:</strong> Manage unstructured content like faxes and images seamlessly.</li>
              <li><strong>EMR Data Entry:</strong> Improve accuracy and efficiency in clinical and billing workflows.</li>
              <li><strong>Virtual EMR Services:</strong> Consolidated patient records for complete accessibility.</li>
              <li><strong>EMR Data Migration:</strong> Move legacy data into modern EMR infrastructures.</li>
              <li><strong>Cardiology, Dermatology & Neurology EMR:</strong> Specialty-specific workflow and patient management solutions.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              EMR Support Services Process Flow
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Discovery:</strong> Deep analysis of client needs.</li>
              <li><strong>Planning & Design:</strong> Optimized EMR features and UI.</li>
              <li><strong>Development:</strong> Custom EMR/EHR system built to specifications.</li>
              <li><strong>Testing:</strong> Ensuring accuracy and reliability with real-time feedback.</li>
              <li><strong>Reporting & Feedback:</strong> Continuous improvements via client inputs.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Us as Your EMR Company
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified Provider:</strong> ISO 9001:2015 accredited, HIPAA-compliant experts.</li>
              <li><strong>Secure Data Management:</strong> Role-based access, SSL encryption, and 24/7 monitoring.</li>
              <li><strong>Quality Guarantee:</strong> Dedicated QA experts ensure compliance with global standards.</li>
              <li><strong>Fast Turnaround:</strong> Quick and cost-effective implementation with minimal disruption.</li>
              <li><strong>Scalability:</strong> Flexible solutions tailored to your exact needs.</li>
              <li><strong>Cost Savings:</strong> Reduce operational costs by 40-50% via outsourcing.</li>
              <li><strong>Experienced Team:</strong> Licensed medical professionals trained on latest EMR tools.</li>
              <li><strong>Advanced Infrastructure:</strong> Cloud-ready, secure, and integrated platforms.</li>
              <li><strong>24/7 Availability:</strong> Round-the-clock support across time zones.</li>
            </ul>
          </div>

          {/* Additional Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Additional Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Medical Transcription Services</li>
              <li>Medical Billing Services</li>
              <li>Medical Coding Services</li>
              <li>Healthcare Revenue Cycle Management</li>
            </ul>
          </div>

          {/* Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Customer Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Research & DME Billing:</strong> Supported insurer negotiations with critical research data.</li>
              <li><strong>Rehabilitation Transcription:</strong> Migrated 3000+ cases into a new EHR system with complete accuracy.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource EMR Services to Streamline Your Online Records
            </h3>
            <p className="text-gray-700 mb-6">
              With <strong>20+ years of expertise</strong> serving global healthcare providers, 
              we deliver flexible, reliable, and secure EMR services that transform efficiency 
              and patient care.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to optimize your EMR processes? Let’s talk.
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
export default EMRServices;
