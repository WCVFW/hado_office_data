import React from "react";
import { Calendar, Mail, Users, Clock } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const VirtualAssistantAppointments: React.FC = () => {
  const tasks = [
    "Schedule appointments",
    "Confirm appointments through business e-mails",
    "Send automated e-mail reminders",
    "Set up appointments recurring in nature",
    "Export your crucial appointments to your calendar",
    "Schedule meetings with customers",
    "Plan discussions with employees",
    "Arrange conventions with managers",
    "Specify time to check mails",
    "Program lunch meetings with overseas clients",
    "Organize out-of-town trips to meet prospective buyers",
    "Chart plans to participate in fairs / exhibitions",
    "Schedule time for yourself",
  ];

  const software = ["HubSpot", "Bitrix24", "Talkdesk", "Five9", "Zendesk", "Dixa", "Salesforce", "LiveAgent", "Avaya"];

  const benefits = [
    "Spend less time scheduling appointments",
    "Personal approach to dealing with clients - existing and prospective",
    "Gives your business a more professional outlook",
    "Trained professionals are at the helm of affairs",
    "Our virtual assistant is more cost-effective than a full-time employee",
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hire a Virtual Assistant for Appointment Setting
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Nimble Auity's Virtual Assistants diligently manage time and follow up on scheduled meetings using standardized workflows aligned to CTQ parameters.
        </p>
      </section>

      {/* Tasks Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Virtual Assistant Can Assist You With the Following Tasks</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {tasks.map((task, idx) => (
            <li key={idx} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 flex items-start">
              <Calendar className="w-8 h-8 text-indigo-600 mr-4 mt-1" />
              <span>{task}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Other Services Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-6">Other Services You Can Benefit From</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
            <div className="bg-indigo-700 p-6 rounded-2xl shadow hover:shadow-lg transition-all">
              <Users className="w-10 h-10 mb-2" />
              <h3 className="text-xl font-semibold mb-1">Virtual Assistant Services</h3>
            </div>
            <div className="bg-indigo-700 p-6 rounded-2xl shadow hover:shadow-lg transition-all">
              <Clock className="w-10 h-10 mb-2" />
              <h3 className="text-xl font-semibold mb-1">Outbound Call Center</h3>
            </div>
            <div className="bg-indigo-700 p-6 rounded-2xl shadow hover:shadow-lg transition-all">
              <Mail className="w-10 h-10 mb-2" />
              <h3 className="text-xl font-semibold mb-1">Telemarketing Services</h3>
            </div>
            <div className="bg-indigo-700 p-6 rounded-2xl shadow hover:shadow-lg transition-all">
              <Users className="w-10 h-10 mb-2" />
              <h3 className="text-xl font-semibold mb-1">Lead Generation Services</h3>
            </div>
          </div>
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
        <h2 className="text-3xl font-semibold mb-6">Benefits of Hiring Our Virtual Assistant</h2>
        <ul className="space-y-4 text-lg text-gray-700 max-w-3xl mx-auto text-left">
          {benefits.map((benefit, idx) => (
            <li key={idx}>✅ {benefit}</li>
          ))}
        </ul>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Hire a Virtual Assistant Today</h2>
        <p className="text-gray-600 mb-8">
          Contact Nimble Auity to hire a dedicated virtual assistant for all your appointment scheduling requirements. Get professional, accurate, and timely remote assistance.
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

export default VirtualAssistantAppointments;
