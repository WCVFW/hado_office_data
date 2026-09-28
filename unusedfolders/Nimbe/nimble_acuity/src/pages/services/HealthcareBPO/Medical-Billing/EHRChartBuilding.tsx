import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const EHRChartBuilding: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              EHR Chart Building Services
            </h2>
            <p className="text-lg text-gray-600">
              Manual chart building slows down providers and often leads to errors. 
              <strong> Nimble Acuity </strong> offers accurate, efficient, and HIPAA-compliant 
              EHR chart building services that optimize workflows, improve clinical documentation, 
              and ensure seamless patient care delivery.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Accurate chart building is essential for quality care and efficient reimbursements. 
              At <strong>Nimble Acuity</strong>, we specialize in converting raw patient data into 
              structured EHR charts that align with your EMR/EHR system, ensuring interoperability, 
              compliance, and accessibility across providers and departments.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Our EHR Chart Building Solutions
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Patient Demographics Entry:</strong> Accurate entry of personal, insurance, and clinical details.</li>
              <li><strong>Medical History Compilation:</strong> Organizing past records, allergies, medications, and diagnoses.</li>
              <li><strong>Lab & Diagnostic Data Entry:</strong> Seamless integration of test results and imaging reports.</li>
              <li><strong>Clinical Notes Structuring:</strong> SOAP notes, physician instructions, and treatment plans.</li>
              <li><strong>Procedure & Medication Records:</strong> CPT/ICD-coded records for billing and compliance.</li>
              <li><strong>Template Customization:</strong> Specialty-specific chart templates tailored to provider needs.</li>
              <li><strong>Interoperability Support:</strong> HL7/FHIR-compliant data migration for cross-system access.</li>
              <li><strong>Quality Assurance:</strong> Multi-level reviews to ensure accuracy and compliance.</li>
            </ul>
          </div>

          {/* Why Choose */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Why Choose Nimble Acuity for EHR Chart Building?
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>HIPAA & ISO Certified:</strong> Fully compliant with patient privacy and data security standards.</li>
              <li><strong>Faster Turnaround:</strong> Quick chart creation with minimal provider intervention.</li>
              <li><strong>Clinical Accuracy:</strong> Skilled staff with medical backgrounds ensure high accuracy.</li>
              <li><strong>Scalable Teams:</strong> Expand support quickly to handle high patient volumes.</li>
              <li><strong>24/7 Support:</strong> Always-on availability for global healthcare providers.</li>
              <li><strong>Cost Efficiency:</strong> Reduce administrative costs by up to 40% while maintaining quality.</li>
            </ul>
          </div>

          {/* Customer Success */}
          <div className="max-w-5xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Customer Success Story
            </h3>
            <p className="text-gray-700 mb-4">
              <strong>EHR Transition for a Multi-Specialty Clinic:</strong> 
              Our chart building team migrated over 15,000 patient records into a new EHR system 
              with 99% accuracy, enabling seamless access for providers and reducing patient wait times.
            </p>
            
          </div>

          {/* Testimonial */}
          <div className="max-w-4xl mb-16">
            <blockquote className="text-lg italic text-gray-700 border-l-4 border-[#006A7C] pl-4">
              "Nimble Acuity’s EHR chart building team streamlined our transition to a new EMR. 
              Their accuracy and speed saved us significant administrative effort and ensured 
              compliance throughout the process."
            </blockquote>
            <p className="mt-2 text-gray-600 font-medium">
              – Director of Operations, Multi-Specialty Clinic, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Simplify EHR Chart Building with Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              From demographics entry to structured clinical documentation, 
              Nimble Acuity delivers precise, compliant, and scalable EHR chart building solutions. 
              Let us handle the data while you focus on delivering care.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get Started Today
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default EHRChartBuilding;
