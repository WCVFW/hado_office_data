import React from "react";
import DSmainmenu from "../DSmainmenu";

const BiologicalSpeciesDatabase: React.FC = () => {
  const stats = [
    { value: "40%", label: "Cost Reduction" },
    { value: "8-24 Hrs", label: "Faster Turnaround" },
    { value: "500+", label: "Satisfied Clients" },
    { value: "350+", label: "Skilled Data Experts" },
    { value: "99%", label: "Accuracy" },
    { value: "21", label: "Years Experience" },
  ];

  const services = [
    "Data Collection and Entry – From generic info on organisms to in-depth data on nucleotide & protein sequences, genome databases, bibliographies, etc.",
    "Biological Image Annotation Services – Tagging biological images with accurate and relevant metadata.",
    "Multi-Lingual Database Support – Making biological data more accessible in multiple languages.",
    "Data Verification and Presentation – Curated, accurate, and readable biological data.",
    "Fully Functional Databases – Using abstracting and indexing (A&I) methods for comprehensive database creation.",
  ];

  const process = [
    { step: "01", title: "Requirement Understanding", desc: "Gather client requirements and expectations." },
    { step: "02", title: "Resource Engagement", desc: "Assign expert resources from the Data Management team." },
    { step: "03", title: "Data Collection", desc: "Collect data using secondary research methods." },
    { step: "04", title: "Database Creation", desc: "Build and upload the structured biological database." },
    { step: "05", title: "Review & Feedback", desc: "Review project, gather client feedback, and refine." },
    { step: "06", title: "Quality Check", desc: "Run rigorous QA checks for accuracy and consistency." },
    { step: "07", title: "Final Delivery", desc: "Deliver the database in the client’s preferred format." },
  ];

  const benefits = [
    "Data Accuracy – Verified through ISO-certified quality processes.",
    "Data Confidentiality – Strict security policies and signed NDAs.",
    "Quick Turnaround – Multiple global delivery centers ensure efficiency.",
    "Flexible Pricing Model – Options include per project, per hour, and FTE-based models.",
    "Skilled Professionals – Minimum 5 years of specialized experience in biological data management.",
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Biological Species Database Creation Services
        </h1>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto">
          Structured, accurate, and multilingual biological databases to support
          scientists, laboratories, libraries, and research organizations.
        </p>
      </section>

      {/* Services */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Biological Species Database Creation Services We Offer
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto text-gray-700">
          {services.map((service, idx) => (
            <li
              key={idx}
              className="bg-gray-50 border-l-4 border-green-600 p-4 rounded shadow hover:bg-green-50 transition"
            >
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* Stats */}
      <section className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 text-center mb-16">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white border rounded-lg p-4 shadow hover:shadow-md transition"
          >
            <h3 className="text-2xl font-bold text-green-700">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Process */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Biological Species Database Creation Process We Follow
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {process.map((step, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 border rounded-lg shadow hover:bg-green-50 transition"
            >
              <span className="text-green-700 font-bold text-xl">
                {step.step}
              </span>
              <h3 className="text-lg font-semibold mt-2">{step.title}</h3>
              <p className="text-gray-700 mt-1">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Benefits of Partnering with Nimble Acuity
        </h2>
        <ul className="list-disc list-inside max-w-3xl mx-auto text-gray-700 space-y-2">
          {benefits.map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center">
        <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-green-700 transition transform hover:scale-105">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default BiologicalSpeciesDatabase;
