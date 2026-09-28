import React from "react";
import DSmainmenu from "../DSmainmenu";

const TranslingualDataEntry: React.FC = () => {
  const stats = [
    { value: "40%", label: "Cost Reduction" },
    { value: "8-24 Hrs", label: "Faster Turnaround" },
    { value: "500+", label: "Satisfied Clients" },
    { value: "350+", label: "Skilled Data Experts" },
    { value: "99%", label: "Accuracy" },
    { value: "21", label: "Years Experience" },
  ];

  const offerings = [
    {
      title: "Multilingual Data Entry Services",
      desc: "Our dedicated specialists handle multilingual data migration, database development, and both online and offline data entry with precision.",
    },
    {
      title: "Multilingual Data Mining Services",
      desc: "We gather valuable insights through web data mining in foreign languages or by translating websites, providing structured data like names, dates, and emails.",
    },
    {
      title: "Multilingual Data Processing Services",
      desc: "We process multilingual data from surveys, forms, transactions, and images with services like data cleansing, credit card processing, and order management.",
    },
    {
      title: "Multilingual Data Extraction Services",
      desc: "Our experts capture and compile data from foreign language sources, including PDFs and databases, ensuring completeness and usability.",
    },
  ];

  const benefits = [
    "Access to experienced and trained multilingual workforce",
    "Expertise across Spanish, French, German, Italian, Japanese, Korean, and more",
    "Superior quality assurance with multi-level checks and free trials",
    "100% data security with ISO 9001:2015 compliance",
    "On-time delivery to help you act quickly on results",
    "Huge cost savings compared to competitors",
    "Flexible solutions tailored to your unique requirements",
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Translingual Data Entry Services
        </h1>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto">
          Manage complex multilingual data effortlessly with Nimble Acuity’s
          translingual data entry services. With expertise across multiple
          global languages, we help you optimize processes, ensure accuracy, and
          minimize costs while you focus on your core business activities.
        </p>
      </section>

      {/* Offerings Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Multilingual / Translingual Data Entry Service Offerings
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {offerings.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border-l-4 border-blue-600 p-6 rounded shadow hover:bg-blue-50 transition"
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 text-center mb-16">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white border rounded-lg p-4 shadow hover:shadow-md transition"
          >
            <h3 className="text-2xl font-bold">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Why Nimble Translingual Data Entry to Nimble Acuity?
        </h2>
        <ul className="list-disc list-inside max-w-3xl mx-auto text-gray-700 space-y-2">
          {benefits.map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition transform hover:scale-105">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default TranslingualDataEntry;
