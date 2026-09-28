"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function CADAutomation() {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="text-center py-16 px-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Nimble CAD Automation Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Automate repetitive CAD tasks, reduce design time, and increase productivity
          with Nimble’s customized CAD automation solutions.
        </motion.p>
        <Button size="lg" className="bg-white text-indigo-700 font-semibold">
          Get a Free Consultation
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <p className="text-lg mb-6">
          Design is a critical aspect of any production process and often consumes
          significant time and cost. Nimble helps manufacturing companies automate
          their CAD processes to reduce repetitive tasks, improve design accuracy,
          and accelerate time to market. Our services include CAD modeling, CAM,
          and customized automation for existing software like AutoCAD, CATIA,
          SolidWorks, and more.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Our CAD Automation Services
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Custom Engineering",
            "Knowledge-based Engineering",
            "Mechanical Engineering",
            "Custom Applications",
            "Platform Customization",
            "Creation of Libraries",
            "Legacy Maintenance / Sustenance",
            "Integration with Engineering & Business Systems",
            "AutoCAD, IntelliCAD, Unigraphics, Pro/E, ArchiCAD Customization",
            "Microstation, Inventor/MDT, SolidWorks, CATIA, Parasolid/ACIS Customization",
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
                  <p className="text-gray-700">{service}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CAD Software Programming Expertise */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          CAD Software Programming Expertise
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Unigraphics - U func, C++ Open API",
            "Knowledge Fusion",
            "SolidWorks VB API",
            "Pro-Engineer C++ Pro-Toolkit",
            "CATIA V5 CAA",
            "AutoCAD .NET API",
          ].map((tool, i) => (
            <Card key={i} className="rounded-2xl shadow-sm hover:shadow-lg">
              <CardContent className="p-6 text-center">{tool}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-6 bg-gray-100 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Benefits of Our CAD Automation Services
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Reduce design cycle time",
            "Avoid repetitive tasks in design",
            "Digitize outputs in 2D drawings, 3D models, prototypes",
            "Increase speed and accuracy of drawings",
            "Respond quickly to customer design changes",
            "Improve quality of design",
          ].map((benefit, i) => (
            <Card key={i} className="rounded-2xl shadow-md hover:shadow-lg">
              <CardContent className="p-6">{benefit}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Nimble Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Nimble Can Be Your CAD Automation Partner
        </h2>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl mx-auto">
          {[
            "Thorough understanding of the entire product lifecycle from design to obsolescence",
            "Experience with leading CAD automation software",
            "Knowledge of international engineering standards such as ASME, ASTM, ISO, SAE, ANSI, BS, DIN, and MIL",
            "Ability to provide customized services aligned with your business goals",
            "Multiple quality checks to minimize errors",
            "Structured process to understand all project variables",
          ].map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Automate Your CAD Design Today
        </h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Partner with Nimble Acuity for customized CAD automation solutions that
          streamline your design workflow and improve productivity.
        </p>
        <Button
          size="lg"
          className="bg-white text-indigo-700 font-semibold hover:bg-gray-200"
        >
          Contact Our Experts
        </Button>
      </section>
    </div>
  );
}
