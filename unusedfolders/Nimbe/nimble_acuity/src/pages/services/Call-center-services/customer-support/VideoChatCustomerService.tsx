import React from "react";
import CCmainmenu from "../CCmainmenu";

const VideoChatCustomerService: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-indigo-700 to-indigo-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Nimble Video Chat Customer Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Video chat is becoming a more efficient, CTQ-aligned (Critical to
          Quality) interaction mode that decreases NVA delays in support
          resolution, improving customer happiness. Nimble Auity provides
          cost-effective video chat solutions that enhance client relationships,
          improve revenues, and deliver measurable customer experience value.
        </p>
      </section>

      {/* Services We Offer */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Services We Offer
        </h2>
        <p className="text-center mb-10 text-lg">
          Structured into Lean Six Sigma–aligned workflows, our video chat
          support services deliver personalized, real-time assistance across
          industries.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            "Retail Video Chat Support",
            "Technical Video Chat Support",
            "Food & Beverage Support",
            "Real Estate Video Chat Services",
            "Insurance Video Chat Support",
            "Education Video Chat Services",
            "Web Design Support",
            "Software / IT / ITES Support",
            "E-commerce Video Chat Support",
            "Healthcare Support",
            "Broadcasting Support",
            "Technical App Support",
            "Online Printing & Publishing",
            "Financial Video Chat Support",
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-4 text-center hover:shadow-lg transition"
            >
              <p className="font-medium text-gray-700">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Scenarios Section */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">
          Scenarios to Leverage Video Chat Customer Support
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "Explaining Complex Technical Concepts",
              desc: "Technical video chat support helps clarify complex processes in telecom, engineering, and graphics industries with face-to-face clarity.",
            },
            {
              title: "Providing On-field Support in Remote Locations",
              desc: "Eliminate costly travel by enabling remote troubleshooting with Lean-led escalation logic and Poka-Yoke safeguards, cutting cycle times by 32.2%.",
            },
            {
              title: "Making Personalized Client Interactions",
              desc: "Offer a human touch in healthcare, helplines, and sensitive services where trust, empathy, and personal connection are vital.",
            },
          ].map((scenario, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-4">{scenario.title}</h3>
              <p className="text-gray-700">{scenario.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Benefits of Having Live Video Chat for Your Business
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Reduces Costs",
              desc: "Lower phone expenses and employee time. Reduce call center overhead while boosting efficiency.",
            },
            {
              title: "Provides Convenience",
              desc: "Real-time support with minimal wait times, enabling multitasking and improved CTQ delivery consistency.",
            },
            {
              title: "Increases Sales",
              desc: "45.28% retention improvement achieved via standardized handoff models. A seamless guided process boosts conversions.",
            },
            {
              title: "Stay Ahead in the Market",
              desc: "Few businesses provide video chat today—implement it to differentiate and build strong client reputation.",
            },
          ].map((benefit, i) => (
            <div
              key={i}
              className="bg-white shadow rounded-lg p-6 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 bg-indigo-50">
        <h2 className="text-3xl font-bold text-center mb-8">
          7 Reasons to Choose Nimble for Video Chat Customer Service
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            "Save up to 45% on overhead costs",
            "256-bit SSL encrypted connections",
            "Highly trained video chat representatives",
            "Customized client support services",
            "One-way video protocols with Poka-Yoke for privacy",
            "Build trust through human-face conversations",
            "Access to best-in-class infrastructure & tools",
          ].map((reason, i) => (
            <div
              key={i}
              className="bg-white shadow rounded-lg p-6 hover:shadow-md transition"
            >
              <p className="text-gray-700">{reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-gradient-to-r from-indigo-600 to-indigo-400 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Nimble Video Chat Customer Support
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Nimble Auity delivers high-quality, efficient, and cost-effective video
          chat customer support services worldwide. Save time, reduce costs, and
          grow your revenue with our trained video representatives.
        </p>
        <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default VideoChatCustomerService;
