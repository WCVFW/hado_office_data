import React from "react";
import DSmainmenu from "../DSmainmenu";

const DataAppendingServices: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Data Appending Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Reach your target audience and enrich your business database with our data appending services at prices starting at just $6/hour.
        </p>
      </section>

      {/* Intro */}
      <section className="mb-12 text-gray-700 space-y-4">
        <p>
          Nimble Acuity is a leading provider of data appending services, delivering high-quality, customized solutions to enrich your business database and target audience. Our skilled team leverages advanced tools and technology to ensure accurate and efficient results.
        </p>
        <p>
          By outsourcing data appending services to us, you can focus on your core business while we handle your data enrichment needs.
        </p>
      </section>

      {/* Services Offered */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Our Data Appending Services
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li><strong>B2B Data Append Services:</strong> Enhance your business database using the latest appending tools for accurate B2B data.</li>
          <li><strong>Reverse Data Appending Services:</strong> Retrieve missing information and revamp your existing database efficiently.</li>
          <li><strong>Website URL Appending Services:</strong> Append URLs to your data to improve marketing and outreach strategies.</li>
          <li><strong>Events Data Appending Services:</strong> Enrich your events data for better audience targeting and engagement.</li>
        </ul>
      </section>

      {/* Additional Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Other Services You Can Benefit From
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>Data Conversion Services</li>
          <li>Big Data Analytics Services</li>
          <li>Data Entry Services</li>
          <li>Data Processing Services</li>
        </ul>
      </section>

      {/* Why Choose Nimble Acuity */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Why Choose Nimble Acuity for Data Appending Services?
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li><strong>Cost-effective Pricing:</strong> Affordable and flexible plans that fit your business needs and budget.</li>
          <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified, ensuring your data is secure and accessed only by authorized personnel.</li>
          <li><strong>Dedicated SPOC:</strong> A single point of contact to address all your queries efficiently.</li>
          <li><strong>Quick Turnaround:</strong> Multiple delivery centers across time zones for fast and timely service delivery.</li>
          <li><strong>Skilled Experts:</strong> Experienced team using the latest tools to provide accurate, error-free appending services.</li>
          <li><strong>State-of-the-art Infrastructure:</strong> Access to advanced software and world-class office spaces for superior performance.</li>
          <li><strong>Superior Quality Services:</strong> ISO-certified services with thorough quality checks before delivery.</li>
          <li><strong>24/7 Support:</strong> Customer support available round-the-clock via phone and email.</li>
          <li><strong>Scalable Services:</strong> Quickly ramp up or scale down resources based on project requirements.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Client Success Stories
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li><strong>Analytics and Optimization Services Provider:</strong> Delivered timely data entry services for a leading analytics firm.</li>
          <li><strong>Kansas-based Online Store:</strong> Provided fast and reliable online data entry services.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Nimble Data Appending Services to Nimble Acuity
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Partner with Nimble Acuity for cost-effective, accurate, and reliable data appending services. Let us enrich your database and help you reach your target audience efficiently.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default DataAppendingServices;
