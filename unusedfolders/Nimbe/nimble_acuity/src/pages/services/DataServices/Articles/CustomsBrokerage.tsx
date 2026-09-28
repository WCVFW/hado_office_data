import React from "react";
import DSmainmenu from "../DSmainmenu";

const points = [
  {
    number: "01",
    title: "Working With a Company New To The Industry",
    content:
      "Since customs brokers deal with procedures that differ across countries, there is a need for familiarity and strong relationships with government authorities. Companies with years of experience have established relationships that help resolve shipping issues efficiently.",
  },
  {
    number: "02",
    title: "Collaborating With a Service Provider That Solely Follows a Manual Process",
    content:
      "Digital tools make shipping processes smoother and less time-consuming. Collaborate with a provider that leverages technology for tracking goods and managing customs paperwork efficiently.",
  },
  {
    number: "03",
    title: "A Company With a Weak Means of Communication",
    content:
      "Communication is critical in international trade. Work with a company that offers multiple ways to reach them for timely updates and prompt responses.",
  },
  {
    number: "04",
    title: "A Company With No Local Presence",
    content:
      "Strong local presence ensures familiarity with local regulations, improving efficiency in clearing goods and resolving issues along the way.",
  },
  {
    number: "05",
    title: "A Service Provider That Keeps the Costs Hidden",
    content:
      "Transparency in pricing is critical. Avoid companies with hidden costs to prevent overcharging. Ensure you understand the pricing model and any potential changes.",
  },
];

const CustomsBrokerage: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 px-6 py-16">
      {/* Hero Section */}
      <DSmainmenu/>
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Top Things to Avoid While Hiring the Perfect Customs Brokerage Service Provider
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          International trade is complex and governed by global, regional, and local regulations. Choosing the right customs brokerage partner can save time, money, and stress. Avoid these common pitfalls.
        </p>
      </div>

      {/* Points Section */}
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2">
        {points.map((point) => (
          <div
            key={point.number}
            className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg md:text-xl">
              {point.number}
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">{point.title}</h2>
              <p className="text-gray-700 leading-relaxed">{point.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-blue-600 text-white py-16 px-6 rounded-xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Choose Nimble Auity as Your Customs Brokerage Service Partner
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          With over 15 years of experience, Nimble Auity ensures smooth goods movement, timely updates, and complete transparency. Focus on your business while we handle the complexities of international trade.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default CustomsBrokerage;
