import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PEMainMenu from "../PEmainmenu";

const WeddingPhotoCullingPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Navigation */}
      <PEMainMenu />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-rose-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Wedding Photo Culling Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Experience efficiency with our specialized wedding photo culling
          services! Minimize overwhelm with swift turnaround, flawless photo
          selections, and impeccable quality that leaves lasting impressions –
          all ready in 24 hours.
        </p>
        <Button className="mt-6 bg-white text-pink-700 hover:bg-gray-100">
          Request a Demo
        </Button>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
          Achieving the delicate balance between curating a captivating
          collection and meeting client expectations is no small feat. Our
          outsourcing services redefine efficiency, elevate artistry, and restore
          work-life equilibrium — giving you more time to focus on your creative
          journey.
        </p>
      </section>

      {/* Solutions We Offer */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Wedding Image Culling Solutions We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Culling & Selecting Services",
            "Culling Assistance Services",
            "Photo Reshaping Services",
            "Photo Color Correction Services",
            "Backdrop Replacement Services",
            "Image Cropping Services",
            "Noise Reduction Services",
            "White Balance Creation Services",
            "Hair Retouching Services",
          ].map((service, i) => (
            <Card key={i} className="shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{service}</h3>
                <p className="text-gray-600 text-sm">
                  Professional solutions tailored to refine your wedding
                  photography workflow with precision and artistry.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Clientele */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Clientele We Serve
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          {[
            "Real Estate Photographers",
            "Event Photographers",
            "Wedding Companies",
            "Event Management Companies",
            "Wedding Planners",
            "Event Hosting Hotels",
          ].map((client, i) => (
            <div
              key={i}
              className="p-5 border rounded-xl shadow-sm bg-white hover:shadow-md transition"
            >
              <h3 className="font-medium">{client}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Technology */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Technology We Leverage</h2>
        <div className="flex justify-center gap-8 flex-wrap">
          {["Adobe Lightroom", "Adobe Photoshop"].map((tool, i) => (
            <span
              key={i}
              className="px-6 py-3 bg-white rounded-xl shadow-md text-gray-700 font-medium"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose Us as Your Wedding Photo Culling Service Provider?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Stringent Quality Assurance",
            "Project Confidentiality",
            "Timely Delivery Across Time Zones",
            "Specialized Adobe-Certified Team",
            "Scalability Aligned to Your Needs",
            "24/7 Support",
            "Transparent Pricing",
          ].map((reason, i) => (
            <div
              key={i}
              className="p-5 border rounded-xl shadow-sm bg-white hover:shadow-md transition"
            >
              <h3 className="font-medium">{reason}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Additional Software Services for Business Enhancement
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 list-disc list-inside text-gray-700">
          <li>Wedding Photo Editing Services</li>
          <li>Clipping Path Services</li>
          <li>Portrait Services</li>
          <li>Photoshop Services</li>
        </ul>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Customer Success Stories
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Hair Masking for Netherlands Photographer
              </h3>
              <p className="text-gray-600 text-sm">
                Refined 700 images with high-quality hair masking and background
                transitions in just two days.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Image Clipping for New Zealand Bike Designers
              </h3>
              <p className="text-gray-600 text-sm">
                Delivered precision clipping with a turnaround of 5 images per
                day, ensuring consistent quality and client satisfaction.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 text-center max-w-3xl mx-auto">
        <blockquote className="italic text-gray-700">
          "Thank you very much for your time, and for the excellent work from
          your team. It's very professional, and the communication has been very
          easy. Fast response, also with editing solutions. Very good job, and
          competent people."
        </blockquote>
        <p className="mt-4 font-medium">– Photographer, USA</p>
      </section>

      {/* CTA */}
      <section className="bg-pink-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Nimble Wedding Photo Culling Services to Us
        </h2>
        <p className="max-w-3xl mx-auto">
          Elevate your portfolio, enhance client satisfaction, and streamline
          your post-wedding workflow. Let us handle the culling while you focus
          on capturing unforgettable memories.
        </p>
        <Button className="mt-6 bg-white text-pink-700 hover:bg-gray-200">
          Request a Demo Today
        </Button>
      </section>
    </div>
  );
};

export default WeddingPhotoCullingPage;
