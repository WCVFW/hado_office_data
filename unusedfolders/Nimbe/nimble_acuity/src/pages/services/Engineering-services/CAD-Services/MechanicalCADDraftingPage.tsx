"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function MechanicalCADDraftingPage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="text-center py-16 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Mechanical CAD Drafting Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-3xl mx-auto text-lg md:text-xl mb-8"
        >
          Our mechanical CAD drawing solutions help engineers, fabricators, and
          stakeholders get precision-engineered components using CAD tools —
          starting at just <b>$10/hour</b>.
        </motion.p>
        <Button className="bg-white text-blue-600 font-semibold rounded-full px-6 py-3 shadow hover:scale-105 transition">
          Get a Free Quote
        </Button>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-6">
        <p>
          Enabling product manufacturers to focus exclusively on profit-making,{" "}
          <b>Nimble Acuity</b> provides mechanical CAD drafting services to
          materialize your concepts for a wide range of mechanical components
          assembly. We help you reduce overhead, shorten project duration,
          augment productivity, and do more with CAD drafting outsourcing
          services.
        </p>
        <p>
          Our team of dedicated and experienced draftsmen, engineers, quality
          analysts, and design professionals ensure qualitative delivery of all
          CAD drafting requirements while maintaining proper coordination
          between modern technology and a proven project delivery model.
        </p>
        <p>
          As an ISO-compliant provider, <b>Nimble Acuity</b> ensures our AutoCAD
          mechanical drawing process enhances efficiency, accelerates
          development time, and meets deliverables.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Mechanical CAD Drafting Services We Offer
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {[
            {
              title: "Mechanical Part Drawing Support",
              desc: "High-quality detailing for precise part design to aid manufacturing and assembly.",
            },
            {
              title: "Mechanical Drafting Support",
              desc: "Complex CAD drawings from sketches, blueprints, or PDFs for precision engineering.",
            },
            {
              title: "Mechanical Fabrication Drawing Support",
              desc: "Fabrication drawings with codes, tolerances, and assembly illustrations.",
            },
            {
              title: "Assembly Drawing Support",
              desc: "Detailed assembly drawings with part lists, callouts, and icons for clarity.",
            },
            {
              title: "AutoCAD 2D/3D Modeling",
              desc: "2D/3D models, M&E drawings, patent drawings, fabrication, and GD&T drawings.",
            },
            {
              title: "MEP CAD Drafting Support",
              desc: "Plumbing, fire-fighting, hook-up diagrams, pressure vessel fabrication, and more.",
            },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-2xl transition hover:scale-[1.02] rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-blue-600">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Mechanical CAD Drafting Process We Follow
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            "Project Scoping: Inputs, instructions, pilot project, client approval",
            "Project Planning: Resources, timeline, technology, milestones",
            "Project Execution: CAD drafting, monitoring, QC, revisions",
            "Project Delivery: Secure upload, documentation, fine-tuning",
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                Step {i + 1}
              </h3>
              <p className="text-gray-600">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-blue-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Other Services You Can Benefit From
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {[
            "MicroStation Conversion Services",
            "Reverse Engineering Services",
            "CAD Automation Solutions",
            "Jigs & Fixture Design Services",
          ].map((service, idx) => (
            <Card
              key={idx}
              className="p-6 rounded-xl shadow hover:shadow-xl transition"
            >
              <CardTitle className="text-lg text-blue-600">{service}</CardTitle>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Nimble for Mechanical CAD Drafting?
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 list-disc list-inside text-gray-700">
          <li>State-of-the-art Infrastructure</li>
          <li>Flexible & Cost-effective Pricing</li>
          <li>Streamlined Process & Quality Assurance</li>
          <li>Global Delivery Centers</li>
          <li>Leverage Advanced CAD Software</li>
          <li>100% Data Security</li>
          <li>Quick Turnaround Time</li>
          <li>ISO Certified Services</li>
          <li>Scalable Solutions</li>
          <li>Experienced CAD Professionals</li>
          <li>24/7 Support</li>
        </ul>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-50 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title:
                "Nimble Provided US-based Non-skid Deck Manufacturer with CAD Drafting Services",
              desc: "Delivered quick CAD drafting without lapse in quality.",
            },
            {
              title:
                "Nimble Provided FEA Analysis Support to US Solar Energy Giant",
              desc: "Delivered 100% satisfaction as per SLA for solar energy projects.",
            },
          ].map((cs, idx) => (
            <Card
              key={idx}
              className="rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <CardHeader>
                <CardTitle className="text-lg text-blue-600">{cs.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{cs.desc}</p>
                <Button
                  variant="outline"
                  className="mt-4 rounded-full hover:bg-blue-600 hover:text-white"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-blue-50">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="max-w-3xl mx-auto">
          <Card className="p-6 rounded-2xl shadow-lg">
            <p className="text-lg italic text-gray-700 mb-4">
              “Nimble Acuity has been a tremendous resource for our engineering
              department. They are very precise, attentive, and quick to learn our
              procedures.”
            </p>
            <p className="font-semibold text-right">
              – General Partner, Manufacturing Company (US)
            </p>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Mechanical Designs?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Partner with Nimble Acuity for precision-driven Mechanical CAD Drafting
          services. Contact us today for a free quote within 24 hours.
        </p>
        <Button className="bg-white text-blue-600 font-semibold rounded-full px-6 py-3 hover:scale-105 transition">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
