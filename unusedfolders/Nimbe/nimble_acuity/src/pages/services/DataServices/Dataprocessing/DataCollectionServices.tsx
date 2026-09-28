import React from "react";
import DSmainmenu from "../DSmainmenu";

const DataCollectionServices: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-24 px-4 text-center rounded-b-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Data Collection Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Let Nimble collect high-quality data for your business to enhance insights and decision-making at $7/hour.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block bg-white text-purple-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Get Started
        </a>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Data Collection Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Web Research Services",
              desc: "Tech-enabled B2B and B2C web research services with consistent quality, efficiency, and compliance.",
            },
            {
              title: "Data Verification Services",
              desc: "Verify data via web research and in-person interviews to enhance accuracy and enrich your database.",
            },
            {
              title: "Data Mining Services",
              desc: "Manage and extract high-value data efficiently using classification, segmentation, and pattern detection.",
            },
            {
              title: "Database Building Services",
              desc: "Create and maintain structured databases for optimized access, management, and business decision-making.",
            },
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
              <h3 className="font-semibold mb-2 text-indigo-600">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Data Collection Process */}
      <section className="py-16 bg-gray-50 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Data Collection Process</h2>
        <ol className="list-decimal list-inside space-y-6 text-gray-800 max-w-3xl mx-auto">
          <li>
            <strong>Requirement Gathering:</strong> Work side by side with clients to outline business challenges and data needs.
          </li>
          <li>
            <strong>Extract:</strong> Collect data from surveys, studies, and other sources, ensuring quality and relevance.
          </li>
          <li>
            <strong>Transform:</strong> Convert collected data into an interpretable and actionable format for business use.
          </li>
          <li>
            <strong>Load:</strong> Organize and load the cleaned data into your database for easy access and utilization.
          </li>
        </ol>
      </section>

      {/* Other Services */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Other Services You Can Benefit From</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {["Data Conversion Services", "Data Analytics Services", "ePUB Solutions", "Optical Character Recognition"].map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
              <p className="text-gray-800 font-medium">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Nimble Data Collection Services?</h2>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 list-disc list-inside text-gray-800">
          {[
            "Cost-effective and scalable solutions",
            "Boost productivity without IT infrastructure",
            "Transparent process for all users",
            "Complete data security and privacy",
            "Access to certified data collection experts",
            "Flexible scaling to meet business growth",
            "ISO certified with assured compliance",
          ].map((benefit, index) => (
            <li key={index} className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300">{benefit}</li>
          ))}
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="font-semibold mb-2">UK-based Software Firm</h3>
            <p>Delivered scanning and data entry services to optimize workload and improve revenue for a UK software client.</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="font-semibold mb-2">Poland-based Bike Accessories Seller</h3>
            <p>Provided eCommerce data entry services that improved efficiency and ensured cost-effective solutions.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Client Testimonials</h2>
        <blockquote className="bg-white p-8 rounded-xl shadow-lg text-gray-700 italic">
          “We were very satisfied with the quality of service Nimble Auity provided. They were able to meet our requests with great professionalism and flexibility.”
          <cite className="block mt-4 font-semibold not-italic">Spokesperson, Online health lessons company in Canada</cite>
        </blockquote>
      </section>

      {/* Contact CTA */}
      <section className="text-center py-16">
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold px-12 py-4 rounded-full shadow-lg hover:opacity-90 transition duration-300"
        >
          Contact Nimble Auity
        </a>
      </section>
    </div>
  );
};

export default DataCollectionServices;
