import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function StructuralBIM() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Structural BIM Consulting & Design Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Hire us at just $11/hour for BIM implementation, coordination, training, and more.
        </p>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto py-12 px-6 text-gray-700 space-y-6">
        <p>
          Structural BIM has transformed architectural modeling and design. Our specialists ensure a smooth transition from traditional processes to BIM execution, tailoring software processes and workflows to each project. We partner with construction companies, architects, designers, and contractors, providing over 20 years of expertise in structural BIM consulting.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Structural BIM Services We Offer</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Implementation of BIM",
              desc: "Assess BIM capabilities, define goals, establish strategies, and create custom implementation plans based on the company's BIM maturity level."
            },
            {
              title: "Creation of Tailor-made BIM Library",
              desc: "Develop customized BIM libraries in Autodesk Revit for architects, engineers, and companies to use throughout project lifecycles."
            },
            {
              title: "BIM Coordination",
              desc: "Deliver fully coordinated drawings to ensure smooth advancement of on-site construction activities."
            },
            {
              title: "Project Integration",
              desc: "Adopt an integrated approach to BIM technology and processes for successful project delivery."
            },
            {
              title: "On-site BIM Support",
              desc: "Provide expert BIM assistance on-site at competitive pricing for real-time problem solving."
            },
            {
              title: "BIM Training",
              desc: "Offer extensive BIM training for organizations adopting BIM processes, helping them make informed decisions."
            },
            {
              title: "COBie Services",
              desc: "Capture and store project data to support execution, maintenance, and management through COBie standards."
            },
            {
              title: "Project Constructability Reviews",
              desc: "Conduct thorough constructability evaluations and document findings to ensure feasibility and efficiency."
            },
            {
              title: "BIM Execution Plans",
              desc: "Draft detailed BIM execution plans, ensuring process integration across all project stages and lifecycle."
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

      {/* Structural Consulting Section */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">BIM Structural Consulting</h2>
        <p className="max-w-6xl mx-auto text-gray-700 mb-6">
          Nimble Acuity provides expert structural BIM consulting with advanced infrastructure, delivering flawless BIM models and error-free design execution. Our structural consulting includes:
        </p>
        <ul className="list-disc list-inside max-w-6xl mx-auto text-gray-700 space-y-2">
          <li>Analyzing structural requirements and devising structural designs</li>
          <li>Establishing 3D, 4D, and 5D BIM services</li>
          <li>Structural steel designing and detailing</li>
          <li>Developing 3D models for all project components and integration</li>
          <li>Using Navisworks for clash detection and risk management</li>
          <li>Creating intelligent object libraries for MEP and HVAC equipment</li>
          <li>Devising budgets and cost estimates for BIM implementation</li>
          <li>Modeling equipment, plumbing, mechanical fittings, and electrical instruments in Revit</li>
        </ul>
      </section>

      {/* Process Flow */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Structural BIM Process We Follow</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-4 max-w-3xl mx-auto">
          <li>Understanding Client Requirements and BIM Capability Assessment</li>
          <li>Defining Project Goals and Roadmap</li>
          <li>Formulating BIM Execution Plan with protocols and standards</li>
          <li>BIM Designing including 3D models, risk assessment, and clash detection</li>
          <li>BIM Implementation and software integration, process mapping</li>
          <li>BIM Adoption and Support Systems including training and transition</li>
        </ol>
      </section>

      {/* Other Services Section */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Other Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-gray-700">
          {[
            "Retail Visual Merchandising Services",
            "BIM Component Creation Services",
            "Millwork Drawings Services",
            "Point Cloud Services"
          ].map((service, idx) => (
            <Card key={idx} className="p-6 rounded-xl shadow hover:shadow-md transition">
              <CardContent>{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Nimble Section */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Why Partner with Nimble?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-gray-700">
          {[
            "Improved construction efficiency",
            "Cost-effective pricing",
            "Modern technological infrastructure",
            "Assured ROI",
            "Faster BIM implementation",
            "Customized approach for clients",
            "Error-free designs and processes",
            "Empowering client teams",
            "Support across diversified time zones",
            "Guaranteed confidentiality"
          ].map((benefit, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
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
              <h3 className="text-xl font-semibold mb-2">US Architectural Firm - As Built Drawings</h3>
              <p className="text-gray-600">
                Developed CAD models for 230 sites in 2 months using only 11 members, including electrical layouts, switch positions, and RCP.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">European Client - Laser Scan to BIM</h3>
              <p className="text-gray-600">
                Converted scans into accurate 3D BIM models, 2D floor plans, sections, and elevations for old residential buildings.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-gray-700 italic">
          “Nimble Acuity has been a tremendous resource for our engineering department. They are precise, attentive, and quickly adapt to our procedures.”
        </blockquote>
        <p className="mt-2 text-gray-600">— General Partner, Manufacturing Company, US</p>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started with Nimble Structural BIM</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Transform your structural design and execution with our expert BIM consulting and design services. Contact us today!
        </p>
        <Button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
