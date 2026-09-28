import React from "react";
import { Mail, MessageCircle, FileText, Users, Calendar } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const CorrespondenceVA: React.FC = () => {
  const tasks = [
    { icon: <Mail className="w-10 h-10 text-white" />, title: "Composing & replying emails" },
    { icon: <MessageCircle className="w-10 h-10 text-white" />, title: "Responding to voicemails" },
    { icon: <FileText className="w-10 h-10 text-white" />, title: "Creating & circulating newsletters" },
  ];

  const benefits = [
    "Structured DMAIC lifecycle ensures strategic fit",
    "Save time & costs compared to hiring full-time staff",
    "Experienced assistants for diverse business needs",
    "Access to additional administrative outsourcing services",
  ];

  const software = [
    "HubSpot", "Bitrix24", "Talkdesk", "Five9", "Zendesk", "Dixa", "Salesforce", "LiveAgent", "Avaya"
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <CCmainmenu/>
      <div className="relative h-96 bg-gradient-to-r from-indigo-600 to-indigo-400 flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hire a Virtual Assistant to Manage Your Correspondences</h1>
          <p className="text-lg md:text-xl">
            Let our Lean-trained virtual assistants handle all your business communications efficiently while you focus on core activities.
          </p>
        </div>
      </div>

      {/* Tasks Section */}
      <div className="px-6 md:px-20 py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Virtual Assistant Can Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tasks.map((task, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white p-6 rounded-3xl shadow-lg hover:scale-105 transform transition duration-300 flex flex-col items-center justify-center text-center"
            >
              <div className="mb-4">{task.icon}</div>
              <h3 className="text-xl font-semibold">{task.title}</h3>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white p-10 rounded-3xl shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Why Hire Our Virtual Assistant?</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-lg">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center space-x-2">
                <span className="text-indigo-600 font-bold">•</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Software Section */}
        <div className="bg-gray-50 p-10 rounded-3xl shadow-lg mb-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Call Center Software We Use</h2>
          <div className="flex flex-wrap justify-center gap-4 text-indigo-700 font-semibold">
            {software.map((sw, idx) => (
              <span key={idx} className="bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition duration-300">{sw}</span>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-indigo-600 to-indigo-400 text-white py-16 px-6 rounded-3xl">
          <h2 className="text-4xl font-bold mb-4">Ready to Hire Your Virtual Assistant?</h2>
          <p className="mb-6 text-lg max-w-2xl mx-auto">
            Delegate your correspondence management and administrative tasks to a trained VA, and regain your time for strategic work.
          </p>
          <a
            href="/contact"
            className="bg-white text-indigo-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default CorrespondenceVA;
