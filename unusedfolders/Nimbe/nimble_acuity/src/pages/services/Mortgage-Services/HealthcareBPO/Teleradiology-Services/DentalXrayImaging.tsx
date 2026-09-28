import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const DentalXrayImaging: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Dental X-Ray Imaging Services
            </h2>
            <p className="text-lg text-gray-600">
              Quick, accurate dental x-ray readings delivered by professionals with 98% accuracy — starting at just $4.5/read.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Advanced imaging technologies are transforming dental practices—faster, safer, and more reliable than ever. 
              Today, dental clinics can outsource x-ray imaging services to expert providers for quick, precise reports 
              that accelerate treatment decisions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With <strong>20+ years of experience</strong>, <strong>Nimble Acuity</strong> has become a trusted 
              leader in dental x-ray imaging. We combine certified radiologists, advanced tools, HIPAA compliance, 
              and cutting-edge infrastructure to deliver diagnostic accuracy and efficiency to dental providers worldwide.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Comprehensive Dental X-Ray Imaging Services We Offer
            </h3>
            <p className="text-gray-700 mb-4">
              We provide specialized digital dental imaging services for hospitals, clinics, and diagnostic centers. 
              Our offerings include:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Digital X-Rays:</strong> Experience handling 200,000+ scans, with seamless integration into PACS 
                and cloud systems. Save on equipment costs while improving workflow efficiency.
              </li>
              <li>
                <strong>Cone Beam 3D Dental Imaging:</strong> Detailed imaging for implants, orthodontics, and impacted teeth, 
                enabling dentists to make precise treatment decisions faster.
              </li>
              <li>
                <strong>Intraoral Camera:</strong> High-resolution imaging for complex cases like fractures, captured and 
                magnified for accurate diagnosis.
              </li>
            </ul>
          </div>

          {/* What is Dental X-ray Imaging */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              What is Dental X-Ray Imaging?
            </h3>
            <p className="text-gray-700 mb-4">
              Dental x-rays detect cavities, bone loss, jaw issues, and oral masses. Types of dental x-rays include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Bitewing X-Rays – focuses on specific areas</li>
              <li>Periapical X-Rays – full tooth, from crown to root</li>
              <li>Full Mouth Survey – combines multiple bitewing and periapical scans</li>
              <li>Panoramic X-Rays – entire mouth in one view</li>
              <li>Occlusal X-Rays – full arch imaging for jaw alignment and development</li>
            </ul>
          </div>

          {/* Why Outsource */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Dental X-Ray Imaging?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Digital x-rays have replaced traditional methods—offering faster, safer imaging with less radiation 
              and instant results. Outsourcing dental x-ray imaging ensures quicker turnaround, cost savings, and 
              access to certified offshore specialists, even during staff shortages.
            </p>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Dental X-Ray Imaging Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Diagnosis:</strong> Patient undergoes x-ray at the dental clinic.</li>
              <li><strong>Data Collection:</strong> Reports securely shared via cloud or diagnostic center.</li>
              <li><strong>Interpretation:</strong> Specialists analyze and create detailed reports.</li>
              <li><strong>Proofreading:</strong> Multi-level QC review ensures 100% accuracy.</li>
              <li><strong>Final Delivery:</strong> Reports delivered securely to the clinic.</li>
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

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Benefits of Outsourcing Dental X-Ray Imaging to Nimble Acuity
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Accredited Provider:</strong> ISO 9001:2015 certified, HIPAA-compliant experts.</li>
              <li><strong>Advanced Infrastructure:</strong> Equipped with OPG, RPG, portable machines, and top-tier software.</li>
              <li><strong>Robust Data Security:</strong> ISO/IEC 27001:2022 certified with cloud-based safeguards.</li>
              <li><strong>Flexible Pricing:</strong> Custom pricing models tailored to clinic size and needs.</li>
              <li><strong>Experienced Experts:</strong> Certified dental radiologists with deep domain knowledge.</li>
              <li><strong>Fast Turnaround:</strong> On-time reporting with proactive updates in rare delays.</li>
              <li><strong>24/7 Support:</strong> Round-the-clock client assistance via global delivery centers.</li>
              <li><strong>Dedicated SPOC:</strong> Single point of contact for smooth communication.</li>
            </ul>
          </div>

          {/* Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Clearing Backlogs:</strong> Helped a medical imaging firm eliminate a reporting backlog in 24 hours using PACS.</li>
              <li><strong>Billing Optimization:</strong> Provided end-to-end billing support with Medisoft, reducing AR days and boosting collections.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Dental X-Ray Imaging?
            </h3>
            <p className="text-gray-700 mb-6">
              With <strong>20+ years of expertise</strong> and <strong>5,000+ completed projects</strong>, 
              we are a trusted partner for dental clinics worldwide. Our precision-driven approach ensures 
              accurate, fast, and compliant imaging every time.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to simplify your dental x-ray imaging workflow? Let’s talk.
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
export default DentalXrayImaging;
