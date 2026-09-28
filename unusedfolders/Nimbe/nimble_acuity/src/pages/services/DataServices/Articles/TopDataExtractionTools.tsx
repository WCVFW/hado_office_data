import React from "react";
import DSmainmenu from "../DSmainmenu";

const TopDataExtractionTools: React.FC = () => {
  const tools = [
    {
      name: "OutWitHub",
      desc: "Segregates web pages into elements and navigates from page to page to extract relevant data like links, emails, tables, and images. Extension available for Firefox and Chrome.",
    },
    {
      name: "Spinn3r",
      desc: "Indexes blogs worldwide in real-time, providing information from social media, forums, reviews, comments, and news monitoring.",
    },
    {
      name: "Fminer",
      desc: "Visual web extracting tool and macro recorder. Used for email, phone, image, and document extraction.",
    },
    {
      name: "ParseHub",
      desc: "Visual extraction tool suitable for anyone to extract images, emails, documents, web data, contact info, and pricing details.",
    },
    {
      name: "Octaparse",
      desc: "Powerful web extracting tool to grab open data from websites, including IP addresses, emails, phone numbers, and other web data.",
    },
    {
      name: "Table Capture",
      desc: "Chrome extension to capture data from HTML tables and export to Google Sheets, CSV, or Excel.",
    },
    {
      name: "Tabula",
      desc: "Desktop app for Mac, Windows, and Linux to convert PDF files into Excel or CSV for easy editing.",
    },
    {
      name: "Dexi.io",
      desc: "Browser-based tool to set up crawlers, fetch web data in real-time, export to Google Drive, CSV, or JSON, and extract data anonymously via proxies.",
    },
  ];

  const stats = [
    { value: "40%", label: "Cost Reduction" },
    { value: "8-24 Hrs", label: "Faster Turnaround" },
    { value: "500+", label: "Satisfied Clients" },
    { value: "350+", label: "Skilled Data Experts" },
    { value: "99%", label: "Accuracy" },
    { value: "21", label: "Years Experience" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 sm:p-10 space-y-12">
      {/* Header */}
      <DSmainmenu/>
      <header className="text-center space-y-4">
        <h1 className="text-5xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
          Top 10 Data Extraction Tools
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
          Struggling to extract valuable information from large datasets? Here are the top tools that can help businesses streamline data collection and analysis.
        </p>
      </header>

      {/* Tools Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Most Popular Data Extraction Tools
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">{tool.name}</h3>
              <p className="text-gray-700">{tool.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Advantages Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Advantages of Using Data Extraction Tools
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 max-w-4xl mx-auto">
          <li>Improves Accuracy by automating time-consuming manual tasks.</li>
          <li>Saves Time by quickly extracting large datasets.</li>
          <li>Increases Productivity by allowing employees to focus on value-added tasks.</li>
          <li>Improves Visibility with full records management and easy data monitoring.</li>
          <li>Saves Costs by reducing the need for additional staff.</li>
        </ul>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-indigo-50 to-pink-50 rounded-xl p-8 grid sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-bold text-indigo-600 mb-1">{stat.value}</h3>
            <p className="text-gray-700">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-50 p-8 sm:p-12 rounded-xl text-center space-y-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
          Choose Nimble Auity for Data Extraction
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Nimble Auity provides quick, reliable, and accurate data extraction services. With 26+ years of experience and advanced tools, we help businesses extract valuable insights efficiently.
        </p>
        <button className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-indigo-700 transition transform hover:-translate-y-1">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default TopDataExtractionTools;
