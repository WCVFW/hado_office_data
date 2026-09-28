import React from "react";
import DSmainmenu from "../DSmainmenu";

const MultilingualInvoiceDataEntry: React.FC = () => {
  const stats = [
    { value: "40%", label: "Cost Reduction" },
    { value: "8-24 Hrs", label: "Faster Turnaround" },
    { value: "500+", label: "Satisfied Clients" },
    { value: "350+", label: "Skilled Data Experts" },
    { value: "99%", label: "Accuracy" },
    { value: "21", label: "Years Experience" },
  ];

  const offerings = [
    "Data entry from invoice hard copies or scanned copies",
    "Capturing, sorting and indexing of data",
    "Excel sheet filling and MS Word document data entry",
    "Entry into database programs and software applications",
    "Banking transactions, logistics, sales, and purchase invoice entries",
    "Customized services for automobile, manufacturing, healthcare, retail, and logistics firms",
    "Time-sheet and statement data entry",
    "Scanning hard copies of invoices for data entry",
    "Data entry of sales and purchase invoices",
    "Data entry of scanned invoice images",
    "Data entry of pro-forma invoices",
    "Self-billing invoice data entry",
    "Capturing, indexing, and sorting invoices",
    "Credit and debit memo data entry",
  ];

  const process = [
    { step: "01", title: "Scope Definition", desc: "Project is defined, and scope is finalized." },
    { step: "02", title: "Sample Creation", desc: "Samples of final outputs are sent for approval." },
    { step: "03", title: "Technology & Resourcing", desc: "Finalize time, technology, resources, and pricing." },
    { step: "04", title: "Project Execution", desc: "Execute data entry after analyzing and sorting data." },
    { step: "05", title: "Quality Control", desc: "Regular quality checks to ensure accuracy and relevance." },
    { step: "06", title: "Final Delivery", desc: "Final outputs uploaded securely to the client’s portal." },
  ];

  const benefits = [
    "Strict Data Security Protocols with NDAs, VPNs, and secure servers",
    "Highest Quality Standards with ISO-certified multi-level QC",
    "Flexible Pricing strictly based on project requirements",
    "Multilingual Data Entry Expertise across major global languages",
    "Global Project Management Framework with transparent communication",
    "Highly Skilled Staff with extensive domain knowledge",
    "Bespoke Services delivered in client-preferred formats (MS Word, PDF, HTML, etc.)",
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Multilingual Invoice Data Entry Services
        </h1>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto">
          Simplify invoice management with Nimble Acuity’s multilingual invoice data entry services. 
          From scanned copies to real-time updates, we ensure accuracy, security, and speed across multiple global languages.
        </p>
      </section>

      {/* Offerings */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Multilingual Invoice Data Entry Services We Offer
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto text-gray-700">
          {offerings.map((item, idx) => (
            <li
              key={idx}
              className="bg-gray-50 border-l-4 border-blue-600 p-4 rounded shadow hover:bg-blue-50 transition"
            >
              {item}
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
            <h3 className="text-2xl font-bold">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Process */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Multilingual Invoice Data Entry Process We Follow
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {process.map((step, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 border rounded-lg shadow hover:bg-blue-50 transition"
            >
              <span className="text-blue-600 font-bold text-xl">{step.step}</span>
              <h3 className="text-lg font-semibold mt-2">{step.title}</h3>
              <p className="text-gray-700 mt-1">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Why Choose Our Multilingual Invoice Data Entry Services?
        </h2>
        <ul className="list-disc list-inside max-w-3xl mx-auto text-gray-700 space-y-2">
          {benefits.map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition transform hover:scale-105">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default MultilingualInvoiceDataEntry;
