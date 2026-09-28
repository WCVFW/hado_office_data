import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function BIM4DModelingServices() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble 4D BIM Modeling Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Exclusive and customized BIM 4D modeling services from top-notch experts at prices starting at $12/hour
        </p>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto py-12 px-6 text-gray-700 space-y-6">
        <p>
          Welcome to Nimble Acuity, your partner for professional 4D BIM services across construction, architecture, mechanical, and electrical domains. We provide seamless 4D simulations covering your entire project lifecycle, overcoming timeline, language, and protocol barriers.
        </p>
        <p>
          Our team researches each project, extracts quantities, and converts designs into interactive 4D models using the latest software. These models are intuitive, easy to understand, and can be integrated into cost estimation and execution workflows.
        </p>
      </section>

      {/* 4D BIM Modeling Services */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our 4D BIM Modeling Services</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "BIM Architectural Services",
              desc: "Create accurate CAD drawings, BIM models, and visual illustrations of architectural concepts for better understanding. Includes conceptual design detailing."
            },
            {
              title: "BIM Structural Services",
              desc: "Cover structural and construction documentation for steel and concrete designs. We provide precise structural drafting and BIM modeling services."
            },
            {
              title: "MEP BIM Services",
              desc: "Full mechanical, electrical, and plumbing modeling services using software like AutoCAD, Revit MEP, and CADDuct for accurate interpretation and visualization."
            },
            {
              title: "Other Services",
              desc: "Includes BIM planning & scheduling, construction schedules, coordinated model creation, project phasing simulation, lean scheduling, site logistics, construction visualization, and detailed simulation installation."
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
            "Risk detection to identify and mitigate potential project risks",
            "Identification of project gaps to avoid conflicts in designs",
            "Resource planning for manpower, equipment, and materials to minimize costs",
            "Faster project turnaround with efficient 4D scheduling",
            "Improved coordination and increased productivity across teams"
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
              <h3 className="text-xl font-semibold mb-2">3D Modeling & Photorealistic Rendering</h3>
              <p className="text-gray-600">
                Delivered precise 3D models and photorealistic renders for a top engineering firm at cost-effective rates.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Caseworks & Countertops Design</h3>
              <p className="text-gray-600">
                Delivered high-quality countertop and casework designs to a US-based manufacturer at competitive rates.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-green-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-gray-700 italic">
          “They have been able to learn our procedures quicker than I ever thought possible.”
        </blockquote>
        <p className="mt-2 text-gray-600">— General Partner, Manufacturing Company, US</p>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Partner with Nimble Acuity for 4D BIM Modeling</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Let us manage your BIM 4D planning, scheduling, and modeling services to give you a competitive edge in your projects.
        </p>
        <Button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
