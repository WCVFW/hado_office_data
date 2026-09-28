import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const MedicalImaging: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Advanced Medical Imaging Services
            </h2>
            <p className="text-lg text-gray-600">
              Medical imaging is one of the most powerful and affordable ways to accelerate treatment. It provides caregivers with clear insights into affected areas, helps track treatment progress, and supports critical decision-making. Choosing the right partner for your imaging needs is essential for accurate and reliable results.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              <strong>Nimble Acuity</strong> is a leading provider of <strong>healthcare imaging services</strong> to global clients. With decades of expertise and the latest technology, we deliver cost-effective and highly accurate imaging support. By partnering with us, you can ensure seamless diagnostic support and quality outcomes.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Medical Imaging Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>X-rays</li>
              <li>Magnetic Resonance Imaging (MRI)</li>
              <li>Coronary CTAs</li>
              <li>Ultrasound</li>
              <li>Nuclear Cardiology</li>
              <li>Nuclear PET</li>
              <li>Nuclear Medicine</li>
              <li>Dexa Scan</li>
              <li>Fluoroscopy</li>
              <li>PET-CT</li>
              <li>Perfusion/Diffusion MR</li>
              <li>Nuclear Studies</li>
              <li>Mammogram Services</li>
              <li>Vascular Ultrasound</li>
              <li>Fast Fluid Attenuated Inversion Recovery</li>
              <li>RV Dysplasia</li>
              <li>Computed Tomography</li>
              <li>Echocardiography</li>
            </ul>
          </div>

          {/* Tools & Software */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Tools & Software We Leverage
            </h3>
            <p className="text-gray-700 mb-4">
              We incorporate the latest imaging technologies and software to ensure precise diagnosis and support for patient care.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>4-D Ultrasound</li>
                <li>3-D MRI</li>
                <li>CT Scan</li>
                <li>64-Slice VCT</li>
                <li>Magnetic Resonance Imaging (MRI)</li>
                <li>Positron Emission Tomography (PET)</li>
              </ul>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Workstation software for multimodality imaging</li>
                <li>3D rendering software for MRI, CT & USG</li>
                <li>Ultrasound & echocardiography reporting systems</li>
                <li>Endoscopy & laparoscopy image reporting systems</li>
                <li>Teleradiology-ready film digitizer</li>
                <li>Web-based PACS & teleradiology software</li>
                <li>Freehand 3D ultrasound software</li>
              </ul>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Services:</strong> Flexible engagement models at highly competitive rates.</li>
              <li><strong>HIPAA Compliant:</strong> Adherence to strict HIPAA standards for patient data protection.</li>
              <li><strong>Quality Assurance:</strong> Multi-level quality checks ensure highly accurate reports.</li>
              <li><strong>Data Security:</strong> Robust security systems to safeguard confidential medical data.</li>
              <li><strong>Customized Solutions:</strong> Services tailored to fit unique imaging needs.</li>
              <li><strong>Talented Team:</strong> Licensed, board-certified radiologists and imaging specialists.</li>
              <li><strong>Quick Turnaround:</strong> Multiple global delivery centers for faster report generation.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Us for Accurate Medical Imaging
            </h3>
            <p className="text-gray-700 mb-6">
              With over 20 years of expertise in medical imaging and teleradiology, <strong>Nimble Acuity</strong> is the trusted partner for hospitals, clinics, and healthcare providers worldwide. From 3D image processing to radiology information systems, we deliver unmatched accuracy and reliability.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Looking for efficient and affordable imaging services? Let’s talk today.
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
export default MedicalImaging;
