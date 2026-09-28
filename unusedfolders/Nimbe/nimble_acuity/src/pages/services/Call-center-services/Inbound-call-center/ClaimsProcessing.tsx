import React from "react";
import CCmainmenu from "../CCmainmenu";

const ClaimsProcessing: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-indigo-800 to-blue-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Claims Processing Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          We are currently working with India&apos;s Largest e-commerce
          conglomerate to onboard{" "}
          <span className="font-semibold">4000+ sellers</span> each month.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <p>
          In today&apos;s competitive business environment, it&apos;s wiser to
          delegate selected services to Nimble so you can focus on activities
          critical to your business. Claim processing is one such service that
          can be managed more efficiently by Nimble. Our approach eliminates{" "}
          <span className="font-semibold">Non-Value-Added (NVA)</span> steps
          like excessive transfers and long hold times, while improving{" "}
          <span className="font-semibold">Critical to Quality (CTQ)</span>{" "}
          functions like prompt responses, effective communication, and legal
          compliance.
        </p>
        <p>
          Nimble Acuity, one of the leading providers of claims processing call
          center services, applies structured{" "}
          <span className="font-semibold">Lean methodologies</span> to optimize
          workflows. This ensures high claims processing rates and error-free
          outcomes for global clients.
        </p>
      </section>

      {/* Execution Process */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          How Claim Processing is Executed at Nimble Acuity
        </h2>
        <div className="max-w-5xl mx-auto space-y-4 text-lg">
          <p>
            Our inbound call center experts use a{" "}
            <span className="font-semibold">scripted call management system</span>{" "}
            with back-end delivery and enterprise-level reporting.
          </p>
          <p>
            Advanced systems at Nimble can automatically deliver urgent messages
            to customers via fax or email. Agents can then send voicemail or
            paging alerts for immediate follow-up.
          </p>
          <p>
            Claim-related queries are handled using{" "}
            <span className="font-semibold">Poka-Yoke validated workflows</span>{" "}
            that prioritize and escalate calls based on CTQ triggers, ensuring
            timely and efficient processing.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Benefits of Choosing Nimble for Claims Processing
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Faster Turnaround Time",
              desc: "Claim-related calls are resolved within 12–24 hours using Lean best practices.",
            },
            {
              title: "Accuracy",
              desc: "Error-proofed workflows validated by root cause analysis ensure high accuracy.",
            },
            {
              title: "Web-Based Reports",
              desc: "Real-time Work in Process (WIP) dashboards track CTQ performance metrics.",
            },
            {
              title: "Support Facility",
              desc: "DMAIC-driven teams ensure logical and stable claims processing systems.",
            },
            {
              title: "Quality",
              desc: "DMAIC practices improve First Call Resolution (FCR) rates by up to 48.58%.",
            },
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold mb-2">{benefit.title}</h3>
              <p>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call Center Software */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">
          Call Center Software We Use
        </h2>
        <div className="flex flex-wrap justify-center gap-4 text-lg font-medium">
          {[
            "HubSpot",
            "Bitrix24",
            "Talkdesk",
            "Five9",
            "Zendesk",
            "Dixa",
            "Salesforce",
            "LiveAgent",
            "Avaya",
          ].map((tool, idx) => (
            <span
              key={idx}
              className="bg-gray-100 px-4 py-2 rounded-lg hover:bg-blue-50"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">
          Other Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          {[
            "Telemarketing Services",
            "Outbound Call Center Services",
            "Lead Generation Services",
            "Virtual Assistant Services",
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white shadow p-6 rounded-lg hover:shadow-md"
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Call Center Portfolio
        </h2>
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p>
            <span className="font-semibold">Dashboard:</span> View Overview,
            Campaign Stats, Reports, Gross TPH
          </p>
          <p>
            <span className="font-semibold">Staffing Calculator:</span> Calculate
            staffing & costing for your project (Inbound, Outbound, Email, Chat)
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-blue-700 to-indigo-900 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nimble Acuity – Your Ideal Claims Processing Partner
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Gain access to advanced infrastructure, cutting-edge software, and
          highly skilled professionals. Our Lean-certified agents follow
          standardized workflows and error-proofing protocols for consistent and
          efficient claims handling.
        </p>
        <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default ClaimsProcessing;
