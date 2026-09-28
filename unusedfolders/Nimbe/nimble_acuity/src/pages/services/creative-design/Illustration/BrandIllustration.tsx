import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import CSmainmenu from "../CSmainmenu";

const BrandIllustration: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Brand Illustration Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Create a strong visual identity for your brand with high-quality and artistic 
          brand illustration services starting at just <b>$10/hour</b>.
        </p>
        <Button className="mt-6 bg-white text-blue-700 hover:bg-blue-200">
          Contact Us
        </Button>
      </div>

      {/* Intro */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-6">
        <p>
          Are you looking for an adaptable way to build your company’s visual brand? 
          Nimble Auity helps you create compelling illustrations that establish emotional 
          connections with your customers. From logos and mascots to packaging and posters, 
          our illustrators ensure your message is communicated effectively.
        </p>
      </div>

      {/* Services */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Brand Illustration Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "User Guidance", desc: "Illustrations that guide users smoothly through digital experiences." },
            { title: "Onboarding Screens", desc: "Engaging walkthroughs with meaningful illustrations to explain features." },
            { title: "Showing User Progress", desc: "Creative visuals that represent progress and accomplishments." },
            { title: "Replacing Paragraphs", desc: "Transform long paragraphs into clear, impactful visuals." },
            { title: "Creating Mascots", desc: "Memorable mascots that bring your brand to life." },
            { title: "Apparel Illustrations", desc: "Print-ready artwork for clothing lines or collections." },
            { title: "Packaging Illustrations", desc: "Attractive packaging illustrations to boost brand visibility." },
            { title: "Poster Illustrations", desc: "Eye-catching posters designed for maximum impact." },
            { title: "Infographic Creation", desc: "Visually appealing infographics that simplify complex ideas." },
            { title: "Custom Illustrations", desc: "Unique artwork created from concepts or rough ideas." }
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

      {/* Process */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Brand Illustration Process</h2>
        <Accordion type="single" collapsible className="space-y-4">
          {[
            { step: "Requirement Gathering", desc: "We engage with you to fully understand your needs." },
            { step: "Project Planning", desc: "A detailed plan is created for smooth execution." },
            { step: "Sketching", desc: "Initial sketches prepared and shared for approval." },
            { step: "Illustration", desc: "Final illustrations created after sketch approval." },
            { step: "Quality Checking", desc: "Strict quality checks ensure flawless output." },
            { step: "Final Delivery", desc: "Secure delivery of finished illustrations." }
          ].map((item, i) => (
            <AccordionItem key={i} value={`step-${i}`}>
              <AccordionTrigger>{item.step}</AccordionTrigger>
              <AccordionContent>{item.desc}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose Nimble Auity for Brand Illustration?
        </h2>
        <ul className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 list-disc list-inside text-gray-700">
          <li>Affordable pricing for every budget</li>
          <li>Quick turnaround times</li>
          <li>Experienced team of illustrators</li>
          <li>Use of the latest design tools (Adobe, Corel, etc.)</li>
          <li>Strict quality control processes</li>
          <li>Comprehensive style guides for consistency</li>
          <li>Support for multiple file formats (TIFF, PNG, JPEG, GIF)</li>
          <li>Collaborative approach with clients</li>
        </ul>
      </div>

      {/* Case Studies */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Client Case Studies</h2>
        <div className="space-y-6">
          <Card className="rounded-2xl shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Nimble Provided Illustration Services for Apparel Manufacturer
              </h3>
              <p className="text-sm text-gray-600">
                A Paris-based men's apparel manufacturer received 200 illustrations with 
                60% cost savings. Deliverables were shared daily in EPS & PDF formats.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Nimble Delivered Illustrations for Denmark-based Writer
              </h3>
              <p className="text-sm text-gray-600">
                A leading Denmark-based writer required high-quality illustrations for a children’s book. 
                Our team delivered affordable and visually impressive results.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-blue-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto italic text-lg text-gray-700">
          “Thank you for the fast turnaround time and attention to detail. 
          We highly appreciate your hard work.”
        </blockquote>
        <p className="mt-4 font-semibold">CEO, Digital Marketing Agency, Australia</p>
      </div>

      {/* CTA */}
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to Illustrate Your Brand?
        </h2>
        <p className="mb-6">
          Nimble Auity’s illustrators deliver creative, engaging, and professional 
          brand illustrations that resonate with your audience.
        </p>
        <Button className="bg-blue-600 text-white hover:bg-blue-700">
          Get Started Today
        </Button>
      </div>
    </section>
  );
};

export default BrandIllustration;
