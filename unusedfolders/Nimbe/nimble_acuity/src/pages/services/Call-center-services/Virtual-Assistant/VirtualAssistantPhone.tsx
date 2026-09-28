import React from "react";
import { PhoneCall, Calendar, FileText, Users, BarChart2 } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const VirtualAssistantPhone: React.FC = () => {
  const services = [
    { title: "Message Taking Services", desc: "Precise documentation and real-time communication.", icon: FileText },
    { title: "Call Routing Services", desc: "Intelligent call routing algorithms and optimized response times.", icon: PhoneCall },
    { title: "Appointment Scheduling Services", desc: "Advanced calendaring systems to minimize conflicts.", icon: Calendar },
    { title: "Virtual Receptionist Services", desc: "Professional call handling protocols to streamline client engagement.", icon: Users },
    { title: "Inbound Services", desc: "Comprehensive call management with support ticketing systems.", icon: PhoneCall },
    { title: "Outbound Services", desc: "Predictive dialing technology for targeted outreach.", icon: PhoneCall },
    { title: "Technical Support Services", desc: "Remote diagnostic tools providing expert assistance.", icon: BarChart2 },
    { title: "Order Taking Services", desc: "Real-time order processing systems to streamline purchasing.", icon: FileText },
  ];

  const software = ["RingCentral", "Moneypenny", "Ruby Receptionists", "Abby Connect", "Smith.ai", "AnswerConnect", "AnswerForce", "Specialty Answering Service", "Davinci Virtual", "VoiceNation"];

  const approachSteps = [
    "Initial Consultation and Needs Assessment",
    "Customized Service Plan Development",
    "System Integration and Setup",
    "Training and Onboarding",
    "Service Deployment and Monitoring",
    "Feedback and Continuous Improvement",
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Virtual Assistant Phone Answering Services
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Transform your external communications with 24/7 customer support, nurture leads anytime, and improve customer satisfaction.
        </p>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Virtual Assistant Call Answering Services We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
                <Icon className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Approach Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Streamlined Approach to Professional Virtual Assistant Call Answering</h2>
          <ol className="list-decimal list-inside space-y-4 text-lg text-white">
            {approachSteps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* Software Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Software Our Experts Leverage</h2>
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
        <h2 className="text-3xl font-semibold mb-6">Benefits of Our Virtual Assistant Phone Answering Services</h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✅ Easy Integration with your existing systems and CMS</li>
          <li>✅ Multi-language support for a global audience</li>
          <li>✅ Specialized industry knowledge for informed call center operations</li>
          <li>✅ Unfiltered reporting with detailed call and behavior analytics</li>
          <li>✅ Flexible, scalable solutions with real-time dashboards</li>
          <li>✅ Privacy and security enhancements with GDPR compliance</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Streamline Your Communication Today</h2>
        <p className="text-gray-600 mb-8">
          Hire our virtual assistant phone answering services to reduce NVA handoffs, improve lead nurturing, and ensure 24/7 seamless communication.
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

export default VirtualAssistantPhone;
