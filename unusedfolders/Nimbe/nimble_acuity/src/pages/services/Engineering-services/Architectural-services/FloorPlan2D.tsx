import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function FloorPlan2D() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-green-800 to-green-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Nimble Acuity 2D Floor Plan Design Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Provide a potential buyer with a comprehensive understanding of a
          property's layout and visualize structural layouts, HVAC systems, and
          other technical details with precision.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-gray-700 space-y-6">
        <p>
          Empty properties often look smaller or less appealing. Without proper
          furniture and decor layout, it can be hard to show a property's true
          potential. With more online listings, buyers make first impressions
          based on images and walkthroughs.
        </p>
        <p>
          Without a detailed 2D floor plan, highlighting every corner of the
          space, it’s difficult to strike a strong deal. Nimble Acuity helps
          create scaled, dimensioned floor plan designs to guide renovations,
          estimate costs, and enable informed purchase decisions.
        </p>
      </section>

      {/* Customer Case Studies */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Customer Case Studies
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">
                Construction Drawings for a Top Historic Property Management Firm
              </h3>
              <p>
                A New York-based firm required construction drawings for a
                seven-story residential remodel. We delivered architectural,
                mechanical, and structural drawings along with material takeout
                within seven days.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">
                Revit Modeling Services to Swiss Architectural Firm
              </h3>
              <p>
                A Swiss architectural firm needed LOD 300 architectural,
                structural, and MEP modeling for a residential project. We
                delivered using Revit 2017.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Layered & Annotated 2D Floor Plan Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Custom 2D Floor Plans",
              desc: "Designed to client specifications, layered for multi-disciplinary coordination, ready for 3D integration."
            },
            {
              title: "Black and White Floor Plan",
              desc: "Simplified visualization, dimensioned for precision with annotations."
            },
            {
              title: "Colored 2D Floor Plan",
              desc: "Color-coded, visually appealing layouts with detailed layering."
            },
            {
              title: "2D Textured Floor Plan",
              desc: "Textures for realistic materials, enhanced depth perception, high-quality software application."
            },
            {
              title: "Remodeling Floor Plan",
              desc: "Visualizes structural changes, color-coded for renovations, accurate dimensions."
            },
            {
              title: "Architectural Floor Plan",
              desc: "Detailed architectural features, scaled for construction, BIM-ready."
            },
            {
              title: "2D Floor Plan Drawings",
              desc: "Precise spatial representation, annotated and dimensioned for clarity."
            },
            {
              title: "Floor Plan Rendering",
              desc: "2D plans rendered as images with realistic color, shadow, and decor."
            },
            {
              title: "Photorealistic Rendering",
              desc: "Ultra-realistic images with advanced lighting, textures, and high-resolution output."
            }
          ].map((service, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-green-700">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Seamless 2D Floor Plan Design Process Flow
        </h2>
        <ol className="space-y-4 text-gray-700">
          {[
            "Requirement Gathering – Collaborate with clients to understand their needs and gather property information.",
            "Initial Drafting – Craft preliminary 2D floor plan outlining basic property structure.",
            "Detailing and Layering – Enhance draft with architectural elements, separating layers for clarity.",
            "Annotation and Dimensioning – Annotate and dimension each layer for a comprehensive representation.",
            "Rendering – Transform annotated floor plan into visually appealing representations using colors, textures, and shading.",
            "Review and Finalization – Conduct thorough review, make revisions, and deliver final product."
          ].map((step, idx) => (
            <li key={idx} className="bg-gray-50 p-4 rounded-lg shadow-sm">
              {idx + 1}. {step}
            </li>
          ))}
        </ol>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Why Choose Nimble Acuity for 2D Floor Plan Design?
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
          {[
            "Diverse Design Formats – Black & white, colored, and textured plans.",
            "Customization and Precision – Tailored templates and modern design software.",
            "Industry Expertise – Residential and commercial floor plan specialists.",
            "Client-Centric Approach – Clear communication, collaboration, 24/7 support.",
            "Efficiency and Security – Timely delivery with stringent data protection."
          ].map((item, idx) => (
            <li key={idx} className="bg-gray-50 p-4 rounded-lg shadow-sm">
              ✅ {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Industries */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Industries We Empower
        </h2>
        <p className="text-center text-gray-700">
          Retail, Real Estate, Interior Design, Educational, Entertainment, Architecture, Hospitality, Industrial, Manufacturing, Healthcare, Construction
        </p>
      </section>

      {/* Software */}
      <section className="bg-gray-50 py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Our Software Capabilities
        </h2>
        <p className="text-center text-gray-700">
          SolidWorks, AutoCAD, Unigraphics NX, Inventor, MicroStation, Catia Pro-E, WildFire, Siemens NX
        </p>
      </section>

      {/* Additional Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Additional Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "CAD Services – Expert skills and cutting-edge software for precision.",
            "Architectural Rendering – Realistic images with 3ds Max for pre-construction visualization.",
            "Architectural Drafting Services – Detailed and compliant drawings using AutoCAD Architecture.",
            "Architectural Visualization Services – Vivid visuals to communicate design concepts."
          ].map((srv, idx) => (
            <Card key={idx}>
              <CardContent className="p-6">
                <h3 className="font-semibold">{srv}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-center">
        <p className="text-gray-700 mb-6">
          Experience the efficiency and precision of Nimble Acuity 2D floor plan
          designs to maximize your project outcomes.
        </p>
        <Button className="bg-green-700 text-white px-6 py-3 rounded-xl">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
