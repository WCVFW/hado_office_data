import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const SpineAnimation: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Spine Animation Services
            </h2>
            <p className="text-lg text-gray-600">
              High-quality 2D and 3D spine animations for patient education, surgical planning, and medical device visualization from <strong>Nimble Acuity</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Need 3D or 2D spine animations to illustrate anatomy or surgical devices? Outsource spine animation services to <strong>Nimble Acuity</strong> and get professional animations without hiring in-house resources. Our expert team delivers accurate spine animations for pedagogy, pre-treatment, and post-treatment visualization at affordable rates.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Spine Animation Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>3D Surgical Visualization:</strong> Pre-surgery spine animations focusing on neurology and orthopedics for restoration, preservation, and other procedures.</li>
              <li><strong>3D Spine Animation of Complex Surgical Devices:</strong> Accurate visualizations of surgical devices for orthopedics, sports medicine, and musculoskeletal physiology.</li>
              <li><strong>Cross-Section of Spines:</strong> Detailed spine cross-section animations for physicians and patient education.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Spine Animation Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Discovery and Conceptualization:</strong> Collaborate with clients to understand needs and audience.</li>
              <li><strong>Rendering Animations:</strong> Create high-quality animations with all details for accurate visualization.</li>
              <li><strong>Quality Analysis:</strong> Evaluate animations to ensure SLA compliance and consistency.</li>
              <li><strong>Reporting and Feedback:</strong> Compile reports and sign-off documentation for transparency.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Spine Animation Services from Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified Services:</strong> HIPAA and ISO 9001:2015 certified spine animation company.</li>
              <li><strong>Data Security:</strong> Robust cloud-based security to protect client data.</li>
              <li><strong>High Accuracy and Quality:</strong> 100% accurate illustrations for pedagogy and treatment.</li>
              <li><strong>Affordable Pricing:</strong> Flexible, pocket-friendly options for customized projects.</li>
              <li><strong>Modern Infrastructure:</strong> Advanced animation tools and secure project workflows.</li>
              <li><strong>Short Turnaround:</strong> Agile team delivering animations within stipulated timelines.</li>
              <li><strong>Scalability:</strong> Easily scale projects to produce multiple videos or resources.</li>
              <li><strong>Experienced Team:</strong> Expert animators trained in surgical devices and spinal physiology.</li>
              <li><strong>24/7 Availability:</strong> Global support through our round-the-clock contact centers.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Medical Imaging Firm:</strong> Quick teleradiology services delivered to the client with complete satisfaction.</li>
              <li><strong>US-based Client Using Kareo:</strong> Processed over 17,000 claims/month with 98% accuracy and 45% cost savings.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "I wanted to inform you of what a great job Nimble Acuity is doing for our firm. Vinoth Kumar and his team have done amazing work and are extremely reliable. We consider Nimble Acuity a part of our strategic plans moving forward."
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              — Managing Director, Medical Billing Company, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Spine Animation Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with <strong>Nimble Acuity</strong> for precise spine animations that educate patients, assist physicians, and simplify complex concepts.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> to discuss your spine animation requirements and get a customized plan tailored to your needs and budget.
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

export default SpineAnimation;
