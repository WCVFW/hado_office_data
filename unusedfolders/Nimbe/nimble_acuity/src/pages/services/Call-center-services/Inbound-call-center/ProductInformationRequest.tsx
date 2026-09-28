import React from "react";
import { motion } from "framer-motion";
import {
  Info,
  Phone,
  Globe,
  CheckCircle,
  ListChecks,
  Layers,
} from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const ProductInformationRequest: React.FC = () => {
  return (
    <div className="font-sans text-gray-600">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-600 text-white py-20 px-6 text-center">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Nimble Auity - Product Information Request Services
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          We help global businesses handle product inquiries with precision,
          speed, and consistency using Lean Six Sigma best practices.
        </p>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Services We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Info className="w-8 h-8 text-indigo-600" />,
              title: "Product Support",
              desc: "Handle product support & upgrade requests with error-proof workflows.",
            },
            {
              icon: <Layers className="w-8 h-8 text-indigo-600" />,
              title: "Information Services",
              desc: "Provide details about product features, services, and accessories.",
            },
            {
              icon: <CheckCircle className="w-8 h-8 text-indigo-600" />,
              title: "Warranty Guidance",
              desc: "Clear warranty & upgrade guidelines aligned with VoC-to-CTQ frameworks.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Service Process
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            "Understand product information & scope from VoC capture.",
            "Develop a quick acquaintance with product specifications.",
            "Anticipate common customer queries with expert analysis.",
            "Map catalog insights using Value Stream Mapping (VSM).",
          ].map((step, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                {i + 1}
              </div>
              <p className="text-lg">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Nimble Auity?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            "Vast experience in product services for multiple industries.",
            "Operators trained with VoC-to-CTQ frameworks for error-free support.",
            "24/7 availability with multilingual support.",
            "Cost-effective & scalable solutions with Lean Six Sigma governance.",
          ].map((point, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 bg-white shadow-md rounded-xl p-5 hover:shadow-xl transition"
              whileHover={{ scale: 1.03 }}
            >
              <ListChecks className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">{point}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
        <h2 className="text-4xl font-bold mb-6">
          Ready to streamline product information services?
        </h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Partner with Nimble Auity today and experience efficiency, accuracy,
          and customer satisfaction.
        </p>
        <button className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default ProductInformationRequest;
