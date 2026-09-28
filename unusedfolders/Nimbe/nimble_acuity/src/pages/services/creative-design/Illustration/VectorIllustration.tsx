import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CSmainmenu from "../CSmainmenu";

const VectorIllustration: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Vector Illustration Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Our expert illustrators design 2D polygons and complex vector shapes with mathematical precision starting at <b>$12/hour</b>.
        </p>
        <Button className="mt-6 bg-white text-blue-700 hover:bg-blue-200">
          Contact Us
        </Button>
      </div>

      {/* Intro */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-6">
        <p>
          Vector illustrations are a powerful tool to represent your brand visually, from logos and banners to book covers and apparel. Nimble Auity delivers precise, scalable, and professional vector artwork tailored to your business needs.
        </p>
      </div>

      {/* Services */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Vector Illustration Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Vector Logo Design", desc: "Create strong vector logos for branding, print, and marketing, incorporating your ideas into a professional design." },
            { title: "Vector Illustration based Line Art", desc: "Hand-drawn and digital line art illustrations with attention to every detail, incorporating your feedback at every stage." },
            { title: "Raster to Vector Conversion", desc: "Convert raster images to high-quality vector files for smoother and scalable artwork." },
            { title: "Photo to Vector Design", desc: "Transform client-provided photos into detailed vector illustrations." },
            { title: "Clipping Path", desc: "Edit images to perfection, adjusting colors, shadows, shapes, and backgrounds for professional results." },
            { title: "Color Correction", desc: "Enhance dull images by adjusting colors to make them visually appealing." },
            { title: "Product Image Enhancement", desc: "Improve product images by correcting lighting, colors, distractions, and other elements." },
            { title: "Vector Artwork Design", desc: "Design mathematically precise vector artwork for marketing, branding, and promotional use." }
          ].map((item, i) => (
            <Card key={i} className="rounded-2xl shadow-md hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Vector Illustration Process */}
      <div className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Vector Illustration Process
        </h2>
        <ul className="max-w-4xl mx-auto space-y-4 list-decimal list-inside text-gray-700">
          <li><b>Understanding Client Needs:</b> Discuss requirements, receive raw files, and understand your business goals.</li>
          <li><b>Planning Phase:</b> Develop a blueprint to guide the designers for a structured approach.</li>
          <li><b>Designing Phase:</b> Expert illustrators create and enhance vector designs according to your needs.</li>
          <li><b>Quality Check and Feedback:</b> Multi-level checks with client feedback to ensure perfection.</li>
          <li><b>Delivery:</b> Secure delivery of final vector designs via FTP or preferred channels.</li>
        </ul>
      </div>

      {/* Why Choose Nimble */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Nimble Auity for Vector Illustration?</h2>
        <ul className="grid md:grid-cols-2 gap-6 list-disc list-inside text-gray-700">
          <li>Flexible and affordable pricing</li>
          <li>ISO-certified quality standards</li>
          <li>Quick turnaround times</li>
          <li>Cutting-edge tools: Adobe Illustrator, Sketch, Photoshop, etc.</li>
          <li>Highly experienced professional team</li>
          <li>Scalable solutions to handle project growth</li>
          <li>Round-the-clock support from ODC</li>
          <li>Secure data handling and compliance</li>
        </ul>
      </div>

      {/* Client Case Studies */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Client Case Studies</h2>
        <div className="space-y-6">
          <Card className="rounded-2xl shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Nimble Provided Prepress & Vector Artwork to Dublin-based Client
              </h3>
              <p className="text-sm text-gray-600">
                Delivered prepress and vector artwork efficiently, understanding client concerns and meeting goals with quick TAT.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Nimble Delivered Vector Artwork to US-based Label Designer
              </h3>
              <p className="text-sm text-gray-600">
                Customized vector artwork services provided within budget and assured turnaround time for a leading US label designer.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-blue-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto italic text-lg text-gray-700">
          “The quality of artwork delivered during the trial period was exceptional and helped us choose Nimble as our outsourced partner.”
        </blockquote>
        <p className="mt-4 font-semibold">Director - Operations, Leading Pharmaceutical Company, Netherlands</p>
      </div>

      {/* CTA */}
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">Ready to Enhance Your Brand Visually?</h2>
        <p className="mb-6">
          Work with Nimble Auity to create vector illustrations that elevate your business and marketing efforts.
        </p>
        <Button className="bg-blue-600 text-white hover:bg-blue-700">
          Get Started Today
        </Button>
      </div>
    </section>
  );
};

export default VectorIllustration;
