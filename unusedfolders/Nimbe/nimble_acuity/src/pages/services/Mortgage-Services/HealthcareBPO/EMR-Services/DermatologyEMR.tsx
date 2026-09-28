import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const DermatologyEMR: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Dermatology EMR Services
            </h2>
            <p className="text-lg text-gray-600">
              Increase patient satisfaction and take your dermatology practice to the next level with our end-to-end practice management, EMR management, claims/billing management, and consent management solutions.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Is your practice in need of a dermatology EMR to maintain detailed and well-documented patient records? Are your dermatologists making informed decisions about treatment options, improving patient experience, and ensuring regulatory compliance? <strong>Nimble Acuity</strong> is a leading dermatology EMR service provider with over a decade of experience offering customized health information management solutions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our dermatology EMR services optimize administrative processes without extra burden on in-house resources. Many dermatology hospitals, independent clinics, and super-specialty departments trust us to provide fast, accurate, and compliant dermatology EHR services.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Dermatology EMR Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>EMR Tool Selection:</strong> We help dermatologists shortlist the right EMR tools, customize them to meet all clinic requirements, and ensure seamless integration into daily workflows.</li>
              <li><strong>EMR Tool Migration & Integration:</strong> We handle the migration of legacy data and integration with labs, pharmacies, hospital networks, and referral systems, ensuring minimal disruption.</li>
              <li><strong>Forms & Templates Customization:</strong> We provide dermatology-specific templates for procedures like Botox, laser surgeries, Mohs surgery, and consent management, including before-and-after photo documentation.</li>
              <li><strong>Dermatology Billing:</strong> Intelligent separation of medical and cosmetic procedures, automated billing codes, insurance verification, account receivables, and payment posting.</li>
              <li><strong>Inventory Management:</strong> Multi-location stock tracking, alerts, sales reporting, expiration management, and HIPAA-compliant inventory processes for dermatology medications and supplies.</li>
              <li><strong>EMR Software Development:</strong> Custom solutions with features like body charts, point-and-click documentation, e-consent, claims management, cloud capabilities, smart billing, dashboards, and integration with other systems.</li>
            </ul>
          </div>

          {/* EMR Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Dermatology EMR Process We Follow
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li><strong>Requirement Discovery:</strong> Evaluate your needs through multiple engagements to design a tailored solution.</li>
              <li><strong>EMR Planning & Design:</strong> Collaborate with the implementation team to finalize a plan considering existing challenges.</li>
              <li><strong>Development of EHR/EMR:</strong> Design and develop dermatology EMR with intuitive interface and practice-friendly features.</li>
              <li><strong>Testing:</strong> Validate functionality of each module under near-real-time conditions before deployment.</li>
              <li><strong>Reporting & Feedback:</strong> Deploy the solution and gather feedback for continuous improvement and satisfaction.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Dermatology EMR Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified Practice Management:</strong> ISO 9001:2015 accredited services for optimized workflows, compliance, and insightful reporting.</li>
              <li><strong>Data Confidentiality:</strong> ISO/IEC 27001:2022 certified for secure handling of sensitive patient data.</li>
              <li><strong>Quality & Compliance:</strong> Skilled workforce ensuring adherence to international standards, codes, and HIPAA regulations.</li>
              <li><strong>Fast Turnaround:</strong> Infrastructure and resources to deliver services quickly without backlog.</li>
              <li><strong>Scalable Services:</strong> Easily adjust resources based on your changing project needs.</li>
              <li><strong>Cost-Effective:</strong> Reduce EMR and practice management costs through our global delivery model.</li>
              <li><strong>Single Point of Contact:</strong> Dedicated project manager for seamless communication and oversight.</li>
              <li><strong>Licensed & Trained Team:</strong> Experienced professionals familiar with dermatology billing, ICD-10, Medicare, and HIPAA compliance.</li>
              <li><strong>Modern Infrastructure:</strong> Latest security, hardware, and software to support precise EMR implementation.</li>
              <li><strong>Secure Data Sharing:</strong> Fast, safe transfers via SFTP and VPN.</li>
              <li><strong>24/7 Support:</strong> Round-the-clock services with a global delivery model for quick turnaround.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Dermatology EMR Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Leverage customized, compliant, and efficient dermatology EMR solutions to streamline workflows, improve patient outcomes, and reduce operational overheads.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today for high-quality, cost-effective dermatology EMR services.
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

export default DermatologyEMR;
