import React from "react";
import DSmainmenu from "../DSmainmenu";

const MailingListDataEntry: React.FC = () => {
  const mailingListTypes = [
    "Address, City, State, Zip and Country compilation",
    "Email database compilation for businesses",
    "Updating or validating an existing database",
    "Electronic document-based mailing list compilation",
    "Printed directory-based mailing list compilation",
    "Internet-based mailing list compilation",
    "Consumer and business mailing list compilation",
    "Website database of companies compilation",
    "Database formatting such as splitting or combining fields",
  ];

  const mailingListCriteria = [
    "Gender",
    "Age",
    "Location (neighborhood, city, metro area, county, area code, state)",
    "Estimated household income",
    "Housing (estimated home value, home ownership, dwelling type, mortgage indicator)",
    "Credit card information",
    "Mail-order buyers",
  ];

  const benefits = [
    "Highly competent staff experienced in mailing list data entry",
    "Quick turnaround time with efficient project execution",
    "Customized services tailored to client needs",
    "Strict data security with NDAs and confidentiality agreements",
    "High accuracy ensured by proofreaders and quality experts",
    "State-of-the-art infrastructure including scanners, processors, secure FTP, and mailing list software",
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Data Entry Mailing List Services
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Nimble Acuity provides high-quality, cost-effective mailing list
          services including compilation and data entry. Our solutions save
          time, effort, and human resources while ensuring accuracy.
        </p>
      </section>

      {/* Mailing List Compilation Services */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Mailing List Compilation Services
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2 md:text-left text-center">
          {mailingListTypes.map((type, idx) => (
            <li
              key={idx}
              className="bg-green-50 p-3 rounded border-l-4 border-green-600 hover:bg-green-100 transition"
            >
              {type}
            </li>
          ))}
        </ul>
        <p className="text-gray-700 mt-4">
          Lists can also be customized according to {mailingListCriteria.join(", ")}.
        </p>
      </section>

      {/* Mailing List Data Entry Services */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Mailing List Data Entry Services
        </h2>
        <p className="text-gray-700 mb-4">
          Our skilled data entry technicians enter names, addresses, and other
          details into databases with minimal errors. We also handle partially
          filled lists by updating missing information efficiently.
        </p>
        <p className="text-gray-700">
          Advanced mailing list data entry software allows us to import/export
          names, update or delete information, and handle projects of all sizes
          with fast turnaround.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Why Choose Nimble Acuity?
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2 md:text-left text-center">
          {benefits.map((benefit, idx) => (
            <li
              key={idx}
              className="bg-green-50 p-3 rounded border-l-4 border-green-600 hover:bg-green-100 transition"
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

      {/* Call to Action */}
      <section className="text-center">
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition transform hover:scale-105">
          Contact Us for Mailing List Services
        </button>
      </section>
    </div>
  );
};

export default MailingListDataEntry;
