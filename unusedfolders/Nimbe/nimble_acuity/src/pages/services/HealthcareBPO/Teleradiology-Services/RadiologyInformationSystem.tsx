import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const RadiologyInformationSystem: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Radiology Information System (RIS) Services
            </h2>
            <p className="text-lg text-gray-600">
              A radiology information system (RIS) is a powerful, networked software that helps track imaging orders, manage image archives, streamline billing, and improve collaboration with PACS and VNAs. Implementing RIS ensures accurate diagnoses, fewer errors, and more efficient care coordination.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At <strong>Nimble Acuity</strong>, we provide comprehensive <strong>radiology information system (RIS) solutions</strong> designed to optimize efficiency, enhance patient care, and reduce redundancies. With over two decades of healthcare BPO experience, we deliver scalable, patient-centric RIS workflows that align with your organizational goals.
            </p>
          </div>

          {/* Our RIS Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Radiology Information System Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Scheduling for inpatients and outpatients</li>
              <li>Comprehensive patient management</li>
              <li>Patient history & workflow tracking</li>
              <li>Results reporting & analytics</li>
              <li>Image tracking with RIS-PACS integration</li>
              <li>Billing & electronic claims processing</li>
              <li>Workflow optimization with configurable toolkits</li>
            </ul>
          </div>

          {/* Key Features */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Features of Nimble Acuity’s RIS
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>ICD-10 Ready:</strong> Smooth migration with dual ICD-9 and ICD-10 support.</li>
              <li><strong>Patient Engagement:</strong> Secure portals for reports, scheduling, and messaging.</li>
              <li><strong>Referring Physician Access:</strong> Easy delivery of reports and patient data to EHRs.</li>
              <li><strong>Configurable Work Queues:</strong> Optimize efficiency with flexible task assignment.</li>
              <li><strong>Advanced Scheduling:</strong> Maximize revenue with intelligent scheduling options.</li>
              <li><strong>Integrated Radiology Solution:</strong> Tight integration with PACS, billing, and BI tools.</li>
              <li><strong>Scalable for All Practices:</strong> Web-based architecture for easy deployment and growth.</li>
              <li><strong>Client Community:</strong> Collaborate with an active, feedback-driven network.</li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Benefits of RIS
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Better Care Coordination:</strong> Centralized patient data eliminates fragmentation.</li>
              <li><strong>Accurate Diagnoses:</strong> Immediate, complete overviews reduce errors and delays.</li>
              <li><strong>Higher Quality Care:</strong> Real-time reporting and decision support for clinicians.</li>
              <li><strong>Cost Savings & Efficiency:</strong> Streamlined coding, billing, and workflows.</li>
              <li><strong>Scalable & Modular:</strong> Grows seamlessly with your organization.</li>
              <li><strong>Administrative Tools:</strong> Automated scheduling, tracking, and reporting.</li>
              <li><strong>Radiologist Tools:</strong> Unified patient documents and histories on one screen.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for RIS?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Highly qualified and experienced radiology professionals.</li>
              <li>Secure, ISO-certified, and HIPAA-compliant processes.</li>
              <li>Cutting-edge tools and infrastructure for optimal performance.</li>
              <li>24/7/365 dedicated support team.</li>
              <li>Flexible pricing customized to your needs.</li>
            </ul>
          </div>

          {/* At a Glance */}
          <div className="max-w-4xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Nimble Acuity At a Glance
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 font-medium">
              <li>24 hours TAT</li>
              <li>98% Accuracy</li>
              <li>40% Cost Reduction</li>
              <li>300+ Customers</li>
              <li>26+ Years of Experience</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Radiology Information System Services to Us
            </h3>
            <p className="text-gray-700 mb-6">
              With 26+ years of experience and seamless integration with PACS systems, <strong>Nimble Acuity</strong> ensures patient-centric RIS solutions that enhance care, reduce errors, and improve productivity. We also provide services like 3D image processing, nighthawk teleradiology, and medical imaging.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to transform your radiology workflows? Contact us today to discuss your RIS requirements.
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

export default RadiologyInformationSystem;
