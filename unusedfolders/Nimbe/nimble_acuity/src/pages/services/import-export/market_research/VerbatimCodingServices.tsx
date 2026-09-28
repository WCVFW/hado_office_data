import React from "react";
import { CheckCircle, Globe, Users, Clock, Shield, Layers, Zap, Headphones } from "lucide-react";
import NavigationMenu from "../MegaMenu";

export default function VerbatimCodingServices() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Nimble Verbatim Coding Services</h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Get access to actionable insights from client responses by choosing our verbatim coding services from an experienced team — at prices starting at just <span className="font-semibold">$14 an hour</span>.
        </p>
        <button className="bg-white text-blue-700 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>

      {/* Services Offered */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Verbatim Coding Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Response Analysis",
              desc: "Accurate response analysis by coding open-ended customer responses using advanced tools.",
            },
            {
              title: "Deriving Insights",
              desc: "Transform raw responses into meaningful insights for better decision-making.",
            },
            {
              title: "Multilingual Coding",
              desc: "Quality verbatim coding in multiple languages with quick turnaround times.",
            },
            {
              title: "Response Interpretation",
              desc: "Accurate interpretation of responses from doctors, patients, and specialists.",
            },
          ].map((service, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Nimble Acuity for Verbatim Coding Services?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <Layers />, title: "Flexible Pricing", desc: "Budget-friendly and scalable options to fit your needs." },
            { icon: <Shield />, title: "Information Security", desc: "ISO/IEC 27001:2022 certified for strict data security." },
            { icon: <Users />, title: "Experienced Team", desc: "Skilled market research experts delivering error-free services." },
            { icon: <CheckCircle />, title: "High-Quality Services", desc: "ISO-certified firm ensuring top-quality, flawless outputs." },
            { icon: <Zap />, title: "Quick Turnaround", desc: "Global delivery centers for fast project completion." },
            { icon: <Headphones />, title: "24/7 Support", desc: "Round-the-clock assistance via phone and email." },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
              <div className="text-blue-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Secondary Research for a Swiss Hospitality Company",
              desc: "Provided quick turnaround secondary research services to a leading Swiss hospitality provider.",
            },
            {
              title: "Updating KOL List for US Healthcare Giant",
              desc: "Helped an American healthcare firm update their KOL list cost-effectively.",
            },
          ].map((story, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">{story.title}</h3>
              <p className="text-gray-600 text-sm">{story.desc}</p>
              <button className="mt-4 text-blue-600 font-medium hover:underline">Read More</button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
        <p className="max-w-3xl mx-auto text-lg italic mb-6">
          "We have carefully reviewed your documents and are suitably impressed with the meticulous details with which you are conducting your audits to ensure exceptionally high quality for the extracted data delivered."
        </p>
        <p className="font-semibold">VP, Leading STM Publisher, USA</p>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Nimble Verbatim Coding Services to Nimble Acuity</h2>
        <p className="text-gray-700 mb-8">
          With over two decades of expertise, Nimble Acuity delivers accurate, multilingual, and insight-driven verbatim coding services using the latest tools and methodologies. Partner with us to ensure cost-effective, scalable, and secure solutions.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-semibold shadow hover:bg-blue-700 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
}
