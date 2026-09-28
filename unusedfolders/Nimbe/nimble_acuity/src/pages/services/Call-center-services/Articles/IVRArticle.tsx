import React from "react";
import { motion } from "framer-motion";
import { PhoneIncoming, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import CCmainmenu from "../CCmainmenu";

const IVRArticle: React.FC = () => {
  const benefits = [
    {
      title: "Efficient Customer Support",
      desc: "An IVR system efficiently handles high call traffic, connecting callers to relevant agents without delays. It ensures round-the-clock availability and notifies agents of calls within their expertise.",
    },
    {
      title: "Increased Business Productivity",
      desc: "IVR handles increased call volumes without missing calls, ensuring no business opportunity is lost and enhancing overall customer service experience.",
    },
    {
      title: "Connects With Remote Agents",
      desc: "IVR allows routing calls to remote agents, including their mobile phones, ensuring callers reach the right agent regardless of location or work mode.",
    },
    {
      title: "24/7 Support as An Auto Attendant",
      desc: "IVR can manage calls outside business hours by routing to voicemail after voice prompts, enabling agents to respond efficiently during work hours.",
    },
    {
      title: "Impressive First Impression",
      desc: "A well-set IVR system creates a professional first impression, showing clients that your organization is responsive and reliable.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="text-center py-16 px-6 md:px-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
        >
          IVR Set Up and Its Benefits
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl mx-auto text-lg"
        >
          Ensure seamless communication with your clients using an interactive voice response system and enhance your business efficiency.
        </motion.p>
      </section>

      {/* Article Content */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-green-700">
          What is Interactive Voice Response?
        </h2>
        <p className="mb-6 text-gray-700">
          Interactive voice response (IVR) is an automated voice system with pre-recorded greetings and menus. Callers navigate the system via touch-tone instructions to reach the appropriate agent or department efficiently, saving time and reducing errors.
        </p>

        <h2 className="text-3xl font-semibold mb-6 text-green-700">
          Multi-Level IVR
        </h2>
        <p className="mb-6 text-gray-700">
          For organizations with multiple departments, a multi-level IVR guides callers through multiple options to ensure they reach the right department. Each level can be customized to meet your business needs.
        </p>

        {/* Benefits Grid */}
        <h2 className="text-3xl font-semibold mb-6 text-green-700">
          Benefits of Having an IVR System
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition hover:-translate-y-1"
            >
              <CheckCircle className="text-green-600 mr-4 mt-1" size={28} />
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Outsourcing Section */}
        <h2 className="text-3xl font-semibold mb-6 text-green-700">
          Outsource IVR Setup to Nimble Auity
        </h2>
        <p className="mb-6 text-gray-700">
          IVR setups benefit industries like real estate, call centers, airlines, banking, and payment processing. By outsourcing to Nimble Auity, an ISO-certified company with years of experience, you get a cost-effective and professional IVR system customized for your business.
        </p>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button className="bg-green-600 text-white hover:bg-green-700 rounded-xl px-8 py-3 text-lg shadow-md flex items-center justify-center mx-auto gap-2">
            <PhoneIncoming size={20} /> Get Your IVR Setup
          </Button>
        </div>
      </section>
    </div>
  );
};

export default IVRArticle;
