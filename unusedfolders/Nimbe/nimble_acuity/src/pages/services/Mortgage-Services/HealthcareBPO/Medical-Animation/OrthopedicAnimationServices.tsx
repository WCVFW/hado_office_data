import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const OrthopedicAnimationServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Orthopedic Animation Services
            </h2>
            <p className="text-lg text-gray-600">
              Demonstrate complex orthopedic procedures with persuasive and educational animations, starting at $15–$25 per second. Outsource your orthopedic animation services to <strong>Nimble Acuity</strong> and save time, cost, and effort.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Orthopedic animation services are the stepping stone to the future of innovation. At <strong>Nimble Acuity</strong>, we provide 3D animations that connect ideas persuasively, simplify visualization, and help patients and stakeholders understand complex procedures.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With 26+ years of experience, our bespoke orthopedic animations serve clinics, hospitals, and medical organizations by enhancing patient engagement and supporting clinical research.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Orthopedic Animation Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Knee Replacement Animation:</strong> Educate patients about knee replacement procedures, explaining technology and engineering behind proven treatment methods.</li>
              <li><strong>Interactive Learning through Orthopedic Animation:</strong> Provide intuitive, engaging educational animations for medical students and practitioners to enhance learning and clinical understanding.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Orthopedic Animation Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Gathering and Conceptualization:</strong> Discuss business requirements and project scope with the client.</li>
              <li><strong>Project Proposal:</strong> Develop and present a project plan for approval.</li>
              <li><strong>Team Assembly:</strong> Assign animators and project management professionals based on experience.</li>
              <li><strong>Project Briefing:</strong> Clarify client concerns with the team before execution.</li>
              <li><strong>Animation Execution:</strong> Create orthopedic animations according to the service level agreement (SLA).</li>
              <li><strong>Quality Control:</strong> Evaluate animation quality and recommend corrections.</li>
              <li><strong>Project Submission:</strong> Deliver final animations and reports for client approval.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Orthopedic Animation?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified Orthopedic Animation Services Company:</strong> HIPAA-compliant and ISO 9001:2015 accredited provider.</li>
              <li><strong>Data Security:</strong> Safe and secure management of your data.</li>
              <li><strong>High Accuracy and Quality:</strong> QA experts ensure smooth transitions and flawless animations.</li>
              <li><strong>Affordable Pricing:</strong> Cost-effective solutions suitable for any budget.</li>
              <li><strong>Modern Infrastructure:</strong> Access to state-of-the-art software, hardware, and technology.</li>
              <li><strong>Quick Turnaround:</strong> Fast project delivery while maintaining quality.</li>
              <li><strong>Scalability:</strong> Services can be customized or scaled according to requirements.</li>
              <li><strong>Experienced Team:</strong> Skilled animators, project leads, and managers ensure top-notch results.</li>
              <li><strong>Round-the-clock Availability:</strong> 24/7 support via phone, email, or chat.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Orthopedic Animation Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with <strong>Nimble Acuity</strong> to create high-quality orthopedic animations for patient education, clinical research, and stakeholder engagement. Focus on your practice while we deliver professional, precise animations.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> to get customized orthopedic animation services and receive a project estimate within 24 hours.
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

export default OrthopedicAnimationServices;
