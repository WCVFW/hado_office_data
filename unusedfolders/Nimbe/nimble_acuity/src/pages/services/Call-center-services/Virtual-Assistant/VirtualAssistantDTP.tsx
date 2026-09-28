import React from "react";
import { Layout, Image, FileText, PenTool } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const VirtualAssistantDTP: React.FC = () => {
  const tasks = [
    "Create cover designs",
    "Graphics development",
    "Create brochures, point of sale displays and catalogs",
    "Create layout for books and newspapers",
    "DTP typesetting",
    "DTP photo editing",
  ];

  const software = [
    "HubSpot", "Bitrix24", "Talkdesk", "Five9", "Zendesk", "Dixa", "Salesforce", "LiveAgent", "Avaya"
  ];

  const benefits = [
    "Highly qualified assistant with DTP expertise",
    "Delegating tasks helps get work done instantly",
    "Proficient in Adobe, Microsoft, Macromedia, and Quark applications",
    "Monitored using VoC-aligned metrics to improve quality, speed, and compliance",
    "Reduce costs by avoiding employee taxes and insurance",
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hire a Virtual Assistant for Your Desktop Publishing Requirements
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Nimble Auity’s virtual assistants handle all your DTP tasks remotely, saving cost and time while ensuring high-quality outputs.
        </p>
      </section>

      {/* Tasks Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Virtual Assistant Can Perform the Following Tasks</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task, idx) => (
            <li key={idx} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 flex items-start">
              <PenTool className="w-8 h-8 text-indigo-600 mr-4 mt-1" />
              <span>{task}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Software Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Call Center Software We Use</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {software.map((app, idx) => (
            <span key={idx} className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
              {app}
            </span>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-6">Benefits of Hiring a Virtual Assistant</h2>
          <ul className="space-y-4 text-lg max-w-3xl mx-auto text-left">
            {benefits.map((benefit, idx) => (
              <li key={idx}>✅ {benefit}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Hire Your Virtual Assistant Today</h2>
        <p className="text-gray-600 mb-8">
          Contact Nimble Auity to hire a dedicated virtual assistant for all your desktop publishing requirements. Streamline your publishing tasks while focusing on your core business.
        </p>
        <a
          href="#contact"
          className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default VirtualAssistantDTP;
