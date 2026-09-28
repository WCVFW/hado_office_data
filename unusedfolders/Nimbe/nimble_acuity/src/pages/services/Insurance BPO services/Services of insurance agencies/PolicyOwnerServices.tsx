import React from "react";
import Imainmenu from "../Imainmenu";

const PolicyOwnerServices: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Nimble Policy Owner Services</h1>
        <p className="max-w-3xl mx-auto text-lg">
          Our experienced team has vast knowledge in Policy Owner Services and
          provides a streamlined process to meet your client’s support requests
          at rates starting at <span className="font-semibold">$8/hour</span>.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <p className="text-lg leading-relaxed">
          Our policy owner services assist insurance agents and companies with
          all kinds of post-policy issue requests—whether it’s changing a name,
          address, beneficiary, or notifying clients about renewals and
          expirations. Nimble Acuity ensures seamless processing with
          accuracy, security, and speed.
        </p>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-6">Policy Owner Services We Offer</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Policy Service Request Forms",
            "Death Claim Forms",
            "Other Policy Forms",
            "Collateral Assignments / Release of Assignments",
            "Beneficiary Change",
            "Ownership Change",
            "Bank Draft Changes",
            "Name Change",
            "Address Changes",
            "Face Amount Reductions",
            "Business Owners Policy Services",
            "Premium Mode Change",
            "Request a Duplicate Policy",
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-sm text-gray-600">
                Detailed assistance tailored for {service.toLowerCase()} requests.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Policy Owner Process We Follow
        </h2>
        <ol className="max-w-4xl mx-auto space-y-6 text-lg">
          <li>
            <span className="font-bold">01. Receive Request, Review, and Change:</span>{" "}
            We receive requests via email, review, and fill in the required forms.
          </li>
          <li>
            <span className="font-bold">02. Transmission and Status Tracking:</span>{" "}
            Forms are submitted to the carrier, and we track progress continuously.
          </li>
          <li>
            <span className="font-bold">03. Carrier Check:</span> We liaise with
            carriers for updates and expected completion timelines.
          </li>
          <li>
            <span className="font-bold">04. Policy Submission:</span> We send required
            details to the carrier for further processing.
          </li>
          <li>
            <span className="font-bold">05. Follow-up, Confirmation, and Status Update:</span>{" "}
            We follow up until confirmation and send you final updates.
          </li>
        </ol>
      </section>

      {/* Industries */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-6">Industries We Serve</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Insurance",
            "Finance & Accounting",
            "Healthcare",
            "Automotive",
            "Manufacturing",
            "Legal",
            "Media & Entertainment",
            "Mortgage",
          ].map((industry, idx) => (
            <div
              key={idx}
              className="p-4 bg-white rounded-xl shadow text-center font-medium"
            >
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-indigo-50 py-12 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Why Nimble Policy Owner Services to Us?
        </h2>
        <ul className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 list-disc list-inside text-lg">
          <li>Cost-effective pricing with high client retention.</li>
          <li>End-to-end policy processing and submission.</li>
          <li>ISO-certified, HIPAA-compliant processes.</li>
          <li>Dedicated project manager for every client.</li>
          <li>One-stop shop for all policy owner services.</li>
          <li>World-class infrastructure and 24/7 support.</li>
          <li>Quick turnaround times (as fast as 24 hours).</li>
          <li>High data security and compliance assurance.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-indigo-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Avail 1 WEEK FREE TRIAL on Any Service
        </h2>
        <p className="mb-6 text-lg">TRY before you BUY – Get started today!</p>
        <button className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold shadow hover:bg-gray-100">
          Get Started Now
        </button>
      </section>
    </div>
  );
};

export default PolicyOwnerServices;
