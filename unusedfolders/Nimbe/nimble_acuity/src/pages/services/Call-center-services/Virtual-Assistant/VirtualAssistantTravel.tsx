import React from "react";
import { Calendar, MapPin, Airplay, Hotel } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const VirtualAssistantTravel: React.FC = () => {
  const tasks = [
    "Travel budget planning",
    "Booking flights / trains / cars",
    "Rescheduling / canceling bookings",
    "Service apartment bookings",
    "Hotel reservations",
    "Planning and scheduling meetings at the desired destination",
    "Cruise booking",
    "Providing timely travel plan reminders",
    "Booking local tourist services",
    "Vacation planning",
  ];

  const software = [
    "HubSpot", "Bitrix24", "Talkdesk", "Five9", "Zendesk", "Dixa", "Salesforce", "LiveAgent", "Avaya"
  ];

  const benefits = [
    "Save costs with no overhead or recruitment expenses",
    "Immediate travel booking assistance",
    "Continued support throughout travel",
    "Flexible operations prioritizing CVA to eliminate inefficiencies",
    "Feedback mechanisms to address grievances promptly",
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
            <CCmainmenu/>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hire a Virtual Assistant for Your Travel Requirements
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Nimble Auity’s virtual assistants manage all your travel planning tasks remotely, reducing errors and saving time while ensuring seamless travel experiences.
        </p>
      </section>

      {/* Tasks Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Virtual Assistant Can Perform the Following Tasks</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task, idx) => (
            <li key={idx} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 flex items-start">
              <Airplay className="w-8 h-8 text-indigo-600 mr-4 mt-1" />
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

      {/* Who Can Hire Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Who Can Hire Our Virtual Assistant?</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Individuals, Entrepreneurs, Freelancers, Small Businesses, Non-Profit Organizations, and Medium/Large Enterprises can hire Nimble Auity’s virtual assistant to efficiently manage all travel-related tasks at a fraction of the cost of a full-time employee.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-6">Why Hire Our Virtual Assistant for Your Travel Needs?</h2>
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
          Contact Nimble Auity to hire a dedicated virtual assistant for all your travel planning requirements. Streamline your travel bookings and itineraries while focusing on your core business.
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

export default VirtualAssistantTravel;
