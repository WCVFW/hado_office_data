import React from "react";
import DSmainmenu from "../DSmainmenu";

const CatalogDataEntryServices: React.FC = () => {
  const services = [
    "Catalog creation and indexing",
    "Catalog data entry",
    "E-commerce order processing",
    "Graphics and image support",
    "Data mining",
    "Catalog conversion",
  ];

  const cmsPlatforms = [
    "BoxBilling",
    "CubeCart",
    "Magento",
    "OpenCart",
    "osCommerce",
    "PrestaShop",
    "Quick.Cart",
    "TomatoCart",
    "WHMCS",
    "Zen Cart",
  ];

  const processSteps = [
    "Project Definition - Define requirement based on client inputs",
    "Trial - Deliver a trial project to set quality and price expectations",
    "Project SLA - Draft SLA with client approval",
    "Project Assignment - Allocate resources and appoint Project Manager",
    "Product Understanding - Study client's catalogs for better understanding",
    "Formatting Guidelines - Note headings, subheadings, bold/italic phrases",
    "Keyword Identification - Identify important keywords and create index",
    "Indexing - Categorize products/services into relevant categories",
    "Quality Check - Ensure accuracy of entered data",
    "Delivery - Deliver final output via client's preferred method",
  ];

  const benefits = [
    "150+ qualified data entry operators",
    "ISO quality system and skilled professionals",
    "99% SLA adherence",
    "Appealing product titles for better sales and SEO",
    "Support for multiple digital formats",
    "Work in your own time zone with 24/6 support",
    "100% data security (NDA & protocols)",
    "Cost-effective pricing (hourly, project-based, FTE options)",
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Catalog Data Entry Services
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Nimble Acuity provides accurate catalog data entry services to enhance e-commerce
          sales effectiveness. We handle product descriptions, images, and online categorization efficiently.
        </p>
      </section>

      {/* Services Offered */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Our Catalog Data Entry Services
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2 text-center md:text-left">
          {services.map((service, idx) => (
            <li
              key={idx}
              className="bg-blue-50 p-3 rounded border-l-4 border-blue-600 hover:bg-blue-100 transition"
            >
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* CMS Platforms */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          CMS Platforms We Support
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          {cmsPlatforms.map((platform, idx) => (
            <li
              key={idx}
              className="bg-blue-50 p-3 rounded border-l-4 border-blue-600 hover:bg-blue-100 transition"
            >
              {platform}
            </li>
          ))}
        </ul>
      </section>

      {/* Process Flow */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Our Catalog Data Entry Process
        </h2>
        <ol className="list-decimal pl-5 text-gray-700 space-y-2">
          {processSteps.map((step, idx) => (
            <li
              key={idx}
              className="bg-blue-50 p-3 rounded border-l-4 border-blue-600 hover:bg-blue-100 transition"
            >
              {step}
            </li>
          ))}
        </ol>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Benefits of Outsourcing Catalog Data Entry to Nimble Acuity
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
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
          Contact Us for Catalog Data Entry Services
        </button>
      </section>
    </div>
  );
};

export default CatalogDataEntryServices;
