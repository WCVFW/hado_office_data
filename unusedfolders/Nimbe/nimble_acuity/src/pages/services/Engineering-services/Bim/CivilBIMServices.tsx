import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function CivilBIMServices() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Civil BIM Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Control overheads and improve project outcomes with contemporary designing practices and BIM technology — starting at $16/hour.
        </p>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto py-12 px-6 text-gray-700 space-y-6">
        <p>
          Constructing a residential or commercial project involves multiple departments and careful coordination. Nimble Acuity provides comprehensive civil BIM services to help engineers, architects, and developers plan, draft, and build efficiently while controlling costs. Our expert modelers and drafters leverage best-in-class BIM practices to ensure seamless project management regardless of team size or budget.
        </p>
      </section>

      {/* Civil BIM Services */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Civil BIM Services We Offer</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Construction BIM Services",
              desc: "High-quality 2D and 3D construction drawings using AutoCAD, Revit, MicroStation, and more, covering materials, wall thickness, roof details, floor plans, and more."
            },
            {
              title: "MEP Design and Drafting Services",
              desc: "Mechanical, electrical, and plumbing project support from inception to completion, including cost estimation, material selection, and design development."
            },
            {
              title: "HVAC Designing Services",
              desc: "Comprehensive HVAC duct design services for energy efficiency, operational functionality, and equipment cost reduction, following latest standards."
            },
            {
              title: "Plumbing and Drainage Design Services",
              desc: "Expert plumbing and drainage solutions including inlet, storm sewer, basin, and cross-drainage designs using advanced BIM tools."
            },
            {
              title: "Geospatial Designs",
              desc: "Advanced mapping and 3D city modeling using Terrestrial Laser Scanning, remote sensing, and spatial data conversion for accurate civil engineering constructions."
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

      {/* Civil BIM Process */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Civil BIM Process We Follow</h2>
        <ol className="max-w-4xl mx-auto list-decimal list-inside space-y-6 text-gray-700">
          <li>
            <strong>Concept Pre-design & Preparation:</strong> Collect all necessary project details including CAD drawings, floor plans, and structural information.
          </li>
          <li>
            <strong>BIM Execution Plan:</strong> Define objectives, timelines, constraints, protocols, and development phases.
          </li>
          <li>
            <strong>Milestone Mapping:</strong> Share the plan with construction, architecture, and engineering units for seamless coordination.
          </li>
          <li>
            <strong>Clash Detection:</strong> Review and resolve all potential conflicts in the building plan.
          </li>
          <li>
            <strong>Project Review & Delivery:</strong> Final BIM model prepared after diagnostic investigations and modifications.
          </li>
        </ol>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Other Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-gray-700">
          {[
            "Retail Visual Merchandising Services",
            "3D Architectural Walkthroughs",
            "Building Information Modeling",
            "Landscape Design and Drafting Services"
          ].map((service, idx) => (
            <Card key={idx} className="p-6 rounded-xl shadow hover:shadow-md transition">
              <CardContent>{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Nimble */}
      <section className="bg-white py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Nimble Civil BIM Services?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {[
            "Affordable pricing to reduce cost overheads",
            "Advanced software like Revit Architecture, Civil 3D, ArchiCAD",
            "High-quality solutions tailored to your requirements",
            "Access to certified team of BIM experts",
            "Strict adherence to global quality and safety standards",
            "Fast turnaround via global delivery centers",
            "Complete data protection with encrypted servers",
            "24/7 support and service"
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
              <h3 className="text-xl font-semibold mb-2">As-Built Drawings for US Architectural Firm</h3>
              <p className="text-gray-600">
                Completed 230 sites in 2 months using 11 team members, delivering CAD models with electrical layouts, RCP, switch positions, etc.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Architecture Drafting & Detailing Services</h3>
              <p className="text-gray-600">
                Assisted a UK-based engineering company with detailed CAD drafting and architectural detailing for complex projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-gray-700 italic">
          “Nimble Acuity has been a tremendous resource for our engineering department. They are precise, attentive, and quickly adapt to our processes.”
        </blockquote>
        <p className="mt-2 text-gray-600">— General Partner, Manufacturing Company, US</p>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started with Nimble Civil BIM Services</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Transform your civil engineering projects with our expert BIM services. Contact us today!
        </p>
        <Button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
