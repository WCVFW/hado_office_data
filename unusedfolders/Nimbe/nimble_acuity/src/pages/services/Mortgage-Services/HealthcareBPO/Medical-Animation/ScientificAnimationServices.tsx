import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const ScientificAnimationServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Scientific Animation Services
            </h2>
            <p className="text-lg text-gray-600">
              Nimble Acuity provides professional scientific animation services that help healthcare companies, medical professionals, and students expand their reach, simplify complex concepts, and engage their audience effectively.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Struggling to create impactful learning experiences due to subpar animations? <strong>Nimble Acuity</strong> combines deep biological understanding with artistic expertise to create 3D scientific animations that educate, engage, and inspire.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our animations are perfect as training tools for healthcare professionals, educational content for students, or promotional material for social media and online platforms.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Scientific Animation Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Interactive Scientific Animation:</strong> Create interactive training materials using advanced visualization techniques for science education, documentaries, or museum exhibits.</li>
              <li><strong>Medical Concept Animation:</strong> Produce 2D and 3D animations that explain complex surgical and physiological concepts for patients and professionals.</li>
              <li><strong>Surgical Animations:</strong> Provide intuitive 3D animations that clearly illustrate surgical procedures, helping patients understand risks, benefits, and outcomes.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Scientific Animation Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Conceptualization and Storyboard Creation:</strong> Collaborate with your team to collect requirements and finalize the animation script.</li>
              <li><strong>3D Modeling, Animation, and Rendering:</strong> Bring the storyboard to life using advanced 3D animation software.</li>
              <li><strong>Compositing:</strong> Blend image clips and layers to create seamless animated sequences.</li>
              <li><strong>Foley and Music Integration:</strong> Add sound effects and music perfectly synced with the visuals.</li>
              <li><strong>Editing and Final Export:</strong> Perform frame-by-frame checks and deliver a flawless, polished animation.</li>
              <li><strong>Reporting and Feedback:</strong> Provide comprehensive documentation and reports for the completed project.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Scientific Animation?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified and Compliant:</strong> ISO 9001:2015 accredited and HIPAA-compliant provider.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 accredited practices ensure complete protection of confidential information.</li>
              <li><strong>High Accuracy and Quality:</strong> 100% quality assurance with regular checks and frame-level verification.</li>
              <li><strong>Fast Turnaround:</strong> Reliable delivery under tight deadlines without compromising quality.</li>
              <li><strong>Scalability:</strong> Services can be scaled up or down to meet your changing project requirements.</li>
              <li><strong>Affordable Pricing:</strong> Flexible plans tailored to fit your budget.</li>
              <li><strong>Dedicated Point of Contact:</strong> Receive personalized support and real-time updates through a dedicated project manager.</li>
              <li><strong>Experienced Team:</strong> Skilled animators with deep expertise in both healthcare and animation tools.</li>
              <li><strong>Modern Infrastructure:</strong> State-of-the-art software, hardware, and security systems routinely updated.</li>
              <li><strong>Secure Data Exchange:</strong> Safe file transfers via SFTP and VPN.</li>
              <li><strong>24/7 Availability:</strong> Support available round-the-clock across time zones.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity for Scientific Animation
            </h3>
            <p className="text-gray-700 mb-6">
              Outsource your scientific animation needs to <strong>Nimble Acuity</strong> and get high-quality, accurate, and engaging animations that educate, inform, and impress.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> to discuss your project and receive a tailored solution.
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

export default ScientificAnimationServices;
