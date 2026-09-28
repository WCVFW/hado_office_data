"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function SkidDesign() {
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
          Nimble Skid Design Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Complete projects faster, reduce time to market, and save costs with Nimble’s expert skid design services.
        </motion.p>
        <Button size="lg" className="bg-white text-indigo-700 font-semibold">
          Get a Free Consultation
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <p className="text-lg mb-6">
          Are you looking to reduce project timelines and minimize costs? Nimble provides top-notch skid design services
          with a highly skilled team leveraging the latest tools and technologies to meet all your design requirements.
        </p>
        <p className="text-lg mb-6">
          With over 26+ years of experience, Nimble Acuity delivers tailored skid engineering solutions that cater to
          global clients in various industries.
        </p>
      </section>

      {/* Skid Design Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skid Design Services We Offer</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Pre-bid engineering services",
            "E&I skid engineering services",
            "Skid optimization",
            "Vibration amplitude and frequency analysis",
            "Detailed structural fabrication drawings",
            "COG and weight calculation for lifting arrangements",
            "Monorail calculations",
            "Lug lifting calculations",
            "MTO for piping materials",
            "MTO for structural steel elements",
            "Fatigue analysis services",
            "Surge analysis services",
            "Transit analysis services",
            "Structural skid design services",
            "Transportation analysis services",
            "Blast analysis services",
            "Structural steel calculations",
            "Lifting detailed arrangement drawings",
            "Fabrication isometric drawings",
            "3D models for design package",
            "Bill of materials for piping and other structures",
            "Supporting arrangement optimization",
            "2D general arrangement drawing extraction",
            "Environmental load and transportation",
            "Skid dynamic analysis",
          ].map((service, i) => (
            <Card key={i} className="rounded-2xl shadow-md hover:shadow-lg">
              <CardContent className="p-6 text-center text-gray-700">{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Other Services You Can Benefit From</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Retail Visual Merchandising Services",
            "BIM Component Creation Services",
            "Millwork Drawings Services",
            "Point Cloud Services",
          ].map((service, i) => (
            <Card key={i} className="rounded-2xl shadow-sm hover:shadow-lg">
              <CardContent className="p-6 text-center">{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 bg-gray-100 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Nimble Acuity for Skid Design</h2>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl mx-auto">
          {[
            "Affordable pricing options starting at $12/hour",
            "State-of-the-art infrastructure and latest design tools",
            "ISO-certified, high-quality, and error-free services",
            "Quick turnaround via global delivery centers",
            "ISMS-certified for data security and confidentiality",
            "Experienced and skilled design engineers",
            "Easily scalable services based on client needs",
            "Dedicated manager as a single point of contact",
            "24/7 customer support",
          ].map((benefit, i) => (
            <li key={i}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Client Success Stories</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Structural Drafting Services for Award-winning Design Firm",
              desc: "Nimble assigned a team of skilled drafters, quality analysts, and account managers to accurately implement project markups and prevent rework.",
            },
            {
              title: "Structural Modeling Support for a Concrete Supplying Giant",
              desc: "Our designers conducted scope and seismic analysis to provide precise reports and optimize structural support.",
            },
          ].map((story, i) => (
            <Card key={i} className="rounded-2xl shadow-md hover:shadow-lg">
              <CardContent className="p-6 text-gray-700">
                <h3 className="font-bold mb-2 text-lg">{story.title}</h3>
                <p>{story.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Efficient and Reliable Skid Design Services
        </h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Partner with Nimble Acuity for top-notch, scalable, and customized skid design services to accelerate your projects.
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
