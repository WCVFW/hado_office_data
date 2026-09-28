import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const MedicalAnimation2D: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              2D Medical Animation Services
            </h2>
            <p className="text-lg text-gray-600">
              Partner with <strong>nimble acuity</strong> to transform complex medical concepts into engaging and easy-to-understand 2D animations — helping hospitals, medical schools, and researchers communicate with clarity and precision.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Is your medical business looking for an effective way to showcase human anatomy or complex healthcare concepts? Instead of hiring full-time animators, you can outsource to <strong>nimble acuity</strong> and access our team of 2D medical animation experts. With over two decades of experience, we create high-quality animations for presentations, training, education, and research.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our 2D animators are experts in medical visualization and use state-of-the-art tools to deliver precise, clear, and visually engaging animations that support patients, students, pharmaceutical companies, and physicians alike.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              2D Medical Animation Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Hand-drawn Medical Animations:</strong> Frame-by-frame representations created by skilled illustrators, ideal for detailed, budget-friendly projects.</li>
              <li><strong>2D Motion Graphics Animations:</strong> Transform hand-drawn images into digital motion graphics using tools like Photoshop and Flash for more dynamic storytelling.</li>
              <li><strong>Whiteboard Medical Animations:</strong> Engage audiences with animated whiteboard drawings that clearly explain medical processes step by step.</li>
            </ul>
          </div>

          {/* Industries */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Industries We Serve
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Pharmaceutical Companies:</strong> Animations that explain drug mechanisms to healthcare providers and patients.</li>
              <li><strong>Medical Device Manufacturers:</strong> Visual product demonstrations for surgeons and healthcare professionals.</li>
              <li><strong>Government Health Programs:</strong> Awareness campaigns covering topics from tobacco effects to pregnancy care.</li>
              <li><strong>Medical Institutions:</strong> Illustrated animations for e-learning, classroom presentations, and training modules.</li>
              <li><strong>Hospitals:</strong> Patient education materials, logo animations, and awareness campaign visuals.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              2D Medical Animation Process We Follow
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Analysis:</strong> Understand project goals, audience, and competitors.</li>
              <li><strong>Team Selection:</strong> Assign resources and a dedicated project manager.</li>
              <li><strong>Animation Production:</strong> Create concept art, storyboards, and final animations with ongoing client updates.</li>
              <li><strong>Quality Check:</strong> Multi-level QA to ensure ISO standards and SLA adherence.</li>
              <li><strong>Delivery:</strong> Provide animations in the client’s preferred formats with post-delivery support for adjustments.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity for 2D Medical Animation?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>ISO-Certified Processes:</strong> Rigorous workflows covering scripting, storyboarding, production, and post-production.</li>
              <li><strong>Quality Assurance:</strong> Dedicated QA team ensuring accuracy, compliance, and SLA adherence.</li>
              <li><strong>Data Security:</strong> GDPR, NDA, and ISO/IEC 27001:2022 compliant policies with secure transfer protocols.</li>
              <li><strong>Flexible Pricing:</strong> Choose from hourly, per-project, or FTE engagement models.</li>
              <li><strong>Advanced Tools:</strong> Expertise in Photoshop, Flash, Illustrator, Premiere Pro, After Effects, and more.</li>
              <li><strong>Scalable Services:</strong> Ability to scale resources based on project needs and deadlines.</li>
              <li><strong>Fast Turnaround:</strong> Global delivery centers for overnight or urgent projects.</li>
              <li><strong>Dedicated SPOC:</strong> Single point of contact for streamlined communication.</li>
              <li><strong>Experienced Team:</strong> 30+ animators, illustrators, and graphic artists with years of experience.</li>
              <li><strong>24/7 Support:</strong> Round-the-clock availability with free revisions and timezone flexibility.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Medical Imaging Firm:</strong> Delivered quick and affordable teleradiology services to meet urgent client needs.</li>
              <li><strong>Kareo Software Project:</strong> Provided charge and demographic entry services with 98% accuracy and 45% cost savings, processing over 17,000 claims in one month.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "Thank you so much as always, for the brilliant work. The quality is always exceptional, and your support is invaluable. I truly appreciate the consistency and dedication of your team."
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              — Radiologist, Oncological Imaging Specialist, Specialist Radiology Diagnostic Clinic, Australia
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity for 2D Medical Animation Services
            </h3>
            <p className="text-gray-700 mb-6">
              From concept creation and motion styling to simulation and training, <strong>nimble acuity</strong> provides end-to-end 2D medical animation solutions tailored to your needs.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> to get sample demos and a free quote within one business day.
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

export default MedicalAnimation2D;
