import React from "react";
import { motion } from "framer-motion";
import { Users, Calendar, FileText, BarChart2, MessageCircle, CheckCircle, Globe2 } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const PreSalesSupport: React.FC = () => {
  const services = [
    {
      title: "Lead Generation Support",
      desc: "Targeted prospect identification using AI, data enrichment, and campaign intelligence for reliable high-intent leads.",
      icon: Users,
    },
    {
      title: "Inquiry Handling Support",
      desc: "Omnichannel inquiry management with scalable personalized responses and analytics for improved sales.",
      icon: MessageCircle,
    },
    {
      title: "Appointment Handling Support",
      desc: "Calendar integration, follow-ups, and optimized prospect scheduling for global time zones.",
      icon: Calendar,
    },
    {
      title: "Knowledge Support",
      desc: "Competitor benchmarking, sales collateral, training materials, and documentation for informed engagement.",
      icon: FileText,
    },
    {
      title: "Sales Collateral Customization",
      desc: "Industry-specific adaptation, branding alignment, and localized content to enhance sales effectiveness.",
      icon: CheckCircle,
    },
    {
      title: "Pre-Sales Qualification Support",
      desc: "Multi-tier lead scoring, technical/compliance vetting, and CRM integration for real-time tracking.",
      icon: BarChart2,
    },
    {
      title: "Pricing and Quote Configuration Assistance",
      desc: "Configurable pricing, product bundling, and discount control to maximize profitability.",
      icon: FileText,
    },
    {
      title: "Outreach Campaign Execution Support",
      desc: "Segmentation, multi-channel engagement, and performance analytics for effective campaigns.",
      icon: Globe2,
    },
  ];

  const additionalServices = [
    "Technical Support Call Center Services",
    "eCommerce Customer Support Services",
    "Monitoring Support Services",
    "Virtual Assistant Services",
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
          Nimble Pre-sales Support Services
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-lg md:text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Increase your sales pipeline with expert-led pre-sales support services and accelerate conversions with actionable insights.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold shadow-md"
        >
          Contact Us
        </motion.button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Premium Pre-sales Support Services We Provide</h2>
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

      {/* Client Testimonials */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Client Testimonials</h2>
        <motion.blockquote
          className="max-w-3xl mx-auto italic text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          “I highly recommend Nimble Acuity. Their pre-sales team is professional, thorough, and proactive, helping us streamline campaigns and improve results.”
        </motion.blockquote>
        <p className="mt-4 font-semibold">— Chief Operating Officer, Drug and Alcohol Testing Company, Texas</p>
      </section>

      {/* Case Studies / Client Success Stories */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 max-w-3xl mx-auto">
          <li>Nimble Acuity Delivered Cold Calling and Appointment Setting Services to a Serial US-based Entrepreneur</li>
          <li>Nimble Acuity Provided Call Center Services to a Healthcare Provider in the USA</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white text-center py-20 px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Accelerate Sales Growth with Nimble Pre-sales Support
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Streamline your pre-sales workflows, enhance lead quality, and ensure consistent sales pipeline performance with our expert services.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold shadow-lg"
        >
          Get a Custom Quote
        </motion.button>
      </section>
    </div>
  );
};

export default PreSalesSupport;
