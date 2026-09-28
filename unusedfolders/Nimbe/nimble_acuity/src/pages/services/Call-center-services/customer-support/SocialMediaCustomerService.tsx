import React from "react";
import CCmainmenu from "../CCmainmenu";

const SocialMediaCustomerService: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Nimble Social Media Customer Service
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Social media platforms have taken the world by storm in the last decade and are proving to be one of the most powerful and effective channels for customer support. Nimble Auity applies Lean Six Sigma frameworks to help global clients build Voice of the Customer (VoC) with Critical to Quality (CTQ)–mapped social media support systems, ensuring fast, traceable, and measurable client interactions across platforms.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Social Media Customer Services We Offer
        </h2>
        <p className="text-center mb-10 text-lg">
          With two decades of expertise, Nimble provides skilled young teams backed by experienced industry specialists to deliver customer support across platforms.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Setting Up Social Media Channels",
              points: [
                "Review platforms most used by customers",
                "Set up social media handles with required details",
                "Provide contact details on social pages",
                "Publish posts & welcome messages",
              ],
            },
            {
              title: "Group Management",
              points: [
                "Publish posts regularly",
                "Monitor responses & feedback",
                "Sort info with service reps",
                "Track metrics & share reports",
              ],
            },
            {
              title: "Content Management",
              points: [
                "Create trending posts",
                "Design images & videos",
                "Write short-form content",
              ],
            },
            {
              title: "Strategy Management",
              points: [
                "Coordinate strategies across departments",
                "Schedule posts at peak times",
                "Use tools to analyze data",
              ],
            },
            {
              title: "Building Customer Relations",
              points: [
                "Respond politely to queries",
                "Understand cultural differences",
                "Nurture relationships",
              ],
            },
            {
              title: "Brand Building",
              points: [
                "Enhance brand image",
                "Use consistent branding",
                "Engage customers for feedback",
              ],
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">
          Social Media Platforms & Tools We Support
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-10 text-lg">
          We provide support across leading platforms and tools, including custom internal solutions.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
          {[
            "Instagram",
            "LinkedIn",
            "Reddit",
            "Facebook",
            "Pinterest",
            "Twitter",
            "WhatsApp",
            "Tumblr",
            "Hootsuite",
            "Buffer",
            "SproutSocial",
            "Tailwind",
          ].map((tool, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-4 hover:bg-blue-50 transition"
            >
              <p className="font-medium">{tool}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Do You Need a Social Media Customer Service Strategy?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Enhanced Customer Loyalty",
              desc: "Customers are 3x more likely to recommend a brand if they have a positive support experience.",
            },
            {
              title: "Formidable Brand Reputation",
              desc: "Real-time resolution & accountability enhance trust and reduce public escalations.",
            },
            {
              title: "Increased Revenue Growth",
              desc: "Companies with CTQ-based support grow 7.5% annually compared to 2.9% for others.",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 px-6 bg-blue-50">
        <h2 className="text-3xl font-bold text-center mb-8">
          7 Reasons to Hire Nimble for Social Media Customer Service
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            "High Data Security with ISO-validated controls",
            "Affordable, value-based pricing",
            "Young & creative team backed by experts",
            "Use of latest tools like Hootsuite, Buffer",
            "Multitasking with SOP-driven workflows",
            "Multilingual agents with localized training",
            "Enhanced client experience with CX-first approach",
          ].map((reason, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-6 hover:shadow-md transition"
            >
              <p className="text-gray-700">{reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Elevate Your Social Media Support?
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Implement a VoC-to-CTQ–aligned social media support system with Nimble Auity to enhance satisfaction, reduce escalation cycles, and build brand equity.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default SocialMediaCustomerService;
