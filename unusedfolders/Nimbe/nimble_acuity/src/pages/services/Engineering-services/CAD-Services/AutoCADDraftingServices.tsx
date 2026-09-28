"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function AutoCADDraftingServices() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="text-center py-16 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Innovative AutoCAD Drafting Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-3xl mx-auto text-lg md:text-xl mb-8"
        >
          Leverage precision with our advanced AutoCAD drafting services! Partner
          with <span className="font-semibold">Nimble Acuity</span> to accelerate
          projects with streamlined design and faster turnarounds.
        </motion.p>
        <Button className="bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:scale-105 transition">
          Request a Quote
        </Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Expert AutoCAD Drafting Services
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Architectural AutoCAD Drafting",
              desc: "Precise elevations, sections, and site plans converted into detailed drafts for architects, contractors, and developers.",
            },
            {
              title: "Mechanical AutoCAD Drafting",
              desc: "Shop drawings & MEP layouts for precision engineering and streamlined production.",
            },
            {
              title: "Structural AutoCAD Drafting",
              desc: "2D layouts, reinforcement details, and fabrication drawings supporting efficient construction.",
            },
            {
              title: "Electrical AutoCAD Drafting",
              desc: "Circuit diagrams, wiring layouts, panel designs, and routing plans crafted with precision.",
            },
            {
              title: "Civil AutoCAD Drafting",
              desc: "Infrastructure blueprints and 3D models for better planning and collaboration.",
            },
            {
              title: "CAD Conversion Services",
              desc: "Transform PDFs, scans, sketches, or legacy CAD files into detailed AutoCAD designs.",
            },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-2xl transition hover:scale-[1.02] rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-blue-600">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Streamlined Process Flow
        </h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            "Consultation & Project Scoping",
            "Drafting & Modeling",
            "Review & Revision",
            "Final Delivery",
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                Step {i + 1}
              </h3>
              <p className="text-gray-600">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title:
                "PVC Clad Structure Drafting for a UK-based Engineering Firm",
              desc: "Delivered precise AutoCAD drafts to support engineering requirements.",
            },
            {
              title:
                "AutoCAD Drafting for US Non-Skid Deck Manufacturer",
              desc: "30 unique drafts completed in two weeks, enhancing productivity.",
            },
          ].map((caseStudy, idx) => (
            <Card
              key={idx}
              className="rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <CardHeader>
                <CardTitle className="text-lg text-blue-600">
                  {caseStudy.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{caseStudy.desc}</p>
                <Button
                  variant="outline"
                  className="mt-4 rounded-full hover:bg-blue-600 hover:text-white"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="max-w-3xl mx-auto">
          <Card className="p-6 rounded-2xl shadow-lg">
            <p className="text-lg italic text-gray-700 mb-4">
              “Nimble Acuity has been a tremendous resource for our engineering
              department. They are precise, attentive, and quick learners of our
              procedures.”
            </p>
            <p className="font-semibold text-right">
              – General Partner, US Manufacturing Firm
            </p>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Designs?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Partner with Nimble Acuity for precision AutoCAD drafting services.
          Share your project details, and let’s build extraordinary designs together.
        </p>
        <Button className="bg-white text-blue-600 font-semibold rounded-full px-6 py-3 hover:scale-105 transition">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
