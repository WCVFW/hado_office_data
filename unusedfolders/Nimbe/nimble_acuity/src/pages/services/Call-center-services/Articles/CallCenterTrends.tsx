import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Bot,
  Globe,
  Smile,
  Layers,
  BarChart,
  Cpu,
} from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const CallCenterTrends: React.FC = () => {
  const trends = [
    {
      title: "AI and Automation",
      desc: "AI streamlines processes, resolves routine queries, and frees agents for complex issues. It ensures faster resolutions, fewer errors, and personalized experiences.",
      icon: Bot,
    },
    {
      title: "Remote Contact Centers",
      desc: "Remote-first call centers ensure flexibility, business continuity, and access to a global talent pool. They also reduce agent turnover and improve satisfaction.",
      icon: Globe,
    },
    {
      title: "Customer Experience (CX)",
      desc: "Customer-centric call centers build loyalty and drive retention. CX focus moves beyond problem-solving into long-term relationship building.",
      icon: Smile,
    },
    {
      title: "Omnichannel Experience",
      desc: "Seamless, consistent customer interactions across voice, email, chat, and social boost engagement and retention across platforms.",
      icon: Layers,
    },
    {
      title: "Data-driven Service",
      desc: "Analytics predict customer needs, personalize responses, and provide insights that drive business growth and smarter decisions.",
      icon: BarChart,
    },
    {
      title: "New Tech Integration",
      desc: "Chatbots, VR, and advanced analytics push the limits of what call centers can achieve—making service faster, modern, and efficient.",
      icon: Cpu,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="relative text-center px-6 md:px-20 py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-6"
        >
          6 Key Call Center Trends <br /> Charting the Future of Customer Service
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg max-w-3xl mx-auto"
        >
          Discover the six trends shaping the customer service industry. Adapt
          and excel in a fast-changing business landscape.
        </motion.p>
      </section>

      {/* Intro */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Call centers are evolving into multi-channel contact hubs at the heart
          of customer engagement. From AI to omnichannel support, new strategies
          are redefining the way businesses connect with customers.
        </p>
        <p className="text-gray-700 leading-relaxed">
          These aren’t predictions—they’re happening now. Let’s dive into the key
          trends every business should embrace to stay ahead.
        </p>
      </section>

      {/* Trends */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center mb-12 text-blue-700">
          Key Trends Transforming Call Centers
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {trends.map((trend, idx) => {
            const Icon = trend.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start space-x-5 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-1"
              >
                <div className="p-4 bg-blue-100 rounded-full">
                  <Icon className="text-blue-600" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {trend.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{trend.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
            A Forward Look at Call Center Trends
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            These six trends represent the new foundation of customer service.
            They are not future possibilities—they are shaping the present.
            Embracing them is no longer optional; it’s essential.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            With Nimble Auity’s nimble solutions, businesses can transition from
            traditional call centers into advanced, customer-first contact
            centers. The future is here. The time to act is now.
          </p>
          <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-xl px-8 py-3 text-lg shadow-md">
            Talk to Our Experts
          </Button>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-10 text-gray-800">
          Explore More Insights
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Contact Center - What is It?",
            "Chatbots: Use Cases & Opportunities",
            "Is AI Becoming Instrumental in Boosting Call Center Productivity?",
          ].map((article, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <p className="text-gray-700 text-sm font-medium">{article}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CallCenterTrends;
