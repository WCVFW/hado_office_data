import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CSmainmenu from "../CSmainmenu";

const PopArtIllustration: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-pink-600 to-purple-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Pop Art Illustration Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Turn your pop art ideas into vibrant illustrations with our experienced art illustrators at <b>$12/hour</b>.
        </p>
        <Button className="mt-6 bg-white text-pink-700 hover:bg-pink-200">
          Contact Us
        </Button>
      </div>

      {/* Intro */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-6">
        <p>
          Pop art illustration is a powerful medium to connect with your audience. Nimble Auity creates eye-catching, customized pop art illustrations that reflect your brand's personality and style.
        </p>
      </div>

      {/* Services */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Pop Art Illustration Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Cuban Pop Art Illustration", desc: "Infuse your concepts with the essence of Cuban pop art, aligning your products with your target audience." },
            { title: "Pop Art Storyboard Illustration", desc: "Create storyboards complete with plot, illustrations, and branding messages in pop art style." },
            { title: "Branding Portraits with Pop Art", desc: "Hand-drawn branding portraits reflecting your audience's style and instantly establishing a connection." },
            { title: "Pop Art Vector Images", desc: "Transform images or ideas into vector pop art illustrations using Adobe Illustrator for perfect scaling and editing." },
            { title: "Color Modifications in Pop Art", desc: "Enhance colors or modify existing pop art illustrations to meet publishing and branding requirements." }
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

      {/* Pop Art Illustration Process */}
      <div className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Pop Art Illustration Process
        </h2>
        <ul className="max-w-4xl mx-auto space-y-4 list-decimal list-inside text-gray-700">
          <li><b>Receiving Order:</b> Gather your pop art illustration requirements and define project deliverables.</li>
          <li><b>Designing:</b> Graphic illustrators render the pop art illustration based on your concepts and references.</li>
          <li><b>Quality Review and Feedback:</b> Ensure consistency and quality with client feedback for revisions.</li>
          <li><b>Delivery:</b> Deliver final illustrations once all revisions are completed and approved.</li>
        </ul>
      </div>

      {/* Why Choose Nimble */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Nimble Auity for Pop Art Illustration?</h2>
        <ul className="grid md:grid-cols-2 gap-6 list-disc list-inside text-gray-700">
          <li>Flexible pricing solutions tailored to your needs</li>
          <li>ISO-certified quality standards</li>
          <li>Cutting-edge tools: Adobe Illustrator, Sketch, and more</li>
          <li>Quick turnaround times for fast project delivery</li>
          <li>Scalable solutions for changing project requirements</li>
          <li>Professional in-house pop art illustration team</li>
          <li>Round-the-clock support for international clients</li>
          <li>100% secure data handling and compliance</li>
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
                Delivered prepress and vector artwork efficiently as per client requirements within the assured TAT.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Nimble Delivered Vector Artwork to US-based Label Designer
              </h3>
              <p className="text-sm text-gray-600">
                Provided high-quality vector artwork solutions in record time for a leading US label designer.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-pink-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto italic text-lg text-gray-700">
          “The quality of artwork delivered during the trial period was exceptional and helped us select Nimble as our outsourced partner.”
        </blockquote>
        <p className="mt-4 font-semibold">Director - Operations, Leading Pharmaceutical Company, Netherlands</p>
      </div>

      {/* CTA */}
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">Bring Your Pop Art Ideas to Life</h2>
        <p className="mb-6">
          Collaborate with Nimble Auity to create striking pop art illustrations that engage your audience and enhance your brand.
        </p>
        <Button className="bg-pink-600 text-white hover:bg-pink-700">
          Get Started Today
        </Button>
      </div>
    </section>
  );
};

export default PopArtIllustration;
