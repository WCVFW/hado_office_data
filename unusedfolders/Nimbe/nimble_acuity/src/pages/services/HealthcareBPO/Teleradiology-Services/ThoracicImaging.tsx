import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const ThoracicImaging: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6 ">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Thoracic Imaging Services
            </h2>
            <p className="text-lg text-gray-700">
              Get access to high-quality and advanced thoracic imaging services at competitive prices, delivered by fellowship-trained teleradiologists.
            </p>
          </div>

          {/* Introduction */}
          <div className="max-w-6xl mb-16 text-gray-700">
            <p className="mb-4">
              Managing a high volume of thoracic imaging cases can be challenging. <strong>Nimble Acuity</strong> provides expert thoracic imaging services to support hospitals, radiology groups, pulmonologists, and specialty practices worldwide.
            </p>
            <p>
              Our fellowship-trained radiologists offer advanced imaging opinions, help mitigate overflow, and allow your team to scale efficiently without hiring full-time specialists. We work with free-standing imaging centers, hospitals, and other healthcare providers to ensure timely, accurate, and reliable results.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Thoracic Imaging Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Specialty Coverage:</strong> Fellowship-trained radiologists providing expertise in:
                <ul className="list-disc list-inside ml-6 space-y-1">
                  <li>Lung Cancer Screening</li>
                  <li>Interstitial Lung Disease</li>
                  <li>Pulmonary Infections</li>
                  <li>Thoracic Spine Radiology & MRI</li>
                  <li>Chest Radiographs, CT, and HRCT</li>
                  <li>B Reads</li>
                  <li>Mediastinal Masses & Pleural Disease</li>
                  <li>Occupational Disorders, Emphysema, Asthma, Bronchiectasis, Tracheomalacia</li>
                  <li>Primary and Secondary Thoracic Malignancies</li>
                </ul>
              </li>
              <li>
                <strong>Overflow Mitigation:</strong> Handle high-volume cases, vacations, and peak periods to maintain consistent patient care.
              </li>
              <li>
                <strong>Specialty Expansion:</strong> Extend the reach of your thoracic imaging practice without hiring full-time radiologists.
              </li>
              <li>
                <strong>Enhanced Quality:</strong> All cases are read by fellowship-trained subspecialists matched to complex studies for accurate interpretation.
              </li>
            </ul>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>PET/CT Reporting Services</li>
              <li>Preliminary Teleradiology Reporting</li>
              <li>Emergency Radiology Services</li>
              <li>3D Image Processing Services</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Thoracic Imaging Services to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing:</strong> Cost-effective services to maximize ROI.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022-certified, HIPAA-compliant workflows to ensure patient confidentiality.</li>
              <li><strong>High-Quality Services:</strong> ISO 9001:2015-certified processes and fellowship-trained radiologists ensure accuracy and reliability.</li>
              <li><strong>Superb Infrastructure:</strong> World-class labs and offices with advanced imaging facilities.</li>
              <li><strong>Advanced Tools & Technologies:</strong> Industry-standard software for accurate thoracic imaging interpretations.</li>
              <li><strong>Short Turnaround:</strong> Fast reporting to meet deadlines and maintain patient care standards.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Quick Teleradiology Support:</strong> Cleared client backlog in under 24 hours using PACS-trained radiologists.</li>
              <li><strong>Full-Service Billing:</strong> Improved AR and revenue cycle performance for healthcare clients using Medisoft software.</li>
            </ul>
          </div>

    

          {/* CTA */}
          <div className="max-w-4xl mt-16 ">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Thoracic Imaging Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Our fellowship-trained teleradiologists deliver accurate, cost-effective, and timely thoracic imaging services globally. ISO-certified with multi-level QA checks, we ensure every case is read by the most qualified experts.
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

export default ThoracicImaging;
