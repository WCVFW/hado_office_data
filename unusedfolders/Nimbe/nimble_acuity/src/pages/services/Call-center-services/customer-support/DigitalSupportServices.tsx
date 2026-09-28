import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Users, Video, Layers } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const DigitalSupportServices: React.FC = () => {
  const services = [
    {
      title: "Chat Support",
      desc: "Enable real-time resolution through digital chat workflows embedded with Poka-Yoke logic and response time CTQs.",
      icon: MessageCircle,
    },
    {
      title: "Customer Interaction",
      desc: "Structured interaction models aligned with VoC insights ensure measurable retention and satisfaction KPIs.",
      icon: Users,
    },
    {
      title: "Social Media Customer Service",
      desc: "Standardized escalation workflows reduce ticket backlog and enable faster resolution through CVA metrics.",
      icon: Layers,
    },
    {
      title: "Video Chat",
      desc: "Secure, real-time video chat support with CTQ-validated protocols to minimize friction in high-value interactions.",
      icon: Video,
    },
    {
      title: "Multichannel Support Services",
      desc: "Seamless support across email, chat, web, and other digital devices for consistent client experiences.",
      icon: Users,
    },
  ];

  const additionalServices = [
    "Telemarketing Services",
    "Call Quality Monitoring Support",
    "Customer Support Services",
    "Virtual Assistant Services",
  ];

  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white text-center py-20 px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Nimble Digital Customer Support Services
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-lg md:text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Deliver real-time, multi-device customer support through standardized workflows. Reduce NVA delays and improve query resolution across digital touchpoints.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow-md"
        >
          Get a Consultation
        </motion.button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Digital Customer Support Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <srv.icon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{srv.title}</h3>
              <p className="text-gray-600">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Other Services You Can Benefit From</h2>
        <div className="flex flex-wrap justify-center gap-4 text-gray-700 font-semibold">
          {additionalServices.map((srv, idx) => (
            <motion.div
              key={idx}
              className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full shadow-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              {srv}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Nimble Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Nimble for Digital Support Services?</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 max-w-3xl mx-auto">
          <li>Best Infrastructure: Quality tools, world-class offices, and uninterrupted networks.</li>
          <li>Affordable Rates: Flexible pricing modules to maximize ROI.</li>
          <li>High-quality Services: ISO-certified and Lean Six Sigma–validated service standards.</li>
          <li>Experienced Team: Qualified professionals to handle any project efficiently.</li>
          <li>Quick Turnaround: Real-time services ensuring fast response and resolution.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 max-w-3xl mx-auto">
          <li>Nimble Acuity Provided Professional Appointment Setting Services to a US-based Firm</li>
          <li>Nimble Acuity Provided Robust and Reliable Telemarketing Services to an Insurance Provider</li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Client Testimonials</h2>
        <motion.blockquote
          className="max-w-3xl mx-auto italic text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          “Nimble Acuity will have a positive effect on any company's turnover. I do not doubt that.”
        </motion.blockquote>
        <p className="mt-4 font-semibold">— Marketing Director, Insulation Company, UK</p>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white text-center py-20 px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Elevate Your Digital Customer Support with Nimble Acuity
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          From CTQ alignment to Poka-Yoke deployment, our services are engineered for quality, speed, and customer satisfaction.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow-lg"
        >
          Start a Consultation
        </motion.button>
      </section>
    </div>
  );
};

export default DigitalSupportServices;
