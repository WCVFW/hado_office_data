"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function PeerReviewServices() {
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
          Nimble Peer Review Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Independent evaluation of your structural designs to ensure safety, accuracy, and regulatory compliance,
          adding value to your engineering projects.
        </motion.p>
        <Button size="lg" className="bg-white text-indigo-700 font-semibold">
          Request a Consultation
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg">
        <p className="mb-6">
          Nimble Acuity provides independent evaluations of structural project designs to enhance public safety and
          ensure no errors in blueprints or engineering designs. Our team of skilled engineers and modelers has
          supported hundreds of architects, engineers, and construction companies worldwide.
        </p>
        <p className="mb-6">
          With nearly two decades of experience, we offer due diligence audits at various stages of structural
          engineering projects, helping clients optimize resources from inception to execution.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Peer Review Services We Offer</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Foundation Design Review",
            "Superstructure Design Review",
            "Design & Specification Criteria Review",
          ].map((service, i) => (
            <Card key={i} className="rounded-2xl shadow-md hover:shadow-lg">
              <CardContent className="p-6 text-center text-gray-700">{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Peer Review Process */}
      <section className="py-12 px-6 bg-gray-100 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Peer Review Process</h2>
        <ol className="list-decimal list-inside space-y-4 text-lg max-w-4xl mx-auto">
          <li><strong>Scoping of the review work:</strong> Define scope.</li>
          <li><strong>Understanding Building Mandates:</strong> Analyze input drawings and building codes.</li>
          <li><strong>Effort & Pricing:</strong> Indicate time, resources, and pricing.</li>
          <li><strong>Project Assignment:</strong> Set up team of peer review experts.</li>
          <li><strong>Execute Draft:</strong> Create review documentation.</li>
          <li><strong>Quality Checks:</strong> Share review findings.</li>
          <li><strong>Gather Feedback:</strong> Provide risk mitigation support if needed.</li>
        </ol>
      </section>

      {/* Benefits */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Nimble for Peer Review?</h2>
        <ul className="list-disc list-inside space-y-3 max-w-4xl mx-auto">
          {[
            "Ensuring value for clients and stakeholders",
            "Unwavering professionalism",
            "Right approach to peer review services",
            "Additional expertise in structural design and analysis",
            "Predictable outcomes with proven techniques",
            "Global talent pool with multizonal delivery centers",
            "Assured qualitative delivery framework",
            "Wholesome approach to peer review",
            "Timely delivery",
            "Enhanced innovation, creativity, and problem-solving",
          ].map((benefit, i) => (
            <li key={i}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ensure Accuracy & Safety in Your Structural Designs
        </h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Partner with Nimble Acuity for reliable peer review services. Our experts can work as an extension of your
          in-house team to provide accurate evaluation and risk mitigation.
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
