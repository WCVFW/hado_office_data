import React from "react";
import { motion } from "framer-motion";
import { Shield, Wallet, Blocks, FileCheck, Cpu, Users } from "lucide-react";
import DSMainMenu from "../mainmenu";

const BlockchainDevelopmentPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Nimble Blockchain Development Services
        </motion.h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg">
          Get fabulous blockchain software products developed by people who
          have two decades of experience in blockchain development. Get our
          services at unbeatable rates.
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          className="mt-8 inline-block bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold shadow-lg"
        >
          Get a Free Quote
        </motion.a>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Blockchain Development Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Wallet,
              title: "Crypto Wallet Development",
              desc: "Secure wallet development with robust encryption, asset repositories, and seamless cryptocurrency transfers.",
            },
            {
              icon: Shield,
              title: "Private Blockchain Development",
              desc: "Highly secure members-only blockchain networks with document validation, payments, and fraud protection.",
            },
            {
              icon: Blocks,
              title: "Hyperledger Development",
              desc: "Expertise in Hyperledger Fabric & Sawtooth for supply chain, operations management, and freight tracking.",
            },
            {
              icon: Cpu,
              title: "Decentralized Application Development",
              desc: "Advanced and scalable DApps for payments, authentication, data storage, and peer-to-peer networking.",
            },
            {
              icon: FileCheck,
              title: "Smart Contract Services",
              desc: "Tamper-resistant contracts with automated enforcement for fast, secure, and dependable business agreements.",
            },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg"
            >
              <service.icon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 bg-gray-100 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Blockchain Development Process
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {[
            "Knowing Client Requirements and Design",
            "Identifying Appropriate Platform for Development",
            "Implementing Design and Functionality",
            "Upgrading the Application",
            "Testing the Application",
            "Deployment",
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="flex items-start gap-4 bg-white p-5 rounded-xl shadow"
            >
              <div className="text-blue-600 font-bold text-lg">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <p className="text-gray-700">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us as Your Blockchain Partner?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "High Data Security",
            "ISO Certified Quality",
            "Affordable Pricing Options",
            "Excellent Infrastructure",
            "Experienced Blockchain Developers",
            "Single Point of Contact",
            "Quick Turnaround Time",
            "24/7 Availability",
            "Scalable Workforce",
          ].map((perk, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md"
            >
              <Users className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="text-lg font-semibold">{perk}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">
              Case Study: JukeBaux Music App
            </h3>
            <p className="text-gray-600">
              Delivered a high-performing music app to download songs from
              popular services like Apple Music & Spotify.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">
              Case Study: E-commerce Platform
            </h3>
            <p className="text-gray-600">
              Developed a secure e-commerce platform for deal-making, selling,
              and online auctioning.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Build Your Blockchain Solution?
        </h2>
        <p className="mt-4 text-lg">
          Contact us today to Nimble your blockchain development
          requirements.
        </p>
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="mt-8 inline-block bg-white text-purple-700 px-6 py-3 rounded-xl font-semibold shadow-lg"
        >
          Get Started
        </motion.a>
      </section>
    </div>
  );
};

export default BlockchainDevelopmentPage;
