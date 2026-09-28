import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function BIMEnergyModelingServices() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble BIM Energy Modeling Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Evaluate and analyze the energy efficiency of your buildings and create sustainable, environment-friendly frameworks starting at $12/hour.
        </p>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto py-12 px-6 text-gray-700 space-y-6">
        <p>
          Planning and constructing an energy-efficient building is a complex process requiring compliance with regulations and structural considerations. Nimble Acuity provides expert BIM energy modeling services to deliver sustainable and efficient building designs.
        </p>
        <p>
          Leveraging the latest software and building energy modeling techniques, our professionals create intelligent and accurate models that improve energy usage, reduce wastage, and support sustainability goals.
        </p>
      </section>

      {/* BIM Energy Modeling Services */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our BIM Energy Modeling Services</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Energy Modeling Design, Drafting, and Simulation",
              desc: "Comprehensive building CFD and energy analysis integrated seamlessly into your building design to optimize energy utilization and flow."
            },
            {
              title: "Building Heat Load Calculation",
              desc: "Maximize heating and cooling efficiency by calculating the exact energy requirements and airflow patterns across your building."
            },
            {
              title: "HVAC System Planning",
              desc: "Thermal modeling and efficient HVAC system design to reduce heating and cooling energy costs."
            },
            {
              title: "Fire and Smoke Modeling",
              desc: "Plan emergency evacuation routes using CFD and evacuation modeling for fire safety compliance."
            },
            {
              title: "Solar Shading",
              desc: "Optimize building design to maximize solar energy utilization and reduce dependency on artificial lighting and heating."
            },
            {
              title: "Daylight Modeling Analysis",
              desc: "Maximize natural lighting while maintaining thermal comfort and minimizing visual discomfort."
            },
            {
              title: "Artificial Lighting Control",
              desc: "Design smart interior lighting systems using occupancy sensors and control technologies to save energy and reduce costs."
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

      {/* BIM Energy Modeling Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our BIM Energy Modeling Process</h2>
        <ol className="list-decimal list-inside space-y-6 text-gray-700">
          <li>
            <strong>Evaluating Your Need:</strong> Assess your building and energy modeling requirements to determine compliance and efficiency opportunities.
          </li>
          <li>
            <strong>BIM Prototyping:</strong> Create a prototype using advanced simulations to estimate energy performance and optimize building design.
          </li>
          <li>
            <strong>Proofing and Finalizing the Design:</strong> Run peak load and other analyses to deliver a compliant, accurate, and efficient BIM energy model.
          </li>
          <li>
            <strong>Delivering the Building Energy Model:</strong> Provide the final energy model with graphical results and reports for easy implementation.
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
            "Customized plans and pocket-friendly prices",
            "Use of the latest BIM modeling tools and simulation software",
            "24/7 customer service and support",
            "Instant access to certified BIM energy modeling experts",
            "Single point of contact for seamless communication",
            "Fast turnaround time with on-time delivery",
            "Strict adherence to quality and regulatory norms",
            "Complete peace of mind with accurate, sustainable solutions"
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
      <section className="bg-green-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-gray-700 italic">
          “A robust congratulations to the team at Nimble Acuity for a job well done.”
        </blockquote>
        <p className="mt-2 text-gray-600">— CMO, Leading Medical Care Company, Seattle, WA</p>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started with Nimble BIM Energy Modeling Services</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Share your BIM energy modeling requirements with Nimble Acuity and receive a customized sustainable service plan tailored to your needs.
        </p>
        <Button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
