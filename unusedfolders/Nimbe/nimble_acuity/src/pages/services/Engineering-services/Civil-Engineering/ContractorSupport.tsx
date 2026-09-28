"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function ContractorSupport() {
  return (
    <div className="w-full bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="text-center py-16 px-6 bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Nimble Contractor Support Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Get access to high-performance and high-quality contractor support
          services at prices starting at just <span className="font-semibold">$12/hour</span>.
        </motion.p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Get Started
        </Button>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg text-gray-900">
        <p className="mb-6">
          Are you an independent contractor or freelancer bogged down with
          administrative tasks? Nimble Acuity provides reliable contractor
          support services that remove the administrative burden so you can
          focus on your core work. Our team offers cost-effective solutions for
          experienced contractors as well as those starting out in their
          freelance careers.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700">Contractor Support Services We Offer</h2>
        <div className="grid gap-6 md:grid-cols-2 mt-6">
          {[
            {
              title: "Accountancy and Company Formation Services",
              desc: "We help you form your company, manage accounts, and provide insurance coverage along with secretarial services."
            },
            {
              title: "Foreign Travel Support Services",
              desc: "Expert guidance on legal and tax regulations for contractors working abroad."
            },
            {
              title: "Payroll and Invoice Management Solutions",
              desc: "Professional payroll and invoice management ensuring you get paid correctly and on time."
            },
            {
              title: "HR and Legal Services",
              desc: "Comprehensive HR and legal support, including advice on employee rights as freelancers or PAYE workers."
            }
          ].map((service) => (
            <Card key={service.title} className="p-4 hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700 text-center">
          Other Services You Can Benefit From
        </h2>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-800 max-w-3xl mx-auto text-center">
          <li>Drainage Design Services</li>
          <li>3D Coordination Services</li>
          <li>5D Simulation Services</li>
          <li>4D Simulation Services</li>
        </ul>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700 text-center">Why Choose Nimble Acuity?</h2>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-800 max-w-4xl mx-auto">
          <li><strong>Affordable Pricing:</strong> High-quality contractor support at the lowest possible cost.</li>
          <li><strong>ISO-certified Quality:</strong> Robust QA processes ensure accuracy.</li>
          <li><strong>World-class Infrastructure:</strong> Modern offices and powerful tools for service delivery.</li>
          <li><strong>Structured Process:</strong> Systematic workflows for reliable outcomes.</li>
          <li><strong>Latest Tools:</strong> Cutting-edge contractor support technologies.</li>
          <li><strong>Experienced Team:</strong> 26+ years of contractor service expertise.</li>
          <li><strong>Data Security:</strong> Fully GDPR compliant.</li>
          <li><strong>Quick Turnaround:</strong> Always delivered within deadlines.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700 text-center">Client Success Stories</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Construction Drawings for a Top Manufacturing Firm",
              desc: "Nimble used PTC Creo 4.0 to deliver precise 3D modeling and 2D drafting, ensuring zero manufacturing errors."
            },
            {
              title: "MEP Services for Award-winning US Design Firm",
              desc: "Delivered 26 high-quality MEP drawings in just 120 hours, saving significant time compared to the standard 320 hours."
            }
          ].map((story) => (
            <Card key={story.title} className="p-4 hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{story.title}</h3>
                <p className="text-gray-700">{story.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          “We have been using Nimble Acuity’s services for over 2 years. Their managers and engineers consistently exceeded our expectations.”
          <br />– SVP & Co-Founder, Engineering Resource Company
        </p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}
