"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function RebarDetailing() {
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
          Nimble Rebar Detailing Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Make your designs robust and compliant with the latest detailing techniques that follow ACI, CRSI, ASTM, RSIO, and AASHTO standards, starting at just $11/hour.
        </motion.p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Get Started
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg text-gray-900">
        <p className="mb-6">
          Nimble Acuity specializes in 3D modeling, detailing, estimation, and drawing. For 26+ years, we have delivered rebar detailing services for RCC contractors, rebar fabricators, structural engineers, and steel erectors globally. With the bandwidth to handle 3000+ projects a month, our team ensures accurate and timely delivery.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Rebar Detailing Services We Offer</h2>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl mx-auto text-gray-800">
          {[
            "Asset Assembly 2D Rebar Detailing: Using AutoCAD for stress point analysis and error-free design.",
            "Footing Detailing: Bar diameter, minimum reinforcement, and retaining wall specifications.",
            "Bar Listing in ASA Format: Using aSa software for fabrication and installation data.",
            "Grade Beam Detailing: Reinforced foundation design for efficient load distribution.",
            "Other Services: Total rebar estimation, 2D & 3D modeling, quality take-offs, as-built drawings, foundation details, bar bending schedules, rebar shop drawings, constructability reviews, concrete masonry detailing, joint and slab details, roof truss and joint details."
          ].map((service, i) => (
            <li key={i}>{service}</li>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center text-teal-600">Rebar Detailing Process</h2>
        <ol className="list-decimal list-inside space-y-3 text-lg max-w-4xl mx-auto text-gray-800">
          {[
            "Discuss requirements and challenges with the client.",
            "Develop a well-laid project plan and communicate outline.",
            "Approve project and assign to capable teams.",
            "Execute rebar detailing with quality control verification.",
            "Generate project reports with high-quality 3D rebar detailing."
          ].map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Other Services You Can Benefit From</h2>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl mx-auto text-gray-800">
          {[
            "Point Cloud Services",
            "3D Architectural Walkthroughs",
            "Building Information Modeling (BIM)",
            "3D Rendering & Walkthrough Services"
          ].map((service, i) => (
            <li key={i}>{service}</li>
          ))}
        </ul>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center text-teal-600">Why Choose Nimble Acuity?</h2>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl mx-auto text-gray-800">
          {[
            "High-quality Services: Dedicated quality control team ensures accuracy.",
            "Affordable Services: Cost-effective and budget-friendly solutions.",
            "Superb Infrastructure: Advanced software and tools for agile detailing.",
            "ISO Certified: ISO 9001:2015 accredited provider.",
            "100% Data Security: ISO/IEC 27001:2015 compliant for safe data handling.",
            "Quick Turnaround: Timely delivery without compromising quality.",
            "Scalable Services: Handle multiple projects simultaneously.",
            "Professional FTE: Certified rebar detailing professionals using CAD technology.",
            "Round-the-clock Support: 24/7 assistance via email, call, or webchat."
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
              <strong>Revit MEP Services for UK-based Consultants:</strong> Delivered SLA-compliant services for a reputed UK engineering consultancy.
            </CardContent>
          </Card>
          <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
            <CardContent>
              <strong>AutoCAD Conversion Services for a US Interior Design Firm:</strong> Provided expert CAD conversion services with client recognition for dedication and quality.
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
              "Nimble Acuity has been a tremendous resource for our engineering department. They are precise, attentive, and learn procedures quickly."
            </p>
            <p className="mt-2 font-semibold">- General Partner, Manufacturing Company, US</p>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-blue-900 via-teal-600 to-amber-500 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Partner with Nimble Acuity for Expert Rebar Detailing
        </h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Save time, reduce errors, and increase productivity with our ISO-certified rebar detailing services. Let us handle the detailing while you focus on core operations.
        </p>
        <Button
          size="lg"
          className="bg-amber-500 text-white font-semibold hover:bg-amber-600"
        >
          Connect with Our Experts
        </Button>
      </section>
    </div>
  );
}
