import React from "react";
import { Link } from "react-router-dom";
import HealthcareHeader from "@/pages/services/HealthcareBPO/HealthcareHeader";

const MedicalAnimationServices: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <HealthcareHeader />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        <h2 className="text-3xl font-bold text-[#006A7C] mb-6">
          Medical Animation Services
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Transform complex medical details into engaging, easy-to-understand
          visuals with our <strong>medical animation services</strong>.
        </p>
        <p className="text-gray-600">
          Are you looking for ways to communicate intricate medical information
          with scientific accuracy and clarity? Do you struggle with regulatory
          compliance, technical complexity, or audience engagement? At{" "}
          <strong>nimble acuity</strong>, we simplify these challenges through
          advanced 2D/3D medical animations tailored for education, training,
          marketing, and patient engagement.
        </p>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-16">
        <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
          Our Custom Medical Animation Services
        </h3>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            <strong>Mechanism of Action (MoA) Animation:</strong> Visualizing
            molecular-level processes and drug interactions for pharmaceuticals,
            biotech, and clinical research.
          </li>
          <li>
            <strong>Patient Education Animation:</strong> Clear and culturally
            adaptive animations that simplify diagnoses, treatments, and
            procedures for hospitals, clinics, and telehealth providers.
          </li>
          <li>
            <strong>Surgical Procedure Animation:</strong> Step-by-step
            visualization of surgical techniques, including laparoscopic,
            robotic, and open procedures, ideal for training and informed
            consent.
          </li>
          <li>
            <strong>Medical Device Animation:</strong> Showcasing device design,
            assembly, and functionality for investor presentations, sales, or
            regulatory approvals.
          </li>
          <li>
            <strong>Medical Training & eLearning Modules:</strong> Interactive
            content covering anatomy, pharmacology, and clinical best practices,
            SCORM-compliant for LMS integration.
          </li>
          <li>
            <strong>Pharma Marketing & Explainer Videos:</strong> Brand-aligned
            animations with voiceovers and CTAs for digital campaigns,
            conferences, and HCP portals.
          </li>
          <li>
            <strong>Anatomy & Physiology Animation:</strong> High-detail 3D
            models of organs and systems with layered breakdowns for academic
            and simulation-based learning.
          </li>
          <li>
            <strong>Disease Progression & Treatment Pathway Animation:</strong>{" "}
            Visual storytelling of disease evolution and treatment impact for
            patient education and healthcare awareness campaigns.
          </li>
        </ul>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-16">
        <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
          Why Choose nimble acuity for Medical Animation?
        </h3>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            <strong>Multi-Platform Compatibility & Localization:</strong>{" "}
            Animations ready for web, mobile, LMS, and live demos with
            multilingual support.
          </li>
          <li>
            <strong>Custom-Tailored Deliverables:</strong> Adaptable formats for
            presentations, websites, patient portals, or e-learning platforms.
          </li>
          <li>
            <strong>Enhanced User Experience:</strong> Intuitive, user-friendly
            animation design to boost engagement and learning outcomes.
          </li>
          <li>
            <strong>Robust Quality Assurance:</strong> Multi-layered QA with
            peer reviews and testing to ensure accuracy and excellence.
          </li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-12 px-6 md:px-12 lg:px-24 mb-16">
        <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
          Client Testimonials
        </h3>
        <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
          “We were very satisfied with the quality of service{" "}
          <strong>nimble acuity</strong> provided. They met our requests with
          great professionalism and flexibility. We look forward to future
          collaborations.”
          <footer className="mt-2 font-medium text-gray-600">
            — Spokesperson, Online health lessons company, Canada
          </footer>
        </blockquote>
      </section>

      {/* Success Stories */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-16">
        <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
          Success Stories
        </h3>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            <strong>
              3D Animation and 3D Modeling for a Scandinavian Medical Research
              Company
            </strong>{" "}
            [Read more]
          </li>
          <li>
            <strong>
              End-to-End Animation Services for Alcohol and Drug Awareness
              Campaign
            </strong>{" "}
            [Read more]
          </li>
        </ul>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 py-12 px-6 md:px-12 lg:px-24 mb-16">
        <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
          Additional Healthcare Services We Offer
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <ul className="list-disc list-inside space-y-2">
            <li>Medical Transcription Services</li>
            <li>Medical Billing Services</li>
            <li>Revenue Cycle Management Services</li>
            <li>Medical Coding Services</li>
          </ul>
          <ul className="list-disc list-inside space-y-2">
            <li>Pharmacy Business Services</li>
            <li>Healthcare Claims Adjudication Services</li>
            <li>EMR Services</li>
            <li>Telehealth Services</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6 md:px-12 lg:px-24">
        <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
          Partner with nimble acuity Today
        </h3>
        <p className="text-gray-700 mb-6">
          Enhance communication, improve engagement, and bring clarity to
          complex medical concepts with our professional{" "}
          <strong>medical animation services</strong>.
        </p>
        <Link to="/contact">
          <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
};

export default MedicalAnimationServices;
