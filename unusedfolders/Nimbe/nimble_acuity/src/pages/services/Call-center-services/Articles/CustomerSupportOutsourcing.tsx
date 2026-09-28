import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Users,
  Globe,
  Shield,
  ClipboardCheck,
  PhoneCall,
  Calendar,
  Laptop,
} from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const CustomerSupportOutsourcing: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="text-center px-6 md:px-20 py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-6"
        >
          The Impact of Customer Support Outsourcing on Customer Satisfaction
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg max-w-3xl mx-auto"
        >
          Explore how Nimble Auity customer support outsourcing enhances client
          satisfaction, boosts loyalty, and transforms customer experience into
          a competitive advantage.
        </motion.p>
      </section>

      {/* Four Steps Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12 text-blue-700">
          Four Steps for Effectively Outsourcing Customer Service
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Establish Clear Goals",
              desc: "Define objectives for outsourcing, whether it's cost reduction, 24/7 service, or access to specialized skills.",
              icon: ClipboardCheck,
            },
            {
              title: "Determine Customer Contact Channels",
              desc: "Identify where your customers seek support—social media, email, or phone—to craft a precise outsourcing strategy.",
              icon: PhoneCall,
            },
            {
              title: "Protect Brand Voice & Tone",
              desc: "Ensure outsourced support maintains your brand identity consistently across all interactions.",
              icon: Users,
            },
            {
              title: "Train for Quality & Measure Success",
              desc: "Implement training programs and KPIs to transform outsourced interactions into excellent customer experiences.",
              icon: Calendar,
            },
          ].map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start space-x-5 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-1"
              >
                <div className="p-4 bg-blue-100 rounded-full">
                  <Icon className="text-blue-600" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Choosing Service Section */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10 text-blue-700">
            Choosing the Most Suitable Customer Support Service
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            {[
              {
                title: "Remote or Physical Call Center?",
                desc: "Decide which model aligns with your brand's and customers' expectations.",
                icon: Laptop,
              },
              {
                title: "International or Domestic Outsourcing?",
                desc: "Consider cultural nuance, language proficiency, and customer alignment.",
                icon: Globe,
              },
              {
                title: "Which Location Should You Choose?",
                desc: "Strategically select offshore locations for optimal hours, cost, and cultural affinity.",
                icon: Globe,
              },
              {
                title: "Dedicated or Shared Agents?",
                desc: "Determine if personalized or volume-driven service better suits your needs.",
                icon: Users,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition hover:-translate-y-1"
                >
                  <div className="flex items-center mb-2">
                    <Icon className="text-blue-600 mr-3" size={24} />
                    <h3 className="text-xl font-semibold text-blue-700">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10 text-blue-700">
          Various Categories of Outsourcing for Customer Service
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-gray-700">
          {[
            {
              title: "Multi-Channel vs Omnichannel",
              desc: "Choose the model that ensures seamless journeys across all customer touchpoints.",
              icon: Users,
            },
            {
              title: "Onshore vs Offshore",
              desc: "Balance cost, quality, and cultural alignment to enhance customer satisfaction.",
              icon: Globe,
            },
            {
              title: "Shared vs Dedicated Agents",
              desc: "Select agents based on service complexity and personalization needs.",
              icon: Users,
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition hover:-translate-y-1 text-center"
              >
                <Icon className="text-blue-600 mx-auto mb-3" size={28} />
                <h3 className="text-xl font-semibold mb-2 text-blue-700">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Strategy Section */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10 text-blue-700">
            Developing a Strategy for Outsourcing Customer Support
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            {[
              {
                title: "Identify Key CX Goals & Objectives",
                desc: "Clearly define customer experience goals to steer outsourced support effectively.",
              },
              {
                title: "Audit Current CX Strategy",
                desc: "Evaluate existing processes to identify strengths and improvement areas.",
              },
              {
                title: "Design Your CX Strategy",
                desc: "Create a customer-centric, data-driven, agile strategy aligned with company goals.",
              },
              {
                title: "Train and Implement",
                desc: "Ensure outsourced teams are well-trained to embody brand values.",
              },
              {
                title: "Measure and Optimize",
                desc: "Continuously monitor performance metrics and optimize outsourcing for satisfaction.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-700">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-blue-700">
          The Impact on Customer Satisfaction
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          When executed with strategic precision, customer support outsourcing
          elevates satisfaction, builds loyalty, and strengthens the brand's
          relationship with clients. It’s a powerful lever for turning service
          into a competitive advantage.
        </p>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          Ready to Enhance Customer Satisfaction?
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Leverage Nimble Auity Customer Support Outsourcing to elevate your
          client experience and drive loyalty.
        </p>
        <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-xl px-8 py-3 text-lg shadow-md">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default CustomerSupportOutsourcing;
