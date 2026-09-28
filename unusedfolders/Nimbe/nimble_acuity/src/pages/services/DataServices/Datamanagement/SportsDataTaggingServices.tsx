import React from "react";
import { motion } from "framer-motion";
import DSmainmenu from "../DSmainmenu";

const SportsDataTagging = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Sports Data Tagging Services
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          Transform your game strategy with our precision sports data tagging services. 
          Harness the power of predictive analysis, custom reports, and real-time tagging 
          to elevate performance and win the competitive edge.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Sports Tagging Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Service Card */}
          {[
            {
              title: "Sports Video Tagging",
              description:
                "AI & ML-powered tagging of key moments and player actions in sports videos for detailed analysis.",
            },
            {
              title: "Semantic Segmentation",
              description:
                "Classify every pixel in sports footage to dissect each frame for strategy optimization.",
            },
            {
              title: "Bounding Box Annotation",
              description:
                "Precisely localize objects and analyze player dynamics for tactical insights.",
            },
            {
              title: "Player Segmentation",
              description:
                "Track individual players using advanced image processing for performance analysis.",
            },
            {
              title: "Action Identification",
              description:
                "Detect and tag specific actions using neural network models for detailed player activity.",
            },
            {
              title: "Player Position Tracking",
              description:
                "Monitor player movements and positions in real-time using GPS and computer vision.",
            },
            {
              title: "Annotation Validation",
              description:
                "Ensure accuracy with AI-powered cross-checking and validation of tagged data.",
            },
            {
              title: "Players Data Annotation",
              description:
                "Structured tagging of player data for performance and talent evaluation.",
            },
            {
              title: "Performance Data Analysis",
              description:
                "Transform raw performance data into strategic insights using predictive analytics.",
            },
            {
              title: "Live Player Tracking",
              description:
                "Real-time analysis and IoT-based tracking of players during live games.",
            },
            {
              title: "Player & Game Tagging",
              description:
                "Track individual actions and game events with AI and computer vision for a comprehensive overview.",
            },
          ].map((service) => (
            <motion.div
              key={service.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sports Covered */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Sports We Cover</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Soccer", "Hockey", "Rugby", "Tennis",
            "Badminton", "Ice-Hockey", "Baseball", "Cricket",
            "Lacrosse", "Kickboxing", "Athletics", "American Football",
          ].map((sport) => (
            <div
              key={sport}
              className="bg-blue-100 text-blue-800 py-4 rounded-lg font-medium"
            >
              {sport}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Why Invest in Sports Annotation Outsourcing?
        </h2>
        <ul className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 text-gray-700">
          <li>Leverage professional expertise for high-quality, accurate data tagging.</li>
          <li>Free up time and resources to focus on strategic operations.</li>
          <li>Reduce upfront investments in technology, infrastructure, and specialized personnel.</li>
          <li>Gain actionable insights to improve performance and fan engagement.</li>
          <li>Cost-efficient services without compromising quality.</li>
          <li>Data security and confidentiality guaranteed.</li>
        </ul>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Additional Services</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {["Data Annotation", "Image Annotation", "Text Annotation", "Video Annotation"].map((service) => (
            <div
              key={service}
              className="bg-indigo-100 text-indigo-800 py-6 rounded-lg font-medium shadow-md"
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Scanning & Data Entry for UK Software Firm",
              description:
                "Configured a bespoke data management solution to plug gaps in workload and drive revenue.",
            },
            {
              title: "eCommerce Data Entry for Bike Accessories Seller",
              description:
                "Provided eCommerce data entry services on a friendly budget for a Poland-based parts manufacturer.",
            },
          ].map((story) => (
            <motion.div
              key={story.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
              <p className="text-gray-600">{story.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {[
            {
              quote:
                "We were very satisfied with the quality of service Nimble Auity provided. They met our requests with great professionalism and flexibility.",
              author: "Spokesperson, Online health lessons company in Canada",
            },
            {
              quote:
                "Working with Nimble has been a great experience. They quickly adapted to our requirements and consistently performed well.",
              author: "Spokesperson, Executive recruitment firm in the US",
            },
          ].map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md"
              whileHover={{ scale: 1.02 }}
            >
              <p className="italic text-gray-700">"{testimonial.quote}"</p>
              <p className="mt-4 font-semibold text-gray-900">{testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Outsource Sports Data Tagging Services to Nimble
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Choose Nimble Auity for accurate, efficient, and cost-effective sports data tagging services.
          Get in touch with our experts today and elevate your sports analytics strategy.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default SportsDataTagging;
