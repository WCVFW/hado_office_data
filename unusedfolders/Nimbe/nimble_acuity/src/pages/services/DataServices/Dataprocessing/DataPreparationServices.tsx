import React from "react";
import DSmainmenu from "../DSmainmenu";

const DataPreparationServices: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-500 text-white py-24 px-4 text-center rounded-b-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Data Preparation Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Produce superior quality information and fix errors quickly with Nimble Auity’s expert data preparation services.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block bg-white text-purple-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Get a Free Quote
        </a>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Data Preparation Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Data Cleaning Services",
              desc: "Identify and correct errors, remove duplicates, impute missing values, and standardize datasets for analysis.",
            },
            {
              title: "Feature Selection",
              desc: "Select relevant input features to build the most accurate predictive models for your data analysis.",
            },
            {
              title: "Data Transforms",
              desc: "Transform numeric and categorical variables using discretization, ordinal, or one-hot encoding methods.",
            },
            {
              title: "Feature Engineering",
              desc: "Create new input variables from existing data to add context, simplify complex variables, and improve insights.",
            },
            {
              title: "Dimensionality Reduction",
              desc: "Reduce high-dimensional data into low-dimensional representations using PCA or SVD for meaningful analysis.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              <h3 className="font-semibold mb-2 text-pink-600">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Data Preparation Process</h2>
        <ol className="space-y-6 text-gray-700 text-lg list-decimal list-inside">
          <li>Define Problem: Understand and define the data problem clearly and measurably.</li>
          <li>Data Collection: Collect data from first-party, second-party, and third-party sources.</li>
          <li>Decide on Approach: Choose algorithms and methods suitable for classification, clustering, regression, etc.</li>
          <li>Cleanse & Test Data: Remove errors, standardize formats, handle missing values, and test for consistency.</li>
          <li>Transform & Enrich Data: Standardize formats, enrich with additional information, and ensure consistency.</li>
          <li>Store Data: Save cleaned and structured data in business intelligence or cloud tools for analysis.</li>
        </ol>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Nimble Auity?</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Affordable pricing options",
            "ISO/IEC 27001:2022 certified for data security",
            "Expert professionals with 5+ years experience",
            "Time-saving solutions with fast turnaround",
            "Advanced data preparation tools",
            "Cloud-ready data preparation for scalability",
            "Guaranteed ROI and cost savings",
            "Enhanced competitiveness with faster insights",
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
            <p>Provided highly robust and cost-effective data extraction services for seamless operations.</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="font-semibold mb-2">US-based Online Store</h3>
            <p>Delivered extremely accurate and reliable online data entry solutions at cost-effective rates.</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center py-16">
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold px-12 py-4 rounded-full shadow-lg hover:opacity-90 transition duration-300"
        >
          Contact Nimble Auity
        </a>
      </section>
    </div>
  );
};

export default DataPreparationServices;
