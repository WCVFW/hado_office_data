"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function CADMigration() {
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
          Nimble CAD Migration Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Seamlessly migrate your CAD data, unify platforms, and optimize your product development workflow with Nimble Acuity.
        </motion.p>
        <Button size="lg" className="bg-white text-indigo-700 font-semibold">
          Request a Consultation
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <p className="text-lg mb-6">
          Would you like your dealers and vendors updated with the latest design modifications? Nimble helps you streamline
          technical information flow within teams and suppliers, reducing design-to-launch time by up to 25% and ECN time
          by 50%. Our CAD migration services help cut costs, reduce errors, and ensure efficient communication across
          platforms.
        </p>
        <p className="text-lg mb-6">
          Our experts plan and implement robust CAD migration processes, accessing legacy data and reusing designs
          regardless of the source CAD system. Nimble provides large-scale migration solutions, reducing the need to
          maintain separate CAD systems and ensuring your organization moves toward full integration with PLM and
          project management tools.
        </p>
      </section>

      {/* Migration Platforms */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">CAD Migration Platforms</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "AutoCAD / Inventor Suites",
            "Dassault Systems CATIA V4 / V5",
            "Pro/E Wildfire",
          ].map((platform, i) => (
            <Card key={i} className="rounded-2xl shadow-md hover:shadow-lg">
              <CardContent className="p-6 text-center text-gray-700">{platform}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Software & Tools Expertise */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Software & Tools Expertise</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Siemens Solid Edge 2D",
            "Autodesk AutoCAD & 3D CAD",
            "Autodesk Inventor",
            "Dassault Systèmes SolidWorks",
            "Bentley Microstation V8 & AutoPlant",
            "CATIA V4 & V5",
            "Siemens Unigraphics / NX",
            "McLeen Rhino",
            "Alibre Design",
            "PTC Pro/Engineer – Pro/E",
            "PLM Systems: Teamcenter, Windchill, Enovia",
          ].map((tool, i) => (
            <Card key={i} className="rounded-2xl shadow-sm hover:shadow-lg">
              <CardContent className="p-6 text-center">{tool}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">The Nimble Acuity Team</h2>
        <p className="text-lg mb-6 text-center">
          Our CAD migration team consists of skilled mechanical engineers proficient in CAD, CAM, CAE, and PDM platforms.
          Since 2002, we have assisted global companies with design, conversion, and migration requirements, following
          structured processes with stringent quality mechanisms to ensure integrity and compatibility of data.
        </p>
      </section>

      {/* Features */}
      <section className="py-12 px-6 bg-gray-100 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Features of Our CAD Migration Services</h2>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl mx-auto">
          {[
            "Authenticate CAD migration data at multiple levels",
            "Automation expertise in data verification and audit trails",
            "Enable different functional perspectives (manufacturing, financial, etc.) on the same CAD data",
          ].map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </section>

      {/* Why Nimble Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Nimble Acuity for CAD Migration</h2>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl mx-auto">
          {[
            "Over a decade of experience serving global customers in 167 countries",
            "75% of business from repeat customers",
            "High-quality delivery with stringent internal quality mechanisms",
            "Expertise across aerospace, automotive, infrastructure, marine, manufacturing, healthcare, chemicals, and more",
            "Industrial & product engineering with PLM solutions",
            "Secure project data management with automated backups and overviews",
          ].map((reason, i) => (
            <li key={i}>{reason}</li>
          ))}
        </ul>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Seamless CAD Migration Starts Here
        </h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Partner with Nimble Acuity for customized CAD migration solutions that unify your design platforms and enhance efficiency.
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
