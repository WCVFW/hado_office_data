import React from "react";
import { Database, Clock, Users } from "lucide-react";

const VirtualAssistantDataEntry: React.FC = () => {
  const benefits = [
    "Reduce operational costs",
    "Manage your time better",
    "Achieve a work-life balance",
  ];

  const software = ["HubSpot", "Bitrix24", "Talkdesk", "Five9", "Zendesk", "Dixa", "Salesforce", "LiveAgent", "Avaya"];

  const keyPoints = [
    "Access LSS-trained virtual assistants with a track record of achieving documented performance baselines",
    "Track and reduce error rates using standardized protocols, while maintaining consistent turnaround times",
    "Experience cost-efficiency by delegating internal Non-Value Added (NVA) tasks",
    "Avoids internal onboarding and training overhead by leveraging stabilized offshore delivery",
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hire a Virtual Assistant for Data Entry Tasks
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Doing non-strategic tasks in-house, like data entry, consumes a lot of time. Nimble Auity's certified virtual assistants handle online and offline data entry efficiently under DMAIC-governed workflows.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-8">Hiring a Virtual Assistant Can Help You</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-700">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 flex items-start">
              <Clock className="w-8 h-8 text-indigo-600 mr-4 mt-1" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Efficiency Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Virtual Assistant Is Efficient</h2>
          <p className="text-lg sm:text-xl">
            Whether you are an entrepreneur, small business owner, or non-profit agency, Nimble Auity assigns a qualified virtual assistant to manage all types of data entry tasks, maintain databases, and store data in the format you desire.
          </p>
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

      {/* Key Points Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Benefits of Hiring Our Virtual Assistant</h2>
        <ul className="space-y-4 text-lg text-gray-700 max-w-3xl mx-auto text-left">
          {keyPoints.map((point, idx) => (
            <li key={idx}>✅ {point}</li>
          ))}
        </ul>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Hire a Virtual Assistant Today</h2>
        <p className="text-gray-600 mb-8">
          Contact Nimble Auity to hire a dedicated virtual assistant for all your data entry requirements. Streamline your processes and focus on high-value business priorities.
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

export default VirtualAssistantDataEntry;
