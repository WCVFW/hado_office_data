import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const OnsiteTeleradiology: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              On-site and Teleradiology Interpretation Services
            </h2>
            <p className="text-lg text-gray-600">
              Our on-site and teleradiology interpretation services increase your bandwidth, 
              allowing you to focus on core tasks while we deliver accurate reads at competitive rates. 
              With certified radiologists available both remotely and on-site, 
              <strong> Nimble Acuity </strong> ensures precise, timely, and reliable radiology interpretations.
            </p>
          </div>

          {/* Introduction */}
          <div className="max-w-6xl mb-16">
            <p className="text-gray-700">
              At <strong>Nimble Acuity</strong>, our expert medical professionals assist government hospitals, 
              private healthcare centers, diagnostic centers, radiology departments, private practitioners, 
              and individuals. Our certified radiologists assess, evaluate, and interpret medical images 
              in real-time, delivering accurate diagnoses and seamless collaboration with your medical staff.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              On-site and Teleradiology Interpretation Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Medical Imaging:</strong> High-quality 3D image processing services and anatomical models with fast turnaround.</li>
              <li><strong>Reads for Different Modalities:</strong> X-rays, MRI, ultrasound, PET-CT, mammograms, nuclear medicine, and more.</li>
              <li><strong>3D Image Processing:</strong> Flawless 3D images and PACS/RIS integration for scalable support.</li>
              <li><strong>On-site Diagnostic Radiology:</strong> Immediate evaluations and reports on-site, with direct collaboration with your medical staff.</li>
              <li><strong>Nighthawk Teleradiology:</strong> 24/7 detailed reads across all modalities to reduce staff workload.</li>
              <li><strong>eRAD PACS System:</strong> Secure sharing and remote access for efficient teleradiology workflows.</li>
              <li><strong>Radiology Information Systems (RIS):</strong> Seamless management of images, billing, and reports with quick accessibility.</li>
              <li><strong>Second Opinion Reads:</strong> Independent confirmation of diagnoses or consultation support.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our On-site and Teleradiology Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Diagnostic imagery developed at your facility.</li>
              <li>Images accessed via PACS and evaluated in real-time.</li>
              <li>Preliminary analysis by junior radiologists.</li>
              <li>Verification by senior radiologists.</li>
              <li>Final confirmation and sign-off by head of radiology.</li>
              <li>Secure delivery of final report.</li>
              <li>Board-certified review for compliance and accuracy.</li>
            </ol>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>State-of-the-art technology:</strong> Flawless imaging and integration.</li>
              <li><strong>Skilled team:</strong> Experienced radiologists and IT specialists.</li>
              <li><strong>Customized solutions:</strong> Tailored to your workflow.</li>
              <li><strong>Rapid turnaround:</strong> Accurate, timely reads.</li>
              <li><strong>Data security:</strong> HIPAA-compliant protocols.</li>
              <li><strong>Cost-effective:</strong> Flexible per-exam pricing models.</li>
              <li><strong>Scalable services:</strong> Adjusted to demand and urgency.</li>
              <li><strong>24/7 support:</strong> Assistance via chat, phone, or email.</li>
            </ul>
          </div>

          {/* Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Quick Teleradiology Support:</strong> Helped a medical imaging firm clear backlog within 24 hours using PACS software.</li>
              <li><strong>Full-Service Billing:</strong> Reduced AR days and improved revenue cycle with Medisoft billing support.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              What Our Clients Say
            </h3>
            <blockquote className="italic text-gray-700 mb-4">
              "We are very pleased with the work and attention to detail provided under our services agreement with Nimble Acuity. We continue to enhance our relationship thanks to their professionalism and expertise."
            </blockquote>
            <p className="text-sm font-semibold text-gray-600">
              MD, Billing Service Company for Surgical Providers, Georgia, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource On-site & Teleradiology Services Today
            </h3>
            <p className="text-gray-700 mb-6">
              Partnering with <strong>Nimble Acuity</strong> ensures accurate diagnoses, efficient workflows, and better patient outcomes. 
              Outsource your interpretation needs to us and let our certified radiologists provide the expertise your team deserves.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get in Touch
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default OnsiteTeleradiology;
