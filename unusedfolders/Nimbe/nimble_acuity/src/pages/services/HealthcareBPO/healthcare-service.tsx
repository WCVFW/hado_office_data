import React from "react";
import { Link } from "react-router-dom";
import HealthcareHeader from "@/pages/services/HealthcareBPO/HealthcareHeader";

const HealthcareBPO = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      {/* Page Content */}
      <section className="py-16 bg-white mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <h1 className="text-4xl font-bold text-center pb-10 text-[#006A7C] mb-4">
              Healthcare BPO Solutions by Nimble Acuity
            </h1>
            <p className="text-lg text-gray-600">
              Reduce administrative burdens, improve compliance, and boost your
              bottom line with our specialized{" "}
              <strong>healthcare BPO services</strong>. With 6+ years of
              expertise, we help healthcare practices focus on delivering
              exceptional patient care while we handle the rest.
            </p>
          <div className="w-full mb-12 mt-10">
          <img
            src="/images/img7.png"
            alt="HealthcareBPO"
            className="w-full rounded-lg shadow-lg object-cover max-h-96 mx-auto"
          />
        </div>
          {/* Hero Section */}
          <div className="max-w-4xl mb-12">
            
            
          </div>

          {/* Intro */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Changing regulations and rising competition have made outsourcing
                essential for healthcare providers. Our solutions eliminate
                process inefficiencies, prevent claim denials, and improve
                financial outcomes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether it’s medical billing, coding, transcription, or revenue
                cycle management, we provide tailored solutions backed by
                automation and digital transformation.
              </p>
            </div>
            <div className="bg-[#F0FAFB] rounded-2xl p-6 shadow">
              <h3 className="text-xl font-semibold text-[#006A7C] mb-4">
                Quick Stats
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>4,968,000</strong> transcription lines
                </li>
                <li>
                  <strong>504,000</strong> payment postings
                </li>
                <li>
                  <strong>450,000</strong> charge entries
                </li>
                <li>
                  <strong>288,000</strong> demo entries
                </li>
                <li>
                  <strong>234,000</strong> AR calls
                </li>
              </ul>
            </div>
          </div>

          {/* Services */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#006A7C] mb-6">
              Our Healthcare BPO Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Medical Billing Services",
                "Medical Coding Services",
                "Medical Transcription Services",
                "Insurance Eligibility Verification",
                "Revenue Cycle Management",
                "Medical Accounts Receivable",
                "Teleradiology Services",
                "Medical Data Entry",
                "Healthcare Call Center",
                "Healthcare Software Development",
                "Healthcare Back-office Support",
                "Medical Answering Services",
                "EMR Data Entry",
                "EMR Data Migration",
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="bg-[#F9F9F9] p-5 rounded-xl shadow hover:shadow-md transition"
                >
                  <h4 className="font-semibold text-[#006A7C]">{service}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#006A7C] mb-6">
              Software & Tools We Use
            </h2>
            <p className="text-gray-700 max-w-4xl">
              To minimize errors and maximize efficiency, we leverage
              industry-leading tools and automation platforms designed for
              secure, compliant healthcare BPO processing.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#006A7C] mb-6">
              Why Choose Nimble Acuity?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
              <ul className="space-y-2">
                <li>
                  <strong>High-quality Services:</strong> Multi-step quality
                  checks ensure compliance.
                </li>
                <li>
                  <strong>Regulatory Expertise:</strong> Deep knowledge of U.S.
                  healthcare laws.
                </li>
                <li>
                  <strong>HIPAA Compliance:</strong> Ensuring patient data safety
                  and privacy.
                </li>
                <li>
                  <strong>Healthcare Data Security:</strong> Confidentiality
                  agreements and audits.
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <strong>Robust Infrastructure:</strong> Advanced delivery
                  centers with secure systems.
                </li>
                <li>
                  <strong>Global Delivery Centers:</strong> Efficient worldwide
                  support teams.
                </li>
                <li>
                  <strong>Competitive Pricing:</strong> Flexible, usage-based
                  pricing models.
                </li>
                <li>
                  <strong>Proven Track Record:</strong> 6+ years of successful
                  healthcare projects.
                </li>
              </ul>
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#006A7C] mb-6">
              Healthcare Case Studies
            </h2>
            <div className="space-y-6">
              <div className="p-6 bg-[#F9F9F9] rounded-xl shadow">
                <h4 className="font-semibold text-[#006A7C] mb-2">
                  Patient Onboarding for Women’s Healthcare
                </h4>
                <p className="text-gray-600">
                  We streamlined onboarding for a leading women’s reproductive
                  healthcare company.
                </p>
              </div>
              <div className="p-6 bg-[#F9F9F9] rounded-xl shadow">
                <h4 className="font-semibold text-[#006A7C] mb-2">
                  STAT Reports Automation for Radiologists
                </h4>
                <p className="text-gray-600">
                  Automated over 200 monthly STAT reports for a Caribbean
                  radiology group.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#006A7C] mb-6">
              Healthcare Testimonials
            </h2>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              “Your team has been incredibly quick to respond to any concerns. I
              asked for faster turnaround times and immediately saw significant
              improvement.”
              <span className="block mt-2 font-medium text-gray-800">
                — MD, Pharmacy Company in Canada
              </span>
            </blockquote>
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <h2 className="text-3xl font-bold text-[#006A7C] mb-4">
              Outsource Healthcare BPO Services to Embrace Automation
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">
              Automate redundant processes, improve compliance, and focus on
              patient care while we manage your back-office tasks. With Nimble
              Acuity, you gain a trusted partner committed to healthcare
              excellence.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get Started Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HealthcareBPO;
