import React from "react";
import { Headphones, Radio, Mic, Clock, Shield, Users } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const AudioMonitoring: React.FC = () => {
  const services = [
    {
      title: "Call Center Audio Monitoring",
      description:
        "Monitor hundreds of customer or prospect calls daily for quality and training. Evaluate agent behavior, language, protocols, and performance using CVA-BVA-NVA anchored frameworks.",
      icon: <Headphones className="text-blue-600" size={32} />,
    },
    {
      title: "Webinar Audio Monitoring",
      description:
        "Guard against voice dropouts and signal mismatches during webinars. Monitor Q&A sessions, analyze content, and provide actionable strategies to improve engagement.",
      icon: <Mic className="text-blue-600" size={32} />,
    },
    {
      title: "Telecast Audio Monitoring",
      description:
        "Ensure synchronized AV transmission and minimal disturbances using Lean Six Sigma control procedures. Instantly alert stakeholders and correct audio issues.",
      icon: <Radio className="text-blue-600" size={32} />,
    },
    {
      title: "Radio Broadcast Audio Monitoring",
      description:
        "Continuously monitor radio broadcast channels for frequency changes, noise, or drop in quality. Immediate reporting ensures top-notch audio output.",
      icon: <Radio className="text-blue-600" size={32} />,
    },
  ];

  const processSteps = [
    "Synchronize remote audio monitoring station with your telecast or call center via secure encrypted connection.",
    "Listen to calls/broadcasts and evaluate quality based on client-defined parameters.",
    "Create quick reports with descriptions and audio/video evidence for client action.",
    "Use tools to rectify audio synchronization, background noise, disturbances, delays, etc.",
    "For call centers, provide detailed agent performance reports to clients.",
  ];

  const benefits = [
    "ISO Certified Audio Monitoring Services Provider",
    "360-degree Security and Confidentiality Guarantee",
    "High-quality, SLA-verified services",
    "Affordable remote monitoring reducing costs by up to 60%",
    "FTE Audio Monitoring Experts with 10+ years of experience",
    "High-end infrastructure with proprietary tools",
    "Scalable services for short-term or long-term projects",
    "Fastest Response Time with instant alerts",
    "Single Point of Contact (SPOC) for queries",
    "24/7 audio monitoring coverage across geographies",
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
    <div className="max-w-7xl mx-auto px-6 py-12 text-gray-800">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
          Nimble Audio Monitoring Services
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl">
          We provide fast, efficient, and economical remote audio monitoring services so you don’t have to hire full-time professionals. Ensure top-quality audio for calls, webinars, telecasts, radio, and more with Nimble.
        </p>
      </header>

      {/* Services Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Audio Monitoring Services We Offer</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="flex items-start p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <div className="mr-4">{service.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-12 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Our Audio Monitoring Process</h2>
        <ol className="list-decimal list-inside space-y-3 max-w-3xl mx-auto text-gray-700">
          {processSteps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Benefits Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Why Choose Nimble for Audio Monitoring?</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-center bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition">
              <Shield className="text-blue-600 mr-3" size={28} />
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto text-lg">
          Partner with <span className="font-semibold text-blue-600">Nimble</span> for 24/7, reliable, and cost-efficient audio monitoring. Get instant alerts, detailed reports, and top-quality service at economical rates.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl text-lg transition shadow-lg">
          Contact Us for a Free Quote
        </button>
      </section>
    </div>
    </div>
  );
};

export default AudioMonitoring;
