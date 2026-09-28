import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Users,
  Cpu,
  Globe,
  Cat,
  Info,
  PhoneCall,
} from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const IntelligentContactCenter: React.FC = () => {
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
          Intelligent Contact Center – What is It?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg max-w-3xl mx-auto"
        >
          Learn how Nimble Auity leverages intelligent contact centers to enhance customer experience, integrate cutting-edge technologies, and streamline interactions across multiple channels.
        </motion.p>
      </section>

      {/* What is Contact Center Intelligence */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">What is Contact Center Intelligence?</h2>
        <p className="text-gray-700 mb-6">
          Contact center intelligence harnesses technologies to make customer interactions smarter and more efficient. It includes AI, predictive analytics, speech recognition, behavioral analytics, customer analytics, and more—enabling agents to deliver superior service.
        </p>
      </section>

      {/* AI Transforming Contact Centers */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-700 mb-10">How is Artificial Intelligence Transforming Contact Centers?</h2>
          <p className="text-gray-700 mb-6">
            AI enhances contact center operations through advanced analytics, speech recognition, and predictive tools that anticipate customer needs, delivering faster and more personalized interactions.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12 text-blue-700">What Makes a Contact Center Intelligent?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Omnichannel Customer Contact",
              desc: "Enable seamless connections via chat, phone, email, or social media for a consistent experience.",
              icon: Cat,
            },
            {
              title: "Individualized Communication",
              desc: "Provide personalized, one-on-one interactions based on customer profiles and histories.",
              icon: Users,
            },
            {
              title: "Complete Customer Information",
              desc: "Equip agents with current, comprehensive customer data for first-contact resolution.",
              icon: Info,
            },
            {
              title: "Cutting-Edge Technologies",
              desc: "Deploy AI, analytics, predictive tools, sentiment analysis, and more to stay ahead of competition.",
              icon: Cpu,
            },
          ].map((feature, idx) => {
            const Icon = feature.icon;
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
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Nimble Auity Section */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6 text-blue-700">Nimble Auity Contact Center Solutions</h2>
          <p className="text-gray-700 mb-6 text-center">
            With over 26+ years of experience, Nimble Auity provides complete contact center services globally, using AI and ML to enhance customer satisfaction, improve productivity, and implement innovative technologies.
          </p>
          <p className="text-gray-700 mb-6 text-center">
            Contact us for a cost-effective, custom solution to build your intelligent contact center.
          </p>
          <div className="text-center mt-6">
            <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-xl px-8 py-3 text-lg shadow-md">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntelligentContactCenter;
