import React from "react";
import CCmainmenu from "../CCmainmenu";

const RinglessVoicemailBenefits: React.FC = () => {
  const benefits = [
    {
      title: "Target a Larger Audience",
      description:
        "Being automated, ringless voicemail messaging can be used to broadcast a message to a wide audience in no time. The software will dispatch the message to a list of customers without the need for any manual intervention by the agents. This gives the agents more time to respond to customers who respond to the message.",
    },
    {
      title: "Multiple Usability",
      description:
        "Ringless voicemail is one of the most effective tools to market businesses and boost their brand presence. It can be used by companies and industries for a variety of purposes including marketing, call centers, government institutions, educational institutions, sales companies, and more.",
    },
    {
      title: "Cost-effective Solution",
      description:
        "Ringless voicemail provides highly relevant leads at a cost-effective price. Customers don't have to pay anything, making it highly efficient and effective for businesses looking for high-quality leads at a nominal cost.",
    },
    {
      title: "Boosts Agent's Productivity",
      description:
        "Agents can interact with customers only when they respond to messages, allowing them to focus on core activities. This helps improve agent productivity and overall business efficiency.",
    },
    {
      title: "Great Customer Response",
      description:
        "Ringless voicemail doesn't disturb customers during busy schedules and allows them to hear messages at their convenience, enhancing response rates compared to cold calls.",
    },
    {
      title: "Perfect for a Marketing Pitch",
      description:
        "Voicemails can be designed and recorded to deliver maximum impact, helping your business generate quality leads and convert them into sales efficiently.",
    },
    {
      title: "Live Stats and Analytics",
      description:
        "Ringless voicemail provides live statistics and data for every campaign, helping you analyze and improve your processes and campaigns effectively.",
    },
    {
      title: "Great Marketing Tool",
      description:
        "Ringless voicemail is a cost-effective, convenient marketing tool that delivers powerful message delivery and results within a quick turnaround time, outperforming traditional cold calling.",
    },
  ];

  return (
    <div><CCmainmenu/>
    <section className="py-16 px-4 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Top 8 Benefits of Ringless Voicemail for Businesses
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Learn the advantages of leveraging the power of ringless voicemail for
            your business and why it is an effective marketing tool.
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
            Outsource Call Center Services to Nimble Auity
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            Nimble Auity is a leading provider of high-quality call center services.
            Our experienced specialists leverage the latest ringless voicemail strategies
            and direct-to-voicemail marketing methods to deliver top-notch services to
            clients. We make use of the best technology and tools to ensure the highest
            standards in every campaign.
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

export default RinglessVoicemailBenefits;
