import React from "react";
import DSMainMenu from "../mainmenu";

const VideoAnalyticsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Video Analytics Software Development Using Deep Learning
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Empower your business with intelligent video analytics solutions that
          detect attributes, events, behaviors, and patterns in real time.
          Enhance security, optimize operations, and make smarter decisions
          through the power of AI and deep learning.
        </p>
      </section>

      {/* Intro */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-600">
          Why Video Analytics?
        </h2>
        <p className="text-gray-700">
          Have increasing security threats worrying you too much? Video
          analytics makes your existing systems intelligent to support critical
          business decisions. With deep learning, the reliability and speed of
          analytics have reached the next level.
        </p>
      </section>

      {/* Services */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-blue-600 text-center">
          Nimble Acuity’s Video Analytics Services
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          We develop innovative solutions for detection, classification,
          segmentation, and analytics of video content using AI, ML, and NLP.
          Our services span across domains:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Security & Surveillance",
              features: [
                "Live video analysis",
                "Motion & intrusion detection",
                "License plate recognition",
              ],
            },
            {
              title: "Smart Homes",
              features: [
                "Intrusion alerts",
                "Facial recognition",
                "Asset management",
              ],
            },
            {
              title: "Retail",
              features: [
                "Footfall analysis",
                "Customer behavior tracking",
                "Queue management",
              ],
            },
            {
              title: "Autonomous Cars",
              features: [
                "Collision detection",
                "Traffic & lane recognition",
                "Smart AR windscreen",
              ],
            },
            {
              title: "Smart Cities",
              features: [
                "Traffic management",
                "Crowd analysis",
                "Accident prediction",
              ],
            },
            {
              title: "Media Companies",
              features: [
                "Video categorization",
                "Automated subtitling",
                "Social media analytics",
              ],
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white shadow rounded-2xl p-6 space-y-4 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-blue-600">
                {service.title}
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {service.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="bg-gray-50 p-8 rounded-2xl space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Industries We Cater To
        </h2>
        <div className="flex flex-wrap justify-center gap-4 text-gray-700 font-medium">
          {[
            "Infrastructure",
            "Retail",
            "Manufacturing",
            "Media & Entertainment",
            "Ecommerce",
            "Travel & Transportation",
            "Government & Law Enforcement",
          ].map((industry, idx) => (
            <span
              key={idx}
              className="bg-white px-4 py-2 rounded-full shadow-sm hover:shadow"
            >
              {industry}
            </span>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Our Development Process
        </h2>
        <div className="grid md:grid-cols-5 gap-6 text-center">
          {[
            "Need Analysis",
            "Software Development",
            "System Integration",
            "Software Testing",
            "Further Enhancements",
          ].map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center space-y-3 bg-white rounded-xl shadow-sm p-5"
            >
              <span className="text-3xl font-bold text-blue-600">
                {idx + 1}
              </span>
              <p className="text-gray-700 font-medium">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Why Choose Nimble Acuity?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>99.9% accuracy with deep learning</li>
            <li>No false alarms in surveillance</li>
            <li>Faster video analysis</li>
            <li>Better multimedia storage & management</li>
          </ul>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Cost-effective custom solutions</li>
            <li>ISO-certified quality assurance</li>
            <li>Guaranteed data privacy</li>
            <li>24/7 client support</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-blue-600 text-white rounded-2xl p-10 space-y-6">
        <h2 className="text-3xl font-bold">
          Nimble Video Analytics Software Development to Nimble Acuity
        </h2>
        <p className="text-lg max-w-2xl mx-auto">
          With over two decades of expertise and cutting-edge AI & deep learning
          technologies, Nimble Acuity delivers intelligent, reliable, and cost-effective
          video analytics solutions. Let your videos do the talking.
        </p>
        <button className="bg-white text-blue-600 font-medium px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
          Get in Touch
        </button>
      </section>
    </div>
  );
};

export default VideoAnalyticsPage;
