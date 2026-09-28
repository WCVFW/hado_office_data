import React from "react";
import { CheckCircle, ClipboardList, Users, CreditCard } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const SupplyManagementVA: React.FC = () => {
  const tasks = [
    { icon: <ClipboardList size={20} />, title: "Inventory control and management" },
    { icon: <CheckCircle size={20} />, title: "Management of supplies of stationery" },
    { icon: <Users size={20} />, title: "Vendor selection and management" },
    { icon: <CreditCard size={20} />, title: "Negotiating purchasing and procurement deals" },
    { icon: <CheckCircle size={20} />, title: "Supplier evaluation" },
    { icon: <Users size={20} />, title: "Relationship management" },
  ];

  const software = [
    "HubSpot", "Bitrix24", "Talkdesk", "Five9", "Zendesk",
    "Dixa", "Salesforce", "LiveAgent", "Avaya",
  ];

  const benefits = [
    "Increase efficiency and productivity of your operations",
    "Rely on a personal assistant for all your supply management needs",
    "Improve your competitive position",
    "Build customer and vendor satisfaction",
    "Coordinate with multiple tiers of trading partners",
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
    <div className="max-w-7xl mx-auto px-6 py-12 text-gray-800">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Virtual Assistants for Supply Management
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl">
          Businesses rely on robust, standardized supply management workflows. A dedicated virtual assistant from <span className="text-blue-600 font-semibold">Nimble Acuity</span> can help reduce administrative overhead while supporting mission-critical procurement and inventory functions.
        </p>
      </header>

      {/* Description Card */}
      <section className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl shadow-md mb-12">
        <p className="mb-3 text-gray-700">
          With a virtual assistant from <span className="font-semibold text-blue-600">Nimble Acuity</span>, you can track all functions related to supply management. Your assistant monitors supplier credit lines using structured verification checklists and Poka-Yoke methods to maintain data integrity.
        </p>
        <p className="text-gray-700">
          The assistant helps control costs, allocate resources efficiently, gather strategic information, and maintain stationery supplies in your office.
        </p>
      </section>

      {/* Tasks */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Tasks Our Virtual Assistant Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task, idx) => (
            <div
              key={idx}
              className="flex items-start p-5 border border-gray-200 rounded-xl hover:shadow-lg transition duration-300 bg-white"
            >
              <div className="text-blue-600 mr-4 mt-1">{task.icon}</div>
              <p className="text-gray-800 font-medium">{task.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Software */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Call Center Software We Use</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {software.map((item, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium shadow-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Benefits of Hiring A Virtual Assistant</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-300"
            >
              <p className="text-gray-800">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto text-lg">
          A virtual assistant from <span className="font-semibold text-blue-600">Nimble Acuity</span> brings expertise and experience in supply management, helping streamline your business efficiently.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl text-lg transition duration-300 shadow-lg">
          Contact Us to Hire a Virtual Assistant
        </button>
      </section>
    </div>
    </div>
  );
};

export default SupplyManagementVA;
