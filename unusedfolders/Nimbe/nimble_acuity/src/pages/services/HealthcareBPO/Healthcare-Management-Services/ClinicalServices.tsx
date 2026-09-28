import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const ClinicalServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Clinical Services
            </h2>
            <p className="text-lg text-gray-600">
              Healthcare organizations in the U.S. and U.K. are facing an acute shortage of clinical experts. Partner with <strong>nimble acuity</strong> to overcome this shortage with cost-effective, high-quality clinical services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              By outsourcing clinical services, you can benefit from a seamless and efficient process. Our strategic location allows us to provide clinical services with a quick turnaround time, as our day is your night. At <strong>nimble acuity</strong>, we offer a wide range of clinical services, providing innovative solutions to help you optimize your clinical processes and improve patient care.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Clinical Service Portfolio
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>3D Reconstruction & Processing Services:</strong> We provide 3D anatomical models for MR/CT angiographies on a per-case basis.</li>
              <li><strong>Collaborative Reporting Solutions:</strong> We offer web-based reporting workflows to enhance the productivity of Radiology groups by up to 40%.</li>
              <li><strong>Teleradiology Services:</strong> Our certified team of teleradiologists provides proficient services on a 24/7/365 basis.</li>
              <li><strong>Oncology Services:</strong> Our oncology services include IMRT Treatment Planning and 2D/3D Conformal Therapy Planning.</li>
              <li><strong>Orthopedics Services:</strong> We offer 3D anatomical models, implant assessments, and digital prosthetic templates.</li>
              <li><strong>Medical Management Services:</strong> Our services include nurse call centers integrated with medical management devices.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Clinical Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost-Effective Solutions:</strong> Access high-quality, competent services at an affordable price.</li>
              <li><strong>Increased Efficiency:</strong> Improve work efficiency, allowing you to increase your patient volume.</li>
              <li><strong>Flexible Workflow:</strong> Gain flexibility and convenience with web-based remote planning and viewing.</li>
              <li><strong>Advanced Technology:</strong> Benefit from access to advanced clinical application packages, such as advanced spine planning.</li>
              <li><strong>Reduced Costs:</strong> Our services help you reduce material and storage costs.</li>
              <li><strong>24/7 Support:</strong> Our team works around the clock to ensure quick turnaround times.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Clinical Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              If you are looking to outsource any part of your clinical process, fill out our inquiry form. Our Client Engagement Team will contact you within 24 hours or by the next working day to discuss your needs.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to streamline your clinical operations and improve patient care?
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

export default ClinicalServices;