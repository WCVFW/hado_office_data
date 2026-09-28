import React from "react";
import DSmainmenu from "../DSmainmenu";

const RealEstateDataManagement: React.FC = () => {
  const services = [
    {
      title: "Data Mapping Services",
      description:
        "We provide clients with accurate and error-free real estate data mapping services using the latest tools and technologies.",
    },
    {
      title: "Data Normalization Services",
      description:
        "Our skilled team ensures your real estate data is normalized efficiently to meet all client requirements.",
    },
    {
      title: "Data Validation Services",
      description:
        "We validate all real estate data using advanced tools to ensure accuracy and consistency, meeting tight deadlines.",
    },
  ];

  const additionalServices = [
    "Big Data Analytics Services",
    "Data Entry Services",
    "Data Conversion Services",
    "Data Processing Services",
  ];

  const advantages = [
    "Affordable Pricing Options",
    "Information Security (ISO/IEC 27001:2022 Certified)",
    "Error-free Services",
    "World-class Infrastructure",
    "Experienced Team",
    "Dedicated Manager",
    "Highly Scalable Services",
    "Round the Clock Support",
    "Short Turnaround Times",
  ];

  const successStories = [
    {
      title: "Data Entry Services to a Leading Irish Sports Analytics Firm",
      description:
        "An Irish sports analytics company was looking for a reliable data entry service provider. Our team delivered the best quality services within a quick time.",
    },
    {
      title: "Data Entry for an Analytics and Optimization Company",
      description:
        "A leading analytics firm needed reliable data entry services. We provided efficient solutions and delivered high-quality results quickly.",
    },
  ];

  const testimonials = [
    {
      quote:
        "We are most pleased and satisfied with our team at Nimble Acuity. They have proven that a small business such as ours can take advantage of the great benefits of outsourcing.",
      author: "Project Manager, US Insurance Company",
    },
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Real Estate Data Management Services
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Create a comprehensive document center and share the data and documents related to real estate projects, assets, and investments starting at just $6 an hour.
        </p>
        <p className="text-gray-600">
          Our skilled experts leverage the latest tools and technologies to deliver top-notch real estate data management services tailored to your business needs.
        </p>
      </section>

      {/* Core Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Real Estate Data Management Services We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-6 shadow hover:shadow-lg transition bg-white hover:scale-105"
            >
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="mb-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Other Services You Can Benefit From
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {additionalServices.map((service, idx) => (
            <span
              key={idx}
              className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-medium hover:bg-blue-100 transition"
            >
              {service}
            </span>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Why Choose Nimble Acuity for Real Estate Data Management Services?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {advantages.map((adv, idx) => (
            <div
              key={idx}
              className="border-l-4 border-blue-600 pl-4 py-3 bg-gray-50 rounded hover:bg-gray-100 transition"
            >
              {adv}
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {successStories.map((story, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-6 shadow hover:shadow-lg transition bg-white"
            >
              <h3 className="text-xl font-bold mb-2">{story.title}</h3>
              <p className="text-gray-700">{story.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Customer Testimonials
        </h2>
        {testimonials.map((t, idx) => (
          <blockquote
            key={idx}
            className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-4 bg-gray-50 p-4 rounded shadow"
          >
            "{t.quote}"
            <span className="block mt-2 font-bold">{t.author}</span>
          </blockquote>
        ))}
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105">
          Get in Touch Today
        </button>
      </section>
    </div>
  );
};

export default RealEstateDataManagement;
