import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const MedicalIllustration3D: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              3D Medical Illustration Services
            </h2>
            <p className="text-lg text-gray-600">
              Elevate medical education, research, and marketing with professional <strong>3D medical illustrations</strong> from <strong>Nimble Acuity</strong> — your one-stop solution for accurate, engaging, and impactful visuals.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Do you need expert <strong>3D medical illustrators</strong> who can recreate anatomical structures with precision? Are your in-house resources struggling to deliver accurate, anatomically correct teaching models? Partner with <strong>Nimble Acuity</strong> — a top-tier provider of 3D medical illustrations trusted by healthcare organizations worldwide.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our certified medical illustrators combine traditional methods with cutting-edge digital rendering to create visuals that enhance education, support research, and boost healthcare communication. Beyond illustrations, we also provide consultation and advisory services in visual medical education.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              3D Medical Illustration Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>3D Medical Illustrations:</strong> High-quality renders with the ability to generate up to 1,800 illustrations per minute of animation at 30fps — fast, accurate, and cost-efficient.</li>
              <li><strong>3D Biomedical Illustrations:</strong> Surgical manuals, journals, brochures, and marketing materials designed with precision for both academic and commercial purposes.</li>
              <li><strong>3D Anatomical Illustrations:</strong> Custom illustrations for manuals, product packaging, web graphics, tradeshows, and patient awareness campaigns.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              The Medical Illustration Process We Follow
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Conceptualization & Creation:</strong> Collaborate with your team to define requirements and formalize illustration concepts.</li>
              <li><strong>3D Modeling & Rendering:</strong> Use hand-drawn and digital methods to create detailed anatomical systems and characters.</li>
              <li><strong>Compositing:</strong> Combine multiple frames into seamless sequences with client collaboration.</li>
              <li><strong>Editing & Export:</strong> Refine images, correct inaccuracies, and deliver final outputs per SLA.</li>
              <li><strong>Reporting & Feedback:</strong> Provide project reports and incorporate client feedback for continuous improvement.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for 3D Medical Illustrations?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified & Compliant:</strong> ISO 9001:2015 accredited and HIPAA-compliant processes.</li>
              <li><strong>Data Security:</strong> Advanced protection with secure SFTP and VPN data exchanges.</li>
              <li><strong>High Accuracy & Quality:</strong> 100% precision in every illustration to meet client expectations.</li>
              <li><strong>Quick Turnaround:</strong> Fast, efficient project delivery without compromising quality.</li>
              <li><strong>Scalable Services:</strong> Flexible resource allocation to handle projects of any size.</li>
              <li><strong>Affordable Pricing:</strong> Cost-effective solutions with hourly, project-based, or dedicated engagement models.</li>
              <li><strong>Dedicated SPOC:</strong> Single point of contact for seamless communication.</li>
              <li><strong>Experienced Team:</strong> 500+ licensed illustrators with decades of expertise.</li>
              <li><strong>Modern Infrastructure:</strong> Advanced hardware, software, and secure systems for flawless output.</li>
              <li><strong>24/7 Availability:</strong> Round-the-clock support across time zones.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity for 3D Medical Illustration Services
            </h3>
            <p className="text-gray-700 mb-6">
              With over 25 years of experience, <strong>Nimble Acuity</strong> delivers high-quality 3D medical illustrations that empower education, research, and healthcare marketing. Our proven process ensures accuracy, security, and scalability.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> to discuss your requirements and get a customized quote.
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

export default MedicalIllustration3D;
