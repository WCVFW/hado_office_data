import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const VascularSurgeryEMR: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Vascular Surgery EMR Services
            </h2>
            <p className="text-lg text-gray-600">
              Improve the effectiveness of your vascular surgery practice with <strong>customized and compliant EMR solutions</strong>, starting at just $1300/month. Our solutions streamline workflows, save time, and enhance patient care.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At <strong>Nimble Acuity</strong>, we provide tailored vascular surgery EMR services to meet your exact requirements. With decades of experience, we help practices optimize resources, reduce costs, and focus on core clinical care while we handle your EMR management.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Vascular Surgery EMR Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Clinical Evaluation with ECG Systems:</strong> Digitize and securely store ECG data directly in the EMR system.</li>
              <li><strong>Image Scanning:</strong> Efficiently scan diagnostic images such as myocardial perfusion scans into the patient record.</li>
              <li><strong>Automated Treatment Plans:</strong> Streamline treatment flows for procedures like lead placement, ablations, and implants.</li>
              <li><strong>Hemodynamic & Electrophysiology Monitoring:</strong> Document physiological and electrophysiology data while under sedation.</li>
              <li><strong>Data Collection for Quality Reporting:</strong> Collect and manage PQRI, DOQ-IT, and pay-for-performance program data.</li>
              <li><strong>Device Interoperability:</strong> Integrate with vendor systems for Holter, ECG, echocardiogram, and more.</li>
              <li><strong>E&M Coding Assistance:</strong> Automate coding to maximize payments and reduce missed charges.</li>
              <li><strong>Issue-Focused Treatment Plans:</strong> Use customizable forms and progress notes for efficient documentation.</li>
              <li><strong>Integrated Report Generation:</strong> Generate stress and echo reports for performance analysis and patient tracking.</li>
              <li><strong>Patient Education:</strong> Access a built-in knowledge base covering procedures, disease management, and treatments.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Vascular Surgery EMR Process We Follow
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Gathering:</strong> Collaborate with your team to collect detailed needs and expectations.</li>
              <li><strong>Planning & Design:</strong> Define the best approach for a custom EMR solution.</li>
              <li><strong>Development:</strong> Build the tailored vascular surgery EMR system per the plan.</li>
              <li><strong>Testing:</strong> Perform rigorous testing to eliminate bugs and ensure stability.</li>
              <li><strong>Delivery:</strong> Deploy the final solution and incorporate client feedback.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Vascular Surgery EMR Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Services:</strong> Competitive rates with cost-saving advantages passed to clients.</li>
              <li><strong>Secure Data Transfer:</strong> Use of SFTP, VPN, and FTP ensures fast, safe data exchange.</li>
              <li><strong>Advanced Infrastructure:</strong> Modern offices, secure systems, and the latest tools.</li>
              <li><strong>High-Quality & Compliance:</strong> HIPAA-compliant, top-tier services at reasonable costs.</li>
              <li><strong>ISO Certified:</strong> Accredited practice management provider (ISO 9001:2015).</li>
              <li><strong>Data Confidentiality:</strong> ISO/IEC 27001:2022 certified for maximum data protection.</li>
              <li><strong>Experienced Team:</strong> Skilled specialists and developers with domain expertise.</li>
              <li><strong>Scalable Services:</strong> Flexible engagement models to match changing business needs.</li>
              <li><strong>Quick Turnaround:</strong> Efficient delivery leveraging lessons learned from past projects.</li>
              <li><strong>Dedicated Project Manager:</strong> Single point of contact for seamless communication.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Research & DME Billing:</strong> Assisted a Tustin-based client with billing services, enabling negotiation with insurers for EndoPAT coverage.</li>
              <li><strong>Claims Processing:</strong> Supported a Georgia client in processing 1000–1200 claims monthly with 98%+ accuracy.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Vascular Surgery EMR Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              <strong>Nimble Acuity</strong> delivers compliant, cost-effective, and customized EMR solutions to optimize your vascular surgery practice. With decades of expertise and advanced technology, we’re your trusted partner in EMR management.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> to see how our tailored EMR services can optimize your vascular surgery practice.
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

export default VascularSurgeryEMR;
