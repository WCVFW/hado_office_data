import React from "react";
import DSmainmenu from "../DSmainmenu";

const RealEstateAppraisalDataEntry: React.FC = () => {
  const services = [
    "Negotiation Data Entry – Organizing buyer-seller data with accuracy and proper formatting",
    "Mortgage Lending Data Entry – Managing property or commercial mortgage data",
    "Property Insurance Data Entry – Administration of monetary information, insurance forms, and deals",
    "Appeals & Property Tax Assessment Data Entry – Error-free data for taxation assessment",
    "Property Business Mergers & Dissolutions Data Entry – Scanning, formatting, and database design for ownership transfers",
    "Property Investment Entry – Complete documentation in both printed and digital formats",
  ];

  const stats = [
    { value: "40%", label: "Cost Reduction" },
    { value: "8-24 Hrs", label: "Faster Turnaround" },
    { value: "500+", label: "Satisfied Clients" },
    { value: "350+", label: "Skilled Data Management Experts" },
    { value: "99%", label: "Accuracy" },
    { value: "21", label: "Years Experience" },
  ];

  const reasons = [
    "Specialists capable of handling complex and varied data entry requests",
    "Cost-effective services with quick turnaround to meet schedules",
    "Customized real estate appraisal databases based on client requirements",
    "Articulate appraisal reports based on organized property data",
    "Skilled in converting appraisal reports into any required format",
    "Consolidation of all appraisal information to improve productivity",
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Real Estate Appraisals Data Entry Services
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Streamline your real estate appraisal operations with precise and reliable data entry services from Nimble Acuity.
        </p>
        <p className="text-gray-600">
          Our solutions cover all processes including insurance, investment, tax, development, and property sales.
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Our Real Estate Appraisal Data Entry Services
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 list-disc pl-5 text-gray-700">
          {services.map((service, idx) => (
            <li key={idx} className="p-3 border-l-4 border-blue-600 bg-gray-50 rounded hover:bg-gray-100 transition">
              {service}
            </li>
          ))}
        </ul>
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

      {/* Why Choose Us Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Why Choose Nimble Acuity for Real Estate Appraisal Data Entry?
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
          {reasons.map((reason, idx) => (
            <li key={idx} className="p-3 border-l-4 border-blue-600 bg-gray-50 rounded hover:bg-gray-100 transition">
              {reason}
            </li>
          ))}
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105">
          Contact Us for Real Estate Appraisal Data Entry Services
        </button>
      </section>
    </div>
  );
};

export default RealEstateAppraisalDataEntry;
