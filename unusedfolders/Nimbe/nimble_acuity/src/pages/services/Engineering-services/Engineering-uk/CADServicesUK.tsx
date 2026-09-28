import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Wrench,
  Layers,
  FileCog,
  DraftingCompass,
  CheckCircle,
  Lock,
  Globe,
  Users,
  DollarSign,
  PhoneCall,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function CADServicesUK() {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="relative bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20 px-6 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          CAD Services for the UK
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Experience precision, speed, and efficiency in every design. Streamline
          your projects with Nimble Auity’s professional CAD services.
        </p>
        <div className="mt-8">
          <Button size="lg" className="rounded-2xl shadow-lg">
            Contact Us Today
          </Button>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Our CAD Services?</h2>
        <p className="text-lg leading-relaxed">
          Rapid advancements and interoperability issues are critical challenges
          impacting design efficiency and collaboration. High hardware costs and
          expensive CAD software licenses can slow down progress. Nimble Auity
          helps mitigate these challenges with 22+ years of CAD expertise,
          delivering seamless and cost-effective solutions across multiple
          sectors.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-6 bg-white max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Professional CAD Services for UK Clients
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "CAD Drafting Services",
            "CAD Design Services",
            "CAD Drawing Services",
            "3D CAD Drawing Services",
            "CAD Rendering Services",
            "CAD Modeling Services",
            "CAD Conversion Services",
            "2D to 3D CAD Conversion",
            "3D CAD Services",
            "2D CAD Services",
            "Interior CAD Design",
            "MEP CAD Services",
          ].map((service, idx) => (
            <Card key={idx} className="shadow-md hover:shadow-xl transition">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{service}</h3>
                <p className="text-sm text-gray-600">
                  High-precision {service.toLowerCase()} to streamline your
                  projects with accuracy and speed.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="py-16 px-6 bg-gray-100 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Tools & File Formats We Support
        </h2>
        <div className="grid md:grid-cols-2 gap-12 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-4">Tools</h3>
            <p>
              SolidWorks, Autodesk Inventor, AutoCAD LT, PTC Creo, MicroStation,
              Revit, Siemens NX, CATIA
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">File Formats</h3>
            <p>
              DWG, DXF, DWF, SLDPRT, SLDDRW, CATPART, CATPRODUCT, IPT, IAM,
              PRT, ASM, JT, PAR, ASM, DFT
            </p>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Sectors We Cater To
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            "Architecture & Construction",
            "Automotive & Aerospace",
            "Oil & Gas",
            "Heavy Engineering",
            "Interior Design & Furniture",
            "Retail & Manufacturing",
            "Energy & Utilities",
            "Electronics & Electrical",
            "Design Studios",
          ].map((sector, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl"
            >
              <Building2 className="w-10 h-10 mx-auto mb-4 text-indigo-600" />
              <p className="font-medium">{sector}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-gray-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-8">Why Nimble Auity?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
          {[
            {
              title: "Design Excellence",
              icon: DraftingCompass,
              desc: "Meticulous attention to detail with Six Sigma standards.",
            },
            {
              title: "Client Privacy",
              icon: Lock,
              desc: "Strict GDPR compliance with robust data security.",
            },
            {
              title: "Global Network",
              icon: Globe,
              desc: "Seamless worldwide delivery network with 24/7 support.",
            },
            {
              title: "Skilled Professionals",
              icon: Users,
              desc: "200+ CAD experts with multi-industry experience.",
            },
            {
              title: "Scalable Solutions",
              icon: Layers,
              desc: "Flexible and cost-effective CAD solutions.",
            },
            {
              title: "Cost-Effective Pricing",
              icon: DollarSign,
              desc: "Custom pricing models tailored to your business.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-800 rounded-xl shadow-lg hover:bg-gray-700"
            >
              <item.icon className="w-8 h-8 mb-4 text-indigo-400" />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-md hover:shadow-xl transition">
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-2">
                CAD Conversion for Dutch Heavy Equipment Manufacturer
              </h3>
              <p className="text-sm text-gray-600">
                Delivered multi-lingual CAD conversion with fast turnaround,
                enabling smooth operations.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-xl transition">
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-2">
                Shadow Board Designs for German Manufacturer
              </h3>
              <p className="text-sm text-gray-600">
                Created 3D models within 24 hours, boosting efficiency by 2.5x
                in 4 months.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
        <blockquote className="max-w-3xl mx-auto italic text-lg text-gray-700">
          "Nimble Auity has been a tremendous resource for our engineering
          department. Their precision and adaptability have exceeded our
          expectations."
        </blockquote>
        <p className="mt-4 font-semibold">– General Partner, US Manufacturing Company</p>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Outsource CAD Services for Enhanced Quality and Precision
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Don’t wait any longer. Contact Nimble Auity today and revolutionize
          your CAD workflows with precision-driven solutions.
        </p>
        <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 rounded-2xl">
          Get Started
        </Button>
      </section>
    </div>
  );
}
