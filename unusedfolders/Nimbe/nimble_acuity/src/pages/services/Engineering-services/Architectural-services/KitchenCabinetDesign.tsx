import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function KitchenCabinetDesign() {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Kitchen Cabinet Design Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Our kitchen cabinet design and drawing services help you visualize
          your entire kitchen floor plan with precise 3D rendered CAD models at
          rates starting at $20 per hour.
        </p>
        <Button className="mt-6 bg-white text-green-700 hover:bg-gray-100">
          Contact Us
        </Button>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <p>
          Design engineers, consumers, kitchen planners, and architects give
          various suggestions to kitchen cabinet makers. Amid this chaos, the
          quality and concept of planned manufacturing are often confused. At
          Nimble Acuity, our cabinet designs and CAD drawing services simplify
          the process from idea to manufacture through shop drawings—whether you
          are planning an L-shaped, U-shaped, or G-shaped kitchen.
        </p>
        <p>
          Our offshore and onshore CAD drafters assist you in visualizing space
          through section, plan, and elevation designs. To ensure quality at
          every level, we produce kitchen floor plans with appropriate furniture,
          cabinets, and other millwork designs into precise cabinet shop
          drawings.
        </p>
        <p>
          Nimble Acuity's kitchen cabinet design and drawing services are
          intended to help you visualize the whole kitchen floor plan with
          precise 3D rendered CAD models and make adjustments before production
          begins. Our casework design specialists offer minimum hourly rates for
          in-depth insights to configure space—from tall wall cabinets to the
          tiniest fixtures, surface treatments, and material choices.
        </p>
      </section>

      {/* Solutions */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Kitchen Cabinet Design Solutions We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Design of smart cabinets placed on the wall",
            "Standard cabinet accessories design using CAD library",
            "Furniture design for the kitchen island",
            "Door, window, chimney, and shelf",
            "3D kitchen cabinet modeling",
            "Cutlery racks, drawers, and pull-out designs",
            "Sink-area cabinet design",
            "Kitchen counter front fitting design",
            "Made-to-order wall and base cabinet design",
            "Design of cupboards for ovens, baking places, and more",
          ].map((service, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <p>{service}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Kitchen Cabinet Design Process We Follow
        </h2>
        <ol className="max-w-4xl mx-auto space-y-4 text-lg">
          <li>
            <b>01. Requirement Discovery</b> – We work with clients to understand
            their technical needs and goals.
          </li>
          <li>
            <b>02. Collection of Sample Data</b> – Our team gathers and analyzes
            data to optimize designs.
          </li>
          <li>
            <b>03. Team Selection</b> – We assign assembly drawing specialists
            from our skill pool.
          </li>
          <li>
            <b>04. Kitchen Cabinet Design & Drawings</b> – We use AutoCAD to
            convert inputs into precise drawings.
          </li>
          <li>
            <b>05. Quality Check</b> – A dedicated QA team ensures 100% accuracy.
          </li>
          <li>
            <b>06. Report Submission</b> – We provide reports for complete project
            visibility.
          </li>
        </ol>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Other Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "MicroStation Conversion Services",
            "Reverse Engineering Services",
            "CAD Automation Solutions",
            "Jigs and Fixture Design Services",
          ].map((srv, i) => (
            <Card key={i}>
              <CardContent className="p-6 text-center font-semibold">
                {srv}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Why Choose Nimble Kitchen Cabinet Design Services?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Friendly Rates – Affordable and customizable pricing.",
            "100% Data Security – ISO/IEC 27001:2022 compliance.",
            "Project Software – Tools like 3D CAD & AutoCAD.",
            "High-quality Services – Thorough inspections before delivery.",
            "Quick Turnaround Time – Always on schedule.",
            "ISO Certified – ISO 9001:2015 accredited provider.",
            "Scalable Services – Flexible to project needs.",
            "Experienced Professionals – Decades of expertise.",
            "24/7 Support – Phone, email, and chat.",
          ].map((point, i) => (
            <Card key={i}>
              <CardContent className="p-6">{point}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Nimble Conducted Computational Fluid Dynamics Analysis for a
                US-Based Water Purifier Manufacturer
              </h3>
              <p>
                We provided high-quality Computational Fluid Dynamics Analysis
                services to a US-based client in the water purification sector.
                The project was completed within two months.
              </p>
              <Button variant="link" className="mt-3 px-0">
                Read more
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Nimble Provided FEA Analysis Support to US Solar Energy Giant
              </h3>
              <p>
                A major solar energy company in South Dakota partnered with us
                for FEA analysis. Our experts ensured compliance with SLAs and
                complete satisfaction.
              </p>
              <Button variant="link" className="mt-3 px-0">
                Read more
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Testimonials</h2>
        <blockquote className="italic text-lg max-w-3xl mx-auto">
          “Nimble Acuity has been a tremendous resource for our engineering
          department. They are precise, attentive, and quick learners of our
          procedures.”
        </blockquote>
        <p className="mt-4 font-semibold">
          — General Partner, Manufacturing Company in the US
        </p>
      </section>

      {/* Closing */}
      <section className="bg-emerald-700 text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nimble Kitchen Cabinet Design Services
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          With 26+ years of expertise, Nimble Acuity has emerged as a pioneering
          business delivering a wide variety of architectural services. Contact
          us today for a free estimate within 24 hours.
        </p>
        <Button className="bg-white text-emerald-700 hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
