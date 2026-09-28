import React from "react";
import CCmainmenu from "../CCmainmenu";

const ContactCenterInsights: React.FC = () => {
  const ringlessBenefits = [
    {
      title: "Target a Larger Audience",
      description:
        "Automated ringless voicemail messaging can broadcast messages to a wide audience, freeing agents to respond to engaged customers.",
    },
    {
      title: "Multiple Usability",
      description:
        "Ringless voicemail is versatile and can be used across marketing, call centers, government, education, and sales sectors.",
    },
    {
      title: "Cost-effective Solution",
      description:
        "Delivers high-quality leads at a nominal cost, efficiently reaching customers without disturbing them.",
    },
    {
      title: "Boosts Agent's Productivity",
      description:
        "Agents can focus on responding to interested customers rather than manually calling, improving overall productivity.",
    },
    {
      title: "Great Customer Response",
      description:
        "Customers can listen at their convenience, enhancing response rates compared to cold calls.",
    },
    {
      title: "Perfect for a Marketing Pitch",
      description:
        "Voicemail can be designed to deliver maximum impact, converting leads into sales efficiently.",
    },
    {
      title: "Live Stats and Analytics",
      description:
        "Provides detailed campaign data and analytics to improve processes and optimize messaging.",
    },
    {
      title: "Great Marketing Tool",
      description:
        "Delivers messages effectively, yielding results faster than cold calls and traditional marketing methods.",
    },
  ];

  const postCovidTrends = [
    {
      title: "Omnichannel Support Will be Appreciated",
      description:
        "Customers expect brands to respond across multiple channels without repeating their issues.",
    },
    {
      title: "Live Engagement Will be Preferred",
      description:
        "Real-time communication enhances customer experience and reduces miscommunication.",
    },
    {
      title: "Cloud Technologies Will Help Reduce Costs",
      description:
        "Cloud solutions allow remote work and scale operations efficiently while reducing overhead.",
    },
    {
      title: "Data Security Will be Priority",
      description:
        "Companies must safeguard customer data and ensure agents are aware of privacy requirements.",
    },
    {
      title: "Interaction Through Social Media Will Soar",
      description:
        "Social media will become a crucial platform for support and engagement.",
    },
    {
      title: "Use of Chatbots Will Continue to Grow",
      description:
        "Chatbots improve customer service efficiency and are widely preferred by online shoppers.",
    },
    {
      title: "Self Service Options Will Gain Popularity",
      description:
        "Digital self-service portals and interactive tools reduce call volumes and improve engagement.",
    },
    {
      title: "Automation Will Free Agents",
      description:
        "Automating tasks allows agents to focus on personalized customer interactions.",
    },
    {
      title: "Remote Working Will Continue",
      description:
        "Hiring remote agents reduces costs and offers flexibility, benefiting both business and staff.",
    },
    {
      title: "Technology Will Help Ease Budgeting Problems",
      description:
        "Investing in technology helps companies meet rising customer expectations with reduced budgets.",
    },
  ];

  const securityTrends = [
    {
      title: "Stronger Authentication Methods Will Be Adopted",
      description:
        "Biometrics, multi-factor authentication, and social media links help reduce fraud and identity theft.",
    },
    {
      title: "Strong Password Policy",
      description:
        "Enforcing robust passwords is crucial as weak passwords cause many data breaches.",
    },
    {
      title: "Ransomware Attacks Will Be On the Rise",
      description:
        "Organizations need advanced tools, backups, and prevention strategies for ransomware threats.",
    },
    {
      title: "Fraud Training for Employees",
      description:
        "Educating agents to detect phishing and social engineering protects sensitive data.",
    },
    {
      title: "Regulatory Compliance Will Be Crucial",
      description:
        "Compliance with cybersecurity laws ensures safe handling of customer information.",
    },
    {
      title: "Secure Cloud Solutions",
      description:
        "Cloud adoption eliminates silos and enhances security and customer experience.",
    },
    {
      title: "Secured Third-party Integrations",
      description:
        "Regular audits and secure API integrations prevent privacy breaches and ensure continuity.",
    },
    {
      title: "Preparing for IoT Vulnerabilities",
      description:
        "Secure gateways, multi-credential systems, and hardware-backed solutions mitigate IoT risks.",
    },
  ];

  const liveChatBenefits = [
    {
      title: "No Longer Waiting and Frustrating Consumers",
      description:
        "Live chat reduces queues, speeds up responses, and improves customer satisfaction.",
    },
    {
      title: "24/7 Availability",
      description:
        "Supports customers globally regardless of time zone with just an internet connection.",
    },
    {
      title: "Driving eCommerce Sales and Conversions",
      description:
        "Real-time guidance during purchase increases conversion rates and sales.",
    },
    {
      title: "Support Multiple Customers Simultaneously",
      description:
        "Agents can handle multiple chats at once, improving efficiency over phone support.",
    },
    {
      title: "Easy to Find Chat Window",
      description:
        "Visible chat bubbles on all pages increase engagement and customer interaction.",
    },
    {
      title: "Chat Greetings",
      description:
        "Automated personalized greetings enhance engagement and sales opportunities.",
    },
    {
      title: "Less Cost and More Gain",
      description:
        "Reduces customer service costs and allows handling more customers without additional hires.",
    },
    {
      title: "No Need for Multilingual Agents",
      description:
        "Tools like online translators allow efficient communication in multiple languages.",
    },
    {
      title: "Enhances Marketing Efficiency",
      description:
        "Supports promotions and targeted messages to engage customers instantly.",
    },
    {
      title: "Enhances Business Reliability",
      description:
        "Instant human support improves trust, satisfaction, and business credibility.",
    },
  ];

  const renderSection = (title: string, items: { title: string; description: string }[]) => (
    <section className="py-16 px-4 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{title}</h2>
        </header>
        <div className="grid gap-8 md:grid-cols-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div>
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-blue-600 text-white py-24 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Nimble Auity Contact Center Insights
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Explore the latest trends, strategies, and tools to improve customer experience, security, and efficiency across call centers and eCommerce platforms.
        </p>
      </section>

      {/* Content Sections */}
      {renderSection("Top 8 Benefits of Ringless Voicemail for Businesses", ringlessBenefits)}
      {renderSection("Top 10 Post-Covid Contact Center Trends & Insights", postCovidTrends)}
      {renderSection("Top 8 Call Center Security Trends and Predictions", securityTrends)}
      {renderSection("10 Reasons Why All eCom Sites Should Have Live Chat Support", liveChatBenefits)}

      {/* Call to Action */}
      <section className="py-20 px-4 md:px-16 bg-blue-600 text-white text-center rounded-t-3xl">
        <h2 className="text-4xl font-bold mb-4">Partner with Nimble Auity Today</h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Get in touch with our experts to implement advanced call center solutions, ringless voicemail campaigns, secure systems, and live chat support to boost your business efficiency and customer satisfaction.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default ContactCenterInsights;
