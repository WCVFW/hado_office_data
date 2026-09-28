import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, Home, UserCheck, Smile, PhoneCall } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const PostPandemicChallenges: React.FC = () => {
  const challenges = [
    {
      title: "Reducing Call Wait Times",
      desc: "Adapt callbacks to reduce hold time and allow agents to manage escalations efficiently. Outsourcing to Nimble can help implement these solutions seamlessly.",
      icon: Clock,
    },
    {
      title: "Remote Operations",
      desc: "Embrace remote work policies and cloud-based infrastructure. Proper training ensures smooth adaptation and prepares call centers for unforeseen future challenges.",
      icon: Home,
    },
    {
      title: "Recruiting and Retaining Agents",
      desc: "Leverage virtual agents like chatbots to manage extra demand. This reduces dependency on high turnover and ensures business continuity.",
      icon: UserCheck,
    },
    {
      title: "Low Customer Satisfaction",
      desc: "Address unresolved issues, reduce hold times, and ensure prompt escalation. High-quality call center services improve brand reputation and customer experience.",
      icon: Smile,
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="text-center px-6 md:px-20 py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-6"
        >
          Post-Pandemic Challenges for Call Centers
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg max-w-3xl mx-auto"
        >
          Explore key challenges call centers face post-COVID and discover how Nimble Auity helps businesses adapt, stay efficient, and maintain high customer satisfaction.
        </motion.p>
      </section>

      {/* Challenges Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-blue-700 mb-12 text-center">
          Key Post-Pandemic Challenges & Solutions
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {challenges.map((item, idx) => {
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
                <div className="p-4 bg-blue-100 rounded-full">
                  <Icon className="text-blue-600" size={28} />
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
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700">Nimble Auity Call Center Services</h2>
          <p className="text-gray-700 mb-6">
            Nimble Auity offers customized call center solutions to help businesses manage post-pandemic challenges efficiently. With ISO certification, a dedicated team, and access to cutting-edge technologies, we ensure high-quality service for every client.
          </p>
          <p className="text-gray-700 mb-6">
            Contact us for tailored call center solutions designed to meet your exact business requirements.
          </p>
          <div className="mt-6">
            <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-xl px-8 py-3 text-lg shadow-md">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostPandemicChallenges;
