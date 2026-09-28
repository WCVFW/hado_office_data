import React from "react";
import DSMainMenu from "../mainmenu";

const ContactCenterAnalytics: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Contact Center Analytics Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Nimble Acuity provides contact center analytics services to global
          enterprises to monitor and manage their call centers better. We help
          you optimize your contact centers and transform them into profit
          centers.
        </p>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto space-y-6">
        <p>
          At Nimble Acuity, we have helped our global list of clients to
          identify and overcome challenges with our smart and dynamic contact
          center analytics services. With predictive analytics and the right
          technology, we help you optimize customer interactions.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Contact Center Analytics Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Contact Center Data Collection",
              desc: "We mine and organize diverse types of data into sections to aid easy analysis.",
            },
            {
              title: "Data Pattern Recognition",
              desc: "We analyze large datasets, identify patterns, and suggest corrective actions.",
            },
            {
              title: "Reduce Average Handling Time (AHT)",
              desc: "We find ways to minimize handling time and make processes more efficient.",
            },
            {
              title: "Voice of Customer (VOC)",
              desc: "We leverage VOC insights to improve client experience and meet expectations.",
            },
            {
              title: "Voice Analytics",
              desc: "We analyze voice data from calls to help you understand clients better.",
            },
            {
              title: "Logistic Regression",
              desc: "We perform regression on cleansed data variables to generate insights.",
            },
            {
              title: "Client Intelligence",
              desc: "We analyze customer likes, dislikes, and behaviors to fine-tune services.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Why Choose Nimble Acuity's Analytics Services for Your Contact Center?
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            Analysts trained from top institutes, capable of handling complex
            analytics.
          </li>
          <li>
            Cost-effective services with flexible pricing models to suit your
            needs.
          </li>
          <li>
            Access to state-of-the-art infrastructure and latest technologies.
          </li>
          <li>
            Proven record of delivering services within quick turnaround times.
          </li>
          <li>
            ISO-certified processes ensuring error-free, high-quality results.
          </li>
          <li>
            Development of applications that enhance client experience
            management.
          </li>
          <li>
            End-to-end operations to manage costs, risks, and compliance.
          </li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Contact Center Analytics Services to Nimble Acuity
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          We specialize in high-quality contact center analytics services to
          help organizations save time and costs while extracting valuable
          insights from customer interactions. Partner with us for advanced
          analytics solutions including speech, IVR, and web analytics.
        </p>
        <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default ContactCenterAnalytics;
