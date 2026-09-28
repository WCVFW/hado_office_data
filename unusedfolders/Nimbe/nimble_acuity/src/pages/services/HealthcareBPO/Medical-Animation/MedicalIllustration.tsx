import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const MedicalIllustration: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Medical Illustration Services
            </h2>
            <p className="text-lg text-gray-600">
              Enhance patient understanding, support education, and simplify complex medical concepts with high-quality medical illustration services from <strong>Nimble Acuity</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are patients struggling to understand their health conditions? Professional medical illustrations can make biological processes, skeletal structures, and bodily systems easy to visualize. By outsourcing medical illustration services to <strong>Nimble Acuity</strong>, healthcare providers can deliver clearer, more transparent information, helping patients feel informed and confident.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Medical Illustration Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Surgical Illustrations:</strong> Visualize surgical procedures, anatomical systems, and robotic-assisted surgeries for manuals, training, or patient education.</li>
              <li><strong>Veterinary Illustrations:</strong> Accurate illustrations of animal anatomy to assist veterinarians with complex procedures.</li>
              <li><strong>Anatomical Illustrations:</strong> High-quality cross-sections and detailed tissue visualizations for patient education or academic research.</li>
              <li><strong>Dental Illustrations:</strong> Demonstrate jaw, teeth, and facial features pre- and post-procedure for patient clarity.</li>
              <li><strong>Ophthalmology Illustrations:</strong> Precise depictions of the eye and surrounding anatomy for educational or clinical use.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Medical Illustration Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Conceptualization and Creation:</strong> Collaborate with your team to understand requirements and provide a quote based on complexity.</li>
              <li><strong>Modeling and Rendering:</strong> Develop detailed models and wireframe renders for approval before full-scale illustration.</li>
              <li><strong>Editing and File Export:</strong> Ensure illustrations meet quality standards and SLA compliance before final delivery.</li>
              <li><strong>Reporting and Feedback:</strong> Provide detailed project reports covering resources, revisions, and timelines.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Medical Illustration?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified Services:</strong> ISO 9001:2015 accredited and HIPAA-compliant medical illustration services.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified for safe handling of confidential information.</li>
              <li><strong>High Accuracy and Quality:</strong> 100% quality guarantee for error-free illustrations.</li>
              <li><strong>Quick Turnaround:</strong> Fast delivery to meet deadlines without compromising quality.</li>
              <li><strong>Scalability:</strong> Easily adjust services based on project requirements.</li>
              <li><strong>Flexible Pricing:</strong> Cost-effective solutions tailored to your budget.</li>
              <li><strong>Single Point of Contact:</strong> Dedicated project manager for seamless communication.</li>
              <li><strong>Experienced Team:</strong> 500+ professional illustrators with decades of expertise.</li>
              <li><strong>Modern Infrastructure:</strong> State-of-the-art hardware, software, and security systems.</li>
              <li><strong>Secure Data Exchange:</strong> SFTP and VPN platforms for safe and reliable file sharing.</li>
              <li><strong>24/7 Availability:</strong> Support available anytime, across time zones.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Patient Demographics Entry (Georgian Client):</strong> Processed 1,200+ claims/month with 98% accuracy.</li>
              <li><strong>Charge and Demographic Entry Using Kareo Software (US Client):</strong> Over 17,000 claims processed/month with 45% cost savings.</li>
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
              Outsource Medical Illustration Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with <strong>Nimble Acuity</strong> for reliable, high-quality medical illustration services that simplify complex concepts, educate patients, and support healthcare professionals.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> to discuss your medical illustration requirements and get a customized plan for your budget and goals.
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

export default MedicalIllustration;
