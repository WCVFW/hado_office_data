"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function MatterportToCAD() {
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
          Nimble Matterport to CAD Conversion Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Avail accurate, professional, and high-quality Matterport to CAD
          conversion services at prices starting at $12/hour. Transform your
          3D scans into precise CAD files for design, modeling, and remodeling.
        </motion.p>
        <Button size="lg" className="bg-white text-indigo-600 font-semibold">
          Contact Us
        </Button>
      </section>

      {/* Services Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Our Matterport to CAD Conversion Services
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Mesh Cleanup Services",
              desc: "Convert Matterport mesh into clean CAD files quickly and accurately.",
            },
            {
              title: "Space Remodeling Services",
              desc: "Remodel your spaces by converting Matterport scans to editable CAD files.",
            },
            {
              title: "Interior Staging Services",
              desc: "Use CAD files for furniture placement, decorating, and interior staging.",
            },
            {
              title: "Retouching & Effects Editing",
              desc: "Fix lighting, add textures, and retouch any elements in CAD models.",
            },
            {
              title: "Rendering Services",
              desc: "Generate realistic 3D renders from converted CAD files for multiple purposes.",
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
          Matterport to CAD Conversion Process
        </h2>
        <ol className="space-y-6">
          {[
            "Need Analysis – Understand client requirements for conversion.",
            "Receiving Matterport Scans – Client shares the Matterport URL link.",
            "Mesh Cleanup – Quick cleanup and first draft within 48 hours.",
            "CAD Conversion – Transform Matterport scans into 3D CAD models.",
            "File Transfer – Deliver files in preferred formats (.skp, .3ds, .fbx, .obj).",
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

      {/* Additional Services */}
      <section className="py-12 px-6 bg-gray-50 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Other Services You Can Benefit From
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Revit Modeling Services",
            "Point Cloud Services",
            "SketchUp Modeling Services",
            "Building Information Model (BIM)",
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
          Why Hire Nimble for Matterport to CAD Conversion?
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Reasonable Fee Structure with flexible pricing options.",
            "Outstanding Team Support by expert CAD designers and technicians.",
            "Standardized Practices – ISO 9001:2015 certified.",
            "Single Point of Contact for streamlined communication.",
            "Quick TAT – First draft delivered within 48 hours.",
          ].map((point, i) => (
            <Card key={i} className="rounded-2xl shadow-md hover:shadow-lg">
              <CardContent className="p-6">{point}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl shadow-md hover:shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                CAD Models for a US Architectural Firm
              </h3>
              <p>
                Nimble provided cost-effective CAD modeling solutions to a top
                architectural firm in the US.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md hover:shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Architectural Rendering for a Wisconsin-based Client
              </h3>
              <p>
                Nimble delivered high-quality rendering support as per SLA for
                a Wisconsin-based civil engineering client.
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
                “A robust congratulations to the team at Nimble Acuity for a job
                well done.”
              </p>
              <p className="font-semibold">
                — CMO, Leading Medical Care Company, Seattle, WA
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Convert Your Matterport Scans to CAD?
        </h2>
        <p className="mb-6 text-lg">
          Get accurate, detailed, and clean CAD models for your architectural
          or interior design projects.
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
