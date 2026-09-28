import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function CabinetDrawingServices() {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Cabinet Drawing Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Transform your design concepts into high-precision drafts with our
          cabinet drawing services. We expedite manufacturing by helping you
          eliminate cost-intensive design inaccuracies.
        </p>
        <Button className="mt-6 bg-white text-blue-700 hover:bg-gray-100">
          Connect with Our Experts
        </Button>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <p>
          Furniture manufacturers, architectural designers, and businesses across
          the joinery industry struggle to balance technical demands with
          creativity in cabinet designs. Nimble gives you access to expert
          draftsmen who transform your creative visions into detailed,
          ready-to-manufacture cabinet drawings.
        </p>
        <p>
          We are an experienced cabinet drawing services provider serving global
          clients with detailed 2D drafts and 3D renderings. Our team promotes
          collaboration and delivers outcomes that bridge the gap between design
          interpretation and finished cabinetry. We take the time to understand
          the design vision in each case and help reduce reworks by fully
          integrating your ideas into the manufacturing processes.
        </p>
      </section>

      {/* Customer Success Stories */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Customer Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Nimble Provided Construction Drawings for a Top Historic Property Management Firm
              </h3>
              <p>
                A top US property management company hired our civil engineering
                professionals to create accurate construction drawings to
                jumpstart their building remodeling projects.
              </p>
              <Button variant="link" className="mt-3 px-0">
                Read more
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Case Study on REVIT Modeling to Swiss Architectural Firm
              </h3>
              <p>
                Our REVIT Modeling Services Helped a Swiss-based Architectural
                Firm Draft Flawless Construction Designs with accurate
                architectural, structural, and MEP elements.
              </p>
              <Button variant="link" className="mt-3 px-0">
                Read more
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-center italic text-lg">
          “You have been a tremendous resource for our engineering department.
          Your team is very precise and attentive to all our needs and has been
          able to learn our procedures quicker than I ever thought possible.”
        </blockquote>
        <p className="mt-4 text-center font-semibold">
          — General Partner, Manufacturing Company in the US
        </p>
      </section>

      {/* Solutions */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Our Custom Cabinet Drawing Outsourcing Solutions
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Kitchen Cabinet Drawing",
              points: [
                "Functional Space Optimization",
                "Precision Layout Customization",
                "Aesthetic Design Integration",
              ],
            },
            {
              title: "Millwork Drafting",
              points: [
                "Accurate Material Specifications",
                "Detailed Joinery Techniques",
                "Custom Fixture Design",
              ],
            },
            {
              title: "Cabinet Shop Drawing",
              points: [
                "Component Identification & Fabrication Instructions",
                "Comprehensive Assembly Detailing",
                "Cabinet Vision Shop Drawings",
              ],
            },
            {
              title: "Cabinet Layout Design and Drafting",
              points: [
                "Optimized Spatial Arrangements",
                "Detailed Functional Layouts",
                "Precise Dimensional Accuracy",
              ],
            },
            {
              title: "Cabinet Construction Drawings",
              points: [
                "Comprehensive Assembly Instructions",
                "Material Specification Details",
                "Structural Reinforcement Integration",
              ],
            },
            {
              title: "Cabinet Plan Rendering",
              points: [
                "Realistic Visual Presentations",
                "Textured Finish Depictions",
                "Accurate Scale Modeling",
              ],
            },
          ].map((service, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <ul className="list-disc ml-5 space-y-1">
                  {service.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Our Process for Thorough Cabinet Drafting
        </h2>
        <ol className="max-w-4xl mx-auto space-y-4 text-lg">
          <li><b>01. Consultation and Requirement Discovery</b> – We evaluate specific use cases, scale, and scope.</li>
          <li><b>02. Space and Site Analysis</b> – We analyze dimensions, space constraints, and environmental factors.</li>
          <li><b>03. Cabinet Sketching</b> – We create sketches to explore different arrangements efficiently.</li>
          <li><b>04. Material Selection and Design Optimization</b> – We choose materials based on durability, cost, and aesthetics.</li>
          <li><b>05. Technical Specifications and Drawings</b> – We deliver precise technical drawings with fittings and dimensions.</li>
          <li><b>06. Quality Check and Design Delivery</b> – Final quality checks are performed before delivery.</li>
        </ol>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-700 text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Outsource Cabinet Drawing Services to Nimble
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Choosing Nimble gives you access to cutting-edge technology and
          industry knowledge. Our specialists deliver superior cabinet designs
          that resonate with modern demands while promoting sustainability.
        </p>
        <Button className="bg-white text-indigo-700 hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
