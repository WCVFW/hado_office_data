import React from "react";
import { Database, CheckCircle, CreditCard, Clock, Users } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const DataEntryVA: React.FC = () => {
  const benefits = [
    "Reduce operational costs",
    "Manage your time better",
    "Achieve a work-life balance",
  ];

  const features = [
    "Qualified virtual assistant experienced in all types of data entry tasks.",
    "Manage information, maintain client/stakeholder databases, store data in desired formats.",
    "Online and offline data entry management for stable outcomes.",
  ];

  const callCenterSoftware = [
    "HubSpot",
    "Bitrix24",
    "Talkdesk",
    "Five9",
    "Zendesk",
    "Dixa",
    "Salesforce",
    "LiveAgent",
    "Avaya",
  ];

  const hiringBenefits = [
    "Access LSS-trained virtual assistants with documented performance baselines.",
    "Track and reduce error rates using standardized protocols while maintaining consistent turnaround times.",
    "Experience cost-efficiency by delegating internal Non-Value Added (NVA) tasks.",
    "Avoid internal onboarding and training overhead by leveraging stabilized offshore delivery.",
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
    <div className="max-w-7xl mx-auto px-6 py-12 text-gray-800">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
          Hire a Virtual Assistant for Data Entry Tasks
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl">
          Doing non-strategic tasks in-house, like data entry, often consumes a lot of time. 
          Hiring a <span className="font-semibold text-blue-600">Nimble Acuity</span> virtual assistant is the perfect solution.
        </p>
      </header>

      {/* Benefits Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Benefits of Hiring a Virtual Assistant</h2>
        <ul className="grid md:grid-cols-3 gap-6 text-gray-700">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <CheckCircle className="text-blue-600 mr-3" size={28} />
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      {/* Features Section */}
      <section className="mb-12 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Our Virtual Assistant Is Efficient</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3 max-w-3xl mx-auto">
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </section>

      {/* Call Center Software Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Call Center Software We Use</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {callCenterSoftware.map((software, idx) => (
            <span key={idx} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium shadow-sm">
              {software}
            </span>
          ))}
        </div>
      </section>

      {/* Hiring Benefits Section */}
      <section className="mb-12 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Hiring Our Virtual Assistant Has Several Benefits</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3 max-w-3xl mx-auto">
          {hiringBenefits.map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto text-lg">
          Engage <span className="font-semibold text-blue-600">Nimble</span> virtual assistants to manage your online and offline data entry requirements efficiently. Reallocate internal bandwidth to high-value business initiatives today.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl text-lg transition shadow-lg">
          Contact Us
        </button>
      </section>
    </div>
    </div>
  );
};

export default DataEntryVA;
