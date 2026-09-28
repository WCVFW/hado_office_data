import React from "react";
import DSmainmenu from "../DSmainmenu";

const OfflineDataEntryServices: React.FC = () => {
  const services = [
    "Offline data collection",
    "URL list collection",
    "Offline data capture",
    "Offline form filling",
    "Offline form processing",
    "Excel sheet filling and MS Word document data entry",
    "Offline data entry from mailing lists, websites, and image files",
    "Offline entry of insurance claims",
    "E-books entry, business cards entry, catalog and labels entry",
    "Offline entry of data from one version/format to another",
    "Data entry into database programs",
  ];

  const stats = [
    { value: "40%", label: "Cost Reduction" },
    { value: "8-24 Hrs", label: "Faster Turnaround" },
    { value: "500+", label: "Satisfied Clients" },
    { value: "350+", label: "Skilled Data Management Experts" },
    { value: "99%", label: "Accuracy" },
    { value: "21", label: "Years Experience" },
  ];

  const advantages = [
    "Almost 60% savings on operating costs through efficient processes",
    "State-of-the-art technology for high-speed, accurate data entry",
    "Strong security systems ensuring risk-free outsourcing",
    "Time and budget requirements are prioritized",
    "Proven track record of successful offline data entry projects",
    "Well-managed, efficient, and cost-effective project delivery",
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Offline Data Entry Services
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          An efficient back end is a prerequisite to an efficient front end. At Nimble Acuity, we follow an 'end-user and end-purpose' approach to offline data entry.
        </p>
        <p className="text-gray-600">
          Our meticulous process ensures high levels of accuracy, speed, and ease of understanding for large volumes of data.
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Our Offline Data Entry Services
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 list-disc pl-5 text-gray-700">
          {services.map((service, idx) => (
            <li key={idx} className="p-2 border-l-4 border-blue-600 bg-gray-50 rounded hover:bg-gray-100 transition">
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
          Why Nimble Offline Data Entry Jobs to Nimble Acuity?
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
          {advantages.map((adv, idx) => (
            <li key={idx} className="border-l-4 border-blue-600 pl-4 py-3 bg-gray-50 rounded hover:bg-gray-100 transition">
              {adv}
            </li>
          ))}
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105">
          Contact Us for Offline Data Entry Services
        </button>
      </section>
    </div>
  );
};

export default OfflineDataEntryServices;
