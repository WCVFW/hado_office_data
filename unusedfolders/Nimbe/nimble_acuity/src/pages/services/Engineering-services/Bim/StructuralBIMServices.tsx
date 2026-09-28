import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function StructuralBIMServices() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Structural BIM Drafting Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Bridge the gap between design and development with accurate structural BIM drafting services for superior coordination and clash detection, starting at $12/hour.
        </p>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto py-12 px-6 text-gray-700 space-y-6">
        <p>
          Structural BIM drafting provides deep insight into the structural components of a building, helping architects, engineers, and developers plan, design, and construct efficiently.
        </p>
        <p>
          Nimble Acuity leverages advanced software and technologies to create complete pre-construction models of buildings, enabling better understanding of geometry, materials, and construction requirements.
        </p>
      </section>

      {/* Structural BIM Drafting Services */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Structural BIM Drafting Services</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Construction Documentation",
              desc: "Detailed 2D drawings for floor plans, sections, elevations, frames, shop drawings for steel structures, reinforcements, prefabricated assemblies, duct fabrication, electrical & plumbing drawings, and engineering load calculations."
            },
            {
              title: "Rebar Detailing",
              desc: "Comprehensive shop drawings covering rebar size, spacing, location, bending dimensions, shapes, and laps for ultimate construction accuracy."
            },
            {
              title: "Steel Detailing",
              desc: "Accurate structural steel detailing including 3D models, construction plans, frame sections, and connectivity diagrams for reliable structures."
            },
            {
              title: "Structural 3D Modeling",
              desc: "Interactive 3D models providing immersive visualization of your structural designs using latest modeling software and techniques."
            },
            {
              title: "Structural Framework Modeling",
              desc: "Plan and visualize the exact framework of your building using state-of-the-art BIM tools."
            },
            {
              title: "Precast Detailing",
              desc: "Minimize errors, optimize materials, and improve resource planning with detailed precast designs."
            },
            {
              title: "Shop/Fabrication Drawings",
              desc: "Create precise 2D and 3D fabrication drawings following the latest building standards for seamless construction execution."
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

      {/* Benefits Section */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Benefits of Structural BIM Drafting Services</h2>
        <ul className="max-w-4xl mx-auto list-disc list-inside space-y-3 text-gray-700">
          {[
            "Understand your building's space arrangements, materials, and assemblies",
            "Gain a better understanding of light, energy, and space",
            "Identify and mitigate structural and functional clashes",
            "Identify construction materials, procedures, and quality",
            "Estimate construction cost, schedule, and timelines",
            "Reduce risk and quality issues",
            "Improve construction efficiency"
          ].map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* Structural BIM Drafting Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Structural BIM Drafting Process</h2>
        <ol className="list-decimal list-inside space-y-6 text-gray-700">
          <li>
            <strong>Requirement Analysis:</strong> Understand project requirements and procure necessary details for effective structural drafting.
          </li>
          <li>
            <strong>Building the Design Strategy:</strong> Create a strategy for real-time, realistic designs ensuring higher safety, accuracy, and efficiency.
          </li>
          <li>
            <strong>Creating the Structural Design:</strong> Use advanced BIM tools to create precise designs bridging design and construction.
          </li>
          <li>
            <strong>Delivering the Final Draft:</strong> Provide final designs to improve coordination and decision-making during construction.
          </li>
        </ol>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Other Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-gray-700">
          {[
            "Building Information Modeling (BIM)",
            "Architectural Services",
            "Civil Engineering Services",
            "Mechanical Engineering Services"
          ].map((service, idx) => (
            <Card key={idx} className="p-6 rounded-xl shadow hover:shadow-md transition">
              <CardContent>{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Nimble */}
      <section className="bg-white py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Nimble Acuity?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {[
            "Competitive and affordable pricing",
            "Use of the latest BIM tools and technologies",
            "Instant access to certified modelers and drafters",
            "Tailored services and solutions for your unique requirements",
            "Single point of contact for seamless communication",
            "Quick turnaround times for efficient project delivery",
            "24/7 help and support for peace of mind"
          ].map((reason, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
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
              <h3 className="text-xl font-semibold mb-2">3D Modeling & Photorealistic Rendering for Engineering Firm</h3>
              <p className="text-gray-600">
                Delivered precise 3D models and photorealistic renders for a reputed engineering firm at cost-effective rates.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Caseworks & Countertops Design for US Manufacturer</h3>
              <p className="text-gray-600">
                Delivered high-quality countertop and casework designs for a US-based manufacturer at competitive rates.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-gray-700 italic">
          “A robust congratulations to the team at Nimble Acuity for a job well done.”
        </blockquote>
        <p className="mt-2 text-gray-600">— CMO, Leading Medical Care Company, Seattle, WA</p>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started with Nimble Structural BIM Drafting Services</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Share your structural BIM drafting requirements with Nimble Acuity and receive a customized service plan tailored to your needs.
        </p>
        <Button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
