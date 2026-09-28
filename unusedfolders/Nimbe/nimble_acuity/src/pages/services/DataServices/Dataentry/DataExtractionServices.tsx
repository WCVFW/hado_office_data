import React from "react";
import DSmainmenu from "../DSmainmenu";

const DataExtractionServices: React.FC = () => {
  const tools = ["Apify", "Octoparse", "Scrapy", "ParseHub", "WebHarvy"];

  const industries = [
    "Retail and eCommerce",
    "Manufacturing",
    "Healthcare",
    "Finance and Banking",
    "Real Estate",
    "Market Research",
    "Academia and Research",
    "Hospitality and Travel",
    "Government and Public Sectors",
    "Real Estate and Property Management",
  ];

  const processSteps = [
    "Analyzing project-specific needs: Understanding the specific needs and objectives of the client's project.",
    "Identifying sources for data retrieval: Locating the right sources from which relevant data can be retrieved.",
    "Shortlisting Data-gathering Techniques: Employing state-of-the-art automated tools or manual methods to extract the required data.",
    "Sorting and refining the extracted data: Organizing the extracted information and removing any inaccuracies or redundancies.",
    "Ensuring safe delivery of data: Safely transmitting the cleaned, ready-to-use data to the client, ensuring complete data security.",
  ];

  const benefits = [
    "Quality and Security: Robust security measures and stringent quality protocols ensure your data is handled with utmost precision and protection.",
    "Decades of Data Extraction Expertise: Years of experience provide tailored solutions that drive value for your business.",
    "Multi-Time Zone Assistance: Global presence allows round-the-clock support and seamless service regardless of location.",
    "Competent Data Extraction Specialists: Skilled professionals trained in latest technologies deliver accurate and efficient services.",
    "Free Trials: Risk-free opportunity to assess our capabilities and understand how our services can benefit your business.",
  ];

  const additionalServices = [
    "Optical Character Recognition (OCR) Services",
    "Data Processing Services",
    "Data Support Services",
    "Data Entry Services",
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Data Extraction Services
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Transform your data handling capabilities with our end-to-end data extraction services. We deliver clean, structured, and accurate data, fast.
        </p>
        <p className="text-gray-600">
          Partner with us to leverage automation, advanced tools, and skilled professionals for extracting valuable insights from structured and unstructured data.
        </p>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Data Extraction Process</h2>
        <ol className="list-decimal pl-5 text-gray-700 space-y-3">
          {processSteps.map((step, idx) => (
            <li key={idx} className="bg-blue-50 p-4 rounded border-l-4 border-blue-600 hover:bg-blue-100 transition">
              {step}
            </li>
          ))}
        </ol>
      </section>

      {/* Tools Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Tools Powering Our Data Extraction Services</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {tools.map((tool, idx) => (
            <span key={idx} className="bg-blue-50 text-blue-700 px-4 py-2 rounded shadow hover:bg-blue-100 transition">
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Serving Industries Far and Wide</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
          {industries.map((industry, idx) => (
            <li key={idx} className="bg-blue-50 p-4 rounded border-l-4 border-blue-600 hover:bg-blue-100 transition">
              {industry}
            </li>
          ))}
        </ul>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Why Choose Our Data Extraction Services</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-3">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="bg-blue-50 p-4 rounded border-l-4 border-blue-600 hover:bg-blue-100 transition">
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      {/* Additional Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Additional Services You Can Benefit From</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-3">
          {additionalServices.map((service, idx) => (
            <li key={idx} className="bg-blue-50 p-4 rounded border-l-4 border-blue-600 hover:bg-blue-100 transition">
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105">
          Contact Us for Custom Data Extraction Services
        </button>
      </section>
    </div>
  );
};

export default DataExtractionServices;
