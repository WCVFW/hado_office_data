import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const Medical3DAnimation: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              3D Medical Animation Services
            </h2>
            <p className="text-lg text-gray-600">
              Guide patients, investors, and stakeholders with high-quality <strong>3D medical animations</strong> that simplify complex medical concepts and inspire confidence.
            </p>
          </div>

          {/* Intro Section */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Do you need visually compelling <strong>3D medical animation services</strong> for training, education, or presentations? Are you falling behind competitors due to inefficient animation solutions?  
              <strong> Nimble Acuity</strong> specializes in creating precise and engaging 3D animations that demonstrate medical processes, devices, and procedures with unmatched clarity.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With decades of experience, our team has built a reputation as a trusted partner for healthcare institutions, medical researchers, and device manufacturers. Whether for social media, websites, or in-person demonstrations, our animations deliver impactful results.
            </p>
          </div>

          {/* Services Section */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              3D Medical Animation Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Medical Animation:</strong> Demonstrate medical concepts, prototypes, and devices with scientifically accurate 3D visuals for patient education, investor relations, and awareness campaigns.</li>
              <li><strong>Scientific Animation:</strong> Showcase complex scientific processes such as the mechanism of action (MOA) of drugs, scaling from nanostructures to complex systems.</li>
              <li><strong>Surgical Procedure Animation:</strong> Provide detailed visualizations of surgical procedures, enabling surgeons to educate patients, reduce concerns, and set accurate expectations.</li>
            </ul>
          </div>

          {/* Process Section */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our 3D Medical Animation Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Conceptualization & Storyboarding:</strong> Collaborate with clients to outline narratives and visual flow.</li>
              <li><strong>3D Modeling, Animation & Rendering:</strong> Build anatomically accurate models using industry-leading tools.</li>
              <li><strong>Compositing:</strong> Combine multiple clips into seamless sequences with quality checks.</li>
              <li><strong>Foley & Music Integration:</strong> Add synchronized audio and sound effects for immersive experiences.</li>
              <li><strong>Editing & Export:</strong> Refine every frame for smooth transitions and deliver in preferred formats.</li>
              <li><strong>Reporting & Feedback:</strong> Provide detailed reports and incorporate client feedback for improvements.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified & Compliant:</strong> HIPAA-compliant and ISO 9001:2015 accredited services.</li>
              <li><strong>Data Security:</strong> Robust data protection with secure cloud storage, SFTP, and VPN transfers.</li>
              <li><strong>High Accuracy:</strong> 100% quality standards with medically accurate animations.</li>
              <li><strong>Quick Turnaround:</strong> Agile teams deliver projects on time without compromising quality.</li>
              <li><strong>Scalable Solutions:</strong> Flexible engagement models suited to small and large projects alike.</li>
              <li><strong>Affordable Pricing:</strong> Cost-effective, customizable pricing options.</li>
              <li><strong>SPOC:</strong> A dedicated project manager for seamless communication.</li>
              <li><strong>Experienced Team:</strong> Hundreds of 3D animators and specialists with decades of expertise.</li>
              <li><strong>Modern Infrastructure:</strong> AI-supported systems, advanced rendering, and secure workflows.</li>
              <li><strong>24/7 Availability:</strong> Global support available around the clock, across all time zones.</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Communicate Medical Concepts with Precision
            </h3>
            <p className="text-gray-700 mb-6">
              At <strong>Nimble Acuity</strong>, we transform complex medical information into clear, engaging 3D animations that educate, persuade, and inspire. With decades of experience and healthcare expertise, we deliver solutions that stand out.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> to explore flexible pricing models and get started with professional <strong>3D medical animation services</strong>.
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

export default Medical3DAnimation;
