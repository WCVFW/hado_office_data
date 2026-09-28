import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const BehavioralHealthEHR: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Behavioral Health EHR Services
            </h2>
            <p className="text-lg text-gray-600">
              Get a fully integrated, template-driven <strong>Behavioral Health EHR solution</strong> from leading healthcare experts at prices starting at just <strong>$1300/month</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking to provide holistic care that integrates behavioral, medical, and dental health data into one complete system? At <strong>nimble acuity</strong>, we help you access comprehensive patient health records quickly and efficiently, enabling better care and outcomes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Outsourcing behavioral health EHR services to us reduces errors, maximizes efficiency, ensures financial success, and allows you to spend more time with patients. Our solutions are designed for social services, community organizations, and clinics offering care in substance abuse, psychiatry, medication management, and diagnostic assessments.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Behavioral Health EHR Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Enterprise Solutions:</strong> Scalable, multi-facility architecture with in-built behavioral, medical, and dental workflows.
              </li>
              <li>
                <strong>Customizable Reports & Content:</strong> Flexible EHR with customizable templates, robust data collection, and support for complex care such as substance abuse treatment.
              </li>
              <li>
                <strong>Digital Solutions:</strong> Smart digital pen integration for digitizing intake forms, notes, treatment plans, and screening tools.
              </li>
              <li>
                <strong>Mobile Solutions:</strong> Integrated mobile extensions to complete clinical tasks, collaborate with care teams, and streamline workflows on the go.
              </li>
              <li>
                <strong>Effective Interoperability:</strong> Seamless data exchange across IT systems, improving care coordination and holistic treatment.
              </li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Behavioral Health EHR Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Gathering:</strong> Collaborate to fully understand your needs.</li>
              <li><strong>Planning & Design:</strong> Develop a tailored plan and initial EHR design.</li>
              <li><strong>Development:</strong> Build your behavioral health EHR solution.</li>
              <li><strong>Testing:</strong> Ensure quality and reliability with rigorous testing.</li>
              <li><strong>Delivery:</strong> Deploy in the live environment with full support.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose nimble acuity for Behavioral Health EHR?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified, with secure FTP, SFTP, and VPN data sharing.</li>
              <li><strong>Advanced Infrastructure:</strong> Global facilities with continuous connectivity and power backup.</li>
              <li><strong>Affordable Services:</strong> High-quality EHR solutions at cost-effective rates.</li>
              <li><strong>Compliance & Quality:</strong> Fully HIPAA-compliant with ISO 9001:2015 certification.</li>
              <li><strong>Experienced Team:</strong> Skilled professionals trained in compliance, best practices, and drug codes.</li>
              <li><strong>Scalable Solutions:</strong> Flexible services to scale resources based on project needs.</li>
              <li><strong>Quick Turnaround:</strong> Multiple delivery centers leveraging time-zone advantages.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                Helped a Tustin-based client with research and DME billing services, supporting successful insurance negotiations for EndoPAT coverage.
              </li>
              <li>
                Assisted a Georgia-based client in processing 1000–1200 claims per month with 98% accuracy.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Behavioral Health EHR Services to nimble acuity
            </h3>
            <p className="text-gray-700 mb-6">
              <strong>nimble acuity</strong> leverages 20+ years of expertise, advanced tools, and certified compliance to deliver scalable behavioral health EHR solutions trusted by providers worldwide.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> to discover how we can optimize your behavioral health practice with our customized EHR services.
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

export default BehavioralHealthEHR;
