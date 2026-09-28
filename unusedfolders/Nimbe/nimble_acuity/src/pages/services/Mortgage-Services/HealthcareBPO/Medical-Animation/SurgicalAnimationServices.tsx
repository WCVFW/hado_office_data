import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const SurgicalAnimationServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Surgical Animation Services
            </h2>
            <p className="text-lg text-gray-600">
              Educate patients, drive marketing, and explain medical concepts and surgical procedures with high-quality surgical animation services from <strong>Nimble Acuity</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are your patients misinterpreting the surgical process? Is a limited budget preventing you from creating your own surgical animations? Take the smart step by outsourcing surgical animation to a reputable service provider. With intuitive animation, you can confidently educate patients and help them make informed decisions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By outsourcing surgical animation services to <strong>Nimble Acuity</strong>, you can free your team to focus on patient care instead of the animation process. Our affordable solutions help you get started quickly, using high-quality surgical animations for websites, social media, or other platforms.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Surgical Animation Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Medical Animation:</strong> Simplify the surgical process for patients with intuitive animations that enhance understanding.</li>
              <li><strong>Scientific Animation:</strong> Explain complex mechanisms of action (MOA) using 3D animation to make scientific concepts accessible.</li>
              <li><strong>Animation of Surgical Procedures:</strong> Visualize surgeries in first, second, or third person, helping patients understand risks and benefits through realistic animations.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Surgical Animation Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Conceptualization and Storyboard Creation:</strong> Collaborate to understand your goals and convert ideas into a storyboard.</li>
              <li><strong>3D Modeling, Animation, and Rendering:</strong> Animate anatomy, scenes, and characters with high-quality 3D rendering at 30 FPS.</li>
              <li><strong>Compositing:</strong> Seamlessly stitch frames together for smooth transitions.</li>
              <li><strong>Audio and Music Integration:</strong> Sync audio and music with the animation perfectly.</li>
              <li><strong>Editing and File Export:</strong> Finalize the animation ensuring flawless audio-video synchronization and export the final files.</li>
              <li><strong>Reporting and Feedback:</strong> Provide reports for better understanding of the work and results.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Surgical Animation?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified Services:</strong> HIPAA-compliant and ISO 9001:2015 accredited surgical animation provider.</li>
              <li><strong>Data Security:</strong> Confidential data protected on secure cloud platforms.</li>
              <li><strong>High Accuracy and Quality:</strong> Accurate, high-quality animations guaranteed.</li>
              <li><strong>Quick Turnaround:</strong> Fast project delivery using the latest technology and software.</li>
              <li><strong>Scalability:</strong> Services can be scaled up or down according to project needs.</li>
              <li><strong>Affordable Pricing:</strong> Flexible pricing options for maximum value without overspending.</li>
              <li><strong>Single Point of Contact:</strong> Dedicated project manager for routine updates and clarifications.</li>
              <li><strong>Experienced Team:</strong> 500+ animation experts delivering projects efficiently.</li>
              <li><strong>Modern Infrastructure:</strong> State-of-the-art hardware, software, and security systems.</li>
              <li><strong>Secure Data Exchange:</strong> FTP and VPN for fast and secure file transfers.</li>
              <li><strong>24/7 Availability:</strong> Global support for uninterrupted service year-round.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Surgical Animation Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with <strong>Nimble Acuity</strong> to streamline patient education, improve marketing, and explain complex medical concepts efficiently. Our team ensures high-quality surgical animation for your platforms, allowing you to focus on your practice.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> for professional surgical animation services tailored to your needs.
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

export default SurgicalAnimationServices;
