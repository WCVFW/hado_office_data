import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PEMainMenu from "../PEmainmenu";

const services = [
  {
    title: "Fold & Scratch Damage Repair",
    desc: "Meticulous repair of folds and scratches to restore clarity and appeal.",
  },
  {
    title: "Fading Correction",
    desc: "Revives faded photos, restoring lost vibrancy and detail.",
  },
  {
    title: "Missing Pieces Recreated",
    desc: "Reconstructs missing sections seamlessly with expert artistry.",
  },
  {
    title: "Black & White Colourizing",
    desc: "Transforms old black & white images into vibrant, modern visuals.",
  },
  {
    title: "Restoration of Damaged Photographs",
    desc: "Specialized service for water, mold, and insect-damaged photos.",
  },
  {
    title: "Antique Photo Restoration",
    desc: "Preserves the authenticity and charm of historic images.",
  },
  {
    title: "Photo Sharpening & Enhancement",
    desc: "Improves clarity, tonal balance, and detail for creative projects.",
  },
];

const benefits = [
  "Expertise and Experience",
  "Rigorous Quality Assurance",
  "Customized Solutions",
  "Quick Turnaround",
  "Scalability for Any Volume",
  "Clear Communication",
  "Simplified File Submission",
  "GDPR-Compliant Data Security",
];

export default function PhotoRestorationUK() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Photo Restoration Services UK
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg mb-6">
          Transform your studio's photos with specialized services that conquer complexities, varied damage, and limited source material.
        </p>
        <Button size="lg" className="rounded-2xl shadow-lg">
          Start Your Free Trial
        </Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Photo Restoration Solutions We Offer
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="rounded-2xl shadow-md hover:shadow-xl transition">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Studios in the UK Choose Us
        </h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {benefits.map((b, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm"
            >
              <span className="text-blue-600 font-bold">✔</span>
              <p className="text-gray-700">{b}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Revive Your Old Photos?
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Nimble your photo restoration needs to us and experience tailored solutions, quick turnaround, and unmatched quality.
        </p>
        <Button size="lg" variant="secondary" className="rounded-2xl shadow-lg">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}