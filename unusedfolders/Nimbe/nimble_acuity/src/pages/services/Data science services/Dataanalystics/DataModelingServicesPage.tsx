import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Database, Users, Shield, Clock, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DSMainMenu from "../mainmenu";

const DataModelingServicesPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-4xl font-bold text-gray-900 mb-6"
        >
          Nimble Data Modeling Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="max-w-3xl mx-auto text-lg text-gray-700"
        >
          Get access to consistent and simplified data for your business by outsourcing
          data modeling services to our team of data analysts.
        </motion.p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-3xl font-bold text-center mb-12"
        >
          Data Modeling Services We Offer
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Development Services", desc: "High-quality data model development and knowledge transfer." },
            { title: "Mentoring Services", desc: "Accurate advice and error-free guidance on data modeling." },
            { title: "Quality Check Services", desc: "Thorough review and industry best practices for improvement." },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
            >
              <Card className="shadow-lg rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-gray-50 py-16 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-3xl font-bold text-center mb-12"
        >
          Why Choose Nimble Acuity for Data Modeling Services?
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { icon: <CheckCircle className="w-8 h-8 text-blue-600" />, title: "Affordable Pricing", desc: "Cost-effective options tailored to your needs." },
            { icon: <Shield className="w-8 h-8 text-blue-600" />, title: "Information Security", desc: "ISO/IEC 27001:2022 certified organization." },
            { icon: <Database className="w-8 h-8 text-blue-600" />, title: "High-Quality Services", desc: "ISO certified processes and rigorous checks." },
            { icon: <Users className="w-8 h-8 text-blue-600" />, title: "Experienced Experts", desc: "Skilled professionals trained on the latest tools." },
            { icon: <Clock className="w-8 h-8 text-blue-600" />, title: "Faster Turnaround", desc: "Multiple delivery centers ensure quick output." },
            { icon: <Headphones className="w-8 h-8 text-blue-600" />, title: "24/7 Support", desc: "Round-the-clock assistance for all clients." },
          ].map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
              className="bg-white shadow-md rounded-2xl p-6"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-3xl font-bold text-center mb-12"
        >
          Client Success Stories
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Document Processing Automation",
              desc: "We created a big data platform for a banking firm to automate document processing.",
              link: "#",
            },
            {
              title: "Open Source Analytics Workbench",
              desc: "We designed an analytics platform for a finance provider for structured and unstructured data.",
              link: "#",
            },
          ].map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
              className="bg-gray-50 rounded-2xl p-6 shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
              <p className="text-gray-600 mb-4">{story.desc}</p>
              <Button variant="link" className="text-blue-600 p-0">
                Read Case Study →
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-3xl font-bold mb-6"
        >
          Nimble Data Modeling Services to Nimble Acuity
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="max-w-2xl mx-auto text-lg mb-8"
        >
          Partner with our skilled experts for reliable, cost-effective, and scalable
          data modeling solutions tailored to your business needs.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          <Button size="lg" className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl shadow-lg">
            Get in Touch
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default DataModelingServicesPage;
