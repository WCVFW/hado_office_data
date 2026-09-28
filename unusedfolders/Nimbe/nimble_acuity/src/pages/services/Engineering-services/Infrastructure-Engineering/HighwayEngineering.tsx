"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ESmainmenu from "../ESmainmenu";

export default function HighwayEngineering() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-green-800 to-green-500 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Highway Engineering Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl max-w-3xl mx-auto"
        >
          We'll help you design highways that are compliant with safety and performance 
          standards for unhindered traffic flow. Our highway engineering services start at{" "}
          <span className="font-semibold">$18/hour</span>.
        </motion.p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-gray-700 space-y-6">
        <p>
          Are you looking for a highway engineering services provider experienced in handling
          large and small projects? You can get highway engineering consultants at just $11/hour
          from Nimble Auity. Our experts handle surveys, soil investigation, structural design,
          and more, providing one-stop solutions for all highway engineering requirements.
        </p>
        <p>
          With over 26+ years of experience, Nimble's highway engineering professionals use
          cutting-edge technologies to deliver accurate results quickly and cost-effectively.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Highway Engineering Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Highway Design",
              desc: "Qualified engineers provide budget-friendly designs ensuring safety, streamlined mobility, and long-life performance using tools like AutoCAD, Civil 3D, Microstation, AutoTurn, SignCAD, and more.",
            },
            {
              title: "Corridor Studies",
              desc: "We identify major corridors, analyze traffic density, and propose design improvements within your budget.",
            },
            {
              title: "CD Structure Design",
              desc: "Expert construction and highway engineers handle CD structure designs ensuring compliance with hydraulic requirements.",
            },
            {
              title: "Estimation of Cost and Quantity",
              desc: "Accurate quantity take-offs and cost estimates with continuous comparison to avoid discrepancies.",
            },
            {
              title: "Bidding Support",
              desc: "Skilled engineers and consultants support you in tendering bids, including submission assistance if required.",
            },
          ].map((service, i) => (
            <Card key={i} className="hover:shadow-lg transition duration-300 border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-green-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Other Highway Engineering Consultation Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
          {[
            "Assessment of Pavement Composition",
            "Fixing Highway Alignment",
            "Construction Materials Tests",
            "Traffic Analysis",
            "Designing CD Structures",
            "Resettlement and Social Studies",
            "Technical Specification Creation",
            "Financial Analysis",
            "Geotechnical Investigation",
            "Environmental Impact Assessment (ADB/WB Guidelines)",
          ].map((item, i) => (
            <Card key={i} className="p-4 border-l-4 border-green-700 hover:shadow-md">
              <p className="text-gray-700">{item}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-100 py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Highway Engineering Process</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700">
          <li>Dedicated client meeting to document requirements.</li>
          <li>Project scope and plan designed by the team for targeted execution.</li>
          <li>Final project plan shared for client approval before commencement.</li>
          <li>Highway engineering project executed according to timeline.</li>
          <li>Completion notification and project report shared with the client.</li>
        </ol>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Nimble Auity?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "High-quality Services",
            "Affordable & Custom Solutions",
            "Robust Infrastructure",
            "ISO 9001:2015 Certified",
            "100% Data Security (ISO/IEC 27001:2022)",
            "Quick Turnaround Time",
            "Scalable Services",
            "Dedicated SPOC",
            "Experienced Professional FTEs",
            "Round-the-clock Support",
          ].map((adv, i) => (
            <Card key={i} className="p-6 border-l-4 border-green-700 shadow-sm hover:shadow-md">
              <p className="text-gray-700 font-medium">{adv}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="bg-gray-50 py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-md transition">
            <CardHeader>
              <CardTitle className="text-green-800">3D Modeling Services to US Fabrication Company</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Nimble designed five 3D models based on client markups, enabling fabrication of critical equipment components.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition">
            <CardHeader>
              <CardTitle className="text-green-800">3D Production Animation Services to Japanese Machine Manufacturer</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We leveraged 3DS MAX and Maya to create precise 3D animations, ensuring client specifications were met.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <blockquote className="italic text-gray-700 text-lg">
          “Hyde Engineering is very satisfied with Nimble's services. All deadlines were met and expectations exceeded.”
        </blockquote>
        <p className="mt-4 font-semibold text-green-700">
          Spokesperson, Oil Exploration Company in the US
        </p>
      </section>

      {/* CTA */}
      <section className="bg-green-800 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Partner with Nimble Auity for Highway Engineering Services
        </h2>
        <p className="max-w-3xl mx-auto mb-8 text-lg">
          With over 26 years of experience and a global clientele, Nimble delivers high-quality, secure, and efficient highway engineering services tailored to your requirements.
        </p>
        <Button size="lg" className="bg-white text-green-800 font-semibold hover:bg-gray-200">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}
