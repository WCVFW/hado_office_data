import React from "react";
import { Headphones, Monitor, CheckCircle, Activity, FileText, Users } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const CallQualityMonitoring: React.FC = () => {
  const services = [
    {
      title: "Call Center Quality Management",
      description:
        "Incorporate VoC-to-CTQ mapping into call review cycles to improve customer retention and integrate standardized training interventions based on ongoing analytics.",
      icon: <Monitor size={32} className="text-blue-600" />,
    },
    {
      title: "Performance Monitoring",
      description:
        "Detect underlying call center problems early and resolve them to consistently deliver exceptional service and avoid user experience issues.",
      icon: <Activity size={32} className="text-blue-600" />,
    },
    {
      title: "Call Center Quality Monitoring Scorecard",
      description:
        "Provide agents clear guidance with scorecards to address causes of negative feedback and improve service quality.",
      icon: <CheckCircle size={32} className="text-blue-600" />,
    },
    {
      title: "Call Center Email Quality Monitoring",
      description:
        "Assess email exchanges using standardized review templates and statistical sampling to enhance response time and correctness.",
      icon: <FileText size={32} className="text-blue-600" />,
    },
    {
      title: "Inbound & Outbound Call Monitoring",
      description:
        "Monitor all inbound and outbound calls, ensure compliance, provide feedback, and facilitate agent development.",
      icon: <Headphones size={32} className="text-blue-600" />,
    },
    {
      title: "Service & Process Audits",
      description:
        "Periodically assess workflows and processes, identify gaps, and ensure optimal call center performance.",
      icon: <Users size={32} className="text-blue-600" />,
    },
  ];

  const benefits = [
    "Professional Call Center Monitoring Agents",
    "Advanced Capabilities: scorecards, call listening, automatic scoring",
    "26+ Years of Diverse Experience",
    "24/7 Support",
    "Sophisticated Technology & Infrastructure",
    "Assured Client Satisfaction",
  ];

  const softwareUsed = [
    "HubSpot", "Bitrix24", "Talkdesk", "Five9", "Zendesk", "Dixa", "Salesforce", "LiveAgent", "Avaya",
  ];

  return (
    <div className="px-4 md:px-8 lg:px-16 py-8 md:py-12 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-blue-50 p-6 md:p-12 rounded-xl text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-900">
          Nimble Call Quality Monitoring Support
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
          Maximize call center performance by leveraging VoC-to-CTQ aligned frameworks. Gain comprehensive insights into agent-customer interactions and improve customer satisfaction.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 md:px-8 py-2 md:py-3 rounded-lg md:rounded-xl text-base md:text-lg shadow transition">
          Request a Free Consultation
        </button>
      </section>

      {/* Services Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 text-center">
          Our Call Quality Monitoring Support Services
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

      {/* Benefits Section */}
      <section className="mb-12 bg-blue-50 p-6 md:p-10 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 text-center">
          Why Choose Nimble Acuity?
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-center bg-white p-4 rounded-xl shadow hover:shadow-md transition text-sm md:text-base">
              <CheckCircle className="text-blue-600 mr-3" size={24} />
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      {/* Software Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 text-center">
          Call Center Software We Use
        </h2>
        <div className="flex flex-wrap justify-center gap-4 text-gray-700 text-sm md:text-base">
          {softwareUsed.map((soft, idx) => (
            <span key={idx} className="bg-white p-2 md:p-3 rounded-lg shadow">{soft}</span>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto text-base md:text-lg">
          Partner with <span className="font-semibold text-blue-600">Nimble Acuity</span> to gain actionable insights, improve call center performance, and enhance customer experience across all channels.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 md:px-8 py-2 md:py-3 rounded-lg md:rounded-xl text-base md:text-lg shadow transition">
          Get Your Free Quote
        </button>
      </section>
    </div>
  );
};

export default CallQualityMonitoring;
