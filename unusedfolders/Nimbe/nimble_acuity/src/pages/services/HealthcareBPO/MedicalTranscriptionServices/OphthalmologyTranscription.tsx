import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const OphthalmologyTranscription: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Ophthalmology Transcription Services
            </h2>
            <p className="text-lg text-gray-600">
              Get access to world-class, accurate, and error-free ophthalmology transcription from our highly qualified and experienced team of transcriptionists.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you an ophthalmologist struggling to achieve operational efficiency or falling short of experienced resources for accurate patient reports, surgical notes, and other medical documentation? 
              Outsourcing transcription to a reliable provider not only ensures accuracy but also allows you to focus on core activities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Nimble Acuity</strong> offers specialized ophthalmology transcription services backed by a talented team well-versed in ophthalmology terminologies. You can count on us for timely, precise, and secure transcriptions for your clinic or practice.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Ophthalmology Transcription Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Glaucoma</li>
              <li>Vitreoretinal Diseases</li>
              <li>Macular Diseases</li>
              <li>Ophthalmic Pathology</li>
              <li>Corneal & External Diseases</li>
              <li>Cataract & Refractive Surgery</li>
              <li>Retinal & Corneal Disorders</li>
              <li>Routine Eye Examinations</li>
              <li>Diabetes Eye Exam</li>
              <li>Pediatric Ophthalmology</li>
              <li>Ophthalmic Plastic Surgery</li>
              <li>Neuro-Ophthalmology</li>
              <li>Uveitis & Ocular Immunology</li>
              <li>Visual Impairment</li>
              <li>Lid Surgery</li>
              <li>Laser Treatment</li>
              <li>Peripheral Vision Changes</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Transcription Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Receive Files:</strong> Clients send audio or video files for transcription.</li>
              <li><strong>Project Assignment:</strong> A project manager allocates tasks based on volume and requirements.</li>
              <li><strong>Transcription:</strong> Our team of specialists converts the files into accurate text documents.</li>
              <li><strong>Quality Assurance:</strong> Every transcription undergoes thorough review and corrections.</li>
              <li><strong>Final Delivery:</strong> Approved files are securely shared with clients via encrypted channels.</li>
            </ol>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Transcription Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Discharge Summary Transcription</li>
              <li>Radiology Transcription</li>
              <li>Hospital Transcription</li>
              <li>Cardiology Transcription</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Services:</strong> Lower operational costs with our cost-effective transcription solutions.</li>
              <li><strong>Information Security:</strong> ISO/IEC 27001:2022 certified to ensure data confidentiality.</li>
              <li><strong>Robust Infrastructure:</strong> Equipped with world-class tools, networks, and secure systems.</li>
              <li><strong>HIPAA Compliant:</strong> Full compliance with HIPAA regulations for maximum patient data protection.</li>
              <li><strong>Error-Free Outputs:</strong> ISO 9001:2015 certified for delivering high-quality and precise reports.</li>
              <li><strong>Dedicated Project Manager:</strong> A single point of contact for updates and communication.</li>
              <li><strong>24/7 Availability:</strong> Support teams available round-the-clock for assistance.</li>
              <li><strong>Experienced Specialists:</strong> Backed by a team of trained ophthalmology transcription experts.</li>
              <li><strong>Scalable Solutions:</strong> Ability to ramp services up or down as per client needs.</li>
              <li><strong>Quick Turnaround:</strong> Global delivery centers ensure timely and efficient processing.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Indianapolis Physicians:</strong> Delivered fast, reliable transcription services that improved workflow efficiency.
              </p>
              <p>
                <strong>Australian Radiologists:</strong> Processed 2000+ patient reports per month with STAT turnaround, aligned to client time-zone.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Ophthalmology Transcription to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With over 100+ man-years of experience, our ophthalmology transcription experts deliver accurate, secure, and timely reports. 
              Partner with us to improve your operational efficiency while focusing on patient care.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to get started? Contact us today to discuss your transcription needs.
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

export default OphthalmologyTranscription;
