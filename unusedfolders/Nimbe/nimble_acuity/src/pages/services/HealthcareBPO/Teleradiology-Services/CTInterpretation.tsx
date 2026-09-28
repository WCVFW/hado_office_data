import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const CTInterpretation: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              CT Interpretation Services
            </h2>
            <p className="text-lg text-gray-600">
              Save time, reduce effort, and ensure accurate CT reports—outsourced at just a fraction of the cost.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you relying on emergency physicians instead of radiologists to interpret CT scans? 
              Struggling with bottlenecks in cases like neurologic deficits, trauma, or persistent headaches? 
              Outsource CT interpretation services to <strong>Nimble Acuity</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We have certified radiologists specialized in CT interpretation who ensure every report is validated 
              and free from errors. With us, you gain reliable, accurate interpretations at cost-effective rates.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              CT Interpretation Services We Offer
            </h3>
            <p className="text-gray-700 mb-4">
              Our CT interpretation services are designed to help diagnostic centers, hospitals, and private practices 
              deliver precise and timely care. We provide preliminary reads, backup reads, second opinion reads, 
              and subspecialty reporting across multiple modalities, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>PET Scans</li>
              <li>Ultrasound Scans</li>
              <li>X-rays</li>
              <li>MSK Scans</li>
              <li>Mammograms</li>
              <li>MRI</li>
              <li>CAT Scans</li>
            </ul>
          </div>

          {/* Subspecialties */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our CT Interpretation Subspecialties
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Pediatric Neuroradiology</li>
              <li>Neuroradiology</li>
              <li>Mammography</li>
              <li>Nuclear Cardiology</li>
              <li>Musculoskeletal Radiology</li>
              <li>Body Imaging</li>
              <li>Thoracic Imaging</li>
            </ul>
          </div>

          {/* Conditions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              We Interpret CT Scans For:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Pulmonary Embolisms</li>
              <li>Calcifications</li>
              <li>Coronary Artery Disease</li>
              <li>Aortic Aneurysm</li>
              <li>Tumors</li>
              <li>Infarction</li>
              <li>Skull Trauma</li>
              <li>Hemorrhage</li>
              <li>Bowel Obstruction</li>
              <li>Renal Stones</li>
              <li>Pancreatitis</li>
              <li>Appendicitis</li>
              <li>Complex Joint Fractures</li>
              <li>Diverticulitis</li>
              <li>Acute & Chronic Lung Changes</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our CT Interpretation Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Analysis:</strong> We assess report volumes and workflow bottlenecks.</li>
              <li><strong>Report Collection:</strong> Secure SFTP and cloud storage for patient reports.</li>
              <li><strong>Interpretation:</strong> Certified radiologists analyze CT scans with accuracy.</li>
              <li><strong>Accuracy Checks:</strong> QA validation ensures error-free reporting.</li>
              <li><strong>Final Delivery:</strong> Reports compiled and securely shared with providers.</li>
            </ol>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>eRAD PACS System for Teleradiology</li>
              <li>Radiology Information System</li>
              <li>Nighthawk Teleradiology Services</li>
              <li>Medical Imaging Services</li>
            </ul>
          </div>

          {/* Why Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource CT Interpretation to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost-Effective:</strong> Competitive pricing tailored to your needs.</li>
              <li><strong>High Quality:</strong> ISO 9001:2015 certified for strict quality standards.</li>
              <li><strong>Data Security:</strong> Fully compliant with ISO/IEC 27001:2022 regulations.</li>
              <li><strong>Strong Infrastructure:</strong> Advanced IT, RIS/PACS, and notification systems.</li>
              <li><strong>Expert Radiologists:</strong> Fellowship-trained specialists with decades of experience.</li>
              <li><strong>Fast TAT:</strong> Reports delivered quickly, ahead of assured timelines.</li>
              <li><strong>24/7 Support:</strong> Round-the-clock assistance for clients.</li>
              <li><strong>SPOC Model:</strong> A single point of contact for priority concerns.</li>
              <li><strong>Scalability:</strong> Services that adapt as your requirements grow.</li>
            </ul>
          </div>

          {/* Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Quick Teleradiology Support:</strong> Helped a medical imaging firm with fast reporting, exceeding client expectations.</li>
              <li><strong>Insurance Eligibility Verification:</strong> Streamlined eligibility checks for a telemedicine provider, improving throughput.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource CT Interpretation Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a global leader in <strong>teleradiology</strong>, offering specialized CT interpretation 
              alongside a full suite of reporting services. With certified radiologists, proven expertise, and 
              a reputation for excellence, we help providers deliver better care without added burden.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to enhance your CT reporting accuracy and turnaround? Let’s connect today.
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
export default CTInterpretation;
