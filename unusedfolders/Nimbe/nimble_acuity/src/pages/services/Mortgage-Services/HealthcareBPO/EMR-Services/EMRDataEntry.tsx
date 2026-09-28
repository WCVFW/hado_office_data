import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const EMRDataEntry: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              EMR Data Entry Services
            </h2>
            <p className="text-lg text-gray-600">
              Boost your practice efficiency with <strong>professional EMR data entry services</strong>, starting at just $1280 per FTE per month. Free up your doctors from manual data entry so they can focus on what matters most—patient care.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At <strong>Nimble Acuity</strong>, we capture and enter clinical notes with precision, ensuring complete accuracy and compliance. With over 26 years of expertise in EMR/EHR data entry, we help practices scale effortlessly while keeping costs under control.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              EMR Data Entry Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Patient Medical Records Data Entry:</strong> Detailed entry of diagnostics, prognosis, and treatment for seamless follow-up consultations.</li>
              <li><strong>Professional Clinical Care:</strong> Capture and input accurate clinical care notes from consultations at scale.</li>
              <li><strong>Medical Insurance Claim Forms:</strong> Enter insurance claim form data with precision, reducing physician workload and errors.</li>
              <li><strong>Hospital Records Data Entry:</strong> Digitize hospital records for quick retrieval and integrated EHR management.</li>
              <li><strong>Handwritten Documents Data Entry:</strong> Bulk digitization of handwritten patient scripts and notes.</li>
              <li><strong>Other Services:</strong> Surgical encounter records, image and lab reports, prescriptions, appointment and billing records, and more.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              EMR Data Entry Process We Follow
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Discuss Project Scope and Requirements:</strong> Collaborate with the client to define the project.</li>
              <li><strong>Plan the Workflow:</strong> Propose a workflow for client approval.</li>
              <li><strong>Commence Data Entry:</strong> Begin data entry as per the agreed plan.</li>
              <li><strong>Assign Dedicated Project Teams:</strong> Each function is handled by a specialized team.</li>
              <li><strong>Quality Control and Evaluation:</strong> The QA team ensures accuracy, speed, and scalability.</li>
              <li><strong>Deliver Performance Reports:</strong> Provide weekly/monthly reports for transparency.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for EMR Data Entry Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified Provider:</strong> HIPAA & ISO 9001:2015 certified for compliance and accuracy.</li>
              <li><strong>Data Security:</strong> Robust cloud-based infrastructure with strict protocols to prevent data misuse.</li>
              <li><strong>High Accuracy:</strong> Proven quality control ensuring error-free data entry.</li>
              <li><strong>Affordable Pricing:</strong> Flexible packages tailored to your budget and needs.</li>
              <li><strong>Modern Infrastructure:</strong> Advanced systems for reliable service delivery.</li>
              <li><strong>Quick Turnaround:</strong> Faster project completion with ready-to-integrate technology.</li>
              <li><strong>Scalable Services:</strong> Add or reduce resources based on demand.</li>
              <li><strong>Experienced Team:</strong> Skilled data entry agents, project managers, and IT specialists.</li>
              <li><strong>24/7 Availability:</strong> Always accessible via phone, email, or live chat.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Pharmacy & Insurance Eligibility:</strong> Helped a Californian telemedicine provider with insurance verification to streamline claims processing.</li>
              <li><strong>Claims & Demographics Entry:</strong> Processed nearly 1200 claims per month for a Georgia client with 98% accuracy.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource EMR Data Entry Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With <strong>26+ years of experience</strong>, Nimble Acuity delivers accurate, scalable, and secure EMR data entry services. We help you maximize productivity while minimizing costs.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> to see how our tailored EMR services can optimize your practice.
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

export default EMRDataEntry;
