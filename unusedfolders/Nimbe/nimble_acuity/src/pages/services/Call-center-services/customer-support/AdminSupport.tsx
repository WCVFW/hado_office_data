import React from "react";
import { motion } from "framer-motion";
import { Book, Search, Database, CalendarCheck, Phone, Users } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const AdminSupport: React.FC = () => {
  const services = [
    {
      title: "Bookkeeping",
      desc: "Poka-Yoke safeguards and audit-ready documentation ensure reduced transaction errors and enhanced traceability.",
      icon: Book,
    },
    {
      title: "Online Research",
      desc: "DMAIC-guided research workflows ensure outputs align with business-critical value metrics.",
      icon: Search,
    },
    {
      title: "Creation and Maintenance of Your Database",
      desc: "Structured databases enable CTQ-aligned reporting and seamless cross-functional access.",
      icon: Database,
    },
    {
      title: "Schedule Appointments",
      desc: "Error-proof scheduling routines with real-time visibility reduce NVA rework and missed interactions.",
      icon: CalendarCheck,
    },
  ];

  const additionalServices = [
    "Inbound Call Center",
    "Outbound Call Center",
    "Telemarketing",
    "Customer Support Services",
  ];

  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-20 px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Nimble Administrative Support Services
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-lg md:text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Deliver exceptional customer experiences through outcome-driven admin support executed under standardized workflows.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow-md"
        >
          Contact Us
        </motion.button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Administrative Support Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        <h2 className="text-3xl font-bold text-center mb-12">Other Services You May Benefit From</h2>
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

      {/* Client Testimonials */}
      <section className="bg-blue-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Client Testimonials</h2>
        <motion.blockquote
          className="max-w-3xl mx-auto italic text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          “Nimble Acuity had a positive effect on our business operations with reliable, cost-effective administrative support. Their team is professional and efficient.”
        </motion.blockquote>
        <p className="mt-4 font-semibold">— Marketing Director, Insulation Company, UK</p>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 max-w-3xl mx-auto">
          <li>Nimble Acuity Provided Professional Appointment Setting Services to a US-based Firm</li>
          <li>Nimble Acuity Provided Robust and Reliable Telemarketing Services to an Insurance Provider</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white text-center py-20 px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Stabilize Your Operations with Nimble Administrative Support
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Leverage Lean Six Sigma–aligned admin support services to reduce rework, boost customer satisfaction, and enhance operational efficiency.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow-lg"
        >
          Get a Diagnostic Assessment
        </motion.button>
      </section>
    </div>
  );
};

export default AdminSupport;
