import React from "react";
import { motion } from "framer-motion";
import {
  Headphones,
  LifeBuoy,
  Monitor,
  Inbox,
  ClipboardList,
  Users,
} from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const ConsumerResponse: React.FC = () => {
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
          Outsource Consumer Response Services
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl opacity-90">
          Improve customer retention and loyalty by upgrading your consumer response services with Nimble Acuity, starting at $8/hour.
        </p>
      </section>

      {/* Specialized Services */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-12">
          Our Specialized Consumer Response Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Consumer Response Management Services",
              icon: Headphones,
              desc: "Standardized procedures for receiving, analyzing, and integrating consumer feedback validated via Six Sigma.",
            },
            {
              title: "Help Desk Solutions & Services",
              icon: LifeBuoy,
              desc: "Prioritize urgent consumer needs and complaints using statistical root cause analysis for CTQ compliance.",
            },
            {
              title: "Web Management Services",
              icon: Monitor,
              desc: "Lean VSM-driven web response protocols minimize response time and ensure fast engagement with consumers.",
            },
            {
              title: "Inventory & Supply Chain Management",
              icon: ClipboardList,
              desc: "Identify opportunities and threats in the supply chain, using Poka-Yoke mechanisms to prevent recurring inefficiencies.",
            },
            {
              title: "Toll-Free Services",
              icon: Inbox,
              desc: "Set up, manage, and moderate toll-free services to improve customer experience and sales lead qualifications.",
            },
            {
              title: "Orders & Purchase Inquiry Handling",
              icon: Users,
              desc: "Efficient system for recording and processing orders, turning data into actionable business intelligence.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition"
            >
              <service.icon className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-green-600">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Work Process */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-12">
          Our Consumer Response Work Process
        </h2>
        <ol className="max-w-4xl mx-auto space-y-8 list-decimal list-inside text-gray-700">
          {[
            "Consumer Response Reception: Receive, interpret, and handle consumer inquiries via calls or digital channels.",
            "Recording, Processing, and Analyzing: Apply sampling and trend analysis to produce actionable CTQs.",
            "Evaluation of Business Operations: Assess operations to identify scopes for improvement based on feedback.",
            "Strategy Formulation: Develop strategies using DMAIC lifecycle aligned with VoC priorities.",
            "Reporting: Integrate insights and feedback into detailed reports with recommendations for improvements.",
          ].map((step, i) => (
            <motion.li
              key={i}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="bg-white p-6 rounded-xl shadow"
            >
              {step}
            </motion.li>
          ))}
        </ol>
      </section>

      {/* Other Services */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
          Other Services You May Benefit From
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            "Inbound Call Center Services",
            "Outbound Call Center Services",
            "Telemarketing Services",
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
          Why Choose Nimble Acuity?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Cost-effective Pricing",
              desc: "Handle all your consumer responses efficiently at affordable rates.",
            },
            {
              title: "Real-Time CR Management",
              desc: "Reduce response turnaround times using Lean Six Sigma stabilization and error-proofing.",
            },
            {
              title: "Highly Specialized Teams",
              desc: "Role-specific LSS training ensures operations follow CTQ guidelines and process uniformity.",
            },
            {
              title: "Support Services",
              desc: "Comprehensive coverage including knowledge management, inventory, analytics, and more.",
            },
            {
              title: "Assured Security & Confidentiality",
              desc: "ISO-certified, trusted provider managing confidential consumer data securely.",
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
              desc: "A tech-enabling payment gateway provider outsourced inbound support. Nimble's agents acted as extensions of the client's in-house team.",
            },
            {
              title: "Telemarketing Services for Top Tea Company",
              desc: "Reliable and professional telemarketing services delivered to a leading green tea manufacturer.",
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
          "I am happy with the services that Nimble Acuity provided and would recommend them to anyone looking for professional services."
        </p>
        <p className="mt-4 font-semibold">Business Owner, Online Advertising Company, Canada</p>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6 bg-green-600 text-white">
        <h2 className="text-3xl font-bold mb-6">Upgrade Your Consumer Response</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Ensure every client touchpoint delivers value. Partner with Nimble Acuity for efficient, reliable, and high-quality consumer response services.
        </p>
        <button className="bg-white text-green-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-50 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default ConsumerResponse;
