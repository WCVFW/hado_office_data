import React from "react";
import DSmainmenu from "../DSmainmenu";

const InvoiceDataEntry: React.FC = () => {
  const services = [
    "Self-billing invoices",
    "Credit and debit memos",
    "Sales and purchase invoices",
    "Scanned invoice images",
    "Work hours timesheets",
    "Excel sheet data filling & MS Word document data entry",
  ];

  const benefits = [
    "Up to 60% savings on operating costs",
    "98+% accuracy on final output",
    "Short turnaround times without compromising quality",
    "Confidentiality via NDAs and secure protocols",
    "Secure web servers, VPN (optional), and FTP transfers",
  ];

  const processFlow = [
    "Project Definition – Define invoice data entry requirements",
    "Trial – Deliver a trial project to set quality & price expectations",
    "Project SLA – Draft SLA with timelines, resources, and pricing",
    "Project Assignment – Allocate resources and assign Project Manager",
    "Execution – Analyze, sort, and enter data",
    "Quality Check – Continuous quality checks to ensure accuracy",
    "Delivery – Deliver output via client’s preferred method",
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Invoice Form Data Entry Services
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Streamline your invoice processing with Nimble Acuity's accurate 
          and cost-effective invoice form data entry services. We handle paper-based and electronic invoices for logistics, transport, finance, and other industries.
        </p>
      </section>

      {/* Services Offered */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Our Invoice Data Entry Services Include
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-3 md:text-left text-center">
          {services.map((service, idx) => (
            <li key={idx} className="bg-blue-50 p-3 rounded border-l-4 border-blue-600 hover:bg-blue-100 transition">
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Benefits of Outsourcing Invoice Data Entry
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-3 md:text-left text-center">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="bg-green-50 p-3 rounded border-l-4 border-green-600 hover:bg-green-100 transition">
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      {/* Process Flow */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Invoice Data Entry Process
        </h2>
        <ol className="list-decimal pl-5 space-y-3 text-gray-700 md:text-left text-center">
          {processFlow.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
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

      {/* CTA Section */}
      <section className="text-center">
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition transform hover:scale-105">
          Contact Nimble Acuity for Invoice Data Entry Services
        </button>
      </section>
    </div>
  );
};

export default InvoiceDataEntry;
