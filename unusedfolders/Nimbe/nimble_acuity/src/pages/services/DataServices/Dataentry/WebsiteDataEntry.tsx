import React from "react";
import DSmainmenu from "../DSmainmenu";

const WebsiteDataEntry: React.FC = () => {
  const stats = [
    { value: "40%", label: "Cost Reduction" },
    { value: "8-24 Hrs", label: "Faster Turnaround" },
    { value: "500+", label: "Satisfied Clients" },
    { value: "350+", label: "Skilled Data Experts" },
    { value: "99%", label: "Accuracy" },
    { value: "21", label: "Years Experience" },
  ];

  const solutions = [
    {
      title: "The Right Mix of People & Technology",
      desc: "Our trained professionals and cutting-edge tools process large volumes of data quickly, ensuring accuracy and eliminating errors.",
    },
    {
      title: "Top-Tier Project Management",
      desc: "Dedicated project managers set clear expectations, maintain open communication, and ensure timely delivery of your website updates.",
    },
    {
      title: "The Best Service Possible",
      desc: "Our rigorous Quality Control (QC) process ensures all work is error-free, with editors reviewing every entry for grammatical and contextual accuracy.",
    },
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Website Data Entry Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Your website is your brand’s showcase. Nimble Acuity’s Website Data
          Entry Services ensure that your website always lists the most updated
          information, keeping it reliable, engaging, and effective for your
          stakeholders.
        </p>
      </section>

      {/* Needs Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          Your Website Data Entry Needs
        </h2>
        <p className="text-gray-700 max-w-4xl mx-auto text-center">
          In today’s digital age, your website must be accurate and
          user-friendly. Nimble Acuity helps businesses worldwide manage, maintain, and
          update their websites, saving valuable time and operational costs
          while keeping you competitive.
        </p>
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

      {/* Solutions Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Nimble Acuity’s Solution
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((item, idx) => (
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

      {/* Commitment Section */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-4">
          An Outsourcing Partner Who Values You
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          At Nimble Acuity, we prioritize open communication, transparency, and customer
          satisfaction. We deliver creative, customized solutions that fit your
          unique website needs while offering the best service at competitive
          prices.
        </p>
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

export default WebsiteDataEntry;
