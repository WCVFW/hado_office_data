"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function RemoteDraftingServices() {
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
          Nimble Acuity Remote Drafting Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Convert your ideas, paper drawings, and computer drafts into accurate CAD drawings through our expert remote drafting services.
        </motion.p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Get Started
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg text-gray-900">
        <p className="mb-6">
          Nimble provides high-end remote drafting and documentation solutions to engineering and construction companies, architectural firms, and contractors worldwide. Our experienced CAD technicians and drafters can handle projects of any size, integrating seamlessly into your workflow using secure VPN connections for complete data safety.
        </p>
      </section>

      {/* Benefits */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Benefits of Nimble Remote Drafting Services</h2>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl mx-auto text-gray-800">
          <li>Free up valuable time and resources</li>
          <li>Reduce hiring and training costs</li>
          <li>Avoid investment in expensive software and technologies</li>
          <li>Ensure operational efficiency and project consistency</li>
          <li>Access industry-leading expertise remotely</li>
          <li>Reduce overhead costs and maximize profit margins</li>
        </ul>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-teal-600">Our Remote Drafting Services</h2>
        <ul className="list-disc list-inside space-y-4 text-lg max-w-4xl mx-auto text-gray-800">
          <li><strong>Remote Drafting & Documentation:</strong> 2D & 3D drafting solutions for architectural, electrical, civil, geospatial, and mechanical projects using the latest CAD software.</li>
          <li><strong>Paper-to-CAD Conversion:</strong> Convert legacy paper drawings into accurate CAD drawings maintaining true dimensions and attributes.</li>
          <li><strong>Production Drawings & CNC Codes:</strong> Generate precise CNC codes and production drawings for seamless manufacturing integration.</li>
          <li><strong>Remote Rendering Services:</strong> Create detailed photo-realistic renders for products, furniture, and projects to captivate clients and stakeholders.</li>
        </ul>
      </section>

      {/* Process Flow */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Remote Drafting Process</h2>
        <ol className="list-decimal list-inside space-y-3 text-lg max-w-4xl mx-auto text-gray-800">
          <li><strong>Team Meet:</strong> Understand your requirements and evaluate the scope of work.</li>
          <li><strong>Project Designing:</strong> Assign a skilled remote CAD team and plan the software & workflow.</li>
          <li><strong>Accessing Client Server:</strong> Work securely on your server with VPN and remote drafting technologies.</li>
          <li><strong>Creating the Designs:</strong> Leverage state-of-the-art software to craft accurate and detailed designs.</li>
          <li><strong>Quality Analysis:</strong> Rigorously check drafts to ensure accuracy and completeness.</li>
          <li><strong>Draft Delivery:</strong> Present final drafts to clients for evaluation and feedback.</li>
        </ol>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-teal-600">Why Choose Nimble for Remote Drafting</h2>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl mx-auto text-gray-800">
          <li>Cost-effective pricing for businesses of all sizes</li>
          <li>Use of the latest tools & technologies: AutoCAD, Cabinet Vision, Matterport, Willms HT2000, Microvellum, Pytha</li>
          <li>Expert CAD drafters and technicians with extensive experience</li>
          <li>Complete data security; all work is performed on client servers</li>
          <li>Quick turnaround and hassle-free delivery</li>
          <li>Full peace of mind; we handle your CAD drafting requirements from start to finish</li>
        </ul>
      </section>

      {/* Customer Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Customer Success Stories</h2>
        <div className="space-y-6 max-w-4xl mx-auto text-lg">
          <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
            <CardContent>
              <strong>Revit MEP Services for UK-based Engineering Consultants:</strong> Delivered cost-effective MEP services with quick turnaround.
            </CardContent>
          </Card>
          <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
            <CardContent>
              <strong>Construction Drawings for a Top Historic Property Management Firm:</strong> Accurate and high-quality construction drawings delivered efficiently.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-blue-900 via-teal-600 to-amber-500 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with Nimble Acuity for Remote Drafting</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Get accurate, cost-effective, and secure CAD drafting and documentation solutions for all your projects.
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
