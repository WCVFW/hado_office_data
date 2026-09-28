import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const UrologyEMR: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Urology EMR Services
            </h2>
            <p className="text-lg text-gray-600">
              Take your urology practice to the next level with end-to-end customized and compliant EMR management solutions starting at $1280/month.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you struggling to provide excellent EMR support for your urology patients due to lack of skilled resources? <strong>Nimble Acuity</strong> provides reliable and professional urology EMR services designed to save time, reduce costs, and improve operational efficiency.  
            </p>
            <p className="text-gray-700 leading-relaxed">
              With 20+ years of experience in healthcare EMR solutions, we optimize EMR tools for compliance, accuracy, and high-quality service delivery.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Urology EMR Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Improve Care Performance:</strong> Optimize patient outcomes with lab trends, treatment guidelines, and integrated clinical decision support tools.</li>
              <li><strong>Facilitate Compliance:</strong> Integrate practice pathways and diagnosis-based workflows for evidence-based and payer-compliant care.</li>
              <li><strong>Empower Staff:</strong> Smart scheduling, customized profiles, and provider-specific workflows to maximize staff efficiency.</li>
              <li><strong>Personalize Your EMR:</strong> Customize content, templates, and pathways to accelerate adoption and align with physician workflows.</li>
              <li><strong>Maintain a Holistic View:</strong> Track care milestones, identify outliers, and drill down to detailed patient events.</li>
              <li><strong>Simplify Compliance:</strong> Capture MIPS and OCM data seamlessly using optimized templates integrated into your workflow.</li>
            </ul>
          </div>

          {/* EMR Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Urology EMR Process
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li><strong>Requirement Discovery:</strong> Collaborate to compile detailed EMR requirements and understand usage plans.</li>
              <li><strong>EMR Planning & Design:</strong> Tailor EMR design and implementation to meet your exact needs.</li>
              <li><strong>EMR Development:</strong> Implement EMR modules, custom workflows, templates, and integrations as per plan.</li>
              <li><strong>Testing:</strong> Validate EMR functionality with real-time inputs before deployment.</li>
              <li><strong>Reporting & Feedback:</strong> Collect user feedback and provide quality assurance reports for continuous improvement.</li>
            </ol>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Endocrinology EMR Services</li>
              <li>EMR Software Development</li>
              <li>Dermatology EMR Services</li>
              <li>Oncology EMR Services</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Urology EMR Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Accredited Practice Management:</strong> ISO 9001:2015 certified services for optimized processes, compliance, and insightful reporting.</li>
              <li><strong>High-Quality & Compliance:</strong> Skilled workforce ensuring international code and HIPAA compliance.</li>
              <li><strong>Data Confidentiality:</strong> ISO/IEC 27001:2022 certified for secure handling of sensitive patient data.</li>
              <li><strong>Experienced Team:</strong> Certified professionals with expertise in urology billing codes, Medicare, ICD-10, and ongoing EMR tool training.</li>
              <li><strong>Scalable Services:</strong> Flexible headcount adjustment to optimize cost and productivity.</li>
              <li><strong>Quick Turnaround:</strong> Fast delivery without compromising quality.</li>
              <li><strong>Single Point of Contact:</strong> Dedicated project manager for seamless communication and project oversight.</li>
              <li><strong>Affordable Services:</strong> Transparent, cost-effective pricing customized to your needs.</li>
              <li><strong>Secure Data Transfer:</strong> VPN, SFTP, and FTP for safe and efficient data sharing.</li>
              <li><strong>Excellent Infrastructure:</strong> World-class office spaces, latest EMR tools, and uninterrupted network connectivity.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>End-to-End Medical Billing:</strong> Resolved billing backlog within 12 hours for a Maryland client.</li>
              <li><strong>Research & DME Billing:</strong> Helped a US client negotiate EndoPAT coverage using data insights compiled by Nimble Acuity.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Urology EMR Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Leverage customized, compliant, and efficient urology EMR solutions to streamline workflows, improve patient outcomes, and reduce operational overheads.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today for high-quality, cost-effective urology EMR services.
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

export default UrologyEMR;
