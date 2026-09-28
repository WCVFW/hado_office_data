import React from "react";
import DSmainmenu from "../DSmainmenu";

const BusinessCardDataEntry: React.FC = () => {
  const services = [
    "Updated and Organize Cards into the Client Database – Enter company details in a highly organized format using advanced tools.",
    "Card Format Conversion – Digitize and convert business card formats as per your requirements.",
    "Business Card Indexing – Arrange cards sequentially, alphabetically, by date, numerically, or by location.",
    "Business Card Maintenance – Update, organize, and maintain cards in your enterprise database.",
    "Hard Copy Business Card Conversion – Convert hard copies into digital formats for easy sharing.",
    "Business Card Information Updating – Update old or incorrect information with accurate, current details."
  ];

  const benefits = [
    "State-of-the-art Infrastructure – Latest tools and innovative technologies for complex data entry needs.",
    "Complete Data Security – All customer and business information remains confidential and secure.",
    "High-quality Services – Multiple levels of quality checks and data accuracy verification.",
    "Add and Validate Missing Data – Ensure completeness of business card information.",
    "Easy Accessibility – Archive and retrieve your business card information effortlessly.",
    "Flexible Pricing Structure – Affordable rates without compromising service quality."
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
          Nimble Business Card Data Entry Services
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Digitize your enterprise business cards quickly, accurately, and efficiently.
        </p>
        <p className="text-gray-600">
          Nimble Acuity offers unique solutions to manage, update, and organize your business card data for easy accessibility.
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Our Business Card Data Entry Services
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 list-disc pl-5 text-gray-700">
          {services.map((service, idx) => (
            <li key={idx} className="p-3 border-l-4 border-blue-600 bg-gray-50 rounded hover:bg-gray-100 transition">
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

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Why Choose Nimble Acuity for Business Card Data Entry
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="p-3 border-l-4 border-blue-600 bg-gray-50 rounded hover:bg-gray-100 transition">
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105">
          Contact Us for Business Card Data Entry Services
        </button>
      </section>
    </div>
  );
};

export default BusinessCardDataEntry;
