import React from "react";
import { BarChart2, Headphones, Monitor, CheckCircle, Activity } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const CallQualityAnalytics: React.FC = () => {
  const services = [
    {
      title: "Call Quality Measurement Metrics",
      description:
        "Translate VoC-to-CTQ, define expectations, KPIs, quality roadmap, and create customer feedback collection processes for aligned call quality goals.",
      icon: <BarChart2 size={32} className="text-blue-600" />,
    },
    {
      title: "Call Analytics",
      description:
        "Leverage DMAIC-driven monitoring lifecycle, automated speech analytics, and human validation to analyze all inbound/outbound calls and optimize operations.",
      icon: <Monitor size={32} className="text-blue-600" />,
    },
    {
      title: "Agent Analysis",
      description:
        "Assess agent temperament, empathy, professionalism, adaptability, and effectiveness. Create coaching workflows, predictive behavior mapping, and skill gap analysis.",
      icon: <Headphones size={32} className="text-blue-600" />,
    },
    {
      title: "Call Center Quality Monitoring",
      description:
        "Analyze overall quality across teams, departments, and domains, identify gaps, define training programs, and improve customer interaction systematically.",
      icon: <CheckCircle size={32} className="text-blue-600" />,
    },
    {
      title: "Speech & Prescriptive Analytics",
      description:
        "Perform real-time speech analytics, understand sentiment/emotions, and implement BI-driven prescriptions to reduce costs, boost performance, and improve operations.",
      icon: <Activity size={32} className="text-blue-600" />,
    },
  ];

  const benefits = [
    "ISO Certified Analytics Services Provider",
    "100% Security & Confidentiality Guarantee",
    "International Quality & Modern Infrastructure",
    "Affordable, Scalable, and Timely Services",
    "Real-time Analytics Dashboard & Reporting",
    "Round-the-clock Customer Support",
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
          Nimble Call Quality Analytics Services
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
          Interpret every customer interaction and enrich your service levels with AI-powered analytics. Optimize operations, improve customer satisfaction, and gain actionable insights.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 md:px-8 py-2 md:py-3 rounded-lg md:rounded-xl text-base md:text-lg shadow transition">
          Contact Us Today
        </button>
      </section>

      {/* Services Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 text-center">
          Our Call Quality Analytics Services
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
          Why Choose Nimble for Call Quality Analytics?
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
          Streamline your call center operations, discover hidden insights, and continuously improve agent effectiveness with <span className="font-semibold text-blue-600">Nimble Acuity</span>.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 md:px-8 py-2 md:py-3 rounded-lg md:rounded-xl text-base md:text-lg shadow transition">
          Get Your Free Quote
        </button>
      </section>
    </div>
  );
};

export default CallQualityAnalytics;
