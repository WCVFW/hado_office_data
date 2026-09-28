import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import CCmainmenu from "../CCmainmenu";

const MultiChannelContactCenter: React.FC = () => {
  const services = [
    {
      title: "Video Chat Support",
      description:
        "VoC-to-CTQ aligned video chat interactions with real-time tracking and continuous improvement.",
    },
    {
      title: "Social Media Customer Support",
      description:
        "DMAIC-driven workflows ensuring consistency across Facebook, Twitter, and other platforms.",
    },
    {
      title: "Phone Support",
      description:
        "SLA-governed phone interactions with real-time dashboards to reduce resolution cycle time.",
    },
    {
      title: "Outbound Contact Center",
      description:
        "Process-mapped outbound calls aligned with CTQs for measurable campaign success.",
    },
    {
      title: "Inbound Contact Center",
      description:
        "Error-proofed call routing improves first-call resolution and customer satisfaction.",
    },
    {
      title: "Email Support",
      description:
        "Automation & structured templates ensure faster, compliant, and CTQ-driven responses.",
    },
    {
      title: "Chat Support",
      description:
        "Personalized live chat aligned with customer journeys & analytics-based refinement.",
    },
    {
      title: "Offline Customer Support",
      description:
        "Face-to-face audits, resource tracking, and structured post-interaction feedback.",
    },
  ];

  const benefits = [
    "Collect customer behavior and preference data",
    "Enhanced satisfaction & loyalty leading to better ROI",
    "CRM integration and improved flexibility",
    "Higher efficiency across multiple touchpoints",
    "Instant replies and quick resolutions",
    "Valuable insights from interaction history",
    "Competitive advantage with swift responses",
    "Reduced contact center costs",
  ];

  const whyChooseUs = [
    "Cost-effective prices with quick turnaround",
    "World-class training programs for agents",
    "Tailored services aligned with business needs",
    "Young & experienced dynamic team",
    "Strict confidentiality & data security policies",
    "Latest call center tools & infrastructure",
    "Multilingual & multicultural engagement",
    "Higher customer satisfaction with faster resolutions",
  ];

  return (
    <div className="px-6 py-14 space-y-14 bg-gradient-to-b from-white via-gray-50 to-blue-50">
      {/* Hero Section */}
      <CCmainmenu/>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
          Multi-channel Contact Center Services
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Evolve with customer expectations through a CTQ-driven omnichannel
          model. Our DMAIC workflows ensure seamless, real-time support across
          phone, video, chat, email, and social platforms.
        </p>
      </motion.section>

      {/* Services Section */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-10">
          Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="shadow-lg hover:shadow-2xl rounded-2xl border-0 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-blue-700">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-3">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Invest in Multi-channel Contact Center?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="flex items-start space-x-3"
            >
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
              <span className="text-gray-700">{point}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose O2I?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {whyChooseUs.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="flex items-start space-x-3"
            >
              <CheckCircle className="w-6 h-6 text-blue-600 mt-1" />
              <span className="text-gray-700">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.section
        whileHover={{ scale: 1.02 }}
        className="text-center py-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-xl text-white"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Outsource Multi-channel Contact Center Services to Us
        </h2>
        <p className="max-w-3xl mx-auto mb-8 text-lg leading-relaxed">
          With 20+ years of expertise, Outsource2india delivers scalable,
          efficient, and cost-effective multi-channel support solutions. We
          centralize your operations, enhance ROI, and provide full transparency.
        </p>
        <button className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-full shadow-md hover:bg-gray-100 transition">
          📩 Contact Us
        </button>
      </motion.section>
    </div>
  );
};

export default MultiChannelContactCenter;
