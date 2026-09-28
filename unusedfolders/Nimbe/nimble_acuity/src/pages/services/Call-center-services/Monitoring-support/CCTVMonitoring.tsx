import React from "react";
import { Video, Shield, AlertCircle, Smartphone, Cloud, Clock } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const CCTVMonitoring: React.FC = () => {
  const services = [
    {
      title: "Motion Detection Monitoring",
      description:
        "Real-time motion recognition using AI, intelligent filtering to reduce false positives, and automated notifications for unauthorized activities.",
      icon: <AlertCircle size={32} className="text-blue-600" />,
    },
    {
      title: "Incident Response",
      description:
        "Real-time event-based monitoring for incident escalation, snapshot alerts to coordinate with local law enforcement, and granular logs for compliance.",
      icon: <Shield size={32} className="text-blue-600" />,
    },
    {
      title: "Continual Perimeter Coverage",
      description:
        "High-definition surveillance for perimeter zones, CCTV alarm monitoring for infrared/thermal cameras, and PTZ video surveillance to eliminate blind spots.",
      icon: <Video size={32} className="text-blue-600" />,
    },
    {
      title: "Access Control Monitoring",
      description:
        "Live CCTV surveillance of entry/exit logs, unauthorized access alarms, real-time monitoring with RFID/biometric integration.",
      icon: <Smartphone size={32} className="text-blue-600" />,
    },
    {
      title: "Intrusion Detection with Instant Alerts",
      description:
        "AI-based intrusion pattern recognition technology with instant SMS/email/mobile alerts and multi-layered intrusion detection systems.",
      icon: <AlertCircle size={32} className="text-blue-600" />,
    },
    {
      title: "Fire Alarm Monitoring",
      description:
        "24/7 fire alarm signal monitoring with smoke/heat detector integration and instant fire service notification/documentation.",
      icon: <Clock size={32} className="text-blue-600" />,
    },
  ];

  const additionalServices = [
    "Remote Video Monitoring Services",
    "Audio Monitoring Services",
    "Text Monitoring Services",
    "Content Monitoring Support",
  ];

  const benefits = [
    "AI Analytics for Live Threat Detection",
    "24/7 Proactive Surveillance",
    "IoT Integration for Multi-platform Surveillance",
    "Cloud-based CCTV Monitoring Solutions",
    "Multi-channel Alert Systems",
    "Customized Reporting and Documentation",
  ];

  return (
    <div className="px-4 md:px-8 lg:px-16 py-8 md:py-12 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-blue-50 p-6 md:p-12 rounded-xl text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-900">
          Nimble CCTV Monitoring Services
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
          Get live cloud video surveillance to improve your security framework, eliminate false positives, and ensure compliance. Our AI-powered CCTV monitoring keeps your assets secure 24/7.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 md:px-8 py-2 md:py-3 rounded-lg md:rounded-xl text-base md:text-lg shadow transition">
          Get a Custom Quote
        </button>
      </section>

      {/* Services Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 text-center">
          Live CCTV Monitoring Solutions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-start p-4 md:p-6 bg-white rounded-xl shadow hover:shadow-md transition"
            >
              <div className="mb-3 sm:mb-0 sm:mr-4">{service.icon}</div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700 text-sm md:text-base">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="mb-12 bg-blue-50 p-6 md:p-10 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 text-center">
          Additional Services You Can Benefit From
        </h2>
        <ul className="list-disc list-inside text-gray-700 max-w-2xl mx-auto space-y-2 text-sm md:text-base">
          {additionalServices.map((service, idx) => (
            <li key={idx}>{service}</li>
          ))}
        </ul>
      </section>

      {/* Benefits Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 text-center">
          Why Choose Nimble for CCTV Monitoring?
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          {benefits.map((benefit, idx) => (
            <li
              key={idx}
              className="flex items-center bg-white p-4 rounded-xl shadow hover:shadow-md transition text-sm md:text-base"
            >
              <Shield className="text-blue-600 mr-3" size={24} />
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto text-base md:text-lg">
          Turn your surveillance systems into a strategic ally with <span className="font-semibold text-blue-600">Nimble</span>. Ensure real-time threat detection, proactive monitoring, and compliance-ready reporting for complete peace of mind.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 md:px-8 py-2 md:py-3 rounded-lg md:rounded-xl text-base md:text-lg shadow transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default CCTVMonitoring;
