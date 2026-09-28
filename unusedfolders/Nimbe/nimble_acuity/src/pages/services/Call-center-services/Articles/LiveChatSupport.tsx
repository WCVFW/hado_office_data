import React from "react";
import CCmainmenu from "../CCmainmenu";

const LiveChatSupport: React.FC = () => {
  const benefits = [
    {
      title: "No Longer Waiting and Frustrating Consumers",
      description:
        "Traditional phone support often results in long queues and frustrated customers. Live chat helps eCom businesses respond quickly, reducing customer stress and improving satisfaction.",
    },
    {
      title: "24/7 Availability",
      description:
        "Live chat allows businesses to support customers globally, regardless of location or time zone, as long as they have an internet connection.",
    },
    {
      title: "Driving eCommerce Sales and Conversions",
      description:
        "Live chat enables monitoring of visitor behavior and provides instant support during purchases. It increases conversions by guiding customers in real-time.",
    },
    {
      title: "Support to Multiple Customers at a Single Time",
      description:
        "One agent can handle multiple customers simultaneously via live chat, reducing response times and improving efficiency compared to phone support.",
    },
    {
      title: "Easy to Find Chat Window",
      description:
        "Unlike hidden contact forms, live chat windows or chat bubbles are visible on every page, increasing the likelihood of interaction.",
    },
    {
      title: "Chat Greetings",
      description:
        "Automated greetings act like a store assistant welcoming customers. Personalized greetings help address customer needs and improve chances of conversion.",
    },
    {
      title: "Less Cost and More Gain",
      description:
        "Live chat reduces customer service costs by handling more queries with the existing team. Agents can handle multiple conversations simultaneously without extra equipment.",
    },
    {
      title: "No Need for Multilingual Agents",
      description:
        "Live chat tools and online translation integrations allow agents to respond efficiently in multiple languages without hiring additional staff.",
    },
    {
      title: "Enhances the Efficiency of Marketing Efforts",
      description:
        "Live chat engages visitors instantly and can support promotions, discounts, and personalized messages, improving lead conversion and marketing ROI.",
    },
    {
      title: "Enhances Your Business Reliability",
      description:
        "Instant access to human support increases customer satisfaction and trust, making your eCom business appear more reliable and professional.",
    },
  ];

  return (
    <div><CCmainmenu/>
    <section className="py-16 px-4 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            10 Reasons Why All eCom Sites Should Have Live Chat Support
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Learn the key benefits of live chat support for your eCommerce website and how it can enhance customer experience, boost sales, and improve business reliability.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                {benefit.title}
              </h2>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Live Chat Support Services by Nimble Auity
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            Nimble Auity has been a pioneer in providing high-quality eCommerce live chat support services and other call center solutions globally. Our skilled experts use the latest tools and technologies to deliver exceptional support to clients worldwide.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
    </div>
  );
};

export default LiveChatSupport;
