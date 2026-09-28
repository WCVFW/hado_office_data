import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function CivilInfrastructureBIM() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble BIM for Civil & Infrastructure Projects
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Improve project outcomes with intelligent, intuitive, and connected BIM workflows — starting at just $14/hour.
        </p>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto py-12 px-6 text-gray-700 space-y-6">
        <p>
          Looking to create accurate 3D models and real-world context for your civil and infrastructure projects? Nimble Acuity leverages BIM tools and workflows to identify potential issues early, reduce costs, and streamline project execution. Our solutions help civil engineers, architects, and project managers visualize, coordinate, and manage infrastructure projects efficiently.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">BIM for Civil & Infrastructure Design Services</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Site Modeling Services",
              desc: "3D modeling of parking lots, topography, roads, gates, sidewalks, street lighting, concrete duct banks, 4D modeling, clash detection, and 3D animation videos."
            },
            {
              title: "Underground Utilities Modeling",
              desc: "3D mapping of underground piping, ducts, and foundations to accurately visualize subsurface elements."
            },
            {
              title: "Tunnel Modeling Services",
              desc: "Geometric design, concrete structure modeling, rebar detailing, utilities coordination, quantity extraction, and GFC drawings."
            },
            {
              title: "Bridges Modeling Services",
              desc: "Design I-girder & box girder bridges, sub-structures, foundations, utilities, quantity extraction, and GFC drawings."
            },
            {
              title: "Water Treatment Plant Modeling",
              desc: "Comprehensive 3D modeling of water and sewage treatment plants for visualization and modification without cost overruns."
            },
            {
              title: "BIM for Safety Services",
              desc: "Map out safety features in 3D, create parametric site components, and maintain libraries of equipment and accessories."
            },
            {
              title: "Visual BIM Services",
              desc: "High-quality 3D visualizations for roads, tunnels, buildings, and civil infrastructure projects for better decision-making."
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

      {/* Other Services Section */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Other Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-gray-700">
          {[
            "Land Development Design Services",
            "3D Architectural Walkthroughs",
            "Building Information Modeling",
            "3D Rendering & Walkthrough Services"
          ].map((service, idx) => (
            <Card key={idx} className="p-6 rounded-xl shadow hover:shadow-md transition">
              <CardContent>{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Nimble Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Nimble for Civil & Infrastructure BIM?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {[
            "Affordable pricing options with hourly and FTE rates",
            "High-quality services backed by ISO certification",
            "Use of latest BIM tools and technologies",
            "Structured and disciplined BIM workflow",
            "Experienced team with 26+ years of expertise",
            "World-class infrastructure and amenities",
            "Data security and GDPR compliance",
            "Quick turnaround time for all projects"
          ].map((reason, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              {reason}
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
              <h3 className="text-xl font-semibold mb-2">European Client - Scan to BIM</h3>
              <p className="text-gray-600">
                Created high-quality 3D models of old residential buildings, including 2D floor plans, sections, and elevations from scans efficiently.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Singapore Technology Giant - BIM Modeling</h3>
              <p className="text-gray-600">
                Provided quick and accurate BIM modeling services for infrastructure projects, ensuring cost-effective and timely delivery.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-gray-700 italic">
          “The focus and commitment of Nimble's engineers and managers is first-rate and has exceeded our expectations.”
        </blockquote>
        <p className="mt-2 text-gray-600">— SVP and Co-Founder, Engineering Resource Company</p>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started with Nimble BIM for Civil & Infrastructure</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Transform your civil and infrastructure projects with expert BIM services. Contact us today!
        </p>
        <Button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
