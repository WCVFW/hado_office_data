import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function PresentationDrawingServices() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-800 to-blue-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Nimble Acuity Presentation Drawing Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Transform your ideas into high-quality visuals and make a lasting impression on your clients.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-gray-700 space-y-6">
        <p>
          Is your architectural practice suffering due to the inability to make outstanding 3D presentation drawings? Nimble Acuity creates exceptional presentation drawings using advanced BIM and CAD software to ensure all details are perfectly displayed from initial sketches to completed designs.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Presentation Drawing Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Creation of Floor Plans",
              desc: "We create CAD floor plans with fine details like stairways, doors, windows, and dimensions. Both 2D and 3D floor plans are crafted with precision."
            },
            {
              title: "Creation of 3D Renders",
              desc: "We transform 2D blueprints, sketches, or initial info into highly professional and aesthetic 3D renders."
            },
            {
              title: "Creation of 3D Models",
              desc: "Outstanding 3D models based on 2D blueprints or sketches, created with latest BIM and CAD software."
            },
            {
              title: "Creation of Elevation and Façade Drawings",
              desc: "Accurate elevation details incorporated to better convey designs to clients and stakeholders."
            },
            {
              title: "Creation of 3D Walkthroughs",
              desc: "High-quality walkthroughs allowing clients to experience the project before construction completion."
            },
            {
              title: "Creation of Color-coded Plans",
              desc: "Visually appealing, color-coded plans using software like Photoshop to highlight specific areas."
            }
          ].map((service, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-700">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Other Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            "Point Cloud Services",
            "3D Architectural Walkthroughs",
            "As-built BIM Modeling Services",
            "Laser Scan to BIM Services"
          ].map((srv, idx) => (
            <Card key={idx}>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-700">{srv}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Why Choose Nimble Acuity for Presentation Drawing Services?
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
          {[
            "Cost-effective Pricing – Exceptional value for money.",
            "High-quality Services – ISO-certified and structured processes.",
            "Superb Infrastructure – Cloud storage, quad-core processors, and advanced tools.",
            "Tools and Technologies – Latest BIM and CAD software.",
            "Structured Process – Streamlined delivery of presentation drawing solutions.",
            "Experienced Team – 26+ years of engineering drawing experience.",
            "Data Security – Fully GDPR compliant.",
            "Quick Turnaround Time – Always on time, every time."
          ].map((item, idx) => (
            <li key={idx} className="bg-gray-50 p-4 rounded-lg shadow-sm">
              ✅ {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-10">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold">Product Design Support to Oil and Gas Giant</h3>
              <p>
                Nimble Acuity provided high-quality engineering product design support to a reputed Australia-based oil and gas firm within the required time.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold">3D Modeling to Steel Fabrication Provider</h3>
              <p>
                Nimble Acuity provided top-notch engineering support to a New Jersey-based steel fabrication client within the stipulated time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-center">
        <p className="text-gray-700 mb-6">
          If you are looking for a professional and cost-effective provider of presentation drawing services, get in touch with Nimble Acuity today!
        </p>
        <Button className="bg-blue-700 text-white px-6 py-3 rounded-xl">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
