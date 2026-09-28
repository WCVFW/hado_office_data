import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const EDIIntegrationServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Electronic Data Interchange (EDI) Integration Services
            </h2>
            <p className="text-lg text-gray-600">
              Filing Medicare and Medicaid claims is a time-consuming process. Electronic Data Interchange (EDI) allows medical providers to send and receive healthcare claims automatically, leading to faster claims submission, processing, and quicker reimbursement.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Electronic Data Interchange (EDI), also known as Electronic Data Exchange, can also be used to process remittance advices, enrollment, and eligibility transactions.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              EDI Integration Services
            </h3>
            <p className="text-gray-700 mb-6">
              Our EDI integration team at **nimble acuity** offers the following services:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Data integration using EDIFACT.</li>
              <li>Integration software that fits in with existing infrastructure.</li>
              <li>Integration of multiple applications.</li>
              <li>Support for HIPAA, HL7, and CMS formats.</li>
              <li>Fax to EDI / EDI to fax document processing.</li>
            </ul>
            <p className="text-gray-700 mt-6">
              We have extensive expertise in providing EDI software integration. We offer support for a wide variety of internal proprietary healthcare data formats and provide rapid interoperability with healthcare applications using the EDIFACT standard.
            </p>
            <p className="text-gray-700 mt-2">
              Our expert team of software professionals and medical insurance billing and coding professionals can handle real-time or batch bi-directional EDI integration.
            </p>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Experience the nimble acuity Difference
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Reduction in clerical costs and errors.</li>
              <li>Reduction in costs and time due to fraudulent claims.</li>
              <li>Fewer lost and incomplete claims.</li>
              <li>Uncompromised data security and confidentiality.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with nimble acuity for EDI Integration
            </h3>
            <p className="text-gray-700 mb-6">
              For your EDI integration requirements, **contact us** at **nimble acuity**.
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

export default EDIIntegrationServices;