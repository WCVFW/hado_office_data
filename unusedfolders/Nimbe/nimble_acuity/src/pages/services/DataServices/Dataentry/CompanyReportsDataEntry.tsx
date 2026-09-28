import React from "react";
import DSmainmenu from "../DSmainmenu";

const CompanyReportsDataEntry: React.FC = () => {
  const benefits = [
    "Increased focus on functional areas – divert resources to core expertise and strengthen your brand",
    "Access to trained professionals and sophisticated technology for superior results",
    "Access to superior project management with dedicated teams ensuring deadlines and quality",
    "Secure service with encrypted file transfer and confidential handling of sensitive data",
    "Assurance of quality through stringent QA process and editorial checks",
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Company Reports Data Entry Services
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Nimble Acuity provides accurate and efficient company reports data
          entry services, leveraging both advanced technology and skilled
          professionals. Focus on your core business while we handle your data.
        </p>
      </section>

      {/* Why Nimble Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Why Nimble Company Reports Data Entry Services?
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-3 md:text-left text-center">
          {benefits.map((benefit, idx) => (
            <li
              key={idx}
              className="bg-blue-50 p-3 rounded border-l-4 border-blue-600 hover:bg-blue-100 transition"
            >
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
          <p className="text-gray-600">Skilled Data Experts</p>
        </div>
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-2xl font-bold">99%</h3>
          <p className="text-gray-600">Accuracy</p>
        </div>
      </section>

      {/* Transforming Businesses Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Transforming Businesses Worldwide
        </h2>
        <p className="text-gray-700 text-center md:text-left">
          As your outsourcing partner, we understand your vision and corporate
          culture, providing innovative solutions that give you a competitive
          advantage. With Nimble Acuity, your company reports data entry needs
          are handled efficiently, securely, and accurately.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105">
          Contact Us for Company Reports Data Entry Services
        </button>
      </section>
    </div>
  );
};

export default CompanyReportsDataEntry;
