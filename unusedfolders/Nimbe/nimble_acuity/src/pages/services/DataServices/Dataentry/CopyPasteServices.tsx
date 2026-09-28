import React from "react";
import DSmainmenu from "../DSmainmenu";

const CopyPasteServices: React.FC = () => {
  const services = [
    "Transferring Content from One Format to Another",
    "Copy/Pasting Other Data Forms",
    "Copy/Pasting Large Volumes of Data",
    "Copy/Pasting Web Content into Various Formats",
  ];

  const processFlow = [
    { step: "Briefing", description: "Nimble Acuity Business Development Manager assesses client requirement" },
    { step: "Team Allocation", description: "Trained data entry professionals assigned to the project according to client requirement" },
    { step: "Input", description: "Client transfers printed/handwritten documents via FTP or Dropbox in various formats" },
    { step: "Data Entry", description: "Qualified data entry professionals perform copy/paste services manually" },
    { step: "Review", description: "First draft reviewed and edits/modifications completed if any" },
    { step: "Output", description: "Final output transferred via FTP, Dropbox, etc., in client preferred format" },
  ];

  const benefits = [
    "Fast Delivery - Quick turnaround times to save money and adhere to schedules",
    "Increase Core Business Activity Focus - Let you concentrate on core business functions",
    "Cost-effective Services - Full Time Equivalents (FTEs), hourly rates and customized pricing",
    "Accuracy - Services with 99.5% accuracy rating",
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nimble Copy Paste Services</h1>
        <p className="text-lg text-gray-700 mb-4">
          Eliminate tedious copy-paste work, handle incompatible file formats, and save time by outsourcing to Nimble Acuity's skilled data entry team.
        </p>
        <p className="text-gray-600">
          Whether it's PDF to Word, Excel to PowerPoint, or large-scale data transfers, our experts ensure accurate, timely results.
        </p>
      </section>

      {/* Services Offered */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Professional Copy Paste Services</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2 text-center md:text-left">
          {services.map((service, idx) => (
            <li key={idx} className="bg-blue-50 p-3 rounded border-l-4 border-blue-600 hover:bg-blue-100 transition">
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* Process Flow */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Copy Paste Services Process Flow</h2>
        <ol className="space-y-4 text-gray-700">
          {processFlow.map((item, idx) => (
            <li key={idx} className="bg-blue-50 p-4 rounded border-l-4 border-blue-600 hover:bg-blue-100 transition">
              <span className="font-semibold">{item.step}:</span> {item.description}
            </li>
          ))}
        </ol>
      </section>

      {/* Benefits */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Benefits of Nimble Acuity's Copy Paste Services</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="bg-blue-50 p-3 rounded border-l-4 border-blue-600 hover:bg-blue-100 transition">
              {benefit}
            </li>
          ))}
        </ul>
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
          <p className="text-gray-600">Skilled Experts</p>
        </div>
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-2xl font-bold">99%</h3>
          <p className="text-gray-600">Accuracy</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105">
          Contact Us for Copy Paste Services
        </button>
      </section>
    </div>
  );
};

export default CopyPasteServices;
