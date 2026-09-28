import React from 'react';
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import { Link } from "react-router-dom";

const FamilyPracticeBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Family Practice Billing: Maximize Your Revenue and Minimize Your Stress
            </h2>
            <p className="text-lg text-gray-600">
              Struggling with timely communication and documentation with insurers? 
              Tired of billing frustrations and chasing payments? It’s time to shift 
              focus back to patient care. By outsourcing your family practice billing, 
              you can reduce costs, eliminate stress, and free up valuable time for 
              what matters most—your patients.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At <strong>nimble acuity</strong>, we bring over two decades of medical billing 
              and coding expertise. Our systematic, streamlined approach ensures you get 
              paid accurately and on time while we handle your critical financial workflows.
            </p>
          </div>

          {/* Comprehensive Billing Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Billing Services
            </h3>
            <p className="text-gray-700 mb-4">
              With 6+ years of experience, our billing experts manage diverse specialties 
              with precision and compliance:
            </p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-700 list-disc list-inside">
              <li>Internal Medicine</li>
              <li>Pediatrics</li>
              <li>Geriatrics</li>
              <li>Immunization</li>
              <li>Cardiology</li>
              <li>Dermatology</li>
              <li>Urology</li>
              <li>Orthopedics</li>
              <li>Physical Therapy</li>
              <li>Psychiatry</li>
              <li>Radiology</li>
              <li>Surgery</li>
              <li>Sports Medicine</li>
              <li>Sleep Medicine</li>
              <li>Hospice & Palliative Medicine</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose nimble acuity for Your Billing Needs?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost-Effective Solutions:</strong> Flexible, affordable options that reduce overhead.</li>
              <li><strong>Unwavering Data Security:</strong> ISO/IEC 27001:2022 and HIPAA-compliant safeguards.</li>
              <li><strong>Error-Free Services:</strong> ISO 9001:2015 certified processes ensure accuracy.</li>
              <li><strong>Dedicated Support:</strong> A project manager assigned as your single point of contact.</li>
              <li><strong>24/7 Availability:</strong> Always available via phone or email for quick resolutions.</li>
              <li><strong>Scalable Solutions:</strong> Adjust services easily as your practice grows.</li>
              <li><strong>Quick Turnaround:</strong> Multiple delivery centers provide 6–12 hour results.</li>
              <li><strong>Experienced Experts:</strong> A highly trained team with 100+ years of combined expertise.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Boost Collections and Free Up Time?
            </h3>
            <p className="text-gray-700 mb-6">
              Don’t let billing challenges slow you down. With 
              <strong> nimble acuity</strong>, you gain a proven partner that streamlines 
              back-end processes, reduces errors, and ensures a higher reimbursement rate.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today for efficient, error-free family practice billing services 
              tailored to your needs.
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

export default FamilyPracticeBilling;
