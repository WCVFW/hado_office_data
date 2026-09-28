import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function ArchitecturalBIMServices() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Architectural BIM Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Leverage deep domain expertise to bring your construction ideas to life. Get realistic drawings and 3D walkthroughs of your construction projects.
        </p>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto py-12 px-6 text-gray-700 space-y-6">
        <p>
          Building Information Modeling (BIM) has transformed how architects and builders approach building design and construction. Nimble Acuity provides comprehensive architectural BIM services to help clients create accurate 3D models, perform advanced analysis, and streamline the entire design process from conception to completion.
        </p>
        <p>
          Our experienced engineers and modelers are proficient in AutoCAD, Revit, ArchiCAD, and other leading tools, enabling them to model all types of residential and commercial projects while ensuring compliance with international standards.
        </p>
      </section>

      {/* Architectural BIM Solutions */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Architectural BIM Solutions We Offer</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Architectural Rendering Services",
              desc: "Create realistic 3D images and animations to visualize concept designs and finished projects."
            },
            {
              title: "BIM Drawing Services",
              desc: "Provide detailed drawings and plans derived from BIM models for clear communication of design intent."
            },
            {
              title: "Architectural BIM Consulting Services",
              desc: "Expert guidance on implementing and integrating BIM into architectural projects for optimal results."
            },
            {
              title: "CAD to BIM Conversion Services",
              desc: "Convert 2D CAD drawings into accurate 3D BIM models, ensuring all design elements are represented."
            },
            {
              title: "BIM Simulation Analysis",
              desc: "Conduct energy efficiency, lighting, acoustics, and ventilation simulations to optimize building performance."
            },
            {
              title: "4D Simulation Services",
              desc: "Visualize the sequencing and integration of all BIM components in the actual construction timeline."
            }
          ].map((service, idx) => (
            <Card key={idx} className="shadow-md rounded-2xl hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Architectural BIM Process */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Architectural BIM Modeling Process We Follow</h2>
        <ol className="max-w-4xl mx-auto list-decimal list-inside space-y-6 text-gray-700">
          <li>
            <strong>Concept Design & Preparation:</strong> Collect project details including building design, CAD drawings, floor plans, and structural information.
          </li>
          <li>
            <strong>Creating a BIM Execution Plan:</strong> Define timelines, process protocols, development phases, and potential constraints.
          </li>
          <li>
            <strong>Design Mapping:</strong> Create comprehensive architectural designs and share them with your construction, architecture, and engineering teams.
          </li>
          <li>
            <strong>Clash Detection:</strong> Detect and resolve all possible clashes in the building plan to prevent project conflicts.
          </li>
        </ol>
      </section>

      {/* Architectural BIM Tools */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Architectural BIM Tools That We Leverage</h2>
        <div className="flex flex-wrap justify-center gap-4 text-gray-700">
          {["Revit", "SketchUp", "Autodesk BIM 360", "Dynamo", "Tekla", "Solibri", "Rhino", "Grasshopper"].map((tool, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              {tool}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Nimble */}
      <section className="bg-white py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Nimble Architectural BIM Services?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {[
            "Strict adherence to quality control norms and international standards",
            "Access to certified engineers, modelers, and drafters",
            "Customized solutions tailored to your construction needs",
            "Fast project turnaround through global delivery centers",
            "Complete data protection with no unauthorized sharing",
            "Round-the-clock 24/7 support and service",
            "Affordable and flexible pricing options"
          ].map((reason, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              {reason}
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Additional Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-gray-700">
          {[
            "BIM Services for construction sequencing and collision detection",
            "Mechanical BIM Services for ductwork, piping, and HVAC",
            "Civil BIM Services for drafting, planning, and construction",
            "Electrical BIM Services for lighting, tray layouts, and conduits",
            "4D BIM Modeling Services for construction visualization and sequencing",
            "Structural BIM Services for steelwork and rebar detailing"
          ].map((service, idx) => (
            <Card key={idx} className="p-6 rounded-xl shadow hover:shadow-md transition">
              <CardContent>{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Customer Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Revit MEP Services for UK Engineering Consultants</h3>
              <p className="text-gray-600">
                Delivered Revit MEP services as per SLA goals for a top UK engineering consulting firm.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">AutoCAD Conversion for US Interior Design Company</h3>
              <p className="text-gray-600">
                Delivered precise AutoCAD conversion services, earning client praise for efficiency and reliability.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-purple-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-gray-700 italic">
          “Nimble Acuity has been a tremendous resource for our engineering department. They are precise, attentive, and quickly adapt to our procedures.”
        </blockquote>
        <p className="mt-2 text-gray-600">— General Partner, Manufacturing Company, US</p>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started with Nimble Architectural BIM Services</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Transform your construction projects with our expert architectural BIM services. Contact us today!
        </p>
        <Button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
