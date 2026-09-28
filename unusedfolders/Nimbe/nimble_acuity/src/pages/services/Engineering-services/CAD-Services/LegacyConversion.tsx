"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function LegacyConversion() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="text-center py-16 px-6 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Nimble Legacy Conversion Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Get professional legacy conversion services to digitize your hard copy
          drawings into legacy software formats at prices starting at $10/hour.
        </motion.p>
        <Button size="lg" className="bg-white text-green-700 font-semibold">
          Contact Us
        </Button>
      </section>

      {/* Services Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Our Legacy Conversion Services
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "2D Paper Drawings to CAD",
              desc: "Convert drafts, drawings, sketches, and blueprints into CAD using hand-tracking, automation, or CAD tools.",
            },
            {
              title: "Scan/Photograph to CAD",
              desc: "Convert photos or PDFs into CAD format, supporting JPG, PNG, TIFF, and other file types.",
            },
            {
              title: "Legacy CAD File Conversion",
              desc: "Convert older CAD files to new formats like DXF and DWG with accuracy and rectifications.",
            },
            {
              title: "Raster to Vector Conversion",
              desc: "Transform raster files into 2D CAD lines (vector drawings) with automation tools and CAD software.",
            },
            {
              title: "Legacy Drawing Reformatting",
              desc: "Reformat and restyle drawings according to client specifications for consistency.",
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

      {/* Process Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Legacy Conversion Process
        </h2>
        <ol className="space-y-6">
          {[
            "Requirement Analysis – Understand client needs, define scope, timeframe, and desired format.",
            "Implementation – Review files, correct errors, and convert to desired format using latest tools.",
            "Regular Reviews – Keep clients updated and incorporate feedback during the conversion process.",
            "Quality Check – Rigorous verification to ensure accuracy and consistency.",
            "Final Delivery – Deliver completed files securely via FTP.",
          ].map((step, i) => (
            <li
              key={i}
              className="bg-white shadow-md rounded-xl p-4 border-l-4 border-green-500"
            >
              {step}
            </li>
          ))}
        </ol>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 bg-gray-50 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Other Services You Can Benefit From
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Mechanical Engineering Services",
            "Architectural Design Services",
            "Civil Engineering Services",
            "Electrical Engineering Services",
          ].map((service, i) => (
            <Card key={i} className="rounded-2xl shadow-sm hover:shadow-lg">
              <CardContent className="p-6">{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Nimble for Legacy Conversion Services?
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Affordable Rates – Short-term, hourly, or bulk conversion at competitive prices.",
            "Advanced Tools – Latest CAD software ensuring precision and reliability.",
            "Global Delivery Centers – Fast project completion without compromising quality.",
            "Data Security – ISO/IEC 27001:2022 certified, ensuring full confidentiality.",
            "Quick Turnaround – Fast delivery with highly skilled professionals.",
            "Dedicated Project Manager – Single point of contact for seamless communication.",
            "24/7 Assistance – Support across time zones and countries.",
          ].map((point, i) => (
            <Card key={i} className="rounded-2xl shadow-md hover:shadow-lg">
              <CardContent className="p-6">{point}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl shadow-md hover:shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                2D Mechanical Drawings to 3D Conversion for US Engineering Firm
              </h3>
              <p>
                Nimble converted over 1,500 2D mechanical drawings into 3D at affordable rates.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md hover:shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Piping and Instrumentation Drawings for Environmental Engineering Firm
              </h3>
              <p>
                Delivered high-quality piping, instrumentation, and schematic drawings cost-effectively.
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
                “The commitment and focus of Nimble Acuity's managers and engineers were excellent, and surpassed our expectations.”
              </p>
              <p className="font-semibold">
                — SVP and Co-Founder, Engineering Resource Company
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Digitize Your Legacy Drawings?
        </h2>
        <p className="mb-6 text-lg">
          Get accurate, error-free, and secure legacy conversions for all your CAD and architectural needs.
        </p>
        <Button
          size="lg"
          className="bg-white text-green-700 font-semibold hover:bg-gray-200"
        >
          Get Started Today
        </Button>
      </section>
    </div>
  );
}
