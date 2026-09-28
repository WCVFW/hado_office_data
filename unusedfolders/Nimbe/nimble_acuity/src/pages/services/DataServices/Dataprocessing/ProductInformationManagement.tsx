import React from "react";
import DSmainmenu from "../DSmainmenu";

const ProductInformationManagement: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-24 px-4 text-center rounded-b-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Product Information Management Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Save costs and create a user-friendly inventory of your product data by leveraging Nimble Auity’s expert PIM services.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Get a Free Quote
        </a>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our PIM Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Collecting & Compiling Product Data",
              desc: "Organize scattered product data from ERP, suppliers, and marketplaces into a centralized, accurate repository.",
            },
            {
              title: "PIM System Consulting & Implementation",
              desc: "Select and implement the best PIM software for your business with smooth migration and adoption.",
            },
            {
              title: "Master Data Management",
              desc: "Create a single repository system and publish products across multiple platforms seamlessly.",
            },
            {
              title: "Data Clean-up",
              desc: "Remove outdated and redundant product data to maintain relevance and accuracy across platforms.",
            },
            {
              title: "Managing Data Quality",
              desc: "Enhance product descriptions, meta-data, and classifications to improve SEO and customer engagement.",
            },
            {
              title: "Printed Product Catalog Support",
              desc: "Prepare optimized product data for printable catalogs in the required format.",
            },
            {
              title: "Manage Product Listings",
              desc: "Monitor and optimize product listings across e-commerce platforms to ensure accuracy and consistency.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              <h3 className="font-semibold mb-2 text-blue-600">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our PIM Process</h2>
        <ol className="space-y-6 text-gray-700 text-lg list-decimal list-inside">
          <li>Scope of Work: Understand client requirements and define project scope.</li>
          <li>Access to Data: Collect login details and necessary information to begin work.</li>
          <li>Product Data Analysis: Gather and compile product data from multiple sources.</li>
          <li>Roadmap Creation: Design a PIM implementation roadmap for client review.</li>
          <li>PIM Software Integration: Implement PIM software across systems and platforms.</li>
          <li>Software Adoption: Provide consultation and assistance for smooth migration.</li>
          <li>Support Services: Resolve client queries and provide ongoing support.</li>
        </ol>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Benefits of Choosing Nimble Auity</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "ISO Certified Product Information Service",
            "Cost-effective, flexible pricing",
            "High data security and confidentiality",
            "Short turnaround with quality output",
            "Modern infrastructure and top-notch technology",
            "High accuracy verified by QA specialists",
            "Experienced and highly qualified team",
            "24/7 Customer Support across time zones",
            "Scalable to meet fluctuating business needs",
          ].map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
              <p className="text-gray-800 font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="font-semibold mb-2">NZ-based Management Consulting Firm</h3>
            <p>Delivered highly robust and cost-effective data extraction solutions for seamless operations.</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="font-semibold mb-2">US-based Online Store</h3>
            <p>Provided accurate and reliable online data entry services, ensuring smooth inventory management.</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center py-16">
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold px-12 py-4 rounded-full shadow-lg hover:opacity-90 transition duration-300"
        >
          Contact Nimble Auity
        </a>
      </section>
    </div>
  );
};

export default ProductInformationManagement;
