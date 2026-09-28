import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const MRIInterpretation: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              MRI Interpretation Services
            </h2>
            <p className="text-lg text-gray-600">
              Accurately interpret MRI scans, deliver patient care on time, and enhance patient outcomes with our scalable MRI interpretation services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking for certified MRI interpretation specialists who can handle multiple interpretations daily without being on your payroll? <strong>Nimble Acuity</strong> offers cost-effective, accurate, and HIPAA-compliant MRI interpretation solutions so you can focus on patient care while we handle your diagnostic needs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With fast turnaround times and a skilled team of teleradiologists, we resolve bottlenecks and ensure your practice runs efficiently and patient-centrically.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              MRI Interpretation Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cardiac MRI Interpretation:</strong> Certified specialists interpret CMR imaging to detect cardiac disease, analyze coronary vessels, and diagnose tissue damage.</li>
              <li><strong>Spinal MRI Interpretation:</strong> Interpretation of spinal MRIs for conditions such as herniated disks, spinal stenosis, degenerative disk disease, and cancer-related symptoms.</li>
              <li><strong>Brain MRI Interpretation:</strong> Expert analysis to detect aneurysms, tumors, cysts, inflammatory conditions, multiple sclerosis, and more.</li>
            </ul>
          </div>

          {/* Ideal Clients */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our MRI Interpretation Services Are Ideal For
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Mobile MRI Units</li>
              <li>Physician Groups</li>
              <li>Private Practices</li>
              <li>Independent Diagnostic Testing Facilities (IDTFs)</li>
              <li>Outpatient Clinics</li>
              <li>Hospitals</li>
              <li>Specialty & Multispecialty Clinics</li>
              <li>Imaging Centers</li>
              <li>Urgent Care Centers</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              MRI Interpretation Process We Follow
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Discovery:</strong> Our team connects with you to understand your project needs.</li>
              <li><strong>Planning:</strong> We finalize strategies with our radiologists.</li>
              <li><strong>Execution:</strong> MRI scans and reports are interpreted with accuracy.</li>
              <li><strong>Quality Evaluation:</strong> Proofing specialists review and validate reports.</li>
              <li><strong>Feedback & Optimization:</strong> We refine based on your feedback to ensure satisfaction.</li>
            </ol>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Radiology Information System</li>
              <li>Medical Imaging Services</li>
              <li>Nighthawk Teleradiology Services</li>
              <li>3D Image Processing Services</li>
            </ul>
          </div>

          {/* Why Outsource */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource MRI Interpretation Services to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Guaranteed Data Security:</strong> ISO/IEC 27001:2022 certified for maximum protection.</li>
              <li><strong>High-Quality Service:</strong> Consistently accurate and reliable reports.</li>
              <li><strong>Flexible Pricing:</strong> Cost-effective and customizable solutions.</li>
              <li><strong>Certified & Compliant:</strong> HIPAA compliant, ISO 9001:2015 certified.</li>
              <li><strong>Short Turnaround:</strong> Quick delivery for better patient outcomes.</li>
              <li><strong>Scalable Services:</strong> Handle projects of any size with ease.</li>
              <li><strong>Dedicated Contact:</strong> Single point of communication for smooth project handling.</li>
              <li><strong>Expert Team:</strong> 500+ radiologists available globally.</li>
              <li><strong>24/7 Availability:</strong> Support across all time zones.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Quick Teleradiology Services:</strong> Helped a medical imaging firm resolve backlog in just 24 hours using PACS software.</li>
              <li><strong>Comprehensive Billing Support:</strong> Improved AR collections and reduced AR days for a client with Medisoft software.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="text-gray-700 italic">
              "I want to inform you of what a splendid job <strong>Nimble Acuity</strong> is doing for our organization. Vinoth Kumar and his team have performed amazing work and are extremely professional and reliable."
            </blockquote>
            <p className="text-gray-600 mt-2 font-medium">
              – Managing Director, Medical Billing Company, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource MRI Interpretation Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With our certified experts, scalable solutions, and commitment to accuracy, we remain a trusted partner for MRI interpretation. Whether you need quick turnarounds or long-term support, Nimble Acuity delivers results you can rely on.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Get in touch with us today to receive a free quote within 24 hours.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get a Free Quote
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default MRIInterpretation;
