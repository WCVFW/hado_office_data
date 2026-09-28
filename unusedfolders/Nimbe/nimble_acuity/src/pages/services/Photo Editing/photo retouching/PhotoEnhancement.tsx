import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import PEMainMenu from "../PEmainmenu";

const benefits = [
  "Expertise in Photoshop & Lightroom",
  "ISO-certified international quality standards",
  "Reduced in-house payroll costs",
  "Stringent data security measures",
  "Dedicated project manager",
  "Cost-effective bulk solutions",
];

const services = [
  {
    title: "Photo Colorization",
    desc: "Revive colors and vibrance in older or faded photos.",
  },
  {
    title: "Portrait Restoration",
    desc: "Restore damaged photographs to their original charm.",
  },
  {
    title: "Density Correction",
    desc: "Fix inconsistencies in color density and contrast.",
  },
  {
    title: "Color Cast Correction",
    desc: "Correct lighting distortions from tungsten, fluorescent, or mixed sources.",
  },
  {
    title: "Image Cropping",
    desc: "Remove unnecessary edges and focus on the subject.",
  },
  {
    title: "Blemish Removal",
    desc: "Eliminate freckles, spots, and imperfections seamlessly.",
  },
  {
    title: "Background Removal",
    desc: "Clean or replace unwanted backgrounds with precision.",
  },
];

const extras = [
  "Real Estate Image Post Processing",
  "Wedding Photo Editing",
  "Photo Manipulation",
  "Clipping Path Services",
  "Portrait Editing Services",
  "Adobe Photoshop Services",
  "Panorama Photo Stitching",
  "Photo Retouching",
];

export default function PhotoEnhancement() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="text-center py-16 bg-gradient-to-r from-blue-50 to-white">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Photo Enhancement Services
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Bring out the best in your photographs with professional enhancement.
          Tackle high demand while exceeding client expectations.
        </p>
        <Button size="lg">Get Started</Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Image Enhancement Services We Offer
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="rounded-2xl shadow-md h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                  <p className="text-gray-600">{s.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Advantages of Choosing Us
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((b, idx) => (
            <div key={idx} className="flex items-start space-x-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600" />
              <p>{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Additional Services You Can Benefit From
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {extras.map((ex, idx) => (
            <Card key={idx} className="rounded-2xl shadow">
              <CardContent className="p-4 text-center font-medium">
                {ex}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">What Our Clients Say</h2>
        <blockquote className="max-w-2xl mx-auto italic text-lg">
          “Thank you for the excellent work you have done for me. The quality
          was very high, the price excellent and the turnaround time was very
          fast. 10/10.”
        </blockquote>
        <p className="mt-4 font-semibold">Professional Photographer, Australia</p>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Transform Your Photos?
        </h2>
        <Button size="lg">Contact Us Today</Button>
      </section>
    </div>
  );
}
