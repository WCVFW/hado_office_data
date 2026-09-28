import React from "react";
import { motion } from "framer-motion";
import {
  Truck,
  FileText,
  BarChart3,
  Database,
  CreditCard,
  ShieldCheck,
  Clock,
  Users,
  Building2,
} from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const RailwayLogisticsBPO: React.FC = () => {
  const services = [
    {
      title: "Freight Audit & Payment Services",
      desc: "End-to-end freight invoice management using DMAIC lifecycle, pre & post bill audits, Lean-based checklists, and Poka-Yoke controls.",
      icon: FileText,
    },
    {
      title: "Financial Planning & Analysis",
      desc: "Systematic financial reviews, ledger reconciliation, M&A support, and cash flow optimization with data-backed insights.",
      icon: BarChart3,
    },
    {
      title: "Back-office Data Management",
      desc: "Data entry, indexing, freight records, and streamlined application processing to reduce inefficiencies.",
      icon: Database,
    },
    {
      title: "Invoice Processing",
      desc: "Accurate, zero-error invoice management using VoC metrics, duplication checks, and ISO-certified quality controls.",
      icon: CreditCard,
    },
  ];

  const benefits = [
    { title: "Affordable Pricing", icon: DollarIcon },
    { title: "ISO-Certified Data Security", icon: ShieldCheck },
    { title: "Short Turnaround Time", icon: Clock },
    { title: "Experienced Team", icon: Users },
    { title: "World-class Infrastructure", icon: Building2 },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 px-6 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Outsource Railway Logistics BPO Services
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-lg md:text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Access VoC-aligned railway logistics BPO services that reduce
          inefficiencies, deliver error-proof documentation, and improve
          reliability.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-md"
        >
          Get in Touch
        </motion.button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Railway Logistics BPO Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <service.icon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us for Railway Logistics BPO?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <benefit.icon className="h-12 w-12 text-blue-700 mb-4" />
              <h3 className="text-lg font-semibold">{benefit.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <motion.blockquote
          className="max-w-3xl mx-auto italic text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          “We are delighted to partner with Outsource2india to provide
          top-quality technical help desk services. The flexibility of support
          offered by the team is greatly appreciated.”
        </motion.blockquote>
        <p className="mt-4 font-semibold">— Systems Manager, UK</p>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-blue-700 text-white">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Ready to Optimize Your Railway Logistics?
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Let’s run a Lean consultation to identify CTQ-aligned improvements
          today. Get in touch with us!
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow-lg"
        >
          Contact Us
        </motion.button>
      </section>
    </div>
  );
};

// Dummy DollarIcon since lucide-react has no direct icon named "Dollar"
const DollarIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className={`h-12 w-12 text-blue-700 mb-4 ${props.className}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 8c-1.657 0-3 .672-3 1.5S10.343 11 12 11s3 .672 3 1.5S13.657 14 12 14m0-6v12m0-12c0-1.105.672-2 1.5-2S15 4.895 15 6s-.672 2-1.5 2S12 7.105 12 6z"
    />
  </svg>
);

export default RailwayLogisticsBPO;
