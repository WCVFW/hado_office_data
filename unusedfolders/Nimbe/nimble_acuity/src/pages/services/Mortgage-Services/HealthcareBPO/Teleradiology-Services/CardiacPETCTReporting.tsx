import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const CardiacPETCTReporting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Cardiac PET/CT Reporting Services
            </h2>
            <p className="text-lg text-gray-600">
              Get <strong>98% accurate</strong> cardiac PET/CT reports created by certified radiologists—starting at just{" "}
              <strong>$4.5/read</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you a private practitioner or healthcare organization struggling with timely cardiac PET/CT reporting? 
              Do you want accurate, professional reports for better patient outcomes? You’re in the right place— 
              <strong>Nimble Acuity</strong> is a premier cardiac PET/CT reporting service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With <strong>20+ years of experience</strong>, Nimble Acuity delivers high-quality, consistent, 
              and affordable cardiac PET/CT reporting services to clients worldwide. Every report is prepared 
              by expert radiologists with proven expertise in the field.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Cardiac PET/CT Reporting Services We Offer
            </h3>
            <p className="text-gray-700 mb-4">
              Our services are designed to enhance diagnostic accuracy and efficiency across healthcare practices and organizations. 
              With a large team of radiologists, QC staff, and support professionals, we deliver comprehensive reporting services including:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Cardiac PET/CT:</strong> Expert reports covering cardiac viability, revascularization evaluation, 
                and target vessel localization, interpreted by specialists in Nuclear Cardiology.
              </li>
              <li>
                <strong>Neuro PET/CT:</strong> Accurate evaluation of dementia progression, Amyvid neuro studies, 
                and FDG interpretations with 90% specificity and sensitivity.
              </li>
              <li>
                <strong>MRI & CT Reporting:</strong> Comprehensive reporting across Body Imaging, Neuroradiology, and MSK by highly trained radiologists.
              </li>
              <li>
                <strong>Ultrasound & X-Ray Reporting:</strong> Reliable diagnostic reports for ancillary imaging modalities.
              </li>
              <li>
                <strong>Support Services:</strong> Administration, IT, RIS/PACS, and client support for seamless service delivery.
              </li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Reporting Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Analysis:</strong> Understanding client needs and tailoring process flow.</li>
              <li><strong>Data Collection:</strong> Secure transfer of patient data via encrypted channels.</li>
              <li><strong>Expert Reporting:</strong> Radiologists evaluate PET/CT scans and prepare precise reports.</li>
              <li><strong>Quality Assurance:</strong> Dedicated QA team reviews reports against strict standards.</li>
              <li><strong>Final Delivery:</strong> Compiled reports securely shared with clients via FTP/cloud.</li>
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

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Cardiac PET/CT Reporting to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Quality Assurance:</strong> Rigorous QA program ensures error-free reports.</li>
              <li><strong>Advanced Infrastructure:</strong> State-of-the-art technology for fast, accurate reporting.</li>
              <li><strong>Flexible Pricing:</strong> Affordable short-term and long-term engagement options.</li>
              <li><strong>Fast Turnaround:</strong> Global delivery centers enable quick reporting.</li>
              <li><strong>HIPAA Compliance:</strong> Fully compliant with international healthcare standards.</li>
              <li><strong>Board-Certified Radiologists:</strong> Access to trained and certified experts from the US and beyond.</li>
              <li><strong>Data Security:</strong> Robust systems with strict NDAs and international-grade safeguards.</li>
              <li><strong>Customized Solutions:</strong> Tailored reporting services for varying clinical needs.</li>
              <li><strong>One-on-One Contact:</strong> Direct updates on urgent or unusual findings.</li>
              <li><strong>24/7 Support:</strong> Round-the-clock RIS/PACS, IT, and client assistance.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Quick Teleradiology Support:</strong> Helped a medical imaging firm clear a backlog within 24 hours 
                using PACS software and expert radiologists.
              </li>
              <li>
                <strong>Full-Service Billing Support:</strong> Improved AR performance and collections for a client 
                by streamlining billing with Medisoft software.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Cardiac PET/CT Reporting to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity’s cardiac PET/CT reporting services are trusted by providers across the US, UK, and Australia. 
              With decades of expertise and a strong global team, we ensure accurate, reliable, and secure reporting solutions.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Looking for a dependable partner for PET/CT reporting? Let’s talk today.
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
export default CardiacPETCTReporting;
