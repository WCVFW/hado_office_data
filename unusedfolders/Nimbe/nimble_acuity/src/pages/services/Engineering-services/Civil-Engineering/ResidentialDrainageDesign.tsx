"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function ResidentialDrainageDesign() {
  return (
    <div className="w-full bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="text-center py-16 px-6 bg-gradient-to-r from-blue-900 via-teal-600 to-amber-500 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Nimble Residential Drainage Design Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Our world-class drainage design services help you systematically remove wastewater from houses and residential areas at prices starting at $12/hour.
        </motion.p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Get Started
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg text-gray-900">
        <p className="mb-6">
          Improper planning of surface drainage systems can damage your property and affect residents’ health. Water accumulation causes rotting, mold, structural damage, and health issues.
        </p>
        <p>
          Nimble Acuity provides high-quality, cost-effective residential drainage design services that efficiently manage surface and sub-surface water from roofs, walkways, and driveways, preventing flooding and structural issues.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Residential Drainage Design Services We Offer</h2>
        <ul className="list-disc list-inside space-y-4 text-lg max-w-4xl mx-auto text-gray-800">
          <li>
            <strong>Drainage Layout Design:</strong> Parallel shallow drains designed with advanced 3D modeling tools for effective water removal from residential complexes.
          </li>
          <li>
            <strong>Foul Water Drainage Design:</strong> Comprehensive designs for wastewater removal, including route planning, hydraulic analysis, and simulation modeling.
          </li>
          <li>
            <strong>Residential Stormwater Drainage Design:</strong> Sustainable and economical layouts for stormwater removal in residential and commercial developments.
          </li>
          <li>
            <strong>Modeling of Flood Flow Routes:</strong> Accurate flood flow simulations to mitigate risk and ensure resilience in existing and proposed developments.
          </li>
          <li>
            <strong>Retrofit Drainage Design Services:</strong> Upgrading existing drainage systems with scalable, safe, and software-simulated 3D designs.
          </li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center text-teal-600">Benefits of Residential Drainage System</h2>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl mx-auto text-gray-800">
          {[
            "Reduce water retention and clogging, preventing corrosion and structural damage.",
            "Control excess stormwater runoff during rainfall.",
            "Prevent flooding in residential complexes.",
            "Avoid untimely structural changes due to excessive water accumulation."
          ].map((benefit, i) => (
            <li key={i}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Residential Drainage Design Process</h2>
        <ol className="list-decimal list-inside space-y-3 text-lg max-w-4xl mx-auto text-gray-800">
          {[
            "Drainage Design Assessment: Evaluate existing drainage infrastructure and calculate stormwater requirements.",
            "Creating a Preliminary Design: Hydraulic analysis and simulation modeling to develop sustainable designs.",
            "Finalizing the Design: Review and refine preliminary designs to ensure compliance with standards.",
            "Implementation: On-site enforcement of the final design for effective drainage."
          ].map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center text-teal-600">Other Services You Can Benefit From</h2>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl mx-auto text-gray-800">
          {[
            "HVAC Design and Drafting Services",
            "Terrain Modeling Services",
            "GIS Surveying Services",
            "Drainage Design Services"
          ].map((service, i) => (
            <li key={i}>{service}</li>
          ))}
        </ul>
      </section>

      {/* Why Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Why Choose Nimble Acuity</h2>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl mx-auto text-gray-800">
          {[
            "Cost-effective Solutions: Customized service solutions saving time and money.",
            "Data Security: ISO/IEC 27001:2022 certified, ensuring your data is safe and secure.",
            "High-Quality Services: Access to world-class infrastructure, state-of-the-art tools, and innovative technologies.",
            "Diligent Team: Experienced civil engineers delivering precise and effective drainage solutions.",
            "Focused Approach: Dedicated, client-centric approach ensuring scalable and sustainable designs.",
            "24/7 Customer Support: Round-the-clock assistance via phone or email."
          ].map((reason, i) => (
            <li key={i}>{reason}</li>
          ))}
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Client Success Stories</h2>
        <div className="space-y-6 max-w-4xl mx-auto text-lg">
          <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
            <CardContent>
              <strong>MEP Design & Drafting for Australian Electric Service Company:</strong> Delivered expert and professional services efficiently.
            </CardContent>
          </Card>
          <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
            <CardContent>
              <strong>Construction Drawings for Top Italian Architectural Firm:</strong> Provided accurate construction drawings for a London apartment complex.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Testimonials</h2>
        <Card className="p-6 max-w-3xl mx-auto hover:shadow-lg transition-shadow duration-300">
          <CardContent>
            <p>
              "We have outsourced key engineering work to Nimble Acuity and seen excellent results, especially in civil and structural engineering calculations."
            </p>
            <p className="mt-2 font-semibold">- SVP & Co-Founder, Engineering Resource Company</p>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-blue-900 via-teal-600 to-amber-500 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Partner with Nimble Acuity for Expert Residential Drainage Design
        </h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Over 26 years of experience delivering precise, sustainable, and scalable drainage solutions. Let us design and implement a world-class residential drainage system for your project.
        </p>
        <Button
          size="lg"
          className="bg-amber-500 text-white font-semibold hover:bg-amber-600"
        >
          Contact Our Experts
        </Button>
      </section>
    </div>
  );
}
