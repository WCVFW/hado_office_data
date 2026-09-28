import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const BiomedicalIllustration: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Biomedical Illustration Services
            </h2>
            <p className="text-lg text-gray-600">
              Get highly affordable <strong>biomedical illustration services</strong> to help patients understand illnesses, treatment options, and make better decisions.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking for talented artists to create realistic visualizations of human physiology and anatomy? Do you lack the right expertise to help patients understand treatment options based on disease classification and pathology? Are you struggling to create effective biomedical illustrations for surgical manuals, brochures, and medical graphics for digital and non-digital promotions? If so, partner with true specialists.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Nimble Acuity</strong> is not just an ordinary provider of biomedical illustration services. We are backed by decades of experience and have served thousands of satisfied clients globally. Our content specialists and physicians collaborate to deliver meaningful and engaging visualizations that are ideal for patient education. We work with agility and precision to make your biomedical illustrations stand out.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Biomedical Illustration Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Illustration of Biomedical Systems:</strong> Surgical manuals accurate to the smallest detail, brochures, and 3D illustrations for immersive learning experiences. Supports personal injury or malpractice cases.</li>
              <li><strong>Illustration of Anatomical Details:</strong> Precision illustrations for patient flyers, training guides, tradeshow graphics, or websites to educate patients and consumers effectively.</li>
              <li><strong>Surgical Procedure Animation:</strong> 3D medical animations presenting every detail concisely to give patients a clear understanding of procedures, standing out from assumption-driven visuals.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Biomedical Illustration Process We Follow
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Conceptualization and Storyboard Creation:</strong> Collaborate with your team to finalize storyboards.</li>
              <li><strong>Biomedical Illustration and Rendering:</strong> Use specialized software to create visually stunning presentations.</li>
              <li><strong>Compositing:</strong> Consolidate multiple video clips into a rich, informative stream.</li>
              <li><strong>Editing and File Export:</strong> Expert editors review every frame for perfect results.</li>
              <li><strong>Reporting and Feedback:</strong> Provide clear, jargon-free progress reports with estimated completion times.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Biomedical Illustration Services from Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified and Compliant:</strong> HIPAA-compliant and ISO 9001:2015 accredited with full biomedical knowledge.</li>
              <li><strong>Data Security:</strong> Highest level of protection for your confidential data.</li>
              <li><strong>High Accuracy and Quality:</strong> 100% quality assurance from start to finish.</li>
              <li><strong>Short Turnaround:</strong> Fast delivery under tight deadlines without compromise.</li>
              <li><strong>Scalability:</strong> Services can scale up or down to match your needs.</li>
              <li><strong>Pocket-Friendly Pricing:</strong> Flexible rates to suit your budget.</li>
              <li><strong>Single Point of Contact:</strong> Dedicated project manager for personalized support.</li>
              <li><strong>Experienced Team:</strong> Skilled artists, content managers, and biomedical professionals.</li>
              <li><strong>Modern Infrastructure:</strong> Continuously updated security, hardware, and software.</li>
              <li><strong>Secure Data Exchange:</strong> VPN and SFTP file transfers for reliable security.</li>
              <li><strong>Round-the-Clock Availability:</strong> Reachable by phone, email, or chat at all stages.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Contact Nimble Acuity for Biomedical Illustration Services
            </h3>
            <p className="text-gray-700 mb-6">
              With decades of experience, Nimble Acuity delivers high-quality illustration services tailored to your needs. Communicate with patients effectively using our expert biomedical illustrations.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> for customized biomedical illustration services at a price that fits your budget.
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

export default BiomedicalIllustration;
