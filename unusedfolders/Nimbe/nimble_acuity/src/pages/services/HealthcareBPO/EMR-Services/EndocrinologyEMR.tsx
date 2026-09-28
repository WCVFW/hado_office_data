import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const EndocrinologyEMR: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Endocrinology EMR Services
            </h2>
            <p className="text-lg text-gray-600">
              Template-driven EMR software designed for endocrinology practices—streamline billing, 
              automate workflows, and enhance patient care with accuracy and efficiency.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Endocrinology practices often face challenges like locating paperwork, organizing reports, 
              and streamlining patient care. Our <strong>all-in-one EMR solution</strong> helps you overcome 
              these hurdles, making your revenue cycle management faster and more efficient.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When you outsource endocrinology EMR services to <strong>Nimble Acuity</strong>, we design 
              custom, template-driven systems that simplify your workflow. From <em>data mining reports</em> 
              to <em>e-prescriptions</em> and <em>DICOM-compliant documents</em>, we automate tasks so your 
              practice becomes paperless and future-ready.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Endocrinology EMR Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Physical Examination Templates:</strong> Document examinations with built-in images and notes for accuracy.</li>
              <li><strong>Single Patient View:</strong> Consolidated access to lab reports, imaging, demographics, and examination summaries.</li>
              <li><strong>Encounter Documentation:</strong> Format-driven system for efficient patient encounter recording.</li>
              <li><strong>Document & Image Management:</strong> Digitize x-rays, diabetology images, and other clinical files into charts.</li>
              <li><strong>Reminders & Clinical Forms:</strong> Automate alerts, reminders, and condition-based forms for patient management.</li>
              <li><strong>E&M Coding:</strong> Smart calculators integrated with service-level data to reduce missed payments.</li>
              <li><strong>Lab Authorization & Tracking:</strong> Electronic lab authorization with anomaly flagging and historical analysis.</li>
              <li><strong>Data Mining Reports:</strong> Advanced search to fetch indexed documents instantly and export in multiple formats.</li>
              <li><strong>Patient & Drug Education:</strong> Repository of advice and instructions to support wellness programs.</li>
            </ul>
            <p className="text-gray-700 mt-6">
              Our services extend across subspecialties including <em>diabetes mellitus, thyroid disorders, bone & mineral metabolism, adrenal and gonadal disorders, and more</em>.
            </p>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our EMR Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Discovery:</strong> Understand your practice needs and existing workflows.</li>
              <li><strong>Strategy Selection:</strong> Define the right customization and integration plan.</li>
              <li><strong>Implementation:</strong> Deploy template-driven EMR tailored for endocrinology practices.</li>
              <li><strong>Testing:</strong> Rigorously test for real-time performance and compliance.</li>
              <li><strong>Feedback & Reporting:</strong> Collect insights and optimize the solution for continuous improvement.</li>
            </ol>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Cardiology EMR Services</li>
              <li>EMR Software Development</li>
              <li>Medical Data Entry Services</li>
              <li>Medical Coding Services</li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Endocrinology EMR?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified & Compliant:</strong> HIPAA-compliant, ISO 9001:2015 and ISO/IEC 27001:2022 accredited.</li>
              <li><strong>Data Security:</strong> Encrypted SFTP & VPN transfers with strict confidentiality protocols.</li>
              <li><strong>High Accuracy:</strong> Quality-driven workflows ensuring precision in records and reporting.</li>
              <li><strong>Fast Turnaround:</strong> Skilled EMR experts delivering quick results without compromise.</li>
              <li><strong>Scalability:</strong> Flexible solutions that grow with your practice’s needs.</li>
              <li><strong>Affordable Pricing:</strong> Cost-effective services for practices of all sizes.</li>
              <li><strong>Dedicated Manager:</strong> Single point of contact for smooth project communication.</li>
              <li><strong>Modern Infrastructure:</strong> Advanced systems for secure, seamless operations.</li>
              <li><strong>24/7 Support:</strong> Always available via call, email, or chat to assist your team.</li>
            </ul>
          </div>

          {/* Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Rehabilitation Transcription:</strong> Helped a US-based client migrate to a new EHR system quickly and accurately.</li>
              <li><strong>Caribbean Radiologists:</strong> Automated STAT report transcription, completing 200+ reports in just 30 days.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Endocrinology EMR Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              The healthcare industry is shifting rapidly, and practices need advanced EMR systems to stay ahead. 
              By outsourcing to <strong>Nimble Acuity</strong>, you gain reliable, affordable, and scalable EMR 
              solutions while focusing on patient care and growth.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to transform your endocrinology practice? Let’s get started today.
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

export default EndocrinologyEMR;
