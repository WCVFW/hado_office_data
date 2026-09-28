"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function AutoCADConversion() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="text-center py-16 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Nimble Acuity AutoCAD to CAD Conversion Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          We deliver compatible and dimensionally accurate CAD designs at the
          shortest TATs and low costs. Upgrade your design projects now with our
          top-notch AutoCAD to CAD conversion services.
        </motion.p>
        <Button size="lg" className="bg-white text-indigo-600 font-semibold">
          Contact Us
        </Button>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Why Choose Nimble for AutoCAD to CAD Conversion?
        </h2>
        <p className="mb-4 text-gray-700">
          The challenges associated with AutoCAD to CAD conversion can be
          daunting for businesses and professionals alike. Technical obstacles
          such as compatibility issues, data loss, accuracy, and handling
          complex geometries can hinder the smooth transition from AutoCAD to
          the desired CAD format...
        </p>
        <p className="text-gray-700">
          Nimble Acuity’s CAD professionals bring 26+ years of industry
          experience. We ensure geometry validation, dimensional accuracy, and
          compliance with GD&T and manufacturing standards while delivering
          cost-efficient and scalable CAD conversion services.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Our AutoCAD Conversion Services
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: "AutoCAD to MicroStation Conversion",
              desc: "Enhance collaboration by converting your AutoCAD files to MicroStation...",
            },
            {
              title: "AutoCAD to PDF Conversion",
              desc: "Get the most accurate conversion containing impeccable lines, merge support...",
            },
            {
              title: "AutoCAD 2D to 3D Conversion",
              desc: "Transform your 2D AutoCAD drawings into 3D models for immersive design...",
            },
            {
              title: "AutoCAD to SolidWorks Conversion",
              desc: "Facilitate your transition to SolidWorks with precise parametric models...",
            },
            {
              title: "PDF to DWG Conversion",
              desc: "Seamless conversion of PDF files to DWG format for easy modifications...",
            },
            {
              title: "CAD to Revit Conversion",
              desc: "Convert CAD drawings into intelligent Revit models for better visualization...",
            },
            {
              title: "Paper to CAD Conversion",
              desc: "Transform documents, sketches, and raster images into structured CAD files...",
            },
            {
              title: "Scan to CAD Conversion",
              desc: "Convert scanned images into editable CAD files for structural updates...",
            },
            {
              title: "CAD Vectorization Services",
              desc: "Convert raster images into vector format for easy editing and scalability...",
            },
            {
              title: "CAD Digitization Services",
              desc: "Deliver CAD to BIM conversions, 2D/3D models, drafting, and more...",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="hover:shadow-lg transition rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          AutoCAD Conversion Process
        </h2>
        <ol className="space-y-6">
          {[
            "Project Initiation – Client provides AutoCAD files.",
            "File Analysis – Understanding complexity and requirements.",
            "Conversion Strategy – Tailored approach to meet specifications.",
            "AutoCAD to CAD Conversion – Using the latest tools with integrity.",
            "Quality Assurance – Rigorous accuracy checks.",
            "Delivery & Support – Final files delivered with ongoing support.",
          ].map((step, i) => (
            <li
              key={i}
              className="bg-white shadow-md rounded-xl p-4 border-l-4 border-indigo-500"
            >
              {step}
            </li>
          ))}
        </ol>
      </section>

      {/* Why Us */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Sets Nimble Acuity Apart?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Quality Assurance with ISO standards.",
            "Data Security & GDPR compliance.",
            "Scalable conversion support.",
            "Expert engineering team.",
            "Timely delivery with multi-level follow-ups.",
            "Global delivery centers.",
            "Strategic partnership approach.",
            "Tailored pricing for each client.",
          ].map((point, i) => (
            <Card key={i} className="rounded-2xl shadow-sm hover:shadow-lg">
              <CardContent className="p-6">{point}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl shadow-md hover:shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Nimble Acuity Helped a Leading Interior Design Company
              </h3>
              <p>
                Provided full-fledged AutoCAD conversion services for a
                US-based interior design firm.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md hover:shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Provided AutoCAD Detailing for a Top Toronto-based MNC
              </h3>
              <p>
                Delivered 75+ designs weekly in AutoCAD, SolidWorks, and CNC
                formats with precision and speed.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
        <div className="max-w-3xl mx-auto">
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 text-center">
              <p className="italic text-gray-700 mb-4">
                “Nimble Acuity has been a tremendous resource for our
                engineering department. They are precise, attentive, and quick
                to adapt to our processes.”
              </p>
              <p className="font-semibold">— General Partner, US Manufacturing Company</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Optimize Your CAD Workflows?
        </h2>
        <p className="mb-6 text-lg">
          Stop letting technical challenges hold you back. Partner with Nimble
          Acuity for reliable AutoCAD to CAD conversion services.
        </p>
        <Button
          size="lg"
          className="bg-white text-indigo-700 font-semibold hover:bg-gray-200"
        >
          Get Started Today
        </Button>
      </section>
    </div>
  );
}
