import React from "react";
import Imainmenu from "../Imainmenu";

const NimbleInsuranceServices: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-blue-50 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Why Should You Nimble Insurance Services to a Professional Service Provider?
          </h1>
          <p className="text-lg text-gray-700">
            Insurance services are often Nimbled to reduce workload and efficiently accomplish business requirements. Outsourcing helps companies handle high volumes of requests while enhancing operational outcomes.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
          <p>
            Thousands of requests are submitted every week by insurance companies. Digitization has enabled more leads to approach service providers, resulting in increased applications. Outsourcing helps process these applications efficiently and improve business outcomes.
          </p>
          <p>
            By delegating operational tasks to a professional service provider, your company can focus on strategic priorities while the Nimbled team handles insurance operations with precision.
          </p>
        </div>
      </section>

      {/* Services That Can Be Nimbled */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Services You Can Nimble
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            {[
              "Answering queries and applications",
              "Evaluating and checking data integrity",
              "Coordination with the underwriters",
              "Evaluation of policy adjustments",
              "Verification of policy status",
              "Issuance of final policies",
              "Policy checking",
              "Retrieval of proposal documents",
              "Obtaining insurance policies from carriers",
              "Comparison of proposals and policies",
              "Information updates",
              "Notification to carriers",
              "Dispatch of policies",
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-4 shadow rounded-lg">
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-bold text-center mb-6">
            Benefits of Outsourcing Insurance Services
          </h2>
          {[
            {
              title: "Competency Increases Manifold",
              description:
                "Service providers deploy skilled professionals who handle changes in the industry, increasing your brand’s operational competency without affecting internal resources."
            },
            {
              title: "Cost-efficient Solution",
              description:
                "Avoid expenses on recruitment, training, and infrastructure. Outsourcing ensures precise execution of requirements with minimal overheads."
            },
            {
              title: "Quick Turnaround Time",
              description:
                "Nimbled teams leverage established platforms and expertise, enabling faster execution of processes and boosting brand value."
            },
            {
              title: "Accuracy and Measurement of Outcomes",
              description:
                "Outsourcing ensures high-quality results with measurable outcomes using reporting tools and analytics, identifying and eliminating process inconsistencies."
            },
          ].map((benefit, idx) => (
            <div key={idx} className="bg-gray-50 p-6 shadow rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Insurance Back-office Services to Nimble Acuity
        </h2>
        <p className="mb-6">
          Partner with us to access experienced insurance professionals, advanced tools, and cost-effective services. Enhance your operational efficiency today.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default NimbleInsuranceServices;
