import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cpu, Headphones, BarChart2, Smile } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const AIInCallCenters: React.FC = () => {
  const aiBenefits = [
    {
      title: "Intelligent Call Routing",
      desc: "AI-driven routing uses self-learning algorithms to analyze personality, behavior, and call history, connecting customers to the most suitable agent and improving efficiency.",
      icon: Cpu,
    },
    {
      title: "Effective Call Analytics",
      desc: "AI captures insights from calls using sentiment analysis, NLP, and voice recognition to understand customer needs and optimize service strategies.",
      icon: BarChart2,
    },
    {
      title: "Better Customer Satisfaction",
      desc: "AI provides agents with customer behavior insights, profiles, and real-time suggestions, enabling faster, personalized, and error-free support.",
      icon: Smile,
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="text-center px-6 md:px-20 py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-6"
        >
          How AI is Boosting Call Center Productivity
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg max-w-3xl mx-auto"
        >
          Discover how Artificial Intelligence is transforming call centers by enhancing efficiency, analytics, and customer satisfaction.
        </motion.p>
      </section>

      {/* AI Benefits Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-12 text-center">
          Ways AI Boosts Call Center Productivity
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {aiBenefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-1 text-center"
              >
                <div className="p-4 bg-indigo-100 rounded-full mb-4">
                  <Icon className="text-indigo-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Nimble Auity Section */}
      <section className="bg-indigo-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-indigo-700">
            Implement AI Solutions with Nimble Auity
          </h2>
          <p className="text-gray-700 mb-6">
            Nimble Auity provides businesses with AI-powered solutions to boost call center productivity. From intelligent routing to predictive analytics, we help you transform your operations efficiently and cost-effectively.
          </p>
          <p className="text-gray-700 mb-6">
            Get a tailored plan that fits your business needs and ensures your agents and technology work in perfect harmony.
          </p>
          <div className="mt-6">
            <Button className="bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl px-8 py-3 text-lg shadow-md">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIInCallCenters;
