import React from "react";
import HealthcareHeader from "@/pages/services/HealthcareBPO/HealthcareHeader";
import { Link } from "react-router-dom";

const CaseManagementServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Medical Case Management Services
            </h2>
            <p className="text-lg text-gray-600">
              Reduce billing errors, ensure prompt payments, and deliver assured patient care with{" "}
              <strong>Nimble Acuity</strong>’s medical case management solutions — starting at just $1280/month.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Medical case management is a comprehensive healthcare process designed for injured, disabled, or ill individuals. 
              It goes beyond assessments — involving patient interaction, care coordination, and provider collaboration to create 
              the most suitable treatment plan.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Nimble Acuity</strong> has decades of experience in offering efficient case management services backed 
              by skilled experts and world-class infrastructure. From billing accuracy to patient advocacy, our team ensures 
              cost savings, prompt reimbursements, and seamless care delivery.
            </p>
          </div>

          {/* Our Case Management Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Case Management Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Advocacy & Education:</strong> Patient education and advocacy throughout care.</li>
              <li><strong>Clinical Care Facilitation:</strong> Coordinating with families to ensure optimal care delivery.</li>
              <li><strong>Outcome & Performance Management:</strong> Monitoring and intervention to achieve expected results.</li>
              <li><strong>Transition Management:</strong> Supporting patients in transitioning to appropriate care levels.</li>
              <li><strong>Financial Management:</strong> Assistance with resource utilization, reimbursements, and insurance claims.</li>
              <li><strong>Research & Practice Development:</strong> Enhancing care using evidence-based practices.</li>
              <li><strong>Psychosocial Management:</strong> Evaluating individual, familial, and environmental needs.</li>
            </ul>
          </div>

          {/* Process Flow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Case Management Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Patient Signup/Referral:</strong> Patients or families connect with our care managers for initial assessment.</li>
              <li><strong>Planning & Care Delivery:</strong> We identify patient needs and coordinate with the best providers.</li>
              <li><strong>Managing Complex Needs:</strong> Navigation for patients with multiple providers or cultural/linguistic barriers.</li>
              <li><strong>Evaluating & Adjusting Care:</strong> Coordinating with insurers, educating patients, and recommending follow-ups.</li>
              <li><strong>Continuous Feedback:</strong> Post-treatment interactions to monitor recovery and improve care outcomes.</li>
            </ol>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>Insurance Eligibility Verification</li>
              <li>Medical Claims Processing</li>
              <li>Medical Data Entry Services</li>
              <li>Medical Coding Services</li>
            </ul>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Case Management?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Personalized, Affordable Services:</strong> Tailor-made solutions priced reasonably for patient needs.</li>
              <li><strong>HIPAA Compliance:</strong> Secure handling of sensitive patient data with strict adherence to regulations.</li>
              <li><strong>State-of-the-Art Infrastructure:</strong> Access to advanced tools, networks, and technologies.</li>
              <li><strong>Expert Supervision:</strong> Skilled care managers oversee treatment plans efficiently.</li>
              <li><strong>Ease in Complex Cases:</strong> Dedicated managers help navigate cultural and language barriers.</li>
              <li><strong>ISO Certified:</strong> International quality standards for reliable case management.</li>
              <li><strong>Talented Professionals:</strong> Highly skilled experts ensuring consistent, high-quality care.</li>
              <li><strong>Dedicated Teams:</strong> Assigned managers regularly monitor and communicate with families.</li>
              <li><strong>24/7 Availability:</strong> Always accessible care management support worldwide.</li>
              <li><strong>Extensive Provider Network:</strong> Access to a broad network of trusted medical providers.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>STAT Reports Automation for a Caribbean Client:</strong> Delivered cost-effective and reliable automation services.{" "}
                <Link to="/case-studies" className="text-[#006A7C] hover:underline">Read more »</Link>
              </li>
              <li>
                <strong>Teleradiology Services for a Medical Imaging Company:</strong> Provided fast turnaround services to a leading client.{" "}
                <Link to="/case-studies" className="text-[#006A7C] hover:underline">Read more »</Link>
              </li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mb-16">
            <blockquote className="text-gray-700 italic mb-4">
              "A thousand thanks for your prompt and speedy reply - really appreciate getting these letters back so very quickly."
            </blockquote>
            <p className="font-semibold text-gray-600">
              – Physiotherapy Admin, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Medical Case Management Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With 20+ years of expertise, we provide seamless care coordination, behavioral health management, and personalized case 
              management support. Trust us to simplify care delivery while ensuring the best outcomes for patients and providers.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Contact Us Today
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default CaseManagementServices;
