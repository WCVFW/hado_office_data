import React from "react";
import DSmainmenu from "../DSmainmenu";

const GeotaggingDataEntry: React.FC = () => {
  const services = [
    "Business Tagging Services – Geotag businesses on Google Maps and Google Earth with precision and accuracy",
    "Video Geotagging Data Entry – Sort and index videos for better searchability and accessibility",
    "Image Geotagging Data Entry – Organize geotagging info for images in secure databases with location details",
    "Geotagged Data Conversion – Convert geotagged data to formats compatible with your website, OS, or devices",
    "Website Geotagging Data Entry – Gather geotagged info from websites into a single structured database",
  ];

  const processSteps = [
    "Define Service Requirement – Scope details and roles for geotagging data entry services",
    "Conduct Trial Project – Undertake trial based on client inputs",
    "Outline Effort, Pricing, & SLA – Specify time, resources, and pricing",
    "Assign Allocated Project – Designate Project Manager to set up team and resources",
    "Initiate Process Implementation – Analyze and sort geotagging data entries",
    "Perform Quality Check – Quality Assessment team checks accuracy",
    "Regulate Scheduled Delivery – Upload outputs based on client inputs and schedules",
  ];

  const benefits = [
    "26+ years of experience in data management and data entry services",
    "Highly trained specialists for any geotagging data entry requirements",
    "Assured data accuracy with multiple quality checks",
    "State-of-the-art infrastructure to provide innovative geotagging solutions",
    "Tailored consultation with constant communication and troubleshooting",
    "Cost-effective pricing with quick turnaround and ISO-standard QC processes",
    "High-level data security and redundancy protocols for complete safety",
  ];

  const stats = [
    { value: "40%", label: "Cost Reduction" },
    { value: "8-24 Hrs", label: "Faster Turnaround" },
    { value: "500+", label: "Satisfied Clients" },
    { value: "350+", label: "Skilled Data Management Experts" },
    { value: "99%", label: "Accuracy" },
    { value: "26+", label: "Years Experience" },
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Geotagging Data Entry Services
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Accurate geotagging data entry services to enhance marketing, retail, and industry-specific mapping requirements.
        </p>
        <p className="text-gray-600">
          Nimble Acuity provides cost-effective, customized solutions with highly trained specialists and advanced infrastructure.
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Our Geotagging Data Entry Services
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 list-disc pl-5 text-gray-700">
          {services.map((service, idx) => (
            <li key={idx} className="p-3 border-l-4 border-green-600 bg-gray-50 rounded hover:bg-gray-100 transition">
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* Stats Section */}
      <section className="mb-16 text-center">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-green-50 p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="text-3xl font-bold text-green-700">{stat.value}</h3>
              <p className="text-gray-700 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Geotagging Data Entry Process
        </h2>
        <ol className="list-decimal pl-5 space-y-3 text-gray-700">
          {processSteps.map((step, idx) => (
            <li key={idx} className="p-3 border-l-4 border-green-600 bg-gray-50 rounded hover:bg-gray-100 transition">
              {step}
            </li>
          ))}
        </ol>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Benefits of Outsourcing Geotagging Data Entry Services to Nimble Acuity
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="p-3 border-l-4 border-green-600 bg-gray-50 rounded hover:bg-gray-100 transition">
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition transform hover:scale-105">
          Contact Us for Geotagging Data Entry Services
        </button>
      </section>
    </div>
  );
};

export default GeotaggingDataEntry;
