import React from "react";
import { motion } from "framer-motion";
import {
  Headphones,
  LifeBuoy,
  Bell,
  Clock,
  Info,
  Users,
} from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const HotlineServices: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-teal-500 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Outsource Hotline Services
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl opacity-90">
          Get dedicated hotlines to serve your business with Nimble Acuity hotline solutions, starting at just $8 per hour!
        </p>
      </section>

      {/* Services Offered */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-12">
          Hotline Solutions Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Compliance and Ethics Hotline Services",
              icon: Headphones,
              desc: "Encourage confidential reporting including fraud and inappropriate actions with our professional hotlines.",
            },
            {
              title: "Crisis Prevention Hotlines",
              icon: LifeBuoy,
              desc: "Standardized escalation workflows help guide callers during high-risk incidents for timely response.",
            },
            {
              title: "Disaster Distress Hotlines",
              icon: Bell,
              desc: "Assists with referrals, confidential counselling, immediate support, and disaster-related aid.",
            },
            {
              title: "After-hours Support Hotlines",
              icon: Clock,
              desc: "Provides 24/7 hotline support to handle emergencies outside business hours efficiently.",
            },
            {
              title: "Event Information Hotlines",
              icon: Info,
              desc: "Offer point-to-point information or redirect callers to predefined destinations during events.",
            },
            {
              title: "Customer Relations Hotlines",
              icon: Users,
              desc: "Stay connected with your customers anytime, improving customer satisfaction and relationships.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition"
            >
              <service.icon className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-green-600">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
          Other Services You May Benefit From
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            "Telemarketing Services",
            "Outbound Call Center Services",
            "Virtual Assistant Services",
            "Lead Generation Services",
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="bg-green-50 rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-green-600">{service}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Nimble */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
          Why Choose Nimble Acuity Hotline Services?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Skilled and Trained Specialists",
              desc: "Lean Six Sigma certified agents ensure quick, accurate, and standardized responses.",
            },
            {
              title: "Advanced Call Assistance Technology",
              desc: "Latest voice and data communication systems provide fast and efficient hotline support.",
            },
            {
              title: "Rich Industry Experience",
              desc: "22+ years of multi-domain expertise achieving improved service quality with VoC-aligned CTQ processes.",
            },
            {
              title: "Unique Capabilities",
              desc: "Superior market coverage, prompt market response, remote support, and expert account management.",
            },
            {
              title: "Round-the-clock Call Support",
              desc: "24/7/365 availability ensures you never miss a customer call.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-green-600 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Inbound Customer Services for Payment Gateway",
              desc: "A tech-enabled payment gateway outsourced inbound support. Nimble's agents acted as extensions of the client's in-house team.",
            },
            {
              title: "Telemarketing Services for Top Tea Company",
              desc: "Professional telemarketing services delivered to a leading green tea manufacturer with complete satisfaction.",
            },
          ].map((story, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h3 className="text-xl font-semibold text-green-600 mb-2">{story.title}</h3>
              <p className="text-gray-600">{story.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-8">Testimonials</h2>
        <p className="max-w-3xl mx-auto text-lg italic text-gray-700">
          "Efforts from Nimble Acuity have been a major factor in our successful relationship. They help us with verification calls and follow-ups on customer feedback."
        </p>
        <p className="mt-4 font-semibold">CEO, Energy Equipment & Solutions, Kitchener, Ontario, Canada</p>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6 bg-green-600 text-white">
        <h2 className="text-3xl font-bold mb-6">Streamline Your Hotline Operations</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Partner with Nimble Acuity to ensure prompt, reliable, and efficient hotline services with VoC-aligned improvements.
        </p>
        <button className="bg-white text-green-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-50 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default HotlineServices;
