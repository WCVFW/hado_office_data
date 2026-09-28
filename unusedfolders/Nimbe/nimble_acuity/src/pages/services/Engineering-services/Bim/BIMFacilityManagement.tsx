import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function BIMFacilityManagement() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble BIM for Facility Management Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Leverage BIM to efficiently maintain, operate, and manage your buildings, starting at just $22/hour.
        </p>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto py-12 px-6 text-gray-700 space-y-6">
        <p>
          Nimble Acuity provides customized BIM solutions that help you maintain, operate, and manage your facilities efficiently. BIM enables a centralized platform to monitor, share, and manage building information throughout its lifecycle.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Access to Asset Profiles",
              desc: "Store asset information for every object in the model including dimensions, performance, condition data, and important documents. Centralized BIM helps streamline maintenance programs."
            },
            {
              title: "Enhanced Awareness of Object Locations",
              desc: "Accurate BIM helps technicians locate assets behind walls or ceilings, enabling efficient problem-solving and maintenance activities."
            },
            {
              title: "Increased Precision in Measuring Spaces",
              desc: "Automatically generates accurate dimensions based on industry standards (IFMA, BOMA), avoiding redundant manual measurements."
            },
            {
              title: "Test Scenarios at No Cost",
              desc: "Simulate renovations or layout changes in the BIM model to identify conflicts, optimize space, and improve operational efficiency without incurring costs."
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
            "As-built BIM Modeling Services",
            "BIM Quantity Estimation Services",
            "Laser Scan to BIM Services",
            "BIM App Development Services"
          ].map((service, idx) => (
            <Card key={idx} className="p-6 rounded-xl shadow hover:shadow-md transition text-gray-700">
              <CardContent>{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Nimble Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Nimble for Facility Management?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {[
            "Affordable pricing without compromising quality",
            "High-quality services with ISO certification",
            "World-class infrastructure with uninterrupted connectivity",
            "Global delivery centers across multiple time zones",
            "ISO/IEC 27001:2022 certified data security",
            "Single point of contact for seamless communication",
            "Experienced and qualified engineers",
            "Quick turnaround time to meet deadlines"
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
              <h3 className="text-xl font-semibold mb-2">European Client - Laser Scan to BIM</h3>
              <p className="text-gray-600">
                Converted building scans to high-quality 3D BIM models and 2D floor plans, sections, and elevations efficiently.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">UK Engineering Consultants - Revit MEP</h3>
              <p className="text-gray-600">
                Delivered reliable BIM and Revit MEP services, maintaining high quality and cost-effectiveness.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-green-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-gray-700 italic">
          “Nimble Acuity is now a tremendous resource for our entire engineering department. They pay high attention to detail, are attentive to all our needs, and have learned our procedures rapidly.”
        </blockquote>
        <p className="mt-2 text-gray-600">— General Partner, Manufacturing Company, US</p>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started with Nimble BIM for Facility Management</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Transform your building operations with high-quality, cost-effective BIM facility management solutions. Contact us today!
        </p>
        <Button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
