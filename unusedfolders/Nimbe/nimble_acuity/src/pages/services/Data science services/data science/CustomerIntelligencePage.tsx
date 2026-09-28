import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  BarChart3,
  Smile,
  Award,
  FileSearch,
  PhoneCall,
  Settings,
  RefreshCw,
  CheckCircle,
} from "lucide-react";
import DSMainMenu from "../mainmenu";

const CustomerIntelligencePage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <DSMainMenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Nimble Customer Intelligence Services
        </motion.h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg">
          We provide you with customer intelligence on shoppers' online
          behavior, brand sentiments, and more via call and text surveys and
          interactions at rates starting at $8/hour.
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          className="mt-8 inline-block bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold shadow-lg"
        >
          Get a Free Quote
        </motion.a>
      </section>

      {/* Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Customer Intelligence Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              title: "Effective Customer Intelligence Analysis",
              desc: "Understand customer sentiments via calls, emails, and social media to retain and acquire customers.",
            },
            {
              icon: BarChart3,
              title: "Customer Intelligence Marketing",
              desc: "Use behavioral analysis to predict customer decisions and optimize marketing strategies.",
            },
            {
              icon: Smile,
              title: "Customer Satisfaction",
              desc: "Capture insights from surveys and reviews to ensure customer happiness and loyalty.",
            },
            {
              icon: Award,
              title: "Brand Assessment",
              desc: "Analyze brand strengths, weaknesses, and visibility to enhance recognition and sales.",
            },
            {
              icon: FileSearch,
              title: "Real-time Reporting",
              desc: "Get actionable insights and real-time reports to make swift, informed business decisions.",
            },
            {
              icon: PhoneCall,
              title: "Improve Agent Management",
              desc: "Boost agent performance with deep insights to deliver beyond customer expectations.",
            },
            {
              icon: Settings,
              title: "Streamlining Processes",
              desc: "Optimize sales, marketing, and backend processes to serve customers better.",
            },
            {
              icon: RefreshCw,
              title: "Client Follow-ups",
              desc: "Ensure repeat business through effective post-purchase follow-up strategies.",
            },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg"
            >
              <service.icon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-100 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Customer Intelligence Process
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {[
            "Team Meet – Discuss client requirements",
            "Communicating with Customers – Plan best approach",
            "Customer Intelligence Analysis – Study behavior and demands",
            "Implement – Apply insights to improve engagement and sales",
            "Post-purchase Experience – Track satisfaction and feedback",
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="flex items-start gap-4 bg-white p-5 rounded-xl shadow"
            >
              <div className="text-blue-600 font-bold text-lg">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <p className="text-gray-700">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Nimble Acuity for Customer Intelligence?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Cost-effective Services",
            "Quality Control",
            "State-of-the-art Technology",
            "Experienced Team",
            "Error-free Services",
            "Remote Assistance",
            "Rapid Turnaround",
            "Customization",
            "Client Confidentiality",
            "Personalized Assistance",
            "Precision in Data Archiving",
            "High-priority Service",
            "All-round Support",
          ].map((perk, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md"
            >
              <CheckCircle className="h-7 w-7 text-green-600 mb-3" />
              <h3 className="text-lg font-semibold">{perk}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-gray-50 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Other Services You May Benefit From
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            "Audio Monitoring Services",
            "Call Quality Analytics Services",
            "Video Monitoring Services",
            "CCTV Monitoring Services",
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-md"
            >
              <p className="font-semibold">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">
              Call Quality Monitoring for Tech Firm
            </h3>
            <p className="text-gray-600">
              Helped a leading tech firm achieve goals with affordable call
              quality monitoring services.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">
              Live Video, Audio & Text Monitoring
            </h3>
            <p className="text-gray-600">
              Delivered accurate backend monitoring for a major Singapore
              internet company with quick turnaround.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-indigo-600 text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
        <blockquote className="max-w-2xl mx-auto text-lg italic">
          "I'm impressed! :) You ladies and gentlemen are doing fantastic work.
          Thank you so much!"
        </blockquote>
        <p className="mt-4 font-semibold">
          — Reservations Supervisor, Travel Website Company, CA
        </p>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Understand Your Customers Better?
        </h2>
        <p className="mt-4 text-lg">
          Get high-quality customer intelligence services tailored to your
          needs.
        </p>
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="mt-8 inline-block bg-white text-indigo-700 px-6 py-3 rounded-xl font-semibold shadow-lg"
        >
          Get Started
        </motion.a>
      </section>
    </div>
  );
};

export default CustomerIntelligencePage;
