import React from "react";
import DSmainmenu from "../DSmainmenu";

const benefits = [
  {
    title: "More Focus on Core Functionalities",
    content:
      "Business operations consist of core and non-core functionalities. Having your in-house team deal with the non-core processes may lead to higher operational costs. By outsourcing data entry services, you can have the non-core functions handled by a third-party service provider, allowing your in-house team to focus on core responsibilities.",
  },
  {
    title: "Access to Latest Technology",
    content:
      "Data entry nimble companies have state-of-the-art infrastructure and technologically advanced systems. By outsourcing services to such companies, you gain access to their advanced systems, saving additional costs on setup and maintenance while improving efficiency.",
  },
  {
    title: "Better Partnerships",
    content:
      "Nimble firms with experience offer customized services that scale according to your requirements. Partnering with an established organization creates sustainable collaborations that grow over time.",
  },
  {
    title: "Having Access to Unlimited Talent",
    content:
      "Selecting a nimble company gives you access to top industry talent. This ensures qualified professionals manage your data entry sector, which may not be possible with regular hires.",
  },
  {
    title: "Lower Costs of Operation",
    content:
      "Many companies outsource services to reduce operational costs. By smartly outsourcing data entry services to a reliable provider, you can get work done at lower costs while maintaining quality and meeting timelines.",
  },
];

const DataEntryServicesPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-24 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          How Can Your Firm Benefit from Outsourcing Data Entry Services?
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-8 drop-shadow-sm">
          Data is one of the most important assets a company can possess. Digitizing the data through document process automation and data entry can offer smooth access to information and enhance operational efficiencies. Nimble Auity provides expert data entry services to help you focus on your core business functions.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-green-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition shadow-md"
        >
          Get Started
        </a>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <h2 className="text-2xl font-semibold text-green-600 mb-3">
                {benefit.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">{benefit.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-16 bg-green-600 text-white rounded-xl py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nimble Auity: Your Trusted Data Entry Partner
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Nimble Auity is a leading provider of data entry services in India for over two decades. We cater to the data entry requirements of all scales across different industry verticals. Leverage the opportunities by outsourcing your data entry services and other data management requirements to Nimble Auity and improve your business ROI while saving costs.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-green-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default DataEntryServicesPage;
