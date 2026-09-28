import React from "react";
import Imainmenu from "../Imainmenu";

const ACORDFormsProcessing: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-blue-900 text-white py-12 px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">
          Nimble ACORD Forms Processing Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Harness the power of our cost-effective and high-quality services to
          efficiently process your ACORD forms at prices starting as low as
          $8/hour.
        </p>
      </section>

      {/* Intro */}
      <section className="py-10 px-6 max-w-5xl mx-auto space-y-6">
        <p>
          Are you an organization that receives high volumes of ACORD forms and
          finding it difficult to process them due to manpower or other resource
          constraints? Do you feel that your manpower could be better utilized
          by outsourcing ACORD forms processing to a reliable third-party
          service provider? If so, we are here to help.
        </p>
        <p>
          Nimble Acuity (Nimble Acuity) is a leading ACORD forms processing service
          provider offering a complete range of services. Our highly-experienced
          personnel can handle the entire forms processing workflow from start
          to finish, delivering accurate and timely results at some of the most
          competitive rates in the industry.
        </p>
      </section>

      {/* Services */}
      <section className="bg-white py-10 px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">
          ACORD Forms Processing Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="font-bold mb-2">Manual ACORD Forms Processing</h3>
            <p>
              We provide skilled manpower to process large volumes of ACORD
              forms cost-effectively. Our team ensures accurate data capture
              while you save costs and free up your resources for high-value
              work.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Automated ACORD Forms Processing</h3>
            <p>
              We leverage automation tools to process ACORD forms faster and
              more efficiently. Our specialists oversee workflows, validate
              extracted data, and ensure error-free results while you focus on
              core operations.
            </p>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-gray-100 py-10 px-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Other Services You Can Benefit From
        </h2>
        <ul className="list-disc pl-6 max-w-3xl mx-auto space-y-2">
          <li>Loss Run Processing Services</li>
          <li>Insurance Billing & Accounts Receivable Services</li>
          <li>Policy Issuance Services</li>
          <li>Life/Annuity Insurance Claims Management</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="py-10 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Why Nimble ACORD Forms Processing to Nimble Acuity?
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Affordable pricing starting at $8/hour</li>
          <li>ISO-certified, high-quality services</li>
          <li>Experienced ACORD forms processing professionals</li>
          <li>World-class infrastructure & modern technology</li>
          <li>ISO/IEC 27001:2022 certified data security</li>
          <li>Dedicated project manager as single point of contact</li>
          <li>On-time delivery with quick turnaround</li>
          <li>Easily scalable workforce based on demand</li>
        </ul>
      </section>

      {/* Client Success */}
      <section className="bg-white py-10 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Client Success Stories
        </h2>
        <div className="space-y-4">
          <p>
            <span className="font-bold">
              Insurance Policy Checking for NY-based Service Provider:
            </span>{" "}
            We helped a risk insurance agency improve profitability by 22%
            through affordable back-office support.
          </p>
          <p>
            <span className="font-bold">
              Insurance Account Maintenance for US Agency:
            </span>{" "}
            We delivered quick and efficient account maintenance services for a
            leading US-based insurance agency.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Nimble ACORD Forms Processing to Nimble Acuity
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          We are pioneers in delivering ACORD forms processing solutions that
          streamline operations, boost productivity, and cut costs. Let our
          experienced professionals handle the tedious work while you focus on
          growth.
        </p>
        <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default ACORDFormsProcessing;
