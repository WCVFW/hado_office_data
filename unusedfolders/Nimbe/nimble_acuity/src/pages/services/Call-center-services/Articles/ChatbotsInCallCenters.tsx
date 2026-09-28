import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Headphones, Repeat, DollarSign, Users } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const ChatbotsInCallCenters: React.FC = () => {
  const useCases = [
    {
      title: "Great Customer Service",
      desc: "Chatbots provide chat support to customers efficiently, eliminating long hold times and ensuring quick resolution of basic queries.",
      icon: Headphones,
    },
    {
      title: "Increasing First Call Resolutions",
      desc: "Chatbots handle direct queries, freeing human agents to focus on complex issues like warranty claims, boosting efficiency and reducing resolution time.",
      icon: Repeat,
    },
    {
      title: "Reducing Cost of Training",
      desc: "AI-powered chatbots reduce training costs by handling backend tasks, allowing agents to focus on customer-facing interactions and problem-solving.",
      icon: DollarSign,
    },
    {
      title: "Conquering The Customers",
      desc: "Chatbots engage customers across websites and social media, facilitating seamless transactions through a single interface, enhancing engagement and satisfaction.",
      icon: Users,
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="text-center px-6 md:px-20 py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-6"
        >
          Call Centers and Chatbots
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg max-w-3xl mx-auto"
        >
          Explore how AI-powered chatbots are transforming call centers, improving customer service, reducing costs, and enabling agents to focus on complex tasks.
        </motion.p>
      </section>

      {/* Use Cases Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-12 text-center">
          Use Cases of Chatbots in Call Centers Today
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start space-x-5 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-1"
              >
                <div className="p-4 bg-indigo-100 rounded-full">
                  <Icon className="text-indigo-600" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Nimble Auity Section */}
      <section className="bg-indigo-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-indigo-700">Implement Chatbots with Nimble Auity</h2>
          <p className="text-gray-700 mb-6">
            Nimble Auity helps businesses integrate AI chatbots into call centers using best practices and latest technologies. Improve customer satisfaction, reduce costs, and empower your agents with advanced solutions.
          </p>
          <p className="text-gray-700 mb-6">
            Get in touch for a customized plan that meets your unique business requirements and ensures seamless chatbot deployment.
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

export default ChatbotsInCallCenters;
