import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PEMainMenu from "../PEmainmenu";


const JewelryRetouchingServices: React.FC = () => {
  return (
    <div>
      <PEMainMenu />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Nimble Jewelry Retouching Services
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Leverage our cutting-edge jewelry photo retouching services to enhance
          the appeal of your jewelry photographs and close more sales.
        </p>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Jewelry Retouching?
          </h2>
          <p className="text-gray-600 mb-4">
            Photographing jewelry requires mastering lighting, avoiding color
            casts, and capturing the right sheen. Many of these are difficult to
            achieve during shoots, leaving images looking unprofessional. That’s
            where our professional jewelry photo retouching services step in.
          </p>
          <p className="text-gray-600">
            With 26+ years of expertise, our seasoned editors enhance jewelry
            images to highlight their brilliance, ensuring your products stand
            out and attract buyers.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">
            Key Benefits
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Enhance product appeal & boost sales</li>
            <li>Highlight brilliance & accurate colors</li>
            <li>Quick turnaround across time zones</li>
            <li>Cost-effective professional services</li>
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Our Jewelry Retouching Services
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Mannequin & Background Removal",
            "Jewelry Recoloring",
            "Focus Stacking",
            "Photo Merging",
            "Shine Enhancement",
            "Dust & Scratch Removal",
          ].map((service, idx) => (
            <Card key={idx} className="rounded-2xl shadow hover:shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  {service}
                </h3>
                <p className="text-gray-600 text-sm">
                  Professional retouching to enhance visual impact and
                  highlight every intricate detail.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Our Process Flow
        </h2>
        <ol className="space-y-6 text-gray-700">
          <li>
            <span className="font-semibold">01. Scoping & Sampling:</span>{" "}
            Samples processed as per client brief with costing and TAT.
          </li>
          <li>
            <span className="font-semibold">02. Documentation:</span> Client
            approval with scope, pricing, and timelines finalized.
          </li>
          <li>
            <span className="font-semibold">03. File Processing:</span> Files
            worked on, checked, and refined by leads.
          </li>
          <li>
            <span className="font-semibold">04. Delivery:</span> Final files
            uploaded via agreed FTP method, with revisions if required.
          </li>
        </ol>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-r from-yellow-50 to-pink-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Advanced Image Editing Software",
            "Quick Turnaround Across Time Zones",
            "High-Quality & Consistent Results",
            "Cost-effective Pricing",
          ].map((point, idx) => (
            <Card key={idx} className="rounded-2xl shadow">
              <CardContent className="p-6 text-center text-gray-700 font-medium">
                {point}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Additional Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Image Enhancement Services",
            "Real Estate Image Post Processing",
            "Wedding Photo Editing",
            "Photo Manipulation Services",
            "Clipping Path Services",
            "Portrait Services",
            "Adobe Photoshop Services",
            "Panorama Photo Stitching",
          ].map((service, idx) => (
            <Card key={idx} className="rounded-2xl shadow hover:shadow-md">
              <CardContent className="p-6 text-center text-gray-700 font-medium">
                {service}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Testimonials
        </h2>
        <blockquote className="max-w-3xl mx-auto text-center text-gray-600 italic">
          “I used Nimble Acuity.com for some photo retouching. I'm thrilled
          with the work and time they saved me. The whole process was efficient,
          and the result was great. I recommend them.”
          <footer className="mt-4 text-gray-800 font-semibold">
            – Graphic Designer, Canada
          </footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-gradient-to-r from-pink-100 to-purple-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Ready to Enhance Your Jewelry Images?
        </h2>
        <p className="text-gray-700 mb-6">
          Attract more customers, boost sales, and increase revenues with our
          professional jewelry retouching services.
        </p>
        <Button className="px-6 py-3 text-lg rounded-2xl">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
};

export default JewelryRetouchingServices;
