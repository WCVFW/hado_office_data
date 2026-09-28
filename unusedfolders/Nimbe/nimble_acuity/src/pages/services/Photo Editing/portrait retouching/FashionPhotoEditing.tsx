import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PEMainMenu from "../PEmainmenu";

const FashionPhotoEditing: React.FC = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <PEMainMenu/>
      <section className="text-center space-y-4">
        <h1 className="text-33xl font-bold text-gray-900">
          Nimble Fashion Photo Editing Services
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Streamline your editing process and meet tight deadlines effortlessly
          with our fashion photo editing services. Benefit from seamless
          communication, domain expertise, and rapid turn-around times.
        </p>
      </section>

      {/* Introduction */}
      <Card className="shadow-lg rounded-2xl">
        <CardContent className="space-y-4">
          <p className="text-gray-600">
            Perfectly edited photographs are a key marketing tool for fashion
            studios, magazines, and retailers. With 24+ years of experience, we
            provide cost-effective, tailored editing solutions with turnaround
            times as short as <strong>24 hours</strong>.
          </p>
        </CardContent>
      </Card>

      {/* Services */}
      <section>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Our Professional Fashion Photo Editing Services
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Body Photo Editing",
            "Fashion Portrait Enhancement",
            "Magazine Photo Retouching",
            "Advertising Photo Retouching",
            "Model Photo Retouching",
            "Fashion Photo Manipulation",
            "Glamor Photo Retouching",
            "High-End Portrait Retouching",
          ].map((service, idx) => (
            <Card
              key={idx}
              className="rounded-2xl hover:shadow-xl transition bg-white"
            >
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-gray-900">
                  {service}
                </h3>
                <p className="text-sm text-gray-600">
                  Enhance fashion visuals with precision, detail, and elegance.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Expertise Showcase */}
      <section>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Showcasing Our Expertise
        </h2>
        <ul className="grid md:grid-cols-2 gap-3 list-disc list-inside text-gray-600">
          <li>Blemish & Imperfection Removal</li>
          <li>Skin Smoothening</li>
          <li>Body Sculpting</li>
          <li>Background Editing</li>
          <li>Hair Retouching</li>
          <li>Color Correction</li>
          <li>Makeup Enhancement</li>
          <li>Teeth Whitening</li>
        </ul>
      </section>

      {/* Tools */}
      <Card className="shadow-md rounded-2xl">
        <CardContent>
          <h2 className="text-xl font-semibold mb-2">Tools We Use</h2>
          <p className="text-gray-600">
            Our editors leverage{" "}
            <span className="font-medium">Adobe Photoshop CC</span> and{" "}
            <span className="font-medium">Lightroom CC</span> for flawless,
            high-quality edits.
          </p>
        </CardContent>
      </Card>

      {/* Industries */}
      <section>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Industries We Serve
        </h2>
        <div className="grid md:grid-cols-2 gap-3 text-gray-600 text-center">
          {[
            "Fashion Industry",
            "Advertising & Marketing",
            "Editorial & Publishing",
            "Modeling Agencies",
            "E-commerce & Retail",
            "Photography Studios",
            "Catalog & Lookbook Production",
          ].map((industry, idx) => (
            <span
              key={idx}
              className="bg-gray-100 rounded-xl px-4 py-2 text-sm font-medium"
            >
              {industry}
            </span>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Why Choose Our Fashion Photo Editing Services?
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside text-gray-600">
          <li>100% Information Security (ISO/IEC 27001:2022)</li>
          <li>Cutting-Edge Infrastructure & Tools</li>
          <li>High-Quality Deliverables</li>
          <li>Short Turnaround Time (24–48 hours)</li>
          <li>Data Security & Encryption Protocols</li>
          <li>Experienced Domain Specialists</li>
          <li>Scalable Editing Solutions</li>
          <li>Flexible Pricing Options</li>
        </ul>
      </section>

      {/* Additional Services */}
      <section>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Additional Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Wedding Photo Editing",
            "Portrait Retouching",
            "Model Photo Retouching",
            "Product Photo Retouching",
          ].map((service, idx) => (
            <Card key={idx} className="rounded-2xl hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">{service}</h3>
                <p className="text-sm text-gray-600">
                  Tailored edits that enhance detail, quality, and impact.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <Card className="shadow-md rounded-2xl">
        <CardContent className="space-y-4">
          <h2 className="text-xl font-semibold">Customer Success Stories</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              Helped a Netherlands-based photographer with hair masking &
              background editing, delivering a large batch in 48 hours.
            </li>
            <li>
              Provided image enhancement & retouching for a UK photo studio,
              processing 200–400 high-quality images weekly.
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Testimonials */}
      <Card className="bg-gray-50 rounded-2xl shadow-inner">
        <CardContent className="text-center space-y-4">
          <blockquote className="text-lg italic text-gray-700">
            “Thank you very much for your time, and for the excellent work from
            your team. It's very professional, and the communication has been
            very easy.”
          </blockquote>
          <p className="font-medium text-gray-800">– Photographer, USA</p>
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          Nimble Fashion Photo Editing Services to Us
        </h2>
        <p className="text-gray-600">
          Transform raw fashion photos into captivating deliverables with our
          skilled editors. Get started today with a free quotation.
        </p>
        <Button className="px-6 py-3 text-lg rounded-xl">
          Contact Us Today
        </Button>
      </div>
    </div>
  );
};

export default FashionPhotoEditing;
