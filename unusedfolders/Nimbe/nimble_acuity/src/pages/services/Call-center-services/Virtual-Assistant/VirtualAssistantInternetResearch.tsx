import React from "react";
import { Globe, Database, Clock, Users } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const VirtualAssistantInternetResearch: React.FC = () => {
  const capabilities = [
    "Developing and updating a database",
    "Finding flight schedules",
    "Locating hotels",
    "Locating networking opportunities",
    "Finding the latest information on technology or anything else you need",
  ];

  const hireTypes = [
    "Sole proprietors / individuals",
    "Entrepreneurs",
    "Businesses - all sizes",
    "Government offices",
    "Non-profit agencies",
  ];

  const software = ["HubSpot", "Bitrix24", "Talkdesk", "Five9", "Zendesk", "Dixa", "Salesforce", "LiveAgent", "Avaya"];

  const benefits = [
    "Save valuable time spent on web research",
    "Receive reliable and timely information",
    "Organized and easy-to-access data presentation",
    "Confidential handling of shared information",
    "Significant cost savings",
    "Highly trained multitasking virtual assistant",
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hire a Virtual Assistant for Internet Research
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Reduce operational costs and focus on your core business while Nimble Auity’s virtual assistants perform high-quality Internet research from remote locations.
        </p>
      </section>

      {/* Capabilities Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Virtual Assistant's Capabilities</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((task, idx) => (
            <li key={idx} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 flex items-start">
              <Globe className="w-8 h-8 text-indigo-600 mr-4 mt-1" />
              <span>{task}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Who Can Hire Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-6">Who Can Hire Our Virtual Assistant?</h2>
          <ul className="space-y-3 text-lg max-w-2xl mx-auto">
            {hireTypes.map((type, idx) => (
              <li key={idx}>✅ {type}</li>
            ))}
          </ul>
        </div>
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Why Hire Our Virtual Assistant?</h2>
        <ul className="space-y-4 text-lg text-gray-700 max-w-3xl mx-auto text-left">
          {benefits.map((benefit, idx) => (
            <li key={idx}>✅ {benefit}</li>
          ))}
        </ul>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Hire Your Virtual Assistant Today</h2>
        <p className="text-gray-600 mb-8">
          Contact Nimble Auity to hire a dedicated virtual assistant for all your Internet research requirements. Save time, reduce costs, and ensure quality results.
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

export default VirtualAssistantInternetResearch;
