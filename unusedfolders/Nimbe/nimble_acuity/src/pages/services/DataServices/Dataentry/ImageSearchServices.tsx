import React from "react";
import DSmainmenu from "../DSmainmenu";

const ImageSearchServices: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Nimble Image Search Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Choose our search services and ensure your business receives the right
          photo search results to power your business. Prices start at{" "}
          <span className="font-semibold">$6 per hour</span>.
        </p>
      </section>

      {/* Intro */}
      <section className="mb-12 text-gray-700 space-y-4">
        <p>
          Struggling to find the right images for your business needs? Nimble Acuity
          (Nimble Acuity) provides professional image search services for advertising, marketing,
          branding, academic, scientific, or medical purposes. Our expert team
          ensures you receive accurate, high-quality images using the latest tools
          and workflows.
        </p>
        <p>
          We also help maintain image inventories, create catalogs, and provide reference
          materials, all at cost-effective rates.
        </p>
      </section>

      {/* Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Our Image Search Services
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Image Searching Services:</strong> We use targeted and
            customized keywords along with advanced search tools and filters to
            locate any number of images based on your exact requirements.
          </li>
          <li>
            <strong>Reverse Image Search Services:</strong> Perform reverse
            searches to locate identical or similar images using advanced search
            criteria for any number of images provided by the client.
          </li>
          <li>
            <strong>Additional Services:</strong> Image keying and indexing,
            image conversion, image data processing, and other value-added tasks.
          </li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Why Nimble Image Search Services to Nimble Acuity?
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>Flexible and customized pricing to suit any budget</li>
          <li>Compliance with international quality standards</li>
          <li>Quick turnaround time to meet deadlines</li>
          <li>ISO/IEC 27001:2022 certified for data security and confidentiality</li>
          <li>ISO 9001:2015 certification ensuring international service quality</li>
          <li>Use of latest tools, workflows, and technologies</li>
          <li>Experienced and dedicated team delivering cost-effective solutions</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Client Success Stories
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>US-based Online Store:</strong> Delivered efficient and high-quality
            online data entry services within a quick turnaround time.
          </li>
          <li>
            <strong>Florida-based Legal Client:</strong> Provided effective data
            extraction services at affordable prices with consistent quality.
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Nimble Image Search Services to Nimble Acuity
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Partner with Nimble Acuity to get professional image search services, backed by the latest
          tools, technologies, and workflows. Receive accurate, high-quality images
          tailored to your business needs.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default ImageSearchServices;
