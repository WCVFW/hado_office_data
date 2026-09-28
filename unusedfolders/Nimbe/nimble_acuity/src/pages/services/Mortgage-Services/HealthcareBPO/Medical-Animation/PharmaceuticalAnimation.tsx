import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const PharmaceuticalAnimation: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Pharmaceutical Animation Services
            </h2>
            <p className="text-lg text-gray-600">
              Pharmaceutical companies, hospitals, and clinics can leverage our <strong>pharmaceutical animation</strong> content to illustrate how medicines affect tissues and organs and convey information visually.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Visual storytelling helps you convey ideas that are difficult to explain with print, videos, or seminars. Not every organization has the budget to create professional-quality <strong>pharmaceutical animation</strong>. Partnering with <strong>Nimble Acuity</strong> allows you to explain to patients, pharmaceutical stakeholders, and course takers how medicines work at a pathological level.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Nimble Acuity</strong> is a top provider of <strong>pharmaceutical animation services</strong> with decades of experience. Our techniques present ideas in rich detail so patients and stakeholders can easily understand how medicines interact with the body.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Pharmaceutical Animation Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>3D Pharmaceutical Illustration and Artworking:</strong> Complete 3D animations with illustrations and artwork, cleaned by experts to maintain design integrity.</li>
              <li><strong>3D Whiteboard Animation:</strong> Story-driven hand-drawn 3D whiteboard animations suitable for TV commercials or internal informational content.</li>
              <li><strong>Production-Level Animation and Motion Graphics:</strong> High-end motion graphics detailing pharmaceutical processes for patients and physicians.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Pharmaceutical Animation Process We Follow
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Discuss business needs and create a project scope.</li>
              <li>Provide a project proposal including workflow and plan.</li>
              <li>Assemble a team of animators selected for their experience.</li>
              <li>Conduct project briefing with the team to ensure clarity.</li>
              <li>Execute the <strong>pharmaceutical animation</strong> according to the SLA.</li>
              <li>Quality control team reviews the animation and recommends corrections.</li>
              <li>Submit the project and reports for client sign-off.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Pharmaceutical Animation Services from Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Pocket-Friendly Pricing:</strong> High-quality services at reasonable rates.</li>
              <li><strong>Data Security:</strong> All data handled securely on our protected cloud.</li>
              <li><strong>High Accuracy and Quality:</strong> Ensuring 100% quality and accuracy in animations.</li>
              <li><strong>Modern Infrastructure:</strong> State-of-the-art tools and technology to deliver the project efficiently.</li>
              <li><strong>Certified and Compliant:</strong> HIPAA and ISO 9001:2015 certified, compliant with industry standards.</li>
              <li><strong>Short Turnaround:</strong> Fast and efficient workflow without unnecessary delays.</li>
              <li><strong>Scalability:</strong> Services can scale to meet project demands.</li>
              <li><strong>Experienced Team:</strong> Skilled animators and project leads with deep industry knowledge.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Contact Nimble Acuity for Pharmaceutical Animation Services
            </h3>
            <p className="text-gray-700 mb-6">
              If you are seeking a highly capable provider of <strong>pharmaceutical animation services</strong>, Nimble Acuity delivers quality results with strict quality control and decades of experience. Ideal for hospitals, pharma companies, and individual practitioners.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> to get a fair project estimate within 24 hours and bring your pharmaceutical animations to life.
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

export default PharmaceuticalAnimation;
