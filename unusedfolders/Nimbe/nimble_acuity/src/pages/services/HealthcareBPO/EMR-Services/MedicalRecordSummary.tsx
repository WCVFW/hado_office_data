import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const MedicalRecordSummary: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Medical Record Summary Services
            </h2>
            <p className="text-lg text-gray-600">
              Convert extensive patient records into clear, concise, and digestible formats with our expert <strong>medical record summary services</strong>, tailored for legal, insurance, and healthcare needs.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Improve case clarity and decision-making with our dependable services. <strong>Nimble Acuity</strong> helps legal departments, insurance companies, and healthcare organizations convert cumbersome medical records into concise, litigation-ready summaries. Our multi-phase approach includes detailed review, data extraction, chronological organization, and QA verification for accuracy and authenticity.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Outsourcing medical chronology services enables faster turnaround, higher accuracy, and more time to focus on core business operations. Choose <strong>Nimble Acuity</strong> to bring consistency, precision, and professionalism to every medical record summary.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Medical Record Summary Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>AI-augmented Medical Record Summaries:</strong> Intelligent extraction of diagnoses, medications, procedures, and key events, validated by clinical reviewers for completeness and legal relevance.</li>
              <li><strong>Chronological Medical Report Creation:</strong> Review and arrange patient visits, interventions, and outcomes in chronological reports highlighting gaps or inconsistencies to support litigation or claim strategy.</li>
              <li><strong>Custom-tailored Summaries by Case Type:</strong> Personal injury, workers’ compensation, disability, or malpractice summaries customized for relevance, formatting, and tagging.</li>
              <li><strong>EMR-to-summary Automation:</strong> Structured extraction of clinical notes, test results, and treatments from EMR platforms with automated high-priority data flagging.</li>
              <li><strong>Medical Summary Dashboards:</strong> Keyword-searchable summaries, timelines, and flagged documents accessible securely in a cloud-based environment for attorneys and reviewers.</li>
              <li><strong>Narrative and Objective Summaries:</strong> Narrative summaries for detailed history, objective summaries with clinical bullet points, or a combination for comprehensive case prep.</li>
              <li><strong>AI-driven Issue-based Summaries:</strong> Isolate issue-specific details from extensive records to streamline review of multi-injury or overlapping treatment cases.</li>
              <li><strong>Integrated Medical Chronology & Billing Summary:</strong> Chronological reports paired with itemized billing details to support audits, fraud investigation, and claims assessment.</li>
              <li><strong>24/7 On-demand Summary Teams:</strong> Multiple shifts and 24/7 support for high-volume projects like class-action suits, mass torts, or insurance backlogs with rapid turnaround and consistent quality.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Our Medical Record Summary Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>HIPAA-compliant Cloud Collaboration:</strong> Secure, encrypted access with audit trails and role-based permissions.</li>
              <li><strong>Accuracy You Can Trust:</strong> Trained professionals ensure each summary is complete, consistent, and litigation-ready.</li>
              <li><strong>Tailored to Your Case Requirements:</strong> Summaries aligned to case type, review process, or specific legal needs.</li>
              <li><strong>Technology-backed, Expert-led:</strong> AI-assisted extraction combined with human oversight for speed and precision.</li>
              <li><strong>Experience with Complex Case Types:</strong> Expertise in personal injury, class-action, mass torts, and diverse medical record formats.</li>
              <li><strong>Scalable Services and On-time Delivery:</strong> Dedicated teams meet tight deadlines without compromising quality, suitable for high-volume or urgent projects.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Get Clarity from Chaos with Expert Medical Record Summaries
            </h3>
            <p className="text-gray-700 mb-6">
              Request a medical records summary sample and see how <strong>Nimble Acuity</strong> can simplify your workflow and improve case analysis.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Request a Sample
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default MedicalRecordSummary;
