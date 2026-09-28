import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const HealthInformationTechnology: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Health Information Technology Services
            </h2>
            <p className="text-lg text-gray-600">
              Transform healthcare delivery with business-oriented solutions from <strong>nimble acuity</strong>. We help healthcare providers and IT vendors navigate regulatory and commercial issues with cutting-edge technology.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Rapid advancements in technology have revolutionized healthcare, and Health Information Technology (HIT) is at the forefront of this change. It's the secure management and exchange of health information across computerized systems, offering a powerful tool to improve productivity and patient care. At <strong>nimble acuity</strong>, we specialize in leveraging the best of modern HIT to help you plan, evaluate, manage, and implement your technology projects effectively.
            </p>
          </div>

          {/* Service Offerings */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Health Information Technology Service Offerings
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Healthcare Analytics and Business Intelligence:</strong> Decipher valuable insights from large datasets to make informed business decisions, improve processes, and identify new ventures.
              </li>
              <li>
                <strong>Electronic Health Records (EHR):</strong> Ensure accurate and secure digitization of your medical records, meeting regulatory requirements with a tailored EHR system that integrates with your existing workflows.
              </li>
              <li>
                <strong>Medical Technology Upgrade:</strong> Upgrade obsolete IT infrastructure to leverage the latest healthcare software, increasing operational efficacy and improving patient and employee satisfaction.
              </li>
              <li>
                <strong>Health Information Exchange (HIE):</strong> Develop effective communication channels and digitize data to enable real-time information exchange across various platforms, including tablets, desktops, and mobile devices.
              </li>
              <li>
                <strong>Implementation of HIT for Rural Hospitals:</strong> Overcome logistical and infrastructural challenges by installing optimal HIT systems tailored to your specific needs, considering factors like internet speeds and cabling.
              </li>
              <li>
                <strong>Onsite IT Support:</strong> Get dedicated 24/7 onsite IT programmers and administrators to ensure the continuous, uninterrupted functioning of your healthcare IT installations, including regular backup and critical care.
              </li>
              <li>
                <strong>Healthcare IT as SaaS:</strong> Move your health information technology to a professionally managed SaaS solution, handled by our expert team, so you can focus on healthcare activities without worrying about maintenance or bugs.
              </li>
              <li>
                <strong>Data Migration:</strong> Our team of data migration experts will meticulously digitize and transfer your data from various systems (e.g., MPI, OP, APC, IPWL) in an error-free manner.
              </li>
              <li>
                <strong>Smart Tools and App Development:</strong> We develop smart healthcare tools and mobile apps that provide fast information access and facilitate interactions, increasing productivity for patients and physicians alike.
              </li>
            </ul>
          </div>

          {/* Why Invest */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Health Information Technology Services?
            </h3>
            <p className="text-gray-700 mb-6">
              By partnering with <strong>nimble acuity</strong>, you can minimize costs, make impactful operational changes, and maximize profits. Our services help you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Maximize capacity utilization and improve clinical processes.</li>
              <li>Ensure fast and secure information exchange.</li>
              <li>Leverage fast medical R&D and innovation.</li>
              <li>Provide better preventive care and avoid medical emergencies.</li>
              <li>Improve overall healthcare quality, productivity, and efficiency.</li>
              <li>Minimize costs while maximizing benefits.</li>
              <li>Increase information security and accuracy.</li>
              <li>Decrease paperwork and manual documentation errors.</li>
              <li>Adhere to regulatory standards, including HIPAA and ICD-10.</li>
              <li>Extend real-time communication among healthcare professionals.</li>
              <li>Reduce risks with secure patient information.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity for Your HIT Requirements
            </h3>
            <p className="text-gray-700 mb-6">
              With over 26+ years of experience, we have a deep understanding of health information technology. Our unique work methodology and team of experts will help you achieve an exponential increase in your ROI.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> to discuss how we can transform your healthcare IT landscape.
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

export default HealthInformationTechnology;