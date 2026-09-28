import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const VirtualScribing: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Physician Assistant Virtual Scribing Services
            </h2>
            <p className="text-lg text-gray-600">
              Get access to skilled staff to enter key patient information and prepare virtual scribes with Nimble Acuity’s superior quality services. 
              Our team ensures accurate documentation so your medical staff can focus more on patient care.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Many healthcare organizations today face a shortage of nursing staff who can prepare virtual scribes and enter patient demos and vitals. 
              <strong> Nimble Acuity </strong> bridges this gap by providing experienced physician assistant virtual scribes who leverage the latest tools 
              and software to deliver top-notch services for hospitals, clinics, and practices.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Physician Assistant Virtual Scribing Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Response Weaving:</strong> Crafting and formatting patient responses into clear messages for physicians.
              </li>
              <li>
                <strong>EHR Navigation Virtual Scribing:</strong> Managing documentation tasks inside EHR systems so physicians can focus on encounters.
              </li>
              <li>
                <strong>Research Support:</strong> Providing quick and reliable research assistance to streamline patient processes.
              </li>
              <li>
                <strong>Data Collation for Patient Review:</strong> Collecting and entering progress notes, lab reports, pathology findings, and more.
              </li>
              <li>
                <strong>EHR Data Logging:</strong> Accurate verbatim logging of physician-directed information into the EHR system.
              </li>
            </ul>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Discharge Summary Transcription</li>
              <li>Ophthalmology Transcription Services</li>
              <li>Radiology Transcription Services</li>
              <li>Pathology Transcription Services</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Virtual Scribing?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing:</strong> Flexible, cost-effective options tailored to your budget.</li>
              <li><strong>Information Security:</strong> ISMS-certified processes ensure complete data safety.</li>
              <li><strong>Error-Free Services:</strong> ISO-certified workflows guarantee accuracy.</li>
              <li><strong>HIPAA Compliance:</strong> All projects executed under HIPAA agreements.</li>
              <li><strong>World-class Infrastructure:</strong> Access to modern tools and secure office spaces.</li>
              <li><strong>Talented Team:</strong> Experienced physician assistant scribes trained in latest tools.</li>
              <li><strong>Dedicated Project Manager:</strong> A single point of contact for seamless coordination.</li>
              <li><strong>Quick Turnaround:</strong> Global delivery centers enable fast results across time zones.</li>
              <li><strong>24/7 Support:</strong> Teams available round-the-clock via phone and email.</li>
              <li><strong>Scalable Services:</strong> Scale up resources quickly to match growing demands.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Charge & Demographics Entry for Ambulance Billing:</strong> 
                Helped a leading ambulance billing company with accurate and cost-effective data entry services.
              </p>
              <p>
                <strong>Research and DME Billing for Tustin-based Client:</strong> 
                Delivered high-quality research and billing support services tailored to their requirements.
              </p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">Testimonials</h3>
            <blockquote className="italic text-gray-700 border-l-4 border-[#006A7C] pl-4">
              "I want to thank you both for the great job you are doing. I could not be happier with my decision 
              to work with you. I am looking forward to our continued relationship and growth."
            </blockquote>
            <p className="mt-2 text-gray-600 font-medium">
              — Owner, Medical Billing Services Company, California, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Virtual Scribing to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is one of the leading providers of physician assistant virtual scribing 
              and transcription services worldwide. Our experienced team ensures efficiency, compliance, 
              and accuracy in every engagement.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Looking for a reliable virtual scribing partner? Get in touch with us today!
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

export default VirtualScribing;
