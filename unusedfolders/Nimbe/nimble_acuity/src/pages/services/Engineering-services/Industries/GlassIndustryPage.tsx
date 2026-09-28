import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Building,
  FileText,
  Ruler,
  Settings,
  Package,
  Box,
  Hammer,
  Repeat,
  Wrench,
  PenTool,
  ClipboardList,
  BookOpen,
  Users,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function GlassIndustryPage() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Nimble Auity – CAD Engineering Services for the Glass Industry
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg md:text-xl"
          >
            Harness our precision-driven CAD engineering services for the glass
            industry to increase design efficiency, reduce lead times, and stay
            compliant.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="container mx-auto px-6 py-16">
        <p className="text-lg leading-relaxed">
          The pressure to maintain consistent quality in glass design while
          balancing the workload with the available resources disrupts project
          planning and interferes with construction timelines. Get innovative
          design solutions and access a team of skilled workforce with our CAD
          engineering services for the glazing industry. Engaging us enables you
          to sustain consistent design standards and stay adaptive to fluctuating
          project needs. Our services include 3D modeling, 2D drafting,
          structural analysis, smart glass incorporation, and simulation.
        </p>
        <p className="text-lg leading-relaxed mt-6">
          We use CAD software to create accurate and detailed drawings for
          automotive manufacturers, architects, and construction companies to
          help them design a wide variety of glass products, such as
          architectural glass structures, glassware, and automotive glass
          components. We also offer stress analysis and design testing using
          Finite Element Analysis (FEA) techniques to predict how your products
          react to real-world forces like heat, stress, and vibration. This
          identifies weak points and helps make the necessary adjustments in the
          design phase, which prevents budget-draining oversights in the
          post-production phase. All our designs comply with stringent building
          codes and safety standards, like ANSI Z97.1 and EN 12150, to mitigate
          legal and financial risks.
        </p>
      </section>

      {/* Services */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Glass Engineering Design Solutions We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Balustrade Design",
                icon: Layers,
                points: [
                  "Advanced 3D modeling techniques",
                  "Evaluation of structural integrity",
                  "Compliance with safety codes",
                  "Load analysis simulations",
                ],
              },
              {
                title: "Facade Design",
                icon: Building,
                points: [
                  "Energy-efficient glazing systems",
                  "BIM integration",
                  "Parametric design optimization",
                  "Facade performance assessment",
                ],
              },
              {
                title: "Panel Details and Design",
                icon: Ruler,
                points: [
                  "Finite Element Analysis (FEA)",
                  "Detailed fabrication schematics",
                  "Custom fittings and geometry",
                  "Alignment verification and modification",
                ],
              },
              {
                title: "Shop Drawings",
                icon: FileText,
                points: [
                  "Detailed construction documents",
                  "Layered CAD drafting",
                  "Compliance with fabrication standards",
                  "Tolerance analysis",
                ],
              },
              {
                title: "Thermal Modeling",
                icon: Settings,
                points: [
                  "Thermal gradient mapping for glass facade",
                  "Solar heat gain coefficient analysis",
                  "Energy performance optimization",
                  "Heat transfer path evaluation",
                ],
              },
              {
                title: "BIM Modeling",
                icon: Box, // replaced Cube with Box
                points: [
                  "Component configuration and analysis",
                  "Cross-disciplinary project coordination",
                  "Integrated 3D designs",
                  "Data-powered model integration",
                ],
              },
              {
                title: "Fabrication Drawings",
                icon: Hammer,
                points: [
                  "Detailed assembly instructions",
                  "CAD technical annotations",
                  "Accurate CNC machining outputs",
                  "Fabrication process simulation",
                ],
              },
              {
                title: "Material Take Off",
                icon: ClipboardList,
                points: [
                  "Quantity estimation reports",
                  "Material specification listings",
                  "Resource procurement planning",
                  "Cost-efficient material allocation",
                ],
              },
              {
                title: "CFD Analysis",
                icon: Repeat, // replaced Workflow with Repeat
                points: [
                  "Aerodynamic flow simulation",
                  "Air and thermal distribution mapping",
                  "Velocity and pressure drop profiling",
                  "Environmental impact assessment",
                ],
              },
              {
                title: "Energy Modeling",
                icon: Settings,
                points: [
                  "Thermal performance simulation",
                  "Renewable energy integration strategies",
                  "Glass details to determine HVAC load",
                  "Daylight usage analysis",
                ],
              },
              {
                title: "Technical Documentation",
                icon: BookOpen,
                points: [
                  "All-inclusive design specification report",
                  "Compliance documentation protocols",
                  "Detailed installation guides",
                  "Revision-controlled document updates",
                ],
              },
              {
                title: "Revit Families",
                icon: Package,
                points: [
                  "Component library creation",
                  "Adaptive geometry configuration",
                  "BIM model integration",
                  "Parametric family customization",
                ],
              },
            ].map((service, idx) => (
              <Card key={idx} className="shadow-lg rounded-2xl">
                <CardContent className="p-6">
                  <service.icon className="h-10 w-10 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-xl mb-4">{service.title}</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {service.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Partner with Nimble Auity for Glass CAD Engineering
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          We are more than just a service provider; we work as your extended
          team to help you embrace precision, innovation, and efficiency in
          every project.
        </p>
        <Button
          size="lg"
          className="bg-white text-blue-700 hover:bg-gray-100 font-semibold"
        >
          Contact Us
        </Button>
      </section>
    </div>
  );
}
