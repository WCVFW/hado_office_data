import React from "react";
import { motion } from "framer-motion";
import { Headset, Phone, HelpCircle, Mail, UserPlus } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const CSRServices: React.FC = () => {
  const services = [
    {
      title: "Customer Support",
      desc: "Poka-Yoke-enabled workflows reduce response errors and maintain compliance, ensuring consistent satisfaction.",
      icon: Headset,
    },
    {
      title: "Phone Answering",
      desc: "SOP-based phone answering services with scripts calibrated to customer expectations, improving brand visibility.",
      icon: Phone,
    },
    {
      title: "Helpdesk Support",
      desc: "Flexible helpdesk services boost engagement, build loyalty, and benefit your business long-term.",
      icon: HelpCircle,
    },
    {
      title: "Email Support",
      desc: "Professional email support for clients to ensure prompt, consistent, and quality responses.",
      icon: Mail,
    },
    {
      title: "Cold Calling",
      desc: "Efficient and reliable cold calling solutions to engage new prospects effectively.",
      icon: UserPlus,
    },
  ];

  const additionalServices = [
    "Inbound Call Center",
    "Outbound Call Center",
    "Telemarketing",
    "Lead Generation Services",
  ];

  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white text-center py-20 px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Nimble Customer Service Representative (CSR) Services
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-lg md:text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Improve your call center with world-class CSR services optimized with CTQ-aligned, error-proofed solutions.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold shadow-md"
        >
          Contact Our Experts
        </motion.button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Customer Service Representative Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <srv.icon className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{srv.title}</h3>
              <p className="text-gray-600">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Other Services You May Benefit From</h2>
        <div className="flex flex-wrap justify-center gap-4 text-gray-700 font-semibold">
          {additionalServices.map((srv, idx) => (
            <motion.div
              key={idx}
              className="bg-green-50 text-green-700 px-4 py-2 rounded-full shadow-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              {srv}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 max-w-3xl mx-auto">
          <li>Nimble Acuity Provided Appointment Setting Services Increased Sales for Charlotte-based Business</li>
          <li>Nimble Acuity Provided Inbound Customer Support Services to an Israel-based Gaming Start-up</li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Client Testimonials</h2>
        <motion.blockquote
          className="max-w-3xl mx-auto italic text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          “Efforts from Nimble Acuity have been a major factor in our successful relationship. They help us do verification calls and follow up with customers efficiently.”
        </motion.blockquote>
        <p className="mt-4 font-semibold">— CEO, Energy Equipment & Solutions, Kitchener, Ontario, CA</p>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white text-center py-20 px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Elevate Your Call Center Operations with Nimble CSR Services
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Our CTQ-aligned CSR solutions eliminate NVA tasks, reduce errors, and provide standardized service across your customer interactions.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold shadow-lg"
        >
          Get a Customized Solution
        </motion.button>
      </section>
    </div>
  );
};

export default CSRServices;
