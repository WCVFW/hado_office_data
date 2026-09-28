import React from "react";
import DSmainmenu from "../DSmainmenu";

const DocumentImaging: React.FC = () => {
  const stats = [
    { value: "40%", label: "Cost Reduction" },
    { value: "8-24 Hrs", label: "Faster Turnaround" },
    { value: "500+", label: "Satisfied Clients" },
    { value: "350+", label: "Skilled Data Management Experts" },
    { value: "99%", label: "Accuracy" },
    { value: "21", label: "Years Experience" },
  ];

  const services = [
    "Paper to image conversion: Convert huge volumes of paper documents into digital images of various file formats.",
    "Data capture and imaging from coupons, vouchers and receipts: Process promotional or purchase data efficiently.",
    "Check scanning and imaging: Securely handle checks and legal documents with OCR and ICR.",
    "Forms capture: Collect and digitize data from forms into searchable databases.",
    "Microfilms, cards, magnetic tapes and photo data capture: Process data from various storage media into digital formats.",
    "Birth records, municipal records and town records data entry: Digitize public records and make them easily searchable.",
  ];

  const benefits = [
    "Save on space and filing cabinets by converting physical documents into digital formats, reducing infrastructure costs.",
    "Reduce administrative overheads and staff costs by enabling faster data retrieval compared to traditional document handling.",
    "Never lose data: Digital storage with backups ensures data security and accessibility anytime.",
    "Acquire a competitive advantage: Streamlined document management accelerates decision-making and boosts customer satisfaction.",
    "Partner with Nimble Acuity for global experience, flexible outsourcing models, and strong security systems ensuring risk-free outsourcing.",
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Document Imaging Services
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Digitize your documents, forms, receipts, microfilms, and photos efficiently with Nimble Acuity's document imaging and data capture solutions.
        </p>
        <p className="text-gray-600">
          Our high-speed scanning and advanced OCR/ICR technologies ensure your data is processed accurately and stored securely for easy retrieval.
        </p>
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

      {/* Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Document Imaging Services</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-3">
          {services.map((service, idx) => (
            <li key={idx} className="bg-blue-50 p-4 rounded border-l-4 border-blue-600 hover:bg-blue-100 transition">
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Benefits of Outsourcing Document Imaging</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-3">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="bg-blue-50 p-4 rounded border-l-4 border-blue-600 hover:bg-blue-100 transition">
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105">
          Contact Us to Nimble Document Imaging Services
        </button>
      </section>
    </div>
  );
};

export default DocumentImaging;
