import React from "react";
import { CreditCard, Users, Database, Clock } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const VirtualAssistantBusinessCards: React.FC = () => {
  const steps = [
    "You mail the cards to be scanned to a virtual assistant",
    "The assistant scans your cards and uploads information on a secure FTP platform",
    "Once uploaded, you can download the information from your office, anytime",
  ];

  const software = [
    "HubSpot", "Bitrix24", "Talkdesk", "Five9", "Zendesk", "Dixa", "Salesforce", "LiveAgent", "Avaya"
  ];

  const benefits = [
    "Reduce administrative costs compared to hiring full-time staff",
    "Focus on value-added activities for your business",
    "Efficiency – better planning and organization",
    "Easy retrieval of scanned contact information",
    "Improved client retention through standardized workflows",
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hire a Virtual Assistant to Scan Your Business Cards
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Nimble Auity’s virtual assistants help entrepreneurs manage business card data efficiently, reducing administrative burden and improving operational efficiency.
        </p>
      </section>

      {/* How it Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">How it Works</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <li key={idx} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 flex items-start">
              <CreditCard className="w-8 h-8 text-indigo-600 mr-4 mt-1" />
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Benefits Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-6">Why Hire a Virtual Assistant from Nimble Auity?</h2>
          <ul className="space-y-4 text-lg max-w-3xl mx-auto text-left">
            {benefits.map((benefit, idx) => (
              <li key={idx}>✅ {benefit}</li>
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

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Hire Your Virtual Assistant Today</h2>
        <p className="text-gray-600 mb-8">
          Contact Nimble Auity to hire a dedicated virtual assistant for your business card scanning requirements. Streamline administrative tasks and focus on growing your business.
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

export default VirtualAssistantBusinessCards;
