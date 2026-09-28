import React from "react";
import DSmainmenu from "../DSmainmenu";

const DataMonitoringServices: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-teal-500 text-white py-24 px-4 text-center rounded-b-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Data Monitoring Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Maintain data accuracy and reliability with Nimble Auity. Monitor your data, identify inconsistencies, and receive actionable insights at $6/hour.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block bg-white text-green-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Get Started
        </a>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Data Monitoring Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Data Accuracy Monitoring Services",
              desc: "Assess hundreds of metadata attributes, ensure completeness, uniqueness, and receive alerts for anomalies.",
            },
            {
              title: "Data Quality Visualization Services",
              desc: "Visualize data quality fluctuations over time and evaluate the impact of business rules effectively.",
            },
            {
              title: "Data Monitoring Reports",
              desc: "Create actionable reports, monitor key data rules, and gain transparency into your data management practices.",
            },
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
              <h3 className="font-semibold mb-2 text-teal-600">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-gray-50 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Other Services You Can Benefit From</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {["Data Processing Services", "Data Entry Services", "Data Conversion Services", "Data Analytics Services"].map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
              <p className="text-gray-800 font-medium">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Nimble Data Monitoring Services?</h2>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 list-disc list-inside text-gray-800">
          {[
            "Affordable and cost-effective pricing options",
            "ISO-certified, high-quality services",
            "Complete data security and privacy",
            "Short turnaround times for urgent tasks",
            "State-of-the-art infrastructure and skilled team",
            "Advanced tools and technologies for monitoring",
            "Structured and proven delivery process",
            "26+ years of global experience",
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
            <h3 className="font-semibold mb-2">UK-based Resources Management Company</h3>
            <p>Processed 80,000+ invoices monthly accurately for CRM capture using Nimble Auity’s automated data monitoring solutions.</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="font-semibold mb-2">Leading Online Platform Creator</h3>
            <p>Provided accurate and reliable data entry services, cleaning and optimizing the client’s CRM with precision and quick turnaround.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Client Testimonials</h2>
        <blockquote className="bg-white p-8 rounded-xl shadow-lg text-gray-700 italic">
          “They were able to learn our procedures quicker than I ever thought possible.”
          <cite className="block mt-4 font-semibold not-italic">General Partner, Manufacturing Company, US</cite>
        </blockquote>
      </section>

      {/* Contact CTA */}
      <section className="text-center py-16">
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-green-600 to-teal-500 text-white font-semibold px-12 py-4 rounded-full shadow-lg hover:opacity-90 transition duration-300"
        >
          Contact Nimble Auity
        </a>
      </section>
    </div>
  );
};

export default DataMonitoringServices;
