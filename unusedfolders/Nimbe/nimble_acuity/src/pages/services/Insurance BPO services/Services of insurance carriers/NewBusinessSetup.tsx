import React from "react";
import Imainmenu from "../Imainmenu";

const NewBusinessSetup: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-green-900 text-white py-12 px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">
          Nimble New Business Setup Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Get access to the right resources and methodologies to setup a new
          business from an expert team of insurance experts at rates starting at
          just $8/hour.
        </p>
      </section>

      {/* Intro */}
      <section className="py-10 px-6 max-w-5xl mx-auto space-y-6">
        <p>
          Are you struggling to find the right resources, technologies, and
          management to set up a new insurance business? Are you short of
          trained personnel to handle functions like policy management and
          underwriting? Outsourcing new business setup services to a skilled
          service provider can help you streamline operations and save costs.
        </p>
        <p>
          Nimble Acuity (Nimble Acuity) has a team of highly experienced insurance
          experts who can handle every critical process efficiently—from
          setting up new accounts to processing quote requests across multiple
          agencies.
        </p>
      </section>

      {/* Services */}
      <section className="bg-white py-10 px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">
          New Business Setup Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="font-bold mb-2">Quote Management Services</h3>
            <p>
              We efficiently handle all your quote and document management
              requirements. We verify details, analyze for accuracy, and ensure
              all quote information is correct.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Insurance Data Entry Services</h3>
            <p>
              Our team digitizes all information from quotes, handling
              different workloads while providing highly accurate data entry
              services.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Dispatch Quotes</h3>
            <p>
              We assist in speeding up your underwriting process by preparing
              terms and conditions for dispatch to clients once underwriting is
              complete.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Insurance Administration</h3>
            <p>
              We manage all client data, employee details, claim renewals, and
              reminders, ensuring documentation is complete and up-to-date.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-100 py-10 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Nimble Acuity's New Business Setup Process
        </h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Identification:</strong> Identify all objects that need
            insurance and itemize all components of the new business setup.
          </li>
          <li>
            <strong>Insurance Policy Preparation:</strong> Complete the
            application and submit it to the organization.
          </li>
          <li>
            <strong>Review:</strong> Verify the accuracy of the application
            after client approval.
          </li>
          <li>
            <strong>Policy Creation:</strong> Finalize and create the policy,
            binding the client to the terms and conditions.
          </li>
        </ol>
      </section>

      {/* Other Services */}
      <section className="bg-white py-10 px-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Other Services You Can Benefit From
        </h2>
        <ul className="list-disc pl-6 max-w-3xl mx-auto space-y-2">
          <li>Life/Annuity Insurance Claims Management</li>
          <li>Insurance Claims Management for Property Casualty</li>
          <li>Insurance Appointment Setting Services</li>
          <li>Warranty Claims Management Services</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-10 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Why Choose Nimble Acuity for New Business Setup Services?
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Affordable pricing packages starting at $8/hour</li>
          <li>World-class infrastructure and latest tools & technologies</li>
          <li>Experienced insurance experts catering to unique client needs</li>
          <li>Dedicated project manager as single point of contact</li>
          <li>ISO/IEC 27001:2022 certified data security</li>
          <li>Highly scalable solutions to match client demand</li>
          <li>Quick turnaround time with global delivery centers</li>
          <li>24/7 support and error-free services</li>
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
              Insurance Back-office Solutions for Health Insurance Company:
            </span>{" "}
            Delivered services efficiently, providing quick turnaround for a
            leading health insurance company.
          </p>
          <p>
            <span className="font-bold">
              Streamlined Insurance Back-office Operations for Miami-based Client:
            </span>{" "}
            Provided cost-effective back-office operations for a prominent
            Miami insurance agency.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-900 text-white py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Nimble New Business Setup Services to Nimble Acuity
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          We provide cost-effective, reliable, and quality new business setup
          services for insurance carriers. Let our experienced experts handle
          your setup processes while you focus on growth.
        </p>
        <button className="bg-white text-green-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default NewBusinessSetup;
