import React from "react";
import DSmainmenu from "../DSmainmenu";

const InsuranceClaimsDataEntry: React.FC = () => {
  const services = [
    {
      title: "Insurance Claims Processing",
      points: [
        "Lessen turnaround time through efficient processing",
        "Comply with data validation methods",
        "Secure with end-to-end encryption of data",
      ],
    },
    {
      title: "Adjudication Support",
      points: [
        "Review claims using rule-based methods",
        "Improve decision-making through granular analytics",
        "Streamline compliance checks and analysis",
      ],
    },
    {
      title: "Fraud Detection Services",
      points: [
        "Apply machine learning for pattern detection",
        "Detect outliers through predictive analytics",
        "Secure assets with proactive fraud protection",
      ],
    },
    {
      title: "Claims Settlement Support",
      points: [
        "Authenticate documents for claim approval accuracy",
        "Speed up settlements with synchronized communication",
        "Enable stakeholder collaboration and accelerate resolution",
      ],
    },
  ];

  const tools = ["Guidewire ClaimCenter", "Duck Creek Claims", "ClaimPilot"];

  const benefits = [
    "Preemptive Error Resolution to improve data quality",
    "Real-Time Reporting and Analytics for transparency",
    "Cost-Efficient Solutions reducing operational costs",
    "Dedicated Client Support with account managers",
    "Regulatory Compliance Expertise for risk mitigation",
    "Improved Turnaround Times enhancing policyholder satisfaction",
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Insurance Claims Data Entry Services
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Reinvent your claims management, attain precision, and improve security with Nimble Acuity's automation-powered insurance claims data entry services.
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Custom Data Entry Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="mb-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Tools We Leverage</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {tools.map((tool, idx) => (
            <span key={idx} className="bg-blue-50 px-4 py-2 rounded-full border border-blue-300">
              {tool}
            </span>
          ))}
        </div>
        <p className="mt-4 text-gray-500 text-sm">(Disclaimer: We use third-party tools solely for operational purposes.)</p>
      </section>

      {/* Stats Section */}
      <section className="grid md:grid-cols-5 gap-6 text-center mb-16">
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-2xl font-bold">40%</h3>
          <p className="text-gray-600">Cost Reduction</p>
        </div>
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-2xl font-bold">8-24 Hrs</h3>
          <p className="text-gray-600">Faster Turnaround</p>
        </div>
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-2xl font-bold">500+</h3>
          <p className="text-gray-600">Satisfied Clients</p>
        </div>
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-2xl font-bold">350+</h3>
          <p className="text-gray-600">Skilled Data Experts</p>
        </div>
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-2xl font-bold">99%</h3>
          <p className="text-gray-600">Accuracy</p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Why Choose Us?
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-3 md:text-left text-center">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="bg-green-50 p-3 rounded border-l-4 border-green-600 hover:bg-green-100 transition">
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105">
          Contact Nimble Acuity for Insurance Claims Data Entry Services
        </button>
      </section>
    </div>
  );
};

export default InsuranceClaimsDataEntry;
