import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function MechanicalBIMServices() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-teal-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Mechanical BIM Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Our engineers have extensive knowledge of BIM technologies and provide advanced mechanical BIM services at <span className="font-semibold">$12/hour</span>.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          Nimble provides high-quality mechanical BIM services that help architectural and construction companies save costs and deliver projects on time. Our engineers are highly proficient in the latest BIM software tools, including AutoCAD, MicroStation, Sketchup, and ANSYS.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          We work closely with clients to provide detailed and comprehensive BIM solutions. Our engineers operate out of world-class office spaces equipped with powerful computers and cutting-edge BIM software for cost-effective, top-quality results.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Mechanical BIM Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Mechanical Equipment Modeling", desc: "Accurate modeling of chosen equipment to ensure efficient system design in your BIM process." },
            { title: "Duct & Duct Fittings Modeling", desc: "Advanced modeling for HVAC systems ensuring proper air circulation throughout the building." },
            { title: "HVAC Modeling", desc: "High-quality heating, ventilation, and air-conditioning (HVAC) modeling for effective airflow." },
            { title: "Mechanical Equipment Detailing", desc: "Comprehensive sectioning, isometric drawings, and equipment documentation." },
            { title: "Duct Layout Modeling", desc: "Optimized duct layouts that comply with fire, safety, and electrical codes." },
            { title: "Bill of Quantity Generation", desc: "Accurate BOQs to ensure smooth implementation of BIM designs." },
            { title: "Walk-throughs of BIM Models", desc: "2D and 3D walk-throughs of complex MEP systems for better visualization." },
            { title: "Rendered Views", desc: "High-quality rendered views for better understanding of materials and lighting." },
            { title: "Mechanical BIM Components Modeling", desc: "Accurate modeling of all components ensuring effective design and coordination." },
            { title: "Sleeve/Penetration Drawings", desc: "Clear sleeve and penetration drawings to communicate completed designs." },
            { title: "Fire Protection Modeling", desc: "Minimized safety and fire risks with expert mechanical BIM fire system designs." },
            { title: "Mechanical Piping Shop Drawings", desc: "Details of gas, drainage, and piping systems clearly annotated and modeled accurately." },
            { title: "Parametric Modeling", desc: "Demonstrates how systems and components operate using solid and surface-based design tools." },
            { title: "Coordinated 3D Piping Models", desc: "Realistic 3D piping designs reflecting actual system layouts." }
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
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "BIM Coordination Services",
            "BIM 6D Modeling Services",
            "BIM Clash Detection Services",
            "As-built BIM Modeling Services"
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <p className="text-gray-700">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Nimble?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Affordable Pricing Options",
            "High-quality ISO-certified services",
            "World-class infrastructure",
            "Structured delivery process",
            "Latest BIM tools and technologies",
            "Experienced team with 26+ years",
            "Robust data security",
            "Short turnaround times"
          ].map((benefit, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <p className="text-gray-700">{benefit}</p>
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
              <h3 className="text-xl font-semibold mb-2">
                Nimble Provided Accurate Construction Drawings
              </h3>
              <p className="text-gray-600">
                Delivered highly accurate 3D modeling and 2D drafting of new product parts, ensuring zero manufacturing errors.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Nimble Provided Advanced MEP Services
              </h3>
              <p className="text-gray-600">
                Completed 26 drawings in just 120 hours, significantly faster than the estimated 320 hours for a top US-based design company.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-green-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
        <blockquote className="max-w-3xl mx-auto text-gray-700 italic">
          “We have outsourced some critical engineering services to Nimble and have received good results and deliverables. The commitment and dedication of their team are outstanding.”
        </blockquote>
        <p className="mt-2 text-gray-600">— SVP and Co-Founder, Engineering Resource Company</p>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-600 to-teal-500 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Get in Touch with Nimble Today
        </h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Looking for professional, reliable, and cost-effective mechanical BIM services? Contact our team now!
        </p>
        <Button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
