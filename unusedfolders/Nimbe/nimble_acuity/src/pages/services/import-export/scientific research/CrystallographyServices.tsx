import React from "react";
import { CheckCircle, Star, Shield, Clock, Users, Cpu } from "lucide-react";
import NavigationMenu from "../MegaMenu";

export default function CrystallographyServices() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Crystallography Research Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          High-resolution structure determination using X-ray crystallography and
          protein crystallization to support integrated and stand-alone drug discovery projects.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Crystallography Research Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="p-6 border rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">X-ray Crystallography</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Scaled and merged diffraction data</li>
              <li>Electron density maps</li>
              <li>Complete atomic coordinates</li>
              <li>Ligand binding analysis</li>
              <li>Structure interpretation</li>
              <li>Advice on medicinal chemistry design</li>
            </ul>
          </div>
          <div className="p-6 border rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Protein Crystallization</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Screening with known ligands</li>
              <li>Robotic nanoliter-scale screening and imaging</li>
              <li>Co-crystallization or soaking of ligands</li>
              <li>Automated optimization for crystal growth</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Why Nimble Crystallography Research Services to Nimble Acuity?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Cpu className="w-8 h-8 text-blue-600" />,
              title: "World-class Infrastructure",
              desc: "State-of-the-art labs, robust network, and advanced crystallography tools.",
            },
            {
              icon: <Star className="w-8 h-8 text-blue-600" />,
              title: "High-quality Services",
              desc: "Cutting-edge tools and technologies for superior crystallography research.",
            },
            {
              icon: <Clock className="w-8 h-8 text-blue-600" />,
              title: "Quick Turnaround",
              desc: "Streamlined processes for faster delivery without compromising quality.",
            },
            {
              icon: <Users className="w-8 h-8 text-blue-600" />,
              title: "Experienced Team",
              desc: "Highly experienced experts handling complex crystallography projects.",
            },
            {
              icon: <Shield className="w-8 h-8 text-blue-600" />,
              title: "Data Security",
              desc: "ISO/IEC 27001:2022 ISMS-certified with strict NDA protocols.",
            },
            {
              icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
              title: "Affordable Pricing",
              desc: "Flexible, competitive pricing models for global clients.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border rounded-2xl shadow-sm text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Customer Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-6 border rounded-2xl shadow-sm">
            <h3 className="font-semibold mb-2">
              Patient Dashboard Creation for a Pharmaceutical Firm
            </h3>
            <p className="text-gray-600 text-sm">
              Nimble Acuity developed a patient dashboard by analyzing treatment duration,
              hospital count, and location preferences for better decision-making.
            </p>
          </div>
          <div className="p-6 border rounded-2xl shadow-sm">
            <h3 className="font-semibold mb-2">
              Market Research Survey for UK Pharmaceutical Firm
            </h3>
            <p className="text-gray-600 text-sm">
              Nimble Acuity delivered research assistance for a 70-year-old UK-based pharma
              company to conduct targeted campaigns in 50+ busiest airports.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Testimonials</h2>
        <blockquote className="max-w-2xl mx-auto text-lg italic text-gray-600">
          “Let me thank you for the professional way in which you are managing the
          project and meeting our deadlines. Unfortunately, our second supplier
          let us down considerably.”
        </blockquote>
        <p className="mt-4 font-semibold text-gray-700">
          CEO, Technology Company, UK
        </p>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Crystallography Research Services to Nimble Acuity
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          From startups to global brands, our expert crystallography team is
          ready to deliver high-quality, reliable, and secure research services.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
}
