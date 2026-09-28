import React from "react";
import { motion } from "framer-motion";
import {
  PhoneCall,
  MessageSquare,
  Mail,
  Smartphone,
  Globe2,
  CheckCircle2,
  Star,
} from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const OmnichannelContactCenter: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="relative bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Outsource Omnichannel Contact Center Services
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl opacity-90">
          Let your customers reach you via phone, email, chat, social media, or
          mobile — anytime, anywhere. Starting at just{" "}
          <span className="font-bold">$8/hour</span>.
        </p>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-3xl font-bold mb-4 text-indigo-700">
            Engage Customers Across All Channels
          </h2>
          <p className="text-gray-600 mb-4">
            O2I helps you interact with customers consistently across phone,
            chat, email, apps, and social media. With VoC-to-CTQ mapping, we
            ensure long-term retention, measurable satisfaction, and smooth
            customer journeys.
          </p>
          <ul className="space-y-3">
            {[
              "25+ years of global contact center expertise",
              "ISO-certified with Lean Six Sigma governance",
              "24/7 multilingual omnichannel availability",
              "Proven track record in boosting customer retention",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="text-green-500" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="bg-white shadow-xl rounded-2xl p-8"
        >
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">
            Why Omnichannel?
          </h3>
          <p className="text-gray-600 mb-2">
            Customers expect support wherever they are — whether on their
            smartphone, inbox, or social feed. Omnichannel contact centers
            empower your brand to stay connected, responsive, and consistent
            across all touchpoints.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12">
          Omnichannel Services We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Phone Services", icon: PhoneCall },
            { title: "Chat Services", icon: MessageSquare },
            { title: "IVR Support", icon: PhoneCall },
            { title: "Email Support", icon: Mail },
            { title: "Mobile App Support", icon: Smartphone },
            { title: "Social Media Support", icon: Globe2 },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition"
            >
              <service.icon className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-indigo-600">
                {service.title}
              </h3>
              <p className="text-gray-600">
                High-quality, real-time, and reliable support customized for
                your business.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-12">
          Why Outsource to O2I?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Affordable Pricing",
              desc: "Flexible, cost-effective models backed by Lean Six Sigma analysis.",
            },
            {
              title: "ISO-Certified Quality",
              desc: "Our structured DMAIC methodology ensures consistency and excellence.",
            },
            {
              title: "Modern Infrastructure",
              desc: "Cutting-edge technology to manage global omnichannel operations.",
            },
            {
              title: "Experienced Team",
              desc: "25+ years of expertise with proven global success stories.",
            },
            {
              title: "Data Security",
              desc: "Fully compliant with international standards for data protection.",
            },
            {
              title: "Quick Turnaround",
              desc: "Always on time, always reliable with minimal turnaround delays.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="bg-indigo-50 rounded-xl p-6 shadow"
            >
              <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-indigo-700 text-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-3xl mx-auto bg-white text-gray-800 p-8 rounded-2xl shadow-xl"
        >
          <p className="italic mb-4">
            "Outsource2india has become a highly valuable resource for our
            company. They are meticulous, attentive, and deliver results much
            earlier than expected."
          </p>
          <div className="flex items-center gap-3">
            <Star className="text-yellow-400" />
            <span className="font-semibold">
              General Partner, Manufacturing Company (US)
            </span>
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 px-6">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">
          Ready to Upgrade Customer Experience?
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          Partner with O2I for omnichannel contact center services that ensure
          consistency, customer delight, and long-term retention.
        </p>
        <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default OmnichannelContactCenter;
