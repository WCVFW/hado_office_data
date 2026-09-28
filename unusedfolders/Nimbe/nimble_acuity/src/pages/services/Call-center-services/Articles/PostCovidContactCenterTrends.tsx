import React from "react";
import CCmainmenu from "../CCmainmenu";

const PostCovidContactCenterTrends: React.FC = () => {
  const trends = [
    {
      title: "Omnichannel Support Will be Appreciated",
      description:
        "Consumers expect brands and companies to respond to their queries across different channels. Queries should be resolved quickly without repeating problems on multiple channels. Omnichannel support will be one of the fastest-growing channels as consumers look for multiple ways to interact with your brand.",
    },
    {
      title: "Live Engagement Will be Preferred",
      description:
        "With the lack of real-time communication, messages can be miscommunicated. Live engagement is key as customers need instant answers. Engaging live with customers improves their overall experience.",
    },
    {
      title: "Cloud Technologies Will Help Reduce Costs",
      description:
        "With more call center employees working remotely, running offices can get expensive. Cloud-based solutions allow companies to reduce costs, scale easily, and reach a wider audience without additional infrastructure.",
    },
    {
      title: "Data Security Will be Priority",
      description:
        "Consumers are increasingly concerned about data privacy. Companies must ensure agents understand the importance of data security and handle customer information responsibly.",
    },
    {
      title: "Interaction Through Social Media Will Soar",
      description:
        "Social media is becoming a key support platform. Consumers will increasingly seek assistance and interact with brands via social channels.",
    },
    {
      title: "Use of Chatbots Will Continue to Grow",
      description:
        "Chatbots will continue to revolutionize customer service. They provide instant support, and nearly 50% of shoppers prefer using chatbots for online interactions.",
    },
    {
      title: "Self Service Options Will Gain Popularity",
      description:
        "Digital self-service portals reduce call volumes. Interactive chat tools and messaging apps allow customers to resolve most issues without speaking to an agent.",
    },
    {
      title: "Automation Will Free Agents",
      description:
        "Automating routine tasks allows agents to focus on personal customer interactions, improving relationships and the overall customer experience.",
    },
    {
      title: "Remote Working Will Continue",
      description:
        "Remote call center agents offer cost savings for businesses and flexibility for employees. This trend is expected to continue in the post-pandemic era.",
    },
    {
      title: "Technology Will Help Ease Budgeting Problems",
      description:
        "With rising customer expectations and shrinking budgets, companies are investing in technology to scale operations efficiently and improve service delivery.",
    },
  ];

  return (
    <div><CCmainmenu/>
    <section className="py-16 px-4 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Top 10 Post-Covid Contact Center Trends & Insights in 2021
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a look at the latest trends and insights to watch out for in 2021
            for contact centers in the post-Covid pandemic era.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {trends.map((trend, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                {trend.title}
              </h2>
              <p className="text-gray-600">{trend.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Call Center Services by Nimble Auity
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            Nimble Auity has been a pioneer in providing high-quality call center services in India and globally for over two decades. Our skilled specialists leverage the latest tools and technologies to cater to all client requirements efficiently and effectively.
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

export default PostCovidContactCenterTrends;
