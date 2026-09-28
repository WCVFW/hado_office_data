import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const NighthawkTeleradiology: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Nighthawk Teleradiology Services
            </h2>
            <p className="text-lg text-gray-600">
              Teleradiology has transformed healthcare by reducing radiologist workload, addressing specialist shortages, and delivering expert care to rural and understaffed practices. 
              <strong> Nimble Acuity</strong> provides after-hours nighthawk teleradiology services with reliable reporting across all modalities, ensuring quick and accurate reads anytime.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Nighthawk Teleradiology Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Nighthawk Services:</strong> 24/7 reporting from global hubs with quick turnaround final reports.</li>
              <li><strong>Certified Reporting:</strong> Two-phase reporting process with board-certified radiologist sign-off.</li>
              <li><strong>Preliminary Services:</strong> Initial reads with senior radiologist validation in client-specified formats.</li>
              <li><strong>Audit & Review:</strong> Includes double reporting, discrepancy analysis, and accuracy benchmarking.</li>
              <li><strong>Sub-specialty Reads:</strong> Coverage across abdominal MRI, cardiac CTA, dental imaging, neuroradiology, oncology, pediatrics, vascular imaging, and more.</li>
              <li><strong>Overflow & Backlog Support:</strong> Fast, accurate reporting to maintain service levels during high demand.</li>
              <li><strong>Clinical Trials Radiology:</strong> Accelerated reporting for CROs and biotech companies to reduce development cycles.</li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Benefits of Outsourcing Nighthawk Services to Nimble Acuity
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Expert Radiologists:</strong> Access to highly trained and certified specialists worldwide.</li>
              <li><strong>Multi-Modality Coverage:</strong> CT, MRI, Mammography, Ultrasound, X-rays, and more.</li>
              <li><strong>High-Quality Reports:</strong> Consistent accuracy and reliability.</li>
              <li><strong>Better Patient Management:</strong> Effective round-the-clock diagnostic support.</li>
              <li><strong>Guaranteed 24/7 Coverage:</strong> Seamless reporting regardless of time zone.</li>
              <li><strong>Cost Savings:</strong> Reduce travel and staffing costs through remote expertise.</li>
              <li><strong>Improved Access:</strong> Extend quality radiology to remote and underserved areas.</li>
            </ul>
          </div>

          {/* Imaging Modalities */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Imaging Modalities We Support
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>CT Scans</li>
              <li>MRI</li>
              <li>Mammography</li>
              <li>Nuclear Scans</li>
              <li>Ultrasound</li>
              <li>X-Rays</li>
              <li>Thoracic Radiology</li>
              <li>Oncology Imaging</li>
              <li>Vascular Imaging</li>
              <li>Pediatric Imaging</li>
              <li>Oral & Maxillofacial Imaging</li>
            </ul>
          </div>

          {/* Our Team */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Team of Experienced Radiologists
            </h3>
            <p className="text-gray-700 mb-4">
              <strong>Nimble Acuity</strong> partners with hospitals, imaging centers, and mobile imaging providers through a team of board-certified radiologists offering both preliminary and final reports. 
              Our experts hold certifications across leading medical boards:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>ABR – US Board Certified</li>
              <li>FRCR – UK Board Certified</li>
              <li>DNB & MD – Indian Board Certified</li>
              <li>FRANZCR – Australian Board Certified</li>
              <li>Singapore Board Certified Radiologists</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Access to advanced technology and state-of-the-art infrastructure.</li>
              <li>Streamlined workflow with highly skilled specialists.</li>
              <li>ISO-certified processes with HIPAA compliance.</li>
              <li>24/7/365 global support.</li>
              <li>Custom pricing models to fit client needs.</li>
              <li>Strong commitment to data confidentiality and security.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Get Teleradiology Reports 24/7 from Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With over 26 years of expertise, <strong>Nimble Acuity</strong> is a trusted provider of nighthawk teleradiology services. 
              Our certified radiologists deliver accurate, transcribed reports in the format of your choice—quickly, reliably, and cost-effectively.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Outsource your after-hours teleradiology needs today and ensure your patients receive the best care possible.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get in Touch
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default NighthawkTeleradiology;
