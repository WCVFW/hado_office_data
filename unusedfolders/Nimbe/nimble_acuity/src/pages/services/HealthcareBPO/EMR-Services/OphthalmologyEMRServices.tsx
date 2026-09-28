import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const OphthalmologyEMRServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Ophthalmology EMR Services
            </h2>
            <p className="text-lg text-gray-600">
              <strong>Nimble Acuity</strong> delivers managed, compliant, and cost-effective 
              ophthalmology EMR solutions that eliminate administrative challenges 
              and reduce operating expenses.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Ophthalmology is a highly specialized field requiring tailored EMR solutions that 
              match the unique practice styles of ophthalmologists. To provide efficient, 
              faster patient care while minimizing administrative overhead, practices need 
              streamlined technology and automation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Nimble Acuity</strong> partners with global healthcare institutions, 
              network hospitals, clinics, ophthalmology departments, and independent practitioners 
              to deliver customized EMR support. Our advanced, intuitive solutions simplify workflows 
              and eliminate operational challenges.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Ophthalmology EMR Services We Offer
            </h3>
            <p className="text-gray-700 mb-4">
              We deliver solutions tailored for ophthalmology practices. Our offerings include:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Ophthalmology EMR Consulting:</strong> Guidance on new tool implementation, 
                upgrades, hardware, security, database management, and staff training — with fully 
                managed consulting services.
              </li>
              <li>
                <strong>Tool Migration & Integration:</strong> Seamless transition from legacy systems 
                with integration across hospitals, labs, pharmacies, insurance providers, and diagnostic 
                systems (retinal scans, eye tests, reports).
              </li>
              <li>
                <strong>Forms & Templates Customization:</strong> Specialized templates for cornea, 
                glaucoma, retina, ocular oncology, pediatric ophthalmology, refractive surgery, 
                uveitis, vitreoretinal surgery, and more — enabling faster documentation and treatment planning.
              </li>
              <li>
                <strong>Ophthalmology EMR Billing:</strong> Automated, error-free billing workflows 
                with ICD-9/ICD-10 codes, eligibility checks, payment verification, and EMR-integrated claims.
              </li>
              <li>
                <strong>Custom EMR Software Development:</strong> Bespoke ophthalmology EMR software 
                or supporting modules built around your workflows — leveraging 20+ years of development expertise.
              </li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Ophthalmology EMR Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Collaborate to understand requirements and visualize workflows.</li>
              <li>Replace non-performing modules with customized, efficient ones.</li>
              <li>Prototype solutions and implement upon approval.</li>
              <li>Deploy and test with real-time values to measure performance.</li>
              <li>Roll out full-scale deployment after accuracy and reliability checks.</li>
            </ol>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Orthopedics EMR Services</li>
              <li>Cardiology EMR Services</li>
              <li>Oncology EMR Services</li>
              <li>Dermatology EMR Services</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Ophthalmology EMR Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>ISO Certified Practice Management:</strong> ISO 9001:2015 certified services covering IT, EMR, transcription, reporting, and analytics.</li>
              <li><strong>Secure Data Management:</strong> ISO/IEC 27001:2022 accredited, HIPAA-compliant handling of sensitive medical data.</li>
              <li><strong>Quality Guarantee:</strong> Dedicated QA teams ensure compliance with medical standards and error-free workflows.</li>
              <li><strong>Scalable Productivity:</strong> Centralized access to hospitals, labs, physicians, and patient records for faster treatment decisions.</li>
              <li><strong>Quick Turnaround:</strong> Agile solutions with minimal downtime and fast deployment cycles.</li>
              <li><strong>Budget-Friendly:</strong> Achieve 40–50% cost savings by outsourcing to our global delivery model.</li>
              <li><strong>Single Point of Contact:</strong> Dedicated SPOC ensures transparent, consistent communication and delivery.</li>
              <li><strong>Certified Team:</strong> Licensed professionals trained in drug codes, HIPAA, Medicare Part D, and EMR tools.</li>
              <li><strong>Robust Infrastructure:</strong> Advanced technology, hardware, and security systems built for real-world reliability.</li>
              <li><strong>Global Delivery:</strong> 24/7 offshore support with reliable turnaround times and operational efficiency.</li>
            </ul>
          </div>

          {/* Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Insurance Verification for Telemedicine Provider:</strong> Verified pharmacy and medical insurance eligibility for a Californian client, ensuring accurate claims processing.</li>
              <li><strong>Charge & Patient Demographics Entry for Georgian Client:</strong> Processed 1000–1200 claims per month with 98% accuracy and quick turnaround.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Ophthalmology EMR Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With over <strong>20+ years of experience</strong> and ISO-certified processes, 
              we deliver flexible, reliable, and cost-effective ophthalmology EMR solutions 
              for hospitals, clinics, and independent practitioners.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to increase productivity, streamline workflows, and cut operational overhead? Let’s connect.
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
export default OphthalmologyEMRServices;
