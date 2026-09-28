import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const PrimaryCareEMR: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Primary Care EMR Services
            </h2>
            <p className="text-lg text-gray-600">
              Unburden your practice from resource-heavy EMR development and management tasks by outsourcing <strong>Primary Care EMR services</strong> to <strong>nimble acuity</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Primary care management comes with an extensive list of responsibilities—from hiring and staff management to billing, IT, transcription, and compliance. These tasks can quickly become overwhelming for in-house teams. That’s where <strong>nimble acuity</strong> comes in. 
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our <strong>Primary Care EMR solutions</strong> cover everything from patient records and demographic data to payers and patient-physician outcomes. By eliminating inefficiencies and risks of paper records, we streamline workflows and ensure practices get paid on time.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Primary Care EMR Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Tool Selection:</strong> We help you choose the right EMR system that fits your workflow, budget, and integration needs—avoiding costly mismatches.</li>
              <li><strong>Tool Migration:</strong> Smooth migration between EMR systems with proper data extraction, backup, phased movement, and validation to ensure accuracy.</li>
              <li><strong>Integration:</strong> One interface for multiple EMRs to streamline workflow, enhance reporting, and improve patient-centric care across specialties.</li>
              <li><strong>Form Template Customization:</strong> Specialty-specific templates for accurate data collection including patient details, consultant notes, findings, and reports.</li>
              <li><strong>Billing:</strong> Comprehensive billing support for individual physicians, group practices, and rural facilities with certified coders and reimbursement expertise.</li>
              <li><strong>Inventory Management:</strong> Efficient tracking, vendor management, alerts on expiring inventory, and customized reporting for better control.</li>
              <li><strong>Custom Software Development:</strong> Tailored EMR tools with advanced features like e-prescribing, prevention programs, patient education, lab integration, and more.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Primary Care EMR Development Process We Follow
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Analysis:</strong> Deep dive into your practice’s needs and prepare a checklist of relevant tools.</li>
              <li><strong>Wireframe Development:</strong> Create and refine blueprints and wireframes until aligned with your specifications.</li>
              <li><strong>Phased Development:</strong> Dedicated developers build your EMR in structured phases for smooth progress.</li>
              <li><strong>Solution Testing:</strong> Test modules and the full solution rigorously for performance and compliance.</li>
              <li><strong>Deployment & Feedback:</strong> Deploy, train your staff, and provide post-launch troubleshooting support.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Primary Care EMR Services to nimble acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified EMR Company:</strong> ISO 9001:2015 accredited, guaranteeing quality and consistency in service delivery.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified, ensuring sensitive data is secured across processes, systems, and people.</li>
              <li><strong>Guaranteed Quality:</strong> Dedicated QA team ensures HIPAA compliance and industry standards are consistently met.</li>
              <li><strong>Cost Reduction:</strong> Flexible pricing models to suit budget needs, including FTE and collection-based models.</li>
              <li><strong>Advanced Infrastructure:</strong> State-of-the-art tools, hardware, and security for reliable service delivery.</li>
              <li><strong>Fast Turnaround Time:</strong> Systematic processes and global teams help us meet strict deadlines.</li>
              <li><strong>Scalable Services:</strong> Easily adjust resource capacity to meet seasonal or urgent demands.</li>
              <li><strong>Certified Team:</strong> Experienced medical professionals with compliance knowledge and a single point of contact for your project.</li>
              <li><strong>24/7 Availability:</strong> Round-the-clock service across multiple global delivery centers in different time zones.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Primary Care EMR Services to nimble acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With over 26 years of experience, <strong>nimble acuity</strong> delivers scalable, customizable, and cost-effective <strong>Primary Care EMR solutions</strong>. Our expertise ensures improved care delivery, streamlined operations, and higher patient satisfaction.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> to transform your Primary Care practice with our proven EMR expertise.
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

export default PrimaryCareEMR;
