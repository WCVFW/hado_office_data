import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function ElectricalBIMServices() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-yellow-500 to-red-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Electrical BIM Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Get access to data-driven 3D models of electrical systems for your project with our expert Electrical BIM services starting at $12/hour.
        </p>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto py-12 px-6 text-gray-700 space-y-6">
        <p>
          Electrical systems are crucial to any engineering and architectural project. Nimble’s electrical BIM services provide precision in planning, design, and integration of electrical systems while ensuring collaboration between engineers, architects, and contractors. Our professional services help you save costs, time, and effort while delivering high-precision designs and drawings.
        </p>
        <p>
          Nimble Acuity leverages expertise, experience, and cutting-edge tools to deliver flawless electrical BIM models and drawings tailored to your construction projects.
        </p>
      </section>

      {/* Electrical BIM Services */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Electrical BIM Services We Offer</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Lighting and Power Circuit Drawings",
              desc: "Create precise drawings for lighting fixtures and power circuits, enabling electricians to integrate systems efficiently."
            },
            {
              title: "Electrical Lighting Fixtures Modeling",
              desc: "Design lighting and power models ensuring practical placement of fixtures and wiring as per project requirements."
            },
            {
              title: "BOQ of Electrical Equipment",
              desc: "Work with cost consultants to prepare Bill of Quantities for electrical equipment required in construction."
            },
            {
              title: "Schedules of Circuits and Panel Board",
              desc: "Provide detailed panel board and system circuit breakdowns to implement electrical systems accurately."
            },
            {
              title: "Modeling of Fire Alarm Systems",
              desc: "Create compliant fire alarm system models integrated seamlessly with your project design."
            },
            {
              title: "Modeling of Power, Data, and Communication Systems",
              desc: "Integrate power, data, and communication systems into a fully functional project layout."
            },
            {
              title: "Modeling of Cable Trays and Conduits",
              desc: "Design cable tray and conduit layouts that form the backbone of electrical infrastructure."
            },
            {
              title: "Electrical BIM Model Walk-Through",
              desc: "Provide 3D walk-throughs of electrical models for better communication and understanding of final designs."
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

      {/* Electrical BIM Process */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Electrical BIM Process</h2>
        <ol className="max-w-4xl mx-auto list-decimal list-inside space-y-6 text-gray-700">
          <li>
            <strong>Requirement Analysis:</strong> Assess project requirements, define scope, cost, timeframe, and resources.
          </li>
          <li>
            <strong>Planning:</strong> Assign a project manager and team best suited for your electrical BIM requirements, and create a design blueprint.
          </li>
          <li>
            <strong>Implementation and Quality Check:</strong> Develop electrical BIM models, designs, and drawings, performing rigorous quality checks for error-free output.
          </li>
          <li>
            <strong>Delivery:</strong> Submit final models, gather feedback, make necessary modifications, and deliver the finalized electrical BIM services.
          </li>
        </ol>
      </section>

      {/* Additional Services */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Other Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-gray-700">
          {[
            "Architectural Services",
            "Structural Design Services",
            "Infrastructure Engineering Services",
            "Building Information Modeling (BIM)"
          ].map((service, idx) => (
            <Card key={idx} className="p-6 rounded-xl shadow hover:shadow-md transition">
              <CardContent>{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Nimble */}
      <section className="bg-white py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Nimble Electrical BIM Services?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {[
            "Flexible pricing options for small and large-scale projects",
            "World-class infrastructure with the latest BIM tools and software",
            "High-quality, error-free electrical BIM services",
            "Single point of contact via project manager",
            "Complete data security and compliance with regulations",
            "Scalable services for upscaling project requirements",
            "24/7 customer support for timely query resolution"
          ].map((reason, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              {reason}
            </div>
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
                Delivered AutoCAD conversion services efficiently and received excellent client feedback.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-yellow-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-gray-700 italic">
          “A robust congratulations to the team at Nimble Acuity for a job well done.”
        </blockquote>
        <p className="mt-2 text-gray-600">— CMO, Leading Medical Care Company, Seattle, WA</p>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-yellow-500 to-red-500 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started with Nimble Electrical BIM Services</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Outsource your electrical BIM services to Nimble Acuity for cost-effective, high-quality, and timely project delivery.
        </p>
        <Button className="bg-white text-yellow-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
