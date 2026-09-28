import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const MedicalDeviceAnimationServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Medical Device Animation Services
            </h2>
            <p className="text-lg text-gray-600">
              Utilize medical device animations to educate patients, demonstrate usage, and support post-surgery recovery. Outsource your animation projects to <strong>Nimble Acuity</strong> for high-quality, precise results.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Medical devices transform lives, but explaining their usage effectively requires clear, visual communication. At <strong>Nimble Acuity</strong>, we combine artistic expertise with technical accuracy to create animations that educate patients, engage stakeholders, and drive awareness.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With over 26 years of experience, we deliver innovative, immersive, and accurate medical device animations for hospitals, device manufacturers, and healthcare providers.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Medical Device Animation Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Animation for Medical Device Companies:</strong> Illustrate the purpose and results of devices clearly, for both bulk and standalone projects.</li>
              <li><strong>Enhancing Medical Device Marketing:</strong> Transform complex features into persuasive animations that engage prospects quickly and effectively.</li>
              <li><strong>Medical Device Explainer Videos:</strong> Create dynamic audiovisual content that demonstrates device usage and benefits for patients.</li>
              <li><strong>Virtual Reality (VR) Content:</strong> Develop immersive VR experiences to visualize device operation and functionality in a simulated environment.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Medical Device Animation Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Project Discussion:</strong> Understand goals and establish a unique project scope with the client.</li>
              <li><strong>Proposal Crafting:</strong> Create a detailed project plan outlining workflow and deliverables.</li>
              <li><strong>Team Assembly:</strong> Select animators and project management staff based on skills and experience.</li>
              <li><strong>Project Briefing:</strong> Brief the team to clarify goals and customize the animation process.</li>
              <li><strong>Animation Implementation:</strong> Execute the animation according to the service level agreement (SLA).</li>
              <li><strong>Quality Control:</strong> Rigorously test animations and recommend corrections as needed.</li>
              <li><strong>Final Submission:</strong> Deliver completed animations along with a comprehensive project report.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified and Compliant:</strong> HIPAA and ISO 9001:2015 certified provider.</li>
              <li><strong>Data Security:</strong> Secure cloud-based handling of all confidential information.</li>
              <li><strong>High Accuracy and Quality:</strong> 100% quality assurance with meticulous frame-by-frame review.</li>
              <li><strong>Cost-Effective Pricing:</strong> Affordable solutions designed to maximize value.</li>
              <li><strong>Modern Infrastructure:</strong> State-of-the-art software, hardware, and technology for optimal results.</li>
              <li><strong>Short Turnaround Time (TAT):</strong> Fast and efficient workflow without compromising quality.</li>
              <li><strong>Scalability:</strong> Services can be scaled to match evolving project requirements.</li>
              <li><strong>Experienced Team:</strong> Skilled animators and project managers ensure expert delivery.</li>
              <li><strong>24/7 Availability:</strong> Global support available anytime, anywhere.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity Today
            </h3>
            <p className="text-gray-700 mb-6">
              Outsource your medical device animation projects to <strong>Nimble Acuity</strong> and gain high-quality, accurate, and visually compelling animations that educate and engage.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us now</strong> to get a project estimate within 24 hours and bring your medical device visuals to life.
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

export default MedicalDeviceAnimationServices;
