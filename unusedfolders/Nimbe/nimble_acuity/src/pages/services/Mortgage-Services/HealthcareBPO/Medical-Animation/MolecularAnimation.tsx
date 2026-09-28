import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const MolecularAnimation: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Molecular Animation Services
            </h2>
            <p className="text-lg text-gray-600">
              Deliver complex molecular-level concepts with clarity through high-performing <strong>2D/3D molecular animations</strong> designed by <strong>Nimble Acuity</strong>. We simplify science with visuals that engage, educate, and inspire.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you a scientist, researcher, or educator who needs to communicate intricate molecular processes in a clear and compelling way? Do you find it challenging to showcase how molecules behave and interact? Partner with <strong>Nimble Acuity</strong> — a trusted provider of molecular animation services that makes the invisible visible.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With decades of expertise, our animators combine cutting-edge tools with a deep understanding of molecular biology to create precise, visually stunning animations. From education to research presentations and commercial use, we help you connect with your audience effectively.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Molecular Animation Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>2D Molecular Animation:</strong> Simplify complex processes with clear, easy-to-understand visuals that effectively convey your message.</li>
              <li><strong>3D Molecular Animation:</strong> Showcase detailed molecular structures and interactions with immersive, high-quality 3D animations that captivate audiences.</li>
              <li><strong>Content Creation:</strong> Transform complex technical data into engaging narratives and persuasive scientific content.</li>
              <li><strong>Conversion-Focused Integration:</strong> Embed molecular animations into websites, landing pages, and presentations to drive engagement and conversions.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Molecular Animations?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing:</strong> Flexible pricing models that maximize value without compromising quality.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified with stringent security protocols to safeguard scientific data.</li>
              <li><strong>Quality Assurance:</strong> ISO 9001:2015 certified and HIPAA-compliant processes for accuracy and reliability.</li>
              <li><strong>World-Class Infrastructure:</strong> State-of-the-art facilities for consistent, high-quality output.</li>
              <li><strong>Cutting-Edge Tools:</strong> Expertise in the latest molecular animation software and technologies.</li>
              <li><strong>Experienced Team:</strong> Animators with strong molecular biology backgrounds and decades of proven success.</li>
              <li><strong>On-Time Delivery:</strong> Reliable, fast turnarounds to meet tight deadlines without sacrificing quality.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Communicate Science with Impact
            </h3>
            <p className="text-gray-700 mb-6">
              At <strong>Nimble Acuity</strong>, we transform complex molecular biology concepts into clear, engaging animations that educate, inform, and persuade. Our services are cost-effective, accurate, and backed by years of expertise.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Get in touch today</strong> to explore how our molecular animation services can amplify your research, education, or marketing.
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

export default MolecularAnimation;
