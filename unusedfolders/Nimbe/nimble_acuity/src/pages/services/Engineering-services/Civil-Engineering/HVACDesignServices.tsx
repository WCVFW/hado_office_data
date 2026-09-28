"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function HVACDesignServices() {
  return (
    <div className="w-full bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="text-center py-16 px-6 bg-gradient-to-r from-blue-900 via-teal-600 to-amber-500 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Nimble Acuity HVAC Design & Drafting Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Delivering smart HVAC solutions with precise ductwork, energy-efficient designs, and optimized indoor airflow for residential and commercial projects.
        </motion.p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Get Started
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg text-gray-900">
        <p className="mb-6">
          Nimble Acuity provides holistic HVAC design and drafting services that ensure ideal indoor air quality and thermal comfort. Our experts consider building layout, climate, zoning, and energy efficiency to deliver robust HVAC networks tailored for your property.
        </p>
        <p>
          With over 20 years of experience, we meet unique client requirements, including comfort, budget, and efficiency, using the latest tools and technologies for accurate HVAC layouts and designs.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Our HVAC Design & Drafting Services</h2>
        <ul className="list-disc list-inside space-y-4 text-lg max-w-4xl mx-auto text-gray-800">
          <li><strong>Residential HVAC Design Services:</strong> Custom solutions for heating and cooling needs for residential clients.</li>
          <li><strong>HVAC Duct Design Services:</strong> Accurate duct layouts and drafting for commercial, industrial, and residential buildings.</li>
          <li><strong>HVAC Engineering Services:</strong> Customized engineering solutions for maximum energy efficiency with minimal cost.</li>
          <li><strong>HVAC Modeling Services:</strong> 3D modeling for mechanical layouts, ensuring precise geometric representation.</li>
          <li><strong>Commercial HVAC Maintenance Services:</strong> Optimize energy efficiency and reduce risks of system breakdowns.</li>
          <li><strong>HVAC System Replacement Services:</strong> Ensure top efficiency and minimize repair costs with comprehensive replacements.</li>
        </ul>
      </section>

      {/* Projects & Areas Covered */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-6 text-center text-teal-600">HVAC Projects & Areas Covered</h2>
        <p className="text-lg max-w-4xl mx-auto mb-4">
          We provide HVAC solutions across diverse facilities including:
        </p>
        <ul className="list-disc list-inside text-lg max-w-4xl mx-auto space-y-2 text-gray-800">
          <li>Commercial Buildings, Retail Outlets, Residential Complexes</li>
          <li>Institutional Facilities, Industrial Buildings, Laboratories & Data Centers</li>
          <li>Utilities Companies, Mining & Plant Designs, Hospitals</li>
        </ul>
      </section>

      {/* HVAC Components */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">Areas Covered in HVAC Design</h2>
        <ul className="list-disc list-inside text-lg max-w-4xl mx-auto space-y-2 text-gray-800">
          <li><strong>Heating Systems:</strong> Boilers, Heat Pumps, Radiant Heat, Furnaces, and more.</li>
          <li><strong>Ventilation:</strong> Central Air Systems, Ductless Splits, Filters, Humidifiers/Dehumidifiers.</li>
          <li><strong>Cooling Systems:</strong> Air Conditioners, Air Handlers, Ice Machine Installations, Refrigeration.</li>
          <li><strong>Kitchen Layouts:</strong> Exhaust Hoods, Sheet Metal Ducts, Overhead Units.</li>
          <li><strong>Commercial HVAC:</strong> Energy Management Units, Generators, Central Systems, Packaged Units.</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center text-teal-600">Why Choose Nimble Acuity</h2>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl mx-auto text-gray-800">
          <li><strong>Global Delivery Centers:</strong> Tailored solutions for clients across the world.</li>
          <li><strong>Quality & Workflow Management:</strong> Structured approach from planning to execution and QA.</li>
          <li><strong>Latest Infrastructure:</strong> State-of-the-art tools and technologies for HVAC drafting.</li>
          <li><strong>Compliance & Security:</strong> Adherence to AS, ASHRAE, ACCA, and AIA-drawing standards.</li>
          <li><strong>Cost-Competitive:</strong> Solutions designed to meet your budget without compromising quality.</li>
        </ul>
      </section>

      {/* Customer Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Customer Success Stories</h2>
        <div className="space-y-6 max-w-4xl mx-auto text-lg">
          <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
            <CardContent>
              <strong>CFD Simulation Services:</strong> Eco-friendly CFD simulations delivered to a leading HVAC manufacturer within 15 days.
            </CardContent>
          </Card>
          <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
            <CardContent>
              <strong>MEP Services for Award-winning Design Firm:</strong> 26 electrical and mechanical drawings delivered in 120 hours versus 320 hours estimated.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-blue-900 via-teal-600 to-amber-500 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Partner with Nimble Acuity for HVAC Design Excellence
        </h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Get comprehensive HVAC system design and drafting solutions with optimized airflow, energy efficiency, and consistent comfort for your clients.
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
