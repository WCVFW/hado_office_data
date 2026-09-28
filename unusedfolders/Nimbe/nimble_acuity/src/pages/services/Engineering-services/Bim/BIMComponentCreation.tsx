import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function BIMComponentCreation() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble BIM Component Creation Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          At just $11/hour, get professional BIM component creation for architecture, MEP, structural, and interior projects.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          Lack specialized skills for designing high-quality 2D or 3D BIM components? Nimble Acuity provides fully detailed BIM models, including materials and parametric details, with unmatched precision. Our experts create components for architecture, interior, MEP, and structural projects while adhering to safety and design standards.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">BIM Component Creation Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Component Modeling in Family Editor",
              desc: "We use parametric modeling in the family editor to create components in sequence, ensuring high-quality assemblies compliant with standards."
            },
            {
              title: "Geometry Modeling",
              desc: "Using blend and sweep commands, we assemble components into accurate solid forms, adjusting overlaps to maintain geometrical relevance."
            },
            {
              title: "BIM Component Creation using Parameters",
              desc: "Apply parameters for material, size, type, and component number to allow full flexibility and control in your project."
            },
            {
              title: "BIM Component Creation with LOD Matrix",
              desc: "We ensure components comply with your LOD requirement, representing elements in 2D or 3D regardless of complexity."
            },
            {
              title: "Creation of Component Database",
              desc: "We develop a single-source BIM component database for architecture, MEP, interiors, and structural projects, enabling correct family placement."
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

      {/* Process Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">BIM Component Creation Process</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700 text-lg">
          <li>Nimble's BIM experts collaborate with clients to determine needs and current challenges.</li>
          <li>The project leader delegates tasks to specialists based on complexity and timeline.</li>
          <li>BIM component creation is executed according to client specifications and schedule.</li>
          <li>Quality control team verifies design consistency and compliance with standards.</li>
        </ol>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Nimble BIM Component Creation?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "High-quality services with professional experts",
            "Affordable and customizable services",
            "World-class infrastructure with advanced software and hardware",
            "ISO 9001:2015 certified",
            "100% data security compliant with ISO/IEC 27001:2015",
            "Quick turnaround time",
            "Scalable services to meet project demands",
            "Dedicated SPOC for client queries",
            "Experienced engineers, architects, and design specialists",
            "Round-the-clock support via phone, email, and chat"
          ].map((benefit, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-gray-700">
              {benefit}
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Nimble Provided Construction Drawings for a Top Historic Property Management Firm</h3>
              <p className="text-gray-600">
                Delivered high-quality construction drawings to ensure 100% client satisfaction at nominal cost.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Nimble Provided Construction Drawings for Top Italian Architectural Firm</h3>
              <p className="text-gray-600">
                Designed apartment complexes in London, ensuring timely project completion with the right resources and tools.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-purple-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-gray-700 italic">
          “Nimble Acuity has been a tremendous resource for our engineering department. Very precise and attentive, learning our procedures quicker than expected.”
        </blockquote>
        <p className="mt-2 text-gray-600">— General Partner, Manufacturing Company, US</p>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started with Nimble BIM Component Creation</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Share your requirements with our experts, and we will help you customize high-quality BIM components at nominal rates.
        </p>
        <Button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
