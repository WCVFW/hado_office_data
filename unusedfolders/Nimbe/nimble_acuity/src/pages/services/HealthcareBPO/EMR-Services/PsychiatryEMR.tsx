import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const PsychiatryEMR: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Psychiatry EMR Services
            </h2>
            <p className="text-lg text-gray-600">
              Template-driven <strong>psychiatry EMR solutions</strong> to manage multiple functions 
              across your specialty, starting from just $1300/month.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Psychiatry practices require integrated, cloud-based EMR solutions 
              to streamline communication, enhance productivity, and simplify 
              administrative and financial tasks. If you are looking for a 
              partner who truly understands psychiatry EMR requirements, 
              <strong> Nimble Acuity</strong> is here to help.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We provide a full spectrum of psychiatry EMR services, including 
              customizable templates, efficient documentation, click-saving 
              features, patient portals, and education materials. With proven 
              expertise and numerous satisfied clients, we deliver the best EMR 
              solutions for psychiatry practices.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Psychiatry EMR Services We Offer
            </h3>
            <p className="text-gray-700 mb-6">
              With over 20 years of experience in healthcare, we provide 
              HIPAA- and RBMS-compliant EMR solutions designed for psychiatry practices. 
              Our key offerings include:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Fully Integrated EHR Solution:</strong> Manage hospital rounds, patient records, prescriptions, and analytics with ease.</li>
              <li><strong>Patient Treatment Plans:</strong> Pre-built and customizable plans for bipolar disorder, anxiety, and other psychiatric conditions.</li>
              <li><strong>Multiple Data Entry Methods:</strong> Voice, handwritten, and point-and-click input with e-prescriptions, reminders, and scheduling.</li>
              <li><strong>Quick Data Capture:</strong> Secure, intuitive tools to document and retrieve patient records instantly.</li>
              <li><strong>Alerts:</strong> Timely notifications for allergies, drug interactions, and critical patient health information.</li>
              <li><strong>Seamless Communication:</strong> Data sharing across pharmacies, labs, physicians, and facilities with multiple interfaces.</li>
              <li><strong>Efficient Billing:</strong> ICD coding, automated claims, and built-in E&M coding for faster reimbursements.</li>
              <li><strong>Latest Technologies:</strong> Device-agnostic EMR solutions with cloud-based access across web and mobile.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Psychiatry EMR Process We Follow
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Gathering:</strong> Understand your psychiatry EMR needs in detail.</li>
              <li><strong>Planning & Design:</strong> Build tailored workflows and submit initial designs for approval.</li>
              <li><strong>Development:</strong> Implement features aligned to your specialty and practice goals.</li>
              <li><strong>Testing:</strong> Conduct rigorous QA to eliminate bugs and ensure compliance.</li>
              <li><strong>Delivery:</strong> Deploy the solution in your live environment with full support.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Psychiatry EMR Services to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified with FTP, SFTP, and VPN-enabled secure data transfer.</li>
              <li><strong>Advanced Infrastructure:</strong> Robust facilities with 200% power backup and uninterrupted connectivity.</li>
              <li><strong>Affordable Services:</strong> Cost-effective psychiatry EMR solutions delivering maximum value.</li>
              <li><strong>High-Quality & Compliance:</strong> HIPAA-compliant services with adherence to global standards.</li>
              <li><strong>Certified Provider:</strong> ISO 9001:2015 accredited with proven practice management expertise.</li>
              <li><strong>Experienced Team:</strong> Skilled professionals with knowledge of drug codes, compliance, and EMR tools.</li>
              <li><strong>Scalable Services:</strong> Flexible delivery models to handle demand surges with ease.</li>
              <li><strong>Quick Turnaround:</strong> 24/7 global delivery centers ensure fast project execution.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Psychiatry EMR Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              <strong>Nimble Acuity</strong> combines decades of experience, 
              advanced technologies, and certified teams to provide tailored 
              psychiatry EMR solutions that improve efficiency and patient care.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> to explore how we can streamline 
              your psychiatry practice with customized EMR services.
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

export default PsychiatryEMR;
