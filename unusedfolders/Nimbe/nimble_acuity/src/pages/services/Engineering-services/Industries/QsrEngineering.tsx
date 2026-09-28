import React from "react";
import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  Building2,
  Cog,
  ClipboardList,
  Wrench,
  Layers,
  Users,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

const QsrEngineering: React.FC = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="relative bg-gradient-to-r from-red-600 to-red-800 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Nimble Auity – Engineering Services for Quick Service Restaurants
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl mb-6">
          Design efficient kitchen layouts to reduce service time and maximize
          throughput. We integrate variable refrigerant flow and energy recovery
          ventilation for energy and cost savings.
        </p>
        <Button size="lg" className="bg-white text-red-700 hover:bg-gray-100">
          Contact Us
        </Button>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-6">
        <p>
          Franchisees in the quick service restaurant (QSR) sector face heavy
          competition, brand integrity assurance, budget constraints, and setup
          of the restaurant within a short span. These pain points can hamper
          the optimum growth of the organization, necessitating the need to
          procure a solution that solves these specific challenges. By
          contracting engineering services out, the franchisees can incorporate
          customized and linear kitchen designs, use standard HVAC, and draw
          technical designs that meet the franchiser's guidelines.
        </p>
        <p>
          Our bespoke solutions are aimed at solving compliance and speedy setup
          issues, their proper implementation within the organization increases
          efficiency and reduces costs. Franchisees can benefit from partnering
          with a specialized engineering firm that has a wealth of knowledge and
          leverages the latest technologies. Contact our consultants today to
          reserve the time and materials invested in ineffective tasks and
          maintain a uniform delivery of the brand.
        </p>
      </section>

      {/* Customer Success Stories */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Customer Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6 space-y-3">
              <h3 className="font-semibold text-lg">
                Nimble Provided 2D to 3D Conversion of Mechanical Legacy
                Drawings
              </h3>
              <p>
                Our engineers converted 1600 2D mechanical legacy drawings into
                3D for an American engineering firm at affordable rates within a
                six-month window.
              </p>
              <Button variant="outline">Read More</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-3">
              <h3 className="font-semibold text-lg">
                Nimble Provided Reverse Engineering of Machine Parts
              </h3>
              <p>
                Our engineers provided reverse engineering of five parametric 3D
                models each month while ensuring 1nm hole positioning accuracy
                at affordable rates.
              </p>
              <Button variant="outline">Read More</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Improve your Kitchen Design with QSR Engineering Services
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Assembly Design / Kitchen Layout Design",
              points: [
                "Ergonomic station placement",
                "Workflow optimization",
                "Space utilization efficiency",
                "Compliance with food safety standards",
              ],
              icon: UtensilsCrossed,
            },
            {
              title: "HVAC Design",
              points: [
                "Variable refrigerant flow systems",
                "Energy recovery ventilation",
                "Load calculation accuracy",
                "Indoor air quality management",
              ],
              icon: Cog,
            },
            {
              title: "Shop Drawings",
              points: [
                "Detailed dimensional accuracy",
                "Specification clarity",
                "Coordination with construction plans",
                "Compliance with building codes",
              ],
              icon: ClipboardList,
            },
            {
              title: "Fabrication Drawings",
              points: [
                "Material specification",
                "Tolerance precision",
                "Component integration",
                "Manufacturing instruction clarity",
              ],
              icon: Wrench,
            },
            {
              title: "Sheet Metal Design",
              points: [
                "Corrosion-resistant alloys",
                "Structural integrity",
                "Ductwork efficiency",
                "Thermal conductivity considerations",
              ],
              icon: Layers,
            },
            {
              title: "Cabinet Modeling Services",
              points: [
                "3D visualization",
                "Custom-fit optimization",
                "Material selection",
                "Assembly schematic detailing",
              ],
              icon: Building2,
            },
          ].map((service, idx) => (
            <Card key={idx}>
              <CardContent className="p-6">
                <service.icon className="h-8 w-8 text-red-600 mb-3" />
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our 6-Step Process Flow for Restaurant MEP Design & Engineering
        </h2>
        <ol className="space-y-6 max-w-4xl mx-auto">
          {[
            "Initial Consultation and Needs Assessment",
            "Site Evaluation and Data Collection",
            "Conceptual Design and Proposal Development",
            "Design Finalization and Client Approval",
            "Production of Technical Drawings and Documentation",
            "Implementation and Quality Assurance",
          ].map((step, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle className="text-red-600 mt-1" />
              <span>
                <strong>0{idx + 1}. </strong>
                {step}
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* Industries */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Industries that Benefit from Our Services
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
          {[
            "Architects",
            "Restaurant Owners",
            "Supply Chain Management Companies",
            "Interior Designers",
            "Cabinet Manufacturers",
            "Franchisees",
            "Commercial Real Estate Developers",
            "Hospitality",
            "Restaurant Consultants",
            "MEP Engineers",
          ].map((industry, idx) => (
            <Card key={idx}>
              <CardContent className="p-4">{industry}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Benefits of Choosing Nimble Auity
        </h2>
        <ul className="max-w-5xl mx-auto space-y-4">
          {[
            "Advanced Technology Integration",
            "Optimized Energy Consumption",
            "High-end Material Selection",
            "Shortened Deadlines",
            "Scalability for Multi-Unit Operations",
            "Increased Risk Mitigation Measures",
          ].map((benefit, idx) => (
            <li key={idx} className="flex gap-3 items-start">
              <CheckCircle className="text-red-600 mt-1" />
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      {/* Insights */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Must-Read Industry Insights
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6 space-y-3">
              <h3 className="font-semibold">
                The Impact of Technological Advancements on Civil and
                Construction Industries
              </h3>
              <Button variant="outline">Read More</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-3">
              <h3 className="font-semibold">
                How Can HVAC Systems Help Manage Air Quality During Covid
                Pandemic
              </h3>
              <Button variant="outline">Read More</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-red-600 to-red-800 text-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Partner with Nimble Auity for QSR Engineering Services
        </h2>
        <p className="max-w-3xl mx-auto mb-8">
          Contact us for appropriate engineering solutions to your restaurant's
          operational optimization, green design, and compliance enhancement,
          which will empower you to develop sustainably.
        </p>
        <Button size="lg" className="bg-white text-red-700 hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default QsrEngineering;
