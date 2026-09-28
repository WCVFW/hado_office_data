import React from "react";
import DSmainmenu from "../DSmainmenu";

const OnlineDataEntryServices: React.FC = () => {
  const services = [
    {
      title: "Remote Data Entry Services",
      points: [
        "Process sensitive data through VPN and encryption",
        "Collaborate with teams using cloud-based tools",
        "Secure platforms to update data from remote locations",
      ],
    },
    {
      title: "Website Data Entry Services",
      points: [
        "Upload and format product descriptions and images",
        "Synchronize site content with marketing campaigns",
        "Update and maintain website metadata for SEO",
      ],
    },
    {
      title: "Internet Data Input Services",
      points: [
        "Populate structured user data across online databases",
        "Capture web form submissions on real-time systems",
        "Integrate API-driven data entry workflows",
      ],
    },
    {
      title: "Database Data Entry Services",
      points: [
        "Validate data accuracy using intelligent models",
        "Add large datasets into SQL and NoSQL databases",
        "Extract insights with advanced query manipulation",
      ],
    },
    {
      title: "QuickBooks Data Entry Services",
      points: [
        "Record and categorize receipts for tax purposes",
        "Reconcile bank statements with QuickBooks entries",
        "Track and maintain payment and invoice details",
      ],
    },
  ];

  const stats = [
    { value: "40%", label: "Cost Reduction" },
    { value: "8-24 Hrs", label: "Faster Turnaround" },
    { value: "500+", label: "Satisfied Clients" },
    { value: "350+", label: "Skilled Data Management Experts" },
    { value: "99%", label: "Accuracy" },
    { value: "21", label: "Years Experience" },
  ];

  const tools = ["Microsoft Excel", "Google Sheets", "Zoho Forms", "SmartCOMM"];

  const advantages = [
    "Up to 60% savings on data entry costs",
    "Expert data entry operators",
    "100% accuracy with latest technology",
    "Experience across different industries",
    "High-quality results with fast turnaround",
    "100% security and confidentiality",
  ];

  const caseStudies = [
    {
      title: "#1 European Luggage Storage Provider Gets Online Data Entry Services",
      description:
        "A leading French luggage storage provider needed accurate online data entry services. Our team delivered top-quality services with a quick turnaround.",
    },
    {
      title: "Renowned Organic Greens Farm Gets Online Data Entry Services",
      description:
        "A renowned organic greens farm sought high-quality online data entry services. Our team provided the services efficiently within a short timeframe.",
    },
  ];

  const processSteps = [
    "Input files are obtained from a server, database, FTP, URL, etc.",
    "Data is entered into an online tool, like a CRM tool, client-based tool, or remote tool",
    "A QC check is done online",
    "Errors are corrected immediately",
    "Final files are saved and client access provided",
    "Subsequent client requested changes are made online",
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Online Data Entry Services
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Add, refine, and organize your database to keep it updated, reliable, and actionable with our online data entry services.
        </p>
        <p className="text-gray-600">
          We provide quick, accurate, and secure data entry solutions to eliminate errors and maintain data fidelity across your enterprise systems.
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Online Database Entry Services We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-6 shadow hover:shadow-lg transition bg-white hover:scale-105"
            >
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-16 text-center">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-blue-50 p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="text-3xl font-bold text-blue-700">{stat.value}</h3>
              <p className="text-gray-700 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="mb-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Tools We Specialize In</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {tools.map((tool, idx) => (
            <span
              key={idx}
              className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-medium hover:bg-blue-100 transition"
            >
              {tool}
            </span>
          ))}
        </div>
        <p className="text-gray-500 mt-2 text-sm">
          (Disclaimer: The use of the abovementioned tools is subject to Nimble Acuity's present practices.)
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Why Choose Nimble Acuity for Online Data Entry Services?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {advantages.map((adv, idx) => (
            <div
              key={idx}
              className="border-l-4 border-blue-600 pl-4 py-3 bg-gray-50 rounded hover:bg-gray-100 transition"
            >
              {adv}
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Case Studies
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((caseStudy, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-6 shadow hover:shadow-lg transition bg-white"
            >
              <h3 className="text-xl font-bold mb-2">{caseStudy.title}</h3>
              <p className="text-gray-700">{caseStudy.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Online Data Entry Process Flow
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 max-w-3xl mx-auto">
          {processSteps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105">
          Get Top-Notch Data Entry Services
        </button>
      </section>
    </div>
  );
};

export default OnlineDataEntryServices;
