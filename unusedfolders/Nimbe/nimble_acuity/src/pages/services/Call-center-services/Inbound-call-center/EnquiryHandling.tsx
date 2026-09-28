import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Globe, Users, MapPin, Repeat } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const EnquiryHandling: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-teal-500 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Nimble Enquiry Handling Services
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl opacity-90">
          We are currently working with India's largest e-commerce conglomerate to onboard 4000+ sellers each month.
        </p>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <p className="text-lg mb-4">
          Customers gather, analyze, and assess their needs before making a buying decision. While most information is available online, individual enquiries require a standardized, process-driven solution. Nimble Acuity builds workflows using Lean Six Sigma controls and VoC-to-CTQ mapping for accurate, efficient enquiry handling.
        </p>
        <p className="text-lg">
          Our experts implement skilled inquiry-handling specialists within standardized workflows, bolstered by error-proofing methods (Poka-Yoke) to reduce failure points and deliver fast, reliable service.
        </p>
      </section>

      {/* Services Offered */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-12">
          Enquiry Handling Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Telephone Enquiry",
              icon: Phone,
              desc: "Agents follow standardized protocols optimized with Lean Six Sigma, ensuring consistent, verified responses with minimal automation until process is stabilized."
            },
            {
              title: "Email/Chat Enquiry",
              icon: Mail,
              desc: "Standardized online processes guarantee prompt responses, reduced NVA steps, and CTQ fulfillment based on real-time VoC feedback."
            },
            {
              title: "Web Enquiry",
              icon: Globe,
              desc: "Our team provides fast resolution for web enquiries, adhering to industry guidelines for optimal customer satisfaction."
            },
            {
              title: "Information Handling",
              icon: Users,
              desc: "Expedite delivery of technical/product information using CTQ-aligned procedures, enabling well-informed customer decisions."
            },
            {
              title: "Multi-language Voice Response",
              icon: Repeat,
              desc: "Support multilingual responses with standardized scripts, ensuring consistent service across languages."
            },
            {
              title: "Dealer, Agent, or Distributor Locator",
              icon: MapPin,
              desc: "Help customers locate dealers or distributors efficiently with structured enquiry workflows."
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
            >
              <service.icon className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-green-600">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call Center Tools & Industries */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">Call Center Software We Use</h2>
        <p className="text-center text-lg mb-6">HubSpot, Bitrix24, Talkdesk, Five9, Zendesk, Dixa, Salesforce, LiveAgent, Avaya</p>
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">Industries We Cater To</h2>
        <p className="text-center text-lg">
          Aerospace, Agriculture, Automotive, Customs Brokerage, Defense, Energy, Education, Entertainment, Finance, Food, Healthcare, Hospitality, IT, Logistics, Manufacturing, Multimedia, Public Sector, Pharmaceutical, Retail & eCommerce, Telecommunications, Insurance, Legal, Real Estate
        </p>
      </section>

      {/* Enquiry Handling Process */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
          Our Enquiry Handling Services Process
        </h2>
        {[
          { step: "01. Listen and Understand", desc: "Inquiries are categorized at intake using CTQ-aligned characteristics for precise routing." },
          { step: "02. Analyze Enquiry", desc: "Statistical root cause analysis is applied for recurring questions prompting further research." },
          { step: "03. Offer Solution", desc: "Solutions are suggested using decision trees integrated into standardized workflows." },
          { step: "04. Execute Solution", desc: "Immediate resolutions are implemented; complex requests are forwarded to experts." },
          { step: "05. Follow Up", desc: "Each enquiry is meticulously followed up to ensure customer satisfaction." },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-green-50 p-6 rounded-xl mb-6 shadow"
          >
            <h3 className="text-xl font-bold text-green-700 mb-2">{item.step}</h3>
            <p className="text-gray-700">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Why Choose Nimble */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-12">Why Choose Nimble Acuity for Enquiry Handling?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Flexible Pricing Options", desc: "Choose a pricing model tuned to NVA elimination and adjusted for enquiry complexity." },
            { title: "100% Information Security", desc: "ISO/IEC 27001:2022 certified company ensures secure handling of sensitive data." },
            { title: "State-of-the-art Infrastructure", desc: "Lean-aligned platforms with performance dashboards for efficient delivery." },
            { title: "High Quality", desc: "Methodical follow-ups and quick resolution for the best enquiry experience." },
            { title: "Multilingual Language Support", desc: "Standardized multilingual workflows ensure consistent service across languages." },
            { title: "24/7 Availability", desc: "Executives are available round-the-clock across different time zones." },
            { title: "Experienced Team", desc: "27 years of expertise, with 200+ support executives and 100+ man-years management experience." },
            { title: "Detailed Monthly Reports", desc: "Comprehensive reports to improve business strategy and marketing campaigns." },
            { title: "Ease of Scalability", desc: "Resource competence and infrastructure allow scaling without extra obligations." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-green-600 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-12">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Customer Support Services for Online Medication Retailer",
              desc: "Nimble Acuity helped an online medication retailer save 40% in costs while providing efficient customer support."
            },
          ].map((story, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h3 className="text-xl font-semibold text-green-600 mb-2">{story.title}</h3>
              <p className="text-gray-600">{story.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-8">Customer Testimonials</h2>
        <p className="max-w-3xl mx-auto text-lg italic text-gray-700">
          "I concur that we have used Nimble Acuity Call Center services, during which they provided excellent support in marketing, data research, lead generation, and customer service."
        </p>
        <p className="mt-4 font-semibold">Spokesperson, Online Advertising Company, Amsterdam, Netherlands</p>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6 bg-green-600 text-white">
        <h2 className="text-3xl font-bold mb-6">Outsource Your Enquiry Handling to Nimble Acuity</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Get precise, timely, and reliable enquiry handling services with CTQ-aligned workflows, and boost customer confidence while maximizing efficiency.
        </p>
        <button className="bg-white text-green-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-50 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default EnquiryHandling;
